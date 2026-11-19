import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  Play, 
  Pause, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  FileCheck, 
  Hammer, 
  ChevronDown 
} from 'lucide-react';

export const CinematicHero: React.FC = () => {
  const { openQuoteModal, navigateTo } = useNavigation();
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-charcoal-950 overflow-hidden">
      {/* Cinematic Video Background / Fallback Backdrop */}
      <div className="absolute inset-0 z-0">
        <video
          id="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover opacity-35 scale-105 transition-opacity duration-1000"
        >
          {/* Architectural Roofing / Coppersmith video stream loop */}
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-working-with-sheet-metal-in-a-workshop-43896-large.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Layered Luxury Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/50 to-charcoal-950" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-2 bg-charcoal-900/90 border border-copper/40 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full mb-6 shadow-copper animate-fadeIn max-w-full">
          <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-copper flex-shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-ivory truncate sm:overflow-visible">
            GAF Certified™ Contractor #1132527 • Houston, TX
          </span>
        </div>

        {/* Master Serif Headline */}
        <h1 className="font-serif text-[26px] sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-bold tracking-tight max-w-5xl leading-[1.15] sm:leading-[1.1] mb-6 break-words">
          Architectural Sheet Metal & <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper via-copper-light to-bronze">
            Precision Roofing Craftsmanship
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed font-sans mb-10">
          Fabricated inside our 2307 Knight Street Houston facility. Specializing in 24-gauge standing seam metal, hand-soldered architectural copper, genuine Vermont slate, and GAF factory-warranted residential roofing systems.
        </p>

        {/* Dual Primary Conversion CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto bg-copper hover:bg-copper-light text-charcoal-950 font-bold px-8 py-4 rounded-sm shadow-copper text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Request an Architectural Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigateTo('projects')}
            className="w-full sm:w-auto bg-charcoal-900/90 hover:bg-charcoal-850 text-ivory border border-charcoal-700 hover:border-copper/50 font-medium px-8 py-4 rounded-sm text-xs uppercase tracking-widest transition-all"
          >
            <span>Explore Our Craftsmanship</span>
          </button>
        </div>

        {/* 4 Trust Metrics Bar */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-charcoal-800/80 text-left">
          <div className="p-3 bg-charcoal-900/60 rounded border border-charcoal-800">
            <div className="flex items-center gap-1.5 text-copper font-serif font-bold text-lg sm:text-xl">
              <span>GAF Certified™</span>
            </div>
            <p className="text-xs text-stone-400 font-mono mt-0.5">Contractor ID #1132527</p>
          </div>

          <div className="p-3 bg-charcoal-900/60 rounded border border-charcoal-800">
            <div className="flex items-center gap-1 text-amber-400 font-serif font-bold text-lg sm:text-xl">
              <span>4.5 / 5.0</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <p className="text-xs text-stone-400 font-mono mt-0.5">13 Verified Reviews</p>
          </div>

          <div className="p-3 bg-charcoal-900/60 rounded border border-charcoal-800">
            <div className="flex items-center gap-1.5 text-ivory font-serif font-bold text-lg sm:text-xl">
              <FileCheck className="w-4 h-4 text-copper" />
              <span>Bunker Hill Permit</span>
            </div>
            <p className="text-xs text-stone-400 font-mono mt-0.5">Permit #20220639 Complete</p>
          </div>

          <div className="p-3 bg-charcoal-900/60 rounded border border-charcoal-800">
            <div className="flex items-center gap-1.5 text-copper font-serif font-bold text-lg sm:text-xl">
              <Hammer className="w-4 h-4" />
              <span>Knight St Shop</span>
            </div>
            <p className="text-xs text-stone-400 font-mono mt-0.5">Houston Brake & Solder Facility</p>
          </div>
        </div>
      </div>

      {/* Video Controls & Pause Button (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={toggleVideo}
          className="bg-charcoal-900/80 hover:bg-charcoal-800 text-stone-300 p-2 rounded-full border border-charcoal-700 transition-colors"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause background loop' : 'Resume background loop'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
