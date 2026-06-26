import { useEffect, useRef, useState } from "react";
import { Music, Music4, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Audio source list for high reliability (Primary: classical flute, Fallback: sitar/ambient flute)
  const audioSources = [
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Bansuri_Raga_Yaman.ogg",
    "https://upload.wikimedia.org/wikipedia/commons/d/df/Raga_Yaman_Alap_on_Sitar.ogg",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // safe general fallback
  ];
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set gentle soft volume as requested
    audio.volume = 0.18;

    // Try autoplay
    const playAttempt = audio.play();
    if (playAttempt !== undefined) {
      playAttempt
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay blocked by browser. Awaiting user interaction.", error);
        });
    }

    // Attempt autoplay upon any user interaction on the page
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
            cleanup();
          })
          .catch((err) => {
            console.log("Play failed on interaction", err);
          });
      } else {
        cleanup();
      }
    };

    const cleanup = () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction, { passive: true });

    return () => cleanup();
  }, [isPlaying]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Manual play toggle failed:", err);
          // Try next source if it failed
          handleAudioError();
        });
    }
  };

  const handleAudioError = () => {
    console.log("Audio source failed. Trying next fallback source.");
    if (currentSrcIndex < audioSources.length - 1) {
      setCurrentSrcIndex((prev) => prev + 1);
      // Wait for React to apply src change, then play
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.volume = 0.18;
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((e) => console.log("Fallback play failed", e));
        }
      }, 100);
    }
  };

  return (
    <div id="audio-container">
      {/* Hidden native HTML5 audio tag */}
      <audio
        ref={audioRef}
        src={audioSources[currentSrcIndex]}
        loop
        preload="auto"
        onError={handleAudioError}
      />

      {/* Floating Gold Player Button */}
      <motion.button
        id="audio-toggle-btn"
        onClick={togglePlayback}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4, duration: 1 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-gold/40 bg-[#0B0B0B]/90 px-4 py-3 text-gold shadow-lg shadow-black/50 backdrop-blur-md hover:border-gold hover:bg-[#5A0000]/40 transition-colors"
        title={isPlaying ? "Mute Music" : "Play Devotional Music"}
        aria-label="Toggle background music"
      >
        {/* Animated wave bars when playing */}
        <div className="flex h-4 items-end gap-[2px]">
          <AnimatePresence mode="popLayout">
            {isPlaying ? (
              <motion.span key="playing" className="flex h-4 items-end gap-[2px]">
                <motion.span
                  animate={{ height: [4, 16, 6, 12, 4] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="w-[2px] bg-gold"
                />
                <motion.span
                  animate={{ height: [6, 10, 16, 8, 6] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  className="w-[2px] bg-gold-light"
                />
                <motion.span
                  animate={{ height: [12, 4, 14, 10, 12] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  className="w-[2px] bg-gold"
                />
                <motion.span
                  animate={{ height: [4, 12, 8, 16, 4] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
                  className="w-[2px] bg-gold-light"
                />
              </motion.span>
            ) : (
              <motion.span key="paused" className="flex h-4 items-end gap-[2px]">
                <span className="h-1 w-[2px] bg-stone-600" />
                <span className="h-1 w-[2px] bg-stone-600" />
                <span className="h-1 w-[2px] bg-stone-600" />
                <span className="h-1 w-[2px] bg-stone-600" />
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic music toggle icons */}
        <span className="font-sans text-xs font-semibold tracking-wider uppercase">
          {isPlaying ? "Music On" : "Music Off"}
        </span>

        <div className="rounded-full bg-gold/10 p-1">
          {isPlaying ? (
            <Volume2 className="h-4 w-4" />
          ) : (
            <VolumeX className="h-4 w-4 text-stone-500" />
          )}
        </div>
      </motion.button>
    </div>
  );
}
