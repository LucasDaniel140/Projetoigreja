
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Se o carregamento terminou e não há usuário, redireciona para a página de login
    if (!loading && !user) {
      router.push('/admin');
    }
  }, [user, loading, router]);

  // Enquanto está carregando, pode-se mostrar um spinner ou nada
  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Carregando...</p>
        </div>
    );
  }

  // Se houver um usuário, renderiza os componentes filhos (a página protegida)
  if (user) {
    return <>{children}</>;
  }

  // Se não houver usuário e ainda não redirecionou, retorna null para não renderizar nada
  return null;
}
