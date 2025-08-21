
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Home, Construction, BookOpen, HandHeart } from 'lucide-react';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
    { src: "https://i.imgur.com/xxngkjX.png", alt: "Crianças em Moçambique", dataAiHint: "african children" },
    { src: "https://i.imgur.com/deeqOsh.png", alt: "Comunidade em Moçambique", dataAiHint: "african community" },
    { src: "https://i.imgur.com/MaW2zJm.png", alt: "Voluntários da missão", dataAiHint: "mission volunteers" },
    { src: "https://i.imgur.com/aF7CFYC.png", alt: "Criança sorrindo", dataAiHint: "smiling african child" },
];

export default function MissoesPage() {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
    );

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] text-white">
        <Carousel
            plugins={[autoplayPlugin.current]}
            className="w-full h-full"
            opts={{ align: "start", loop: true }}
        >
            <CarouselContent>
                {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                    <div className="relative w-full h-[80vh]">
                        <Image 
                            src={image.src} 
                            alt={image.alt}
                            data-ai-hint={image.dataAiHint}
                            fill
                            className="object-cover"
                            priority={index === 0} // Prioritize loading the first image
                        />
                    </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-headline uppercase">
            Missão África
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Em Morrumbala, Moçambique, levamos amor de Cristo de forma prática, alimentando mais de 300 pessoas diariamente.
          </p>
          <Link href="https://wa.me/5577999567768" target="_blank">
            <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">Faça sua Doação</Button>
          </Link>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline"><span className="text-primary">Nossa</span> História</h2>
              <p className="text-muted-foreground">
                A Missão África nasceu do desejo de viver o amor de Cristo de forma prática. Em Morrumbala, Moçambique, encontramos famílias que enfrentavam a fome todos os dias. Com a ajuda da igreja e de pessoas generosas, hoje alimentamos mais de 300 pessoas diariamente e apoiamos mais de 10 bases missionárias na região.
              </p>
              <p className="text-muted-foreground">
                Mais do que comida, levamos dignidade: construímos espaços para cozinhar com segurança, entregamos roupas, chinelos, materiais escolares e apoiamos pastores locais para que continuem levando a Palavra de Deus.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Mtx4_XQpJ2c?si=aUGxVPWrOqYKb6Mu" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Impacto Section */}
      <section className="py-16 lg:py-24 bg-card text-card-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline">Nosso <span className="text-primary">Impacto</span></h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-secondary p-8 flex flex-col items-center justify-center text-secondary-foreground">
              <Users className="h-12 w-12 text-primary"/>
              <p className="text-5xl font-bold mt-4">300+</p>
              <p className="mt-2 text-muted-foreground">Pessoas alimentadas diariamente</p>
            </Card>
            <Card className="bg-secondary p-8 flex flex-col items-center justify-center text-secondary-foreground">
              <Home className="h-12 w-12 text-primary"/>
              <p className="text-5xl font-bold mt-4">10+</p>
              <p className="mt-2 text-muted-foreground">Bases missionárias apoiadas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* O Que Oferecemos Section */}
      <section className="py-16 lg:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline">O Que <span className="text-primary">Oferecemos</span></h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full">
                 <Image src="https://i.imgur.com/GzQ5Z2k.png" alt="Alimentação" width={32} height={32} />
              </div>
              <h3 className="mt-4 font-bold text-lg font-headline">Alimentação</h3>
              <p className="text-muted-foreground text-sm mt-1">Refeições nutritivas para famílias necessitadas</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Construction className="h-8 w-8 text-primary"/>
              </div>
              <h3 className="mt-4 font-bold text-lg font-headline">Infraestrutura</h3>
              <p className="text-muted-foreground text-sm mt-1">Espaços seguros para cozinhar e viver</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full">
                 <BookOpen className="h-8 w-8 text-primary"/>
              </div>
              <h3 className="mt-4 font-bold text-lg font-headline">Educação</h3>
              <p className="text-muted-foreground text-sm mt-1">Materiais escolares e apoio educacional</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="p-4 bg-primary/10 rounded-full">
                 <HandHeart className="h-8 w-8 text-primary"/>
              </div>
              <h3 className="mt-4 font-bold text-lg font-headline">Dignidade</h3>
              <p className="text-muted-foreground text-sm mt-1">Roupas, chinelos e cuidado integral</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seja Parte Desta Missão Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline">Seja Parte Desta Missão</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Essa missão é importante porque transforma realidades e mostra que Deus cuida através de pessoas dispostas a servir. E você pode fazer parte disso!
          </p>
          <div className="mt-8 bg-black/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-bold text-2xl font-headline">ADOTE UMA CRIANÇA</h3>
            <p className="mt-2">A partir de <span className="font-bold">R$ 30 por mês</span>, você garante a alimentação de uma criança por um mês inteiro.</p>
            <p className="mt-1 text-sm opacity-80">Você pode contribuir com o valor que Deus colocar no seu coração.</p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="https://wa.me/5577999567768" target="_blank">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/80">Doar Agora</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Citação Section */}
       <section className="py-16 bg-card text-card-foreground">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic font-headline">
             <p>Participe. Doe. Seja resposta.</p>
             <p className="mt-2">Porque servir é a forma mais bonita de amar.</p>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-sm text-gray-400">
        <p className="font-bold font-headline text-primary">MISSÃO ÁFRICA</p>
        <p className="text-xs">Transformando vidas através do amor de Cristo em Moçambique.</p>
        <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} Missão África. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
