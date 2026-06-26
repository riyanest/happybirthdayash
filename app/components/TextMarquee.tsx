import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MessageItem } from '../types';

interface TextMarqueeProps {
  messages: MessageItem[];
}

export default function TextMarquee({ messages }: TextMarqueeProps) {
  // Triple the items array to ensure a dense layout stream without white space gaps
  const loopMessages = [...messages, ...messages, ...messages];

  return (
    <div className="w-full bg-[#0A0A0C] py-12 overflow-hidden flex flex-col gap-6 relative select-none">
      
      {/* Injecting explicit native animation keyframes directly into the DOM structure */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 40s linear infinite;
        }
      `}} />

      {/* Subtle fade edges for screen space masking */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />

      {/* TRACK 1: LEFT TRACK DIRECTIONAL CYCLE */}
      <div className="flex overflow-hidden relative w-full">
        <div className="flex gap-6 whitespace-nowrap animate-marquee-left hover:[animation-play-state:paused]">
          {loopMessages.map((item, idx) => (
            <div 
              key={`left-${idx}`}
              className="inline-flex bg-zinc-900/50 border border-zinc-800/80 px-6 py-4 rounded-xl items-center gap-4 w-[360px] whitespace-normal backdrop-blur-sm flex-shrink-0"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-zinc-700 overflow-hidden bg-zinc-800">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-sm text-white">{item.name}</span>
                  <span className="text-[10px] text-[#E5A93C] font-mono tracking-wider bg-[#E5A93C]/10 px-1.5 py-0.5 rounded">
                    {item.relation.split(' ')[0]}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 italic">"{item.msg}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRACK 2: RIGHT TRACK DIRECTIONAL CYCLE */}
      <div className="flex overflow-hidden relative w-full">
        <div className="flex gap-6 whitespace-nowrap animate-marquee-right hover:[animation-play-state:paused]">
          {[...loopMessages].reverse().map((item, idx) => (
            <div 
              key={`right-${idx}`}
              className="inline-flex bg-zinc-900/20 border border-zinc-900/60 px-6 py-4 rounded-xl items-center gap-4 w-[360px] whitespace-normal flex-shrink-0"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-zinc-800 overflow-hidden bg-zinc-900">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-sm text-zinc-400">{item.name}</span>
                  <MessageCircle size={10} className="text-zinc-600" />
                </div>
                <p className="text-xs text-zinc-500 line-clamp-2 italic">"{item.msg}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}