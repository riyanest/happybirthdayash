import React from 'react';
import { Film, Clapperboard, Heart, Users, Camera } from 'lucide-react';

export default function BirthdayProject() {
  // Mock data structure for easy customization
  const familyMessages = [
    { name: "Mom & Dad", relation: "The Directors of Life", msg: "Your story is our favorite one to watch unfold. So proud of the filmmaker and person you've become.", img: "/api/placeholder/400/400" },
    { name: "Sister", relation: "Co-Writer since Day 1", msg: "To the Jake Peralta to my Amy Santiago (minus the organizing). Happy 27th, Yash!", img: "/api/placeholder/400/400" },
  ];

  const friendMessages = [
    { name: "Rahul", relation: "The Joey to my Chandler", msg: "Could you BE any older? Cheers to 27 years of movie marathons and chaos.", img: "/api/placeholder/400/400" },
    { name: "Ananya", relation: "The Cinephile Crew", msg: "Happy Birthday! May your 27th year have the scale of a Tollywood blockbuster and the heart of a classic.", img: "/api/placeholder/400/400" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5F5F7] font-sans selection:bg-[#E5A93C] selection:text-black overflow-x-hidden">
      
      {/* 1. HERO BANNER: CINEMATIC OPENING */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-zinc-800">
        {/* Cinematic Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,169,60,0.1)_0%,transparent_60%)]" />
        
        {/* Subtle Film Grain Effect Overlay via CSS */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000')] bg-cover" />

        {/* Floating Production Slate Details */}
        <div className="absolute top-8 left-8 hidden md:block text-left font-mono text-xs text-zinc-500 uppercase tracking-widest z-20">
          <p>PROD: YASH_BIRTHDAY_27</p>
          <p>ROLL: 1999 // SCENE: 27</p>
          <p>DIRECTOR: LIFE</p>
        </div>

        {/* Main Content */}
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
        
        {/* Bottom Film Strip Visual decoration */}
        <div className="absolute bottom-0 left-0 w-full h-6 border-t border-b border-zinc-800 flex justify-between px-4 items-center opacity-40 font-mono text-[10px] text-zinc-600">
          <span>▶︎ PLAY</span>
          <span>00:27:00:00</span>
          <span>RAW 4K</span>
        </div>
      </section>


      {/* 2. SECTION: FAMILY (The One Called Home) */}
      <section className="py-24 max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest font-mono text-[#E5A93C] flex items-center justify-center md:justify-start gap-2 mb-2">
            <Heart size={14} /> ACT I
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white">
            The One Called Home
          </h2>
          <p className="text-zinc-500 text-sm mt-2 font-mono">// The foundation, the anchor, the core cast</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {familyMessages.map((item, index) => (
            <div key={index} className="group bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 border-2 border-zinc-800 group-hover:border-[#E5A93C] transition-colors duration-300 relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-xs text-[#E5A93C] font-mono uppercase tracking-wider">{item.relation}</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">"{item.msg}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. TRANSITION / DISTINGUISHING DIVIDER */}
      <div className="w-full bg-zinc-950 py-12 border-t border-b border-zinc-900 relative overflow-hidden flex items-center justify-center">
        {/* Background Tollywood Film Strip Graphic Style */}
        <div className="absolute inset-0 flex items-center justify-between opacity-10 font-black text-8xl pointer-events-none tracking-widest text-zinc-700 px-4">
          <span>CINEMA</span>
          <span>B99</span>
        </div>
        
        <div className="z-10 flex flex-col items-center text-center px-4 max-w-xl">
          <div className="flex gap-4 mb-4 text-zinc-600">
            <Camera size={20} />
            <span className="text-zinc-500 font-mono">INTERMISSION</span>
            <Film size={20} />
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            "Cool, cool, cool, cool, cool. No doubt, no doubt." — Brooklyn 99
          </p>
        </div>
      </div>


      {/* 4. SECTION: FRIENDS (The One Where Ordinary Days Became Stories) */}
      <section className="py-24 max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center md:text-right">
          <span className="text-xs uppercase tracking-widest font-mono text-[#E5A93C] flex items-center justify-center md:justify-end gap-2 mb-2">
            <Users size={14} /> ACT II
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white">
            The One Where Ordinary Days Became Stories
          </h2>
          <p className="text-zinc-500 text-sm mt-2 font-mono">// Co-stars, plot twists, and late-night edits</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {friendMessages.map((item, index) => (
            <div key={index} className="group bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl flex flex-col sm:flex-row-reverse gap-6 items-center transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80">
              <div className="w-40 h-40 rounded-xl overflow-hidden flex-shrink-0 border-2 border-zinc-800 group-hover:border-[#E5A93C] transition-colors duration-300 relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 text-center sm:text-right flex-1">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-xs text-[#E5A93C] font-mono uppercase tracking-wider">{item.relation}</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">"{item.msg}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* OUTRO FOOTER */}
      <footer className="border-t border-zinc-900 bg-black py-12 text-center text-xs text-zinc-600 font-mono tracking-widest">
        <p>© 2026 YASH PRODUCTION. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 text-[#E5A93C]/60 text-[10px]">DIRECTED WITH LOVE BY FAMILY & FRIENDS</p>
      </footer>

    </div>
  );
}