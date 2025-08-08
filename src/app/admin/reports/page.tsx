
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BarChart } from "lucide-react";

export default function ReportsAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart className="h-6 w-6" />
          Relatórios
        </CardTitle>
        <CardDescription>
          Visualize relatórios financeiros, de engajamento e de ações sociais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: dashboards e relatórios detalhados sobre as atividades da igreja.</p>
      </CardContent>
    </Card>
  );
}
