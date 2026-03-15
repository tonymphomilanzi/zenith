"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const container = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom", // When top of footer hits bottom of viewport
        end: "bottom bottom",
        scrub: true,
      }
    });

    // 1. Text Parallax (Moves slightly slower than scroll)
    tl.fromTo(textRef.current, 
      { y: -100 },
      { y: 0, ease: "none" }
    );

    // 2. Video Text Scaling (The text gets bigger)
    tl.fromTo(videoRef.current,
      { scale: 0.8, opacity: 0.5 },
      { scale: 1, opacity: 1, ease: "none" },
      "<" // Start at same time
    );

  }, { scope: container });

  return (
    <footer 
      ref={container} 
      className="relative h-screen w-full bg-[#050505] text-white flex flex-col justify-between px-6 md:px-12 py-12 overflow-hidden"
      style={{ zIndex: 0 }} // Sits behind main content
    >
      
      {/* Background Video Texture (Optional ambient background) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
         >
            <source src="https://cdn.coverr.co/videos/coverr-foggy-forest-1606/1080p.mp4" type="video/mp4" />
         </video>
      </div>

      {/* TOP SECTION: Links & Input */}
      <div className="flex flex-col md:flex-row justify-between w-full relative z-10 pt-20">
        
        {/* Newsletter */}
        <div className="w-full md:w-1/3 mb-12 md:mb-0">
          <h3 className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-8">
            Stay in the loop
          </h3>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-serif outline-none placeholder:text-neutral-700 group-hover:border-white transition-colors duration-500"
            />
            <button className="absolute right-0 top-4 text-neutral-500 group-hover:text-white transition-colors duration-300">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex gap-12 md:gap-32">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4">Sitemap</h4>
            {["Destinations", "Concierge", "Journal", "About"].map((item) => (
              <a key={item} href="#" className="text-lg font-serif text-white/60 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-4">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item) => (
              <a key={item} href="#" className="text-lg font-serif text-white/60 hover:text-white transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CENTER: THE VIDEO TEXT SHOWDOWN */}
      <div className="flex-grow flex items-center justify-center relative z-10 my-10">
        <div ref={videoRef} className="relative w-full text-center">
            {/* 
               This text uses the CSS class .video-text 
               We actually put the video BEHIND the text using mix-blend-mode for better browser support
            */}
            <h1 className="text-[15vw] md:text-[20vw] font-black leading-none tracking-tighter mix-blend-overlay opacity-80 select-none">
              ZENITH
            </h1>
            
            {/* The Video that plays "inside" the text via mix-blend-multiply logic */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-60">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full max-h-[30vh] object-cover mix-blend-screen"
                >
                     {/* Ocean Waves Video */}
                    <source src="https://cdn.coverr.co/videos/coverr-waves-in-the-ocean-4626/1080p.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex justify-between items-end border-t border-white/10 pt-6 relative z-10">
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Zenith Experience.
        </div>
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest hidden md:block">
          Designed by You.
        </div>
        <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-white uppercase tracking-widest hover:text-neutral-400 transition-colors"
        >
          Back to Top
        </button>
      </div>

    </footer>
  );
};

export default Footer;