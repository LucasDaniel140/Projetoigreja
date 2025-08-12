
import { createClient } from '@supabase/supabase-js';

// ATENÇÃO: Substitua os valores abaixo pelas suas credenciais do Supabase.
// Você pode encontrá-las no painel do seu projeto Supabase em Configurações > API.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'SUA_URL_AQUI';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'SUA_CHAVE_ANON_AQUI';

if (!supabaseUrl || supabaseUrl === 'SUA_URL_AQUI') {
  console.warn('Supabase URL não foi definida. Por favor, adicione NEXT_PUBLIC_SUPABASE_URL ao seu arquivo .env.local ou substitua no código.');
}

if (!supabaseAnonKey || supabaseAnonKey === 'SUA_CHAVE_ANON_AQUI') {
   console.warn('Supabase Anon Key não foi definida. Por favor, adicione NEXT_PUBLIC_SUPABASE_ANON_KEY ao seu arquivo .env.local ou substitua no código.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
