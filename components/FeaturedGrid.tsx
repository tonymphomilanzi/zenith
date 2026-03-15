"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    id: "01",
    name: "Kyoto",
    sub: "The Ancient Capital",
    desc: "Immerse yourself in the quiet power of tradition. Where shadows play on bamboo paths and time stands still.",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3270&auto=format&fit=crop"
  },
  {
    id: "02",
    name: "Iceland",
    sub: "Fire & Ice",
    desc: "A landscape forged by the gods. Witness the raw, unfiltered beauty of nature at the edge of the world.",
    img: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=3259&auto=format&fit=crop"
  },
  {
    id: "03",
    name: "Tulum",
    sub: "Mayan Coast",
    desc: "Where the jungle meets the jade sea. A sanctuary for the soul, hidden away from the noise of modern life.",
    img: "https://images.unsplash.com/photo-1504541989296-167df755af3f?q=80&w=3000&auto=format&fit=crop"
  },
  {
    id: "04",
    name: "Amangiri",
    sub: "Utah Desert",
    desc: "Minimalist architecture disappears into the canyon rock. A study in silence, space, and the American Southwest.",
    img: "https://images.unsplash.com/photo-1549488347-19416599b5a3?q=80&w=3000&auto=format&fit=crop"
  },
  {
    id: "05",
    name: "Dolomites",
    sub: "Italian Alps",
    desc: "Jagged peaks piercing the sky. The air is crisp, the lakes are emerald, and the journey is vertical.",
    img: "https://images.unsplash.com/photo-1516091873322-9590461bf9a3?q=80&w=3000&auto=format&fit=crop"
  },
  {
    id: "06",
    name: "Marrakech",
    sub: "Red City",
    desc: "A sensory explosion of spice, color, and texture. Lose yourself in the labyrinth of the Medina.",
    img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=3353&auto=format&fit=crop"
  },
  {
    id: "07",
    name: "Maldives",
    sub: "Indian Ocean",
    desc: "Water so clear it looks like glass. The ultimate disconnect from reality, suspended over the blue abyss.",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=3265&auto=format&fit=crop"
  }
];

const FeaturedGrid = () => {
  const container = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.gallery-item');

    sections.forEach((section: any) => {
      const img = section.querySelector('.gallery-img');
      const text = section.querySelector('.gallery-text');
      const line = section.querySelector('.reveal-line');

      // 1. Image Parallax (Standard)
      gsap.fromTo(img, 
        { y: -50, scale: 1.1 },
        { 
          y: 50,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 2. Text Stagger Reveal
      gsap.from(text.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1, // Lines of text appear one by one
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          toggleActions: "play none none reverse"
        }
      });

      // 3. The "Curtain" Line Draw
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
      
      {/* FILM GRAIN OVERLAY: Adds texture to the whole section */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 md:px-12 mb-32">
          <h2 className="text-4xl md:text-8xl font-serif tracking-tighter">
            Selected <span className="text-neutral-600 italic">Journeys</span>
          </h2>
        </div>

        {/* The List */}
        <div className="flex flex-col gap-32 px-4 md:px-12">
          {destinations.map((dest, i) => (
            <div key={dest.id} className="gallery-item group relative">
              
              {/* THE REVEAL LINE */}
              <div className="reveal-line h-[1px] bg-white/30 mb-12"></div>

              <div className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-20 items-center`}>
                
                {/* Image Area */}
                <div className="w-full md:w-[55%] h-[50vh] md:h-[70vh] overflow-hidden relative">
                  <div 
                    className="gallery-img w-full h-[120%] bg-cover bg-center absolute top-[-10%] filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    style={{ backgroundImage: `url(${dest.img})` }}
                  />
                </div>

                {/* Text Area */}
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