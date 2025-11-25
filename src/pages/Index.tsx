import { Hero } from "@/components/Hero";
import { VideoSection } from "@/components/VideoSection";
import { SocialProof } from "@/components/SocialProof";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <VideoSection />
      <SocialProof />
      <CTASection />
    </div>
  );
};

export default Index;
