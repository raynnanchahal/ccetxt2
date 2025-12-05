import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const BenefitsGrid = () => {
  const benefits = [
    "Hidden vulnerabilities uncovered",
    "Real attack paths mapped",
    "Developer-ready fixes",
    "Rapid re-testing as you ship",
    "Clear prioritization",
    "No more \"scan-clean\" illusions"
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
              Real Protection.{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Not Just Reports.
              </span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="group flex items-center gap-4 p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 font-bold px-8 py-6 text-base"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center gap-2">
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
