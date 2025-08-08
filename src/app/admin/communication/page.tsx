
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function CommunicationAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          Comunicação
        </CardTitle>
        <CardDescription>
          Envie e-mails, gerencie notificações e integre com as redes sociais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: ferramentas de e-mail marketing e gestão de notificações.</p>
      </CardContent>
    </Card>
  );
}
