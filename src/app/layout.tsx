
import type { Metadata } from 'next';
import { cn } from "@/lib/utils";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Oswald } from 'next/font/google';
import Script from 'next/script';
import { siteDataStore } from '@/lib/site-data';

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
  const siteData = siteDataStore.get();

  return (
    <html lang="en" suppressHydrationWarning className={cn("dark", inter.variable, oswald.variable)}>
      <head>
         {siteData.favicon && <link rel="icon" href={siteData.favicon} />}
         <Script src="https://js.stripe.com/v3/buy-button.js" strategy="lazyOnload" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
