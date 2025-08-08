"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Book, Heart, Hand, GraduationCap, MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const studies = [
  {
    title: "Estudo de Romanos 122",
    type: "text",
    icon: <Book className="h-6 w-6 text-primary" />,
    paid: false,
    details: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>Romanos 122 é um discipulado individual pensado para quem decidiu seguir Jesus e deseja se batizar.</p>
        <p>Um tempo de ensino simples e profundo, onde aprendemos os fundamentos da fé cristã e o que significa ser um verdadeiro discípulo.</p>
        <Button asChild>
          <Link href="#" target="_blank">
            <MessageSquare className="mr-2 h-4 w-4" />
            Falar com Responsável
          </Link>
        </Button>
      </div>
    )
  },
  {
    title: "Curso de Libras",
    type: "video",
    icon: <Hand className="h-6 w-6 text-primary" />,
    paid: true,
    details: (
        <div className="space-y-4 text-sm text-muted-foreground">
            <p>Todas as terças-feiras, oferecemos duas turmas presenciais: nível iniciante e nível intermediário. Nosso maior desejo é que a comunidade surda possa conhecer e viver a Palavra de Deus de coração aberto. Queremos levar o evangelho para todos, com amor e cuidado, construindo uma igreja onde ninguém fique de fora.</p>
            <p><strong>As matrículas estão abertas! Venha fazer parte dessa linda missão conosco.</strong></p>
             <Button asChild>
                <Link href="https://wa.me/5577999709717" target="_blank">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Falar com Responsável
                </Link>
            </Button>
        </div>
    )
  },
  {
    title: "Teologia",
    type: "text",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    paid: true,
    details: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>O IFC (Instituto de Formação Cristã) é um curso bíblico que se destaca pelo ensino da Palavra revelada, um ensino prático que fortalece os alicerces em Cristo e leva o cristão à maturidade espiritual.</p>
          <p>Com conteúdos que transformam a vida pessoal e ministerial, o curso é oferecido em duas modalidades:</p>
          <ul className="list-disc pl-5 space-y-1">
              <li>EAD (100% online)</li>
              <li>Presencial no polo Vivendo a Palavra, com encontros no último sábado do mês.</li>
          </ul>
          <p>Disponível para iniciantes ou para quem já tem base teológica, o IFC é uma jornada profunda e prática no conhecimento de Deus e do Seu propósito para cada cristão.</p>
           <Button asChild>
              <Link href="https://wa.me/5577999795558" target="_blank">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Falar com Responsável
              </Link>
          </Button>
        </div>
    )
  },
    {
    title: "Curso de Casais",
    type: "video",
    icon: <Heart className="h-6 w-6 text-primary" />,
    paid: false,
    details: (
        <div className="space-y-4 text-sm text-muted-foreground">
            <p>O Curso de Casais, exclusivo para membros da igreja que desejam se preparar para o casamento, é um momento para aprender a construir relacionamentos firmes, tendo Jesus como alicerce.</p>
            <p>A primeira decisão mais importante da nossa vida é aceitar Jesus no coração, e a segunda é escolher com quem vamos compartilhar nossa vida. Casar-se é um passo sério, que deve ser feito com responsabilidade, intencionalidade e, acima de tudo, guiado por Deus.</p>
            <p>Neste curso, caminhamos juntos fortalecendo o amor, o respeito e a fé, preparando cada casal para uma vida a dois.</p>
             <Button asChild>
                <Link href="https://wa.me/5577998128008" target="_blank">
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
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Estudos</h1>
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
