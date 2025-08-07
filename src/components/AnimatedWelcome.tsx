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

    // Added a wrapper div to handle positioning and centering
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', textAlign: 'center' }}>
            <h1
                ref={textRef}
                className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-primary whitespace-nowrap"
                style={{
                    opacity: isVisible ? 1 : 0,
                    position: 'relative', // Changed from absolute
                }}
            >
                {text /* This will be replaced by spans */}
            </h1>
        </div>
    );
};
  
export function AnimatedWelcome() {
    const timeline = useRef<anime.AnimeTimelineInstance | null>(null);

    useEffect(() => {
        // Querying for the h1 elements inside the component might be more robust
        // but for now, this will work as long as the structure is maintained.
        setTimeout(() => {
            const h1s = document.querySelectorAll('h1[class*="font-headline"]');
            const welcomeEl = h1s[0];
            const homeEl = h1s[1];

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
                    offset: '+=1000' // Wait 1s before hiding
                })
                .add({
                    targets: homeEl.querySelectorAll('.letter'),
                    translateY: ["100%", "0%"],
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1000,
                    delay: anime.stagger(100),
                }, '-=800') // Overlap with previous animation
                .add({
                    targets: homeEl.querySelectorAll('.letter'),
                    translateY: ["0%", "-100%"],
                    opacity: [1, 0],
                    easing: "easeInExpo",
                    duration: 900,
                    delay: anime.stagger(100),
                    offset: '+=1000' // Wait 1s
                });
            }
        }, 100); // A small delay to ensure elements are in the DOM

      }, []);

  return (
    <div style={{ position: 'relative', height: '90px', width: '100%' }}>
      <WelcomeText text="Bem vindo" isVisible={true} />
      <WelcomeText text="esta é a sua casa" isVisible={true} />
    </div>
  );
}
