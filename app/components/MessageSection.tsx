import React from 'react';
import { LucideIcon } from 'lucide-react';
import FluidExploreCard from './FluidExploreCard';
import { MessageItem } from '../types';

interface MessageSectionProps {
  title: string;
  subtitle: string;
  actLabel: string;
  Icon: LucideIcon;
  messages: MessageItem[];
  alignRight?: boolean;
}

export default function MessageSection({ 
  title, 
  subtitle, 
  actLabel, 
  Icon, 
  messages, 
  alignRight = false 
}: MessageSectionProps) {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 md:px-8">
      <div className={`mb-12 text-center ${alignRight ? 'md:text-right' : 'md:text-left'}`}>
        <span className={`text-xs uppercase tracking-widest font-mono text-[#E5A93C] flex items-center justify-center ${alignRight ? 'md:justify-end' : 'md:justify-start'} gap-2 mb-2`}>
          <Icon size={14} /> {actLabel}
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-white">
          {title}
        </h2>
        <p className="text-zinc-500 text-sm mt-2 font-mono">{subtitle}</p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 custom-masonry-wrapper">
        {messages.map((item, index) => (
          <FluidExploreCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}