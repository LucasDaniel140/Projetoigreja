"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export function AnimatedWelcome() {
  const animationRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      const textWrapper = animationRef.current;
      textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: true })
        .add({
          targets: '.letter',
          opacity: [0, 1],
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i
        }).add({
          targets: '.letter',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 2000
        });
    }
  }, []);

  return (
    <h1 ref={animationRef} className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-primary overflow-hidden">
      Bem vindo
    </h1>
  );
}
