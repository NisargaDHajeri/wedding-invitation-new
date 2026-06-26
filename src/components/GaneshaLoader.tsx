import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface GaneshaLoaderProps {
  onComplete: () => void;
}

export default function GaneshaLoader({ onComplete }: GaneshaLoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // Wait for exit animation to complete before calling onComplete
      setTimeout(onComplete, 1000);
    }, 3200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="ganesha-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B] px-6 text-center"
        >
          {/* Subtle radiating golden background light */}
          <div className="absolute h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative flex flex-col items-center">
            {/* Elegant Minimalist Gold Ganesha SVG */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ 
                scale: [0.85, 1.02, 1], 
                opacity: 1,
                filter: [
                  "drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))",
                  "drop-shadow(0 0 25px rgba(212, 175, 55, 0.7))",
                  "drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))"
                ]
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeOut",
                filter: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
              className="mb-8 w-48 h-48 text-gold flex items-center justify-center"
            >
              <svg
                id="ganesha-svg"
                viewBox="0 0 200 200"
                className="w-full h-full fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Crown / Mukut */}
                <path d="M100,20 L90,45 L110,45 Z" />
                <path d="M93,30 L107,30" />
                <path d="M85,45 Q100,35 115,45" />
                <path d="M82,45 L118,45 L110,60 L90,60 Z" />

                {/* Forehead & Tilak */}
                <path d="M86,60 C80,85 120,85 114,60" />
                <path d="M100,50 L100,75" strokeWidth="3" className="stroke-gold-light" />
                <circle cx="100" cy="50" r="2.5" className="fill-gold" />
                <path d="M93,65 Q100,60 107,65" />
                <path d="M91,70 Q100,65 109,70" />

                {/* Ears */}
                {/* Left Ear */}
                <path d="M86,60 C55,55 50,95 80,105 C85,107 88,103 86,95" />
                {/* Right Ear */}
                <path d="M114,60 C145,55 150,95 120,105 C115,107 112,103 114,95" />

                {/* Eyes (Closed/Meditative) */}
                <path d="M88,80 Q93,84 97,80" />
                <path d="M112,80 Q107,84 103,80" />

                {/* Face, Trunk (Sondh) swirling beautifully to the right */}
                <path d="M96,90 Q100,105 100,120 C100,145 125,145 125,125 C125,115 115,115 115,125 C115,133 108,135 104,130 C100,125 104,100 104,90" />

                {/* Modak on trunk tip */}
                <path d="M125,115 C122,110 128,110 125,115 Z" className="fill-gold" />

                {/* Sacred OM Symbol Accent inside */}
                <path d="M78,140 Q85,135 85,145 Q85,155 75,155 Q82,157 80,165 Q74,170 68,162" strokeWidth="1.5" />
                <path d="M82,142 Q86,140 88,144" strokeWidth="1.5" />
                <circle cx="90" cy="138" r="1" className="fill-gold" />
              </svg>
            </motion.div>

            {/* Glowing Text Mantra */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-3"
            >
              <h2 className="font-display text-lg tracking-[0.25em] text-gold uppercase gold-text-glow font-semibold">
                ॐ श्री गणेशाय नमः
              </h2>
              
              <h1 className="font-serif text-2xl md:text-3xl italic tracking-wider text-gold-light">
                &ldquo;Om Shree Ganeshaya Namah&rdquo;
              </h1>
              
              <div className="flex justify-center items-center gap-2 pt-2">
                <span className="h-[1px] w-8 bg-gold-dark" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                  Seeking Divine Blessings
                </span>
                <span className="h-[1px] w-8 bg-gold-dark" />
              </div>
            </motion.div>

            {/* Luxury Loader Progress Bar */}
            <div className="mt-12 h-[1.5px] w-48 overflow-hidden rounded-full bg-stone-900">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
