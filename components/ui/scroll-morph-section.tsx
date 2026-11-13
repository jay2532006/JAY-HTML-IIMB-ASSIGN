"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { ScrollTrigger } from "@/lib/gsap";
import IntroAnimation from "./scroll-morph-hero";

export default function ScrollMorphSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.2,
  });

  const innerProgress = useTransform(smoothProgress, [0.02, 0.9], [0, 1]);

  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative w-full h-[230vh]"
      style={{ willChange: "transform" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#FAFAFA]">
        <IntroAnimation scrollProgress={innerProgress} />
      </div>
    </section>
  );
}
