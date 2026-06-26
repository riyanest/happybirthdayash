import React from 'react';
import { Film, Clapperboard, Heart, Users, Camera, MessageCircle } from 'lucide-react';

// 1. Define TypeScript interface for message items
interface MessageItem {
  name: string;
  relation: string;
  msg: string;
  img: string;
}

export default function BirthdayProject() {
  const familyMessages: MessageItem[] = [
    { 
      name: "Mummy", 
      relation: "The Directors of Life", 
      msg: "Mera beta meri hothon ki hansi hai ❤️.", 
      img: "/mummy.jpeg"
    },
    { 
      name: "Usha", 
      relation: "Co-Writer since Day 1", 
      msg: "Having my brother in my life means having a constant source of support, understanding, laughter, and unconditional love shown through gifting rather than words.", 
      img: "/usha.jpeg"
    },
    { 
      name: "Daddy", 
      relation: "The Directors of Life", 
      msg: "Mera beta mere dil ki dhadkan hai.", 
      img: "/Daddy.jpeg"
    },
    { 
      name: "Friend", 
      relation: "The Co-Actor In Life", 
      msg: "Having Punna in my life is like having a Joey to my Chandler because I can always count on him 🥰 and also because he is the dumb one", 
      img: "/friend1.jpeg"
    },
    { 
      name: "Sakshi", 
      relation: "The Co-Actor in Life", 
      msg: "I’d say uyi amma!! But trust me having you was like getting the older brother I never had,annoying at times but somehow always there at the right time 🫶🏻🫶🏻Happy Birthday yassshhh!!", 
      img: "/sakshi.jpeg"
    },
    { 
      name: "Kartik", 
      relation: "The Co-Actor in Life", 
      msg: "Happy birthday, you magnificent silly fellow!", 
      img: "/kartik.jpeg"
    },
    { 
      name: "Payal", 
      relation: "The Co-Actor in Life", 
      msg: "Yash somehow manages to be annoying and dependable at the same time.", 
      img: "/payal.jpeg"
    },
    { 
      name: "Payal", 
      relation: "The Co-Actor in Life", 
      msg: "Yash somehow manages to be annoying and dependable at the same time.", 
      img: "/payal.jpeg"
    },
    { 
      name: "Shamita", 
      relation: "The Co-Actor in Life", 
      msg: "Having yash in my life is like behind the scene cameras that catches me at my embarrassing moments🤣", 
      img: "/shamita.jpeg"
    },
    { 
      name: "Viraj", 
      relation: "The Co-Actor in Life", 
      msg: "Aata ha motha houn surya honar ka?? A personal cure for depression. Whenever I feel low/depressed, I call him. For a moment I just let go of my worries, listen to his stories and enter the magical world of Punna. He's not my friend, he's my brother♥️", 
      img: "/viraj.jpeg"
    },
    { 
      name: "AAshka", 
      relation: "The Co-Actor in Life", 
      msg: "Having Yash in my life is basically like having an older brother that you just keep fighting with and bantering with. Always making fun of each other and playfully fighting but deep down we also know that we can always rely on each other 🥰🫶🏻", 
      img: "/aashka.jpeg"
    },
  ];

  const friendMessages: MessageItem[] = [
    { 
      name: "Rahul", 
      relation: "The Joey to my Chandler", 
      msg: "Could you BE any older? Cheers to 27 years of movie marathons and chaos.", 
      img: "/api/placeholder/600/600" 
    },
    { 
      name: "Ananya", 
      relation: "The Cinephile Crew", 
      msg: "Happy Birthday! May your 27th year have the scale of a Tollywood blockbuster and the heart of a classic.", 
      img: "/api/placeholder/800/500" 
    },
  ];

  // 2. Explicitly type the item prop to satisfy the production compiler build
  const FluidExploreCard = ({ item }: { item: MessageItem }) => (
    <div className="break-inside-avoid mb-4 group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 cursor-pointer shadow-md transition-all duration-300 hover:border-[#E5A93C]/40">
      
      <img 
        src={item.img} 
        alt={item.name} 
        className="w-full h-auto object-contain block opacity-90 group-hover:scale-[1.02] transition-all duration-500 ease-out" 
      />

      {/* Floating Slate Label Tag */}
      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest text-[#E5A93C] uppercase border border-zinc-800/60 z-10 group-hover:opacity-0 transition-opacity duration-300">
        {item.name}
      </div>

      {/* Slide-Up Interactive Text Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-[9px] text-[#E5A93C] font-mono uppercase tracking-widest block mb-0.5">
            {item.relation}
          </span>
          <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
            {item.name} <MessageCircle size={14} className="text-zinc-500" />
          </h4>
          <p className="text-xs text-zinc-300 font-light mt-1.5 leading-relaxed italic">
            "{item.msg}"
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5F5F7] font-sans selection:bg-[#E5A93C] selection:text-black overflow-x-hidden">
      
      {/* 1. HERO BANNER: CINEMATIC OPENING */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,169,60,0.1)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000')] bg-cover" />

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
        
        <div className="absolute bottom-0 left-0 w-full h-6 border-t border-b border-zinc-800 flex justify-between px-4 items-center opacity-40 font-mono text-[10px] text-zinc-600">
          <span>▶︎ PLAY</span>
          <span>00:27:00:00</span>
          <span>RAW 4K</span>
        </div>
      </section>

      {/* 2. SECTION: FAMILY (The One Called Home) */}
      <section className="py-24 max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs uppercase tracking-widest font-mono text-[#E5A93C] flex items-center justify-center md:justify-start gap-2 mb-2">
            <Heart size={14} /> ACT I
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white">
            The One Called Home
          </h2>
          <p className="text-zinc-500 text-sm mt-2 font-mono">// The foundation, the anchor, the core cast</p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 custom-masonry-wrapper">
          {familyMessages.map((item, index) => (
            <FluidExploreCard key={index} item={item} />
          ))}
        </div>
      </section>

      {/* 3. TRANSITION / DISTINGUISHING DIVIDER */}
      <div className="w-full bg-zinc-950 py-12 border-t border-b border-zinc-900 relative overflow-hidden flex items-center justify-center">
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
        <div className="mb-12 text-center md:text-right">
          <span className="text-xs uppercase tracking-widest font-mono text-[#E5A93C] flex items-center justify-center md:justify-end gap-2 mb-2">
            <Users size={14} /> ACT II
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white">
            The One Where Ordinary Days Became Stories
          </h2>
          <p className="text-zinc-500 text-sm mt-2 font-mono">// Co-stars, plot twists, and late-night edits</p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 custom-masonry-wrapper">
          {friendMessages.map((item, index) => (
            <FluidExploreCard key={index} item={item} />
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