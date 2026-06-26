import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Calendar, Heart, Sparkles } from "lucide-react";

export default function HeroSection() {
  const targetDate = new Date("2026-07-09T12:22:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isOver: false
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="hero-section" 
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B0B0B] via-[#2D0000]/30 to-[#0B0B0B] px-4 py-20 text-center"
    >
      {/* Background Soft Golden Aura glow */}
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Decorative Traditional Indian Border Corner Accents */}
      <div className="absolute top-8 left-8 z-20 h-16 w-16 border-t-2 border-l-2 border-gold/30 rounded-tl-xl pointer-events-none" />
      <div className="absolute top-8 right-8 z-20 h-16 w-16 border-t-2 border-r-2 border-gold/30 rounded-tr-xl pointer-events-none" />
      <div className="absolute bottom-8 left-8 z-20 h-16 w-16 border-b-2 border-l-2 border-gold/30 rounded-bl-xl pointer-events-none" />
      <div className="absolute bottom-8 right-8 z-20 h-16 w-16 border-b-2 border-r-2 border-gold/30 rounded-br-xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-4xl space-y-8"
      >
        {/* Sacred Sparkle Top Header */}
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-3">
          <Sparkles className="h-5 w-5 text-gold animate-pulse-slow" />
          <p className="font-display text-xs md:text-sm tracking-[0.4em] text-gold uppercase gold-text-glow font-medium">
            शुभ विवाह • Shubh Vivah
          </p>
          <Sparkles className="h-5 w-5 text-gold animate-pulse-slow" />
        </motion.div>

        {/* Cinematic Verse */}
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="font-cursive text-3xl md:text-4xl text-gold-light tracking-wide">
            Two Hearts, One Journey,
          </p>
          <p className="font-display text-2xl md:text-4xl tracking-[0.2em] text-white font-semibold">
            FOREVER BEGINS
          </p>
        </motion.div>

        {/* Royal Divider */}
        <motion.div variants={itemVariants} className="flex justify-center py-2">
          <div className="relative flex items-center w-64">
            <span className="h-[1px] w-full bg-gradient-to-r from-transparent to-gold-dark" />
            <Heart className="mx-3 h-5 w-5 text-gold fill-gold/20 animate-pulse" />
            <span className="h-[1px] w-full bg-gradient-to-l from-transparent to-gold-dark" />
          </div>
        </motion.div>

        {/* Couple Names display */}
        <motion.div variants={itemVariants} className="py-4 space-y-6">
          <div className="space-y-2">
            <h1 className="font-serif text-4xl md:text-6xl text-gold font-bold tracking-wide italic">
              Vidyadhar <span className="font-cursive text-3xl md:text-5xl text-white not-italic mx-1">❤️</span> Aishwarya
            </h1>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-stone-500">
              With Hearts Full of Joy
            </p>
          </div>

          {/* Elegant "and" connector */}
          <div className="flex justify-center items-center gap-4">
            <span className="h-[1px] w-12 bg-gold/20" />
            <span className="font-cursive text-2xl text-gold-light">&amp;</span>
            <span className="h-[1px] w-12 bg-gold/20" />
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-4xl md:text-6xl text-gold font-bold tracking-wide italic">
              Shivaprasad <span className="font-cursive text-3xl md:text-5xl text-white not-italic mx-1">❤️</span> Sonali
            </h1>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-stone-500">
              Together with their Families
            </p>
          </div>
        </motion.div>

        {/* Save the Date Notice */}
        <motion.div variants={itemVariants} className="space-y-2 pt-4">
          <h3 className="font-display text-sm md:text-base tracking-[0.3em] text-gold uppercase">
            SAVE THE DATE
          </h3>
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-maroon/20 px-6 py-2 backdrop-blur-md">
            <Calendar className="h-4 w-4 text-gold" />
            <span className="font-serif text-lg md:text-xl text-white tracking-wider">
              9 July 2026, Thursday
            </span>
          </div>
        </motion.div>

        {/* Countdown Timer Widget */}
        <motion.div variants={itemVariants} className="pt-6">
          {!timeLeft.isOver ? (
            <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hrs", val: timeLeft.hours },
                { label: "Mins", val: timeLeft.minutes },
                { label: "Secs", val: timeLeft.seconds }
              ].map((t, idx) => (
                <div 
                  key={idx} 
                  className="royal-glass flex flex-col justify-center rounded-xl p-3 border-gold/20 bg-black/50"
                >
                  <span className="font-display text-2xl md:text-4xl text-gold font-bold tracking-tight">
                    {String(t.val).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[9px] md:text-xs uppercase tracking-widest text-stone-400 mt-1">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="royal-glass-maroon max-w-md mx-auto p-4 rounded-xl text-gold font-serif text-xl tracking-wider animate-pulse">
              ✨ Today is the Blessed Day of Celebration! ✨
            </div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60"
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-stone-400">
            Scroll To Enter
          </span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-5 w-[1.5px] bg-gold"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}
