import type { Metadata } from "next";
import { ArticlesReader } from "@/components/ui/articles-reader";

export const metadata: Metadata = {
  title: "Articles & Field Notes — Jay Parmar",
  description:
    "13 long-form essays by Jay Parmar on AI systems, unit economics, tier-2 distribution, regional EdTech, and financial compliance.",
};

export default function ArticlesPage() {
  return <ArticlesReader />;
}

