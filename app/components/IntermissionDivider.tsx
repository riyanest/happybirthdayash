import React from 'react';
import { Camera, Film } from 'lucide-react';

export default function IntermissionDivider() {
  return (
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
  );
}