import { Sparkles, Palette, Lightbulb, Rocket, Star, TrendingUp } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const SocialProof = () => {
  const stats = [
    { icon: Sparkles, value: "100%", label: "Creative Thinking", color: "primary" },
    { icon: Rocket, value: "500+", label: "Brands Protected", color: "secondary" },
    { icon: Lightbulb, value: "Zero", label: "Standard Solutions", color: "accent" },
    { icon: TrendingUp, value: "10x", label: "Faster Response", color: "primary" },
  ];

  const logos = [
    "YCombinator",
    "Sequoia",
    "a16z",
    "Lightspeed",
    "Accel",
    "Greylock",
  ];

  const reviews = [
    {
      quote: "They showed us exactly where we were exposed — in plain English. I'm not a technical founder. Security was always a black box for me. Cybrus broke everything down visually and showed where a real attacker could slip in. It finally made sense. We fixed issues we didn't even know existed.",
      author: "Rohan P.",
      role: "Founder, Hostly"
    },
    {
      quote: "Our product looked solid… until Cybrus stress-tested it like a real attacker. We thought we were safe. Their team ran real-world attack simulations and revealed how a small flaw could blow up into a reputation disaster. I walked away thinking, 'I can't believe this wasn't obvious before.'",
      author: "Nishita G.",
      role: "Co-founder, SkillHive"
    },
    {
      quote: "Their report impressed our investors more than our pitch deck did. We used Cybrus right before investor meetings. The depth, clarity, and action-steps in their report made us look 10x more mature as a company. One investor literally said, 'Finally, a startup that takes security seriously.' That alone justified the entire engagement.",
      author: "Zayd K.",
      role: "CEO, QuickFlow"
    },
    {
      quote: "They think like criminals — and that's exactly what we needed. Traditional security guys talk like auditors. Cybrus thinks like the people trying to break your product. They showed us how an attacker would approach our app and the chain of events it could trigger. That perspective changed how we build.",
      author: "Simran T.",
      role: "Founder, Delivo"
    },
    {
      quote: "Security used to overwhelm us. Cybrus made it simple, fast, and doable. Instead of a 50-page PDF full of technical stuff we'd never implement, they gave us a clear list: what's urgent, what's important, what can wait. Our team fixed the biggest risks in days, not months. Zero stress. Maximum clarity.",
      author: "Kunal R.",
      role: "Co-founder, DraftOne"
    },
    {
      quote: "This is the first time a security firm actually felt like a partner. Most agencies just run scans and send reports. Cybrus asked questions, understood our product deeply, and walked us through every finding. They cared more about our users' trust than some of our own team members.",
      author: "Aditi S.",
      role: "CEO, LoopDesk"
    },
    {
      quote: "CYBRUS INC. exceeded our expectations with their exceptional security testing and penetration testing services. Their team conducted a thorough assessment of our website, identifying vulnerabilities with precision and providing effective solutions. The professionalism and efficiency they demonstrated were outstanding. Thanks to CYBRUS INC., our platform is now more secure and resilient. I highly recommend their expertise to any business prioritizing cybersecurity.",
      author: "Amit Saraswat",
      role: "CEO, AmiTT Life Saver"
    },
    {
      quote: "I am extremely impressed with Cybrus Inc's cyber security and penetration testing services. Their team's expertise and professionalism truly set them apart from the competition. I feel confident knowing that Cybrus is keeping our data safe from potential threats.",
      author: "Akshat Singh",
      role: "Director, Bushnell Technik LLP"
    }
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-ping hidden md:block" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-secondary rounded-full animate-ping delay-300 hidden md:block" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full animate-ping delay-700 hidden md:block" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-28">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4">
              By The <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">Results that speak louder than conventional approaches</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color} to-${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                <div className="relative text-center space-y-2 md:space-y-4 p-4 md:p-8 rounded-2xl bg-card/80 backdrop-blur-xl border-2 border-border group-hover:border-primary/50 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/5 border border-${stat.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-5 w-5 md:h-8 md:w-8 text-${stat.color}`} />
                  </div>
                  <div className={`text-2xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-${stat.color} to-${stat.color}/60 bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-foreground/70 font-semibold tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="max-w-6xl mx-auto text-center space-y-10 md:space-y-16">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
              <span className="text-xs md:text-sm font-semibold text-foreground">Trusted by Innovators</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-black text-foreground">
              Where <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Visionaries</span> Trust Us
            </h3>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              The world's most forward-thinking companies choose creative security over cookie-cutter solutions
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center h-16 md:h-24 px-4 md:px-8 rounded-xl md:rounded-2xl bg-card/60 backdrop-blur-xl border-2 border-border group-hover:border-primary/40 transition-all duration-300 transform group-hover:scale-105">
                  <span className="text-sm md:text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Reviews Carousel */}
          <div className="relative mt-12 md:mt-20">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                What <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Founders</span> Say
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">Real experiences from real founders</p>
            </div>
            
            <ScrollArea className="w-full whitespace-nowrap pb-4 md:pb-6">
              <div className="flex gap-4 md:gap-6 px-2 md:px-4">
                {reviews.map((review, index) => (
                  <div 
                    key={index}
                    className="relative inline-block w-[300px] md:w-[500px] flex-shrink-0"
                  >
                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
                    
                    <div className="relative p-5 md:p-8 rounded-xl md:rounded-2xl bg-card/80 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-300 h-full">
                      {/* Quote Icon */}
                      <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 md:w-6 md:h-6">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>
                      
                      <blockquote className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6 md:mb-8 font-normal whitespace-normal">
                        "{review.quote}"
                      </blockquote>
                      
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-md opacity-75" />
                          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                            <span className="text-sm md:text-lg font-bold text-white">{review.author.charAt(0)}</span>
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
      </div>
    </section>
  );
};
