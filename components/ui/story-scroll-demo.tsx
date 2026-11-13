'use client';

import Image from 'next/image';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

export default function StoryScrollDemo() {
  return (
    <FlowArt aria-label="Jay Parmar Story Presentation">
      <FlowSection aria-label="Who I AM" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto">
          {/* Left: Portrait Picture */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="relative aspect-[3/4] w-full max-w-[400px] rounded-2xl md:rounded-3xl overflow-hidden border-2 border-black/80 shadow-[0_24px_60px_rgba(0,0,0,0.35)] bg-black/15">
              <Image
                src="/assets/portfolio/gallery/gallery-03.jpg"
                alt="Jay Parmar · BBA, IIM Bangalore"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-4 sm:p-5 text-white">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">Jay Parmar</p>
                <p className="text-[11px] sm:text-xs text-white/80 font-mono tracking-wider">BBA · IIM Bangalore</p>
              </div>
            </div>
          </div>

          {/* Right: Heading & Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">01 — WHO I AM</p>
            <hr className="my-[1.5vw] border-none border-t border-black opacity-100" />
            <div>
              <h1 className="text-[clamp(2.5rem,6vw,7rem)] font-bold leading-[0.9] uppercase tracking-tight">
                STRATEGY
                <br />
                MEETS
                <br />
                SYSTEMS
              </h1>
            </div>
            <hr className="my-[1.5vw] border-none border-t border-black opacity-100" />
            <p className="mt-auto max-w-[48ch] text-[clamp(1rem,1.7vw,1.5rem)] font-normal leading-relaxed">
              I’m Jay Parmar — pursuing BBA in Digital Business &amp; Entrepreneurship at IIM Bangalore, interning in AI &amp; Disaster Analytics at IIT Guwahati, and founding ShikshaShakti.AI from Bhilai, India.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="Three Aims" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">02 — THREE AIMS</p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div>
          <h2 className="text-[clamp(2.5rem,8.5vw,9rem)] font-bold leading-[0.9] uppercase tracking-tight">
            OUTCOME
            <br />
            OVER
            <br />
            HYPE
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="max-w-[54ch] text-[clamp(1rem,2.3vw,1.9rem)] font-normal leading-relaxed">
          Most energised when an ambitious idea has to survive contact with the real world — classrooms, supply chains, compliance desks, and disaster response teams.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-45 flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 BUILD USEFUL INTELLIGENCE</p>
            <p className="text-[clamp(0.95rem,1.35vw,1.1rem)] leading-relaxed text-neutral-200">
              From &lt;12ms GNN+XGBoost AML screening to 233 chapters of offline adaptive learning backed by a ₹2L DST-NIDHI grant.
            </p>
          </div>
          <div className="min-w-45 flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 CREATE FROM INDIA, FOR THE WORLD</p>
            <p className="text-[clamp(0.95rem,1.35vw,1.1rem)] leading-relaxed text-neutral-200">
              Proof that rigorous product engineering, ₹47.5L unit-economics modeling, and national wins start right where you stand.
            </p>
          </div>
          <div className="min-w-45 flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 GROW THROUGH SERVICE</p>
            <p className="text-[clamp(0.95rem,1.35vw,1.1rem)] leading-relaxed text-neutral-200">
              Coordinating corporate outreach at CSVTU T&amp;P Cell, incubation budgets at CSVTU-FORTE i-TBI, and disaster telemetry at IIT Guwahati.
            </p>
          </div>
        </div>
      </FlowSection>

      <FlowSection aria-label="How it works" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">03 — HOW I WORK</p>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2 className="text-[clamp(2.5rem,8.5vw,9rem)] font-bold leading-[0.9] uppercase tracking-tight">
            MODEL.
            <br />
            BUILD.
            <br />
            PROVE.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="max-w-[54ch] text-[clamp(1rem,2.3vw,1.9rem)] font-normal leading-relaxed">
          Combine quantitative ROI modeling with production Python, FastAPI, Claude API, and React execution — then validate until the numbers hold up.
        </p>
      </FlowSection>

      <FlowSection aria-label="Track Record" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — TRACK RECORD</p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div>
          <h2 className="text-[clamp(2.5rem,8.5vw,9rem)] font-bold leading-[0.9] uppercase tracking-tight">
            BUILT
            <br />
            UNDER
            <br />
            PRESSURE.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[54ch] text-[clamp(1rem,2.3vw,1.9rem)] font-normal leading-relaxed">
          National winner at TCS Foundation × NIT Trichy, 1st Position at PackEdge (IIT Bombay Techfest), Hack-LLM winner at IIIT Delhi, and Top 20 at IIM Bangalore YLS (70,000+ applicants).
        </p>
      </FlowSection>

      <FlowSection aria-label="Let's Talk" style={{ backgroundColor: '#000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">05 — LET&apos;S TALK</p>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <div>
          <h2 className="text-[clamp(2.5rem,8.5vw,9rem)] font-bold leading-[0.9] uppercase tracking-tight">
            COMPLEX
            <br />
            PROBLEM?
            <br />
            LET&apos;S SOLVE IT.
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/60" />
        <p className="mt-auto max-w-[54ch] text-[clamp(1rem,2.3vw,1.9rem)] font-normal leading-relaxed">
          Open to AI/ML engineering, finance &amp; strategy analysis, and high-ownership product roles. Reach me at jaydeepak2532006@gmail.com.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
