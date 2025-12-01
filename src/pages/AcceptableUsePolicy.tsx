import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AcceptableUsePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Acceptable Use Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Purpose of This Policy</h2>
            <p>This Acceptable Use Policy ("AUP") outlines the rules for using the Cybrus Incorporation website (www.cybrus.in), its content, and any interactions or digital assets provided.</p>
            <p>The goal is to ensure ethical, lawful, and responsible use of all Cybrus materials and systems.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Agreement to the Policy</h2>
            <p>By accessing this website, submitting forms, or interacting with Cybrus in any digital capacity, you agree to this AUP.</p>
            <p>If you do not agree, please stop using the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Prohibited Activities</h2>
            <p>You may NOT use the website or any Cybrus content to:</p>
            
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">A. Participate in illegal or unethical activity</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unauthorized hacking</li>
              <li>Attempting to break into systems</li>
              <li>Security testing without permission</li>
              <li>Exploiting vulnerabilities in third-party systems</li>
              <li>Violating local, national, or international laws</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">B. Access or attempt to access restricted parts of the site</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Admin areas</li>
              <li>Backend systems</li>
              <li>Non-public pages</li>
              <li>Internal portals</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">C. Upload or distribute harmful content</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Malware</li>
              <li>Viruses</li>
              <li>Worms</li>
              <li>Exploit code</li>
              <li>Automated attack scripts</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">D. Interfere with website functionality</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>DDoS attacks</li>
              <li>Overloading servers</li>
              <li>Running automated scanners</li>
              <li>Scraping content at scale</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">E. Misuse Cybrus content or brand</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copying case studies, reports, or content without permission</li>
              <li>Pretending to represent Cybrus</li>
              <li>Claiming affiliation you do not have</li>
              <li>Republishing or reselling Cybrus material</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">F. Harm or harass others</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Spam</li>
              <li>Abuse</li>
              <li>Misrepresentation</li>
              <li>Fraudulent outreach</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Acceptable Use</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browse the site responsibly</li>
              <li>Learn about Cybrus services</li>
              <li>Request consultations</li>
              <li>Use available forms ethically</li>
              <li>Report vulnerabilities responsibly (see VDP)</li>
              <li>Reference content with proper credit for academic use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Use of Cybersecurity Knowledge</h2>
            <p>Cybrus publishes some cybersecurity concepts for educational purposes only.</p>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Practice attacks on unauthorized systems</li>
              <li>Use the information to harm individuals or companies</li>
              <li>Train others to perform illegal actions</li>
              <li>Misinterpret the educational content as operational instructions</li>
            </ul>
            <p>Ethical and legal use is mandatory.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Automated Tools & Data Collection Restrictions</h2>
            <p>Unless explicitly permitted, you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use bots or crawlers</li>
              <li>Perform bulk scraping</li>
              <li>Collect emails from the website</li>
              <li>Extract code, forms, or data</li>
              <li>Harvest analytics or metadata</li>
            </ul>
            <p>This protects the integrity of our systems and content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Suspension or Termination</h2>
            <p>Cybrus may deny access to any user who:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violates this AUP</li>
              <li>Attempts malicious activity</li>
              <li>Abuses forms or contact channels</li>
              <li>Misuses Cybrus information</li>
            </ul>
            <p>We reserve the right to block IPs or take legal action when necessary.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. No Warranties</h2>
            <p>Cybrus provides the website "as is."</p>
            <p>We do not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uninterrupted access</li>
              <li>Error-free operation</li>
              <li>Compatibility with all devices</li>
              <li>Completeness of content</li>
            </ul>
            <p>Users assume full responsibility while browsing.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Reporting Violations</h2>
            <p>If you notice misuse of Cybrus systems or content, please notify us:</p>
            <p>
              <strong>Cybrus Incorporation</strong><br />
              Email: info@cybrus.in<br />
              Phone: +91 7983901906<br />
              Address: 56, Saket Colony, Shahganj, Agra, 282010<br />
              Location: Gurugram, India
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
            <p>The AUP may be updated as needed.</p>
            <p>Changes take effect immediately upon posting on this page.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcceptableUsePolicy;
