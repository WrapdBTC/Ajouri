import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { ChapterIndex } from "@/components/ChapterIndex";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deine Hautreise",
  description:
    "So läuft die Hautreise bei Michelle Ajouri: Behandlungsblöcke in Neuburg, Ersttermin mit OBSERV-Analyse, Hautfotos, Pflegeplan und WhatsApp-Begleitung.",
};

const c = contact.michelle;

const blocks = [
  { label: "Dezember", dates: "15.12. – 19.12. und 28.12. – 30.12.2026" },
  { label: "Februar", dates: "15.02. – 07.03.2027" },
  { label: "April / Mai", dates: "19.04. – 09.05.2027" },
];

const photoSteps: [string, string, string][] = [
  ["1", "Gesicht zum Fenster", "Tageslicht von vorn. Keine Lampe, kein Blitz."],
  ["2", "Frisch & ohne Make-up", "Gesicht waschen, 15 Minuten warten, Haare aus dem Gesicht."],
  ["3", "Handy auf Augenhöhe", "30–40 cm Abstand, kein Weitwinkel, kein Beauty-Modus. Am besten hilft dir jemand."],
  ["4", "Drei Fotos", "Frontal, linke Seite, rechte Seite. Optional eine Nahaufnahme deiner Stelle."],
  ["5", "Deine Produkte", "Alles, was du gerade benutzt, nebeneinander, Etiketten nach vorn."],
  ["6", "Per WhatsApp oder Mail", "In Originalqualität, mit Fragebogen, spätestens 2 Tage vor dem Termin."],
];

const careRules: [string, string][] = [
  ["Du darfst gleich mit allem starten.", "Deine Produkte sind aufeinander abgestimmt. Du musst nichts einschleichen."],
  ["Viele gute Produkte sind kein Problem.", "Was zu deiner Haut passt, darf zusammen in deine Routine. Die Reihenfolge steht in deinem Pflegeplan."],
  ["Kurzes Kribbeln ist normal.", "Säuren, Vitamin C oder Retinol dürfen kurz brennen — das legt sich nach wenigen Minuten."],
  ["Dranbleiben schlägt Perfektion.", "Morgens und abends, jeden Tag. Bei Säuren und Retinol tagsüber an Sonnenschutz denken."],
  ["Schreib mir, wenn …", "das Brennen nicht nachlässt, die Haut stark rot wird, anschwillt, juckt oder Bläschen bildet. Dann lässt du das Produkt weg und wir schauen gemeinsam drauf."],
];

export default function MichelleHautreise() {
  return (
    <>
      <Hero
        size="page"
        layout="split"
        image="/assets/michelle/maske-berry.jpg"
        alt="Beerenfarbene Maske wird auf die Wange aufgetragen"
        position="50% 35%"
        eyebrow="Deine Hautreise · vor Ort & online"
        title={
          <>
            So läuft <em>deine Hautreise.</em>
          </>
        }
        lead="Vom Kennenlern-Call bis zur Re-Analyse: Wir gehen Schritt für Schritt, mit Plan — und du weißt immer, was als Nächstes kommt."
        actions={
          <>
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href="/michelle/leistungen/" variant="outline">
              Pakete &amp; Preise
            </Button>
          </>
        }
      />

      {/* Rhythm + blocks */}
      <section className="section-y-tight">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="I">Mein Rhythmus</Eyebrow>
            <h2 className="display-2 mt-6">
              Alle 9 Wochen <em>3 Wochen Neuburg.</em>
            </h2>
            <p className="lead mt-6">
              Das ist dein Behandlungsblock. Dazwischen bin ich in Kroatien und online für dich da.
            </p>
            <p className="body-copy mt-4">
              Pro Block hast du zwei Termine: in Woche 1 und zwei Wochen später in Woche 3. Startest du mitten in einem Block, zählt dein
              Fahrplan ab deinem ersten Termin — du bekommst trotzdem alle Termine.
            </p>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="eyebrow text-accent-text">Die nächsten Blöcke</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {blocks.map((b) => (
                <li key={b.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                  <span className="font-display text-[1.6rem] leading-tight">{b.label}</span>
                  <span className="tabular-nums text-[0.98rem]">{b.dates}</span>
                </li>
              ))}
            </ul>
            <p className="body-copy mt-4 text-[0.9rem]">Weitere Blöcke bekommst du rechtzeitig von mir.</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-4">
            <div className="md:sticky md:top-28">
              <Eyebrow index="II">Schritt für Schritt</Eyebrow>
              <h2 className="display-2 mt-6">
                Vom ersten Call <em>bis zum Vergleich.</em>
              </h2>
              <div className="ken-wrap relative mt-10 hidden aspect-[3/4] overflow-hidden md:block">
                <Img
                  src="/assets/michelle/pflege-collage.jpg"
                  alt="Collage aus Pflege, Pflanzen und gepflegter Augenpartie"
                  position="50% 50%"
                  className="ken-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <ChapterIndex
            className="md:col-span-7 md:col-start-6"
            chapters={[
              { numeral: "I", title: "Kennenlern-Call", line: "15 bis 30 Minuten über Microsoft Teams. Du erzählst, ich hör zu." },
              { numeral: "II", title: "Fragebogen & Fotos", line: "Am Handy ausfüllen, Hautfotos nach Anleitung — spätestens 2 Tage vor dem Termin." },
              { numeral: "III", title: "SKIN FIRST", line: "OBSERV-Hautanalyse, die passende Behandlung und dein persönlicher Plan für zu Hause." },
              { numeral: "IV", title: "Deine Blöcke", line: "2 Termine pro Block, in Woche 1 und Woche 3 — je 80 Minuten." },
              { numeral: "V", title: "Zwischen den Blöcken", line: "Pflege zu Hause mit deinen Reviderm-Produkten, Video-Check-ins — und ich bin für dich da." },
              { numeral: "VI", title: "Re-Analyse", line: "Wir vergleichen: wo du warst und wo du jetzt bist." },
            ]}
          />
        </div>
      </section>

      {/* Before first appointment */}
      <section className="section-y-tight">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="III"
            eyebrow="Vor deinem ersten Termin"
            title={
              <>
                Gut vorbereitet, <em>ganz entspannt.</em>
              </>
            }
            lead="Den Link für den Kennenlern-Call bekommst du per WhatsApp oder Mail. Fragebogen und Fotos bitte spätestens 2 Tage vorher."
          />
          <ul className="mt-10 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Fragebogen ausgefüllt",
              "Einwilligungen unterschrieben (allgemein, Datenschutz, ggf. Foto)",
              "Hautfotos und Produktfotos geschickt",
              "Am Tag möglichst ohne Make-up kommen",
              "Sag mir, wenn sich etwas verändert hat: Medikamente, Schwangerschaft, Allergien",
            ].map((t) => (
              <li
                key={t}
                className="reveal flex gap-3 border-b border-line py-5 text-[0.95rem] sm:pr-6 lg:border-b-0 lg:border-l lg:px-5 lg:first:border-l-0 lg:first:pl-0"
              >
                <span aria-hidden className="text-accent-text">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo guide */}
      <section className="section-y bg-deep text-deep-ink">
        <div className="container-x">
          <p className="eyebrow text-accent">IV · In 5 Minuten · ohne Filter · mit Tageslicht</p>
          <h2 className="display-2 mt-6">
            So machst du deine <em className="text-accent">Hautfotos.</em>
          </h2>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {photoSteps.map(([n, t, l]) => (
              <li key={n} className="reveal border-t border-white/15 pt-5">
                <span className="font-display text-[2.5rem] leading-none text-accent">{n}</span>
                <h3 className="font-display mt-3 text-[1.5rem] leading-tight">{t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed opacity-80">{l}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-[0.9rem] opacity-70">
            Bitte nicht: Filter · Blitz · Lampenlicht · Make-up · Gegenlicht. Deine Fotos nutze ich
            nur für deine Beratung.
          </p>
        </div>
      </section>

      {/* WhatsApp group */}
      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-start md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="V">Deine WhatsApp-Gruppe</Eyebrow>
            <h2 className="display-2 mt-6">
              3 bis 4 Impulse <em>pro Woche.</em>
            </h2>
            <p className="lead mt-6">
              In deiner Hautreise bin ich auch zwischen den Terminen für dich da. Ich sende, du
              liest, wann es dir passt. Die anderen sehen deine Nummer nicht — Fragen schreibst du mir
              einfach privat.
            </p>
            <p className="body-copy mt-4 text-[0.9rem]">
              Zugang während deiner Hautreise und bis 4 Wochen danach.
            </p>
          </div>
          <ul className="grid gap-0 border-t border-line sm:grid-cols-2 md:col-span-6 md:col-start-7">
            {[
              ["Rezepte", "Einfache Gerichte für Haut und Bauch, passend zur Jahreszeit."],
              ["Übungen & Sport", "Kurze Bewegungseinheiten und Face Yoga."],
              ["Wirkstoffe", "Was Hyaluron, Niacinamid, Vitamin C, Retinol und Co. wirklich machen."],
              ["Anwendungen", "Wie du deine Produkte richtig benutzt."],
            ].map(([t, l]) => (
              <li key={t} className="reveal border-b border-line py-6 sm:pr-6">
                <p className="font-display text-[1.5rem] leading-tight">{t}</p>
                <p className="body-copy mt-1.5 text-[0.95rem]">{l}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Care rules */}
      <section className="section-y-tight bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-4">
            <Eyebrow index="VI">Dein Pflegeplan</Eyebrow>
            <h2 className="display-2 mt-6">
              Meine fünf <em>Pflegeregeln.</em>
            </h2>
            <p className="lead mt-6">
              Den genauen Plan bekommst du nach deinem Ersttermin per Mail — morgens und abends,
              Schritt für Schritt.
            </p>
          </div>
          <ChapterIndex
            className="md:col-span-7 md:col-start-6"
            chapters={careRules.map(([t, l], i) => ({
              numeral: ["I", "II", "III", "IV", "V"][i],
              title: t,
              line: l,
            }))}
          />
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Bereit?</p>
            <p className="display-3 mt-3">Du musst nichts perfekt machen. Du musst nur anfangen.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href={c.whatsappHref} variant="outline">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
