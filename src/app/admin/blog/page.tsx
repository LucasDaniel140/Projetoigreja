
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Rss } from "lucide-react";

export default function BlogAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Rss className="h-6 w-6" />
          Gerenciamento do Blog
        </CardTitle>
        <CardDescription>
          Crie, edite e gerencie as postagens do blog e notícias da igreja.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: funcionalidades para criar, agendar e categorizar posts.</p>
      </CardContent>
    </Card>
  );
}
