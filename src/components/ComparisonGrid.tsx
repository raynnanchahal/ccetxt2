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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-muted/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
              Scanners Don't Think.{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Attackers Do.
              </span>
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Scanners Column */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-muted/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border">
                <h3 className="text-xl md:text-2xl font-bold text-muted-foreground mb-6 text-center">
                  Scanners
                </h3>
                <div className="space-y-4">
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
              <div className="relative p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-primary/30">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 text-center">
                  Attackers
                </h3>
                <div className="space-y-4">
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
          <div className="text-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 font-bold px-8 py-6 text-base"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center gap-2">
                Upgrade Your Security Approach
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
