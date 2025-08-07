"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Handshake, Building, HeartHandshake, FileText, BadgeCheck } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  companyName: z.string().min(2, "Nome da empresa é obrigatório."),
  cnpj: z.string().length(14, "CNPJ deve ter 14 dígitos.").refine(val => !isNaN(parseInt(val)), "CNPJ deve conter apenas números."),
  contactPerson: z.string().min(3, "Nome do contato é obrigatório."),
  email: z.string().email("Email inválido."),
  phone: z.string().min(10, "Telefone inválido."),
  partnershipType: z.string({ required_error: "Tipo de parceria é obrigatório." }),
  message: z.string().optional(),
});

export default function ParceirosPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      cnpj: "",
      contactPerson: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Cadastro de Parceiro Enviado!",
      description: "Obrigado pelo seu interesse! Entraremos em contato em breve.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Seja um Parceiro</h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          Junte-se a nós na missão de transformar vidas. Sua empresa pode fazer a diferença.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
            <Card>
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center"><Handshake className="mr-2"/> Formulário de Parceria</CardTitle>
                <CardDescription>
                Preencha o formulário para iniciar uma conversa sobre como podemos colaborar.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Nome da Empresa</FormLabel>
                                <FormControl><Input placeholder="Sua Empresa Ltda" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="cnpj"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>CNPJ (apenas números)</FormLabel>
                                <FormControl><Input placeholder="00000000000000" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                     <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="contactPerson"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Pessoa de Contato</FormLabel>
                                <FormControl><Input placeholder="Nome do responsável" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>E-mail Corporativo</FormLabel>
                                <FormControl><Input type="email" placeholder="contato@suaempresa.com" {...field} /></FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                      control={form.control}
                      name="partnershipType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Parceria de Interesse</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione um tipo de doação" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="financeira">Doação Financeira</SelectItem>
                              <SelectItem value="alimentos">Doação de Alimentos/Produtos</SelectItem>
                              <SelectItem value="servicos">Prestação de Serviços (Pro Bono)</SelectItem>
                              <SelectItem value="voluntariado">Voluntariado Corporativo</SelectItem>
                              <SelectItem value="outros">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem (Opcional)</FormLabel>
                          <FormControl><Textarea placeholder="Deixe uma mensagem para nós..." {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">Quero ser um parceiro</Button>
                </form>
                </Form>
            </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><HeartHandshake className="mr-2"/> Formas de Ajudar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                    <p>✓ Doações financeiras pontuais ou recorrentes.</p>
                    <p>✓ Doação de cestas básicas e produtos de higiene.</p>
                    <p>✓ Oferta de serviços profissionais.</p>
                    <p>✓ Engajamento de colaboradores em ações voluntárias.</p>
                </CardContent>
            </Card>
             <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center"><Building className="mr-2"/> Portal do Parceiro</CardTitle>
                    <CardDescription>Área exclusiva para empresas parceiras.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full"><BadgeCheck className="mr-2"/> Emitir Certificado de Doação</Button>
                    <Button variant="outline" className="w-full"><FileText className="mr-2"/> Relatórios de Impacto Social</Button>
                    <p className="text-xs text-muted-foreground text-center pt-2">Login necessário para acessar estas funcionalidades.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
