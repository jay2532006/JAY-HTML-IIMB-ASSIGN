import React from "react";

import { CardCarousel } from "@/components/ui/card-carousel";

const CardCarouselDemo = () => {
  const images = [
    {
      src: "/assets/carousel/carousel-09.webp",
      alt: "With TCS CEO & MD K. Krithivasan — National Hackathon Winner",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-25.webp",
      alt: "PackEdge 1st Position — Techfest IIT Bombay",
      objectPosition: "center",
      link: "https://drive.google.com/file/d/198jU7tjaPgLchEVKDLTQ7UO2OzyOkM91/view",
    },
    {
      src: "/assets/carousel/carousel-33.webp",
      alt: "ShikshaShakti.AI — ₹2L DST-NIDHI Ignition Grant",
      objectPosition: "center",
      link: "https://drive.google.com/file/d/1KB5ZEOAgdl6hEC4cCXVQ1u9I0FcxkGHx/view",
    },
    {
      src: "/assets/carousel/carousel-16.webp",
      alt: "The Hitavada — Regional Press Coverage",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-26.webp",
      alt: "Dainik Bhaskar — National Achievement Feature",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-10.webp",
      alt: "Hack-LLM Winner at IIIT Delhi — Press Coverage",
      objectPosition: "center",
    },
    {
      src: "/assets/carousel/carousel-20.webp",
      alt: "Patrika — Youth Tech & Innovation Feature",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-21.webp",
      alt: "Navabharat — Hackathon Winner Feature",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-24.webp",
      alt: "With Angel One CEO Ambarish Kenghe",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-14.webp",
      alt: "With Marsh McLennan Leadership — Pushparanjan Malajure",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-22.webp",
      alt: "With NDTV Profit — Tamanna Inamdar",
      objectPosition: "center top",
    },
    {
      src: "/assets/carousel/carousel-19.webp",
      alt: "India AI Impact Summit 2026",
      objectPosition: "center",
    },
    {
      src: "/assets/carousel/carousel-15.webp",
      alt: "Reserve Bank of India Institutional Visit",
      objectPosition: "center",
    },
    {
      src: "/assets/carousel/carousel-27.webp",
      alt: "IBM Quantum System Two Showcase",
      objectPosition: "center",
    },
    {
      src: "/assets/carousel/carousel-05.webp",
      alt: "Young Leadership Summit — IIM Bangalore (Top 20 of 70,000+)",
      objectPosition: "center",
    },
    {
      src: "/assets/portfolio/certificates/cert-01.jpg",
      alt: "Certificate — PackEdge 1st Position, IIT Bombay Techfest",
      objectPosition: "center",
      link: "/assets/portfolio/certificates/cert-01.jpg",
    },
    {
      src: "/assets/portfolio/certificates/cert-02.jpg",
      alt: "Certificate — TCS Foundation First Place, NIT Trichy",
      objectPosition: "center",
      link: "/assets/portfolio/certificates/cert-02.jpg",
    },
    {
      src: "/assets/portfolio/certificates/cert-05.jpg",
      alt: "Certificate — Drone Technology E-SDP, Ministry of MSME",
      objectPosition: "center",
      link: "/assets/portfolio/certificates/cert-05.jpg",
    },
  ];

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={3500}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCarouselDemo;
