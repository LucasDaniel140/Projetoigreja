
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
          Altere qualquer texto do site principal, organizado por cada página ou seção.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: um editor visual para gerenciar o conteúdo das páginas.</p>
      </CardContent>
    </Card>
  );
}
