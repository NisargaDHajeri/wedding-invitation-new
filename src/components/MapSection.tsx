import { motion } from "motion/react";
import { MapPin, Navigation, QrCode } from "lucide-react";

export default function MapSection() {
  const mapUrl = "https://maps.app.goo.gl/57HPJukppThNdVEa6?g_st=aw";
  
  // High-fidelity standard Google Maps Embed query URL
  const embedUrl = "https://maps.google.com/maps?q=Shri%20Shivabasava%20Kalyan%20Mantap%20Bailhongal&t=&z=16&ie=UTF8&iwloc=&output=embed";

  // QR Code generator URL with custom gold foreground (#D4AF37) and dark theme background
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=d4af37&bgcolor=0b0b0b&data=${encodeURIComponent(mapUrl)}`;

  return (
    <section 
      id="location-section" 
      className="relative bg-gradient-to-b from-[#5A0000]/10 via-[#0B0B0B] to-[#0B0B0B] px-4 py-24"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="mb-16 text-center space-y-3">
          <div className="flex justify-center">
            <MapPin className="h-6 w-6 text-gold animate-bounce" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-wider text-gold gold-text-glow">
            Wedding Venue &amp; Directions
          </h2>
          <div className="gold-divider mx-auto w-48" />
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-stone-400 pt-2">
            Shri Shivabasava Kalyan Mantap, Bailhongal
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Embed Google Maps (7 out of 12 cols) */}
          <motion.div
            id="google-maps-frame"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 overflow-hidden rounded-3xl border border-gold/20 bg-black/50 p-2 gold-box-glow h-[450px]"
          >
            <iframe
              title="Shri Shivabasava Kalyan Mantap Google Map"
              src={embedUrl}
              className="w-full h-full rounded-2xl border-0 grayscale filter contrast-125 hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Column: Scan for Location & QR Card (5 out of 12 cols) */}
          <motion.div
            id="qr-code-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 royal-glass-maroon rounded-3xl p-8 md:p-10 border border-gold/30 text-center relative overflow-hidden flex flex-col items-center justify-center space-y-6"
          >
            {/* Top gold glow effect */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            <div className="space-y-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light font-bold">
                Digital Invitation
              </span>
              <h3 className="font-display text-xl text-gold font-bold tracking-widest uppercase">
                Scan for Location
              </h3>
              <p className="font-sans text-stone-300 text-xs leading-relaxed max-w-xs mx-auto">
                Scan the QR code below using your mobile phone camera to open the precise venue location in Google Maps.
              </p>
            </div>

            {/* QR Code Container with scanning overlay line */}
            <div className="relative group p-3 rounded-2xl bg-[#0B0B0B] border border-gold/20">
              <img
                src={qrCodeUrl}
                alt="Venue Google Map QR Code"
                className="w-48 h-48 block rounded-xl relative z-20"
                referrerPolicy="no-referrer"
              />
              
              {/* Pulsing Scan Line */}
              <motion.div
                animate={{ top: ["12px", "190px", "12px"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute left-3 right-3 h-[2px] bg-gold-light/40 z-30 pointer-events-none shadow-[0_0_10px_#D4AF37]"
              />

              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold z-30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold z-30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold z-30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold z-30" />
            </div>

            {/* Address / Helper details */}
            <div className="space-y-4 w-full">
              <div className="text-center font-sans">
                <p className="text-sm text-gold-light font-medium">Shri Shivabasava Kalyan Mantap</p>
                <p className="text-xs text-stone-400">Bailhongal – 591102, Karnataka</p>
              </div>

              {/* Navigate Button */}
              <motion.a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-dark px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0B0B0B] shadow-lg transition-all hover:brightness-110"
              >
                <Navigation className="h-4 w-4 fill-current" />
                Navigate via Maps
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
