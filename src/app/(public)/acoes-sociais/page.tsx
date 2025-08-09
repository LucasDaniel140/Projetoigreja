"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Heart, ShoppingBasket } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createCheckoutSession } from "./actions";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const beneficiaryFormSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório."),
  cpf: z.string().length(11, "CPF deve ter 11 dígitos.").refine(val => !isNaN(parseInt(val)), "CPF deve conter apenas números."),
  birthDate: z.date({ required_error: "Data de nascimento é obrigatória." }),
  address: z.string().min(5, "Endereço é obrigatório."),
  familySize: z.coerce.number().min(1, "O número de membros da família é obrigatório."),
  phone: z.string().min(10, "Telefone é obrigatório."),
});

const donationFormSchema = z.object({
    name: z.string().min(3, "Nome é obrigatório."),
    email: z.string().email("Email inválido."),
    paymentMethod: z.enum(["pix", "card", "boleto"], {
        required_error: "Selecione um método de pagamento.",
    }),
});

function DonationForm() {
  const { toast } = useToast();
  const donationForm = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
        name: "",
        email: "",
    },
  });

  async function onDonationSubmit(values: z.infer<typeof donationFormSchema>) {
    const { name, email, paymentMethod } = values;

    try {
      const session = await createCheckoutSession({
        name,
        email,
        paymentMethod,
        amount: 10000, // R$ 100,00 in cents
        productName: 'Doação de Cesta Básica',
      });

      if (session?.url) {
        window.location.href = session.url;
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao processar doação",
        description: "Houve um problema ao criar a sessão de pagamento. Tente novamente.",
        variant: "destructive",
      });
    }
  }
  
  return (
     <Form {...donationForm}>
        <form onSubmit={donationForm.handleSubmit(onDonationSubmit)} className="space-y-6">
            <div className="text-center border border-dashed border-primary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground">Valor da doação</p>
                <p className="text-4xl font-bold">R$ 100,00</p>
            </div>
             <FormField
                control={donationForm.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Seu Nome</FormLabel>
                    <FormControl>
                        <Input placeholder="Nome para identificação" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={donationForm.control}
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
                control={donationForm.control}
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
                            <FormControl><RadioGroupItem value="card" /></FormControl>
                            <FormLabel className="font-normal">Cartão de Crédito</FormLabel>
                        </FormItem>
                         <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="pix" /></FormControl>
                            <FormLabel className="font-normal">PIX</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl><RadioGroupItem value="boleto" /></FormControl>
                            <FormLabel className="font-normal">Boleto Bancário</FormLabel>
                        </FormItem>
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <Button type="submit" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Confirmar Doação
            </Button>
        </form>
     </Form>
  )
}

export default function AcoesSociaisPage() {
  const { toast } = useToast();
  
  const beneficiaryForm = useForm<z.infer<typeof beneficiaryFormSchema>>({
    resolver: zodResolver(beneficiaryFormSchema),
    defaultValues: {
      fullName: "",
      cpf: "",
      address: "",
      familySize: 1,
      phone: "",
    },
  });

  function onBeneficiarySubmit(values: z.infer<typeof beneficiaryFormSchema>) {
    console.log("Beneficiary:", values);
    toast({
      title: "Cadastro enviado!",
      description: "Seu pré-cadastro foi realizado com sucesso. Aguarde nosso contato.",
    });
    beneficiaryForm.reset();
  }


  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Ações Sociais</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Nosso compromisso é servir a comunidade com amor e cuidado. Veja como atuamos e faça parte.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Pré-cadastro de Beneficiários</CardTitle>
            <CardDescription>
              Se você precisa de ajuda, preencha o formulário abaixo. Nossa equipe entrará em contato.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...beneficiaryForm}>
              <form onSubmit={beneficiaryForm.handleSubmit(onBeneficiarySubmit)} className="space-y-6">
                <FormField
                  control={beneficiaryForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                    control={beneficiaryForm.control}
                    name="cpf"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                            <Input placeholder="Apenas números" {...field} maxLength={11} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={beneficiaryForm.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                                <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                  control={beneficiaryForm.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Data de Nascimento</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd/MM/yyyy")
                              ) : (
                                <span>Escolha uma data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={beneficiaryForm.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Rua, número, bairro, cidade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={beneficiaryForm.control}
                  name="familySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Membros da Família</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" placeholder="Quantas pessoas na família" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Enviar Pré-cadastro</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <div className="flex justify-center mb-4">
                <ShoppingBasket className="w-12 h-12 text-primary"/>
            </div>
            <CardTitle className="font-headline text-2xl text-center">Doe uma Cesta Básica</CardTitle>
            <CardDescription className="text-center">
              Com R$ 100,00 você alimenta uma família. Sua doação é um gesto de amor que transforma vidas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Elements stripe={stripePromise}>
              <DonationForm />
            </Elements>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
