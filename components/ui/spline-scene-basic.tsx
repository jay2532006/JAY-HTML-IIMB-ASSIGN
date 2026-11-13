'use client';

import { useEffect, useRef, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightArmed, setSpotlightArmed] = useState(false);
  const [loadScene, setLoadScene] = useState(false);

  useEffect(() => {
    // 1. Warm up the 3D runtime eagerly in the background on first scroll or touch
    const startWarmUp = () => {
      setLoadScene(true);
      cleanupListeners();
    };

    const cleanupListeners = () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", startWarmUp);
        window.removeEventListener("pointerdown", startWarmUp);
        window.removeEventListener("touchstart", startWarmUp);
      }
    };

    if (typeof window !== "undefined") {
      if (window.scrollY > 10) {
        setLoadScene(true);
      } else {
        window.addEventListener("scroll", startWarmUp, { passive: true });
        window.addEventListener("pointerdown", startWarmUp, { passive: true });
        window.addEventListener("touchstart", startWarmUp, { passive: true });
      }
    }

    // 2. IntersectionObserver for Spotlight + fallback scene loading
    if (!cardRef.current) return;
    const el = cardRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
            setSpotlightArmed(true);
            setLoadScene(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: [0, 0.15, 0.3, 0.5] }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cleanupListeners();
    };
  }, []);

  return (
    <Card ref={cardRef} className="w-full h-full rounded-none border-0 bg-black/[0.96] relative overflow-hidden">
      {spotlightArmed && (
        <Spotlight
          key="spotlight-armed"
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      )}

      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 py-12 md:py-16 relative z-10 flex flex-col justify-center items-center md:items-end px-6 sm:px-10 md:pr-12 pointer-events-none text-center md:text-right">
          <div className="max-w-lg w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Decisions That Move.
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300">
            I’m Jay Parmar — an AI/ML builder, finance analyst, and product leader at IIM Bangalore. I build useful systems, rally people around ambitious ideas, and stay with the work until it creates a real outcome.
          </p>
          </div>
        </div>

        <div className="flex-1 relative pointer-events-auto min-h-[350px] md:min-h-0">
          {loadScene && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </Card>
  );
}

export default SplineSceneBasic;
