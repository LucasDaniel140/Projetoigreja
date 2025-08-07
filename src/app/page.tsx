import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  IgrejaConectada: Conectando Vidas, Servindo com Amor.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Bem-vindo a um lugar de fé, comunidade e propósito. Descubra nossos ministérios, eventos e como você pode fazer parte da nossa família.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/quem-somos">
                  <Button size="lg">
                    Conheça Nossa História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/eventos">
                  <Button size="lg" variant="outline">
                    Próximos Eventos
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="church congregation worship"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Nossa Comunidade em Ação</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore as diferentes formas como servimos e nos conectamos.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Missões</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Apoiamos projetos missionários que levam esperança e transformação ao redor do mundo. Veja como você pode se envolver.</CardDescription>
                <Link href="/missoes" className="mt-4 inline-block">
                  <Button variant="link" className="px-0">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                 <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Eventos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>De cultos a conferências e atividades comunitárias, há sempre algo acontecendo. Fique por dentro da nossa agenda.</CardDescription>
                <Link href="/eventos" className="mt-4 inline-block">
                  <Button variant="link" className="px-0">Ver Calendário <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline text-2xl">Ações Sociais</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Nosso compromisso é com o bem-estar da nossa comunidade. Conheça nossos projetos e veja como ajudar.</CardDescription>
                <Link href="/acoes-sociais" className="mt-4 inline-block">
                  <Button variant="link" className="px-0">Participe <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
