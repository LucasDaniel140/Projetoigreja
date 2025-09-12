
import type { Metadata, ResolvingMetadata } from 'next';
import { cn } from "@/lib/utils";
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Oswald } from 'next/font/google';
import Script from 'next/script';
import { getSiteIdentity } from './admin/settings/actions';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-headline' });

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const identity = await getSiteIdentity();
 
  const previousIcons = (await parent).icons || {}
 
  const newIcons = identity.favicon
    ? { icon: identity.favicon, apple: identity.favicon }
    : previousIcons;

  return {
    title: 'Igreja Vivendo a Palavra',
    description: 'Conectando corações, transformando vidas.',
    icons: newIcons
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
      <body className={cn("min-h-screen bg-background font-body antialiased")} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
