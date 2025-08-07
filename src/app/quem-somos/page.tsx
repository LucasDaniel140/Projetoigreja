import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Church, Target, Eye, Heart } from "lucide-react";
import Image from "next/image";

const leadership = [
  { name: "Pr. João Almeida", role: "Pastor Sênior", image: "https://placehold.co/100x100.png", dataAiHint: "pastor portrait" },
  { name: "Pra. Ana Paula", role: "Pastora de Louvor e Adoração", image: "https://placehold.co/100x100.png", dataAiHint: "pastor portrait" },
  { name: "Ev. Carlos Santos", role: "Líder de Evangelismo", image: "https://placehold.co/100x100.png", dataAiHint: "church leader portrait" },
  { name: "Maria Oliveira", role: "Líder do Ministério Infantil", image: "https://placehold.co/100x100.png", dataAiHint: "church leader portrait" },
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
                A IgrejaConectada nasceu em 2010 do coração de um pequeno grupo de amigos que sonhava com uma comunidade de fé relevante, acolhedora e com um profundo impacto social. Começamos em uma garagem, com cadeiras emprestadas e um grande desejo de ver vidas transformadas.
              </p>
              <p>
                Ao longo dos anos, Deus nos abençoou com crescimento e a oportunidade de expandir nossos ministérios. Hoje, somos uma igreja vibrante, com programas para todas as idades e um forte compromisso com missões e ações sociais, sempre mantendo a simplicidade e o calor do nosso início.
              </p>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image src="https://placehold.co/600x400.png" alt="Igreja antiga" data-ai-hint="old church building" layout="fill" objectFit="cover" />
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="mx-auto bg-accent rounded-full p-4 w-fit">
                    <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Conectar pessoas a Jesus e umas às outras, equipando-as para servir e transformar o mundo através do Evangelho.
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
                Ser uma igreja-família, relevante culturalmente, que manifesta o amor de Cristo e promove justiça e esperança em nossa cidade e até os confins da terra.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                 <div className="mx-auto bg-accent rounded-full p-4 w-fit">
                    <Heart className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Adoração, Comunhão, Discipulado, Serviço e Evangelismo. Estes são os pilares que sustentam tudo o que fazemos.
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
