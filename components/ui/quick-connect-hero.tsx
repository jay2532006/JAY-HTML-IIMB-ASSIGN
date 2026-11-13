"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  ArrowUpRight,
  Sparkles,
  Check,
  Copy,
} from "lucide-react";
import { SITE } from "@/constants";

export default function QuickConnectHero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="quick-contact"
      aria-label="Direct Contact & Channels"
      className="relative z-30 w-full bg-gradient-to-b from-[#0a0a0c] via-[#08080a] to-[#070709] border-y border-white/[0.08] px-4 sm:px-8 md:px-14 lg:px-20 py-12 sm:py-16 md:py-20 text-[#f5f1e8]"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,168,130,0.25), transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Mobile-first Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a882]/35 bg-[#c8a882]/10 px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.22em] text-[#f2e1ce]">
              <Sparkles className="h-3 w-3 text-[#c8a882]" />
              Direct Channels · Fast Response
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Connect with Jay Parmar
            </h2>
            <p className="text-sm sm:text-base text-[#b8b3a8] font-light max-w-xl">
              Available for AI/ML engineering, quantitative finance, and product leadership conversations.
            </p>
          </div>

          {/* Quick status pill */}
          <div className="flex items-center gap-2.5 self-start md:self-auto rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-mono text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Active &amp; Open to Opportunities
          </div>
        </div>

        {/* Contact & Social Grid — Responsive for Phones & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
          
          {/* 1. LinkedIn (Primary Highlight) */}
          <a
            href="https://www.linkedin.com/in/jay-parmar-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-[#0077b5]/40 bg-[#0077b5]/10 p-6 flex flex-col justify-between hover:bg-[#0077b5]/15 hover:border-[#0077b5]/70 active:scale-[0.97] active:brightness-110 active:border-[#0077b5] transition-all duration-200 hover:-translate-y-1 shadow-lg min-h-[160px]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#0077b5] text-white flex items-center justify-center font-bold text-sm shadow-md">
                in
              </div>
              <span className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#79c5f2] group-hover:text-white transition-colors">
                Connect
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="pt-4">
              <p className="text-xs font-mono text-[#a8d3ee] uppercase tracking-wider">Professional Profile</p>
              <p className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-[#79c5f2] transition-colors">
                in/jay-parmar-ai
              </p>
            </div>
          </a>

          {/* 2. Direct Email */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between hover:border-[#c8a882]/40 active:scale-[0.97] active:brightness-110 active:border-[#c8a882]/60 transition-all duration-200 hover:-translate-y-1 shadow-lg min-h-[160px]">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-[#c8a882] flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-white active:scale-90 transition-all duration-150"
                title="Copy Email Address"
              >
                {copied ? (
                  <span className="inline-flex items-center text-emerald-400">
                    <Check className="h-3.5 w-3.5 mr-1" /> Copied!
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Copy className="h-3.5 w-3.5 mr-1" /> Copy
                  </span>
                )}
              </button>
            </div>
            <div className="pt-4">
              <p className="text-xs font-mono text-[#8f8a80] uppercase tracking-wider">Email Address</p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-[#c8a882] transition-colors break-all block mt-1"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* 3. Phone / Direct Call */}
          <a
            href="tel:+917773060203"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between hover:border-[#c8a882]/40 active:scale-[0.97] active:brightness-110 active:border-[#c8a882]/60 transition-all duration-200 hover:-translate-y-1 shadow-lg min-h-[160px]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-[#c8a882] flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                Call Direct
                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="pt-4">
              <p className="text-xs font-mono text-[#8f8a80] uppercase tracking-wider">Phone / WhatsApp</p>
              <p className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-[#c8a882] transition-colors">
                {SITE.phone}
              </p>
            </div>
          </a>

          {/* 4. Complete Resume PDF Download */}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[#c8a882]/40 bg-[#c8a882]/10 p-6 flex flex-col justify-between hover:bg-[#c8a882]/15 hover:border-[#c8a882] active:scale-[0.97] active:brightness-110 active:border-[#c8a882] transition-all duration-200 hover:-translate-y-1 shadow-lg min-h-[160px]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#c8a882] text-black flex items-center justify-center font-bold">
                <FileText className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#f5e6d6] group-hover:text-white transition-colors">
                PDF ↗
              </span>
            </div>
            <div className="pt-4">
              <p className="text-xs font-mono text-[#d8c8b4] uppercase tracking-wider">Verified Résumé</p>
              <p className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-[#c8a882] transition-colors">
                Download Resume (PDF)
              </p>
            </div>
          </a>

        </div>

        {/* Quick Location & Profiles Footer Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 mt-6 border-t border-white/[0.06] text-xs font-mono text-[#9c978e]">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#c8a882]" />
            <span>Bhilai, Chhattisgarh, India · Indian Institute of Management Bangalore</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jay2532006"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              GitHub ↗
            </a>
            <a
              href="/articles"
              className="text-[#c8a882] hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
            >
              13 Field Essays ↗
            </a>
            <a
              href="#dossier"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              Executive Dossier ↓
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

