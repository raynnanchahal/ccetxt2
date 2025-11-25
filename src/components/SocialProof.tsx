import { Sparkles, Palette, Lightbulb, Rocket, Star, TrendingUp } from "lucide-react";

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

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-secondary rounded-full animate-ping delay-300" />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-accent rounded-full animate-ping delay-700" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              By The <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Numbers</span>
            </h2>
            <p className="text-xl text-muted-foreground">Results that speak louder than conventional approaches</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Card Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color} to-${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                <div className="relative text-center space-y-4 p-8 rounded-2xl bg-card/80 backdrop-blur-xl border-2 border-border group-hover:border-primary/50 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/5 border border-${stat.color}/30 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-8 w-8 text-${stat.color}`} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r from-${stat.color} to-${stat.color}/60 bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70 font-semibold tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-foreground">Trusted by Innovators</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-foreground">
              Where <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Visionaries</span> Trust Us
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The world's most forward-thinking companies choose creative security over cookie-cutter solutions
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center justify-center h-24 px-8 rounded-2xl bg-card/60 backdrop-blur-xl border-2 border-border group-hover:border-primary/40 transition-all duration-300 transform group-hover:scale-105">
                  <span className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="relative mt-20 max-w-4xl mx-auto">
            {/* Background Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl opacity-50" />
            
            <div className="relative p-10 md:p-16 rounded-3xl bg-gradient-to-br from-card via-card/95 to-muted/80 backdrop-blur-xl border-2 border-primary/30 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-3xl text-foreground leading-relaxed mb-10 font-light">
                "They don't just <span className="font-bold text-primary">identify</span> vulnerabilities—they 
                <span className="font-bold text-secondary"> think</span> like artists and 
                <span className="font-bold text-accent"> defend</span> like masters. This is security reimagined."
              </blockquote>
              
              <div className="flex items-center justify-center gap-5">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-75" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">SC</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">Sarah Chen</div>
                  <div className="text-base text-muted-foreground">Partner, Sequoia Capital</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
              <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-secondary/30 rounded-bl-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
