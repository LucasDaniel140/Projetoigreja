
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function MissionsAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-6 w-6" />
          Gerenciamento de Missões
        </CardTitle>
        <CardDescription>
          Administre os projetos missionários, doações e relatórios de campo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: ferramentas para gerenciar missionários, projetos e doações.</p>
      </CardContent>
    </Card>
  );
}
