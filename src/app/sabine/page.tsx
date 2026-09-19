import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

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
        {/* Hero */}
        <section className="relative min-h-[82vh] overflow-hidden">
          <Image
            src="/sabine/startseite.jpg"
            alt="Vita Sonus Atmosphäre"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-s-bg)] via-[color:var(--color-s-bg)]/55 to-[color:var(--color-s-bg)]/30" />
          <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-s-accent)]">
              Vita Sonus · Klang & Meditation
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Ruhe gegen den lauten Alltag
            </h1>
            <p className="mt-6 max-w-lg text-base text-[color:var(--color-s-ink)]/80 md:text-lg">
              Meditation, Klangreise und Klangmassage — ein Ort, an dem du
              ankommen darfst. Ohne Spektakel. Mit Tiefe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="https://vitasonus.de/" tone="sabine" external>
                vitasonus.de
              </Button>
              <Button
                href="mailto:info@vitasonus.de"
                tone="sabine"
                variant="outline"
              >
                Kontakt
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/sabine/sabine-portrait.jpg"
                alt="Sabine Ajouri"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 45vw"
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

        {/* Offerings */}
        <section className="bg-[color:var(--color-s-surface)] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl md:text-5xl">
              Angebote mit Resonanz
            </h2>
            <p className="mt-4 max-w-2xl text-[color:var(--color-s-ink)]/65">
              Kurse und Einheiten für Einsteiger und Vertiefung — im Studio und
              in der Natur.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {offerings.map((o) => (
                <article
                  key={o.title}
                  className="group overflow-hidden bg-[color:var(--color-s-bg)]/60"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={o.image}
                      alt={o.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-s-bg)]/90 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-display text-2xl">{o.title}</h3>
                      <p className="mt-2 text-sm text-[color:var(--color-s-ink)]/75">
                        {o.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Open studio + atmosphere */}
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
                <Button href="https://vitasonus.de/" tone="sabine" external>
                  Termin buchen
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/sabine/startseite-ladenansicht.jpg"
                alt="Studio Vita Sonus"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Gold accent band */}
        <section className="relative overflow-hidden px-5 py-24 md:px-8">
          <Image
            src="/sabine/klang-atmosphere.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[color:var(--color-s-bg)]/70" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="font-display text-3xl text-[color:var(--color-s-accent-soft)] md:text-4xl text-balance">
              Wenn der Alltag zu laut wird, reicht manchmal ein Ton.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="px-5 py-20 md:px-8 md:py-28">
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
                <a className="hover:text-[color:var(--color-s-accent)]" href="tel:+4916099300610">
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
                <Button href="https://vitasonus.de/" tone="sabine" external>
                  Zur Vita-Sonus-Website
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
