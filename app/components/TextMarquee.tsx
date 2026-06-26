import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MessageItem } from '../types';

interface TextMarqueeProps {
  messages: MessageItem[];
}

export default function TextMarquee({ messages }: TextMarqueeProps) {
  // Triple the data array to guarantee an infinite continuous loop structure with zero structural layout gaps
  const loopMessages = [...messages, ...messages, ...messages];

  return (
    <div className="w-full bg-[#0A0A0C] py-6 flex flex-col gap-2 relative select-none">
      
      {/* 
        1. Injecting hidden-scrollbar configurations 
        2. Seamless infinite loop keyframe calculations 
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes singleLineMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-hybrid-marquee {
          animation: singleLineMarquee 40s linear infinite;
        }
      `}} />

      {/* Cinematic gradient vignette fade masking edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0C] via-[#0A0A0C]/40 to-transparent z-10 pointer-events-none" />

      <span className="text-[10px] font-mono text-zinc-600 px-4 tracking-wider uppercase mb-1">
        // Roll Credits — Auto-scrolls // Hover to pause & swipe manually
      </span>

      {/* 
        The Scroll Container: 
        - Auto-scrolls infinitely via CSS 
        - 'hover:[animation-play-state:paused]' stalls it instantly 
        - 'overflow-x-auto' handles manual touch swipe momentum concurrently
      */}
      <div className="w-full overflow-x-auto no-scrollbar active:cursor-grabbing cursor-grab py-2">
        <div className="flex gap-4 px-6 w-max animate-hybrid-marquee hover:[animation-play-state:paused]">
          {loopMessages.map((item, idx) => (
            <div 
              key={`hybrid-cell-${idx}`}
              className="bg-zinc-900/50 border border-zinc-800/80 px-6 py-4 rounded-xl flex items-center gap-4 w-[350px] flex-shrink-0 transition-all duration-300 hover:border-[#E5A93C]/40 hover:bg-zinc-900/90 hover:scale-[1.01]"
            >
              {/* Profile Frame Image Asset */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-zinc-700 overflow-hidden bg-zinc-800">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Message Block Area */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-bold text-sm text-white truncate">{item.name}</span>
                  <span className="text-[9px] text-[#E5A93C] font-mono tracking-wider bg-[#E5A93C]/10 px-1.5 py-0.5 rounded whitespace-nowrap">
                    {item.relation.split(' ')[0]}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-2 italic leading-relaxed">
                  "{item.msg}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}