import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, Users, Handshake, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NovoAquiPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Seja Bem-Vindo!</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Ficamos felizes por você estar aqui. Este é o seu primeiro passo em uma jornada de fé e comunidade conosco.
        </p>
      </section>
      
      <Separator className="my-12" />

      <section>
        <h2 className="text-3xl font-headline font-bold text-center mb-8">Seus Primeiros Passos no Ministério</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
                <CardHeader>
                    <div className="mx-auto bg-accent rounded-full p-4 w-fit mb-2">
                        <Heart className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline">Conecte-se</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>Participe de nossos cultos e eventos para conhecer a família Vivendo a Palavra. Sua presença é uma alegria para nós!</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                     <div className="mx-auto bg-accent rounded-full p-4 w-fit mb-2">
                        <Users className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline">Faça Parte de um GC</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                   <p>Os Grupos de Crescimento (GCs) são pequenos grupos que se reúnem para estudar a Bíblia e compartilhar a vida. Encontre um perto de você!</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                     <div className="mx-auto bg-accent rounded-full p-4 w-fit mb-2">
                        <BookOpen className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline">Discipulado</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>Inicie o discipulado "Romanos 122" para fortalecer seus fundamentos na fé cristã e se preparar para o batismo.</p>
                     <Button variant="link" asChild className="mt-2"><Link href="/estudos">Saber Mais</Link></Button>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                     <div className="mx-auto bg-accent rounded-full p-4 w-fit mb-2">
                        <Handshake className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline">Sirva Conosco</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                   <p>Descubra seus dons e talentos servindo em um de nossos ministérios. Há sempre um lugar para você fazer a diferença.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <Separator className="my-12" />

       <section className="text-center bg-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-headline font-bold mb-4">Ainda tem dúvidas?</h2>
          <p className="text-muted-foreground mb-6">Nossa equipe pastoral está à disposição para conversar com você.</p>
          <Button asChild>
            <Link href="https://wa.me/5577998128008" target="_blank">Falar com um Pastor</Link>
          </Button>
        </section>

    </div>
  );
}
