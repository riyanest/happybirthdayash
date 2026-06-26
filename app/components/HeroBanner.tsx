import React from 'react';
import { Clapperboard } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/50 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,169,60,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000')] bg-cover" />

      {/* Production Slate Details */}
      <div className="absolute top-8 left-8 hidden md:block text-left font-mono text-xs text-zinc-500 uppercase tracking-widest z-20">
        <p>PROD: YASH_BIRTHDAY_27</p>
        <p>ROLL: 1999 // SCENE: 27</p>
        <p>DIRECTOR: LIFE</p>
      </div>

      <div className="z-20 max-w-4xl space-y-6 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#E5A93C] text-xs font-mono uppercase tracking-widest animate-pulse">
          <Clapperboard size={14} /> Action! Chapter 27
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase font-serif bg-gradient-to-b from-white via-[#F5F5F7] to-zinc-500 bg-clip-text text-transparent drop-shadow-2xl">
          Happy Birthday <span className="text-[#E5A93C] block md:inline font-sans font-extrabold">Yash</span>
        </h1>

        <div className="h-[2px] w-24 bg-[#E5A93C] mx-auto my-4 shadow-[0_0_10px_#E5A93C]" />

        <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed italic">
          "Congrats on turning 27! You're now officially in the sweet spot between <span className="text-white font-normal underline decoration-[#E5A93C] decoration-2">reckless</span> and <span className="text-white font-normal underline decoration-[#E5A93C] decoration-2">responsible</span>."
        </p>

        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest pt-8">
          Scroll for Featured Presentation
        </p>
      </div>
      
      {/* Bottom Film Strip Decors */}
      <div className="absolute bottom-0 left-0 w-full h-6 border-t border-b border-zinc-800 flex justify-between px-4 items-center opacity-40 font-mono text-[10px] text-zinc-600">
        <span>▶︎ PLAY</span>
        <span>00:27:00:00</span>
        <span>RAW 4K</span>
      </div>
    </section>
  );
}