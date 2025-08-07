"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export function AnimatedWelcome() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h1Ref.current) {
      const textWrapper = h1Ref.current;
      textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: false })
        .add({
          targets: '.letter',
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i
        });
    }
  }, []);

  return (
    <h1
      ref={h1Ref}
      className="font-headline text-4xl font-bold uppercase tracking-tighter sm:text-5xl xl:text-7xl/none text-primary"
      style={{ overflow: 'hidden' }}
    >
      bem vindo
    </h1>
  );
}
