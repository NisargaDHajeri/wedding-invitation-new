import { motion } from "motion/react";
import { Clock, MapPin, Sparkles, Star, Calendar } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  date: string;
  day: string;
  time?: string;
  icon: string;
  color: string;
  details: string;
}

export default function TimelineSection() {
  const events: TimelineItem[] = [
    {
      id: "deva-karya",
      title: "Deva Karya",
      date: "7 July 2026",
      day: "Tuesday",
      icon: "🌼",
      color: "from-amber-400 to-yellow-500",
      details: "Devotional prayers to seek ancestral blessings for the sacred journey ahead."
    },
    {
      id: "engagement",
      title: "Engagement Ceremony",
      date: "8 July 2026",
      day: "Wednesday",
      icon: "💛",
      color: "from-yellow-400 to-amber-600",
      details: "A beautiful ring exchange ceremony bonding two loving souls and their families."
    },
    {
      id: "haldi",
      title: "Haldi Ceremony",
      date: "9 July 2026",
      day: "Thursday",
      icon: "❤️",
      color: "from-red-500 to-rose-600",
      details: "A traditional turmeric pasting ritual filled with vibrant yellow, music, and joy."
    },
    {
      id: "wedding",
      title: "The Holy Matrimony (Wedding)",
      date: "9 July 2026",
      day: "Thursday",
      time: "Muhurta: 12:22 PM",
      icon: "💍",
      color: "from-gold to-gold-dark",
      details: "The sacred pheras, mangalsutra bandhan, and exchange of vows leading to eternity."
    }
  ];

  return (
    <section 
      id="timeline-section" 
      className="relative bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-[#5A0000]/10 px-4 py-24"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-gold/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-maroon/10 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="mb-20 text-center space-y-3">
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-gold font-bold">
            The Auspicious Hours
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wider text-gold gold-text-glow">
            Wedding Details &amp; Timeline
          </h2>
          <div className="gold-divider mx-auto w-48" />
        </div>

        {/* Core Wedding Details Card */}
        <motion.div
          id="wedding-details-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="royal-glass-maroon mb-24 overflow-hidden rounded-3xl border border-gold/30 p-8 md:p-12 relative"
        >
          {/* Accent light shine */}
          <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-gold/10 blur-xl pointer-events-none" />

          <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-gold/20">
            {/* Wedding Date */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="rounded-full bg-gold/10 p-3 text-gold">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">Wedding Date</span>
                <p className="font-serif text-2xl text-white font-semibold">9 July 2026</p>
                <p className="font-serif text-gold-light italic">Thursday</p>
              </div>
            </div>

            {/* Muhurta */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="rounded-full bg-gold/10 p-3 text-gold">
                <Clock className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">Auspicious Muhurta</span>
                <p className="font-serif text-2xl text-gold font-bold">12:22 PM</p>
                <p className="font-sans text-xs text-stone-400">Afternoon Hours</p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex flex-col items-center text-center space-y-4 px-4">
              <div className="rounded-full bg-gold/10 p-3 text-gold">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1 w-full">
                <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">Wedding Venue</span>
                <p className="font-serif text-xl text-white font-semibold leading-snug">
                  Shri Shivabasava Kalyan Mantap
                </p>
                <p className="font-sans text-xs text-stone-400">Bailhongal – 591102</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Visual Tree */}
        <div className="relative mt-12">
          {/* Center Connection Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-6 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-gold/20 via-gold to-gold/20 md:left-1/2 md:-ml-[0.75px]" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  id={`timeline-item-${event.id}`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative flex flex-col md:flex-row md:justify-between"
                >
                  {/* Event Marker Bubble */}
                  <div className="absolute left-6 -translate-x-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-[#0B0B0B] text-xl shadow-lg md:left-1/2">
                    <span className="animate-pulse">{event.icon}</span>
                  </div>

                  {/* Content Blocks - Left Block */}
                  <div className={`pl-16 md:pl-0 md:w-[45%] ${isEven ? "md:text-right" : "md:order-2 md:text-left"}`}>
                    <div className="royal-glass-maroon rounded-2xl p-6 border-gold/10 hover:border-gold/30 transition-all shadow-md group relative">
                      {/* Floating Sparkle hover effect */}
                      <span className="absolute top-3 right-3 text-[10px] text-gold/0 group-hover:text-gold/40 transition-colors">✦</span>
                      
                      <div className="space-y-2">
                        <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
                          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-light font-bold">
                            {event.day}
                          </span>
                          <span className="font-serif text-lg text-white/90 font-semibold">
                            {event.date}
                          </span>
                        </div>

                        <h3 className="font-display text-xl text-gold font-bold tracking-wide">
                          {event.title}
                        </h3>

                        {event.time && (
                          <div className={`inline-flex items-center gap-1.5 rounded-md bg-gold/15 px-2.5 py-1 text-xs text-gold-light ${isEven ? "md:flex-row-reverse" : ""}`}>
                            <Clock className="h-3 w-3" />
                            <span className="font-semibold font-sans">{event.time}</span>
                          </div>
                        )}

                        <p className="font-sans text-stone-300 text-sm leading-relaxed pt-2">
                          {event.details}
                        </p>

                        <div className={`flex items-center gap-1 text-stone-500 text-[11px] pt-3 border-t border-gold/10 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          <MapPin className="h-3 w-3 text-gold/50" />
                          <span className="font-sans">Shri Shivabasava Kalyan Mantap</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for structural balance (Desktop only) */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
