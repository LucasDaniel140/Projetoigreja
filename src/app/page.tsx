
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Globe, HeartHandshake, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedWelcome } from "@/components/AnimatedWelcome";
import { InteractivePhone } from "@/components/InteractivePhone";

const youtubeVideos = [
  {
    title: "Culto de Domingo",
    embedUrl: "https://www.youtube.com/embed/vGohlJdcGvE?si=XT-2GFDTaMBVsrZk&amp;controls=0"
  },
  {
    title: "Estudo Bíblico",
    embedUrl: "https://www.youtube.com/embed/ZkK-YIfmoz0?si=libM6vCTieK_yus3&amp;controls=0"
  },
   {
    title: "Série Especial",
    embedUrl: "https://www.youtube.com/embed/2tSS_lGQCQ0?si=mSAO7-mEtusE5af4&amp;controls=0"
  },
  {
    title: "Momentos de Adoração",
    embedUrl: "https://www.youtube.com/embed/_a2gUBNM0dE?si=5Y2YvH2Mgph2jzoq&amp;controls=0"
  }
]


export default function Home() {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const rotateX = (clientY / innerHeight - 0.5) * -30;
    const rotateY = (clientX / innerWidth - 0.5) * 30;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="w-full">
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
      
      <section id="features" className="w-full py-12 bg-background flex items-center justify-center">
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
                <p className="flex-grow text-muted-foreground">Apoiamos projetos que levam esperança ao redor do mundo. Envolva-se!</p>
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
                <p className="flex-grow text-muted-foreground">Nosso projeto social para abençoar a comunidade local. Conheça e ajude.</p>
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
                <p className="flex-grow text-muted-foreground">Uma plataforma para visionários que querem expandir o Reino.</p>
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
                <p className="flex-grow text-muted-foreground">Aprofunde seu conhecimento na Palavra com nossos materiais e cursos.</p>
                <Link href="/estudos" className="mt-4 inline-block">
                  <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Acessar <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="app-location" className="w-full py-12">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">Conecte-se</div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Leve a Igreja com Você</h2>
            <p className="text-muted-foreground md:text-xl/relaxed max-w-xl mx-auto md:mx-0">
              Baixe nosso aplicativo para ter acesso a mensagens, estudos, agenda de eventos e muito mais. Fique conectado com a nossa comunidade onde quer que esteja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
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
          </div>
          <div className="w-full h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center">
            <InteractivePhone transform={transform} />
          </div>
        </div>
      </section>
      
      <section className="w-full py-12">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-start">
            <div className="text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline mb-4">Onde nos encontrar</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Visite-nos</h2>
                 <p className="text-muted-foreground mt-2 mb-6 max-w-xl mx-auto">
                    Estamos ansiosos para receber você em nossa casa.
                </p>
                <div className="h-full w-full rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7802.747970446119!2d-45.80001752432361!3d-12.086529888153335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x934a713399ab35a1%3A0xf279243579f3a83b!2sMinist%C3%A9rio%20Vivendo%20a%20Palavra!5e0!3m2!1spt-PT!2sus!4v1754596320009!5m2!1spt-PT!2sus"
                        width="100%"
                        height="100%"
                        className="aspect-video"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">Fique por dentro</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl mt-4">Assista Nossas Mensagens</h2>
                <p className="text-muted-foreground mt-2 mb-6 max-w-xl mx-auto">
                    Acompanhe nossas últimas pregações, estudos e momentos de louvor em nosso canal do YouTube.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {youtubeVideos.map((video, index) => (
                        <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300 group">
                           {video.embedUrl ? (
                                <div className="relative aspect-video">
                                    <iframe
                                        src={video.embedUrl}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></iframe>
                                </div>
                            ) : (
                                <Link href={video.videoUrl!} target="_blank">
                                    <div className="relative aspect-video">
                                        <Image 
                                            src={video.imageUrl!} 
                                            alt={video.title} 
                                            data-ai-hint={video.dataAiHint}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

    

    