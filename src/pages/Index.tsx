import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { CTASection } from "@/components/CTASection";
import { InlineCTA } from "@/components/InlineCTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <InlineCTA />
      <SocialProof />
      <InlineCTA />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
