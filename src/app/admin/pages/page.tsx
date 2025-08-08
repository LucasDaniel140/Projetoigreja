
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
          Em breve: edite o conteúdo textual das páginas do site, como "Quem Somos" e "Ações Sociais".
        </CardDescription>
      </CardHeader>
      <CardContent>
         <p className="text-muted-foreground">Esta seção permitirá a edição de conteúdo estático do site.</p>
      </CardContent>
    </Card>
  );
}
