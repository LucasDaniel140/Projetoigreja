"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Heart, Hand, GraduationCap } from "lucide-react";
import Link from "next/link";

const studies = [
  {
    title: "Estudo de Romanos",
    description: "Uma análise profunda da carta de Paulo aos Romanos, explorando temas como justificação pela fé, a soberania de Deus e a vida no Espírito.",
    type: "text",
    icon: <Book className="h-6 w-6 text-primary" />,
    link: "#",
    paid: false,
  },
  {
    title: "Curso de Libras",
    description: "Aprenda a Língua Brasileira de Sinais e ajude a tornar nossa comunidade mais inclusiva e acessível.",
    type: "video",
    icon: <Hand className="h-6 w-6 text-primary" />,
    link: "#",
    paid: true,
  },
  {
    title: "Teologia",
    description: "Aprofunde seu conhecimento teológico com nosso curso abrangente sobre as doutrinas fundamentais da fé cristã.",
    type: "text",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    link: "#",
    paid: true,
  },
    {
    title: "Curso de Casais",
    description: "Fortaleça seu relacionamento e construa um casamento saudável com base nos princípios bíblicos.",
    type: "video",
    icon: <Heart className="h-6 w-6 text-primary" />,
    link: "#",
    paid: false,
  },
];

export default function EstudosPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Estudos Bíblicos</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Recursos para aprofundar seu conhecimento na Palavra de Deus e fortalecer sua fé.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studies.map((study, index) => (
          <Link href={study.link} key={index} className="flex">
            <Card className="h-full flex flex-col hover:bg-secondary/80 transition-colors cursor-pointer w-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {study.icon}
                <div className="flex-1">
                  <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{study.description}</CardDescription>
              </CardContent>
              <CardFooter>
                {study.paid && <Badge variant="secondary">Pago</Badge>}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
