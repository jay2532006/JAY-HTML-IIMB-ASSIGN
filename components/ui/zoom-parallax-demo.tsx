"use client";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { LampDemo } from "@/components/ui/lamp";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import ScrollExpand from "@/components/animations/ScrollExpand";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-carousel";

const rulerItems: CarouselItem[] = [
  { id: 1, title: "AI / ML BUILDER" },
  { id: 2, title: "FINANCE ANALYST" },
  { id: 3, title: "PRODUCT LEADER" },
  { id: 4, title: "FOUNDER" },
  { id: 5, title: "GNN & XGBOOST" },
  { id: 6, title: "ROI MODELING" },
  { id: 7, title: "CLAUDE API" },
  { id: 8, title: "IIM BANGALORE" },
  { id: 9, title: "3× NATIONAL WINNER" },
];

export default function ZoomParallaxDemo() {
  const images = [
    {
      src: "/assets/portfolio/gallery/gallery-03.jpg",
      alt: "Jay Parmar — BBA, IIM Bangalore",
    },
    {
      src: "/assets/portfolio/certificates/cert-01.jpg",
      alt: "PackEdge 1st Position — IIT Bombay Techfest",
    },
    {
      src: "/assets/portfolio/certificates/cert-02.jpg",
      alt: "TCS Foundation National Hackathon — 1st Place NIT Trichy",
    },
    {
      src: "/assets/carousel/carousel-09.webp",
      alt: "National Recognition with TCS CEO K. Krithivasan",
    },
    {
      src: "/assets/portfolio/certificates/cert-05.jpg",
      alt: "Ministry of MSME — Drone Technology E-SDP",
    },
    {
      src: "/assets/carousel/carousel-33.webp",
      alt: "ShikshaShakti.AI — ₹2L DST-NIDHI Grant",
    },
    {
      src: "/assets/portfolio/certificates/cert-07.jpg",
      alt: "VLSI Workshop — IIT Bhilai",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative flex h-[50vh] items-center justify-center px-6">
        <h1 className="text-center text-4xl font-bold">
          Built to Survive Real-World Scale.
        </h1>
      </div>
      <ZoomParallax
        images={images}
        portalIndex={0}
        portalContent={<LampDemo />}
      />
      <ScrollExpand
        stageBackground="radial-gradient(ellipse 100% 80% at 50% 50%, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.07) 28%, #08080f 58%, #050508 100%)"
        background="#080808"
      >
        <ProjectShowcase />
      </ScrollExpand>

      <ScrollReveal className="w-full">
        <RulerCarousel originalItems={rulerItems} />
      </ScrollReveal>
    </section>
  );
}
