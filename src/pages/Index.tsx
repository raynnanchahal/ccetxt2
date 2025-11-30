import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { VideoSection } from "@/components/VideoSection";
import { CTASection } from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <VideoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
