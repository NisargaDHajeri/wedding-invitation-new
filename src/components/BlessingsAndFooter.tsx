import { motion } from "motion/react";
import { Heart, Star } from "lucide-react";

export default function BlessingsAndFooter() {
  return (
    <footer 
      id="footer-section" 
      className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0B] to-[#2D0000]/30 px-6 py-24 text-center border-t border-gold/10"
    >
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl space-y-16">
        
        {/* Blessings Callout */}
        <motion.div
          id="blessings-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <div className="flex justify-center items-center gap-2">
            <span className="h-[1px] w-8 bg-gold-dark" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Blessings</span>
            <span className="h-[1px] w-8 bg-gold-dark" />
          </div>

          <p className="font-serif text-2xl md:text-3xl text-gold-light italic tracking-wide leading-relaxed font-semibold">
            &ldquo;Your blessings and presence are the greatest gifts to us.&rdquo;
          </p>
        </motion.div>

        {/* Traditional Gold Divider Ornament */}
        <div className="flex justify-center py-4">
          <div className="relative flex items-center w-64">
            <span className="h-[1px] w-full bg-gradient-to-r from-transparent to-gold" />
            {/* Elegant Mandala Center SVG symbol */}
            <div className="mx-4 text-gold flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 fill-none stroke-current stroke-[1.5]"
              >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12,2 L12,22 M2,12 L22,12" />
                <path d="M5,5 L19,19 M5,19 L19,5" />
              </svg>
            </div>
            <span className="h-[1px] w-full bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Main Footer Block */}
        <motion.div
          id="footer-thank-you"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-6"
        >
          <h2 className="font-cursive text-5xl text-gold tracking-wide">
            Thank You
          </h2>
          
          <div className="space-y-2">
            <p className="font-display text-lg md:text-xl text-white font-medium tracking-widest uppercase">
              We look forward to celebrating with you.
            </p>
            <p className="font-sans text-stone-500 text-xs tracking-wider">
              Please join us for feast, laughter, and lifelong memories.
            </p>
          </div>

          <div className="pt-10 flex flex-col items-center gap-2">
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-stone-600">
              Vidyadhar &amp; Aishwarya • Shivaprasad &amp; Sonali
            </span>
            <div className="flex justify-center gap-1.5 text-gold/30">
              <Star className="h-3 w-3 fill-current" />
              <Heart className="h-3 w-3 fill-current" />
              <Star className="h-3 w-3 fill-current" />
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
