
import { Rocket, Construction } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function VisionariosPage() {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-10rem)]">
      <Card className="max-w-lg text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
            <Construction className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="font-headline text-4xl">Em Construção</CardTitle>
          <CardDescription className="pt-2 text-lg">
            A plataforma <span className="font-bold text-primary">Visionários</span> está quase pronta!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Estamos trabalhando nos últimos detalhes para lançar uma ferramenta incrível para expandir o Reino. Volte em breve!
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Início
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
