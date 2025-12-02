import { CheckCircle, Clock, Users, Laptop, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const expectations = [
    {
      icon: Clock,
      title: "No Ghosting, Please",
      copy: "If something comes up, please reschedule using the link in your calendar — or message us directly.",
      hasWhatsApp: true,
    },
    {
      icon: Users,
      title: "All Decision Makers Present",
      copy: "If you have a co-founder, CTO, or anyone involved in product decisions, make sure they're on the call. This helps us go deeper and avoid repeating the same session twice.",
      hasWhatsApp: false,
    },
    {
      icon: Laptop,
      title: "Join From a Focused Environment",
      copy: "Use a laptop or desktop. Sit in a quiet room. Fast internet. No distractions. No Slack. No multitasking. This session is the roadmap to securing your product's trust.",
      hasWhatsApp: false,
    },
    {
      icon: Shield,
      title: "Prepare to Make the Most of This Call",
      copy: "Below, you'll find client stories, reviews, and case studies. Watch a few so you know exactly what to expect — and why founders trust us to protect their product's future.",
      hasWhatsApp: false,
    },
  ];

  const reviews = [
    {
      quote: "They showed us exactly where we were exposed — in plain English. I'm not a technical founder. Security was always a black box for me. Cybrus broke everything down visually and showed where a real attacker could slip in. It finally made sense.",
      author: "Rohan P.",
      role: "Founder, Hostly"
    },
    {
      quote: "Our product looked solid… until Cybrus stress-tested it like a real attacker. We thought we were safe. Their team ran real-world attack simulations and revealed how a small flaw could blow up into a reputation disaster.",
      author: "Nishita G.",
      role: "Co-founder, SkillHive"
    },
    {
      quote: "Their report impressed our investors more than our pitch deck did. We used Cybrus right before investor meetings. The depth, clarity, and action-steps in their report made us look 10x more mature as a company.",
      author: "Zayd K.",
      role: "CEO, QuickFlow"
    },
    {
      quote: "They think like criminals — and that's exactly what we needed. Traditional security guys talk like auditors. Cybrus thinks like the people trying to break your product.",
      author: "Simran T.",
      role: "Founder, Delivo"
    },
    {
      quote: "Security used to overwhelm us. Cybrus made it simple, fast, and doable. Instead of a 50-page PDF full of technical stuff we'd never implement, they gave us a clear list: what's urgent, what's important, what can wait.",
      author: "Kunal R.",
      role: "Co-founder, DraftOne"
    },
    {
      quote: "This is the first time a security firm actually felt like a partner. Most agencies just run scans and send reports. Cybrus asked questions, understood our product deeply, and walked us through every finding.",
      author: "Aditi S.",
      role: "CEO, LoopDesk"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 mb-8">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4">
            Your Call Is <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Locked In</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Here's how to get the most value from it.
          </p>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expectations.map((item, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.copy}</p>
                      {item.hasWhatsApp && (
                        <Button
                          className="mt-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                          onClick={() => window.open("https://wa.me/917983901906", "_blank")}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat on WhatsApp
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              You're In Good Hands — <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Here's What Founders Say</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-xl border-2 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <blockquote className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6">
                    "{review.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{review.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{review.author}</div>
                      <div className="text-xs text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Reassurance */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">"Thank you for valuing your product's security.</span><br />
            We're looking forward to showing you what's really happening under the hood —<br className="hidden md:block" />
            and how to fix it before anyone else can exploit it."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;