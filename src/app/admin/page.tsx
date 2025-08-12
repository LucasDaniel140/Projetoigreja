
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DarkVeil from "@/components/DarkVeil";
import { useAuth } from "@/contexts/auth-context";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
    const router = useRouter();
    const { login, signUp } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        try {
            if (isSignUp) {
                await signUp(name, email, password);
                // Optionally, automatically log in the user or show a "check your email" message.
                // For this implementation, we'll show a success message and switch to login view.
                setIsSignUp(false);
                alert("Conta criada com sucesso! Por favor, faça o login.");
            } else {
                await login(email, password);
                router.push('/admin/dashboard');
            }
        } catch (err: any) {
            setError(err.message || 'Ocorreu uma falha. Verifique suas credenciais.');
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DarkVeil />
        </div>
        <Card className="w-full max-w-sm z-10 bg-background/80 backdrop-blur-sm">
            <CardHeader className="text-center">
                 <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
                    <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={200} height={40} className="h-10 w-auto" />
                </Link>
                <CardTitle className="text-2xl">{isSignUp ? "Criar Conta" : "Login"}</CardTitle>
                <CardDescription>
                    {isSignUp ? "Crie uma nova conta para acessar o painel" : "Acesse o painel administrativo"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Erro</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                     {isSignUp && (
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Seu nome completo"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    )}
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                         {!isSignUp && (
                            <Link
                                href="#"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Esqueceu sua senha?
                            </Link>
                         )}
                        </div>
                        <Input 
                            id="password" 
                            type="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (isSignUp ? 'Criando...' : 'Entrando...') : (isSignUp ? 'Criar Conta' : 'Entrar')}
                    </Button>
                </form>
                 <div className="mt-4 text-center text-sm">
                    {isSignUp ? (
                        <>
                           Já tem uma conta?{" "}
                            <button onClick={() => setIsSignUp(false)} className="underline">
                                Faça login
                            </button>
                        </>
                    ) : (
                        <>
                            Não tem uma conta?{" "}
                            <button onClick={() => setIsSignUp(true)} className="underline">
                                Crie uma conta
                            </button>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
