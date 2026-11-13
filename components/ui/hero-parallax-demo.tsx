"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "ShikshaShakti.AI · ₹2L DST-NIDHI",
    link: "https://drive.google.com/file/d/1KB5ZEOAgdl6hEC4cCXVQ1u9I0FcxkGHx/view",
    thumbnail: "/assets/carousel/carousel-33.webp",
    objectPosition: "center",
  },
  {
    title: "PackEdge · 1st Place IIT Bombay",
    link: "https://drive.google.com/file/d/198jU7tjaPgLchEVKDLTQ7UO2OzyOkM91/view",
    thumbnail: "/assets/carousel/carousel-25.webp",
    objectPosition: "center",
  },
  {
    title: "NextGenAML · TCS Foundation Winner",
    link: "#showcase",
    thumbnail: "/assets/carousel/carousel-35.webp",
    objectPosition: "center",
  },
  {
    title: "TCS CEO K. Krithivasan · National Win",
    link: "#gallery",
    thumbnail: "/assets/carousel/carousel-09.webp",
    objectPosition: "center top",
  },
  {
    title: "FDR-Setu · SIH 2026 AICTE RegTech",
    link: "#showcase",
    thumbnail: "/assets/carousel/carousel-32.webp",
    objectPosition: "center",
  },
  {
    title: "CryptoTrace LEA · MHA PS 26183",
    link: "#showcase",
    thumbnail: "/assets/carousel/carousel-10.webp",
    objectPosition: "center",
  },
  {
    title: "Real-time Fraud Alerts · Sarvam AI",
    link: "#showcase",
    thumbnail: "/assets/carousel/carousel-24.webp",
    objectPosition: "center top",
  },
  {
    title: "IIM Bangalore · Young Leadership Summit",
    link: "#dossier",
    thumbnail: "/assets/carousel/carousel-05.webp",
    objectPosition: "center",
  },
  {
    title: "India AI Impact Summit 2026",
    link: "#gallery",
    thumbnail: "/assets/carousel/carousel-19.webp",
    objectPosition: "center",
  },
  {
    title: "Dainik Bhaskar & Regional Press",
    link: "#gallery",
    thumbnail: "/assets/carousel/carousel-26.webp",
    objectPosition: "center top",
  },
  {
    title: "The Hitavada Feature",
    link: "#gallery",
    thumbnail: "/assets/carousel/carousel-16.webp",
    objectPosition: "center top",
  },
  {
    title: "IBM Quantum System Two Visit",
    link: "#gallery",
    thumbnail: "/assets/carousel/carousel-27.webp",
    objectPosition: "center",
  },
];
