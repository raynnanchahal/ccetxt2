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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
              What Makes{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Cybrus Different
              </span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 font-bold px-8 py-6 text-base"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center gap-2">
                Work With Creative Security Experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
