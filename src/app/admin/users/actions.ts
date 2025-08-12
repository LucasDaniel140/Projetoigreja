
'use server';

import { supabase } from '@/lib/supabase/client';
import { revalidatePath } from 'next/cache';

// Tipagem para os dados do usuário
type UserData = {
  name: string;
  email: string;
  role: string;
  password?: string;
};

// Função auxiliar para verificar se o Supabase está disponível
function checkSupabase() {
    if (!supabase) {
        throw new Error('O cliente Supabase não está inicializado. Verifique suas credenciais.');
    }
}

// Buscar todos os usuários
export async function getUsers() {
  checkSupabase();
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar usuários:', error);
    throw new Error('Não foi possível buscar os usuários.');
  }

  return data;
}

// Adicionar um novo usuário
export async function addUser(userData: UserData) {
  checkSupabase();
  const { name, email, role, password } = userData;

  if (!password) {
    throw new Error('A senha é obrigatória para criar um novo usuário.');
  }

  // Primeiro, cria o usuário no Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        role
      }
    }
  });

  if (authError || !authData.user) {
    console.error('Erro de autenticação do Supabase:', authError);
    throw new Error(authError?.message || 'Não foi possível criar o usuário no sistema de autenticação.');
  }

  // Depois, insere os dados na tabela 'users'
  const { data, error } = await supabase
    .from('users')
    .insert([{ id: authData.user.id, name, email, role }])
    .select()
    .single();

  if (error) {
    console.error('Erro ao adicionar usuário no banco de dados:', error);
    // Se a inserção no banco de dados falhar, o usuário ainda existirá no Supabase Auth.
    // Isso é algo a ser tratado manualmente ou com uma função de servidor mais robusta.
    // A remoção da chamada admin.deleteUser corrige o erro de permissão imediato.
    throw new Error('Não foi possível salvar os dados do usuário.');
  }

  revalidatePath('/admin/users');
  return data;
}

// Atualizar um usuário existente
export async function updateUser(userId: string, userData: Partial<UserData>) {
    checkSupabase();
    // Remove a senha do objeto para não tentar atualizá-la no banco
    const { password, ...updateData } = userData;

    const { data, error } = await supabase
        .from('users')
        .update(updateData)
        .eq('id', userId)
        .select()
        .single();

    if (error) {
        console.error('Erro ao atualizar usuário:', error);
        throw new Error('Não foi possível atualizar o usuário.');
    }

    revalidatePath('/admin/users');
    return data;
}

// Remover um usuário
export async function deleteUser(userId: string) {
  checkSupabase();
  // Primeiro, remove da tabela 'users'
  const { error: dbError } = await supabase
    .from('users')
    .delete()
    .eq('id', userId);

  if (dbError) {
    console.error('Erro ao remover do banco de dados:', dbError);
    throw new Error('Não foi possível remover os dados do usuário.');
  }

   // Depois, remove do Supabase Auth (requer privilégios de admin)
   // NOTA: A exclusão no Auth via SDK do cliente não é padrão.
   // Isso geralmente é feito em uma Cloud Function com privilégios de serviço.
   // Por simplicidade aqui, estamos apenas removendo do banco de dados.
   // Para uma implementação completa, seria necessário uma chamada a uma edge function.
   console.log(`Usuário ${userId} removido da tabela. A remoção do Auth precisa ser tratada separadamente.`);

  revalidatePath('/admin/users');
}
