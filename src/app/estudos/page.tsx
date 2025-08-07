"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Film, Mic } from "lucide-react";
import Link from "next/link";

const studies = [
  {
    title: "Estudo sobre Gênesis",
    description: "Uma jornada pelo primeiro livro da Bíblia, explorando a criação, a queda e as promessas de Deus.",
    type: "text",
    icon: <Book className="h-6 w-6 text-primary" />,
    link: "#",
  },
  {
    title: "Série de Pregações: O Sermão do Monte",
    description: "Estudo aprofundado sobre os ensinamentos de Jesus em Mateus 5-7.",
    type: "video",
    icon: <Film className="h-6 w-6 text-primary" />,
    link: "#",
  },
  {
    title: "Podcast: Heróis da Fé",
    description: "Conheça a história e o legado dos grandes homens e mulheres de fé da Bíblia.",
    type: "audio",
    icon: <Mic className="h-6 w-6 text-primary" />,
    link: "#",
  },
    {
    title: "Devocional: Manhãs com o Espírito Santo",
    description: "Comece seu dia com uma reflexão e oração para fortalecer sua conexão com Deus.",
    type: "text",
    icon: <Book className="h-6 w-6 text-primary" />,
    link: "#",
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
          <Link href={study.link} key={index}>
            <Card className="h-full flex flex-col hover:bg-secondary/80 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center gap-4">
                {study.icon}
                <div className="flex-1">
                  <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{study.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
