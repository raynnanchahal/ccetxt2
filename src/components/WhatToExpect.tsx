import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Search, FileText, Clock, CheckCircle2, Target } from "lucide-react";

export const WhatToExpect = () => {
  const expectations = [
    {
      icon: Search,
      title: "Security Deep Dive",
      description: "We'll analyze your current security posture and identify blind spots you didn't know existed."
    },
    {
      icon: Target,
      title: "Attack Surface Mapping",
      description: "Understand exactly where hackers would target your business — before they do."
    },
    {
      icon: FileText,
      title: "Custom Action Plan",
      description: "Walk away with a prioritized roadmap tailored to your business, not generic checklists."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Get a clear picture of your biggest vulnerabilities and their potential business impact."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">45-Minute Strategy Call</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
              What to Expect on <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Call</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              This isn't a sales pitch. It's a real conversation about your security challenges with actionable insights you can use immediately.
            </p>
          </div>

          {/* Expectations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {expectations.map((item, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Promise */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">No commitment required • 100% Free</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 font-bold px-8 py-6 text-base"
              onClick={() => window.open('https://cal.com/cybrus-inc/call', '_blank')}
            >
              <span className="flex items-center gap-2">
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
