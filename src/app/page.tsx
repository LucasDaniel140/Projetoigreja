
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Globe, HeartHandshake, Rocket, Smartphone, MapPin } from "lucide-react";
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
                <Button size="lg" className="bg-white text-black hover:bg-white/90 transition-transform duration-200 hover:scale-105">
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

      <section id="app-location" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">Conecte-se</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Leve a Igreja com Você</h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Baixe nosso aplicativo para ter acesso a mensagens, estudos, agenda de eventos e muito mais. Fique conectado com a nossa comunidade onde quer que esteja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="https://apps.apple.com/br/app/igreja-vivendo-a-palavra/id6473058010" target="_blank">
                <Button size="lg" className="w-full sm:w-auto">
                    <Image src="https://i.imgur.com/wyj5M5q.png" alt="App Store" width={24} height={24} className="dark:invert mr-2"/>
                    App Store
                </Button>
              </Link>
               <Link href="https://play.google.com/store/apps/details?id=br.com.sistemaprover.igrejavivendoapalavra&pcampaignid=web_share" target="_blank">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Image src="https://www.clker.com/cliparts/J/J/B/Y/A/M/google-play-logo-md.png" alt="Google Play" width={24} height={24} className="mr-2"/>
                    Google Play
                </Button>
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">Visite-nos</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl mt-4">Nosso Endereço</h2>
                <p className="text-muted-foreground mt-2">
                R. Rui Barbosa, 1296 - Lot. Mimoso Doeste I, Luís Eduardo Magalhães - BA, 47850-000
                </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-full min-h-[400px] md:min-h-[500px]">
             <div className="perspective-container">
                <div className="phone-3d-container">
                    <Image
                    src="https://i.imgur.com/8Ipq9Na.png"
                    alt="Aplicativo da Igreja"
                    width={300}
                    height={600}
                    className="rounded-[3rem] shadow-2xl border-4 border-black"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
         <iframe
            src="https://maps.google.com/maps?q=R.%20Rui%20Barbosa%2C%201296%20-%20Lot.%20Mimoso%20Doeste%20I%2C%20Lu%C3%ADs%20Eduardo%20Magalh%C3%A3es%20-%20BA%2C%2047850-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
      </section>
    </>
  );
}
