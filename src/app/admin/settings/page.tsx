
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateSiteData } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { siteDataStore } from "@/lib/site-data";
import Image from "next/image";

export default function SettingsPage() {
    const { toast } = useToast();
    const formRef = React.useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    
    // We get the initial data directly from the store.
    // Note: This won't update automatically if the data changes on the server
    // after the page is loaded. A full page reload would be needed.
    const initialData = siteDataStore.get();
    const [logoPreview, setLogoPreview] = React.useState(initialData.logo);
    const [faviconPreview, setFaviconPreview] = React.useState(initialData.favicon);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setPreview: React.Dispatch<React.SetStateAction<string>>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const result = await updateSiteData(formData);

        setIsLoading(false);

        if (result.success) {
            toast({
                title: "Sucesso!",
                description: result.message,
            });
        } else {
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Ocorreu um erro ao salvar as configurações.",
            });
        }
    };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="mx-auto grid max-w-6xl flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Configurações do Site
          </h1>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-3 lg:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Identidade Visual</CardTitle>
                <CardDescription>
                  Personalize o logotipo e o favicon do seu site.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                   <div className="grid gap-3">
                        <Label htmlFor="logo">Logotipo</Label>
                        <div className="flex items-center gap-4">
                            <Input 
                                id="logo" 
                                name="logo" 
                                type="file" 
                                className="w-full"
                                accept="image/png, image/jpeg, image/svg+xml"
                                onChange={(e) => handleFileChange(e, setLogoPreview)}
                            />
                            {logoPreview && (
                                <div className="p-2 border rounded-md bg-muted">
                                <Image 
                                    src={logoPreview} 
                                    alt="Pré-visualização do Logo" 
                                    width={100} 
                                    height={25}
                                    className="object-contain h-6"
                                    unoptimized
                                />
                                </div>
                            )}
                        </div>
                         <p className="text-sm text-muted-foreground">Recomendado: .png transparente, altura de 40px.</p>
                   </div>
                   <div className="grid gap-3">
                        <Label htmlFor="favicon">Favicon</Label>
                        <div className="flex items-center gap-4">
                            <Input 
                                id="favicon" 
                                name="favicon" 
                                type="file" 
                                className="w-full"
                                accept="image/x-icon, image/png, image/svg+xml"
                                onChange={(e) => handleFileChange(e, setFaviconPreview)}
                             />
                            {faviconPreview && (
                                <div className="p-2 border rounded-md bg-muted">
                                <Image 
                                    src={faviconPreview} 
                                    alt="Pré-visualização do Favicon" 
                                    width={32} 
                                    height={32}
                                    className="object-contain"
                                    unoptimized
                                />
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground">Recomendado: .ico ou .png, tamanho 32x32 pixels.</p>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
            <Button type="submit" size="sm" disabled={isLoading}>
                 {isLoading ? 'Salvando...' : 'Salvar'}
            </Button>
        </div>
      </div>
    </form>
  )
}
