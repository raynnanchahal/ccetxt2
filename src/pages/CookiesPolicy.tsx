import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Cookies Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>This Cookie Policy explains how Cybrus Incorporation ("Cybrus", "we", "our", "us") uses cookies and similar tracking technologies on the website www.cybrus.in.</p>
            <p>By continuing to browse the site, you agree to the use of cookies as described here.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Function properly</li>
              <li>Improve user experience</li>
              <li>Understand visitor behavior</li>
              <li>Analyze performance</li>
            </ul>
            <p>Cookies do not give us access to your device.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>
            <p>Depending on your usage, the site may use:</p>
            
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">A. Essential Cookies</h3>
            <p>Necessary for the website to function — e.g.:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Page loading</li>
              <li>Navigation</li>
              <li>Form submissions</li>
            </ul>
            <p>These cannot be disabled.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">B. Analytics Cookies</h3>
            <p>Used to understand how visitors interact with the site — e.g.:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics</li>
              <li>Page views</li>
              <li>Session duration</li>
              <li>Traffic sources</li>
            </ul>
            <p>This helps improve content and experience.</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">C. Preference Cookies</h3>
            <p>Remember basic user preferences (if applicable).</p>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">D. Marketing / Retargeting Cookies (optional)</h3>
            <p>Used only if tools like LinkedIn Insight Tag or Meta Pixel are installed.</p>
            <p>These help measure ad performance and reach relevant audiences.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Cookie Data</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve website performance</li>
              <li>Analyze visitor behavior</li>
              <li>Enhance security</li>
              <li>Debug issues</li>
              <li>Measure engagement</li>
              <li>Improve content relevance</li>
            </ul>
            <p>We do not sell or trade cookie data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Managing & Disabling Cookies</h2>
            <p>You can manage or disable cookies anytime through your browser settings.</p>
            <p>Common browser controls:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chrome: Settings → Privacy → Cookies</li>
              <li>Firefox: Settings → Privacy & Security</li>
              <li>Safari: Preferences → Privacy</li>
              <li>Edge: Settings → Site permissions</li>
            </ul>
            <p>Disabling certain cookies may affect website functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Cookies</h2>
            <p>Some third-party services may place cookies on your device, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics</li>
              <li>LinkedIn Insight Tag</li>
              <li>Meta Pixel</li>
              <li>Scheduling tools (e.g., Calendly)</li>
              <li>Embedded content (if any)</li>
            </ul>
            <p>These providers have their own cookie and privacy policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time.</p>
            <p>Any changes will be reflected on this page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
            <p>If you have questions about this Cookie Policy:</p>
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

export default CookiesPolicy;
