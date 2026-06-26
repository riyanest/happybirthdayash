import React from 'react';
import { Heart, Users } from 'lucide-react';
import { MessageItem } from './types';
import HeroBanner from './components/HeroBanner';
import IntermissionDivider from './components/IntermissionDivider';
import MessageSection from './components/MessageSection';
import TextMarquee from './components/TextMarquee'; // Import your new carousel

export default function BirthdayProject() {
  const familyMessages: MessageItem[] = [
    { name: "Mummy", relation: "The Directors of Life", msg: "Mera beta meri hothon ki hansi hai ❤️.", img: "/mummy.jpeg" },
    { name: "Usha", relation: "Co-Writer since Day 1", msg: "Having my brother in my life means having a constant source of support, understanding, laughter, and unconditional love shown through gifting rather than words.", img: "/usha.jpeg" },
    { name: "Daddy", relation: "The Directors of Life", msg: "Mera beta mere dil ki dhadkan hai.", img: "/Daddy.jpeg" },
    { name: "Friend", relation: "The Co-Actor In Life", msg: "Having Punna in my life is like having a Joey to my Chandler because I can always count on him 🥰 and also because he is the dumb one", img: "/friend1.jpeg" },
    { name: "Sakshi", relation: "The Co-Actor in Life", msg: "I’d say uyi amma!! But trust me having you was like getting the older brother I never had,annoying at times but somehow always there at the right time 🫶 strain Happy Birthday yassshhh!!", img: "/sakshi.jpeg" },
    { name: "Kartik", relation: "The Co-Actor in Life", msg: "Happy birthday, you magnificent silly fellow!", img: "/kartik.jpeg" },
    { name: "Payal", relation: "The Co-Actor in Life", msg: "Yash somehow manages to be annoying and dependable at the same time.", img: "/payal.jpeg" },
    { name: "Shamita", relation: "The Co-Actor in Life", msg: "Having yash in my life is like behind the scene cameras that catches me at my embarrassing moments🤣", img: "/shamita.jpeg" },
    { name: "Viraj", relation: "The Co-Actor in Life", msg: "Aata ha motha houn surya honar ka?? A personal cure for depression. Whenever I feel low/depressed, I call him. For a moment I just let go of my worries, listen to his stories and enter the magical world of Punna. He's not my friend, he's my brother♥️", img: "/viraj.jpeg" },
    { name: "AAshka", relation: "The Co-Actor in Life", msg: "Having Yash in my life is basically like having an older brother that you just keep fighting with and bantering with. Always making fun of each other and playfully fighting but deep down we also know that we can always rely on each other 🥰🫶🏻", img: "/aashka.jpeg" },
  ];

  const friendMessages: MessageItem[] = [
    { name: "Rahul", relation: "The Joey to my Chandler", msg: "Could you BE any older? Cheers to 27 years of movie marathons and chaos.", img: "/api/placeholder/600/600" },
    { name: "Ananya", relation: "The Cinephile Crew", msg: "Happy Birthday! May your 27th year have the scale of a Tollywood blockbuster and the heart of a classic.", img: "/api/placeholder/800/500" },
        { name: "Ananya", relation: "The Cinephile Crew", msg: "Happy Birthday! May your 27th year have the scale of a Tollywood blockbuster and the heart of a classic.", img: "/api/placeholder/800/500" },
            { name: "Ananya", relation: "The Cinephile Crew", msg: "Happy Birthday! May your 27th year have the scale of a Tollywood blockbuster and the heart of a classic.", img: "/api/placeholder/800/500" },
                { name: "Ananya", relation: "The Cinephile Crew", msg: "Happy Birthday! May your 27th year have the scale of a Tollywood blockbuster and the heart of a classic.", img: "/api/placeholder/800/500" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5F5F7] font-sans selection:bg-[#E5A93C] selection:text-black overflow-x-hidden">
      
      <HeroBanner />

      <MessageSection 
        title="The One Called Home"
        subtitle="// The foundation, the anchor, the core cast"
        actLabel="ACT I"
        Icon={Heart}
        messages={familyMessages}
      />

      <IntermissionDivider />

      {/* <MessageSection 
        title="The One Where Ordinary Days Became Stories"
        subtitle="// Co-stars, plot twists, and late-night edits"
        actLabel="ACT II"
        Icon={Users}
        messages={friendMessages}
        alignRight={true}
      /> */}

      {/* ACT II: FIXED LANDSCAPE BANNER + TEXT MARQUEE CAROUSEL */}
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

        {/* The Fixed Landscape Banner on top */}
        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden relative border border-zinc-800 mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200" 
            alt="Friends Section Cinematic Backdrop" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-[1.01] transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 z-20 font-mono text-[11px] text-zinc-400 uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-800">
            🎞️ EXT. FRIENDS ASSEMBLE - NIGHT // TITLE CARD
          </div>
        </div>

        {/* Infinite Text Marquee Component underneath */}
        <TextMarquee messages={friendMessages} />
      </section>

      <footer className="border-t border-zinc-900 bg-black py-12 text-center text-xs text-zinc-600 font-mono tracking-widest">
        <p>© 2026 YASH PRODUCTION. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 text-[#E5A93C]/60 text-[10px]">DIRECTED WITH LOVE BY FAMILY & FRIENDS</p>
      </footer>

    </div>
  );
}