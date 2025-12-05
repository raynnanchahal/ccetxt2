import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const DiagnosisBlock = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            Why Most Security Teams{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Still Miss Critical Vulnerabilities
            </span>
          </h2>

          {/* Body */}
          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              Most teams are overworked, drowning in procedures, and judged on <span className="font-semibold text-foreground">volume — not intelligence.</span>
            </p>
            
            <div className="py-4 space-y-2">
              <p className="text-foreground/70">Their KPI becomes:</p>
              <p className="text-xl md:text-2xl text-muted-foreground italic">
                "How many scans did we run?"
              </p>
              <p className="text-foreground/70">Instead of:</p>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                "Did we find the one thing that could actually take us out?"
              </p>
            </div>

            <p className="pt-4">
              And while everyone's busy ticking boxes…<br />
              <span className="font-semibold text-foreground">creative attackers stroll through the gaps.</span>
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 font-bold px-8 py-6 text-base"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center gap-2">
                Protect Your Product
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
