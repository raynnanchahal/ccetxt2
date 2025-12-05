import { Hero } from "@/components/Hero";
import { ColdOpenStory } from "@/components/ColdOpenStory";
import { ComparisonGrid } from "@/components/ComparisonGrid";
import { DiagnosisBlock } from "@/components/DiagnosisBlock";
import { StatementBlock } from "@/components/StatementBlock";
import { CybrusDifference } from "@/components/CybrusDifference";
import { SocialProof } from "@/components/SocialProof";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { CTASection } from "@/components/CTASection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ColdOpenStory />
      <ComparisonGrid />
      <DiagnosisBlock />
      <StatementBlock />
      <CybrusDifference />
      <SocialProof />
      <BenefitsGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
