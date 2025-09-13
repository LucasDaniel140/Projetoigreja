
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiteLogo } from "./SiteLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/missoes", label: "Missões" },
  { href: "/acoes-sociais", label: "Reação" },
  { href: "/estudos", label: "Estudos" },
  { href: "/novo-aqui", label: "É Novo Aqui?" },
  { href: "/visionarios", label: "Visionários" },
];

export function Header() {
  const pathname = usePathname();

  return (
     <header className="sticky top-0 z-50 w-full">
        <nav className="absolute top-0 border-solid border-gray-200 w-full border-b py-3 bg-white z-50 bg-inherit">
            <div className="container mx-auto">
            <div className="w-full flex flex-col lg:flex-row">
                <div className="flex justify-between lg:flex-row w-full">
                <ul className="flex items-center mx-auto gap-2">
                    {navLinks.map(link => (
                         <li key={link.href}>
                            <Link 
                                href={link.href} 
                                className={cn(
                                    "flex items-center justify-between text-gray-500 text-sm lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 md:mb-0 md:mr-3",
                                    pathname === link.href ? "text-indigo-700" : ""
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </nav>
    </header>
  );
}

    