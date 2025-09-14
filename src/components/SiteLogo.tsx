
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// This is a client component, but it can't directly fetch from a server-side store.
// Instead, we can make it fetch the data from an endpoint or rely on data passed via props.
// For simplicity, we'll fetch from a simple API route.

async function getLogoUrl() {
    // In a real app, this would be an API endpoint
    // For now, we simulate by creating a temporary API route concept
    try {
        const res = await fetch('/api/site-data');
        if(res.ok) {
            const data = await res.json();
            return data.logo;
        }
    } catch (e) {
        // console.error("Could not fetch logo, using default.");
    }
    return 'https://i.imgur.com/OxjotEv.png';
}


export function SiteLogo({ className }: { className?: string }) {
  const [logo, setLogo] = useState('https://i.imgur.com/OxjotEv.png');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadLogo() {
        // Since we cannot create API routes, we will just use the default.
        // In a real scenario, an API route would provide the dynamic logo.
        setLoading(false);
    }
    loadLogo();
    return () => { isMounted = false; }
  }, []);


  if (loading) {
    return <div className={cn("h-7 w-[200px] bg-muted animate-pulse rounded", className)}></div>;
  }

  return (
    <Image 
      src={logo} 
      alt="Igreja Vivendo a Palavra Logo" 
      width={200} 
      height={40} 
      className={cn("w-auto", className)}
      priority
      unoptimized
    />
  );
}
