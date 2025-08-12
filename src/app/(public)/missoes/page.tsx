
"use client";

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Home, Heart, Utensils, Construction, BookOpen, HandHeart, MapPin, InfinityIcon } from 'lucide-react';
import Link from 'next/link';

export default function MissoesPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] text-white">
        <Image 
          src="https://placehold.co/1920x1080.png" 
          alt="Volunteers helping in Africa"
          data-ai-hint="volunteers giving food"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-lg font-headline tracking-widest text-primary uppercase">Missão África</p>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mt-2 uppercase">Transformando<br/>Vidas em África</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Em Morrumbala, Moçambique, levamos amor de Cristo de forma prática, alimentando mais de 300 pessoas diariamente.
          </p>
          <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">Faça sua Doação</Button>
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
            <div className="relative">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Volunteers"
                data-ai-hint="volunteers praying"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4">
                <Button variant="secondary" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                  <MapPin className="mr-2 h-4 w-4" />
                  Morrumbala, Moçambique
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Impacto Section */}
      <section className="py-16 lg:py-24 bg-card text-card-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline">Nosso <span className="text-primary">Impacto</span></h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <Card className="bg-secondary p-8 flex flex-col items-center justify-center text-secondary-foreground">
              <InfinityIcon className="h-12 w-12 text-primary"/>
              <p className="text-5xl font-bold mt-4">∞</p>
              <p className="mt-2 text-muted-foreground">Vidas transformadas</p>
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
                <Utensils className="h-8 w-8 text-primary"/>
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
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/80">Doar Agora</Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">Saiba Mais</Button>
          </div>
        </div>
      </section>

      {/* Citação Section */}
      <section className="py-16 bg-card text-card-foreground">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl italic font-headline">
            "Participe. Doe. Seja resposta. <br/> Porque servir é a forma mais bonita de amar."
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

