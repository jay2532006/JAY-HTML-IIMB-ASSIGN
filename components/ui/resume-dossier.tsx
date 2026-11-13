"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import {
  ACHIEVEMENTS,
  AIMS,
  CERTIFICATES,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  SITE,
  SKILL_CATEGORIES,
} from "@/constants";

export default function ResumeDossier() {
  return (
    <div
      id="dossier"
      className="relative w-full bg-[#070709] text-[#f5f1e8] selection:bg-[#c8a882] selection:text-black overflow-hidden"
    >
      {/* Ambient Atmospheric Lighting - Expansive across full monitor width */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[800px] opacity-25 blur-[180px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(200,168,130,0.3), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] -left-48 w-[800px] h-[800px] opacity-15 blur-[220px]"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[65%] -right-48 w-[800px] h-[800px] opacity-20 blur-[220px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,168,130,0.25), transparent 70%)",
        }}
      />

      {/* Floating Chapter Index Nav - Desktop */}
      <nav
        aria-label="Dossier section navigation"
        className="sticky top-6 z-40 mx-auto max-w-max hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-[#0d0d12]/90 backdrop-blur-2xl px-6 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#c8a882] pr-3 border-r border-white/10 font-bold">
          Dossier Index
        </span>
        <a
          href="#dossier-overview"
          className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full transition-colors"
        >
          Overview
        </a>
        <a
          href="#dossier-education"
          className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full transition-colors"
        >
          Academics
        </a>
        <a
          href="#dossier-experience"
          className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full transition-colors"
        >
          Experience (4)
        </a>
        <a
          href="#dossier-builds"
          className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full transition-colors"
        >
          Systems (6)
        </a>
        <a
          href="#dossier-honors"
          className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full transition-colors"
        >
          Honors
        </a>
        <a
          href="#dossier-credentials"
          className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full transition-colors"
        >
          Certificates
        </a>
        <a
          href="#dossier-skills"
          className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full transition-colors"
        >
          Capabilities
        </a>
      </nav>

      {/* Floating Chapter Index Nav - Mobile Scrollable Strip */}
      <nav
        aria-label="Dossier mobile navigation"
        className="sticky top-4 z-40 mx-3 flex md:hidden items-center gap-2 rounded-full border border-white/15 bg-[#0d0d12]/95 backdrop-blur-2xl px-3 py-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shadow-2xl"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#c8a882] shrink-0 font-bold pl-1 pr-2 border-r border-white/10">
          Index
        </span>
        <a href="#dossier-overview" className="text-[11px] font-mono text-neutral-300 hover:text-white active:scale-95 active:bg-white/15 px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0 transition-all duration-150">
          Overview
        </a>
        <a href="#dossier-education" className="text-[11px] font-mono text-neutral-300 hover:text-white active:scale-95 active:bg-white/15 px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0 transition-all duration-150">
          Academics
        </a>
        <a href="#dossier-experience" className="text-[11px] font-mono text-neutral-300 hover:text-white active:scale-95 active:bg-white/15 px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0 transition-all duration-150">
          Experience
        </a>
        <a href="#dossier-builds" className="text-[11px] font-mono text-neutral-300 hover:text-white active:scale-95 active:bg-white/15 px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0 transition-all duration-150">
          Systems
        </a>
        <a href="#dossier-honors" className="text-[11px] font-mono text-neutral-300 hover:text-white active:scale-95 active:bg-white/15 px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0 transition-all duration-150">
          Honors
        </a>
        <a href="#dossier-credentials" className="text-[11px] font-mono text-neutral-300 hover:text-white active:scale-95 active:bg-white/15 px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0 transition-all duration-150">
          Certs
        </a>
        <a href="#dossier-skills" className="text-[11px] font-mono text-neutral-300 hover:text-white active:scale-95 active:bg-white/15 px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0 transition-all duration-150">
          Skills
        </a>
      </nav>

      {/* Main Container - EXPANDED to full monitor width (up to 1920px fluid) with phone-friendly padding */}
      <div className="relative z-10 w-full max-w-[1880px] mx-auto px-4 sm:px-8 md:px-14 lg:px-16 xl:px-24 2xl:px-32 py-16 sm:py-24 md:py-40 space-y-24 sm:space-y-36 md:space-y-56">

        {/* =====================================================================
            CHAPTER 01: EXECUTIVE PROFILE & HERO (LEFT + RIGHT FULL-WIDTH)
        ===================================================================== */}
        <section id="dossier-overview" className="scroll-mt-32 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center">
            
            {/* Left Column: Headline, Bio, Stats, and Contact Links */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#c8a882]/40 bg-[#c8a882]/10 px-5 py-2 text-xs font-mono uppercase tracking-[0.26em] text-[#f2e1ce]">
                <Sparkles className="h-3.5 w-3.5 text-[#c8a882]" />
                Curriculum Vitae · Executive Dossier
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.02]">
                Turning complex data into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0e2d3] to-[#c8a882]">
                  decisions that move.
                </span>
              </h1>

              <div className="space-y-5 text-lg sm:text-xl text-[#d8d3c8] leading-relaxed font-light">
                <p>
                  I’m <strong className="text-white font-medium">Jay Parmar</strong> — an AI/ML builder, quantitative finance analyst, and product leader pursuing BBA in Digital Business &amp; Entrepreneurship at <span className="text-white font-medium">IIM Bangalore</span>.
                </p>
                <p>
                  I build useful systems, rally ambitious teams around high-rigor engineering, and stay with the work until it creates verifiable outcomes — from &lt;12ms anti-money laundering screening to offline diagnostic education engines and ₹47.5L supply chain redesigns.
                </p>
              </div>

              {/* Verified Contact & Location Row */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm font-mono text-[#b8b3a8]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#c8a882]" />
                  {SITE.location}
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#c8a882]" />
                  {SITE.email}
                </a>
                <a
                  href="tel:+917773060203"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#c8a882]" />
                  {SITE.phone}
                </a>
              </div>

              {/* Direct Action Links */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-3">
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#c8a882] px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-mono font-bold uppercase tracking-[0.18em] text-[#0a0a0c] hover:bg-white shadow-[0_15px_35px_-10px_rgba(200,168,130,0.5)] transition-all hover:scale-[1.02]"
                >
                  <FileText className="h-4 w-4" />
                  Download Complete Resume (PDF)
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/articles"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-mono uppercase tracking-[0.18em] text-white hover:border-[#c8a882] hover:bg-white/[0.08] transition-all hover:scale-[1.02]"
                >
                  <BookOpen className="h-4 w-4 text-[#c8a882]" />
                  Read 13 Field Essays
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 4 Quantitative Impact Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-white">₹47.5L</p>
                  <p className="text-xs font-mono text-[#c8a882] uppercase tracking-wider mt-1">Projected Savings</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-white">233</p>
                  <p className="text-xs font-mono text-[#c8a882] uppercase tracking-wider mt-1">Chapters Mapped</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-white">&lt;12ms</p>
                  <p className="text-xs font-mono text-[#c8a882] uppercase tracking-wider mt-1">AML Latency</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-2xl sm:text-3xl font-mono font-bold text-white">3×</p>
                  <p className="text-xs font-mono text-[#c8a882] uppercase tracking-wider mt-1">National Podiums</p>
                </div>
              </div>
            </div>

            {/* Right Column: Full-Width Executive Showcase utilizing the entire right space */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
              <figure className="relative w-full max-w-[540px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#18181c] to-[#0c0c10] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] group">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={SITE.portraitUrl}
                    alt="Jay Parmar · Indian Institute of Management Bangalore"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-85" />
                </div>
                
                {/* Executive Details Strip */}
                <figcaption className="p-8 border-t border-white/10 space-y-4 bg-[#0e0e13]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-white">Jay Parmar</p>
                      <p className="text-xs font-mono text-[#c8a882] tracking-wider uppercase mt-0.5">
                        IIM Bangalore · BBA DBE (2026—2029)
                      </p>
                    </div>
                    <span className="text-xs font-mono tracking-widest uppercase bg-[#c8a882]/15 text-[#f0e2d3] px-3.5 py-1.5 rounded-full border border-[#c8a882]/40 font-semibold">
                      Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#b0aba0] border-t border-white/10">
                    <div>
                      <span className="text-[#8c877e] block">Selectivity:</span>
                      <strong className="text-white">Top 20 / 70,000+</strong>
                    </div>
                    <div>
                      <span className="text-[#8c877e] block">Research:</span>
                      <strong className="text-white">IIT Guwahati AI Intern</strong>
                    </div>
                    <div>
                      <span className="text-[#8c877e] block">Venture:</span>
                      <strong className="text-white">₹2L DST-NIDHI Grant</strong>
                    </div>
                    <div>
                      <span className="text-[#8c877e] block">Hackathons:</span>
                      <strong className="text-white">IIT Bombay, TCS Win</strong>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

          </div>
        </section>


        {/* =====================================================================
            CHAPTER 02: ACADEMIC RIGOR & PHILOSOPHY (LEFT + RIGHT FULL SPREAD)
        ===================================================================== */}
        <section id="dossier-education" className="scroll-mt-32 space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c8a882] font-semibold">
              01 / Academic Rigor &amp; Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Institutional Foundations &amp; Guiding Aims
            </h2>
            <p className="text-base sm:text-xl text-[#b8b3a8] max-w-4xl leading-relaxed font-light">
              Grounding technology in institutional discipline, quantitative finance, and high-impact public service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
            
            {/* Left: IIM Bangalore Dedicated Feature Card */}
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="lg:col-span-5 rounded-3xl border border-white/15 bg-gradient-to-br from-[#16161a] via-[#111114] to-[#0a0a0d] p-10 md:p-14 flex flex-col justify-between shadow-2xl space-y-10"
              >
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#c8a882] font-semibold">
                      <GraduationCap className="h-4 w-4" />
                      Higher Education
                    </span>
                    <span className="rounded-full bg-white/[0.06] border border-white/10 px-4 py-1.5 text-xs font-mono text-[#e5e0d8]">
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg text-[#c8a882] font-mono mt-3">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 space-y-5">
                  <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#9c978e]">
                    Selectivity &amp; Distinctions:
                  </p>
                  <ul className="space-y-4 text-sm sm:text-base text-[#e5e0d8] leading-relaxed">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3.5">
                        <CheckCircle2 className="h-5 w-5 text-[#c8a882] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Right: Three Guiding Aims Spanning across the Right Space */}
            <div className="lg:col-span-7 grid grid-cols-1 gap-6 xl:gap-8">
              {AIMS.map((aim) => (
                <div
                  key={aim.index}
                  className="rounded-3xl border border-white/12 bg-[#101014] p-8 md:p-12 flex flex-col sm:flex-row sm:items-start gap-8 hover:border-[#c8a882]/50 transition-all shadow-xl"
                >
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-[#c8a882] shrink-0">
                    {aim.index}
                  </span>
                  <div className="space-y-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      {aim.title}
                    </h4>
                    <p className="text-base text-[#b8b3a8] leading-relaxed font-light">
                      {aim.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* =====================================================================
            CHAPTER 03: PROFESSIONAL EXPERIENCE (4 EXPANSIVE TIMELINE CARDS ACROSS FULL WIDTH)
        ===================================================================== */}
        <section id="dossier-experience" className="scroll-mt-32 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c8a882] font-semibold">
                02 / Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                Professional Experience &amp; Leadership
              </h2>
              <p className="text-base sm:text-xl text-[#b8b3a8] max-w-3xl leading-relaxed font-light">
                4 verified institutional and founder engagements with verified budgets, data pipelines, and corporate stakeholders.
              </p>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8e897f]">
              2024 — Present
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            {EXPERIENCE.map((exp) => (
              <article
                key={`${exp.role}-${exp.organization}`}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#131318] to-[#0a0a0e] p-8 sm:p-12 md:p-14 flex flex-col justify-between hover:border-[#c8a882]/50 transition-all shadow-2xl space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-[#c8a882]/15 border border-[#c8a882]/40 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#f0e2d3] font-medium">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-[#9c978e]">
                      {exp.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-base sm:text-lg font-mono text-[#c8a882] mt-2">
                      {exp.organization}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-[#d4cfc5] leading-relaxed pt-2 font-light">
                    {exp.summary}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-3.5">
                  {exp.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3.5 text-sm sm:text-base text-[#b8b3a8] leading-relaxed">
                      <span className="text-[#c8a882] text-lg leading-none mt-0.5">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* =====================================================================
            CHAPTER 04: SHIPPED SYSTEMS & CASE MODELS (3-COLUMN FULL-WIDTH SPREAD)
        ===================================================================== */}
        <section id="dossier-builds" className="scroll-mt-32 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c8a882] font-semibold">
                03 / Engineering &amp; Products
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                6 Shipped Systems &amp; Case Studies
              </h2>
              <p className="text-base sm:text-xl text-[#b8b3a8] max-w-4xl leading-relaxed font-light">
                Quantitative supply chain redesigns, anti-money laundering graphs, adaptive EdTech, and regulatory infrastructure.
              </p>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8e897f]">
              Validated Proof
            </span>
          </div>

          {/* 3 Columns across monitor to utilize full width with NO right blank space */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#131317] to-[#09090c] p-8 sm:p-10 flex flex-col justify-between hover:border-[#c8a882]/50 transition-all shadow-2xl space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#c8a882] font-semibold">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-[#8e897f]">
                      {project.year}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <div className="inline-block rounded-xl border border-[#c8a882]/40 bg-[#c8a882]/15 px-4 py-2 text-xs sm:text-sm font-mono font-medium text-[#f5e6d6]">
                      {project.headlineMetric}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#d4cfc5] leading-relaxed font-light">
                    {project.summary}
                  </p>

                  <div className="space-y-3 border-t border-white/10 pt-5">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#9c978e]">
                      Key Evidence:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#b8b3a8]">
                      {project.metrics.map((m) => (
                        <li key={m} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#c8a882] shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-5 border-t border-white/10 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-[#d4cfc5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {project.caseDeckUrl ? (
                      <a
                        href={project.caseDeckUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-[#c8a882] hover:text-white transition-colors"
                      >
                        Open Case Deck
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#8e897f]">
                        {project.badge}
                      </span>
                    )}

                    <span className="text-xs font-mono text-[#8e897f]">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* =====================================================================
            CHAPTER 05: NATIONAL HONORS & RANKINGS (3-COLUMN FULL-WIDTH)
        ===================================================================== */}
        <section id="dossier-honors" className="scroll-mt-32 space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c8a882] font-semibold">
              04 / Recognition
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              National Honors &amp; Rankings
            </h2>
            <p className="text-base sm:text-xl text-[#b8b3a8] max-w-3xl leading-relaxed font-light">
              Competitive victories and national selections across premier institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.index}
                className="rounded-3xl border border-white/12 bg-[#111116] p-8 sm:p-10 flex flex-col justify-between hover:border-[#c8a882]/45 transition-all shadow-xl space-y-6"
              >
                <div className="space-y-4">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#c8a882]">
                    {ach.index}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs font-mono text-[#c8a882]">
                    {ach.venue}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[#b8b3a8] leading-relaxed border-t border-white/10 pt-5 font-light">
                  {ach.detail}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* =====================================================================
            CHAPTER 06: VERIFIED CREDENTIALS & CERTIFICATES (3-COLUMN FULL SPREAD)
        ===================================================================== */}
        <section id="dossier-credentials" className="scroll-mt-32 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c8a882] font-semibold">
                05 / Verified Credentials
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                Certifications &amp; Licenses
              </h2>
              <p className="text-base sm:text-xl text-[#b8b3a8] max-w-3xl leading-relaxed font-light">
                Click any certificate to view the full verified document.
              </p>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8e897f]">
              IIT Bombay · TCS · MSME · IIT Bhilai
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {CERTIFICATES.map((cert) => (
              <a
                key={cert.id}
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl overflow-hidden border border-white/15 bg-[#101014] transition-all hover:border-[#c8a882]/70 hover:-translate-y-1.5 shadow-xl"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-black/50">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#c8a882] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9c978e] pt-1">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>


        {/* =====================================================================
            CHAPTER 07: COMPREHENSIVE SKILLS & CAPABILITIES MATRIX
        ===================================================================== */}
        <section id="dossier-skills" className="scroll-mt-32 space-y-16 border-t border-white/10 pt-28">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#c8a882] font-semibold">
              06 / Tooling &amp; Stack
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Comprehensive Capabilities Matrix
            </h2>
            <p className="text-base sm:text-xl text-[#b8b3a8] max-w-3xl leading-relaxed font-light">
              Structured across data modeling, financial analysis, AI architectures, engineering, and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {SKILL_CATEGORIES.map((group) => (
              <div
                key={group.category}
                className="rounded-3xl border border-white/12 bg-[#101014] p-8 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Layers className="h-5 w-5 text-[#c8a882]" />
                    <h3 className="text-sm font-mono uppercase tracking-widest text-white font-bold">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-mono text-[#e5e0d8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
