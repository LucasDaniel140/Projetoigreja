'use server';

import { google } from 'googleapis';
import { z } from 'zod';

// Define o schema para validação dos dados do formulário
const beneficiarySchema = z.object({
  fullName: z.string(),
  cpf: z.string(),
  birthDate: z.date(),
  address: z.string(),
  familySize: z.coerce.number(),
  phone: z.string(),
});

// Essa é a função principal que será chamada pelo formulário.
// Ela recebe os dados, valida, e envia para a planilha.
export async function addBeneficiaryToSheet(formData: FormData) {
  try {
    // Converte os dados do FormData para um objeto simples
    const rawData = {
      fullName: formData.get('fullName'),
      cpf: formData.get('cpf'),
      // O campo de data vem como string, então convertemos para um objeto Date
      birthDate: new Date(formData.get('birthDate') as string),
      address: formData.get('address'),
      familySize: formData.get('familySize'),
      phone: formData.get('phone'),
    };

    // Valida os dados usando o schema do Zod
    const validatedData = beneficiarySchema.parse(rawData);

    // Autentica com a API do Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });
    
    // Formata a data para o padrão brasileiro antes de inserir na planilha
    const formattedBirthDate = validatedData.birthDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // Adiciona uma nova linha na planilha
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1', // A API vai encontrar a próxima linha vazia automaticamente
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            validatedData.fullName,
            validatedData.cpf,
            formattedBirthDate,
            validatedData.address,
            validatedData.familySize,
            validatedData.phone,
            new Date().toLocaleString('pt-BR'), // Adiciona um timestamp de quando foi registrado
          ],
        ],
      },
    });

    return { success: true, message: 'Cadastro enviado com sucesso!' };

  } catch (error) {
    console.error('Erro ao adicionar na planilha:', error);
    // Retorna uma mensagem de erro genérica para o usuário
    if (error instanceof z.ZodError) {
        return { success: false, message: 'Erro de validação nos dados enviados.' };
    }
    return { success: false, message: 'Ocorreu um erro ao enviar seu cadastro. Tente novamente.' };
  }
}
