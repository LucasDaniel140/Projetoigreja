"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-secondary-foreground border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-headline font-bold uppercase text-primary">Igreja Vivendo a Palavra</h3>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Igreja Vivendo a Palavra. Todos os direitos reservados.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="https://www.instagram.com/ministeriovivendoapalavra/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="https://i.imgur.com/RxhFKEh.png" alt="Instagram" width={24} height={24} className="hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.youtube.com/@VivendoaPalavra" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Image src="https://i.imgur.com/NLlGcqp.png" alt="YouTube" width={28} height={28} className="hover:opacity-80 transition-opacity" />
            </Link>
             <Link href="https://open.spotify.com/show/0Yw2x1a4XdV0VL76Qt53Bp?si=972a7d87e24b45f9" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <Image src="https://i.imgur.com/D4Fisnj.png" alt="Spotify" width={24} height={24} className="hover:opacity-80 transition-opacity" />
            </Link>
             <Link href="https://apps.apple.com/br/app/igreja-vivendo-a-palavra/id6473058010" target="_blank" rel="noopener noreferrer" aria-label="App Store">
                 <Image src="https://www.clker.com/cliparts/5/j/n/C/d/u/apple-logo-black-hi.png" alt="App Store" width={24} height={24} className="hover:opacity-80 transition-opacity" />
            </Link>
             <Link href="https://play.google.com/store/apps/details?id=br.com.sistemaprover.igrejavivendoapalavra&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
                <Image src="https://i.imgur.com/kS53vG8.png" alt="Google Play" width={24} height={24} className="hover:opacity-80 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
