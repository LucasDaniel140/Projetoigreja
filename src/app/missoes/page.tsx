"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Heart } from 'lucide-react';

const missionaries = [
  {
    id: 1,
    name: 'Família Silva',
    location: 'África Subsaariana',
    progress: 75,
    goal: 10000,
    raised: 7500,
    image: 'https://placehold.co/400x300.png',
    dataAiHint: 'african family mission',
    description: 'Construção de poços de água potável e escolas para comunidades carentes.'
  },
  {
    id: 2,
    name: 'Lucas e Ana',
    location: 'Sudeste Asiático',
    progress: 50,
    goal: 8000,
    raised: 4000,
    image: 'https://placehold.co/400x300.png',
    dataAiHint: 'asian children school',
    description: 'Apoio a orfanatos e programas de educação infantil em áreas rurais.'
  },
  {
    id: 3,
    name: 'Projeto Amazônia',
    location: 'Brasil',
    progress: 90,
    goal: 15000,
    raised: 13500,
    image: 'https://placehold.co/400x300.png',
    dataAiHint: 'amazon river tribe',
    description: 'Levando assistência médica e social para comunidades ribeirinhas isoladas.'
  }
];

const donationFormSchema = z.object({
  amount: z.coerce.number().positive("O valor deve ser positivo."),
  name: z.string().min(3, "Nome é obrigatório."),
  email: z.string().email("Email inválido."),
  paymentMethod: z.enum(["pix", "card", "boleto"], {
    required_error: "Selecione um método de pagamento.",
  }),
  recurring: z.boolean().default(false),
});

function DonationForm({ missionaryName }: { missionaryName: string }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      amount: 50,
      name: "",
      email: "",
      paymentMethod: "pix",
      recurring: false,
    },
  });

  function onSubmit(values: z.infer<typeof donationFormSchema>) {
    console.log(values);
    toast({
      title: "Doação Processada!",
      description: `Obrigado por sua doação de R$${values.amount} para ${missionaryName}.`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <DialogHeader>
          <DialogTitle className="font-headline">Doar para {missionaryName}</DialogTitle>
          <DialogDescription>
            Sua contribuição faz a diferença. Preencha os dados abaixo.
          </DialogDescription>
        </DialogHeader>
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor da Doação (R$)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="50" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="seu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Método de Pagamento</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="pix" />
                    </FormControl>
                    <FormLabel className="font-normal">PIX</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="card" />
                    </FormControl>
                    <FormLabel className="font-normal">Cartão de Crédito</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="boleto" />
                    </FormControl>
                    <FormLabel className="font-normal">Boleto Bancário</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="recurring"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Tornar esta uma doação recorrente</FormLabel>
                <FormDescription>
                  Sua doação será debitada mensalmente.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Confirmar Doação</Button>
      </form>
    </Form>
  )
}

export default function MissoesPage() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nossos Projetos Missionários</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Apoiamos missionários que são as mãos e os pés de Cristo em lugares que precisam de esperança. Conheça, ore e contribua.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {missionaries.map((missionary) => (
          <Dialog key={missionary.id}>
            <Card className="flex flex-col">
              <CardHeader>
                <div className="relative aspect-video">
                  <Image
                    src={missionary.image}
                    alt={`Missão ${missionary.name}`}
                    fill
                    data-ai-hint={missionary.dataAiHint}
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <CardTitle className="font-headline text-2xl pt-4">{missionary.name}</CardTitle>
                <CardDescription>{missionary.location}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{missionary.description}</p>
                <div className="space-y-2">
                  <Progress value={missionary.progress} className="w-full" />
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Arrecadado: R${missionary.raised.toLocaleString('pt-BR')}</span>
                    <span className="text-muted-foreground">Meta: R${missionary.goal.toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Heart className="mr-2 h-4 w-4"/>
                    Apoiar este projeto
                  </Button>
                </DialogTrigger>
              </CardFooter>
            </Card>
            <DialogContent>
              <DonationForm missionaryName={missionary.name} />
            </DialogContent>
          </Dialog>
        ))}
      </div>

       <div id="doar" className="mt-16 text-center">
        <h2 className="text-3xl font-bold font-headline">Faça uma Doação Geral</h2>
        <p className="text-muted-foreground mt-2">Sua oferta ajuda a manter todos os nossos projetos.</p>
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="mt-4">
                    <Heart className="mr-2 h-5 w-5"/>
                    Doar para o Fundo Missionário
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DonationForm missionaryName="Fundo Missionário Geral" />
            </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
