
import { createClient } from '@supabase/supabase-js';

// URL do projeto Supabase fornecida pelo usuário.
const supabaseUrl = 'https://wchizhixspqfsthajlir.supabase.co';
// A chave anônima (pública) é carregada das variáveis de ambiente.
// Certifique-se de que esta variável está definida no seu ambiente (ex: .env.local).
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabaseInstance: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  try {
    // Tenta criar o cliente apenas se a URL e a chave forem válidas
    new URL(supabaseUrl);
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (error) {
    console.warn('URL do Supabase inválida. O cliente Supabase não foi inicializado.');
  }
} else {
  console.warn('As credenciais do Supabase não foram definidas. Por favor, adicione NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY ao seu ambiente. O cliente Supabase não foi inicializado.');
}

export const supabase = supabaseInstance;
