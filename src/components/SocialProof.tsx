import { Sparkles, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const SocialProof = () => {
  const stats = [
    { icon: Sparkles, value: "100%", label: "Creative Thinking", color: "primary" },
    { icon: Rocket, value: "500+", label: "Brands Protected", color: "secondary" },
    { icon: Lightbulb, value: "Zero", label: "Standard Solutions", color: "accent" },
    { icon: TrendingUp, value: "10x", label: "Faster Response", color: "primary" },
  ];

  const reviews = [
    {
      quote: "They showed us exactly where we were exposed — in plain English. Security was always a black box for me. Cybrus broke everything down visually and showed where a real attacker could slip in.",
      author: "Rohan P.",
      role: "Founder, Hostly"
    },
    {
      quote: "Our product looked solid… until Cybrus stress-tested it like a real attacker. Their team ran real-world attack simulations and revealed how a small flaw could blow up into a reputation disaster.",
      author: "Nishita G.",
      role: "Co-founder, SkillHive"
    },
    {
      quote: "Their report impressed our investors more than our pitch deck did. One investor literally said, 'Finally, a startup that takes security seriously.' That alone justified the entire engagement.",
      author: "Zayd K.",
      role: "CEO, QuickFlow"
    },
    {
      quote: "They think like criminals — and that's exactly what we needed. Cybrus thinks like the people trying to break your product. That perspective changed how we build.",
      author: "Simran T.",
      role: "Founder, Delivo"
    },
    {
      quote: "Security used to overwhelm us. Cybrus made it simple, fast, and doable. Our team fixed the biggest risks in days, not months. Zero stress. Maximum clarity.",
      author: "Kunal R.",
      role: "Co-founder, DraftOne"
    },
    {
      quote: "This is the first time a security firm actually felt like a partner. Cybrus asked questions, understood our product deeply, and walked us through every finding.",
      author: "Aditi S.",
      role: "CEO, LoopDesk"
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="hidden md:block absolute bottom-40 left-20 w-2 h-2 bg-secondary rounded-full animate-ping delay-300" />
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        {/* Stats Grid */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              By The <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">Results that speak louder than conventional approaches</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="relative text-center space-y-2 md:space-y-3 p-4 md:p-6 rounded-xl md:rounded-2xl bg-card/80 backdrop-blur-xl border border-border group-hover:border-primary/50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                    <stat.icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
                  </div>
                  <div className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
              What <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Founders</span> Say
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">Real experiences from real founders</p>
          </div>
          
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex gap-4 md:gap-5 px-1">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="inline-block w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0"
                >
                  <div className="relative p-5 md:p-6 rounded-xl bg-card/80 backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-300 h-full">
                    {/* Quote Icon */}
                    <div className="absolute -top-2.5 -left-2.5 md:-top-3 md:-left-3 w-7 h-7 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5 md:w-5 md:h-5">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>
                    
                    <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 font-normal whitespace-normal">
                      "{review.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-sm opacity-75" />
                        <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                          <span className="text-sm md:text-base font-bold text-primary-foreground">{review.author.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="text-sm md:text-base font-bold text-foreground">{review.author}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">{review.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};
