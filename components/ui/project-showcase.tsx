"use client";

import type React from "react";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "ShikshaShakti.AI",
    description:
      "Offline-first adaptive learning platform mapping 233 chapters & 157 prerequisite links (₹2L DST-NIDHI grant, TRL 4).",
    year: "2025",
    link: "https://drive.google.com/file/d/1KB5ZEOAgdl6hEC4cCXVQ1u9I0FcxkGHx/view",
    image: "/assets/carousel/carousel-33.webp",
  },
  {
    title: "PackEdge",
    description:
      "PKD packaging redesign for Godrej Interio modeling ₹47.5L annual savings, 33% freight cut & 1st place at IIT Bombay.",
    year: "2025",
    link: "https://drive.google.com/file/d/198jU7tjaPgLchEVKDLTQ7UO2OzyOkM91/view",
    image: "/assets/carousel/carousel-25.webp",
  },
  {
    title: "NextGenAML",
    description:
      "Real-time GNN + XGBoost + FATF AML screening at <12ms latency & 0.78 ROC-AUC (TCS Foundation Winner, NIT Trichy).",
    year: "2025",
    link: "https://github.com/jay2532006",
    image: "/assets/carousel/carousel-35.webp",
  },
  {
    title: "FDR-Setu",
    description:
      "RegTech infrastructure for security deposits — 55 REST endpoints, 26-table model & two-phase settlement (SIH 2026 AICTE).",
    year: "2026",
    link: "https://github.com/jay2532006",
    image: "/assets/carousel/carousel-32.webp",
  },
  {
    title: "CryptoTrace LEA",
    description:
      "Multi-chain crypto forensics & 7-component risk workspace for law enforcement — 129/129 tests passing (MHA PS 26183).",
    year: "2026",
    link: "https://github.com/jay2532006",
    image: "/assets/carousel/carousel-10.webp",
  },
  {
    title: "Real-time Fraud Alerts",
    description:
      "Transaction defence system pausing risky payments & triggering multilingual Sarvam AI voice verification calls (2× Finalist).",
    year: "2026",
    link: "https://www.linkedin.com/in/jay-parmar-ai",
    image: "/assets/carousel/carousel-24.webp",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <section
      id="flagship"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full mx-auto px-8 py-24 flex flex-col items-center justify-center scroll-mt-12"
    >
      <h2 className="text-muted-foreground text-sm font-medium tracking-[0.3em] uppercase mb-16 text-center">
        Flagship Projects
      </h2>

      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition:
            "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[280px] h-[180px] bg-secondary rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <Image
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="280px"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col gap-10">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 px-6 rounded-xl transition-all duration-300 ease-out">
              <div
                className={`
                  absolute inset-0 bg-secondary/50 rounded-xl
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-center justify-between gap-12">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-3">
                    <h3 className="text-foreground font-medium text-3xl md:text-4xl tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-foreground
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      className={`
                        w-6 h-6 text-muted-foreground
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  <p
                    className={`
                      text-muted-foreground text-base mt-3 leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-foreground/70" : "text-muted-foreground"}
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  className={`
                    text-sm font-mono text-muted-foreground tabular-nums shrink-0
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-foreground/60" : ""}
                  `}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
