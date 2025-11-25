import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-ping delay-500" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full animate-ping delay-1000" />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 backdrop-blur-xl shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Where Creativity Meets Cybersecurity
            </span>
            <Zap className="w-4 h-4 text-accent animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight">
            <span className="inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Think Different.
            </span>
            <br />
            <span className="inline-block text-foreground mt-2">
              Defend <span className="relative inline-block">
                <span className="relative z-10">Smarter</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-xl" />
              </span>.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-3xl text-foreground/80 max-w-4xl mx-auto leading-relaxed font-light">
            We're not your typical security firm. We're <span className="font-bold text-primary">artists</span> who paint with code, 
            <span className="font-bold text-secondary"> strategists</span> who think like hackers, and 
            <span className="font-bold text-accent"> innovators</span> who turn threats into opportunities.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group relative text-lg px-12 py-8 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-500 overflow-hidden"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-3 font-bold">
                Let's Create Magic Together
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-base">
            <div className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
              <div className="relative h-3 w-3">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping" />
                <div className="relative h-3 w-3 rounded-full bg-primary" />
              </div>
              <span className="font-medium text-foreground">Creative Minds</span>
            </div>
            <div className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-all duration-300">
              <div className="relative h-3 w-3">
                <div className="absolute inset-0 rounded-full bg-secondary animate-ping" />
                <div className="relative h-3 w-3 rounded-full bg-secondary" />
              </div>
              <span className="font-medium text-foreground">Hacker Mindset</span>
            </div>
            <div className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300">
              <div className="relative h-3 w-3">
                <div className="absolute inset-0 rounded-full bg-accent animate-ping" />
                <div className="relative h-3 w-3 rounded-full bg-accent" />
              </div>
              <span className="font-medium text-foreground">Proactive Defense</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};
