"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Clapperboard } from 'lucide-react';
import { VideoItem } from '../types';

interface FeaturedVideoCarouselProps {
  videos: VideoItem[];
}

export default function FeaturedVideoCarousel({ videos }: FeaturedVideoCarouselProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Triple the items to ensure a seamless infinite marquee track without empty gaps
  const loopVideos = [...videos, ...videos, ...videos];

  // Dynamically mute/unmute videos based on which card ID is currently active
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((id) => {
      const videoElement = videoRefs.current[id];
      if (videoElement) {
        videoElement.muted = activeVideoId !== id;
      }
    });
  }, [activeVideoId]);

  const handleVideoTap = (uniqueIndexKey: string) => {
    // If tapped again, mute it. Otherwise, unmute this specific video.
    setActiveVideoId(activeVideoId === uniqueIndexKey ? null : uniqueIndexKey);
  };

  return (
    <div className="w-full bg-[#0A0A0C] py-8 flex flex-col gap-4 relative select-none border-b border-zinc-900/60">
      
      {/* Scrollbar overrides and layout animation keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes videoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-video-marquee {
          animation: videoMarquee 50s linear infinite;
        }
      `}} />

      {/* Atmospheric screen edge vignetting */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0C] via-[#0A0A0C]/50 to-transparent z-10 pointer-events-none" />

      {/* Section Header Labels */}
      <div className="px-4 md:px-8 max-w-6xl mx-auto w-full mb-2">
        <span className="text-[10px] font-mono text-[#E5A93C] uppercase tracking-widest flex items-center gap-2">
          <Clapperboard size={12} /> Featured Selects // B-Roll Log
        </span>
      </div>

      {/* Main Track Element */}
      <div className="w-full overflow-x-auto no-scrollbar active:cursor-grabbing cursor-grab py-2">
        <div className="flex gap-4 px-6 w-max animate-video-marquee hover:[animation-play-state:paused]">
          {loopVideos.map((item, idx) => {
            const uniqueKey = `${item.id}-${idx}`;
            const isUnmuted = activeVideoId === uniqueKey;

            return (
              <div 
                key={uniqueKey}
                onClick={() => handleVideoTap(uniqueKey)}
                onMouseEnter={() => setActiveVideoId(uniqueKey)}
                onMouseLeave={() => setActiveVideoId(null)}
                className="relative bg-zinc-900 rounded-xl overflow-hidden h-[380px] w-[240px] md:h-[440px] md:w-[280px] flex-shrink-0 border border-zinc-800/80 transition-all duration-500 hover:border-[#E5A93C]/40 hover:scale-[1.01] shadow-xl group"
              >
                {/* Core HTML5 Autoplay Loops */}
                <video 
                  ref={(el) => { videoRefs.current[uniqueKey] = el; }}
                  src={item.videoUrl}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                  autoPlay
                  loop
                  muted={!isUnmuted}
                  playsInline
                />

                {/* Floating Volume Indicator UI */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-zinc-800/60 text-zinc-400 z-20 group-hover:text-[#E5A93C] transition-colors">
                  {isUnmuted ? (
                    <Volume2 size={14} className="text-[#E5A93C]" />
                  ) : (
                    <VolumeX size={14} />
                  )}
                </div>

                {/* Technical aspect stamp overlay across footer limits */}
                <div className="absolute bottom-3 left-4 opacity-30 font-mono text-[9px] text-zinc-400 uppercase tracking-widest pointer-events-none group-hover:opacity-70 transition-opacity z-20">
                  {item.title ? `// ${item.title}` : `// CUT_SEQUENCE_${idx.toString().padStart(2, '0')}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}