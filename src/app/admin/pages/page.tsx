
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { File, PenSquare, Home, Users, Video, Save } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getVideoUrls, saveVideoUrls } from './actions';
import { useToast } from '@/hooks/use-toast';

export default function PagesAdminPage() {
  const [videoUrls, setVideoUrls] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchUrls() {
      try {
        const urls = await getVideoUrls();
        if (urls && urls.length === 4) {
          setVideoUrls(urls);
        }
      } catch (error) {
        console.error("Failed to fetch video URLs", error);
        toast({
          title: "Erro ao carregar vídeos",
          description: "Não foi possível buscar os vídeos salvos.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchUrls();
  }, [toast]);

  const handleSave = async () => {
    try {
      await saveVideoUrls(videoUrls);
      toast({
        title: "Sucesso!",
        description: "Os vídeos foram salvos e atualizados na página inicial.",
      });
    } catch (error) {
       toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar os vídeos.",
        variant: "destructive",
      });
    }
  };

  const handleTextareaChange = (index: number, value: string) => {
    const newUrls = [...videoUrls];
    newUrls[index] = value;
    setVideoUrls(newUrls);
  };

  if (isLoading) {
    return <p>Carregando...</p>;
  }

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
                    <CardContent className="text-muted-foreground space-y-4">
                        <div className="space-y-1">
                          <p>• Gerenciamento de banners no carrossel</p>
                          <p>• Alteração dos destaques principais</p>
                          <p>• Edição do versículo do dia</p>
                          <p>• Ajuste das chamadas para ação (CTAs)</p>
                        </div>
                        <Separator />
                        <div className="space-y-3">
                            <h4 className="flex items-center gap-2 font-semibold">
                              <Video className="h-4 w-4" />
                              Vídeos "Nossos Momentos"
                            </h4>
                            <CardDescription>Cole o código de incorporação (iframe) do YouTube abaixo.</CardDescription>
                            <div className="grid grid-cols-2 gap-4">
                                {videoUrls.map((url, index) => (
                                  <div className="space-y-2" key={index}>
                                    <Label htmlFor={`video${index + 1}`}>Vídeo {index + 1}</Label>
                                    <Textarea 
                                      id={`video${index + 1}`} 
                                      placeholder='<iframe src="..."></iframe>'
                                      value={url}
                                      onChange={(e) => handleTextareaChange(index, e.target.value)}
                                    />
                                  </div>
                                ))}
                            </div>
                            <div className="flex justify-end pt-4">
                                <Button onClick={handleSave}>
                                    <Save className="mr-2 h-4 w-4" />
                                    Salvar Alterações
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

      </CardContent>
    </Card>
  );
}
