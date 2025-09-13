
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
      <div className="container flex h-14 items-center justify-center">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex w-full max-w-4xl mx-auto items-center justify-center bg-black/30 backdrop-blur-lg rounded-full border border-white/10 px-4">
          <div className="flex flex-1 justify-end space-x-6">
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

          <div className="px-6">
            <Link href="/" className="flex-shrink-0">
              <SiteLogo className="h-7 w-auto" />
            </Link>
          </div>

          <div className="flex flex-1 justify-start items-center space-x-6">
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
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center justify-between w-full px-4">
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
