import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero animate-gradient opacity-20" aria-hidden="true" />
      <div className="container mx-auto grid min-h-[70vh] place-items-center py-16">
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight">
            Poonam Dance
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Vibrant Indian dance performances and workshops across the Midwest.
            Led by Poonam Saini in Toledo, Ohio — Bollywood, Kathak, and Rajasthani folk.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:poonamdance@gmail.com">Book Us</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#gallery">View Gallery</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;