"use client";

import React, { useEffect } from 'react';
import anime from 'animejs';

export function AnimatedWelcome() {
  useEffect(() => {
    const pathEls = document.querySelectorAll('.line');
    pathEls.forEach(el => {
      const path = el as SVGPathElement;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    anime({
      targets: '.line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: (el, i) => i * 100,
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="text-primary w-full max-w-lg">
        <svg viewBox="0 0 400 100">
            <g stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* B */}
                <path className="line" d="M10 80V20H40C55 20 55 40 40 40H10"/>
                <path className="line" d="M10 40H45C60 40 60 60 45 60H10"/>
                {/* E */}
                <path className="line" d="M70 80V20H100"/>
                <path className="line" d="M70 50H95"/>
                {/* M */}
                <path className="line" d="M110 80V20L130 50L150 20V80"/>

                {/* V */}
                <path className="line" d="M170 20L190 80L210 20"/>
                {/* I */}
                <path className="line" d="M220 20V80"/>
                {/* N */}
                <path className="line" d="M240 80V20L270 80V20"/>
                {/* D */}
                <path className="line" d="M280 20V80"/>
                <path className="line" d="M280 20C310 20 310 80 280 80"/>
                {/* O */}
                <path className="line" d="M350 50C350 66.568 336.568 80 320 80C303.432 80 290 66.568 290 50C290 33.432 303.432 20 320 20C336.568 20 350 33.432 350 50Z"/>
            </g>
        </svg>
    </div>
  );
}
