import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedWelcome } from "@/components/AnimatedWelcome";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative flex items-center justify-center">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-30"
          data-ai-hint="church concert stage"
        />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <AnimatedWelcome />
             <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Você não está aqui por acaso! Você está aqui porque o próprio Deus te atraiu a este lugar. E uma das nossas maiores alegrias é receber você em nossa família e tê-lo como um irmão em Cristo!
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/quem-somos">
                <Button size="lg">
                  Nossa História
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl uppercase text-primary">Nossa Comunidade</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore as diferentes formas como servimos e nos conectamos.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center justify-items-center gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none mt-12">
            <Card className="bg-card border-border/50 hover:bg-secondary/80 transition-colors">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-2xl uppercase">Missões</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Apoiamos projetos missionários que levam esperança e transformação ao redor do mundo. Veja como você pode se envolver.</CardDescription>
                <Link href="/missoes" className="mt-4 inline-block">
                  <Button variant="link" className="px-0 text-primary">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-card border-border/50 hover:bg-secondary/80 transition-colors">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-2xl uppercase">Ações Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Nosso compromisso é com o bem-estar da nossa comunidade. Conheça nossos projetos e veja como ajudar.</CardDescription>
                <Link href="/acoes-sociais" className="mt-4 inline-block">
                  <Button variant="link" className="px-0 text-primary">Participe <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
