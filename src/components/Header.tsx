
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SiteLogo } from "./SiteLogo";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/missoes", label: "Missões" },
  { href: "/acoes-sociais", label: "Reação" },
  { href: "/estudos", label: "Estudos" },
  { href: "/novo-aqui", label: "É Novo Aqui?" },
  { href: "/visionarios", label: "Visionários" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
            <Link href="/" className="flex items-center">
                <SiteLogo className="h-7 w-auto" />
            </Link>
            
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "transition-colors text-foreground/60 hover:text-foreground",
                        pathname === link.href ? "text-foreground" : ""
                    )}
                    >
                    {link.label}
                    </Link>
                ))}
            </nav>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center justify-between w-full">
            <div className="w-[44px]"></div>
            <div className="flex-1 flex justify-center">
                <Link href="/" className="flex items-center" onClick={handleLinkClick}>
                    <SiteLogo className="h-7 w-auto" />
                </Link>
            </div>
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
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={cn(
                        "text-lg",
                        pathname === link.href ? "font-bold text-foreground" : "text-muted-foreground"
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
