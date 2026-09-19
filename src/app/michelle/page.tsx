import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SmartImg } from "@/components/SmartImg";

export const metadata: Metadata = {
  title: "Michelle Ajouri — Hautexpertin",
  description:
    "Haut von innen nach außen verstehen. OBSERV 320x, Zinzino BalanceTest, Facials & Lash & Brow in Neuburg an der Donau.",
  openGraph: {
    title: "Michelle Ajouri — Hautexpertin",
    description: "Schönheit beginnt mit Verstehen — nicht mit Raten.",
  },
};

const treatments = [
  { title: "Ersttermin", detail: "Hautanalyse + Facial", time: "90 Min.", price: "210 €" },
  { title: "Ersttermin Deluxe", detail: "Hautanalyse + Blutanalyse + Facial", time: "120 Min.", price: "270 €" },
  { title: "Aquafacial", detail: "Tief reinigen, intensiv versorgen", time: "75 Min.", price: "140 €" },
  { title: "Microneedling", detail: "Impulse für Regeneration", time: "75 Min.", price: "200 €" },
  { title: "Power Duo", detail: "Aquafacial + Microneedling", time: "100 Min.", price: "300 €" },
  { title: "Dermaplaning", detail: "Glattere Oberfläche, frisches Hautgefühl", time: "60 Min.", price: "80 €" },
  { title: "Glass Skin", detail: "Intensives Kombi-Treatment", time: "130 Min.", price: "340 €" },
  { title: "ACID Peel", detail: "Professionelles Peeling", time: "60 Min.", price: "100 €" },
];

const pillars = [
  {
    step: "01",
    title: "OBSERV 320x Hautanalyse",
    text: "Fluoreszenz- und Polarisationstechnologie macht sichtbar, was das bloße Auge übersieht — Pigmentierung, Poren, Feuchtigkeit und Schäden unter der Oberfläche.",
    image: "/michelle/analyse-abstract.jpg",
  },
  {
    step: "02",
    title: "Zinzino BalanceTest",
    text: "11 Fettsäuren aus wenigen Tropfen Kapillarblut — laborgeprüft. Erst wenn die Werte klar sind, folgt gezielte Empfehlung. Kein Schema F.",
    image: "/michelle/treatment-detail.jpg",
  },
  {
    step: "03",
    title: "Darmgesundheit & Facials",
    text: "Haut endet nicht an der Oberfläche. Ernährung, Verdauung und Gewohnheiten gehören zum Gesamtbild — ergänzt durch präzise Facials und Lash & Brow.",
    image: "/michelle/lash-mood.jpg",
  },
];

const services = [
  {
    tag: "Kosmetik",
    title: "Hautbehandlungen",
    text: "Aquafacial, Microneedling, Dermaplaning — für frische, verfeinerte Haut.",
    image: "/michelle/kosmetik.jpg",
  },
  {
    tag: "Analyse",
    title: "Verstehen zuerst",
    text: "OBSERV 320x und BalanceTest: sehen, was unter der Oberfläche liegt.",
    image: "/michelle/studio.jpg",
  },
  {
    tag: "Lash & Brow",
    title: "Wimpern & Brauen",
    text: "Präzise Liftings für Ausdruck — natürlich und definiert.",
    image: "/michelle/lash-mood.jpg",
  },
];

export default function MichellePage() {
  return (
    <div className="flex min-h-full flex-col bg-[color:var(--color-m-bg)] text-[color:var(--color-m-ink)]">
      <Nav theme="michelle" />
      <main className="flex-1">
        <section className="relative min-h-[82vh] overflow-hidden">
          <SmartImg
            src="/michelle/hero-atmosphere.jpg"
            alt="Glamour Treatments Studioatmosphäre"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-m-bg)]/88 via-[color:var(--color-m-bg)]/45 to-transparent" />
          <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-end gap-10 px-5 pb-16 pt-28 md:grid-cols-2 md:px-8 md:pb-24">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--color-m-accent-deep)]">
                Hautexpertin · Neuburg an der Donau
              </p>
              <h1 className="font-display mt-4 max-w-xl text-5xl leading-[1.05] md:text-7xl">
                Deine Haut von innen nach außen verstehen
              </h1>
              <p className="mt-6 max-w-lg text-base text-[color:var(--color-m-ink)]/75 md:text-lg leading-relaxed">
                Ein Raum, in dem deine Haut zuerst verstanden wird — mit präziser
                Analyse, ehrlicher Beratung und einem Konzept, das wirklich zu dir
                passt.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="mailto:info@michelleajouri.de" tone="michelle">
                  Termin anfragen
                </Button>
                <Button href="#angebote" tone="michelle" variant="outline">
                  Angebote
                </Button>
              </div>
              <a
                href="tel:+4915775056789"
                className="mt-5 inline-block text-sm text-[color:var(--color-m-accent-deep)] hover:underline"
              >
                oder anrufen: +49 1577 5056789
              </a>
            </div>
            <div className="relative hidden aspect-[4/5] overflow-hidden shadow-2xl shadow-[color:var(--color-m-ink)]/15 md:block">
              <SmartImg
                src="/michelle/portrait-mood.jpg"
                alt="Michelle Ajouri"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--color-m-ink)]/70 to-transparent p-6 text-white">
                <strong className="font-display text-lg">
                  Jede Haut erzählt ihre eigene Geschichte.
                </strong>
                <p className="mt-1 text-sm text-white/80">
                  Zuhören. Analysieren. Individuell behandeln.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="overflow-hidden border-y border-[color:var(--color-m-accent)]/20 bg-[color:var(--color-m-surface)] py-3.5"
          aria-hidden
        >
          <div className="flex animate-[marquee_32s_linear_infinite] gap-8 whitespace-nowrap text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--color-m-accent-deep)]">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-8 px-4">
                <span>Aquafacial</span>
                <span>·</span>
                <span>Microneedling</span>
                <span>·</span>
                <span>OBSERV 320x</span>
                <span>·</span>
                <span>Zinzino BalanceTest</span>
                <span>·</span>
                <span>Lash Lift</span>
                <span>·</span>
                <span>Brow Lift</span>
                <span>·</span>
                <span>Dermaplaning</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[3/4] overflow-hidden md:hidden">
              <SmartImg
                src="/michelle/portrait-mood.jpg"
                alt="Michelle Ajouri"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative hidden aspect-[4/5] overflow-hidden md:block">
              <SmartImg
                src="/michelle/studio.jpg"
                alt="Studio Glamour Treatments"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-m-accent-deep)]">
                Haltung
              </p>
              <h2 className="font-display mt-4 text-3xl md:text-5xl text-balance">
                Schönheit beginnt mit Verstehen — nicht mit Raten.
              </h2>
              <p className="mt-6 text-[color:var(--color-m-ink)]/75 leading-relaxed">
                Beauty ist für Michelle immer auch Gesundheit. Deshalb beginnt der
                Ansatz nicht mit einem Standard-Treatment, sondern mit genauem
                Hinschauen, ehrlicher Beratung und einem Konzept, das zu deinem
                aktuellen Hautbild und deinem Alltag passt.
              </p>
              <p className="mt-4 font-display text-xl italic text-[color:var(--color-m-accent-deep)]">
                „Deine Haut zeigt, was dein Blut erzählt — ich helfe dir, beides
                zu lesen.“
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-m-surface)] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-m-accent-deep)]">
                  Signature
                </p>
                <h2 className="font-display mt-3 text-3xl md:text-5xl">
                  Alles für deinen Glamour
                </h2>
              </div>
              <p className="max-w-sm text-sm text-[color:var(--color-m-ink)]/65">
                Haut, Analyse und Lash &amp; Brow — drei Bereiche, ein durchdachtes
                Konzept.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="group overflow-hidden bg-[color:var(--color-m-bg)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <SmartImg
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-m-accent-deep)]">
                      {s.tag}
                    </span>
                    <h3 className="font-display mt-2 text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--color-m-ink)]/65">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl md:text-5xl">
              Außen sehen. Innen mitdenken. Gezielt behandeln.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {pillars.map((p) => (
                <article key={p.step} className="group">
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden">
                    <SmartImg
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="text-[0.65rem] tracking-[0.2em] text-[color:var(--color-m-accent-deep)]">
                    Schritt {p.step}
                  </p>
                  <h3 className="font-display mt-2 text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-m-ink)]/70">
                    {p.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="angebote" className="bg-[color:var(--color-m-surface)] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-3xl md:text-5xl">
                Ausgewählte Hautbehandlungen
              </h2>
              <p className="max-w-sm text-sm text-[color:var(--color-m-ink)]/65">
                Orientierungspreise — der genaue Plan entsteht nach Analyse und
                Gespräch.
              </p>
            </div>
            <ul className="mt-12 divide-y divide-[color:var(--color-m-accent)]/25 border-y border-[color:var(--color-m-accent)]/25">
              {treatments.map((t) => (
                <li
                  key={t.title}
                  className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <div>
                    <h3 className="font-medium tracking-wide">{t.title}</h3>
                    <p className="text-sm text-[color:var(--color-m-ink)]/60">{t.detail}</p>
                  </div>
                  <div className="flex gap-6 text-sm tabular-nums text-[color:var(--color-m-accent-deep)]">
                    <span>{t.time}</span>
                    <span className="font-medium">{t.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-3xl md:text-4xl">
              So beginnt deine Hautreise
            </h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {[
                ["Kennenlernen", "Hautgefühl, Routine, Wünsche."],
                ["Analysieren", "Hautbild präzise ansehen, innere Faktoren ergänzen."],
                ["Planen", "Empfehlungen — priorisiert statt überladen."],
                ["Begleiten", "Veränderungen dokumentieren und anpassen."],
              ].map(([title, text], i) => (
                <li key={title}>
                  <span className="font-display text-4xl text-[color:var(--color-m-accent)]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-m-ink)]/65">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="kontakt" className="bg-[color:var(--color-m-surface)] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl">
                Bereit, deine Haut neu kennenzulernen?
              </h2>
              <p className="mt-5 max-w-lg text-[color:var(--color-m-ink)]/70">
                Erst verstehen, dann gezielt behandeln — in Ruhe und ohne
                Verkaufsdruck.
              </p>
              <address className="mt-8 not-italic text-sm leading-relaxed">
                Franz-Hoffmann-Straße 29
                <br />
                86633 Neuburg an der Donau
                <br />
                <a className="mt-3 inline-block hover:underline" href="tel:+4915775056789">
                  +49 1577 5056789
                </a>
                <br />
                <a className="hover:underline" href="mailto:info@michelleajouri.de">
                  info@michelleajouri.de
                </a>
              </address>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="mailto:info@michelleajouri.de" tone="michelle">
                  Termin anfragen
                </Button>
                <Button href="tel:+4915775056789" tone="michelle" variant="outline">
                  Anrufen
                </Button>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <SmartImg
                src="/michelle/treatment-detail.jpg"
                alt="Treatment-Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer theme="michelle" />
    </div>
  );
}
