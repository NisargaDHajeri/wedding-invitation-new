import { motion } from "motion/react";
import { Heart, Landmark, Sparkles, Star } from "lucide-react";

export default function CoupleSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="couple-section" 
      className="relative bg-gradient-to-b from-[#0B0B0B] via-[#5A0000]/15 to-[#0B0B0B] px-4 py-24 text-center"
    >
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 space-y-3">
          <div className="flex justify-center">
            <Heart className="h-6 w-6 text-gold fill-gold/10 animate-pulse" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wider text-gold gold-text-glow">
            The Blessed Couples
          </h2>
          <div className="gold-divider mx-auto w-48" />
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-stone-400 max-w-md mx-auto pt-2">
            In union of love, respect, and tradition.
          </p>
        </div>

        {/* Couple Columns */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Left Couple Card - Vidyadhar & Aishwarya */}
          <motion.div
            id="couple-card-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="royal-glass-maroon relative overflow-hidden rounded-3xl p-8 md:p-10 text-center"
          >
            {/* Top gold ornamental arc inside card */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />
            
            <div className="space-y-6">
              {/* Couple Motif */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-black/60 text-gold shadow-lg">
                <span className="font-serif text-xl italic font-bold">V ✦ A</span>
              </div>

              {/* Groom Details */}
              <div className="space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light">Groom</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-wide italic">
                  Vidyadhar
                </h3>
              </div>

              {/* Animated Heart Spacer */}
              <div className="flex items-center justify-center gap-3">
                <span className="h-[0.5px] w-12 bg-gold/30" />
                <Heart className="h-4 w-4 text-gold fill-gold" />
                <span className="h-[0.5px] w-12 bg-gold/30" />
              </div>

              {/* Bride Details */}
              <div className="space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light">Bride</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-wide italic">
                  Aishwarya
                </h3>
              </div>

              {/* Parents Details - Daughter of */}
              <div className="pt-6 border-t border-gold/10 space-y-3">
                <span className="font-display text-xs tracking-widest text-gold uppercase font-semibold">
                  Daughter of
                </span>
                <div className="space-y-1 font-sans">
                  <p className="text-base text-stone-200 font-medium">Mr. Prakash Asundi</p>
                  <p className="text-base text-stone-200 font-medium">Mrs. Rajeshwari Asundi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Couple Card - Shivaprasad & Sonali */}
          <motion.div
            id="couple-card-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="royal-glass-maroon relative overflow-hidden rounded-3xl p-8 md:p-10 text-center"
          >
            {/* Top gold ornamental arc inside card */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

            <div className="space-y-6">
              {/* Couple Motif */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-black/60 text-gold shadow-lg">
                <span className="font-serif text-xl italic font-bold">S ✦ S</span>
              </div>

              {/* Groom Details */}
              <div className="space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light">Groom</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-wide italic">
                  Shivaprasad
                </h3>
              </div>

              {/* Animated Heart Spacer */}
              <div className="flex items-center justify-center gap-3">
                <span className="h-[0.5px] w-12 bg-gold/30" />
                <Heart className="h-4 w-4 text-gold fill-gold" />
                <span className="h-[0.5px] w-12 bg-gold/30" />
              </div>

              {/* Bride Details */}
              <div className="space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light">Bride</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-bold tracking-wide italic">
                  Sonali
                </h3>
              </div>

              {/* Parents Details - Daughter of */}
              <div className="pt-6 border-t border-gold/10 space-y-3">
                <span className="font-display text-xs tracking-widest text-gold uppercase font-semibold">
                  Daughter of
                </span>
                <div className="space-y-1 font-sans">
                  <p className="text-base text-stone-200 font-medium">Mr. Mansingh Patil</p>
                  <p className="text-base text-stone-200 font-medium">Mrs. Megha Patil</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Invited By Section */}
        <motion.div
          id="invited-by-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="royal-glass max-w-2xl mx-auto mt-16 p-8 rounded-3xl border border-gold/20 bg-black/40 relative"
        >
          {/* Decorative small gold corner symbols */}
          <span className="absolute top-4 left-4 text-gold/30 text-xs">✦</span>
          <span className="absolute top-4 right-4 text-gold/30 text-xs">✦</span>
          <span className="absolute bottom-4 left-4 text-gold/30 text-xs">✦</span>
          <span className="absolute bottom-4 right-4 text-gold/30 text-xs">✦</span>

          <div className="space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold font-bold">
              With Respect &amp; Affection
            </span>
            <h3 className="font-display text-lg md:text-xl text-gold-light tracking-widest font-semibold">
              INVITED BY
            </h3>
            
            <div className="space-y-2 py-2">
              <p className="font-serif text-2xl text-white italic tracking-wide font-medium">
                Mr. Chandrashekhar Shetti
              </p>
              <p className="font-serif text-2xl text-white italic tracking-wide font-medium">
                Mrs. Shanta Shetti
              </p>
            </div>

            <div className="gold-divider mx-auto w-32" />
            
            <p className="font-sans text-sm text-stone-300 leading-relaxed max-w-md mx-auto pt-2">
              Cordially invite you to join them in celebrating the auspicious wedding of their beloved sons.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
