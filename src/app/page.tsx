import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Globe, HeartHandshake, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedWelcome } from "@/components/AnimatedWelcome";

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://i.imgur.com/o6GrCN0.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
        <div className="container px-4 md:px-6 relative flex flex-col justify-center items-center h-full flex-grow w-full">
          <AnimatedWelcome />
          <div className="flex flex-col items-center space-y-4 text-center mt-8">
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/quem-somos">
                <Button size="lg" variant="outline" className="bg-white text-black hover:bg-white/90 transition-transform duration-200 hover:scale-105">
                  Nossa História
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl uppercase text-primary">Nossa Comunidade</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore as diferentes formas como servimos e nos conectamos.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col bg-card border-border/50 hover:bg-secondary/80 transition-colors w-full">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-2xl uppercase">Missão Africa</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">Apoiamos projetos que levam esperança ao redor do mundo. Envolva-se!</CardDescription>
                <Link href="/missoes" className="mt-4 inline-block">
                  <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-card border-border/50 hover:bg-secondary/80 transition-colors w-full">
              <CardHeader>
                <HeartHandshake className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-2xl uppercase">Reação</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">Nosso projeto social para abençoar a comunidade local. Conheça e ajude.</CardDescription>
                <Link href="/acoes-sociais" className="mt-4 inline-block">
                  <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-card border-border/50 hover:bg-secondary/80 transition-colors w-full">
              <CardHeader>
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-2xl uppercase">Visionários</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">Uma plataforma para visionários que querem expandir o Reino.</CardDescription>
                 <Link href="#" target="_blank" className="mt-4 inline-block">
                  <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Acessar Plataforma <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="flex flex-col bg-card border-border/50 hover:bg-secondary/80 transition-colors w-full">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="font-headline text-2xl uppercase">Estudos</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="flex-grow">Aprofunde seu conhecimento na Palavra com nossos materiais e cursos.</CardDescription>
                <Link href="/estudos" className="mt-4 inline-block">
                  <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Acessar <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
