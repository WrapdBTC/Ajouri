import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SmartImg } from "@/components/SmartImg";

export const metadata: Metadata = {
  title: "Sabine Ajouri — Vita Sonus",
  description:
    "Meditation, Klangreise und Klangmassage in Neuburg. Vita Sonus — Ruhe gegen den lauten Alltag.",
  openGraph: {
    title: "Vita Sonus · Sabine Ajouri",
    description: "Klang, Meditation, Auszeit.",
  },
};

const offerings = [
  {
    title: "Klangmassage",
    text: "Peter-Hess-Methode: Klangschalen auf dem Körper — Vibration, die den Alltag weich werden lässt.",
    image: "/sabine/klangmassage.webp",
  },
  {
    title: "Klangreise",
    text: "Geführte Reise mit Klang und Stimme. Raum für innere Bilder, Loslassen und Ankommen.",
    image: "/sabine/klangreise.webp",
  },
  {
    title: "Meditation",
    text: "Vom Einstieg bis zur Vertiefung — Achtsamkeit, Stille und Mantren ohne esoterischen Ballast.",
    image: "/sabine/meditation.webp",
  },
  {
    title: "Waldmeditation",
    text: "Draußen atmen. Die Natur als Resonanzraum — geerdet, klar, lebendig.",
    image: "/sabine/waldmeditation.webp",
  },
];

export default function SabinePage() {
  return (
    <div className="grain grain-dark flex min-h-full flex-col bg-[color:var(--color-s-bg)] text-[color:var(--color-s-ink)]">
      <Nav theme="sabine" />
      <main className="relative flex-1">
        <section className="relative min-h-[88vh] overflow-hidden">
          <SmartImg
            src="/sabine/startseite.jpg"
            alt="Klangschalen im Vita Sonus Studio"
            fill
            priority
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-s-bg)] via-[color:var(--color-s-bg)]/40 to-[color:var(--color-s-bg)]/20" />
          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-s-accent)]">
              Vita Sonus · Klang & Meditation
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Finde deine{" "}
              <span className="italic text-[color:var(--color-s-accent-soft)]">
                innere Ruhe
              </span>{" "}
              zwischen Klang und Stille
            </h1>
            <p className="mt-6 max-w-lg text-base text-[color:var(--color-s-ink)]/85 md:text-lg leading-relaxed">
              Meditation, Klangreise und Klangmassage — ein geschützter Raum, um
              durchzuatmen und bei dir anzukommen. Ohne Spektakel. Mit Tiefe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="mailto:info@vitasonus.de" tone="sabine">
                Termin anfragen
              </Button>
              <Button href="#angebote" tone="sabine" variant="outline">
                Angebote
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-[color:var(--color-s-accent-soft)]/90">
              <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--color-s-accent)]" />
              Freitag 16:30–18:00 · Offenes Studio — kein Termin nötig
            </p>
          </div>
        </section>

        <div
          className="overflow-hidden border-y border-white/10 bg-[color:var(--color-s-surface)] py-3.5"
          aria-hidden
        >
          <div className="flex animate-[marquee_30s_linear_infinite] gap-8 whitespace-nowrap text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--color-s-accent-soft)]/80">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-8 px-4">
                <span>Meditation</span>
                <span>·</span>
                <span>Klangreise</span>
                <span>·</span>
                <span>Klangmassage</span>
                <span>·</span>
                <span>Achtsamkeit</span>
                <span>·</span>
                <span>Innere Ruhe</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>

        <section className="px-5 py-16 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-4xl text-[color:var(--color-s-accent)] leading-none">
              ”
            </p>
            <blockquote className="font-display mt-2 text-2xl text-[color:var(--color-s-accent-soft)] md:text-3xl text-balance leading-snug">
              Achte einfach auf den jetzigen Moment, ohne zu versuchen, ihn zu
              verändern.
            </blockquote>
            <cite className="mt-5 block text-sm not-italic text-[color:var(--color-s-ink)]/50">
              Jon Kabat-Zinn
            </cite>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden">
              <SmartImg
                src="/sabine/sabine-portrait.jpg"
                alt="Sabine Ajouri"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-s-accent)]">
                Über Sabine
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl">
                Aus Stärke, Erdung und Liebe gewachsen
              </h2>
              <p className="mt-6 leading-relaxed text-[color:var(--color-s-ink)]/75">
                Sabine Ajouri ist Ehefrau, Mutter und Suchtberaterin — und seit
                vielen Jahren der Stille verbunden. Was als Traum begann, ist
                heute Vita Sonus: ein Studio für Klang, Meditation und bewusste
                Auszeit.
              </p>
              <p className="mt-4 leading-relaxed text-[color:var(--color-s-ink)]/75">
                Ausgebildet u. a. in der Peter-Hess-Klangmassage, Fantasiereisen
                und als Meditationsleiterin gibt sie Wissen weiter, das hält —
                klar, warm, ohne Pathos.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-[color:var(--color-s-accent-soft)]/90">
                <li>Klangmassage I–IV · Peter Hess</li>
                <li>Fantasiereisen & Entspannungstrainer</li>
                <li>Meditationsleiterin · 5 Elemente</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="angebote"
          className="bg-[color:var(--color-s-surface)] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-s-accent)]">
              Angebote
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">
              Wege zur inneren Mitte
            </h2>
            <p className="mt-4 max-w-2xl text-[color:var(--color-s-ink)]/65">
              Kurse und Einheiten für Einsteiger und Vertiefung — im Studio und
              in der Natur. Vorerfahrung brauchst du nicht.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {offerings.map((o) => (
                <article
                  key={o.title}
                  className="group overflow-hidden bg-[color:var(--color-s-bg)]/60"
                >
                  <div className="relative aspect-[16/10]">
                    <SmartImg
                      src={o.image}
                      alt={o.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-s-bg)]/85 via-[color:var(--color-s-bg)]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-display text-2xl">{o.title}</h3>
                      <p className="mt-2 text-sm text-[color:var(--color-s-ink)]/80">
                        {o.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-s-accent)]">
                Offenes Studio
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl">
                Freitag 16:30–18:00
              </h2>
              <p className="mt-6 leading-relaxed text-[color:var(--color-s-ink)]/75">
                Komm vorbei, wenn der Wunsch nach Stille größer ist als der
                Terminplan. Im offenen Studio findest du Raum zum Ankommen —
                unverbindlich, herzlich, in deinem Tempo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="tel:+4916099300610" tone="sabine">
                  Anrufen
                </Button>
                <Button href="mailto:info@vitasonus.de" tone="sabine" variant="outline">
                  Schreiben
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <SmartImg
                src="/sabine/startseite-ladenansicht.jpg"
                alt="Studio Vita Sonus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-24 md:px-8">
          <SmartImg
            src="/sabine/klang-atmosphere.jpg"
            alt=""
            fill
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-[color:var(--color-s-bg)]/55" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl text-[color:var(--color-s-accent-soft)] md:text-4xl text-balance">
              Wenn der Alltag zu laut wird, reicht manchmal ein Ton.
            </p>
          </div>
        </section>

        <section id="kontakt" className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl md:text-5xl">Kontakt</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <address className="not-italic leading-relaxed text-[color:var(--color-s-ink)]/80">
                <strong className="text-[color:var(--color-s-accent-soft)]">
                  Vita Sonus · Sabine Ajouri
                </strong>
                <br />
                Amalienstraße 60
                <br />
                86633 Neuburg an der Donau
                <br />
                <br />
                <a
                  className="hover:text-[color:var(--color-s-accent)]"
                  href="tel:+4916099300610"
                >
                  0160 99 300 610
                </a>
                <br />
                <a
                  className="hover:text-[color:var(--color-s-accent)]"
                  href="mailto:info@vitasonus.de"
                >
                  info@vitasonus.de
                </a>
              </address>
              <div className="flex flex-col justify-center gap-4">
                <Button href="mailto:info@vitasonus.de" tone="sabine">
                  Termin anfragen
                </Button>
                <p className="text-sm text-[color:var(--color-s-ink)]/50">
                  Mitglied im Internationalen Fachverband Klang-Massage-Therapie
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="sabine" />
    </div>
  );
}
