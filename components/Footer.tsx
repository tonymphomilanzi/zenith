"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = () => {
  const container = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    // Parallax the Big Text
    gsap.fromTo(titleRef.current, 
      { y: -50 },
      { 
        y: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true
        }
      }
    );
  }, { scope: container });

  return (
    <footer ref={container} className="relative bg-black text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/10 overflow-hidden">
      
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 mb-32 relative z-10">
        
        {/* Left: Call to Action */}
        <div className="space-y-8 max-w-lg">
          <h3 className="text-3xl md:text-4xl font-serif leading-tight">
            Ready to vanish into the <br /> 
            <span className="italic text-neutral-500">unknown?</span>
          </h3>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-[0.2em] text-neutral-400 uppercase">Newsletter</label>
            <div className="flex border-b border-white/30 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent outline-none w-full placeholder:text-neutral-700"
              />
              <button className="text-xs uppercase tracking-widest hover:text-neutral-400 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Right: Navigation & Socials */}
        <div className="flex gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-2">Sitemap</h4>
            {["Destinations", "Journal", "About", "Concierge"].map((item) => (
              <a key={item} href="#" className="hover:text-neutral-400 transition-colors font-serif text-lg">
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-2">Socials</h4>
            <div className="flex gap-4">
              
              {/* Instagram SVG */}
              <a href="#" className="hover:scale-125 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Twitter/X SVG */}
              <a href="#" className="hover:scale-125 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a href="#" className="hover:scale-125 transition-transform duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: MASSIVE WATERMARK */}
      <div className="relative border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-end">
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-4 md:mb-0">
          © {new Date().getFullYear()} Zenith Travel. All Rights Reserved.
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-[18vw] leading-[0.75] font-serif font-bold text-neutral-900 select-none pointer-events-none mix-blend-difference"
        >
          ZENITH
        </h1>
      </div>

    </footer>
  );
};

export default Footer;