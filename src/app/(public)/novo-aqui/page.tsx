
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Handshake, BookOpen, CalendarDays, Coffee, Baby, Rocket, Heart, ChevronDown, Clock, UserCheck } from "lucide-react";
import Link from "next/link";


const ministries = [
    {
        icon: <CalendarDays className="h-6 w-6 text-primary-foreground" />,
        title: "Cultos",
        content: (
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <Card className="bg-secondary/50">
                    <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-base font-bold text-foreground">
                            <Clock className="h-5 w-5 text-primary" />
                            Cultos Regulares
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p><strong>Domingo:</strong> 9h e 18h</p>
                        <p><strong>Quarta-feira:</strong> 19h30</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary/50">
                     <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-base font-bold text-foreground">
                            <UserCheck className="h-5 w-5 text-primary" />
                            Cultos Especiais
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 list-disc pl-5">
                            <li><strong>Empreendedores (Visionários):</strong> 1ª terça do mês, 20h</li>
                            <li><strong>Jovens e Adolescentes:</strong> 1º e 3º sábado, 19h</li>
                            <li><strong>Mulheres:</strong> 2º sábado do mês, 19h</li>
                            <li><strong>Homens:</strong> 4º sábado do mês, 19h</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        )
    },
    {
        icon: <Baby className="h-6 w-6 text-primary-foreground" />,
        title: "Kids",
        content: (
            <div className="space-y-4 text-sm text-muted-foreground">
                <p>Na Igreja Vivendo a Palavra, temos um compromisso inegociável com o futuro: formar uma geração que ama, conhece e vive a Palavra de Deus. E esse compromisso começa com os pequenos.</p>
                <p>Por isso, investimos com excelência, intencionalidade e carinho na Casa Kids e na Igreja Kids, dois pilares que caminham juntos no propósito de edificar as crianças com fundamentos sólidos na fé. A Igreja Kids é o nosso ministério que atua semanalmente, durante os cultos, conduzindo as crianças a uma vivência espiritual profunda, com ensino bíblico acessível e cheio de alegria. Já a Casa Kids amplia esse alcance, sendo um espaço pensado especialmente para momentos de discipulado, cuidado, criatividade e conexão onde valores eternos são ensinados com amor e verdade.</p>
                <p>Mas não paramos por aí. A Vivendo a Palavra entende que o cuidado com as crianças vai além das fronteiras da igreja. Por isso, através de ações evangelísticas como o VP Todinho, temos alcançado crianças em comunidades carentes, levando a Palavra, brincando, acolhendo e mostrando que cada criança é importante e tem um lugar no coração de Deus.</p>
                <blockquote className="border-l-4 border-primary pl-4 italic">“Ensina a criança no caminho em que deve andar, e ainda quando for velho não se desviará dele.” — Provérbios 22:6</blockquote>
                <p>A nossa igreja acredita, investe e trabalha ativamente para que as crianças cresçam com identidade firmada em Cristo. Mais do que um ministério, esse é um movimento geracional. Um chamado coletivo.</p>
                <p>E agora, nós te convidamos a fazer parte disso. Ore, envolva-se, contribua. Investir nas crianças é investir no Reino.</p>
            </div>
        )
    },
    {
        icon: <Coffee className="h-6 w-6 text-primary-foreground" />,
        title: "Café de Boas-Vindas",
        content: (
             <div className="space-y-4 text-sm text-muted-foreground">
               <p>O Boas-Vindas é um momento especial criado para receber de forma calorosa todos que estão chegando à Vivendo a Palavra. É um café preparado com carinho para novos membros e para aqueles que desejam conhecer mais sobre quem somos, nossa história, a visão que nos guia, a missão que nos move e os valores que sustentam tudo o que fazemos.</p>
               <p>Nessa noite, você vai descobrir o que nos constrói como igreja, entender como nasceu esse propósito e como pode se envolver para fazer parte dessa família em Cristo. É também um passo essencial para todos que desejam se tornar membros, pois acreditamos que pertencer começa com compreender e caminhar juntos na mesma direção.</p>
               <p>Aqui, cada novo passo é celebrado, cada história é importante e você é bem-vindo para viver a Palavra conosco.</p>
            </div>
        )
    },
    {
        icon: <Handshake className="h-6 w-6 text-primary-foreground" />,
        title: "Voluntários",
        content: (
            <div className="space-y-4 text-sm text-muted-foreground">
                <p className="font-bold">Nossa missão é clara: Viver, Amar e Servir.</p>
                <p>O voluntariado existe para que possamos expressar essa missão de forma prática, com atitudes que refletem o coração de Cristo. É para aqueles que fazem parte desta família, que já são membros e desejam colocar seus dons e talentos à disposição para servir ao Senhor e ao próximo.</p>
                
                <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="bg-card p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Áreas de Atuação</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Cultos</li>
                            <li>Evangelismos</li>
                            <li>Ações Sociais</li>
                            <li>Missões Mundiais</li>
                        </ul>
                    </div>
                    <div className="bg-card p-4 rounded-lg">
                         <h4 className="font-semibold text-foreground mb-2">Impacto</h4>
                         <p>Cada ato de serviço é uma oportunidade de tocar vidas e manifestar a Palavra de Deus.</p>
                    </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-4 italic">“Eis-me aqui, envia-me!” — Isaías 6:8</blockquote>
                <p>Servir é mais do que uma função - é um estilo de vida. É transformar fé em ação, amor em cuidado, Palavra em movimento.</p>
                <p>Se você entende que viver a Palavra é também demonstrá-la em suas atitudes, venha servir conosco. Porque quando cada parte do corpo cumpre o seu papel, a Igreja se torna mais forte e o mundo vê Jesus em nós.</p>
            </div>
        )
    },
    {
        icon: <BookOpen className="h-6 w-6 text-primary-foreground" />,
        title: "Estudos",
        href: "/estudos",
    },
    {
        icon: <Rocket className="h-6 w-6 text-primary-foreground" />,
        title: "Visionários",
        href: "/visionarios"
    }
];

export default function NovoAquiPage() {
  return (
    <div className="bg-background">
      <section className="text-center py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
            <div className="mx-auto bg-primary rounded-full p-4 w-fit mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">É NOVO AQUI?</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Bem-vindo à Igreja Vivendo a Palavra. Preparamos este guia especial para você conhecer tudo o que temos disponível. Explore nossos ministérios, horários de cultos e descubra como fazer parte desta família em Cristo.
            </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline">Conheça Nossos Ministérios</h2>
                <p className="text-muted-foreground mt-2">
                    Clique em cada seção abaixo para descobrir mais sobre nossas atividades, horários e como você pode se envolver em nossa comunidade.
                </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
                {ministries.map((item, index) => {
                    const triggerContent = (
                        <div className="flex items-center gap-4 text-primary-foreground">
                            {item.icon}
                            <span className="font-headline text-xl font-bold">{item.title}</span>
                        </div>
                    );

                    const trigger = item.href ? (
                        <Link href={item.href} target={item.target} className="flex-1 text-left">
                            {triggerContent}
                        </Link>
                    ) : (
                       <div className="flex-1 text-left">{triggerContent}</div>
                    );

                    return (
                        <AccordionItem value={`item-${index}`} key={index} className="bg-primary rounded-lg border-none overflow-hidden">
                           <AccordionTrigger className="w-full p-4 hover:no-underline hover:bg-primary/90 transition-colors [&[data-state=open]>svg]:text-primary-foreground">
                               <div className="w-full flex justify-between items-center">
                                   {trigger}
                                   {!item.href && <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200 text-primary-foreground" />}
                               </div>
                           </AccordionTrigger>
                           {item.content && (
                               <AccordionContent className="bg-card">
                                   <div className="p-6">
                                       {item.content}
                                   </div>
                               </AccordionContent>
                           )}
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-bold font-headline">Pronto para dar o próximo passo?</h2>
            <p className="text-muted-foreground mt-2">Participe do nosso Café de Boas-Vindas e conheça mais sobre nossa igreja, nossa missão e como você pode fazer parte desta família.</p>
            <Button size="lg" className="mt-6">Quero Participar</Button>
        </div>
      </section>

    </div>
  );
}
