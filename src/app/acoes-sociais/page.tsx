"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Users, UtensilsCrossed, FileText } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const formSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório."),
  cpf: z.string().length(11, "CPF deve ter 11 dígitos.").refine(val => !isNaN(parseInt(val)), "CPF deve conter apenas números."),
  birthDate: z.date({ required_error: "Data de nascimento é obrigatória." }),
  address: z.string().min(5, "Endereço é obrigatório."),
  familySize: z.coerce.number().min(1, "O número de membros da família é obrigatório."),
});

export default function AcoesSociaisPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      cpf: "",
      address: "",
      familySize: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Cadastro enviado!",
      description: "Seu pré-cadastro foi realizado com sucesso. Aguarde nosso contato.",
    });
    form.reset();
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
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
                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF (apenas números)</FormLabel>
                      <FormControl>
                        <Input placeholder="00000000000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
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
                  control={form.control}
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
                  control={form.control}
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

        <div className="space-y-8">
          <Card className="bg-secondary">
            <CardHeader className="flex flex-row items-center gap-4">
              <UtensilsCrossed className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="font-headline text-2xl">Distribuição de Alimentos</CardTitle>
                <CardDescription>Distribuição de cestas básicas para famílias cadastradas.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Próxima distribuição:</p>
              <p className="text-muted-foreground">Último sábado do mês, às 9h, no salão da igreja.</p>
              <p className="mt-2 text-sm">É necessário o pré-cadastro para retirada.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
               <FileText className="w-8 h-8 text-primary" />
                <div>
                    <CardTitle className="font-headline text-2xl">Relatórios e Transparência</CardTitle>
                    <CardDescription>Veja o impacto de nossas ações.</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span>Famílias Atendidas em 2024</span>
                    <span className="font-bold text-lg">120+</span>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span>Refeições Servidas</span>
                    <span className="font-bold text-lg">5.000+</span>
                 </div>
                 <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" /> Ver Relatório Completo de 2023
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
