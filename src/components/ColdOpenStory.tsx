import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";

export const ColdOpenStory = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            The Breach{" "}
            <span className="bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">
              No Scanner Could Predict
            </span>
          </h2>

          {/* Story Body */}
          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>
              A SaaS team came to us recently — <span className="font-semibold text-foreground">totally blindsided.</span>
            </p>
            <p>
              Their scanners were clean.<br />
              Their pentest said "low risk."<br />
              Their compliance audit was a <span className="text-primary font-medium">green checkmark.</span>
            </p>
            <p>
              But an attacker chained together a strange mix of logic flaws and user-flow oddities — things <span className="font-semibold text-foreground">no automated tool could ever interpret.</span>
            </p>
          </div>

          {/* Impact List */}
          <div className="bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-xl p-6 md:p-8 space-y-4">
            <p className="text-foreground font-semibold">Within hours:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {[
                "Customer accounts were compromised",
                "The CEO was stuck on 1AM crisis calls",
                "A seven-figure investor froze their deal",
                "Users panicked about their data"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base md:text-lg text-foreground/70 italic">
            All from one creative attack path nobody thought to check.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 font-bold px-8 py-6 text-base"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center gap-2">
                See Your Hidden Blind Spots
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
