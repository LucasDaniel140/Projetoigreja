
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function SiteLogo({ className }: { className?: string }) {
  const [logo, setLogo] = useState('https://i.imgur.com/OxjotEv.png');
  const [loading, setLoading] = useState(false); // Changed to false as we have a default

  // In a real application, you might fetch this from a CMS or a static config file.
  // For now, it's hardcoded but prepared for dynamic fetching.

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
    />
  );
}
