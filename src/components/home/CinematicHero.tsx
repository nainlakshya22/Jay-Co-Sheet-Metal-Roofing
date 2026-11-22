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
  Hammer 
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
    <div className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-mocha-950 overflow-hidden">
      {/* 1. Cinematic Architectural Backdrop with Warm Golden-Hour Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt="Jay-Co Architectural Metal Roofing"
          className="w-full h-full object-cover opacity-30 scale-105 transition-opacity duration-1000"
          loading="eager"
        />

        {/* Ambient Warm Golden & Mocha Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mocha-950 via-mocha-950/75 to-mocha-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-mocha-900/40 to-mocha-950/90" />
        
        {/* Soft Breathing Ambient Atmosphere Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold/10 rounded-full blur-[120px] pointer-events-none animate-ambient-glow" />
      </div>

      {/* 2. Floating Golden Light Particles (Low density, subtle elegance) */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-20 left-[15%] w-1.5 h-1.5 rounded-full bg-gold/70 blur-[0.5px] animate-particle-1" />
        <div className="absolute bottom-28 left-[35%] w-2 h-2 rounded-full bg-gold-light/60 blur-[0.5px] animate-particle-2" />
        <div className="absolute bottom-16 right-[25%] w-1.5 h-1.5 rounded-full bg-amber/70 blur-[0.5px] animate-particle-3" />
        <div className="absolute bottom-36 right-[12%] w-2 h-2 rounded-full bg-gold/60 blur-[0.5px] animate-particle-1" />
        <div className="absolute bottom-12 left-[50%] w-1 h-1 rounded-full bg-gold-light/80 blur-[0.5px] animate-particle-2" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
        
        {/* Editorial Sub-Heading Badge */}
        <div className="inline-flex items-center gap-2 bg-mocha-900/95 border border-gold/40 px-4 py-2 rounded-full mb-6 shadow-gold animate-fadeIn max-w-full">
          <ShieldCheck className="w-4 h-4 text-amber flex-shrink-0" />
          <span className="text-xs font-mono tracking-wider text-gold uppercase truncate">
            Houston Architectural Roofing & Sheet Metal • Est. 1988
          </span>
        </div>

        {/* Master Architectural Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-bold tracking-tight max-w-5xl leading-[1.14] mb-6">
          Architectural Metal Roofing <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-amber">
            & Custom Sheet Metal Fabrication
          </span>
        </h1>

        {/* Editorial Narrative */}
        <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed font-sans mb-10">
          Precision-engineered inside our 2307 Knight Street Houston facility. Specializing in 24-gauge standing seam metal, hand-soldered architectural copper, and GAF factory-warranted residential roofing systems built for Texas Gulf Coast storms.
        </p>

        {/* Dual Primary Conversion CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto amber-button-glow font-bold px-8 py-4 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 relative-shimmer group shadow-amber"
          >
            <span>Request an Estimate</span>
            <ArrowRight className="w-4 h-4 text-mocha-950 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => navigateTo('projects')}
            className="w-full sm:w-auto bg-mocha-900/90 hover:bg-mocha-850 text-gold-light border border-gold/40 hover:border-gold font-medium px-8 py-4 rounded-sm text-xs uppercase tracking-widest transition-all duration-300 gold-border-glow"
          >
            <span>View Completed Projects</span>
          </button>
        </div>

        {/* 4 Verified Trust Credentials Bar */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-mocha-800 text-left">
          <div className="p-4 sm:p-5 bg-mocha-900/90 rounded border border-mocha-800/90 hover:border-gold/40 transition-colors">
            <div className="flex items-center gap-1.5 text-gold font-serif font-bold text-lg sm:text-xl">
              <span>GAF Certified™</span>
            </div>
            <p className="text-xs text-stone-300 font-mono mt-1">Contractor ID #1132527</p>
          </div>

          <div className="p-4 sm:p-5 bg-mocha-900/90 rounded border border-mocha-800/90 hover:border-gold/40 transition-colors">
            <div className="flex items-center gap-1.5 text-gold-light font-serif font-bold text-lg sm:text-xl">
              <span>4.5 / 5.0 Rating</span>
              <Star className="w-4 h-4 fill-amber text-amber" />
            </div>
            <p className="text-xs text-stone-300 font-mono mt-1">13 Verified Google Reviews</p>
          </div>

          <div className="p-4 sm:p-5 bg-mocha-900/90 rounded border border-mocha-800/90 hover:border-gold/40 transition-colors">
            <div className="flex items-center gap-1.5 text-ivory font-serif font-bold text-lg sm:text-xl">
              <FileCheck className="w-4 h-4 text-amber" />
              <span>Bunker Hill Permit</span>
            </div>
            <p className="text-xs text-stone-300 font-mono mt-1">Permit #20220639 Complete</p>
          </div>

          <div className="p-4 sm:p-5 bg-mocha-900/90 rounded border border-mocha-800/90 hover:border-gold/40 transition-colors">
            <div className="flex items-center gap-1.5 text-gold font-serif font-bold text-lg sm:text-xl">
              <Hammer className="w-4 h-4 text-amber" />
              <span>Knight St Shop</span>
            </div>
            <p className="text-xs text-stone-300 font-mono mt-1">Houston Fabrication Facility</p>
          </div>
        </div>
      </div>

      {/* Video Controls & Pause Button (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={toggleVideo}
          className="bg-mocha-900/80 hover:bg-mocha-800 text-gold-light p-2 rounded-full border border-mocha-700 transition-colors"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause background loop' : 'Resume background loop'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
