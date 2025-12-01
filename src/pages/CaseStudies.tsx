import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type CaseStudy = {
  title: string;
  context: string;
  need: string;
  structure?: string[];
  days?: { title: string; activities: string }[];
  experience?: string;
  approach?: string[];
  findings?: string[];
  improvements?: string[];
  outcomes?: string[];
  outcome?: string;
  lookingForward?: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "A Campus Needed Practical Cybersecurity Exposure. Here's What Their Students Learned.",
    context: "RBS Management & Technical Campus wanted their IT/CS students to experience cybersecurity in a way that went beyond textbooks. Many understood concepts but had never interacted with real attack scenarios.",
    need: "A short, interactive program that could help 120+ students get hands-on exposure without requiring prior experience.",
    structure: [
      "Website exploitation basics",
      "Android and Windows attack surfaces",
      "Phishing and social engineering",
      "Guided labs + group exercises"
    ],
    days: [
      {
        title: "Day 1",
        activities: "Environment setup → auth bypass → database exploitation → 2FA bypass → price tampering"
      },
      {
        title: "Day 2",
        activities: "Bruteforce scenarios → phishing simulations → social engineering → Windows & Android exploitation"
      }
    ],
    outcomes: [
      "Much stronger understanding of attack flow",
      "High engagement across both days",
      'Students repeatedly shared that this was their first time "seeing cybersecurity for real"'
    ],
    lookingForward: "Many participants requested longer or follow-up sessions, showing clear demand for deeper practical exposure."
  },
  {
    title: "A 20-Day Program That Helped Beginners Build Real Confidence in Security Fundamentals.",
    context: "A mix of students wanted structured cybersecurity training but didn't have access to physical labs or in-person sessions. Skill levels ranged from total beginners to intermediate learners.",
    need: "A remote program that broke complex topics into understandable, step-by-step learning — with enough support to keep students engaged throughout.",
    structure: [
      "Live online sessions",
      "Threat fundamentals",
      "Network + web security basics",
      "Ethical hacking foundations",
      "Assignments, quizzes, and virtual labs"
    ],
    experience: "Students used an LMS, VMs, shared exercises, and live walkthroughs. Q&A became central — it allowed students to clarify concepts and learn from each other's questions.",
    outcomes: [
      "90% completion rate",
      "Clear improvement in hands-on confidence",
      "Positive feedback specifically on practical clarity and pacing"
    ],
    lookingForward: "Based on student feedback, future cohorts are planned with increased lab hours to deepen practice."
  },
  {
    title: "The Hidden Risks Inside a QR-Based Medical ID System — and How They Were Resolved.",
    context: "A digital emergency ID platform was preparing for deployment. Its QR-based profiles contained sensitive personal and medical information that could not risk exposure.",
    need: "A careful security review of the web application, admin panel, and QR retrieval flows to identify vulnerabilities before the platform went live.",
    approach: [
      "Manual security testing",
      "Business logic analysis",
      "Authentication checks",
      "Input validation & payload testing",
      "QR endpoint behaviour"
    ],
    findings: [
      "SQL injection",
      "LFI",
      "Stored & reflected XSS",
      "Authentication bypass",
      "Misconfigurations + weak security headers"
    ],
    improvements: [
      "Parameterized queries",
      "Safer input handling",
      "Stronger session management",
      "Hardened QR logic",
      "Cleaner server configuration"
    ],
    outcome: "The platform moved closer to launch with a significantly reduced risk profile and a clear plan for periodic security reviews."
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-world security projects and their outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    Case Study {index + 1}
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {study.title}
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Context</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.context}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Need</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.need}</p>
                    </div>

                    {study.structure && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {index === 1 ? "Program Structure" : "How the Workshop Was Structured"}
                        </h3>
                        <ul className="space-y-2">
                          {study.structure.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {study.days && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">The Two Days in Action</h3>
                        <div className="space-y-4">
                          {study.days.map((day, i) => (
                            <div key={i} className="bg-muted/30 p-4 rounded-lg">
                              <h4 className="font-bold text-primary mb-2">{day.title}:</h4>
                              <p className="text-muted-foreground">{day.activities}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {study.experience && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Learning Experience</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.experience}</p>
                      </div>
                    )}

                    {study.approach && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Assessment Approach</h3>
                        <ul className="space-y-2">
                          {study.approach.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {study.findings && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Key Findings</h3>
                        <ul className="space-y-2">
                          {study.findings.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {study.improvements && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">What Was Improved</h3>
                        <ul className="space-y-2">
                          {study.improvements.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {study.outcomes && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          {index === 2 ? "Outcome" : "Outcomes"}
                        </h3>
                        {typeof study.outcomes === 'string' ? (
                          <p className="text-muted-foreground leading-relaxed">{study.outcomes}</p>
                        ) : (
                          <ul className="space-y-2">
                            {study.outcomes.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {study.outcome && (
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Outcome</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                      </div>
                    )}

                    {study.lookingForward && (
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-3 text-foreground">Looking Forward</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.lookingForward}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
