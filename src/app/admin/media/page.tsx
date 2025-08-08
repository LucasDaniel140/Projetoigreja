
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Video, Save, Film } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getVideoUrls, saveVideoUrls, getBackgroundVideoUrl, saveBackgroundVideoUrl } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function MediaAdminPage() {
  const [videoUrls, setVideoUrls] = useState(['', '', '', '']);
  const [backgroundVideoUrl, setBackgroundVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      try {
        const [urls, bgUrl] = await Promise.all([getVideoUrls(), getBackgroundVideoUrl()]);
        if (urls && urls.length === 4) {
          setVideoUrls(urls);
        }
        if (bgUrl) {
          setBackgroundVideoUrl(bgUrl);
        }
      } catch (error) {
        console.error("Failed to fetch media URLs", error);
        toast({
          title: "Erro ao carregar mídias",
          description: "Não foi possível buscar as mídias salvas.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [toast]);

  const handleSaveYoutubeVideos = async () => {
    try {
      await saveVideoUrls(videoUrls);
      toast({
        title: "Sucesso!",
        description: "Os vídeos do YouTube foram salvos e atualizados na página inicial.",
      });
    } catch (error) {
       toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar os vídeos do YouTube.",
        variant: "destructive",
      });
    }
  };

  const handleSaveBackgroundVideo = async () => {
    try {
      await saveBackgroundVideoUrl(backgroundVideoUrl);
      toast({
        title: "Sucesso!",
        description: "O vídeo de fundo foi salvo e atualizado na página inicial.",
      });
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar o vídeo de fundo.",
        variant: "destructive",
      });
    }
  }

  const handleYoutubeTextareaChange = (index: number, value: string) => {
    const newUrls = [...videoUrls];
    newUrls[index] = value;
    setVideoUrls(newUrls);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-full"><p>Carregando...</p></div>;
  }

  return (
    <div className='space-y-6'>
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
                        onChange={(e) => handleYoutubeTextareaChange(index, e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                  ))}
              </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button onClick={handleSaveYoutubeVideos}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Vídeos do YouTube
            </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Film className="h-6 w-6" />
            Gerenciar Vídeo de Fundo
          </CardTitle>
          <CardDescription>
            Altere o vídeo de fundo da seção de boas-vindas colando a URL direta do vídeo (ex: .mp4) abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="background-video-url">URL do Vídeo de Fundo</Label>
            <Input 
              id="background-video-url" 
              placeholder="https://exemplo.com/video.mp4"
              value={backgroundVideoUrl}
              onChange={(e) => setBackgroundVideoUrl(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSaveBackgroundVideo}>
            <Save className="mr-2 h-4 w-4" />
            Salvar Vídeo de Fundo
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

