/**
 * Designed placeholder for the future booking calendar.
 * Looks intentional — not a WIP banner.
 */
export function BookingSlot({
  id = "buchen",
  title = "Termin wählen",
  note = "Buchungskalender folgt",
  detail = "Online-Buchung wird in Kürze freigeschaltet. Bis dahin erreichst du uns telefonisch, per WhatsApp oder E-Mail.",
}: {
  id?: string;
  title?: string;
  note?: string;
  detail?: string;
}) {
  return (
    <div
      id={id}
      className="relative overflow-hidden border border-line bg-elev scroll-mt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--t-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--t-ink) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 7) 3.5rem",
          backgroundPosition: "0 5rem",
        }}
      />
      <div className="relative p-5 sm:p-7 md:p-10 lg:p-12">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-md">
            <p className="eyebrow text-accent-text">{title}</p>
            <p className="font-display mt-4 text-[2rem] leading-[1.05] md:text-[2.45rem]">
              {note}
            </p>
            <p className="body-copy mt-5 !max-w-md">{detail}</p>
          </div>
          <div
            aria-hidden
            className="hidden shrink-0 grid-cols-7 gap-1.5 sm:grid"
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className={`h-8 w-8 rounded-[1px] border border-line ${
                  i === 9 || i === 10 ? "border-accent/45 bg-accent/20" : "bg-surface/50"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5 text-[0.78rem] text-muted">
          <span className="eyebrow text-muted">Vorschau</span>
          <span>Kalender · Zeitslots · Bestätigung</span>
          <span className="text-accent-text">Bald verfügbar</span>
        </div>
      </div>
    </div>
  );
}
