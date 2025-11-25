import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Shield } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            {/* Card Content */}
            <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-muted border border-border backdrop-blur-sm">
              <div className="text-center space-y-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>

                {/* Headline */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Ready to Outsmart the Hackers?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Schedule a free security assessment and discover how our creative approach 
                    can protect your most valuable assets.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button 
                    size="lg" 
                    className="group text-lg px-10 py-7 bg-primary hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300"
                    onClick={() => window.open('https://calendly.com', '_blank')}
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    Schedule Your Assessment
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Trust Elements */}
                <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>30-minute consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Immediate threat insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">
              Join the companies that chose proactive security over reactive fixes
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Available for immediate consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
