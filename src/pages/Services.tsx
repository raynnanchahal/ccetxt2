import { Shield, Smartphone, Code, Network, GraduationCap, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Web App Security Testing",
    description: "CYBRUS INC. offers comprehensive Network Security Testing to evaluate and strengthen your IT infrastructure. Our team identifies vulnerabilities across your network, simulating real-world attacks to assess your security posture. We provide detailed insights and actionable recommendations to ensure your network is protected against unauthorized access, data breaches, and other potential threats."
  },
  {
    icon: Smartphone,
    title: "Mobile App Security Testing",
    description: "CYBRUS INC. delivers thorough Mobile Penetration Testing to protect your mobile applications from potential threats. Our experts simulate sophisticated attacks on iOS and Android platforms to detect vulnerabilities, offering actionable insights to strengthen your app security. We focus on safeguarding sensitive data and ensuring your mobile apps maintain the highest standards of security and compliance."
  },
  {
    icon: Lock,
    title: "API Security Testing",
    description: "CYBRUS INC. offers specialized API Penetration Testing to identify vulnerabilities within your APIs and ensure secure data exchanges. Our experts simulate targeted attacks to uncover security weaknesses, providing in-depth analysis and remediation strategies. We help safeguard your APIs against unauthorized access, data breaches, and other potential threats, ensuring robust security and compliance."
  },
  {
    icon: Code,
    title: "Secure Code Review",
    description: "CYBRUS INC. provides expert Secure Code Review services to identify and resolve vulnerabilities in your software's source code. Our specialists thoroughly assess your codebase, detecting security flaws and offering recommendations to strengthen your application's defenses. We help ensure that your software is built on a secure foundation, minimizing risks and protecting against future threats."
  },
  {
    icon: Network,
    title: "Network Security",
    description: "CYBRUS INC. offers comprehensive Network Security Testing to evaluate and strengthen your IT infrastructure. Our team identifies vulnerabilities across your network, simulating real-world attacks to assess your security posture. We provide detailed insights and actionable recommendations to ensure your network is protected against unauthorized access, data breaches, and other potential threats."
  },
  {
    icon: GraduationCap,
    title: "Cyber Security Training",
    description: "CYBRUS INC. delivers engaging Cyber Security Training tailored to empower your team with essential skills to combat cyber threats. Our in-house programs cover key security concepts, real-world scenarios, and best practices, ensuring participants are well-equipped to protect your organization. We focus on building a strong security culture within your workforce, enhancing your overall security posture."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cybersecurity solutions tailored to protect your digital assets
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
