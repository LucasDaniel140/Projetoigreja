"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { cn } from '@/lib/utils';

export function AnimatedWelcome() {
  const animationRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      const textWrapper = animationRef.current;
      const textContent = textWrapper.textContent;
      if (textContent) {
        textWrapper.innerHTML = textContent.replace(/\S/g, "<span class='letter-wrapper' style='display: inline-block; overflow: hidden;'><span class='letter' style='display: inline-block;'>$&</span></span>");

        anime.timeline({ loop: true })
          .add({
            targets: '.letter',
            translateY: ["100%", "0%"],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 300 + 30 * i
          }).add({
            targets: '.letter',
            translateY: ["0%", "-100%"],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: (el, i) => 100 + 30 * i
          });
      }
    }
  }, []);

  return (
    <h1 ref={animationRef} className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-primary">
      Bem vindo
    </h1>
  );
}
