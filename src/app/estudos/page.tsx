"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Heart, Hand, GraduationCap, MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const studies = [
  {
    title: "Estudo de Romanos 122",
    description: "Uma análise profunda da carta de Paulo aos Romanos, explorando temas como justificação pela fé, a soberania de Deus e a vida no Espírito.",
    type: "text",
    icon: <Book className="h-6 w-6 text-primary" />,
    paid: false,
    details: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>Este estudo aprofundado oferece uma jornada versículo por versículo através de um dos livros mais transformadores da Bíblia.</p>
        <p><strong>Tópicos abordados:</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>A Doutrina da Justificação pela Fé.</li>
          <li>A Vida no Espírito Santo.</li>
          <li>O Papel de Israel no Plano de Deus.</li>
          <li>Aplicações práticas para a vida cristã diária.</li>
        </ul>
        <Button asChild>
          <Link href="#">
            <MessageSquare className="mr-2 h-4 w-4" />
            Falar com Responsável
          </Link>
        </Button>
      </div>
    )
  },
  {
    title: "Curso de Libras",
    description: "Aprenda a Língua Brasileira de Sinais e ajude a tornar nossa comunidade mais inclusiva e acessível.",
    type: "video",
    icon: <Hand className="h-6 w-6 text-primary" />,
    paid: true,
    details: (
        <div className="space-y-4 text-sm text-muted-foreground">
            <p>Um curso completo para quem deseja se comunicar em Libras e servir à comunidade surda. Não é necessário conhecimento prévio.</p>
            <p><strong>Módulos do curso:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Módulo 1: Alfabeto e Saudações Básicas.</li>
                <li>Módulo 2: Vocabulário Essencial do Cotidiano.</li>
                <li>Módulo 3: Estrutura Gramatical da Libras.</li>
                <li>Módulo 4: Louvor e Termos Bíblicos em Libras.</li>
            </ul>
             <Button asChild>
                <Link href="#">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Falar com Responsável
                </Link>
            </Button>
        </div>
    )
  },
  {
    title: "Teologia",
    description: "Aprofunde seu conhecimento teológico com nosso curso abrangente sobre as doutrinas fundamentais da fé cristã.",
    type: "text",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    paid: true,
    details: (
        <div className="space-y-4 text-sm text-muted-foreground">
            <p>Ideal para líderes, professores e todos que desejam solidificar sua base teológica.</p>
            <p><strong>Áreas de estudo:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Teologia Sistemática: As grandes doutrinas da fé.</li>
                <li>Hermenêutica: A arte de interpretar as Escrituras.</li>
                <li>História da Igreja: Dos apóstolos aos dias de hoje.</li>
                <li>Apologética: Defendendo a fé cristã.</li>
            </ul>
             <Button asChild>
                <Link href="#">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Falar com Responsável
                </Link>
            </Button>
        </div>
    )
  },
    {
    title: "Curso de Casais",
    description: "Fortaleça seu relacionamento e construa um casamento saudável com base nos princípios bíblicos.",
    type: "video",
    icon: <Heart className="h-6 w-6 text-primary" />,
    paid: false,
    details: (
        <div className="space-y-4 text-sm text-muted-foreground">
            <p>Ferramentas práticas e ensinamentos bíblicos para todos os estágios do casamento.</p>
            <p><strong>Temas abordados:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Comunicação e Resolução de Conflitos.</li>
                <li>Finanças à Luz da Bíblia.</li>
                <li>Intimidade e Companheirismo.</li>
                <li>Criando Filhos nos Caminhos do Senhor.</li>
            </ul>
             <Button asChild>
                <Link href="#">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Falar com Responsável
                </Link>
            </Button>
        </div>
    )
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

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
            {studies.map((study, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
                <Card className="h-full flex flex-col hover:bg-secondary/80 transition-colors w-full overflow-hidden">
                    <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>div>div]:text-primary">
                        <CardHeader className="flex flex-row items-center gap-4 w-full">
                            {study.icon}
                            <div className="flex-1 text-left">
                                <CardTitle className="font-headline text-xl">{study.title}</CardTitle>
                                <CardDescription className="mt-1">{study.description}</CardDescription>
                            </div>
                            <CardFooter className="p-0 pl-4">
                                {study.paid && <Badge variant="secondary">Pago</Badge>}
                            </CardFooter>
                        </CardHeader>
                    </AccordionTrigger>
                    <AccordionContent>
                        <CardContent className="pt-0">
                         {study.details}
                        </CardContent>
                    </AccordionContent>
                </Card>
            </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
