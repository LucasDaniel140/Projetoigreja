import type { Metadata } from 'next';
import { cn } from "@/lib/utils";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Oswald } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-headline' });

export const metadata: Metadata = {
  title: 'Igreja Vivendo a Palavra',
  description: 'Conectando corações, transformando vidas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("dark", inter.variable, oswald.variable)}>
      <head />
      <body className={cn("min-h-screen bg-background font-body antialiased")} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
