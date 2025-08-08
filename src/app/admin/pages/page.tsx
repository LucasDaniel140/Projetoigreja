
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { File } from "lucide-react";

export default function PagesAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <File className="h-6 w-6" />
          Gerenciamento de Páginas
        </CardTitle>
        <CardDescription>
          Edite o conteúdo das páginas principais do site, como "Quem Somos" e a Página Inicial.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: um editor visual para gerenciar o conteúdo das páginas.</p>
      </CardContent>
    </Card>
  );
}
