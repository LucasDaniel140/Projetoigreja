
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getSiteIdentity } from '@/app/admin/settings/actions';
import { cn } from '@/lib/utils';

export function SiteLogo({ className }: { className?: string }) {
  const [logo, setLogo] = useState('https://i.imgur.com/OxjotEv.png');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogo() {
      try {
        const identity = await getSiteIdentity();
        if (identity.logo) {
          setLogo(identity.logo);
        }
      } catch (error) {
        console.error("Failed to fetch site logo.", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLogo();
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
    />
  );
}
