
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

export default function MediaAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-6 w-6" />
          Biblioteca de Mídia
        </CardTitle>
        <CardDescription>
          Faça upload e gerencie imagens, vídeos e outros arquivos de mídia do site.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Em breve: uma galeria para organizar e utilizar suas mídias.</p>
      </CardContent>
    </Card>
  );
}
