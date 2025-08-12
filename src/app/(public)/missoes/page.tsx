
"use client";

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

const mainMission = {
    id: 1,
    name: 'Missão África',
    location: 'Morrumbala, Moçambique',
    progress: 75,
    goal: 10000,
    raised: 7500,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'african family mission',
    description: 'A Missão África nasceu do desejo de viver o amor de Cristo de forma prática. Em Morrumbala, Moçambique, encontramos famílias que enfrentavam a fome todos os dias. Com a ajuda da igreja e de pessoas generosas, hoje alimentamos mais de 300 pessoas diariamente e apoiamos mais de 10 bases missionárias na região.\n\nMais do que comida, levamos dignidade: construímos espaços para cozinhar com segurança, entregamos roupas, chinelos, materiais escolares e apoiamos pastores locais para que continuem levando a Palavra de Deus.\n\nEssa missão é importante porque transforma realidades e mostra que Deus cuida através de pessoas dispostas a servir. E você pode fazer parte disso!\n\nA partir de R$ 30 por mês, através do programa Adote uma Criança, você garante a alimentação de uma criança por um mês inteiro e pode contribuir com o valor que Deus colocar no seu coração.\n\nParticipe. Doe. Seja resposta. Porque servir é a forma mais bonita de amar.'
};


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
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Nossa Missão</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Apoiamos missionários que são as mãos e os pés de Cristo em lugares que precisam de esperança. Conheça, ore e contribua.
        </p>
      </div>

      <Dialog>
        <Card className="max-w-5xl mx-auto border-0 shadow-none md:border md:shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src={mainMission.image}
                        alt={`Missão ${mainMission.name}`}
                        fill
                        data-ai-hint={mainMission.dataAiHint}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col h-full py-4">
                    <CardHeader className="p-0">
                        <CardTitle className="font-headline text-3xl">{mainMission.name}</CardTitle>
                        <CardDescription className="text-base">{mainMission.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow mt-4">
                        <p className="text-muted-foreground mb-4 whitespace-pre-wrap">{mainMission.description}</p>
                         <div className="space-y-2 mt-auto">
                            <Progress value={mainMission.progress} className="w-full" />
                            <div className="flex justify-between text-sm">
                                <span className="font-semibold">Arrecadado: R${mainMission.raised.toLocaleString('pt-BR')}</span>
                                <span className="text-muted-foreground">Meta: R${mainMission.goal.toLocaleString('pt-BR')}</span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="p-0 mt-6">
                        <DialogTrigger asChild>
                            <Button className="w-full md:w-auto" size="lg">
                                <Heart className="mr-2 h-4 w-4"/>
                                Apoiar este projeto
                            </Button>
                        </DialogTrigger>
                    </CardFooter>
                </div>
            </div>
        </Card>
        <DialogContent>
          <DonationForm missionaryName={mainMission.name} />
        </DialogContent>
      </Dialog>
      
    </div>
  );
}
