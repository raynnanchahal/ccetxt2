import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StatementBlock = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main Statement */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground">Attackers Don't Use Scanners to Break In.</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              They Use Imagination.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70">
            And imagination beats automation — <span className="font-semibold text-foreground">every time.</span>
          </p>

          {/* CTA */}
          <div className="pt-6">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300 font-bold px-10 py-7 text-lg"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center gap-2">
                Eliminate Your Blind Spots
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
