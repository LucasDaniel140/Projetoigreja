
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';

// Define o tipo para o valor do contexto de autenticação
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<any>;
  logout: () => Promise<any>;
  signUp: (name: string, email: string, pass: string) => Promise<any>;
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
    // Tenta obter o usuário do localStorage ao carregar
    try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem('user');
    }
    setLoading(false);
  }, []);

  // Função para realizar o login
  const login = async (email: string, password: string) => {
    if (email === 'adminvp' && password === 'adminvp') {
      const userData = { id: 'local-admin', email: 'adminvp', roles: ['admin'] };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData as User);
    } else {
      throw new Error('Credenciais inválidas.');
    }
  };

  // Função para realizar o logout
  const logout = async () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // A função de registro não faz mais nada, mas é mantida para não quebrar o formulário
  const signUp = async (name: string, email: string, password: string) => {
    throw new Error('A criação de novos usuários não é permitida.');
  };

  // Monta o valor a ser fornecido pelo contexto
  const value = {
    user,
    loading,
    login,
    logout,
    signUp,
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
