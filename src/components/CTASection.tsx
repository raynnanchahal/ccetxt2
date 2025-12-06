import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Target } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-[400px] h-48 md:h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative group">
            {/* Multi-layer Glow Effect */}
            <div className="absolute -inset-1.5 md:-inset-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl md:rounded-3xl blur-xl md:blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
            
            {/* Card Content */}
            <div className="relative p-6 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl bg-gradient-to-br from-card via-card/95 to-muted/80 border-2 border-primary/30 backdrop-blur-xl overflow-hidden">
              {/* Decorative Floating Elements - Hidden on mobile */}
              <div className="hidden md:block absolute top-8 right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              <div className="hidden md:block absolute bottom-8 left-8 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-500" />
              
              <div className="relative text-center space-y-5 md:space-y-8">
                {/* Animated Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-primary animate-pulse" />
                    <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl" />
                  </div>
                </div>

                {/* Headline */}
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    See What Your{" "}
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      Scanners Are Missing
                    </span>
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Every product has blind spots. We'll show you exactly where real attackers would strike first.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center pt-2 md:pt-4">
                  <Button 
                    size="lg" 
                    className="group/btn relative bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 overflow-hidden font-bold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
                    onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                      Book Your Strategy Call
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  </Button>
                </div>
              </div>
              
              {/* Corner Decorations - Hidden on mobile */}
              <div className="hidden md:block absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-primary/30 rounded-tl-2xl" />
              <div className="hidden md:block absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-secondary/30 rounded-br-2xl" />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 md:mt-12 text-center space-y-4">
            <p className="text-base md:text-xl text-muted-foreground font-light">
              Stop hoping. <span className="font-bold text-primary">Start knowing.</span>
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-primary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold text-foreground">Live consultations available now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
