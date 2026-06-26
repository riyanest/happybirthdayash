import React from 'react';
import { LucideIcon } from 'lucide-react';
import FluidExploreCard from './FluidExploreCard';
import { MessageItem } from '../types';

interface MessageSectionProps {
  title: string;
  subtitle: string;
  actLabel: string;
  Icon: LucideIcon;
  messages?: MessageItem[]; // Made optional with '?' to stay safe
  alignRight?: boolean;
}

export default function MessageSection({ 
  title, 
  subtitle, 
  actLabel, 
  Icon, 
  messages = [], // 👈 Defaults to an empty array if undefined or missing
  alignRight = false 
}: MessageSectionProps) {
  
  // Safe distribution logic using safe guarding parameters
  const getColumns = (items: MessageItem[]) => {
    const cols: MessageItem[][] = [[], [], []];
    
    // Double check that items exists and is an array before looping
    if (Array.isArray(items)) {
      items.forEach((item, index) => {
        cols[index % 3].push(item);
      });
    }
    
    return cols;
  };

  const columns = getColumns(messages);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
        {columns.map((colItems, colIdx) => (
          <div key={`masonry-col-${colIdx}`} className="flex flex-col gap-4">
            {colItems?.map((item, itemIdx) => (
              <FluidExploreCard key={`item-${colIdx}-${itemIdx}`} item={item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}