"use client";

import Link from "next/link";
import { Instagram, Youtube, Smartphone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-secondary-foreground border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-headline font-bold uppercase text-primary">Igreja Vivendo a Palavra</h3>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Igreja Vivendo a Palavra. Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://www.instagram.com/ministeriovivendoapalavra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.youtube.com/@VivendoaPalavra" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
             <Link href="https://open.spotify.com/show/0Yw2x1a4XdV0VL76Qt53Bp?si=972a7d87e24b45f9" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-primary transition-colors"
                    fill="currentColor"
                >
                    <title>Spotify</title>
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.193 14.823a.75.75 0 0 1-1.06-.023c-2.004-1.658-4.55-2.02-7.536-1.1c-.822.25-1.57-.3-1.82-1.122a.75.75 0 0 1 1.122-.822c3.27-.985 6.115-.57 8.355 1.25a.75.75 0 0 1 .023 1.06zm1.2-2.93a.75.75 0 0 1-1.043.253c-2.28-1.38-5.72-1.758-8.483-.962-.913.262-1.785-.38-2.046-1.293a.75.75 0 0 1 1.293-2.046c3.212-.914 7.03.493 9.68 2.13a.75.75 0 0 1-.4 1.918zM18.8 9.94a.75.75 0 0 1-1.072.418C14.882 8.79 10.95 8.59 7.05 9.77c-1.026.312-2.06-.33-2.372-1.356a.75.75 0 0 1 1.356-2.372c4.485-1.356 8.97.023 12.022 2.22a.75.75 0 0 1-.226 1.646z" />
                </svg>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                 <button aria-label="Baixar aplicativo" className="hover:text-primary transition-colors">
                    <Smartphone className="h-6 w-6" />
                 </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Baixe nosso App</DialogTitle>
                  <DialogDescription>
                    Tenha acesso a todo o conteúdo da igreja na palma da sua mão.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4">
                    <Button asChild>
                        <Link href="https://apps.apple.com/br/app/igreja-vivendo-a-palavra/id6473058010" target="_blank" rel="noopener noreferrer">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                             Baixar na App Store
                        </Link>
                    </Button>
                    <Button asChild variant="secondary">
                        <Link href="https://play.google.com/store/apps/details?id=br.com.sistemaprover.igrejavivendoapalavra&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.218 9.688c0-1.666-.46-2.656-1.49-3.64C18.918 5.25 17.89 5 16.53 5c-1.314 0-2.5.6-3.562 1.578-.888.797-1.49 1.844-1.49 3.109 0 1.266.602 2.313 1.49 3.11.918.851 2.13 1.573 3.562 1.573 1.467 0 2.495-.562 3.328-1.359.187-.188.36-.39.468-.563h-3.14V9.688h5.547c.047.28.062.61.062.937 0 1.594-.532 3.016-1.532 4.094-.953 1.031-2.265 1.625-3.828 1.625-1.422 0-2.813-.563-3.844-1.688-1.016-1.14-1.547-2.656-1.547-4.28 0-1.782.594-3.344 1.578-4.485C13.25 5.578 14.812 5 16.53 5c1.781 0 3.313.672 4.438 1.828 1.015 1.047 1.437 2.344 1.437 3.797l-.187.062Z"></path></svg>
                            Disponível no Google Play
                        </Link>
                    </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}