import { useState } from "react";
import GaneshaLoader from "./components/GaneshaLoader";
import SparkleEffects from "./components/SparkleEffects";
import AudioPlayer from "./components/AudioPlayer";
import HeroSection from "./components/HeroSection";
import CoupleSection from "./components/CoupleSection";
import TimelineSection from "./components/TimelineSection";
import SaveTheDateSection from "./components/SaveTheDateSection";
import MemoryGallery from "./components/MemoryGallery";
import MapSection from "./components/MapSection";
import BlessingsAndFooter from "./components/BlessingsAndFooter";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-white selection:bg-gold selection:text-[#0B0B0B] overflow-x-hidden geom-bg">
      {/* 1. Animated Ganesha Loader */}
      <GaneshaLoader onComplete={() => setLoading(false)} />

      {/* Main website contents are rendered when loading finishes */}
      {!loading && (
        <div className="relative animate-fade-in-up p-2 sm:p-4 md:p-6 min-h-screen flex flex-col">
          {/* Gold Sparkle Overlay (CSS Simulated) */}
          <div className="absolute inset-0 pointer-events-none opacity-25 geom-sparkles" />

          {/* Outer Luxury Frame (Geometric Balance) */}
          <div className="relative flex-1 geom-outer-frame p-1.5 sm:p-2 bg-gradient-to-b from-[#1c0101] to-[#0B0B0B]">
            <div className="h-full w-full geom-inner-frame relative">
              {/* 2. Interactive Background Canvas Effects (glitter, petals, sparkles) */}
              <SparkleEffects />

              {/* 3. Floating Soft Background Music Player */}
              <AudioPlayer />

              {/* 4. Cinematic Hero Section with Countdown */}
              <HeroSection />

              {/* 5. Couple Section with Invited By details */}
              <CoupleSection />

              {/* 6. Wedding Details & Function Timelines */}
              <TimelineSection />

              {/* 7. Save the Date Banner with Hanging Mangalsutra */}
              <SaveTheDateSection />

              {/* 8. Memory Gallery for Couple Images */}
              <MemoryGallery />

              {/* 9. Venue Location and QR Code Scanners */}
              <MapSection />

              {/* 10. Blessings Quote and Thank You Footer */}
              <BlessingsAndFooter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
