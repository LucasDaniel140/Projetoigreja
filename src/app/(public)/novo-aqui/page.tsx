import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Handshake, BookOpen, CalendarDays, Coffee, Baby, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cultos = [
    { title: "Domingo", time: "9h e 18h" },
    { title: "Quarta-feira", time: "19h30" },
    { title: "Culto de Empreendedores (Visionários)", time: "Primeira terça do mês - 20h" },
    { title: "Culto de Jovens e Adolescentes", time: "Primeiro e terceiro sábado de cada mês - 19h" },
    { title: "Culto de Mulheres", time: "Segundo sábado de cada mês - 19h" },
    { title: "Culto de Homens", time: "Quarto sábado de cada mês - 19h" },
]

export default function NovoAquiPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">É Novo Aqui?</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Ficamos felizes por você estar aqui. Fique por dentro de tudo que acontece em nossa casa.
        </p>
      </section>
      
      <Separator className="my-12" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-full p-3 w-fit">
                        <CalendarDays className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Nossos Cultos</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
                <ul className="space-y-2">
                    {cultos.map((culto, index) => (
                         <li key={index} className="flex justify-between items-center border-b border-border/50 pb-2">
                            <span className="font-semibold">{culto.title}</span>
                            <span>{culto.time}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-full p-3 w-fit">
                        <Baby className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Kids</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow space-y-4">
                <p>Na Igreja Vivendo a Palavra, temos um compromisso inegociável com o futuro: formar uma geração que ama, conhece e vive a Palavra de Deus. E esse compromisso começa com os pequenos.</p>
                <p>Por isso, investimos com excelência, intencionalidade e carinho na Casa Kids e na Igreja Kids, dois pilares que caminham juntos no propósito de edificar as crianças com fundamentos sólidos na fé. A Igreja Kids é o nosso ministério que atua semanalmente, durante os cultos, conduzindo as crianças a uma vivência espiritual profunda, com ensino bíblico acessível e cheio de alegria. Já a Casa Kids amplia esse alcance, sendo um espaço pensado especialmente para momentos de discipulado, cuidado, criatividade e conexão onde valores eternos são ensinados com amor e verdade.</p>
                <p>Mas não paramos por aí. A Vivendo a Palavra entende que o cuidado com as crianças vai além das fronteiras da igreja. Por isso, através de ações evangelísticas como o VP Todinho, temos alcançado crianças em comunidades carentes, levando a Palavra, brincando, acolhendo e mostrando que cada criança é importante e tem um lugar no coração de Deus.</p>
                <blockquote className="border-l-4 border-primary pl-4 italic">“Ensina a criança no caminho em que deve andar, e ainda quando for velho não se desviará dele.” — Provérbios 22:6</blockquote>
                <p>A nossa igreja acredita, investe e trabalha ativamente para que as crianças cresçam com identidade firmada em Cristo. Mais do que um ministério, esse é um movimento geracional. Um chamado coletivo.</p>
                <p>E agora, nós te convidamos a fazer parte disso. Ore, envolva-se, contribua. Investir nas crianças é investir no Reino.</p>
            </CardContent>
        </Card>
        
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-full p-3 w-fit">
                        <Coffee className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Café de Boas-Vindas</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow space-y-4">
               <p>O Boas-Vindas é um momento especial criado para receber de forma calorosa todos que estão chegando à Vivendo a Palavra. É um café preparado com carinho para novos membros e para aqueles que desejam conhecer mais sobre quem somos, nossa história, a visão que nos guia, a missão que nos move e os valores que sustentam tudo o que fazemos.</p>
               <p>Nessa noite, você vai descobrir o que nos constrói como igreja, entender como nasceu esse propósito e como pode se envolver para fazer parte dessa família em Cristo. É também um passo essencial para todos que desejam se tornar membros, pois acreditamos que pertencer começa com compreender e caminhar juntos na mesma direção.</p>
               <p>Aqui, cada novo passo é celebrado, cada história é importante e você é bem-vindo para viver a Palavra conosco.</p>
            </CardContent>
        </Card>
        
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-full p-3 w-fit">
                        <Handshake className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Voluntários</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow space-y-4">
                <p>Na Igreja Vivendo a Palavra, nossa missão é clara: Viver, Amar e Servir. E é justamente por isso que o voluntariado existe para que possamos expressar essa missão de forma prática, com atitudes que refletem o coração de Cristo.</p>
                <p>O voluntariado é para aqueles que fazem parte desta família, que já são membros e desejam colocar seus dons e talentos à disposição para servir ao Senhor e ao próximo. Seja nos cultos, nos evangelismos, nas ações sociais, nas missões mundiais ou em qualquer outra frente, cada ato de serviço é uma oportunidade de tocar vidas e manifestar o Reino de Deus.</p>
                <p>Servir é mais do que uma função é um estilo de vida. É transformar fé em ação, amor em cuidado, Palavra em movimento. Quando nos voluntariamos, estamos dizendo a Deus: “Eis-me aqui, envia-me!” (Isaías 6:8).</p>
                <p>Se você entende que viver a Palavra é também demonstrá-la em suas atitudes, venha servir conosco. Porque quando cada parte do corpo cumpre o seu papel, a Igreja se torna mais forte e o mundo vê Jesus em nós.</p>
            </CardContent>
        </Card>
        
        <Card className="flex flex-col">
            <CardHeader>
                 <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-full p-3 w-fit">
                        <BookOpen className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Estudos</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
                <p>Aprofunde seu conhecimento na Palavra de Deus com nossos cursos e estudos direcionados. Temos uma jornada de crescimento esperando por você.</p>
                <Button asChild className="mt-4">
                    <Link href="/estudos">Ver Estudos</Link>
                </Button>
            </CardContent>
        </Card>

        <Card className="flex flex-col">
            <CardHeader>
                 <div className="flex items-center gap-4">
                    <div className="bg-accent rounded-full p-3 w-fit">
                        <Rocket className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="font-headline text-2xl">Visionários</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-muted-foreground flex-grow">
               <p>Uma plataforma para empreendedores e sonhadores que desejam usar seus talentos para expandir o Reino de Deus no mercado de trabalho.</p>
                <Button asChild className="mt-4">
                    <Link href="#" target="_blank">Acessar Plataforma</Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
