import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MessageItem } from '../types';

export default function FluidExploreCard({ item }: { item: MessageItem }) {
  return (
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

      {/* Slide-Up Overlay */}
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
}