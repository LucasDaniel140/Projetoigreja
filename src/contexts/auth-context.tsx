
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';
import type { AuthChangeEvent, Session, User } from '@supabase/supabase-js';

// Define o tipo para o valor do contexto de autenticação
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<any>;
  logout: () => Promise<any>;
}

// Cria o contexto com um valor padrão inicial de `undefined`
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props para o AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tenta obter a sessão do usuário ao carregar o componente
    const getSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setLoading(false);
    }
    getSession();

    // Ouve mudanças no estado de autenticação (login, logout, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Limpa a inscrição ao desmontar o componente
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Função para realizar o login
  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  // Função para realizar o logout
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  // Monta o valor a ser fornecido pelo contexto
  const value = {
    user,
    loading,
    login,
    logout,
  };

  // Fornece o contexto para os componentes filhos
  // Não renderiza nada até que o estado de carregamento inicial seja concluído
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook customizado para usar o contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
