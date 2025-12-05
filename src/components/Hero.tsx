import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-48 md:w-96 h-48 md:h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 md:w-[500px] h-64 md:h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[600px] h-72 md:h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
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
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          {/* Warning Badge */}
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-destructive/10 border border-destructive/30 backdrop-blur-xl shadow-lg">
            <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-destructive animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-destructive">
              Security Alert
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-foreground">
              You're One Overlooked Vulnerability
            </span>
            <br />
            <span className="text-foreground">Away From </span>
            <span className="bg-gradient-to-r from-destructive via-primary to-secondary bg-clip-text text-transparent">
              a Breach
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Scanners won't warn you. Automation won't detect it.
            <br className="hidden sm:block" />
            <span className="font-semibold text-foreground/90">Creative attackers will find it</span> — and they only need one gap.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group relative bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 overflow-hidden font-bold px-8 py-6 text-base"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Your Strategy Call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};
