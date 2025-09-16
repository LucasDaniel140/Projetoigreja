"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-[#212529] shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            <Link href="/">LOGOBAKERY</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors text-gray-300 hover:text-white",
                  pathname === link.href ? "text-white" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <Button className="rounded-full bg-[#007bff] hover:bg-[#0069d9] text-white font-bold px-6">
            Contact
          </Button>

          {/* Mobile menu could be added here if needed */}
        </div>
      </div>
    </header>
  );
}