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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:text-primary transition-colors">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M8.5 14.5s1.5-1 4-1 4 1 4 1"></path><path d="M9 11.5s1.5-1 3-1 3 1 3 1"></path><path d="M10.5 8.5s1.5-1 1.5-1 1.5 1 1.5 1"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M15.46 12.45a5.25 5.25 0 0 0-5.77-1.02A5.25 5.25 0 0 0 5.46 15.5a5.25 5.25 0 0 0 5.77 1.02A5.25 5.25 0 0 0 15.46 12.45z"></path>
                    <path d="M17.4 10.65a8.25 8.25 0 0 0-8.8-1.58A8.25 8.25 0 0 0 4.1 13.9a8.25 8.25 0 0 0 8.8 1.58A8.25 8.25 0 0 0 17.4 10.65z"></path>
                    <path d="m12 12 0 0" transform="matrix(1,0,0,1,8.4,-3.25)"></path>
                    <path d="M7.05 16.54a5.5 5.5 0 0 1-1.01-1.03l.01-.01c.29-.4.63-.78.99-1.12.37-.34.78-.65 1.2-.9.43-.25.88-.45 1.34-.6.46-.15.94-.24 1.42-.28.48-.04.97-.02 1.45.05.48.07.96.19 1.42.36.46.17.9.4 1.3.68.4.28.77.6 1.1.97.33.37.62.77.87 1.2.25.43.45.88.6 1.34.15.46.24.94.28 1.42.04.48.02.97-.05 1.45-.07.48-.19.96-.36 1.42a8.73 8.73 0 0 1-2.6 3.11 8.73 8.73 0 0 1-3.11 1.3 8.73 8.73 0 0 1-3.55 0 8.73 8.73 0 0 1-3.11-1.3 8.73 8.73 0 0 1-1.3-3.11c-.17-.46-.29-.94-.36-1.42a8.73 8.73 0 0 1-.05-1.45c.04-.48.13-.96.28-1.42.15-.46.35-.91.6-1.34.25-.43.54-.83.87-1.2s.7-.7 1.1-.97c.4-.28.84-.51 1.3-.68.46-.17.94-.29 1.42-.36.48-.07.97-.09 1.45-.05.48.04.96.13 1.42.28.46.15.9.35 1.34.6.42.25.83.56 1.2.9.36.34.7.72.99 1.12l.01.01c.26.42.48.87.64 1.33.16.46.28.93.34 1.4.06.47.07.95.02 1.42a7.22 7.22 0 0 1-.4 2.83 7.22 7.22 0 0 1-1.07 2.37 7.22 7.22 0 0 1-1.64 1.8 7.22 7.22 0 0 1-2.09 1.15 7.22 7.22 0 0 1-2.43.45 7.22 7.22 0 0 1-2.65-.45 7.22 7.22 0 0 1-2.43-1.15 7.22 7.22 0 0 1-1.8-1.8 7.22 7.22 0 0 1-1.15-2.37 7.22 7.22 0 0 1-.4-2.83c-.05-.47-.04-.95.02-1.42a7.22 7.22 0 0 1 .34-1.4c.16-.46.38-.91.64-1.33z" fill="currentColor"></path>
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
