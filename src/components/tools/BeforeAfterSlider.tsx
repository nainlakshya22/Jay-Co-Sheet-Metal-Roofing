import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  afterImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  beforeLabel = "Existing Weathered Roof & Failed Caulk Flashings",
  afterLabel = "Jay-Co Standing Seam & Hand-Soldered Copper Details",
  title = "Precision Architectural Transformation",
  description = "Slide to compare compromised, weathered roofing substrates against Jay-Co's custom-fabricated 24-gauge standing seam and soldered copper detailing."
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(2, Math.min((x / rect.width) * 100, 98));
    setSliderPosition(percent);
  }, []);

  // Global mouse/touch move listener for smooth dragging even outside container
  React.useEffect(() => {
    if (!isDragging) return;

    const onGlobalMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const onGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const onGlobalTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const onGlobalTouchEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', onGlobalMouseMove);
    window.addEventListener('mouseup', onGlobalMouseUp);
    window.addEventListener('touchmove', onGlobalTouchMove);
    window.addEventListener('touchend', onGlobalTouchEnd);

    return () => {
      window.removeEventListener('mousemove', onGlobalMouseMove);
      window.removeEventListener('mouseup', onGlobalMouseUp);
      window.removeEventListener('touchmove', onGlobalTouchMove);
      window.removeEventListener('touchend', onGlobalTouchEnd);
    };
  }, [isDragging, handleMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition(prev => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition(prev => Math.min(95, prev + 5));
    }
  };

  return (
    <div className="bg-mocha-900 border border-gold/30 rounded-sm shadow-luxury p-6 sm:p-10">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-mocha-800 pb-8 mb-8">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-mocha-850 text-gold rounded border border-gold/30">
              <ArrowLeftRight className="w-4 h-4 text-amber" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-gold font-semibold">
              Interactive Craftsmanship Comparison
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-bold leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans pt-1">
            {description}
          </p>
        </div>
        <div className="text-right hidden md:block flex-shrink-0">
          <span className="text-xs text-stone-400 font-mono bg-mocha-950 px-3 py-1.5 rounded border border-mocha-800">
            Drag divider or use ← / → arrows
          </span>
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] rounded overflow-hidden select-none cursor-ew-resize border border-gold/40 shadow-luxury"
        onMouseDown={e => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={e => {
          setIsDragging(true);
          if (e.touches.length > 0) handleMove(e.touches[0].clientX);
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after transformation comparison slider"
      >
        {/* AFTER IMAGE (Background / Full Width) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER BADGE */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-mocha-950/95 backdrop-blur-md border border-gold/60 text-ivory px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-xs font-medium shadow-gold z-10 pointer-events-none flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse flex-shrink-0" />
          <span><strong className="text-gold">AFTER:</strong> <span className="hidden sm:inline">{afterLabel}</span><span className="sm:hidden">Jay-Co Craftsmanship</span></span>
        </div>

        {/* BEFORE IMAGE (Clipped on Left) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
          />
          {/* BEFORE BADGE */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-mocha-950/95 backdrop-blur-md border border-mocha-700 text-stone-300 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-[11px] sm:text-xs font-medium shadow-lg z-10 pointer-events-none flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
            <span><strong className="text-red-400">BEFORE:</strong> <span className="hidden sm:inline">{beforeLabel}</span><span className="sm:hidden">Weathered Substrate</span></span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-light via-gold to-amber shadow-2xl z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Drag Handle (48px Touch Target) */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-mocha-950 border-2 border-gold text-amber shadow-gold flex items-center justify-center cursor-ew-resize active:scale-110 transition-transform"
            aria-label="Drag divider handle"
          >
            <ArrowLeftRight className="w-5 h-5 text-amber" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-stone-400 font-mono">
        <span>← Weathered Substrate & Degradation</span>
        <span className="text-gold font-medium">100% Watertight Hand-Soldered Integrity →</span>
      </div>
    </div>
  );
};
