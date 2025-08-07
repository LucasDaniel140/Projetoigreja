"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Music, Smartphone } from "lucide-react";

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
              <Music className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=br.com.sistemaprover.igrejavivendoapalavra&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store">
              <Smartphone className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
             <Link href="https://apps.apple.com/br/app/igreja-vivendo-a-palavra/id6473058010" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:text-primary transition-colors"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
