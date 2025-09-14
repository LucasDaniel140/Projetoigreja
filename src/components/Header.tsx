
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const allNavLinks = [...navLinks, { href: "/novo-aqui", label: "É Novo Aqui?" }];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        
        {/* Desktop Navigation */}
        <div className="hidden md:grid grid-cols-3 items-center w-full">
            <div className="flex justify-start">
                 <Link href="/" className="flex items-center">
                    <SiteLogo className="h-7 w-auto" />
                </Link>
            </div>
            
            <nav className="flex justify-center items-center space-x-6 text-sm font-medium">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "transition-colors hover:text-primary whitespace-nowrap",
                        pathname === link.href ? "text-primary font-bold" : "text-foreground/60"
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
            </nav>
            
            <div className="flex justify-end">
                <Link href="/novo-aqui">
                    <Button>É Novo Aqui?</Button>
                </Link>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center justify-between w-full">
            <Link href="/" className="flex items-center" onClick={handleLinkClick}>
                <SiteLogo className="h-7 w-auto" />
            </Link>
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background">
                <div className="mb-6">
                    <Link href="/" className="flex items-center" onClick={handleLinkClick}>
                    <SiteLogo className="h-7 w-auto" />
                    </Link>
                </div>
                <div className="flex flex-col items-start gap-4">
                    {allNavLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
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
