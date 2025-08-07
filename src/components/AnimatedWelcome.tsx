"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const WelcomeText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (textRef.current) {
            textRef.current.innerHTML = text.replace(
            /\S/g,
            "<span class='letter-wrapper' style='display: inline-block; overflow: hidden;'><span class='letter' style='display: inline-block;'>$&</span></span>"
            );
        }
    }, [text]);

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', textAlign: 'center' }}>
            <h1
                ref={textRef}
                className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-primary whitespace-nowrap"
                style={{
                    opacity: isVisible ? 1 : 0,
                    position: 'relative',
                }}
            >
                {text}
            </h1>
        </div>
    );
};
  
type AnimatedWelcomeProps = {
    position?: 'top' | 'bottom' | 'center';
};

export function AnimatedWelcome({ position = 'center' }: AnimatedWelcomeProps) {
    const timeline = useRef<anime.AnimeTimelineInstance | null>(null);

    useEffect(() => {
        // Use a more specific selector to avoid conflicts
        const selectorSuffix = position === 'top' ? '-top' : position === 'bottom' ? '-bottom' : '';
        const welcomeEl = document.querySelector(`.welcome-el${selectorSuffix}`);
        const homeEl = document.querySelector(`.home-el${selectorSuffix}`);

        if (welcomeEl && homeEl) {
            timeline.current = anime.timeline({ 
                loop: true,
            })
            .add({
                targets: welcomeEl.querySelectorAll('.letter'),
                translateY: ["100%", "0%"],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: anime.stagger(100),
            })
            .add({
                targets: welcomeEl.querySelectorAll('.letter'),
                translateY: ["0%", "-100%"],
                opacity: [1, 0],
                easing: "easeInExpo",
                duration: 900,
                delay: anime.stagger(100),
                offset: '+=1000'
            })
            .add({
                targets: homeEl.querySelectorAll('.letter'),
                translateY: ["100%", "0%"],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: anime.stagger(100),
            }, '-=800')
            .add({
                targets: homeEl.querySelectorAll('.letter'),
                translateY: ["0%", "-100%"],
                opacity: [1, 0],
                easing: "easeInExpo",
                duration: 900,
                delay: anime.stagger(100),
                offset: '+=1000'
            });
        }
    }, [position]);

  return (
    <div style={{ position: 'relative', height: '90px', width: '100%' }}>
      <div className={`welcome-el-${position}`}>
        <WelcomeText text="Bem vindo" isVisible={true} />
      </div>
      <div className={`home-el-${position}`}>
        <WelcomeText text="esta é a sua casa" isVisible={true} />
      </div>
    </div>
  );
}
