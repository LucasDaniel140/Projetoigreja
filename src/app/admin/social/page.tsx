
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { HeartHandshake } from "lucide-react";

export default function SocialAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartHandshake className="h-6 w-6" />
          Gerenciamento de Ações Sociais
        </CardTitle>
        <CardDescription>
          Gerencie o cadastro de beneficiários e a distribuição de alimentos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: um sistema para aprovar cadastros e agendar distribuições.</p>
      </CardContent>
    </Card>
  );
}
