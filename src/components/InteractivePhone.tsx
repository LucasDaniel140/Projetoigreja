
"use client";

import React from 'react';
import Image from 'next/image';

export function InteractivePhone({ transform }: { transform: string }) {
  return (
    <div
      style={{
        transition: 'transform 0.2s ease-out',
        transform: transform,
      }}
    >
      <Image
        src="https://i.imgur.com/5tEj5Ag.png"
        alt="App da Igreja em um celular"
        width={300}
        height={600}
        className="object-contain"
        data-ai-hint="church app phone"
        unoptimized
        style={{
          transition: 'transform 0.2s ease-out',
        }}
      />
    </div>
  );
}
