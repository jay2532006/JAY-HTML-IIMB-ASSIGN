import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { MouseFollower } from "@/components/animations/MouseFollower";
import { PageReveal } from "@/components/animations/PageTransition";
import { AssetPreloader } from "@/components/animations/AssetPreloader";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Parmar — AI/ML Builder, Finance Analyst & Product Leader",
  description:
    "Portfolio and resume of Jay Parmar — IIM Bangalore BBA DBE student, IIT Guwahati AI & Disaster Analytics Intern, Founder of ShikshaShakti.AI, and national hackathon winner.",
  keywords: [
    "Jay Parmar",
    "AI/ML builder",
    "finance analyst",
    "product leader",
    "IIM Bangalore",
    "ShikshaShakti.AI",
    "NextGenAML",
    "PackEdge",
    "portfolio",
  ],
  openGraph: {
    title: "Jay Parmar — AI/ML Builder, Finance Analyst & Product Leader",
    description: "I turn complex data into decisions that move.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#080808] text-[#f0ece4] antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <div className="noise-overlay" aria-hidden="true" />
        <PageReveal />
        <AssetPreloader />
        <SmoothScrollProvider>
          <MouseFollower />
          {children}
        </SmoothScrollProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}