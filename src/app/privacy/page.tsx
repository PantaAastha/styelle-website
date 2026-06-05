import Section from "../../components/Section";

export const metadata = {
  title: "Privacy Policy | Styelle",
};

export default function PrivacyPolicy() {
  return (
    <Section className="py-24">
      <div className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-4xl font-medium mb-8">Privacy Policy</h1>
        <p className="text-foreground/60 mb-12">Last Updated: June 5, 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Who We Are</h2>
            <p>
              Styelle / StyledTogether ("we," "us," or "our") is a fashion discovery and styling platform. 
              We operate the website located at styelle.style and related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">What Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> If you contact us via email, we collect your email address and any information you provide.</li>
              <li><strong>Usage Data:</strong> Basic website and device logs as collected by our hosting providers for security and performance purposes.</li>
              <li><strong>Integration Data:</strong> If you authorize an integration (such as Pinterest), we may process authorization tokens and permission-scoped data needed to operate the service.</li>
              <li><strong>Platform Insights:</strong> Trend, shopping, content, and analytics data available through authorized APIs or user-approved access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">How We Use Data</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate and improve the Styelle platform and StyledTogether experience.</li>
              <li>To plan fashion content, style ideas, and shopping experiences.</li>
              <li>To maintain and secure app integrations.</li>
              <li>To respond to user inquiries and contact requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Pinterest and API Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We only access data through authorized methods and the specific permission scopes granted to our app/account.</li>
              <li>We <strong>do not sell</strong> Pinterest user data.</li>
              <li>We do not use Pinterest data for unrelated purposes outside of operating our service and improving the styling experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Data Storage and Security</h2>
            <p>
              Tokens and credentials, if used, are stored securely and are not exposed publicly. 
              Development data may be used internally for testing, quality assurance, and product improvement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Data Sharing</h2>
            <p>
              We do not sell personal data to third parties. We may use trusted service providers 
              (such as hosting providers, email services, and developer tools) to operate our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Data Deletion</h2>
            <p>
              Users can request the deletion of their personal information or integration-related data 
              by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <a href="mailto:hello@styelle.style" className="text-accent hover:underline">hello@styelle.style</a>
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
