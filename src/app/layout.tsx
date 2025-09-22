
import type { Metadata } from 'next';
import { cn } from "@/lib/utils";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Oswald } from 'next/font/google';
import Script from 'next/script';
import { siteDataStore } from '@/lib/site-data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-headline' });

export async function generateMetadata(): Promise<Metadata> {
  const siteData = await siteDataStore.get();
 
  return {
    title: 'Igreja Vivendo a Palavra',
    description: 'Conectando corações, transformando vidas.',
    icons: {
        icon: siteData.favicon || '/favicon.ico',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("dark", inter.variable, oswald.variable)}>
      <head>
         <Script src="https://js.stripe.com/v3/buy-button.js" strategy="lazyOnload" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
