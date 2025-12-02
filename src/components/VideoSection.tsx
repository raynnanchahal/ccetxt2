import { Play, Palette, Brain, Shield } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/2 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-20 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
              <Palette className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span className="text-xs md:text-sm font-semibold text-foreground">Our Creative Process</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight">
              Where <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Art</span> Meets 
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Security</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
              Watch how we blend creative thinking with cutting-edge security to outsmart even the smartest threats
            </p>
          </div>

          {/* Video Container */}
          <div className="relative group mb-10 md:mb-20">
            {/* Video Placeholder with Play Button */}
            <div className="relative aspect-video rounded-xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border-2 border-primary/30 shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 animate-pulse" />
                <div className="absolute top-10 left-10 w-20 md:w-40 h-20 md:h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-300" />
                <div className="absolute bottom-10 right-10 w-20 md:w-40 h-20 md:h-40 bg-primary/30 rounded-full blur-3xl animate-pulse delay-700" />
              </div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group/play relative transform hover:scale-105 transition-transform duration-300">
                  {/* Outer Glow Rings */}
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-150 group-hover/play:scale-[2] transition-transform duration-500" />
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50 scale-150 animate-ping" />
                  </div>
                  
                  {/* Button */}
                  <div className="relative flex items-center justify-center w-20 h-20 md:w-28 lg:w-32 md:h-28 lg:h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent backdrop-blur-sm border-4 border-white/20 group-hover/play:border-white/40 transition-all duration-300 shadow-[0_0_60px_rgba(168,85,247,0.6)]">
                    <Play className="h-8 w-8 md:h-12 lg:h-14 md:w-12 lg:w-14 text-white ml-1 md:ml-2" fill="currentColor" />
                  </div>
                </button>
              </div>

              {/* Creative Corner Elements */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-1 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary animate-pulse" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-secondary animate-pulse delay-150" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent animate-pulse delay-300" />
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-24 md:h-24 border-t-2 md:border-t-4 border-r-2 md:border-r-4 border-primary/40 rounded-tr-xl md:rounded-tr-3xl hidden sm:block" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-12 h-12 md:w-24 md:h-24 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-secondary/40 rounded-bl-xl md:rounded-bl-3xl hidden sm:block" />
            </div>

            {/* Multi-layer Glow Effect */}
            <div className="absolute -inset-3 md:-inset-6 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-2xl md:blur-3xl opacity-40 group-hover:opacity-70 transition-opacity -z-10" />
            <div className="absolute -inset-6 md:-inset-12 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 blur-[60px] md:blur-[100px] opacity-30 -z-20" />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { icon: Brain, title: "Think Different", desc: "We approach security like artists approach a canvas", color: "primary" },
              { icon: Palette, title: "Creative Solutions", desc: "Every threat is unique, so every defense should be too", color: "secondary" },
              { icon: Shield, title: "Artful Protection", desc: "Beautiful security that actually works", color: "accent" }
            ].map((feature, idx) => (
              <div key={idx} className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-${feature.color}/10 border border-${feature.color}/20 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-5 h-5 md:w-7 md:h-7 text-${feature.color}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
