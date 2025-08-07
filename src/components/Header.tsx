
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/missoes", label: "Missões" },
  { href: "/acoes-sociais", label: "Ações Sociais" },
  { href: "/estudos", label: "Estudos" },
  { href: "/novo-aqui", label: "É Novo Aqui?" },
  { href: "#", label: "Visionários", target: "_blank" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
            <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={200} height={40} className="h-7 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-bold" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Desktop Donate Button */}
        <div className="hidden md:flex items-center">
            <Link href="/missoes#doar">
            <Button>
                Doar Agora
            </Button>
            </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background">
                <Link href="/" className="flex items-center">
                <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={200} height={40} className="h-7 w-auto" />
                </Link>
                <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    target={link.target}
                    className={cn(
                        "text-lg",
                        pathname === link.href ? "font-bold text-primary" : "text-muted-foreground"
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
                <Link href="/missoes#doar" className="pt-4">
                    <Button className="w-full">
                        Doar Agora
                    </Button>
                </Link>
                </div>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
