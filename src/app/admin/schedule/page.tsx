
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function ScheduleAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          Gerenciamento de Programações
        </CardTitle>
        <CardDescription>
          Crie e gerencie os eventos, cultos e outras programações da igreja.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: um calendário interativo para gerenciar as programações.</p>
      </CardContent>
    </Card>
  );
}
