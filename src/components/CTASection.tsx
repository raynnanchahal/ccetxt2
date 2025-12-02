import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles, Zap, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[500px] h-64 md:h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative group">
            {/* Multi-layer Glow Effect */}
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl md:rounded-[3rem] blur-2xl md:blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse" />
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-accent via-primary to-secondary rounded-2xl md:rounded-[3rem] blur-[60px] md:blur-[100px] opacity-20" />
            
            {/* Card Content */}
            <div className="relative p-6 md:p-12 lg:p-20 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-card via-card/95 to-muted/80 border-2 border-primary/30 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Decorative Floating Elements */}
              <div className="absolute top-10 right-10 w-16 md:w-32 h-16 md:h-32 bg-primary/10 rounded-full blur-2xl animate-pulse hidden md:block" />
              <div className="absolute bottom-10 left-10 w-16 md:w-32 h-16 md:h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-500 hidden md:block" />
              
              <div className="relative text-center space-y-6 md:space-y-10">
                {/* Animated Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <Sparkles className="h-7 w-7 md:h-10 md:w-10 text-primary animate-pulse" />
                    <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl" />
                  </div>
                </div>

                {/* Headline */}
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight">
                    Let's <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Create</span>
                    <br />
                    Something <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Brilliant</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 blur-2xl" />
                    </span>
                  </h2>
                  <p className="text-base md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-2">
                    Stop settling for boring security. Let's craft a defense strategy as unique and creative as your business.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 md:pt-8">
                  <Button 
                    size="lg" 
                    className="group relative text-base md:text-xl px-8 md:px-14 py-6 md:py-10 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-500 overflow-hidden transform hover:scale-105"
                    onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
                  >
                    <span className="relative z-10 flex items-center gap-2 md:gap-4 font-black">
                      <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                      <span className="hidden sm:inline">Start Your Creative Journey</span>
                      <span className="sm:hidden">Book a Call</span>
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>

                {/* Trust Elements */}
                <div className="pt-6 md:pt-10 flex flex-wrap justify-center gap-3 md:gap-8 text-xs md:text-base">
                  <div className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm">
                    <Star className="h-3 w-3 md:h-4 md:w-4 text-primary fill-primary" />
                    <span className="font-medium text-foreground">Free Creative Audit</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-full bg-card/50 border border-secondary/20 backdrop-blur-sm">
                    <Zap className="h-3 w-3 md:h-4 md:w-4 text-secondary" />
                    <span className="font-medium text-foreground">45-Min Deep Dive</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-full bg-card/50 border border-accent/20 backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-accent" />
                    <span className="font-medium text-foreground">Custom Strategy</span>
                  </div>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-24 md:h-24 border-t-4 border-l-4 border-primary/30 rounded-tl-xl md:rounded-tl-3xl hidden md:block" />
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-24 md:h-24 border-b-4 border-r-4 border-secondary/30 rounded-br-xl md:rounded-br-3xl hidden md:block" />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-10 md:mt-16 text-center space-y-4 md:space-y-6">
            <p className="text-base md:text-2xl text-foreground/70 font-light px-4">
              Join the <span className="font-bold text-primary">creative revolution</span> in cybersecurity
            </p>
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-card/60 backdrop-blur-sm border border-primary/30">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-primary"></span>
              </span>
              <span className="text-xs md:text-base font-semibold text-foreground">Live consultations available now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
