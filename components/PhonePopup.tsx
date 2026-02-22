"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const PhonePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem("hasSeenPhonePopup");

    if (!hasSeenPopup) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark that user has seen the popup
    localStorage.setItem("hasSeenPhonePopup", "true");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Elegant Backdrop with subtle gradient */}
      <div 
        className="fixed inset-0 backdrop-blur-xs z-50 animate-in fade-in duration-500" 
        onClick={handleClose}
      />

      {/* Luxury Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[70%] max-w-xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
        <div className="bg-foreground border border-background/10 shadow-2xl relative overflow-hidden">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-background/20" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-background/20" />
          
          {/* Close Button - Elegant minimal design */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 lg:top-8 lg:right-8 p-2 border border-background/20 hover:border-background/40 hover:bg-background/5 transition-all duration-300 group z-10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-background/70 group-hover:text-background transition-colors" />
          </button>

          {/* Content */}
          <div className="px-6 py-12 lg:px-16 lg:py-16">
            {/* Header */}
            <div className="text-center mb-10 lg:mb-14">
              <h3 className="text-xs sm:text-sm uppercase tracking-widest text-background/70 mb-2 font-light">
                We're Here to Help
              </h3>
              <div className="w-16 h-px bg-background/30 mx-auto mt-4 mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair-display text-background font-light tracking-wide">
                Contact Us for a Tour
              </h2>
            </div>

            {/* Phone Numbers - Large & Elegant */}
            <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 mb-10">
              <a
                href="tel:+917020704418"
                className="text-3xl sm:text-4xl lg:text-5xl font-playfair-display text-background hover:text-background/70 transition-all duration-300 tracking-wide hover:scale-105 transform"
              >
                +91 70207 04418
              </a>
              
              <div className="flex items-center gap-6 lg:gap-8">
                <div className="w-12 h-px bg-background/20" />
                <span className="text-background/40 text-sm uppercase tracking-widest font-light">or</span>
                <div className="w-12 h-px bg-background/20" />
              </div>

              <a
                href="tel:+917020704420"
                className="text-3xl sm:text-4xl lg:text-5xl font-playfair-display text-background hover:text-background/70 transition-all duration-300 tracking-wide hover:scale-105 transform"
              >
                +91 70207 04420
              </a>
              
              <div className="flex items-center gap-6 lg:gap-8">
                <div className="w-12 h-px bg-background/20" />
                <span className="text-background/40 text-sm uppercase tracking-widest font-light">or</span>
                <div className="w-12 h-px bg-background/20" />
              </div>

              <a
                href="tel:+917020704421"
                className="text-3xl sm:text-4xl lg:text-5xl font-playfair-display text-background hover:text-background/70 transition-all duration-300 tracking-wide hover:scale-105 transform"
              >
                +91 70207 04421
              </a>
            </div>

            {/* Bottom message */}
            <div className="text-center mt-10 lg:mt-12 pt-8 border-t border-background/10">
              <p className="text-xs uppercase tracking-widest text-background/50 font-light">
                Available 24/7 • Tap to Call
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhonePopup;
