"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Smartphone } from "lucide-react";

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
