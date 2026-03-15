/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { destinations } from '../data/destinations';

gsap.registerPlugin(ScrollTrigger);

const FeaturedGrid = () => {
  const container = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.gallery-item');

    sections.forEach((section: any) => {
      const img = section.querySelector('.gallery-img');
      const text = section.querySelector('.gallery-text');
      const line = section.querySelector('.reveal-line');

      // 1. AUTO-COLOR + Parallax
      // The image starts grayscale, and turns colorful when centered
      gsap.fromTo(img, 
        { 
          y: -50, 
          scale: 1.1,
          filter: "grayscale(100%) brightness(0.8)" // Start Dark & Gray
        },
        { 
          y: 50,
          scale: 1,
          filter: "grayscale(0%) brightness(1)", // End Colorful & Bright
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom", 
            end: "center center", // Fully colorful when in center
            scrub: true
          }
        }
      );

      // 2. Text Stagger
      gsap.from(text.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          toggleActions: "play none none reverse"
        }
      });

      // 3. Line Draw
      gsap.fromTo(line, 
        { width: "0%" },
        { 
          width: "100%", 
          duration: 1.5, 
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative bg-black text-white py-20 overflow-hidden">
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      <div className="relative z-10">
        <div className="px-6 md:px-12 mb-32">
          <h2 className="text-4xl md:text-8xl font-serif tracking-tighter">
            Selected <span className="text-neutral-600 italic">Journeys</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32 px-4 md:px-12">
          {destinations.map((dest, i) => (
            <div key={dest.id} className="gallery-item group relative">
              
              <div className="reveal-line h-[1px] bg-white/30 mb-12"></div>

              <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-20 items-center`}>
                
                {/* Image */}
                <div className="w-full md:w-[55%] h-[50vh] md:h-[70vh] overflow-hidden relative">
                  <div 
                    className="gallery-img w-full h-[120%] bg-cover bg-center absolute top-[-10%]"
                    style={{ backgroundImage: `url(${dest.img})` }}
                  />
                  
                  {/* NEW DESIGN TOUCH: Coordinates Badge */}
                  <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10 flex flex-col items-end">
                    <span className="text-[10px] text-neutral-400 tracking-widest uppercase">Coordinates</span>
                    <span className="text-xs font-mono text-white">{dest.lat} / {dest.long}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="gallery-text w-full md:w-[35%] space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold border border-white/20 rounded-full px-3 py-1 text-white/60">
                      {dest.id}
                    </span>
                    <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
                      {dest.sub}
                    </p>
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-serif leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    {dest.name}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                    {dest.desc}
                  </p>
                  
                  <button className="flex items-center gap-3 text-sm tracking-widest uppercase pt-4 hover:text-neutral-300 transition-colors">
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                    View Itinerary
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-40"></div>
    </section>
  );
};

export default FeaturedGrid;