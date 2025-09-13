
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SiteLogo } from "./SiteLogo";

const leftNavLinks = [
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/missoes", label: "Missões" },
  { href: "/acoes-sociais", label: "Reação" },
];

const rightNavLinks = [
  { href: "/estudos", label: "Estudos" },
  { href: "/visionarios", label: "Visionários" },
];

const mainActionLink = { href: "/novo-aqui", label: "É Novo Aqui?" };

const allLinksForMobile = [...leftNavLinks, ...rightNavLinks, mainActionLink];


export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container flex h-16 items-center justify-center">
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 w-full max-w-5xl bg-black/30 backdrop-blur-lg rounded-full border border-white/10 px-8 py-3">
          {/* Left Links */}
          <div className="flex items-center justify-end flex-1 space-x-6 text-sm font-medium">
            {leftNavLinks.map((link) => (
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
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mx-4">
            <SiteLogo className="h-7 w-auto" />
          </Link>

          {/* Right Links & Action Button */}
          <div className="flex items-center justify-start flex-1 space-x-6 text-sm font-medium">
             {rightNavLinks.map((link) => (
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
             <Link href={mainActionLink.href}>
                <Button size="sm" className="rounded-full">
                    {mainActionLink.label}
                </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex items-center">
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
                <Link href="/" className="flex items-center" onClick={handleLinkClick}>
                  <SiteLogo className="h-7 w-auto" />
                </Link>
                <div className="flex flex-col space-y-4 mt-6">
                {allLinksForMobile.map((link) => (
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
