
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DarkVeil from "@/components/DarkVeil";

export default function AdminLoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual authentication logic
        router.push('/admin/dashboard');
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
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Acesse o painel administrativo
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleLogin} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                        <Link
                            href="#"
                            className="ml-auto inline-block text-sm underline"
                        >
                            Esqueceu sua senha?
                        </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Entrar
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}
