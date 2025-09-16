
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SiteLogo } from "./SiteLogo";

const navLinks = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/missoes", label: "Missões" },
  { href: "/acoes-sociais", label: "Reação" },
  { href: "/estudos", label: "Estudos" },
  { href: "/visionarios", label: "Visionários" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container flex h-20 items-center justify-between">
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
                "transition-colors hover:text-primary whitespace-nowrap",
                pathname === link.href ? "text-primary font-bold" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center">
             <Button asChild className="rounded-full px-6">
                <Link href="/novo-aqui">É Novo Aqui?</Link>
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
                <SheetContent side="right" className="bg-background/95 text-white w-full p-0">
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
                        {[{ href: "/", label: "Início" }, ...navLinks, {href: "/novo-aqui", label: "É Novo Aqui?"}].map((link) => (
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
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}

