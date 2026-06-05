import Section from "../../components/Section";

export const metadata = {
  title: "Terms of Service | Styelle",
};

export default function TermsOfService() {
  return (
    <Section className="py-24">
      <div className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-4xl font-medium mb-8">Terms of Service</h1>
        <p className="text-foreground/60 mb-12">Last Updated: June 5, 2026</p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Informational Use</h2>
            <p>
              The content provided on Styelle / StyledTogether is for informational and inspirational purposes. 
              We curate style ideas around real moments to help users discover coordinated outfits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Early-Stage Product</h2>
            <p>
              Styelle is currently in early development. The website, features, and curated content are subject to change without notice. 
              We make no guarantees regarding the continuous availability or accuracy of the service during this phase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Affiliate Disclosure</h2>
            <p>
              Some of the links on our website may be affiliate links. This means that if you click on the link and purchase an item, 
              we may receive an affiliate commission at no extra cost to you. We only recommend products or services that align with our brand 
              and styling vision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at:<br />
              <a href="mailto:hello@styelle.style" className="text-accent hover:underline">hello@styelle.style</a>
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
