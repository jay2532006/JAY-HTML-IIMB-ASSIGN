"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function useLenis() {
  useEffect(() => {
    // Detect touch / mobile devices. Native touch momentum on mobile devices runs
    // on the hardware compositor thread (up to 120Hz). Hijacking touch events with
    // virtual JS interpolation causes "hard scroll" and input lag on phones.
    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      // On touch devices, disable JS touch virtualization so phones use 100% fluid native momentum
      touchMultiplier: 1,
      syncTouch: false,
    });

    lenisInstance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    // Restore GSAP lag smoothing: smoothly dampen timeline when frames take longer than 33ms
    // (disabling lag smoothing with 0 causes violent frame jumping and visual stutter).
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
