
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function UsersAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          Gerenciamento de Usuários
        </CardTitle>
        <CardDescription>
          Adicione, remova e edite os usuários do painel administrativo e seus níveis de permissão.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: um sistema completo para gerenciar usuários e permissões.</p>
      </CardContent>
    </Card>
  );
}
