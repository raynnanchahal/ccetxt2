import { Shield, Lock, Zap, Users } from "lucide-react";

export const SocialProof = () => {
  const stats = [
    { icon: Shield, value: "99.9%", label: "Threat Prevention Rate" },
    { icon: Lock, value: "500+", label: "Protected Companies" },
    { icon: Zap, value: "<1min", label: "Average Response Time" },
    { icon: Users, value: "50M+", label: "Users Protected Daily" },
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="text-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Trusted by Leading Investors
            </h3>
            <p className="text-muted-foreground">
              Protecting portfolio companies of the world's top venture capital firms
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="flex items-center justify-center h-20 px-8 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300">
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm border border-border shadow-xl">
              <div className="absolute -top-4 -left-4 w-8 h-8 text-primary/30">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "Cybrus doesn't just identify vulnerabilities—they think like attackers. Their creative approach 
                to security has been instrumental in protecting our portfolio companies from sophisticated threats."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div className="text-left">
                  <div className="font-semibold text-foreground">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Partner, Sequoia Capital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
