import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles, Zap, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative group">
            {/* Multi-layer Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-[3rem] blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-500 animate-pulse" />
            <div className="absolute -inset-8 bg-gradient-to-r from-accent via-primary to-secondary rounded-[3rem] blur-[100px] opacity-20" />
            
            {/* Card Content */}
            <div className="relative p-12 md:p-20 rounded-[2.5rem] bg-gradient-to-br from-card via-card/95 to-muted/80 border-2 border-primary/30 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Decorative Floating Elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-500" />
              
              <div className="relative text-center space-y-10">
                {/* Animated Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <Sparkles className="h-10 w-10 text-primary animate-pulse" />
                    <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl" />
                  </div>
                </div>

                {/* Headline */}
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-black leading-tight">
                    Let's <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Create</span>
                    <br />
                    Something <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Brilliant</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/30 blur-2xl" />
                    </span>
                  </h2>
                  <p className="text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                    Stop settling for boring security. Let's craft a defense strategy as unique and creative as your business.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                  <Button 
                    size="lg" 
                    className="group relative text-xl px-14 py-10 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all duration-500 overflow-hidden transform hover:scale-105"
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    <span className="relative z-10 flex items-center gap-4 font-black">
                      <Calendar className="h-6 w-6" />
                      Start Your Creative Journey
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>

                {/* Trust Elements */}
                <div className="pt-10 flex flex-wrap justify-center gap-8 text-base">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 border border-primary/20 backdrop-blur-sm">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="font-medium text-foreground">Free Creative Audit</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 border border-secondary/20 backdrop-blur-sm">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="font-medium text-foreground">45-Min Deep Dive</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/50 border border-accent/20 backdrop-blur-sm">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="font-medium text-foreground">Custom Strategy</span>
                  </div>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-primary/30 rounded-tl-3xl" />
              <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-secondary/30 rounded-br-3xl" />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-16 text-center space-y-6">
            <p className="text-2xl text-foreground/70 font-light">
              Join the <span className="font-bold text-primary">creative revolution</span> in cybersecurity
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/60 backdrop-blur-sm border border-primary/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-base font-semibold text-foreground">Live consultations available now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
