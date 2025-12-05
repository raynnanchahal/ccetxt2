import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StatementBlock = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-primary rounded-full animate-ping" />
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-secondary rounded-full animate-ping delay-500" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-accent rounded-full animate-ping delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Statement */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            <span className="text-foreground">Attackers Don't Use Scanners</span>
            <br />
            <span className="text-foreground">to Break In.</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              They Use Imagination.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 font-light">
            And imagination beats automation — <span className="font-semibold text-foreground">every time.</span>
          </p>

          {/* CTA */}
          <div className="pt-6 md:pt-10">
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
