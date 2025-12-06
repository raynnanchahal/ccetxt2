import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check } from "lucide-react";

export const ComparisonGrid = () => {
  const scannerItems = [
    "Look for patterns",
    "Follow checklists",
    "Detect predictable issues",
    "Miss creative vulnerabilities",
    "Provide a false sense of safety"
  ];

  const attackerItems = [
    "Look for possibilities",
    "Follow curiosity",
    "Exploit weird edge cases",
    "Chain logic flaws creatively",
    "Break systems automation trusts"
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Decorative Orbs - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-20 w-64 h-64 bg-muted/20 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Scanners Don't Think.{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Attackers Do.
              </span>
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
            {/* Scanners Column */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-muted/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative p-5 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border h-full">
                <h3 className="text-lg md:text-xl font-bold text-muted-foreground mb-5 md:mb-6 text-center">
                  Scanners
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {scannerItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-muted/30 flex items-center justify-center">
                        <X className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Attackers Column */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative p-5 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-primary/30 h-full">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-5 md:mb-6 text-center">
                  Attackers
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {attackerItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm md:text-base text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 font-bold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center justify-center gap-2">
                Upgrade Your Security Approach
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
