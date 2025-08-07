import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Church, Target, Eye, Heart } from "lucide-react";
import Image from "next/image";

const leadership = [
  { name: "Pr. Samuel Souza", role: "Pastor Sênior", image: "https://placehold.co/100x100.png", dataAiHint: "pastor portrait" },
  { name: "Pra. Rafaelle Souza", role: "Pastora", image: "https://placehold.co/100x100.png", dataAiHint: "pastor portrait" },
  { name: "Pr. Suzano Selmo", role: "Pastor", image: "https://placehold.co/100x100.png", dataAiHint: "church leader portrait" },
  { name: "Pra. Angela Pacheco", role: "Pastora", image: "https://placehold.co/100x100.png", dataAiHint: "church leader portrait" },
];

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Culto de Domingo", dataAiHint: "church service" },
  { src: "https://placehold.co/600x400.png", alt: "Grupo de jovens", dataAiHint: "youth group" },
  { src: "https://placehold.co/600x400.png", alt: "Ação social", dataAiHint: "community outreach" },
  { src: "https://placehold.co/600x400.png", alt: "Batismo nas águas", dataAiHint: "baptism ceremony" },
];

export default function QuemSomosPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Nossa Identidade</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Uma família unida pela fé, com o propósito de amar a Deus, amar as pessoas e servir ao mundo.
          </p>
        </section>

        <Separator className="my-12" />

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nossa jornada começou de forma extraordinária, na simplicidade de uma garagem, guiados por Deus. Em setembro de 2016, demos um grande passo ao nos mudarmos para um novo espaço, onde nossa identidade começou a tomar forma.
              </p>
              <p>
                Em fevereiro de 2017, celebramos a consagração dos nossos pastores Samuel e Rafaelle Souza, um marco especial. Durante essa caminhada, Deus enviou pessoas-chave, como os pastores Suzano Selmo e Angela Pacheco, que nos ajudaram a crescer. Com o coração ardendo pela presença de Deus e a direção do Espírito Santo, nasceu o nome que hoje nos define: Vivendo a Palavra.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image src="https://placehold.co/400x600.png" alt="Igreja antiga em uma garagem" data-ai-hint="garage church" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <p className="text-white font-semibold text-sm">O Início</p>
                </div>
            </div>
             <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mt-8">
                <Image src="https://placehold.co/400x600.png" alt="Fachada da nova igreja" data-ai-hint="modern church building" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <p className="text-white font-semibold text-sm">Dias Atuais</p>
                </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="mx-auto bg-accent rounded-full p-4 w-fit">
                    <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Viver, Amar e Servir fundamentados em Deus, nossa base e inspiração.
                <br/>• Viver a plenitude em Cristo
                <br/>• Amar como fomos amados
                <br/>• Servir com o coração
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                 <div className="mx-auto bg-accent rounded-full p-4 w-fit">
                    <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Ser uma igreja acolhedora que inspira vidas a viverem os propósitos de Deus, conhecendo a Cristo profundamente e vivendo o evangelho em sua essência — com fé, simplicidade e amor em família.
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        <section className="text-center">
          <h2 className="text-3xl font-headline font-bold mb-8">Nossa Liderança</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="flex flex-col items-center space-y-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={leader.image} alt={leader.name} data-ai-hint={leader.dataAiHint} />
                  <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold">{leader.name}</h3>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </div>
            ))}
          </div>
        </section>
        
        <Separator className="my-12" />

        <section className="text-center">
            <h2 className="text-3xl font-headline font-bold mb-8">Galeria de Momentos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                        <Image src={image.src} alt={image.alt} data-ai-hint={image.dataAiHint} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-bold">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}
