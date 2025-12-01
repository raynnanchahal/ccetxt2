import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AccessAuthorizationPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Access and Authorization Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Purpose of This Policy</h2>
            <p>Cybrus Incorporation ("Cybrus", "we", "our") conducts security assessments only with formal written authorization.</p>
            <p>This policy explains:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>How access is granted</li>
              <li>How credentials are handled</li>
              <li>What responsibilities both parties have</li>
              <li>How data is protected before, during, and after the engagement</li>
            </ul>
            <p>It exists for client safety and legal compliance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Authorization Requirement</h2>
            <p>Cybrus will NOT perform:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>VAPT</li>
              <li>Source code reviews</li>
              <li>Infrastructure testing</li>
              <li>Cloud security assessments</li>
              <li>API testing</li>
              <li>OSINT investigations</li>
              <li>Social engineering assessments</li>
            </ul>
            <p>…unless the client provides explicit, written authorization.</p>
            <p>Acceptable forms of authorization include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Signed contract (MSA/SOW)</li>
              <li>Signed Letter of Authorization (LOA)</li>
              <li>Official email confirmation from an authorized signatory</li>
            </ul>
            <p>No testing is done based on verbal permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
            <p>To begin an assessment, the client must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm ownership or legal control of the systems being tested</li>
              <li>Provide accurate scope and environment details</li>
              <li>Share access credentials securely</li>
              <li>Ensure internal teams are informed</li>
              <li>Provide test environment access (if applicable)</li>
              <li>Provide contact details for escalation</li>
            </ul>
            <p>Clients are responsible for obtaining approvals within their own organization before granting Cybrus access.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cybrus Responsibilities</h2>
            <p>Cybrus commits to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using all credentials only for the scope approved</li>
              <li>Never accessing systems outside the defined scope</li>
              <li>Protecting client data with strict confidentiality</li>
              <li>Limiting access to authorized Cybrus personnel only</li>
              <li>Avoiding unnecessary or destructive testing</li>
              <li>Maintaining clear communication throughout the engagement</li>
            </ul>
            <p>We operate with caution and respect for client environments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Credential Handling</h2>
            <p>Because some assessments require temporary access, credentials may be shared by clients. Cybrus follows strict rules:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credentials are stored securely in encrypted formats</li>
              <li>Multi-factor authentication is used wherever possible</li>
              <li>Credentials are never shared outside the assigned team</li>
              <li>Access is logged and monitored internally</li>
              <li>Credentials are deleted immediately after project completion</li>
              <li>Clients may request deletion confirmation</li>
            </ul>
            <p>We do not store long-term access to any client environment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Scope Control & Testing Boundaries</h2>
            <p>Cybrus will only test:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assets explicitly listed in the scope</li>
              <li>Environments approved for testing</li>
              <li>Systems confirmed as safe for assessment</li>
              <li>APIs, URLs, servers, or endpoints owned or controlled by the client</li>
            </ul>
            <p>We will not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Test third-party-owned systems</li>
              <li>Conduct live-production destructive testing</li>
              <li>Access customer/user data unless required</li>
              <li>Test outside the timeline or agreed window</li>
            </ul>
            <p>Any out-of-scope discovery is immediately reported to the client.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Communication During Testing</h2>
            <p>Clients will receive:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A designated point of contact</li>
              <li>Real-time escalation if critical issues are found</li>
              <li>Notification if testing may affect performance</li>
              <li>Updates on progress</li>
            </ul>
            <p>We maintain transparent communication to ensure minimal disruption.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Post-Assessment Data Deletion</h2>
            <p>After project completion:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credentials are deleted</li>
              <li>Logs unique to the engagement are removed</li>
              <li>Temporary access tokens are invalidated</li>
              <li>Screenshots and samples are stored only if needed for the final report</li>
              <li>Sensitive data is destroyed upon request</li>
            </ul>
            <p>Cybrus does not retain unnecessary client information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Responsibility</h2>
            <p>Cybrus is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Misuse of credentials not shared via secure channels</li>
              <li>Incorrect or outdated access details affecting testing</li>
              <li>System instability caused by pre-existing vulnerabilities</li>
              <li>Unforeseen issues in client environments outside the test scope</li>
            </ul>
            <p>Cybrus always operates with caution, but clients must ensure environmental stability.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
            <p>For authorization questions or secure coordination:</p>
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

export default AccessAuthorizationPolicy;
