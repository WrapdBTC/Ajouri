import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SmartImg } from "@/components/SmartImg";

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
  { src: "/isabelle/tattoo-botanical.jpg", alt: "Fine-Line Botanical Motiv", label: "Botanical" },
  { src: "/isabelle/tattoo-geometric.jpg", alt: "Geometrische Linework", label: "Geometry" },
  { src: "/isabelle/tattoo-script.jpg", alt: "Script und Flourish", label: "Script" },
  { src: "/isabelle/detail-linework.jpg", alt: "Detail Linework", label: "Detail" },
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
        <section className="relative min-h-[90vh] overflow-hidden">
          <SmartImg
            src="/isabelle/hero.jpg"
            alt="Atelier Isabelle — Fine-Line Atmosphäre"
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-i-bg)] via-[color:var(--color-i-bg)]/35 to-transparent" />
          <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-i-steel)]">
              Atelier Isabelle · Fine-Line Tattoo
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Linien mit Haltung
            </h1>
            <p className="mt-6 max-w-md text-base text-[color:var(--color-i-ink)]/75 md:text-lg leading-relaxed">
              Editorial Tattoos. Präzise, persönlich, reduziert. Ein Studio für
              Motive, die leise sprechen — und lange tragen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#kontakt" tone="isabelle">
                Anfrage
              </Button>
              <Button href="#galerie" tone="isabelle" variant="outline">
                Stil ansehen
              </Button>
            </div>
          </div>
        </section>

        <div
          className="overflow-hidden border-y border-white/10 bg-[color:var(--color-i-surface)] py-3.5"
          aria-hidden
        >
          <div className="flex animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--color-i-steel)]">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-8 px-4">
                <span>Fine-Line</span>
                <span>·</span>
                <span>Botanical</span>
                <span>·</span>
                <span>Geometry</span>
                <span>·</span>
                <span>Script</span>
                <span>·</span>
                <span>Editorial</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>

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
              <SmartImg
                src="/isabelle/studio-mood.jpg"
                alt="Studio-Atmosphäre"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="galerie"
          className="border-y border-white/10 bg-[color:var(--color-i-surface)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-i-accent)]">
                  Portfolio
                </p>
                <h2 className="font-display mt-3 text-3xl md:text-5xl">
                  Stil & Galerie
                </h2>
              </div>
              <p className="max-w-sm text-sm text-[color:var(--color-i-steel)]">
                Linework-Studien und Moodboards — die Sprache des Ateliers.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((g) => (
                <figure
                  key={g.src}
                  className="group relative aspect-[3/4] overflow-hidden"
                >
                  <SmartImg
                    src={g.src}
                    alt={g.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-[0.65rem] uppercase tracking-[0.18em] text-white/80">
                    {g.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

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

        <section
          id="kontakt"
          className="bg-[color:var(--color-i-surface)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-i-accent)]">
              Kontakt
            </p>
            <h2 className="font-display mt-4 text-3xl md:text-5xl">
              Anfrage für dein Motiv
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[color:var(--color-i-steel)] leading-relaxed">
              Schreib kurz zu Motividee, Platzierung und gewünschtem Zeitraum.
              Isabelle meldet sich mit den nächsten freien Möglichkeiten —
              persönlich und ohne Druck.
            </p>
            <p className="mt-8 text-sm text-[color:var(--color-i-steel)]/70">
              Isabelle Ajouri · Atelier Isabelle
              <br />
              <span className="text-[0.65rem] uppercase tracking-wider">
                Termine ausschließlich auf Anfrage
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
                Formular-Versand folgt mit der finalen Studio-Adresse. Bis dahin
                gern über die Familie Ajouri melden.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button href="/" tone="isabelle">
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
