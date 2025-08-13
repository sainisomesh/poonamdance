type GalleryItem = { src: string; alt: string };

const defaultImages: GalleryItem[] = [
  { src: "/lovable-uploads/11885507-34a4-484d-84a8-bf3f9c5a1e95.png", alt: "Poonam Saini in vibrant Rajasthani attire" },
  { src: "/lovable-uploads/d2b600e5-a152-4512-b3c1-8448e6a2f47e.png", alt: "Poonam Dance troupe in colorful ghagras performing" },
  { src: "/lovable-uploads/204c1f4a-28b7-4aaa-96c8-d3fcd9c96939.png", alt: "Young dancers in yellow and red lehengas" },
  { src: "/lovable-uploads/c5eaeaf9-c469-40ff-a086-10cc86886c60.png", alt: "Lead instructors of Poonam Dance together outdoors" },
  { src: "/lovable-uploads/3aeba9b1-049d-4313-849b-ca347cd793d5.png", alt: "Dancer twirling in orange Rajasthani attire" },
];

const Gallery = () => {
  // If a manifest exists in /gallery/manifest.json, try to load it for more images.
  // Otherwise fallback to bundled images above.
  // Note: public/gallery/manifest.json can contain: [{\\\"src\\\":\\\"/gallery/img1.jpg\\\",\\\"alt\\\":\\\"...\\\"}, ...]
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Gallery</h2>
          <p className="mt-2 text-muted-foreground">Moments from festivals, weddings, and community events.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {defaultImages.map((img, idx) => (
            <figure key={idx} className="overflow-hidden rounded-lg border shadow-elevate">
              <img src={img.src} alt={img.alt} loading="lazy" className="h-64 w-full object-cover transition-transform duration-300 hover:scale-[1.03]" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
