import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Isabelle Ajouri — Atelier Isabelle",
  description:
    "Fine-Line und editorial Tattoos. Präzise Linien, persönliche Motive, ruhige Studio-Atmosphäre.",
  openGraph: {
    title: "Atelier Isabelle · Fine-Line Tattoo",
    description: "Linien mit Haltung.",
  },
};

const gallery = [
  {
    src: "/isabelle/tattoo-botanical.jpg",
    alt: "Fine-Line Botanical Motiv",
    label: "Botanical",
  },
  {
    src: "/isabelle/tattoo-geometric.jpg",
    alt: "Geometrische Linework",
    label: "Geometry",
  },
  {
    src: "/isabelle/tattoo-script.jpg",
    alt: "Script und Flourish",
    label: "Script",
  },
  {
    src: "/isabelle/detail-linework.jpg",
    alt: "Detail Linework",
    label: "Detail",
  },
];

const process = [
  {
    n: "01",
    title: "Beratung",
    text: "Gespräch über Motiv, Platzierung, Größe und Haltung. Ohne Druck — mit Klarheit.",
  },
  {
    n: "02",
    title: "Entwurf",
    text: "Individuelle Zeichnung. Fein abgestimmt, bis die Linie stimmt.",
  },
  {
    n: "03",
    title: "Session",
    text: "Ruhiges Studio, präzise Arbeit, Zeit für Pausen. Qualität vor Tempo.",
  },
  {
    n: "04",
    title: "Aftercare",
    text: "Klare Pflegeanleitung und Nachsorge — damit die Linie hält, was sie verspricht.",
  },
];

export default function IsabellePage() {
  return (
    <div className="flex min-h-full flex-col bg-[color:var(--color-i-bg)] text-[color:var(--color-i-ink)]">
      <Nav theme="isabelle" />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <Image
            src="/isabelle/hero.jpg"
            alt="Atelier Isabelle — Fine-Line Atmosphäre"
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-i-bg)] via-[color:var(--color-i-bg)]/40 to-transparent" />
          <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-i-steel)]">
              Atelier Isabelle · Fine-Line Tattoo
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Linien mit Haltung
            </h1>
            <p className="mt-6 max-w-md text-base text-[color:var(--color-i-ink)]/70 md:text-lg">
              Editorial Tattoos. Präzise, persönlich, reduziert. Ein Studio für
              Motive, die leise sprechen — und lange tragen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#kontakt" tone="isabelle">
                Termin anfragen
              </Button>
              <Button href="#galerie" tone="isabelle" variant="outline">
                Stil ansehen
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-i-accent)]">
                Über das Atelier
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl">
                Weniger Spektakel. Mehr Präzision.
              </h2>
              <p className="mt-6 leading-relaxed text-[color:var(--color-i-steel)]">
                Isabelle Ajouri arbeitet mit Fine-Line und editorialer Ästhetik:
                botanische Motive, geometrische Kompositionen, Schriftzüge mit
                Charakter. Jedes Stück entsteht im Dialog — nicht aus dem
                Katalog.
              </p>
              <p className="mt-4 leading-relaxed text-[color:var(--color-i-steel)]">
                Das Studio ist bewusst ruhig gehalten. Graphit, Licht, klare
                Linien. Ein Ort, an dem man sich Zeit nimmt.
              </p>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden bg-[color:var(--color-i-surface)]">
              <Image
                src="/isabelle/studio-mood.jpg"
                alt="Studio-Atmosphäre"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          id="galerie"
          className="border-y border-white/10 bg-[color:var(--color-i-surface)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="font-display text-3xl md:text-5xl">Stil & Galerie</h2>
              <p className="max-w-sm text-sm text-[color:var(--color-i-steel)]">
                Moodboards und Linework-Studien — beispielhafte Visuals für den
                Atelier-Charakter.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((g) => (
                <figure key={g.src} className="group relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-[0.65rem] uppercase tracking-[0.18em] text-white/80">
                    {g.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl md:text-5xl">Der Prozess</h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-4">
              {process.map((p) => (
                <li key={p.n} className="border-t border-white/15 pt-6">
                  <span className="text-[0.7rem] tracking-[0.2em] text-[color:var(--color-i-accent)]">
                    {p.n}
                  </span>
                  <h3 className="font-display mt-3 text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-i-steel)]">
                    {p.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact — no invented phones */}
        <section
          id="kontakt"
          className="bg-[color:var(--color-i-surface)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-i-accent)]">
              Kontakt
            </p>
            <h2 className="font-display mt-4 text-3xl md:text-5xl">
              Termine auf Anfrage
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[color:var(--color-i-steel)]">
              Schreibe kurz zu Motividee und gewünschtem Zeitraum. Isabelle
              meldet sich mit den nächsten freien Möglichkeiten.
            </p>
            <p className="mt-8 text-sm text-[color:var(--color-i-steel)]/70">
              Isabelle Ajouri · Atelier Isabelle
              <br />
              <span className="text-[0.65rem] uppercase tracking-wider">
                Keine Telefonnummer hinterlegt — Anfrage über Formular
              </span>
            </p>
            <div className="mx-auto mt-10 max-w-md space-y-4 text-left">
              <label className="block text-[0.65rem] uppercase tracking-[0.16em] text-[color:var(--color-i-steel)]">
                Name
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-[color:var(--color-i-ink)] outline-none focus:border-[color:var(--color-i-steel)]"
                  placeholder="Dein Name"
                />
              </label>
              <label className="block text-[0.65rem] uppercase tracking-[0.16em] text-[color:var(--color-i-steel)]">
                E-Mail
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-[color:var(--color-i-ink)] outline-none focus:border-[color:var(--color-i-steel)]"
                  placeholder="name@example.com"
                />
              </label>
              <label className="block text-[0.65rem] uppercase tracking-[0.16em] text-[color:var(--color-i-steel)]">
                Motividee
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-y border border-white/15 bg-transparent px-4 py-3 text-sm text-[color:var(--color-i-ink)] outline-none focus:border-[color:var(--color-i-steel)]"
                  placeholder="Kurz beschreiben …"
                />
              </label>
              <p className="text-[0.65rem] text-[color:var(--color-i-steel)]/60">
                Platzhalter-Formular — Versand folgt mit der finalen
                Studio-Adresse.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 bg-[color:var(--color-i-ink)]/15 px-6 py-3 text-xs uppercase tracking-[0.14em] text-[color:var(--color-i-steel)]">
                  Bald verfügbar
                </span>
                <Button href="/" tone="isabelle" variant="ghost">
                  Zurück zum Hub
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="isabelle" />
    </div>
  );
}
