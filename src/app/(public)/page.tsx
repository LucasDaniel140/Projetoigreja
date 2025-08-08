
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, HeartHandshake, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedWelcome } from "@/components/AnimatedWelcome";
import { InteractivePhone } from "@/components/InteractivePhone";
import { InteractiveCard } from '@/components/InteractiveCard';
import { getVideoUrls } from '../admin/media/actions';

export default function Home() {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [videos, setVideos] = useState([
    "https://www.youtube.com/embed/vGohlJdcGvE?si=SOirILXR5lEz-LLv",
    "https://www.youtube.com/embed/WwaS9A4c0YM?si=8jRVGh4rG0Cprg3n",
    "https://www.youtube.com/embed/_a2gUBNM0dE?si=SsU_bSkgAk94UTLz",
    "https://www.youtube.com/embed/2tSS_lGQCQ0?si=efV3Mo5lqPCA7MkB"
  ]);

  const appLocationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchVideos() {
      const videoUrls = await getVideoUrls();
      if(videoUrls && videoUrls.length === 4 && videoUrls.every(url => url)) {
        setVideos(videoUrls);
      }
    }
    fetchVideos();
  }, []);

  useEffect(() => {
    const container = appLocationRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      
      const localX = clientX - rect.left;
      const localY = clientY - rect.top;

      const rotateX = (localY / rect.height - 0.5) * -30;
      const rotateY = (localX / rect.width - 0.5) * 30;

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    };
    
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  }, []);

  const extractSrcFromIframe = (iframeCode: string) => {
    const match = iframeCode.match(/src="([^"]+)"/);
    return match ? match[1] : "";
  };


  return (
    <div className="w-full">
      <section id="hero-section" className="w-full py-12 md:py-24 lg:py-32 bg-black relative flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
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
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <InteractiveCard>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-headline text-2xl uppercase">Missão Africa</h3>
              <p className="flex-grow text-muted-foreground mt-2">Apoiamos projetos que levam esperança ao redor do mundo. Envolva-se!</p>
              <Link href="/missoes" className="mt-4 inline-block">
                <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </InteractiveCard>
            <InteractiveCard>
              <HeartHandshake className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-headline text-2xl uppercase">Reação</h3>
              <p className="flex-grow text-muted-foreground mt-2">Nosso projeto social para abençoar a comunidade local. Conheça e ajude.</p>
              <Link href="/acoes-sociais" className="mt-4 inline-block">
                <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </InteractiveCard>
            <InteractiveCard>
              <Rocket className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-headline text-2xl uppercase">Visionários</h3>
              <p className="flex-grow text-muted-foreground mt-2">Uma plataforma para visionários que querem expandir o Reino.</p>
               <Link href="#" target="_blank" className="mt-4 inline-block">
                <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Acessar Plataforma <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </InteractiveCard>
            <InteractiveCard>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-headline text-2xl uppercase">Estudos</h3>
              <p className="flex-grow text-muted-foreground mt-2">Aprofunde seu conhecimento na Palavra com nossos materiais e cursos.</p>
              <Link href="/estudos" className="mt-4 inline-block">
                <Button variant="link" className="px-0 text-primary transition-transform duration-200 hover:scale-105">Acessar <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </InteractiveCard>
          </div>
        </div>
      </section>

      <section id="app-location" ref={appLocationRef} className="w-full py-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                <div className="space-y-4 text-center md:text-left">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">Conecte-se</div>
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Leve a Igreja com Você</h2>
                    <p className="text-muted-foreground md:text-xl/relaxed max-w-xl mx-auto md:mx-0">
                    Baixe nosso aplicativo para ter acesso a mensagens, estudos, agenda de eventos e muito mais. Fique conectado com a nossa comunidade onde quer que esteja.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                    <Link href="https://apps.apple.com/br/app/igreja-vivendo-a-palavra/id6473058010" target="_blank">
                        <Image src="https://i.imgur.com/juZArY5.png" alt="Download on the App Store" width={160} height={53} />
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=br.com.sistemaprover.igrejavivendoapalavra&pcampaignid=web_share" target="_blank">
                       <Image src="https://i.imgur.com/Qpz1saX.png" alt="Get it on Google Play" width={160} height={53} />
                    </Link>
                    </div>
                </div>
                <div className="w-full max-w-sm h-full flex items-center justify-center mx-auto">
                    <InteractivePhone transform={transform} />
                </div>
            </div>
        </div>
      </section>
      
       <section className="w-full py-12">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline mb-4">Onde nos encontrar</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl mb-6">Visite-nos</h2>
                <div className="h-full w-full rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7802.747970446119!2d-45.80001752432361!3d-12.086529888153335!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x934a713399ab35a1%3A0xf279243579f3a83b!2sMinist%C3%A9rio%20Vivendo%20a%20Palavra!5e0!3m2!1spt-PT!2sus!4v1754596320009!5m2!1spt-PT!2sus"
                        width="100%"
                        height="100%"
                        className="aspect-video"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">Fique por dentro</div>
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl mt-4 mb-6">Nossos Momentos</h2>
                 <div className="grid grid-cols-2 gap-4 mt-4">
                  {videos.map((video, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <iframe 
                        className="w-full h-full" 
                        src={extractSrcFromIframe(video) || video} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                      </iframe>
                    </div>
                  ))}
                 </div>
            </div>
        </div>
      </section>

    </div>
  );
}
