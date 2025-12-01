import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RefundCancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-5xl font-black mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Refund & Cancellation Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p>This Refund & Cancellation Policy outlines how payments, cancellations, and refunds are handled for services offered by Cybrus Incorporation ("Cybrus", "we", "us", "our").</p>
            <p>Because cybersecurity work is technical, time-intensive, and requires planning, this policy ensures fairness and clarity for both parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Payments Only After Agreement</h2>
            <p>Cybrus does not collect payments through the website.</p>
            <p>Payment is only made:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>After a consultation call</li>
              <li>After both parties agree on scope</li>
              <li>After a formal proposal/contract is accepted</li>
            </ul>
            <p>This ensures transparency and prevents accidental charges.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cancellation Before Project Start</h2>
            <p>A project is considered "started" only when:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The agreement is signed, and</li>
              <li>Work has been scheduled or initiated</li>
            </ul>
            <p>If a client cancels before the project start, no charges apply unless:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A custom scope document was created</li>
              <li>Significant pre-engagement prep was done</li>
            </ul>
            <p>In such cases, a small preparation fee may apply (if stated in the agreement).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cancellation After Project Start</h2>
            <p>Once a project has begun, Cybrus reserves the right to charge for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Work already completed</li>
              <li>Time invested</li>
              <li>Any assessments or testing already performed</li>
              <li>Resources allocated specifically for the client</li>
            </ul>
            <p>Due to the nature of cybersecurity services, full refunds are generally not possible after work begins.</p>
            <p>This protects both the integrity of the work and the time invested.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Refunds</h2>
            <p>Cybrus may issue refunds in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A billing error occurred</li>
              <li>A duplicate payment was made</li>
              <li>Cybrus is unable to deliver the agreed scope due to internal constraints</li>
            </ul>
            <p>Refunds are not issued for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Change of mind after work begins</li>
              <li>Incomplete access or information from the client</li>
              <li>Delays caused by the client's team</li>
              <li>Scope misunderstandings after signing (unless Cybrus is at fault)</li>
            </ul>
            <p>Partial refunds may be considered on a case-by-case basis depending on delivered work.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Client Delays or Lack of Access</h2>
            <p>If a project is delayed because the client did not provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Credentials</li>
              <li>Access to environments</li>
              <li>Required documentation</li>
              <li>Clear scope inputs</li>
            </ul>
            <p>…Cybrus may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reschedule the project</li>
              <li>Charge applicable delay fees (if defined)</li>
              <li>Close the project without full refund</li>
            </ul>
            <p>Access is essential to delivering accurate security assessments.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Project Rescheduling</h2>
            <p>If a client wishes to reschedule testing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>At least 48 hours' notice is recommended</li>
              <li>Less than 48 hours may result in rescheduling fees, depending on team allocation</li>
            </ul>
            <p>Large assessments require pre-booked resources.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact for Billing Issues</h2>
            <p>For refund or cancellation requests, contact:</p>
            <p>
              <strong>Cybrus Incorporation</strong><br />
              Email: info@cybrus.in<br />
              Phone: +91 7983901906<br />
              Address: 56, Saket Colony, Shahganj, Agra, 282010<br />
              Location: Gurugram, India
            </p>
            <p>We aim to respond to all billing-related messages within 3–5 business days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Updates to This Policy</h2>
            <p>Cybrus may update this policy periodically.</p>
            <p>The updated version will be available on this page with a revised date.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundCancellationPolicy;
