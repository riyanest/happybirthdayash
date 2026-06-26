"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Volume2, VolumeX } from 'lucide-react';
import { MessageItem } from '../types';

export default function FluidExploreCard({ item }: { item: MessageItem }) {
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideo = (url?: string) => {
    if (!url) return false;
    return /\.(mp4|webm|ogg|mov|m4v)($|\?)/i.test(url);
  };

  const hasMedia = !!(item.img && item.img !== '' && item.img !== 'none');
  const hasVideo = hasMedia && isVideo(item.img);

  // Sync state changes to video audio element properties
  useEffect(() => {
    if (videoRef.current && hasVideo) {
      videoRef.current.muted = !isActive;
    }
  }, [isActive, hasVideo]);

  const toggleOverlay = () => {
    setIsActive(!isActive);
  };

  // Hover control systems for desktop mice tracking
  const handleMouseEnter = () => {
    if (hasMedia) setIsActive(true);
  };

  const handleMouseLeave = () => {
    if (hasMedia) setIsActive(false);
  };

  return (
    <div 
      onClick={hasMedia ? toggleOverlay : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`break-inside-avoid mb-4 group relative rounded-xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 select-none
        ${hasMedia 
          ? 'bg-zinc-900 border border-zinc-800/80 hover:border-[#E5A93C]/40' 
          : 'bg-gradient-to-br from-zinc-900/90 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 min-h-[220px] flex flex-col justify-between hover:border-[#E5A93C]/30'
        }`}
    >
      
      {/* --- CONDITION 1: HAS IMAGE OR VIDEO --- */}
      {hasMedia ? (
        <>
          {hasVideo ? (
            <div className="w-full relative">
              <video 
                ref={videoRef}
                src={item.img}
                className="w-full h-auto object-contain block opacity-90 group-hover:scale-[1.02] transition-all duration-500 ease-out"
                autoPlay
                loop
                muted // Stays default initialized true for mobile autoplay security rules
                playsInline
              />
              
              {/* Dynamic Audio Indicator: Toggles icons matching whether audio is live or cut */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-1.5 rounded-md border border-zinc-800/40 text-zinc-400 z-30 transition-colors group-hover:text-[#E5A93C]">
                {isActive ? (
                  <Volume2 size={12} className="text-[#E5A93C]" />
                ) : (
                  <VolumeX size={12} />
                )}
              </div>
            </div>
          ) : (
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-auto object-contain block opacity-90 group-hover:scale-[1.02] transition-all duration-500 ease-out" 
            />
          )}

          {/* Floating Slate Label Tag */}
          <div className={`absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest text-[#E5A93C] uppercase border border-zinc-800/60 z-10 transition-opacity duration-300 ${isActive ? 'opacity-0' : ''}`}>
            {item.name}
          </div>

          {/* Slide-Up Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/30 transition-all duration-300 flex flex-col justify-end p-5 z-20
              ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <div className={`transition-transform duration-300 ${isActive ? 'translate-y-0' : 'transform translate-y-3'}`}>
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
        </>
      ) : (
        /* --- CONDITION 2: TEXT ONLY --- */
        <>
          <div className="w-full flex items-start justify-between">
            <div>
              <span className="text-[9px] text-[#E5A93C] font-mono uppercase tracking-widest block mb-0.5">
                {item.relation}
              </span>
              <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                {item.name}
              </h4>
            </div>
            <div className="bg-zinc-800/60 p-1.5 rounded-md border border-zinc-700/50 text-zinc-500 group-hover:text-[#E5A93C] transition-colors duration-300">
              <MessageCircle size={12} />
            </div>
          </div>

          <div className="my-6 relative pl-4 border-l-2 border-[#E5A93C]/40">
            <p className="text-sm text-zinc-200 font-light leading-relaxed italic font-serif">
              "{item.msg}"
            </p>
          </div>

          <div className="w-full flex justify-between items-center opacity-40 font-mono text-[9px] text-zinc-500 uppercase tracking-wider group-hover:opacity-80 transition-opacity duration-300">
            <span>// SCENE_CUE</span>
            <span>24_FPS</span>
          </div>
        </>
      )}

    </div>
  );
}