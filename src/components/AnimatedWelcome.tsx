
"use client";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const WelcomeText = ({ text, isVisible, className, children }: { text?: string; isVisible: boolean; className?: string, children?: React.ReactNode }) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const textNodes = Array.from(textRef.current.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
            textNodes.forEach(node => {
                if (node.textContent) {
                    const newHtml = node.textContent.replace(
                        /\S/g,
                        "<span class='letter-wrapper' style='display: inline-block; overflow: hidden; padding: 0 2px;'><span class='letter' style='display: inline-block;'>$&</span></span>"
                    );
                    const span = document.createElement('span');
                    span.innerHTML = newHtml;
                    node.parentNode?.replaceChild(span, node);
                }
            });
        }
    }, [text, children]);

    return (
        <h1
            ref={textRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                position: 'relative',
            }}
        >
            {children || text}
        </h1>
    );
};
  
const AnimatedText = ({ text, children, isVisible, className }: { text?: string; children?: React.ReactNode; isVisible: boolean; className?: string }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <WelcomeText text={text} isVisible={isVisible} className={className}>
        {children}
      </WelcomeText>
    </div>
  );
};

export function AnimatedWelcome() {
    const timeline = useRef<anime.AnimeTimelineInstance | null>(null);
    const welcomeContainerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = React.useState(false);

    useEffect(() => {
        const welcomeEl = welcomeContainerRef.current?.querySelector('.welcome-el');
        const homeEl = welcomeContainerRef.current?.querySelector('.home-el');

        if (welcomeEl && homeEl) {
            timeline.current = anime.timeline({ 
                loop: true,
                begin: () => {
                    if(!isReady) setIsReady(true);
                }
            })
            .add({
                targets: welcomeEl.querySelectorAll('.letter, sup'),
                translateY: ["100%", "0%"],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: anime.stagger(100),
            })
            .add({
                targets: welcomeEl.querySelectorAll('.letter, sup'),
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

        return () => {
            timeline.current?.pause();
        };
    }, [isReady]);

  return (
    <div ref={welcomeContainerRef} className="text-center" style={{ position: 'relative', height: '90px', opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease-in' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="welcome-el">
          <AnimatedText isVisible={true} className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-primary whitespace-nowrap">
            Bem-vindo<sup style={{ display: 'inline-block', verticalAlign: 'super', fontSize: '0.5em' }}>(a)</sup>
          </AnimatedText>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="home-el">
            <AnimatedText text="esta é a sua casa" isVisible={true} className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-primary whitespace-nowrap" />
        </div>
      </div>
    </div>
  );
}
