import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DisclosurePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Disclosure Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>Cybrus Incorporation ("Cybrus", "we", "our") is committed to maintaining a secure environment for our users, clients, and visitors.</p>
            <p>We take security seriously and appreciate responsible reporting from the security community.</p>
            <p>This policy explains how security researchers, users, or visitors can report vulnerabilities responsibly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Our Commitment</h2>
            <p>If you report a valid security vulnerability:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will acknowledge your report</li>
              <li>We will investigate it promptly</li>
              <li>We will keep you informed of progress</li>
              <li>We will not take legal action for good-faith research</li>
              <li>We will credit you if disclosure is mutually agreed</li>
            </ul>
            <p>We respect ethical security research done in good faith.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. What You Should NOT Do</h2>
            <p>To protect systems, clients, and data, please DO NOT:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to access customer data</li>
              <li>Perform DDoS or stress testing</li>
              <li>Run automated scanners on production systems</li>
              <li>Exploit, modify, or delete data</li>
              <li>Use social engineering (e.g., phishing Cybrus staff)</li>
              <li>Access internal systems without written permission</li>
              <li>Disclose vulnerabilities publicly before they are fixed</li>
              <li>Breach privacy, confidentiality, or applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. What You MAY Test (Safe Scope)</h2>
            <p>You may test publicly accessible systems owned by Cybrus, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>www.cybrus.in</li>
              <li>Public subdomains belonging to Cybrus (non-client environments)</li>
              <li>Public pages and forms</li>
            </ul>
            <p>Client systems, backend environments, or testing platforms are STRICTLY out of scope unless explicitly authorized through a formal engagement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Reporting a Vulnerability</h2>
            <p>If you believe you have found a security issue, please submit:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A clear description of the issue</li>
              <li>Steps to reproduce</li>
              <li>Impact assessment</li>
              <li>Any relevant screenshots or proof-of-concept</li>
              <li>Your contact details (optional)</li>
            </ul>
            <p>Send your report to:</p>
            <p>
              📧 Email: info@cybrus.in<br />
              📞 Phone: +91 7983901906<br />
              Subject Line: "Security Vulnerability Report – [Your Name]"
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Our Responsible Response Process</h2>
            <p>Once a report is received, we will:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Acknowledge receipt within 3–5 business days</li>
              <li>Investigate the vulnerability</li>
              <li>Verify its impact</li>
              <li>Work to resolve it internally</li>
              <li>Inform you once it is addressed</li>
              <li>Discuss coordinated disclosure if applicable</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. No Legal Action for Good-Faith Research</h2>
            <p>Cybrus will not pursue legal action if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You follow this policy</li>
              <li>You act in good faith</li>
              <li>You avoid privacy violations</li>
              <li>You do not exploit data</li>
              <li>You do not disrupt services</li>
              <li>You allow reasonable time for resolution</li>
            </ul>
            <p>We reserve the right to take action against malicious, harmful, or irresponsible activity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Recognition</h2>
            <p>If both parties agree, we may publicly acknowledge researchers who:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Report valid vulnerabilities</li>
              <li>Act responsibly and ethically</li>
              <li>Cooperate respectfully during the resolution</li>
            </ul>
            <p>Credit is optional — anonymity is respected.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Out of Scope Issues</h2>
            <p>The following are NOT considered vulnerabilities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Missing SPF/DMARC headers</li>
              <li>Clickjacking on pages without sensitive actions</li>
              <li>Rate-limiting issues on non-critical pages</li>
              <li>Use of outdated libraries without proven exploitability</li>
              <li>Weak but theoretical issues without impact</li>
              <li>Reports generated by automated scanners with no validation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
            <p>For all security-related matters:</p>
            <p>
              <strong>Cybrus Incorporation</strong><br />
              Email: info@cybrus.in<br />
              Phone: +91 7983901906<br />
              Address: 56, Saket Colony, Shahganj, Agra, 282010<br />
              Location: Gurugram, India
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisclosurePolicy;
