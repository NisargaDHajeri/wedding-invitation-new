import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  color: string;
  type: "glitter" | "sparkle" | "petal";
  angle?: number;
  spin?: number;
  wobble?: number;
  wobbleSpeed?: number;
}

export default function SparkleEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 60; // Safe limit for performance

    // Color definitions
    const goldColors = ["#D4AF37", "#F3E5AB", "#AA7C11", "#FFD700"];
    const petalColors = ["#5A0000", "#8B0000", "#FF4500", "#D4AF37"]; // Maroon, dark red, marigold orange/gold

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 25000), maxParticles);
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (randomY = false): Particle => {
      const typeRand = Math.random();
      let type: "glitter" | "sparkle" | "petal" = "glitter";
      if (typeRand < 0.4) {
        type = "glitter";
      } else if (typeRand < 0.7) {
        type = "sparkle";
      } else {
        type = "petal";
      }

      const x = Math.random() * canvas.width;
      const y = randomY ? Math.random() * canvas.height : -10;
      
      const size = type === "petal" 
        ? Math.random() * 8 + 4 
        : type === "sparkle" 
          ? Math.random() * 3 + 1.5
          : Math.random() * 2 + 0.8;

      const speedY = type === "petal"
        ? Math.random() * 0.8 + 0.5
        : type === "sparkle"
          ? Math.random() * 0.3 + 0.1
          : Math.random() * 0.6 + 0.3;

      const speedX = type === "petal"
        ? Math.random() * 0.4 - 0.2
        : Math.random() * 0.2 - 0.1;

      const opacity = Math.random() * 0.5 + 0.3;
      const fadeSpeed = Math.random() * 0.005 + 0.002;

      // Select gold color or petal color
      const color = type === "petal"
        ? petalColors[Math.floor(Math.random() * petalColors.length)]
        : goldColors[Math.floor(Math.random() * goldColors.length)];

      const angle = Math.random() * Math.PI * 2;
      const spin = (Math.random() * 0.02 - 0.01);
      const wobble = Math.random() * Math.PI * 2;
      const wobbleSpeed = Math.random() * 0.03 + 0.01;

      return {
        x,
        y,
        size,
        speedY,
        speedX,
        opacity,
        fadeSpeed,
        color,
        type,
        angle,
        spin,
        wobble,
        wobbleSpeed,
      };
    };

    const drawSparkle = (p: Particle) => {
      if (!ctx) return;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      
      // Draw a 4-point star
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 2);
      ctx.quadraticCurveTo(0, 0, p.size * 2, 0);
      ctx.quadraticCurveTo(0, 0, 0, p.size * 2);
      ctx.quadraticCurveTo(0, 0, -p.size * 2, 0);
      ctx.quadraticCurveTo(0, 0, 0, -p.size * 2);
      ctx.closePath();
      ctx.fill();

      // Add small inner core
      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawPetal = (p: Particle) => {
      if (!ctx) return;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle || 0);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      // Elegant organic teardrop/petal shape
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.8, p.size * 0.8, p.size * 0.5, 0, p.size);
      ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.5, -p.size * 0.8, -p.size * 0.8, 0, -p.size);
      ctx.closePath();
      ctx.fill();

      // Add subtle petal leaf line
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(0, p.size * 0.6);
      ctx.stroke();

      ctx.restore();
    };

    const drawGlitter = (p: Particle) => {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      
      // Glow effect for glitter
      ctx.shadowBlur = p.size * 2;
      ctx.shadowColor = p.color;
      
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        // Move particle
        p.y += p.speedY;
        
        if (p.type === "petal") {
          p.angle = (p.angle || 0) + (p.spin || 0);
          p.wobble = (p.wobble || 0) + (p.wobbleSpeed || 0.02);
          p.x += p.speedX + Math.sin(p.wobble) * 0.3;
        } else {
          p.x += p.speedX;
        }

        // Fade effect for sparkles
        if (p.type === "sparkle") {
          p.opacity -= p.fadeSpeed;
          if (p.opacity <= 0.1) {
            p.opacity = Math.random() * 0.5 + 0.3;
          }
        }

        // Check boundary
        if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          particles[index] = createParticle(false);
        }

        // Draw particle based on type
        if (p.type === "petal") {
          drawPetal(p);
        } else if (p.type === "sparkle") {
          drawSparkle(p);
        } else {
          drawGlitter(p);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Re-populate some particles on resize
        initParticles();
      }
    };

    // Initialize dimensions and particles
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="sparkle-canvas"
      className="pointer-events-none fixed inset-0 z-10 block"
    />
  );
}
