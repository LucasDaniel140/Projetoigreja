"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/missoes", label: "Missões" },
  { href: "/acoes-sociais", label: "Reação" },
  { href: "/estudos", label: "Estudos" },
  { href: "/novo-aqui", label: "É Novo Aqui?" },
  { href: "#", label: "Visionários", target: "_blank" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={200} height={40} className="h-7 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              className={cn(
                "transition-colors hover:text-primary whitespace-nowrap",
                pathname === link.href ? "text-primary font-bold" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
                <Link href="/" className="flex items-center" onClick={handleLinkClick}>
                <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={200} height={40} className="h-7 w-auto" />
                </Link>
                <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    target={link.target}
                    onClick={handleLinkClick}
                    className={cn(
                        "text-lg",
                        pathname === link.href ? "font-bold text-primary" : "text-muted-foreground"
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
