
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SiteLogo } from "./SiteLogo";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/missoes", label: "Missões" },
  { href: "/acoes-sociais", label: "Reação" },
  { href: "/estudos", label: "Estudos" },
  { href: "/visionarios", label: "Visionários" },
  { href: "/novo-aqui", label: "É Novo Aqui?" },
];

const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/ministeriovivendoapalavra/", icon: "https://i.imgur.com/RxhFKEh.png" },
    { name: "YouTube", href: "https://www.youtube.com/@VivendoaPalavra", icon: "https://i.imgur.com/NLlGcqp.png" },
    { name: "Spotify", href: "https://open.spotify.com/show/0Yw2x1a4XdV0VL76Qt53Bp?si=972a7d87e24b45f9", icon: "https://i.imgur.com/D4Fisnj.png" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const contactWhatsappLink = "https://wa.me/5577999707313";

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-md">
      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <SiteLogo className="h-8 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative transition-colors hover:text-primary whitespace-nowrap py-2",
                    pathname === link.href ? "text-primary font-bold" : "text-foreground/80",
                    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform",
                    pathname === link.href ? "after:scale-x-100" : "hover:after:scale-x-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Contact Button */}
            <div className="hidden md:flex items-center">
                 <Button asChild className="rounded-full px-6">
                    <Link href={contactWhatsappLink} target="_blank">
                        Contato
                    </Link>
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
                <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Abrir menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black/95 text-white w-full p-0">
                         <div className="flex justify-between items-center p-4 border-b border-gray-800">
                             <Link href="/" onClick={handleLinkClick}>
                                <SiteLogo className="h-7 w-auto" />
                            </Link>
                            <SheetTrigger asChild>
                                 <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Fechar menu</span>
                                </Button>
                            </SheetTrigger>
                        </div>
                        <div className="flex flex-col space-y-2 p-6">
                            {[{ href: "/", label: "Início" }, ...navLinks].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                        "text-xl py-3 text-left rounded-md px-4",
                                        pathname === link.href 
                                            ? "font-bold bg-primary text-primary-foreground" 
                                            : "text-muted-foreground hover:bg-gray-800 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button asChild className="w-full text-lg py-6 rounded-lg">
                                    <Link href={contactWhatsappLink} target="_blank" onClick={handleLinkClick}>
                                        Contato
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
