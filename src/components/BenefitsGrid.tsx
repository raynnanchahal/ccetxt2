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
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Decorative Orbs - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/3 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-1/3 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Real Protection.{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Not Just Reports.
              </span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-12">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="group flex items-center gap-3 p-4 md:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 font-bold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center justify-center gap-2">
                Book Your Strategy Call
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
