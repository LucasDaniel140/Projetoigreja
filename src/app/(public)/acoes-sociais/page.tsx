
"use client";

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBasket, MessageSquare, CalendarIcon } from "lucide-react";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { addBeneficiaryToSheet } from './actions';
import { useToast } from '@/hooks/use-toast';

const beneficiarySchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório."),
  cpf: z.string().length(11, "CPF deve ter 11 dígitos."),
  birthDate: z.date({ required_error: "Data de nascimento é obrigatória." }),
  address: z.string().min(5, "Endereço é obrigatório."),
  familySize: z.coerce.number().min(1, "O tamanho da família deve ser pelo menos 1."),
  phone: z.string().min(10, "Telefone é obrigatório."),
});

export default function AcoesSociaisPage() {
  const whatsappLink = "https://wa.me/5577999567768";
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const beneficiaryForm = useForm<z.infer<typeof beneficiarySchema>>({
    resolver: zodResolver(beneficiarySchema),
    defaultValues: {
        fullName: "",
        cpf: "",
        address: "",
        familySize: 1,
        phone: ""
    }
  });

  async function onBeneficiarySubmit(values: z.infer<typeof beneficiarySchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else {
        formData.append(key, String(value));
      }
    });

    const result = await addBeneficiaryToSheet(formData);

    if (result.success) {
      toast({
        title: "Sucesso!",
        description: result.message,
      });
      beneficiaryForm.reset();
      formRef.current?.reset();
    } else {
      toast({
        title: "Erro",
        description: result.message,
        variant: "destructive",
      });
    }
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
              Se você precisa de ajuda, entre em contato conosco. Nossa equipe está pronta para atender.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...beneficiaryForm}>
              <form 
                ref={formRef} 
                onSubmit={beneficiaryForm.handleSubmit(onBeneficiarySubmit)} 
                className="space-y-6"
              >
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
                <Button 
                    type="submit" 
                    className="w-full"
                    disabled={beneficiaryForm.formState.isSubmitting}
                >
                    {beneficiaryForm.formState.isSubmitting ? 'Enviando...' : 'Enviar Pré-cadastro'}
                </Button>
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
          <CardContent className="flex justify-center pt-8">
            <Button asChild size="lg">
              <Link href={whatsappLink} target="_blank">
                Fazer Doação
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    