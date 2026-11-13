"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { getLenis } from "@/hooks/useLenis";
import { ContainerScrollContext } from "@/components/ui/container-scroll-animation";

type Props = {
  titleComponent?: React.ReactNode;
  children: React.ReactNode;
};

export const FrameToFullscreen: React.FC<Props> = ({ titleComponent, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = React.useState("210vh");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    if (!sectionRef.current || !frameRef.current || !innerRef.current) return;

    let ctx: gsap.Context;
    let resizeListener: () => void;

    const setupTimeline = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const isMobile = vw < 768;

        setSectionHeight(isMobile ? "135vh" : "210vh");

        // Card visual target dimensions
        const targetW = isMobile ? vw * 0.94 : Math.min(vw * 0.82, 1320);
        const targetH = isMobile ? vh * 0.68 : Math.min(vh * 0.58, 700);

        // Required scale ratios to map 100vw/100vh down to card size
        const startScaleX = targetW / vw;
        const startScaleY = targetH / vh;

        // Vertical offset to visually mimic padding
        const padBottom = isMobile ? vh * 0.02 : vh * 0.06;

        // On mobile, use subtle 6deg tilt & 0.96 scale so phones don't drop frames on heavy 3D matrix math
        const initialRotateX = isMobile ? 6 : 26;
        const initialScaleMult = isMobile ? 0.96 : 0.86;
        const scrollDist = isMobile ? "+=35%" : "+=110%";
        const scrubTime = isMobile ? 0.4 : 0.8;

        // Pre-configure initial card transforms
        gsap.set(frameRef.current, {
          transformPerspective: isMobile ? 1000 : 1600,
          transformOrigin: "50% 100%",
          rotateX: initialRotateX,
          scaleX: startScaleX * initialScaleMult,
          scaleY: startScaleY * initialScaleMult,
          y: (isMobile ? 30 : 70) - padBottom,
          borderWidth: isMobile ? 2 : 4,
          padding: isMobile ? 8 : 16,
          borderRadius: isMobile ? 18 : 28,
        });

        gsap.set(innerRef.current, {
          borderRadius: isMobile ? 12 : 16,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: scrollDist,
            scrub: scrubTime,
            pin: stageRef.current,
            pinSpacing: true,
            anticipatePin: 1,
          },
        });

        // Phase 1 (0 → 0.5): Frame tilts up slightly & zooms slightly
        tl.to(
          frameRef.current,
          {
            rotateX: isMobile ? 2 : 15,
            scaleX: startScaleX * (isMobile ? 0.99 : 0.93),
            scaleY: startScaleY * (isMobile ? 0.99 : 0.93),
            y: (isMobile ? 10 : 20) - padBottom,
            duration: 0.5,
            ease: "power1.out",
          },
          0
        );

        // Phase 2 (0.5 → 0.7): Title fades out smoothly
        tl.to(
          titleRef.current,
          {
            y: isMobile ? -30 : -60,
            opacity: 0,
            duration: 0.2,
            ease: "sine.inOut",
          },
          0.5
        );

        // Phase 3 (0.7 → 1.0): Frame flattens to 1.0 scale and slides down to y=0 (fullscreen)
        tl.to(
          frameRef.current,
          {
            rotateX: 0,
            scaleX: 1,
            scaleY: 1,
            y: 0,
            borderRadius: 0,
            borderWidth: 0,
            padding: 0,
            duration: 0.3,
            ease: "power3.inOut",
          },
          0.7
        );

        tl.to(
          innerRef.current,
          {
            borderRadius: 0,
            duration: 0.3,
            ease: "power3.inOut",
          },
          0.7
        );
      }, sectionRef);
    };

    setupTimeline();

    // Recreate the timeline dynamically on resize to keep scales mathematically perfect
    let resizeTimeout: NodeJS.Timeout;
    resizeListener = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setupTimeline();
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      if (ctx) ctx.revert();
    };
  }, []);

  const handleExpandOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetEl = e.target as HTMLElement | null;
    if (targetEl?.closest("a, button, input, [role='button']")) return;
    if (!sectionRef.current) return;
    const expandY = sectionRef.current.offsetTop + window.innerHeight * 1.1;
    if (window.scrollY < expandY - 60) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(expandY, { duration: 0.9 });
      } else {
        window.scrollTo({ top: expandY, behavior: "smooth" });
      }
    }
  };

  return (
    <ContainerScrollContext.Provider value={scrollYProgress}>
      <section
        ref={sectionRef}
        className="relative w-full"
        style={{ height: sectionHeight }}
      >
        <div
          ref={stageRef}
          onClick={handleExpandOnClick}
          className="relative w-full h-screen overflow-hidden flex items-end justify-center cursor-pointer"
          style={{
            perspective: "1600px",
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
        >
          {titleComponent && (
            <div
              ref={titleRef}
              className="absolute top-[8vh] left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl px-4 text-center"
            >
              {titleComponent}
            </div>
          )}

          <div
            ref={frameRef}
            className="absolute left-0 bottom-0 bg-[#222222] border-[#6C6C6C] shadow-2xl"
            style={{
              width: "100vw",
              height: "100vh",
              borderStyle: "solid",
              boxShadow:
                "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a",
              willChange: "transform, borderRadius",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              ref={innerRef}
              className="relative w-full h-full overflow-hidden bg-zinc-900"
              style={{
                willChange: "transform, borderRadius",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </ContainerScrollContext.Provider>
  );
};

export default FrameToFullscreen;
