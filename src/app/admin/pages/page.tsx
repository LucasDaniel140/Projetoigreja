
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { File, PenSquare, Home, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PagesAdminPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <File className="h-6 w-6" />
          Gerenciamento de Páginas
        </CardTitle>
        <CardDescription>
          Altere textos, vídeos e imagens do site principal. O administrador pode trocar os vídeos da seção "Nossos Momentos", as fotos da "Nossa História" em "Quem Somos" e as fotos dos líderes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-lg mb-2">
            <PenSquare className="h-5 w-5 text-primary" />
            Editor Visual (WYSIWYG)
          </h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Interface intuitiva de arrastar e soltar (drag-and-drop)</li>
            <li>Editor de texto rico para formatação completa</li>
            <li>Inserção fácil de imagens e vídeos da galeria</li>
            <li>Preview em tempo real das alterações</li>
            <li>Histórico e versionamento de conteúdo para segurança</li>
          </ul>
        </div>

        <Separator />

        <div>
            <h3 className="font-semibold text-lg mb-4">Gestão de Páginas Específicas</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Users className="h-5 w-5 text-primary" />
                            Página "Quem Somos"
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-1">
                        <p>• Edição do texto principal</p>
                        <p>• Galeria de fotos da liderança</p>
                        <p>• Conteúdo da história da igreja</p>
                        <p>• Gestão de missão, visão e valores</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Home className="h-5 w-5 text-primary" />
                            Página Inicial
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-1">
                        <p>• Gerenciamento de banners no carrossel</p>
                        <p>• Alteração dos destaques principais</p>
                        <p>• Edição do versículo do dia</p>
                        <p>• Ajuste das chamadas para ação (CTAs)</p>
                    </CardContent>
                </Card>
            </div>
        </div>

      </CardContent>
    </Card>
  );
}
