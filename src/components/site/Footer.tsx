const Footer = () => {
  return (
    <footer id="contact" className="mt-16 border-t bg-background">
      <div className="container mx-auto py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold">Poonam Dance</h3>
            <p className="mt-2 text-sm text-muted-foreground">Toledo, Ohio • Performing across the Midwest</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-sm"><a href="mailto:poonamdance@gmail.com" className="text-primary underline-offset-4 hover:underline">poonamdance@gmail.com</a></p>
          </div>
          <div>
            <h4 className="font-semibold">Follow</h4>
            <p className="mt-2 text-sm text-muted-foreground">Instagram & Facebook coming soon.</p>
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">© {new Date().getFullYear()} Poonam Dance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;