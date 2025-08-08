
"use client"

import * as React from "react"
import Link from "next/link"
import {
  Home,
  Settings,
  PanelLeft,
  Search,
  Users,
  File,
  LayoutDashboard,
  HeartHandshake,
  Globe,
  Calendar,
  Rss,
  Image as ImageIcon,
  MessageCircle,
  BarChart,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Páginas", href: "/admin/pages", icon: File },
    { label: "Blog", href: "/admin/blog", icon: Rss },
    { label: "Mídia", href: "/admin/media", icon: ImageIcon },
    { label: "Programações", href: "/admin/schedule", icon: Calendar },
    { label: "Missões", href: "/admin/missions", icon: Globe },
    { label: "Ações Sociais", href: "/admin/social", icon: HeartHandshake },
    { label: "Comunicação", href: "/admin/communication", icon: MessageCircle },
    { label: "Relatórios", href: "/admin/reports", icon: BarChart },
    { label: "Usuários", href: "/admin/users", icon: Users },
    { label: "Configurações", href: "/admin/settings", icon: Settings },
];


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={150} height={30} className="h-6 w-auto" />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", {
                    "bg-muted text-primary": pathname === item.href
                  })}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                   <Image src="https://i.imgur.com/OxjotEv.png" alt="Igreja Vivendo a Palavra Logo" width={150} height={30} className="h-6 w-auto" />
                </Link>
                 {navItems.map(item => (
                    <Link
                    key={item.label}
                    href={item.href}
                    className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", {
                        "bg-muted text-foreground": pathname === item.href,
                    })}
                    >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                    </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Can be used for search or other header actions */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Users className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Suporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}
