import dynamic from "next/dynamic";
import FrameToFullscreen from "@/components/animations/FrameToFullscreen";
import ScrollFloat from "@/components/animations/ScrollFloat";
import { ScrollRevealCurtain } from "@/components/animations/ScrollRevealCurtain";
import VSCodePortfolio from "@/components/ui/vscode-portfolio";
import QuickConnectHero from "@/components/ui/quick-connect-hero";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// Lazy-load heavy below-the-fold 3D, WebGL, and animation components
const SplineSceneBasic = dynamic(() => import("@/components/ui/spline-scene-basic"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#080808]" />,
});

const StoryScrollDemo = dynamic(() => import("@/components/ui/story-scroll-demo"), {
  ssr: false,
});

const ScrollWarpPortal = dynamic(() => import("@/components/animations/ScrollWarpPortal"), {
  ssr: false,
});

const HeroParallaxDemo = dynamic(() => import("@/components/ui/hero-parallax-demo"), {
  ssr: false,
});

const ScrollMorphSection = dynamic(() => import("@/components/ui/scroll-morph-section"), {
  ssr: false,
});

const ScrollFoldTransition = dynamic(() => import("@/components/animations/ScrollFoldTransition"), {
  ssr: false,
});

const ScrollTiltedGridDemo = dynamic(() => import("@/components/ui/scroll-tilted-grid-demo"), {
  ssr: false,
});

const LightRays = dynamic(() => import("@/components/ui/LightRays"), {
  ssr: false,
});

const CardCarouselDemo = dynamic(() => import("@/components/ui/card-carousel-demo"), {
  ssr: false,
});

const ZoomParallaxDemo = dynamic(() => import("@/components/ui/zoom-parallax-demo"), {
  ssr: false,
});

const ResumeDossier = dynamic(() => import("@/components/ui/resume-dossier"), {
  ssr: false,
});

const ProfileCard = dynamic(() => import("@/components/ui/ProfileCard"), {
  ssr: false,
});

const FooterDemo = dynamic(() => import("@/components/ui/footer-demo"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative w-full overflow-x-clip">
      <FrameToFullscreen
        titleComponent={
          <h1 className="text-4xl md:text-5xl font-semibold text-white mt-[4vh]">
            Turning complex data into <br />
            <ScrollFloat
              stagger={0.8}
              textClassName="text-white font-bold tracking-tight inline-block"
              style={{
                fontSize: "clamp(4.5rem, 10vw, 9.5rem)",
                marginTop: "3rem"
              }}
              scrollRange={[0.05, 0.48]}
            >
              Decisions
            </ScrollFloat>
          </h1>
        }
      >
        <VSCodePortfolio />
      </FrameToFullscreen>

      <QuickConnectHero />

      <ScrollRevealCurtain
        curtainColor="#fd5200"
        scrollDistance="+=85%"
        label={
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">
              Chapter 01
            </span>
            <span className="block text-[clamp(2.5rem,9vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight">
              Who
              <br />
              I Am
            </span>
          </div>
        }
        beneath={
          <section className="relative w-screen h-screen bg-[#080808]">
            <SplineSceneBasic />
          </section>
        }
      />

      <div id="about">
        <StoryScrollDemo />
      </div>

      <div id="showcase">
        <ScrollWarpPortal
          voidColor="#050505"
          accent="#c8a882"
          scrollDistance="+=105%"
          label={
            <div className="flex flex-col items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-70">
                Chapter 02
              </span>
              <span className="block text-[clamp(2.5rem,9vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight">
                The
                <br />
                Showcase
              </span>
            </div>
          }
        />
      </div>

      <div id="projects" className="scroll-mt-0">
        <HeroParallaxDemo />
      </div>

      <ScrollMorphSection />

      <div id="gallery">
      <ScrollFoldTransition
        seamColor="#c8a882"
        voidColor="#050505"
        topColor="#0f0f0f"
        bottomColor="#1a1a1a"
        scrollDistance="+=105%"
        label={
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-70">
              Chapter 03
            </span>
            <span className="text-[clamp(2.5rem,9vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight flex flex-col items-center" style={{ whiteSpace: "nowrap" }}>
              <span>PROOF</span>
              <span>IN OUTCOMES</span>
            </span>
          </div>
        }
      />
      </div>

      <ScrollTiltedGridDemo />

      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(200,168,130,0.06) 0%, rgba(200,168,130,0.02) 40%, transparent 75%), #060606",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 35%, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 35%, black 30%, transparent 85%)",
            opacity: 0.55,
          }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#c8a882"
            raysSpeed={0.5}
            lightSpread={1.2}
            rayLength={1.6}
            fadeDistance={1.4}
            saturation={0.45}
            followMouse
            mouseInfluence={0.06}
            noiseAmount={0.06}
            distortion={0.02}
          />
        </div>
        <div className="relative z-10 w-full">
          <CardCarouselDemo />
        </div>
      </section>

      <ZoomParallaxDemo />

      <ResumeDossier />

      <ScrollReveal className="w-full">
        <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-black px-6 py-24">
          <ProfileCard
            name="Jay Parmar"
            title="AI/ML Builder · Finance Analyst"
            handle="jay-parmar-ai"
            status="IIM Bangalore · Bhilai"
            contactText="Connect"
            avatarUrl="/assets/portfolio/gallery/gallery-03.jpg"
            miniAvatarUrl="/assets/portfolio/gallery/gallery-03.jpg"
            iconUrl="/iconpattern.png"
            grainUrl="/grain.webp"
            showUserInfo
            enableTilt
            enableMobileTilt
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#c8a88244 100%)"
            contactHref="https://www.linkedin.com/in/jay-parmar-ai"
          />
        </section>
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <FooterDemo />
      </ScrollReveal>
    </main>
  );
}