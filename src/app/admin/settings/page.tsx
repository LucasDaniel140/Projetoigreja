
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-6 w-6" />
          Configurações
        </CardTitle>
        <CardDescription>
          Ajuste as configurações gerais do site, integrações e segurança.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: opções para configurar gateways de pagamento, APIs e segurança.</p>
      </CardContent>
    </Card>
  );
}
