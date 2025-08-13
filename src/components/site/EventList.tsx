export type EventItem = {
  name: string;
  date: string; // ISO date
  location: string;
  city: string;
  tags?: string[];
};

const events: EventItem[] = [
  {
    name: "Cleveland Art Show Performance",
    date: "2025-09-13",
    location: "Cleveland Museum of Art",
    city: "Cleveland, OH",
    tags: ["Bollywood", "Folk"],
  },
  {
    name: "Detroit Diwali Festival",
    date: "2025-10-26",
    location: "Hart Plaza",
    city: "Detroit, MI",
    tags: ["Kathak", "Bollywood"],
  },
  {
    name: "University of Toledo Cultural Night",
    date: "2025-11-08",
    location: "Student Union Auditorium",
    city: "Toledo, OH",
    tags: ["Fusion", "Workshop"],
  },
];

const EventList = () => {
  return (
    <section id="events" className="py-16">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Upcoming Performances</h2>
          <p className="mt-2 text-muted-foreground">Catch us live at festivals, galas, and community celebrations.</p>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((e) => {
            const date = new Date(e.date);
            const dateLabel = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
            return (
              <li key={e.name} className="rounded-lg border p-5 shadow-elevate">
                <div className="text-sm text-muted-foreground">{dateLabel}</div>
                <h3 className="mt-1 font-semibold">{e.name}</h3>
                <p className="text-sm">{e.location} — {e.city}</p>
                {e.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.tags.map(t => (
                      <span key={t} className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default EventList;