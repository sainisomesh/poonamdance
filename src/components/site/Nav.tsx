const Nav = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-extrabold tracking-tight">
          Poonam Dance
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm hover:text-primary">About</a>
          <a href="#styles" className="text-sm hover:text-primary">Styles</a>
          <a href="#gallery" className="text-sm hover:text-primary">Gallery</a>
          <a href="#events" className="text-sm hover:text-primary">Events</a>
          <a href="#contact" className="text-sm hover:text-primary">Contact</a>
        </div>
        <a href="mailto:poonamdance@gmail.com" aria-label="Email Poonam Dance" className="inline-flex">
          <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-hero text-primary-foreground shadow-glow hover:brightness-110 h-9 px-4">
            Book a Performance
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Nav;