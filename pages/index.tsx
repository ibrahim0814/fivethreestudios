import { BackgroundPaths } from "@/components/sections/HeroSection";
import { NavBar } from "@/components/ui/nav-bar";
import { AIRealitySection } from "@/components/sections/AIRealitySection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { CTAFooter } from "@/components/sections/CTAFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <BackgroundPaths title="Five Three Studios" />

      <main className="relative">
        <AIRealitySection />
        <FeatureSection />
        <JourneySection />
        {/* Spacer div */}
        <div className="h-4"></div>
        <CTAFooter />
      </main>
    </div>
  );
}
