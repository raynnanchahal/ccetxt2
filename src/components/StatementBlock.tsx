import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StatementBlock = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/15 rounded-full blur-[100px] md:blur-[150px] animate-pulse" />
      <div className="hidden md:block absolute top-1/4 right-1/4 w-48 h-48 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="hidden md:block absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-6">
          {/* Main Statement */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground">Attackers Don't Use Scanners to Break In.</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              They Use Imagination.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            And imagination beats automation — <span className="font-semibold text-foreground">every time.</span>
          </p>

          {/* CTA */}
          <div className="pt-4 md:pt-6 flex justify-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all duration-300 font-bold px-8 md:px-10 py-6 md:py-7 text-sm md:text-base w-full sm:w-auto"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center justify-center gap-2">
                Eliminate Your Blind Spots
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
