
"use client";

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function InteractiveCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $card = cardRef.current;
    if (!$card) return;

    const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));
    const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

    const centerOfElement = ($el: HTMLElement) => {
        const { width, height } = $el.getBoundingClientRect();
        return [ width/2, height/2 ];
    }

    const pointerPositionRelativeToElement = ($el: HTMLElement, e: PointerEvent) => {
        const pos = [e.clientX, e.clientY];
        const { left, top, width, height } = $el.getBoundingClientRect();
        const x = pos[0] - left;
        const y = pos[1] - top;
        const px = clamp((100 / width) * x);
        const py = clamp((100 / height) * y);
        return { pixels: [x,y], percent: [px,py] }
    }

    const distanceFromCenter = ($card: HTMLElement, x: number, y: number) => {
        const [cx,cy] = centerOfElement($card);
        return [ x - cx, y - cy ];
    }
    
    const closenessToEdge = ($card: HTMLElement, x: number, y: number) => {
        const [cx,cy] = centerOfElement($card);
        const [dx,dy] = distanceFromCenter($card, x, y);
        let k_x = Infinity;
        let k_y = Infinity;
        if (dx !== 0) {
            k_x = cx / Math.abs(dx);
        }    
        if (dy !== 0) {
            k_y = cy / Math.abs(dy);
        }
        return clamp((1 / Math.min(k_x, k_y)), 0, 1);
    }
    
    const angleFromPointerEvent = ($el: HTMLElement, dx: number, dy: number) => {
        let angleRadians = 0;
        let angleDegrees = 0;
        if ( dx !== 0 || dy !== 0 ) {
            angleRadians = Math.atan2(dy, dx);
            angleDegrees = angleRadians * (180 / Math.PI) + 90;
            if (angleDegrees < 0) {
                angleDegrees += 360;
            }
        }
        return angleDegrees;
    }

    const cardUpdate = (e: PointerEvent) => {
        const position = pointerPositionRelativeToElement($card, e);
        const [px,py] = position.pixels;
        const [perx, pery] = position.percent;
        const [dx,dy] = distanceFromCenter($card, px, py);
        const edge = closenessToEdge($card, px, py);
        const angle = angleFromPointerEvent($card, dx, dy);

        $card.style.setProperty('--pointer-x', `${round(perx)}%`);
        $card.style.setProperty('--pointer-y', `${round(pery)}%`);
        $card.style.setProperty('--pointer-deg', `${round(angle)}deg`);
        $card.style.setProperty('--pointer-d', `${round(edge * 100)}`);
    };

    $card.addEventListener("pointermove", cardUpdate);

    return () => {
      $card.removeEventListener("pointermove", cardUpdate);
    };
  }, []);

  return (
    <div ref={cardRef} className={cn("g-card", className)}>
        <div className="glow"></div>
        <div className="g-card-content p-6 flex flex-col">
            {children}
        </div>
    </div>
  );
}
