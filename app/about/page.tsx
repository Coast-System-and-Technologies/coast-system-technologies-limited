import AboutHero from "@/components/About/AboutHero";
import FinalCTA from "@/components/About/FinalCTA";
import FounderSection from "@/components/About/FounderSection";
import MilestonesBanner from "@/components/About/MilestonesBanner";
import MissionValues from "@/components/About/MissionValues";
import TrustBadges from "@/components/About/TrustBadges";
import WhyWeAreDifferent from "@/components/About/WhyWeAreDifferent";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[--background] text-[--foreground]">
      <AboutHero />
      <MissionValues />
      <FounderSection />
      <MilestonesBanner />
      <WhyWeAreDifferent />
      <TrustBadges />
      <FinalCTA />
    </main>
  );
}
