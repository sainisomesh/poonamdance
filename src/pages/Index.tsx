import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Gallery from "@/components/site/Gallery";
import EventList from "@/components/site/EventList";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'PerformingGroup',
    name: 'Poonam Dance',
    areaServed: 'Midwest, USA',
    address: { '@type': 'PostalAddress', addressLocality: 'Toledo', addressRegion: 'OH', addressCountry: 'US' },
    email: 'mailto:poonamdance@gmail.com',
    url: 'https://poonamdance.lovable.app/'
  };

  const events = [
    { name: 'Cleveland Art Show Performance', startDate: '2025-09-13', location: 'Cleveland Museum of Art, Cleveland, OH' },
    { name: 'Detroit Diwali Festival', startDate: '2025-10-26', location: 'Hart Plaza, Detroit, MI' },
    { name: 'University of Toledo Cultural Night', startDate: '2025-11-08', location: 'Toledo, OH' },
  ].map(e => ({ '@type': 'Event', name: e.name, startDate: e.startDate, location: { '@type': 'Place', name: e.location } }));

  const eventSchema = { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: events };

  return (
    <div>
      <Nav />
      <main>
        <Hero />

        <section id="about" className="py-16">
          <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold">About Poonam Dance</h2>
              <p className="mt-4 text-muted-foreground">
                Poonam Dance is a community-rooted troupe led by Poonam Saini. We bring the joy of Indian dance to
                stages across the Midwest — celebrating rhythm, color, and storytelling through Bollywood, classical Kathak,
                and Rajasthani folk traditions. From festivals and weddings to school assemblies and workshops, we tailor
                performances to every audience.
              </p>
              <div className="mt-6">
                <Button variant="hero" asChild>
                  <a href="mailto:poonamdance@gmail.com">Inquire about booking</a>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="/lovable-uploads/11885507-34a4-484d-84a8-bf3f9c5a1e95.png" alt="Poonam Saini smiling in traditional attire" className="w-full rounded-lg border shadow-elevate" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="styles" className="py-16 bg-gradient-subtle">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">Styles We Perform</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <article className="rounded-lg border p-6 shadow-elevate">
                <h3 className="font-semibold">Bollywood</h3>
                <p className="mt-2 text-sm text-muted-foreground">High-energy choreography, cinematic flair, and crowd engagement.</p>
              </article>
              <article className="rounded-lg border p-6 shadow-elevate">
                <h3 className="font-semibold">Kathak</h3>
                <p className="mt-2 text-sm text-muted-foreground">Classical grace, intricate footwork, and expressive storytelling.</p>
              </article>
              <article className="rounded-lg border p-6 shadow-elevate">
                <h3 className="font-semibold">Rajasthani Folk</h3>
                <p className="mt-2 text-sm text-muted-foreground">Spinning skirts, colorful textiles, and joyful traditional rhythms.</p>
              </article>
            </div>
          </div>
        </section>

        <Gallery />
        <EventList />
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </div>
  );
};

export default Index;