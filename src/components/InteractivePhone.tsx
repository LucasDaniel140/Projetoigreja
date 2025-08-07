
"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';

export function InteractivePhone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -30; // Inverte o eixo Y
    const rotateY = (x / width - 0.5) * 30;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
