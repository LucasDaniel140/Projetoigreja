
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBasket, MessageSquare } from "lucide-react";
import Link from 'next/link';

export default function AcoesSociaisPage() {
  const whatsappLink = "https://wa.me/5577999982750";

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Ações Sociais</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Nosso compromisso é servir a comunidade com amor e cuidado. Veja como atuamos e faça parte.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Pré-cadastro de Beneficiários</CardTitle>
            <CardDescription>
              Se você precisa de ajuda, entre em contato conosco. Nossa equipe está pronta para atender.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-8">
             <Button asChild size="lg">
              <Link href={whatsappLink} target="_blank">
                <MessageSquare className="mr-2 h-4 w-4" />
                Entrar em Contato
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <div className="flex justify-center mb-4">
                <ShoppingBasket className="w-12 h-12 text-primary"/>
            </div>
            <CardTitle className="font-headline text-2xl text-center">Doe uma Cesta Básica</CardTitle>
            <CardDescription className="text-center">
              Com R$ 100,00 você alimenta uma família. Sua doação é um gesto de amor que transforma vidas.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pt-8">
            <Button asChild size="lg">
              <Link href={whatsappLink} target="_blank">
                Fazer Doação
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
