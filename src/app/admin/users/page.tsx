
"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, MoreHorizontal, User, Trash2, Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserForm } from "./user-form";
import { addUser, deleteUser, getUsers, updateUser } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  created_at: string;
};

export default function UsersAdminPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isFormOpen, setFormOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const { toast } = useToast();

  const fetchUsers = React.useCallback(async () => {
    try {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers || []);
    } catch (error) {
      toast({
        title: "Erro ao buscar usuários",
        description: "Não foi possível carregar a lista de usuários.",
        variant: "destructive",
      });
    }
  }, [toast]);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setFormOpen(true);
  };

  const handleAddNew = () => {
    setSelectedUser(null);
    setFormOpen(true);
  };

  const handleDelete = async (userId: string) => {
     try {
      await deleteUser(userId);
      toast({
        title: "Usuário removido",
        description: "O usuário foi removido com sucesso.",
      });
      fetchUsers();
    } catch (error) {
      toast({
        title: "Erro ao remover usuário",
        variant: "destructive",
      });
    }
  }

  const handleFormSubmit = async (values: any) => {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, values);
        toast({
          title: "Usuário atualizado!",
          description: "Os dados do usuário foram atualizados com sucesso.",
        });
      } else {
        await addUser(values);
        toast({
          title: "Usuário adicionado!",
          description: "O novo usuário foi criado com sucesso.",
        });
      }
      setFormOpen(false);
      fetchUsers();
    } catch (error: any) {
        console.error(error);
      toast({
        title: "Erro ao salvar usuário",
        description: error.message || "Ocorreu um erro inesperado.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Dialog open={isFormOpen} onOpenChange={setFormOpen}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="h-6 w-6" />
                Gerenciamento de Usuários
              </div>
              <Button onClick={handleAddNew}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Usuário
              </Button>
            </CardTitle>
            <CardDescription>
              Adicione, remova e edite os usuários do painel administrativo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Função</TableHead>
                  <TableHead>Data de Criação</TableHead>
                  <TableHead>
                    <span className="sr-only">Ações</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleEdit(user)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Editar
                            </DropdownMenuItem>
                             <DropdownMenuSeparator />
                             <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full text-destructive">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Remover
                                  </button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                        Essa ação não pode ser desfeita. Isso removerá permanentemente o usuário.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => handleDelete(user.id)} className="bg-destructive hover:bg-destructive/90">
                                            Sim, remover
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-24">
                      Nenhum usuário encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedUser ? "Editar Usuário" : "Adicionar Novo Usuário"}</DialogTitle>
            <DialogDescription>
              {selectedUser
                ? "Altere os dados do usuário abaixo."
                : "Preencha os dados para criar um novo usuário."}
            </DialogDescription>
          </DialogHeader>
          <UserForm
            initialData={selectedUser}
            onSubmit={handleFormSubmit}
            onCancel={() => setFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
