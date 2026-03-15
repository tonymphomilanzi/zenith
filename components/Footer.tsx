"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="h-screen w-full bg-black flex flex-col justify-between px-6 md:px-12 py-12 pb-20 relative overflow-hidden">
      
      {/* 1. TOP SECTION: "Ready to vanish..." */}
      <div className="flex flex-col md:flex-row justify-between w-full relative z-10 pt-20">
        
        {/* Left: Headline & Input */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h3 className="text-4xl md:text-6xl font-serif leading-tight text-white mb-8">
            Ready to vanish into <br /> 
            <span className="italic text-neutral-500">the unknown?</span>
          </h3>
          
          <div className="relative group max-w-md">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-serif text-white outline-none placeholder:text-neutral-700 group-hover:border-white transition-colors duration-500"
            />
            <button className="absolute right-0 top-4 text-xs uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors duration-300">
              Join
            </button>
          </div>
        </div>

        {/* Right: Socials (Raw SVGs) */}
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-8">
             {/* Instagram */}
             <a href="#" className="text-white hover:text-neutral-400 transition-colors transform hover:scale-110 duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             {/* Twitter / X */}
             <a href="#" className="text-white hover:text-neutral-400 transition-colors transform hover:scale-110 duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
             </a>
             {/* LinkedIn */}
             <a href="#" className="text-white hover:text-neutral-400 transition-colors transform hover:scale-110 duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
          </div>
          
          <div className="mt-8 text-right">
             <p className="text-xs text-neutral-600 uppercase tracking-widest mb-2">Based in</p>
             <p className="text-white font-serif italic">Blantyre, MW</p>
          </div>
        </div>
      </div>

      {/* 2. CENTER: THE VIDEO TEXT */}
      {/* We use a mask div to constrain the video */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-0 md:pb-10">
        <div className="relative w-full text-center overflow-hidden">
            
            {/* The Text that acts as a window */}
            <h1 className="text-[21vw] font-serif font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text relative z-20 select-none">
              ZENITH
              {/* This video sits 'inside' the text via CSS background clipping if supported, 
                  but here we place it absolutely behind and use mix-blend-mode for the best support */}
            </h1>

            {/* THE VIDEO */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 mix-blend-screen opacity-50">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-waves-in-the-ocean-4626/1080p.mp4" type="video/mp4" />
                </video>
            </div>
            
            {/* Text Stroke Outline (to make it readable) */}
            <h1 className="absolute top-0 left-0 w-full text-[21vw] font-serif font-black leading-[0.8] tracking-tighter text-transparent z-30"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
              ZENITH
            </h1>

        </div>
      </div>

      {/* 3. BOTTOM: Copyright */}
      <div className="relative z-30 flex justify-between items-end border-t border-white/10 pt-6">
        <div className="text-[10px] text-neutral-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Zenith | All rights reserved
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