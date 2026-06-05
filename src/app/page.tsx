import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <Section bg="gradient" className="pt-32 pb-24 md:pt-48 md:pb-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground">
            Style better together.
          </h1>
          <p className="text-lg md:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
            StyledTogether by Styelle helps people discover coordinated outfit ideas for weddings, vacations, family moments, parties, and everyday plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button href="#what-we-do" size="lg">Explore the vision</Button>
            <Button href="#contact" variant="outline" size="lg">Contact us</Button>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section id="what-we-do">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Curating style for real moments.</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Styelle curates style ideas around real moments, group dynamics, colors, aesthetics, and shopping intent. We believe that discovering what to wear should be inspiring, not overwhelming—especially when coordinating with others.
            </p>
          </div>
          <div className="bg-[#f5f0ed] rounded-3xl aspect-square md:aspect-[4/3] flex items-center justify-center p-2 border border-black/5 overflow-hidden shadow-sm">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image 
                src="/curation.jpg" 
                alt="Style Insight & Curation" 
                fill
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Who it is for */}
      <Section bg="muted">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Who it's for</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">Perfectly coordinated looks for every dynamic and occasion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Couples" description="Complementary outfits for date nights, engagements, and travel." />
          <Card title="Families" description="Cohesive styling for family photos, holidays, and matching moments." />
          <Card title="Wedding Parties" description="Elegant inspiration for bridesmaids, groomsmen, and the whole party." />
          <Card title="Friends & Groups" description="Thematic looks for girls' trips, festivals, and group events." />
          <Card title="Parents & Children" description="Sweet and stylish parent-child matching outfit ideas." />
          <Card title="Event Guests" description="Dress code decoded. Coordinated looks for any invitation." />
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">How it works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-medium mx-auto mb-6">1</div>
            <h3 className="text-xl font-medium">Start with a moment</h3>
            <p className="text-foreground/70">Define the occasion, setting, and the people you are dressing with.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-medium mx-auto mb-6">2</div>
            <h3 className="text-xl font-medium">Discover style directions</h3>
            <p className="text-foreground/70">Explore curated themes, color palettes, and complementary aesthetics.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-medium mx-auto mb-6">3</div>
            <h3 className="text-xl font-medium">Turn inspiration into reality</h3>
            <p className="text-foreground/70">Find actionable outfit ideas and seamless shopping paths.</p>
          </div>
        </div>
      </Section>

      {/* Why StyledTogether */}
      <Section bg="muted" className="text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Why StyledTogether?</h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Coordinated looks. Real occasions. Less decision fatigue. More confidence. 
            Our human-reviewed curation ensures that every style direction feels authentic and achievable.
          </p>
        </div>
      </Section>

      {/* Early Stage Note & Contact */}
      <Section id="contact" bg="gradient">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-black/5">
            <p className="text-foreground/80 font-medium">
              Styelle is currently in early development. We are building a thoughtful fashion discovery experience focused on coordinated styling and real-life moments.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-medium tracking-tight">Get in touch</h2>
            <p className="text-foreground/70">
              For partnership, privacy, and app access questions, please reach out to us.
            </p>
            <a href="mailto:freesiamoss@gmail.com" className="inline-block text-2xl font-medium text-accent hover:opacity-80 transition-opacity">
              freesiamoss@gmail.com
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
