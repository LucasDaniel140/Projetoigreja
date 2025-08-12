
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { useEffect } from "react";

const userFormSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  role: z.enum(["admin", "editor", "member"], {
    required_error: "Você precisa selecionar uma função.",
  }),
  password: z.string().optional(),
}).refine(data => {
    // A senha só é obrigatória se não houver 'initialData' (ou seja, ao criar um novo usuário)
    if (!initialData) {
        return !!data.password && data.password.length >= 6;
    }
    return true;
}, {
    message: "A senha é obrigatória e deve ter no mínimo 6 caracteres.",
    path: ["password"],
});

type UserFormValues = z.infer<typeof userFormSchema>;

interface UserFormProps {
  initialData: UserFormValues | null;
  onSubmit: (values: UserFormValues) => void;
  onCancel: () => void;
}

let initialData: UserFormValues | null = null;


export function UserForm({ initialData: propsInitialData, onSubmit, onCancel }: UserFormProps) {
  initialData = propsInitialData;
  const isEditing = !!initialData;
  
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: initialData || {
      name: "",
      email: "",
      role: "member",
      password: "",
    },
  });

  useEffect(() => {
    form.reset(propsInitialData || {
        name: "",
        email: "",
        role: "member",
        password: "",
    });
  }, [propsInitialData, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input placeholder="Nome do usuário" {...field} />
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
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isEditing && (
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        )}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Função</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a função do usuário" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="member">Membro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancelar
                </Button>
            </DialogClose>
            <Button type="submit">{isEditing ? "Salvar Alterações" : "Criar Usuário"}</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
