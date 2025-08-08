
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual authentication logic
        router.push('/admin/dashboard');
    }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
                 <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
                    <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={200} height={40} className="h-10 w-auto" />
                </Link>
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                    Acesse o painel administrativo
                </p>
            </div>
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
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Image"
          data-ai-hint="church interior"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
