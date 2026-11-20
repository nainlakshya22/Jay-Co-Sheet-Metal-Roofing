import React, { useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { X } from 'lucide-react';

export const Lightbox: React.FC = () => {
  const { lightboxImage, closeLightbox } = useNavigation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxImage, closeLightbox]);

  if (!lightboxImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-mocha-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      onClick={closeLightbox}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 min-w-[48px] min-h-[48px] flex items-center justify-center text-stone-300 hover:text-gold bg-mocha-900/90 p-2.5 rounded-full border border-mocha-800 hover:border-gold transition-colors focus:outline-none shadow-lg z-50 active:scale-95"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div 
        className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={lightboxImage.src}
          alt={lightboxImage.caption || 'Jay-Co Architectural Metal and Roofing Portfolio'}
          className="max-w-full max-h-[75vh] object-contain rounded-lg border border-gold/30 shadow-2xl"
        />
        {lightboxImage.caption && (
          <p className="mt-4 text-center text-sm text-gold-100 font-sans tracking-wide bg-mocha-900/90 px-4 py-2 rounded-md border border-gold/20 shadow-md">
            {lightboxImage.caption}
          </p>
        )}
      </div>
    </div>
  );
};
