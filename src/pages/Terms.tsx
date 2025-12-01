import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Terms and Conditions
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>These Terms & Conditions ("Terms") govern the use of the Cybrus Incorporation website (www.cybrus.in) and any interactions, inquiries, or services initiated through it.</p>
            <p>By using this website, you agree to these Terms.<br />
            If you do not agree, please do not use the site.</p>
            <p>"Cybrus", "we", "our", and "us" refer to <strong>Cybrus Incorporation</strong>, founded by <strong>Siddhartha & Udesh</strong>, registered at:<br />
            56, Saket Colony, Shahganj, Agra, 282010, India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. About Our Website</h2>
            <p>The website provides general information about cybersecurity services, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>VAPT</li>
              <li>Security assessments</li>
              <li>Workshops and training</li>
              <li>Consulting discussions</li>
              <li>Scheduling calls</li>
            </ul>
            <p><strong>Important:</strong> The website is informational. It is <em>not</em> a platform for executing security tests, performing audits, or exchanging sensitive credentials.</p>
            <p>All actual work happens <strong>only after</strong> a formal agreement and written authorization.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Not Professional Advice</h2>
            <p>The content on this website does <strong>not</strong> constitute:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Legal advice</li>
              <li>Security guarantees</li>
              <li>Technical instructions for hacking</li>
              <li>A substitute for a professional engagement</li>
            </ul>
            <p>Any cybersecurity guidance shown here is general information, not tailored advice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Permitted Use</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browse the site</li>
              <li>Learn about our services</li>
              <li>Submit inquiries</li>
              <li>Schedule consultations</li>
              <li>Contact Cybrus through available channels</li>
            </ul>
            <p>You may <strong>not</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website for illegal or malicious activity</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Copy, scrape, or misuse our content</li>
              <li>Use any information here for unauthorized security testing</li>
              <li>Upload harmful code, scripts, or payloads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Engagement for Cybersecurity Services</h2>
            <p>Using this website does <strong>not</strong> automatically create:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A business relationship</li>
              <li>A contract</li>
              <li>A security engagement</li>
              <li>An audit authorization</li>
            </ul>
            <p>A formal service engagement only begins when:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Both parties agree to scope,</li>
              <li>A proposal/contract is signed, and</li>
              <li>Written authorization is provided for any security testing.</li>
            </ol>
            <p>This protects <strong>you</strong> and <strong>us</strong> from accidental unauthorized activity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
            <p>Cybrus is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reliance on general information displayed on the site</li>
              <li>Actions taken based on website content</li>
              <li>Losses incurred from third-party links</li>
              <li>Typographical or informational errors</li>
              <li>Downtime, interruptions, or site unavailability</li>
            </ul>
            <p>To the maximum extent permitted by law, Cybrus disclaims liability for damages arising from your use of the site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Third-Party Tools & Links</h2>
            <p>Our website may include links or tools from third parties (analytics, scheduling, etc.).</p>
            <p>We do not control or endorse third-party content and are not responsible for their policies or practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
            <p>All content on this site — including text, visuals, training descriptions, branding, and materials — belongs to <strong>Cybrus Incorporation</strong>.</p>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copy</li>
              <li>Reproduce</li>
              <li>Redistribute</li>
              <li>Modify</li>
              <li>Publish</li>
              <li>Sell</li>
            </ul>
            <p>…any part of the website without written permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Credentials & Sensitive Information</h2>
            <p>You must <strong>not</strong> submit access credentials, source code, API keys, or confidential details through website forms.</p>
            <p>These are only shared <strong>after</strong> a formal engagement, using secure, mutually-agreed channels.</p>
            <p>This protects your systems and your business.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
            <p>These Terms are governed by the laws of <strong>India</strong>, and any disputes fall under the jurisdiction of courts in <strong>Delhi/Gurugram</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to These Terms</h2>
            <p>We may update these Terms periodically.<br />
            Updates take effect immediately upon posting.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
            <p>For questions regarding these Terms:</p>
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

export default Terms;
