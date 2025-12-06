import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Eye, Lightbulb, Search } from "lucide-react";

export const CybrusDifference = () => {
  const features = [
    {
      icon: Brain,
      title: "Creative Offensive Thinking",
      description: "We explore your product the way real attackers would."
    },
    {
      icon: Eye,
      title: "Human Analysis",
      description: "Not automated guesswork — actual human reasoning."
    },
    {
      icon: Lightbulb,
      title: "Human Intuition",
      description: "We see connections no scanner could ever predict."
    },
    {
      icon: Search,
      title: "Human Curiosity",
      description: "The mindset that uncovers the vulnerabilities everyone else misses."
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative Orbs - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-1/4 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              What Makes Cybrus{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Different
              </span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-5 md:p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border group-hover:border-primary/40 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 font-bold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center justify-center gap-2">
                Work With Creative Security Experts
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
