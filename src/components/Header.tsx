
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
     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                   <SiteLogo className="h-7 w-auto" />
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map(link => (
                         <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === link.href ? "text-foreground" : "text-foreground/60"
                            )}
                         >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden flex w-full items-center justify-between">
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
                            {navLinks.map((link) => (
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
