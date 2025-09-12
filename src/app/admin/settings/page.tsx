
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Settings, Save, Image as ImageIcon, Heart } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { getSiteIdentity, saveSiteIdentity } from './actions';

export default function SettingsAdminPage() {
  const [logo, setLogo] = useState('');
  const [favicon, setFavicon] = useState('');
  const [logoPreview, setLogoPreview] = useState('');
  const [faviconPreview, setFaviconPreview] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchIdentity() {
      try {
        const { logo, favicon } = await getSiteIdentity();
        setLogo(logo);
        setLogoPreview(logo);
        setFavicon(favicon);
        setFaviconPreview(favicon);
      } catch (error) {
        toast({
          title: "Erro ao carregar dados",
          description: "Não foi possível buscar a identidade do site.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchIdentity();
  }, [toast]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (data: string) => void, setPreview: (data: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFile(base64String);
        setPreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveSiteIdentity({ logo, favicon });
      toast({
        title: "Sucesso!",
        description: "A identidade visual do site foi atualizada.",
      });
      // Force reload to see favicon changes
      window.location.reload();
    } catch (error) {
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as alterações.",
        variant: "destructive",
      });
    }
  };

   if (isLoading) {
    return <div className="flex justify-center items-center h-full"><p>Carregando...</p></div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            Configurações de Identidade Visual
          </CardTitle>
          <CardDescription>
            Ajuste o logotipo e o favicon do site. As alterações serão aplicadas em todo o site.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-2">
              <Label htmlFor="logo-upload">Logotipo</Label>
              <Input 
                id="logo-upload" 
                type="file" 
                accept="image/png, image/jpeg, image/svg+xml"
                onChange={(e) => handleFileChange(e, setLogo, setLogoPreview)} 
              />
              <p className="text-sm text-muted-foreground">Recomendado: .png ou .svg com fundo transparente.</p>
              {logoPreview && (
                <div className="mt-4 p-4 border rounded-lg bg-muted/50 flex flex-col items-center gap-4">
                   <p className="text-sm font-medium">Pré-visualização do Logo:</p>
                   <Image src={logoPreview} alt="Pré-visualização do logo" width={200} height={40} className="h-10 w-auto object-contain" />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="favicon-upload">Favicon</Label>
              <Input 
                id="favicon-upload" 
                type="file" 
                accept="image/png, image/x-icon, image/svg+xml"
                onChange={(e) => handleFileChange(e, setFavicon, setFaviconPreview)}
              />
              <p className="text-sm text-muted-foreground">Recomendado: .ico ou .png quadrado (ex: 32x32px).</p>
               {faviconPreview && (
                <div className="mt-4 p-4 border rounded-lg bg-muted/50 flex flex-col items-center gap-4">
                   <p className="text-sm font-medium">Pré-visualização do Favicon:</p>
                   <Image src={faviconPreview} alt="Pré-visualização do favicon" width={32} height={32} />
                </div>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Alterações
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
