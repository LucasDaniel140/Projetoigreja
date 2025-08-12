
import { createClient } from '@supabase/supabase-js';

// ATENÇÃO: Substitua os valores abaixo pelas suas credenciais do Supabase.
// Você pode encontrá-las no painel do seu projeto Supabase em Configurações > API.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'SUA_URL_AQUI';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'SUA_CHAVE_ANON_AQUI';

let supabaseInstance: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseUrl !== 'SUA_URL_AQUI' && supabaseAnonKey && supabaseAnonKey !== 'SUA_CHAVE_ANON_AQUI') {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('As credenciais do Supabase não foram definidas. Por favor, adicione NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY ao seu ambiente ou substitua os valores em src/lib/supabase/client.ts. O cliente Supabase não foi inicializado.');
}

export const supabase = supabaseInstance;
