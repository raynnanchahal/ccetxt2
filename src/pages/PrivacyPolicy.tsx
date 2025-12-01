import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>Cybrus Incorporation ("Cybrus", "we", "our", "us") is committed to protecting the personal information of all visitors, clients, and users who interact with our website or our services.</p>
            <p>This Privacy Policy explains:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>What information we collect</li>
              <li>Why we collect it</li>
              <li>How we use and protect it</li>
              <li>Your rights regarding your data</li>
            </ul>
            <p>Our company is founded by <strong>Siddhartha & Udesh</strong> and is registered at:<br />
            <strong>56, Saket Colony, Shahganj, Agra, 282010, India</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-bold text-foreground mb-3">A. Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job role</li>
              <li>Business address</li>
              <li>Any information submitted through our forms</li>
              <li>Any documents or details shared during consultation or audit onboarding</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">B. Information Shared During Security Assessments</h3>
            <p>(Only after formal engagement and authorization)</p>
            <p>This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access credentials supplied by clients</li>
              <li>Technical logs</li>
              <li>System configurations</li>
              <li>Source code samples</li>
              <li>API keys or test environment credentials</li>
              <li>Platform screenshots or documentation</li>
            </ul>
            <p><strong>Note:</strong> The exact data varies based on project scope and is always handled with strict confidentiality.</p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-6">C. Automatically Collected (Website Analytics)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Device type</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on site</li>
              <li>Referring URLs</li>
            </ul>
            <p>This is standard analytics data used to improve user experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries</li>
              <li>Schedule consultations</li>
              <li>Understand your business needs</li>
              <li>Deliver cybersecurity services you request</li>
              <li>Perform authorized audits, VAPTs, or assessments</li>
              <li>Improve the website experience</li>
              <li>Maintain security and compliance</li>
              <li>Communicate relevant updates or project information</li>
            </ul>
            <p>We <strong>do not</strong> sell, rent, or trade your personal information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Handling of Client Credentials & Technical Data</h2>
            <p>Because cybersecurity work may require temporary access to systems, we follow strict rules:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credentials are used <strong>only</strong> for the authorized scope</li>
              <li>Access is limited to assigned personnel</li>
              <li>Data is stored in encrypted form</li>
              <li>Credentials are deleted upon project completion</li>
              <li>No third party receives client credentials</li>
              <li>No unauthorized testing is ever performed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Legal Basis (India – DPDP Act 2023)</h2>
            <p>Data is collected and processed under:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>DPDP Act, 2023 (India)</strong></li>
              <li><strong>Indian IT Act, 2000 & IT Rules, 2011</strong></li>
            </ul>
            <p>Your consent is considered given when:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You submit a contact form</li>
              <li>You schedule a call</li>
              <li>You share information during onboarding</li>
              <li>You engage us for a security assessment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Information Sharing</h2>
            <p>We only share information when:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Required by law</li>
              <li>Required for project execution (internal team only)</li>
              <li>Necessary to protect the security or rights of Cybrus</li>
              <li>Explicitly authorized by the client</li>
            </ul>
            <p>We do <strong>not</strong> share or transfer personal data to any third party for marketing or commercial reasons.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inquiry data: retained for communication and deleted upon request</li>
              <li>Client credentials: deleted immediately after project completion</li>
              <li>Project documents & reports: stored securely as required for audit logs</li>
              <li>Analytics data: retained as per tool configuration (e.g., Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Security</h2>
            <p>We implement:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encrypted storage</li>
              <li>Role-based access</li>
              <li>Secure deletion policies</li>
              <li>Internal confidentiality controls</li>
              <li>Industry-standard cybersecurity practices</li>
            </ul>
            <p>However, no method of transmission or storage is 100% secure, and this is transparently acknowledged.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Rights</h2>
            <p>You may request:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of personal data</li>
              <li>Withdrawal of consent</li>
              <li>Clarification on how your data is used</li>
            </ul>
            <p>Requests can be made at <strong>info@cybrus.in</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Data</h2>
            <p>Our services and website are not intended for individuals under 18 years of age.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
            <p>The Privacy Policy may be updated periodically. Changes will be reflected on this page along with an updated "Last Updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact & Grievance Officer</h2>
            <p>As required by the DPDP Act, our grievance contact is:</p>
            <p>
              <strong>Grievance Officer</strong><br />
              Cybrus Incorporation<br />
              Email: info@cybrus.in<br />
              Phone: +91 7983901906<br />
              Address: 56, Saket Colony, Shahganj, Agra, 282010<br />
              Location: Agra, India
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
