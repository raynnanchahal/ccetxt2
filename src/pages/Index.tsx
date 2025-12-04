import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { WhatToExpect } from "@/components/WhatToExpect";
import { CTASection } from "@/components/CTASection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatToExpect />
      <SocialProof />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
