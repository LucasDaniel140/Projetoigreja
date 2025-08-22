
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Footer() {
  return (
    <footer className="bg-black text-secondary-foreground border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col justify-center items-center gap-4">
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
                            <Image src="https://i.imgur.com/gotyp5h.png" alt="App da Igreja" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                        <DialogTitle className="font-headline text-center">Baixe nosso App</DialogTitle>
                        <DialogDescription className="text-center">
                            Tenha acesso a tudo na palma da sua mão.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
                           <Link href="https://apps.apple.com/br/app/igreja-vivendo-a-palavra/id6473058010" target="_blank">
                                <Image src="https://i.imgur.com/juZArY5.png" alt="Download on the App Store" width={160} height={53} />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=br.com.sistemaprover.igrejavivendoapalavra&pcampaignid=web_share" target="_blank">
                               <Image src="https://i.imgur.com/Qpz1saX.png" alt="Get it on Google Play" width={160} height={53} />
                            </Link>
                        </div>
                    </DialogContent>
                    </Dialog>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Igreja Vivendo a Palavra</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          <p className="text-xs text-muted-foreground font-sans">
            Desenvolvido por{' '}
            <Link href="https://www.instagram.com/candeeiromidias" target="_blank" rel="noopener noreferrer" className="text-chart-2 hover:underline">
              Candeeiro Mídias
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
