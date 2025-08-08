
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Video, Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getVideoUrls, saveVideoUrls } from './actions';
import { useToast } from '@/hooks/use-toast';

export default function MediaAdminPage() {
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
    return <div className="flex justify-center items-center h-full"><p>Carregando...</p></div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-6 w-6" />
          Gerenciar Vídeos da Página Inicial
        </CardTitle>
        <CardDescription>
          Altere os vídeos da seção "Nossos Momentos" colando o código de incorporação do YouTube em cada campo abaixo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoUrls.map((url, index) => (
                  <div className="space-y-2" key={index}>
                    <Label htmlFor={`video${index + 1}`}>Vídeo {index + 1}</Label>
                    <Textarea 
                      id={`video${index + 1}`} 
                      placeholder='<iframe src="..."></iframe>'
                      value={url}
                      onChange={(e) => handleTextareaChange(index, e.target.value)}
                      className="min-h-[120px]"
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
  );
}
