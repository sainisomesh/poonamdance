const Instructors = () => {
  return (
    <section id="instructors" className="py-16">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
        <figure className="overflow-hidden rounded-xl border shadow-elevate animate-fade-in">
          <img
            src="/lovable-uploads/c5eaeaf9-c469-40ff-a086-10cc86886c60.png"
            alt="Lead instructors of Poonam Dance posing together in colorful attire"
            loading="lazy"
            className="w-full h-full object-cover hover-scale"
          />
        </figure>
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Lead Instructors</h2>
          <p className="mt-4 text-muted-foreground">
            Meet Poonam, Ananya, And Laya — From Different Backgrounds, Each Leads Independent Sessions To
            Support Your Dance Journey And Growth.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="rounded-md border p-3 bg-background shadow-sm">Show choreography & creative direction</li>
            <li className="rounded-md border p-3 bg-background shadow-sm">Children and adult workshops</li>
            <li className="rounded-md border p-3 bg-background shadow-sm">Community and cultural events</li>
            <li className="rounded-md border p-3 bg-background shadow-sm">Wedding sangeet performances</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Instructors;