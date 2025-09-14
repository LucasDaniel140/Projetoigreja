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
<<<<<<< HEAD
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <SiteLogo className="h-7 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.slice(1).map((link) => (
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
=======
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container flex h-14 items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex w-full items-center bg-black/30 backdrop-blur-lg rounded-full border border-white/10 px-4">
          <div className="grid w-full items-center" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
            
            {/* Left Links */}
            <div className="flex justify-end items-center gap-6">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-primary whitespace-nowrap text-sm",
                    pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <div className="px-6 flex justify-center">
              <Link href="/" className="flex-shrink-0">
                <SiteLogo className="h-7 w-auto" />
              </Link>
            </div>

            {/* Right Links */}
            <div className="flex justify-start items-center gap-6">
              {rightNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-primary whitespace-nowrap text-sm",
                    pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="rounded-full font-bold">
                <Link href={mainActionLink.href}>
                  {mainActionLink.label}
                </Link>
              </Button>
            </div>
          </div>
>>>>>>> 40937c625eda8266e334bd78fe8887cfa6b01f19
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between w-full px-4">
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
