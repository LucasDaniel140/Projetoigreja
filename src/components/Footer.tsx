"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Smartphone, Apple, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-black text-secondary-foreground border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-headline font-bold uppercase text-primary">Igreja Vivendo a Palavra</h3>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Igreja Vivendo a Palavra. Todos os direitos reservados.</p>
          </div>
          <TooltipProvider>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://www.instagram.com/ministeriovivendoapalavra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Image src="https://i.imgur.com/RxhFKEh.png" alt="Instagram" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://www.youtube.com/@VivendoaPalavra" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Image src="https://i.imgur.com/NLlGcqp.png" alt="YouTube" width={28} height={28} className="hover:opacity-80 transition-opacity" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>YouTube</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://open.spotify.com/show/0Yw2x1a4XdV0VL76Qt53Bp?si=972a7d87e24b45f9" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                    <Image src="https://i.imgur.com/D4Fisnj.png" alt="Spotify" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Spotify</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                   <Dialog>
                    <DialogTrigger asChild>
                        <button aria-label="Baixe nosso App">
                            <Smartphone className="h-6 w-6 hover:text-primary transition-colors" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle className="font-headline text-center">Baixe nosso App</DialogTitle>
                        <DialogDescription className="text-center">
                            Tenha acesso a tudo na palma da sua mão.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                            <Button asChild>
                                <Link href="https://apps.apple.com/br/app/igreja-vivendo-a-palavra/id6473058010" target="_blank" className="flex items-center gap-2">
                                    <Apple />
                                    <div>
                                        <p className="text-xs">Baixar na</p>
                                        <p className="text-lg font-semibold -mt-1">App Store</p>
                                    </div>
                                </Link>
                            </Button>
                             <Button asChild>
                                <Link href="https://play.google.com/store/apps/details?id=br.com.sistemaprover.igrejavivendoapalavra&pcampaignid=web_share" target="_blank" className="flex items-center gap-2">
                                    <Play />
                                     <div>
                                        <p className="text-xs">Disponível na</p>
                                        <p className="text-lg font-semibold -mt-1">Google Play</p>
                                    </div>
                                </Link>
                            </Button>
                        </div>
                    </DialogContent>
                    </Dialog>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Nosso App</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
}