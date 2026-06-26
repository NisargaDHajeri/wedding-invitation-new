import { motion } from "motion/react";
import { Sparkles, Star } from "lucide-react";

export default function SaveTheDateSection() {
  return (
    <section 
      id="save-the-date-banner" 
      className="relative overflow-hidden bg-[#0B0B0B] border-y border-gold/10 px-4 py-32 text-center"
    >
      {/* Background maroon to black radial highlight */}
      <div className="absolute inset-0 bg-radial-gradient from-[#5A0000]/15 via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Elegant Hanging Mangalsutra (Top-Right) */}
      <div 
        id="mangalsutra-container"
        className="absolute top-0 right-8 md:right-16 z-20 w-32 h-64 pointer-events-none"
        title="Sacred Mangalsutra Motif"
      >
        <svg 
          viewBox="0 0 100 220" 
          className="w-full h-full text-gold stroke-current fill-none" 
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {/* Main Hanging Threads (Symmetric chains) */}
          <path d="M10,0 C10,60 40,110 50,130" stroke="#AA7C11" strokeWidth="1" />
          <path d="M90,0 C90,60 60,110 50,130" stroke="#AA7C11" strokeWidth="1" />
          
          {/* Black Beads (Karimani) spaced out along the hanging arcs */}
          {/* Left arc beads */}
          <circle cx="15" cy="30" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="21" cy="50" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="28" cy="70" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="36" cy="90" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="44" cy="110" r="2.2" className="fill-stone-900 stroke-none" />

          {/* Right arc beads */}
          <circle cx="85" cy="30" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="79" cy="50" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="72" cy="70" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="64" cy="90" r="2.2" className="fill-stone-900 stroke-none" />
          <circle cx="56" cy="110" r="2.2" className="fill-stone-900 stroke-none" />

          {/* Gold separator beads (Pustis) */}
          <circle cx="12" cy="15" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="18" cy="40" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="24" cy="60" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="32" cy="80" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="40" cy="100" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          
          <circle cx="88" cy="15" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="82" cy="40" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="76" cy="60" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="68" cy="80" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />
          <circle cx="60" cy="100" r="1.8" className="fill-gold stroke-gold-dark" strokeWidth="0.5" />

          {/* Golden Centerpiece (The main Pendant / Tanmaniya / Watis) */}
          <g transform="translate(50, 130)">
            {/* Center link ring */}
            <circle cx="0" cy="0" r="3.5" className="stroke-gold fill-[#0B0B0B]" strokeWidth="2" />
            
            {/* Two Golden Cups/Watis of the Mangalsutra */}
            <path d="M-10,12 C-10,3 -2,3 -2,12 C-2,19 -10,19 -10,12 Z" className="fill-gold stroke-gold-dark" strokeWidth="1" />
            <path d="M2,12 C2,3 10,3 10,12 C10,19 2,19 2,12 Z" className="fill-gold stroke-gold-dark" strokeWidth="1" />
            
            {/* Hanging small gold droplets below cups */}
            <circle cx="-6" cy="22" r="1.5" className="fill-gold stroke-none" />
            <line x1="-6" y1="18" x2="-6" y2="22" stroke="#D4AF37" strokeWidth="1" />
            
            <circle cx="6" cy="22" r="1.5" className="fill-gold stroke-none" />
            <line x1="6" y1="18" x2="6" y2="22" stroke="#D4AF37" strokeWidth="1" />
            
            {/* Center diamond/bead detail */}
            <circle cx="0" cy="11" r="2" className="fill-white stroke-none" />
          </g>
        </svg>
      </div>

      {/* Decorative Golden Corner Frames */}
      <div className="absolute top-12 left-12 h-12 w-12 border-t border-l border-gold/20 pointer-events-none" />
      <div className="absolute bottom-12 right-12 h-12 w-12 border-b border-r border-gold/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <div className="flex justify-center items-center gap-2">
          <Star className="h-4 w-4 text-gold fill-gold/10 animate-spin-slow" />
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-gold font-bold">
            The Golden Nuptials
          </span>
          <Star className="h-4 w-4 text-gold fill-gold/10 animate-spin-slow" />
        </div>

        <h2 className="font-display text-5xl md:text-7xl font-black tracking-[0.15em] text-gold uppercase animate-pulse-slow">
          SAVE THE DATE
        </h2>

        <div className="flex justify-center py-2">
          <div className="relative flex items-center w-48">
            <span className="h-[1px] w-full bg-gradient-to-r from-transparent to-gold" />
            <span className="mx-3 text-gold">✦</span>
            <span className="h-[1px] w-full bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-serif text-3xl md:text-5xl text-white font-bold tracking-wider">
            9 July 2026
          </p>
          <p className="font-display text-xl md:text-2xl text-gold-light tracking-[0.2em] uppercase font-semibold">
            Thursday
          </p>
        </div>

        <p className="font-cursive text-3xl text-gold-light max-w-md mx-auto pt-4">
          Please grace us with your warm presence and blessings on our special day.
        </p>

        {/* Floating Sparkle Elements */}
        <div className="absolute top-1/4 left-10 text-gold/30 animate-bounce">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="absolute bottom-1/4 right-10 text-gold/30 animate-bounce delay-1000">
          <Sparkles className="h-5 w-5" />
        </div>
      </motion.div>
    </section>
  );
}
