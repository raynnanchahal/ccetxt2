import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              See <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cybrus</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we outsmart threats before they outsmart you
            </p>
          </div>

          {/* Video Container */}
          <div className="relative group">
            {/* Video Placeholder with Play Button */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-card to-muted border border-border shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group/play relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl group-hover/play:bg-primary/30 transition-all duration-300 scale-150" />
                  
                  {/* Button */}
                  <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 backdrop-blur-sm border-2 border-primary/50 group-hover/play:scale-110 group-hover/play:bg-primary transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                    <Play className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-secondary/30 rounded-br-lg" />
            </div>

            {/* Glow Effect Behind Video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Watch how our AI-powered threat intelligence adapts to sophisticated attack patterns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
