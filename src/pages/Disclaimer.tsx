import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Disclaimer
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. General Information Only</h2>
            <p>The information on the Cybrus Incorporation website (www.cybrus.in) is provided <strong>for general educational and informational purposes only</strong>.</p>
            <p>Nothing on this site should be interpreted as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional cybersecurity advice</li>
              <li>Legal guidance</li>
              <li>Technical instructions for hacking</li>
              <li>A guarantee of security</li>
              <li>A substitute for a formal audit or engagement</li>
            </ul>
            <p>Every organization has unique risks that require individual assessment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. No Unauthorized Activity</h2>
            <p>Cybrus does <strong>not</strong> support, encourage, or endorse:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unethical hacking</li>
              <li>Unauthorized security testing</li>
              <li>Breaking into systems without consent</li>
              <li>Using vulnerabilities for malicious purposes</li>
              <li>Circumventing laws or regulations</li>
            </ul>
            <p>Any misuse of the information on this site is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. No Security Guarantees</h2>
            <p>Even after an audit or assessment, <strong>no system can be guaranteed 100% secure</strong>.</p>
            <p>Security testing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduces risk</li>
              <li>Identifies weaknesses</li>
              <li>Strengthens posture</li>
            </ul>
            <p>…but cannot eliminate all possible threats.</p>
            <p>Your security depends on many factors beyond the scope of this website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Engagement Requires Written Authorization</h2>
            <p>Viewing this website or contacting Cybrus does <strong>not</strong> create:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A client relationship</li>
              <li>An audit authorization</li>
              <li>A consulting agreement</li>
            </ul>
            <p>All cybersecurity work requires:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Formal proposal acceptance</li>
              <li>Signed agreement (MSA/SOW)</li>
              <li>Written authorization for testing</li>
            </ol>
            <p>This protects both your organization and ours.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Information</h2>
            <p>While we aim to provide accurate content, Cybrus does not guarantee:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Completeness</li>
              <li>Timeliness</li>
              <li>Precision</li>
              <li>Applicability to your specific situation</li>
            </ul>
            <p>Information may change as technologies, threats, and best practices evolve.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
            <p>Our website may link to third-party websites, resources, or tools.</p>
            <p>Cybrus is <strong>not responsible</strong> for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>External content</li>
              <li>Third-party accuracy</li>
              <li>Their privacy practices</li>
              <li>Any loss or damage arising from their use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>Cybrus Incorporation, its founders, employees, and partners shall not be held liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any damage arising from reliance on website information</li>
              <li>Misuse or misinterpretation of cybersecurity concepts</li>
              <li>Unauthorized testing performed by others</li>
              <li>Losses from third-party tools or links</li>
              <li>Any action taken without a formal engagement</li>
            </ul>
            <p>Use of this website is at your own discretion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
            <p>For questions regarding this Disclaimer:</p>
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

export default Disclaimer;
