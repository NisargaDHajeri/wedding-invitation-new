import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Maximize2, X, Sparkles, Camera, RotateCcw } from "lucide-react";

export default function MemoryGallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  // States to keep track of custom uploaded images from localStorage
  const [vidyadharPhoto, setVidyadharPhoto] = useState<string>("");
  const [shivaprasadPhoto, setShivaprasadPhoto] = useState<string>("");

  // Load custom photos from localStorage on mount
  useEffect(() => {
    const savedVidyadhar = localStorage.getItem("memory_photo_vidyadhar_aishwarya");
    const savedShivaprasad = localStorage.getItem("memory_photo_shivaprasad_sonali");
    if (savedVidyadhar) setVidyadharPhoto(savedVidyadhar);
    if (savedShivaprasad) setShivaprasadPhoto(savedShivaprasad);
  }, []);

  const defaultVidyadhar = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800";
  const defaultShivaprasad = "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=800";

  const memories = [
    {
      id: "vidyadhar_aishwarya",
      src: vidyadharPhoto || defaultVidyadhar,
      isCustom: !!vidyadharPhoto,
      title: "Vidyadhar & Aishwarya",
      subtitle: "Bound by Love, Anchored in Grace",
      description: "A beautiful journey of togetherness begins as Vidyadhar and Aishwarya set forth hand in hand.",
    },
    {
      id: "shivaprasad_sonali",
      src: shivaprasadPhoto || defaultShivaprasad,
      isCustom: !!shivaprasadPhoto,
      title: "Shivaprasad & Sonali",
      subtitle: "A Perfect Harmony of Hearts",
      description: "Two souls, one vision of a shared future full of laughter, love, and traditional blessings.",
    },
  ];

  // Handler for custom image uploads
  const handlePhotoUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Read the file as a base64 string
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      if (base64String) {
        if (id === "vidyadhar_aishwarya") {
          setVidyadharPhoto(base64String);
          localStorage.setItem("memory_photo_vidyadhar_aishwarya", base64String);
        } else {
          setShivaprasadPhoto(base64String);
          localStorage.setItem("memory_photo_shivaprasad_sonali", base64String);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  // Handler to reset custom photo back to default
  const handleResetPhoto = (id: string) => {
    if (id === "vidyadhar_aishwarya") {
      setVidyadharPhoto("");
      localStorage.removeItem("memory_photo_vidyadhar_aishwarya");
    } else {
      setShivaprasadPhoto("");
      localStorage.removeItem("memory_photo_shivaprasad_sonali");
    }
  };

  return (
    <section
      id="memory-gallery"
      className="relative bg-gradient-to-b from-[#0B0B0B] via-[#5A0000]/10 to-[#0B0B0B] px-4 py-20 text-center"
    >
      {/* Background elegant radial glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <div className="flex justify-center items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold animate-pulse" />
            <Heart className="h-6 w-6 text-gold fill-gold/20" />
            <Sparkles className="h-5 w-5 text-gold animate-pulse" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-wider text-gold gold-text-glow">
            Glimpses of Love
          </h2>
          <div className="gold-divider mx-auto w-36" />
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-stone-300 max-w-md mx-auto pt-1">
            Our Pre-Wedding Memories &amp; Moments
          </p>
        </div>

        {/* Memories Grid */}
        <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              id={`memory-card-${index}`}
              key={memory.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative flex flex-col items-center bg-black/40 border border-gold/30 rounded-2xl p-4 transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              {/* Image Frame Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-gold/20 bg-stone-900 shadow-inner">
                <img
                  src={memory.src}
                  alt={memory.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Action Panel (Maximize and Custom Reset) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  {memory.isCustom ? (
                    <button
                      id={`btn-reset-${index}`}
                      onClick={() => handleResetPhoto(memory.id)}
                      className="flex h-9 px-3 items-center gap-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-200 text-xs transition-all duration-300 hover:bg-red-900 cursor-pointer shadow-lg"
                      title="Reset to default photo"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Reset</span>
                    </button>
                  ) : (
                    <span className="text-[10px] text-stone-400 font-sans tracking-widest uppercase bg-black/55 px-2.5 py-1 rounded-full border border-gold/20">
                      Sample Photo
                    </span>
                  )}

                  <button
                    id={`btn-maximize-${index}`}
                    onClick={() => {
                      setActiveImage(memory.src);
                      setActiveTitle(memory.title);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer shadow-lg"
                    title="View full image"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Middle Action: Upload Trigger Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <label
                    htmlFor={`upload-input-${memory.id}`}
                    className="pointer-events-auto flex flex-col items-center gap-2 px-5 py-3 rounded-xl bg-black/80 border border-gold text-gold cursor-pointer transition-all duration-300 hover:bg-gold hover:text-black hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    <Camera className="h-5 w-5" />
                    <span className="font-sans text-xs font-semibold tracking-wider uppercase">
                      Upload Couple Photo
                    </span>
                  </label>
                  <input
                    type="file"
                    id={`upload-input-${memory.id}`}
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(memory.id, e)}
                    className="hidden"
                  />
                  <p className="font-sans text-[10px] text-stone-300 mt-2 tracking-wide">
                    Supports JPG, PNG, WEBP
                  </p>
                </div>

                {/* Inner Card Details Overlay for Visual Balance */}
                <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none">
                  <h4 className="font-serif text-xl md:text-2xl text-gold font-bold tracking-wide mb-1">
                    {memory.title}
                  </h4>
                  <p className="font-sans text-xs text-stone-200 tracking-wider">
                    {memory.subtitle}
                  </p>
                </div>
              </div>

              {/* Outside Card Caption Description */}
              <div className="mt-4 text-center px-2">
                <p className="font-sans text-sm text-stone-300 italic leading-relaxed">
                  "{memory.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            id="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
          >
            {/* Close trigger container background */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setActiveImage(null)}
            />

            {/* Header / Info bar inside Lightbox */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white md:px-6">
              <div className="text-left">
                <h3 className="font-serif text-xl md:text-2xl text-gold font-bold tracking-wider">
                  {activeTitle}
                </h3>
                <p className="font-sans text-[10px] md:text-xs text-stone-400 uppercase tracking-widest mt-0.5">
                  Pre-Wedding Celebration Memories
                </p>
              </div>
              <button
                id="btn-close-lightbox"
                onClick={() => setActiveImage(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900/80 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer shadow-xl"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Image View */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-3xl max-h-[75vh] md:max-h-[80vh] overflow-hidden rounded-2xl border-2 border-gold/40 bg-black shadow-[0_0_50px_rgba(212,175,55,0.3)] z-10 m-2"
            >
              <img
                src={activeImage}
                alt={activeTitle}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain block mx-auto"
              />
            </motion.div>

            {/* Bottom Invitation Note */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center w-full max-w-sm px-4">
              <p className="font-sans text-xs text-stone-400 tracking-[0.2em] uppercase">
                ✦ Your Presence is Our Celebration ✦
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
