import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro } from "@/components/SectionIntro";
import { contact, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Angebote — Klangreise, Massage, Meditation",
  description:
    "Klangreise, Klangmassage, Meditation und Regulationsabend bei Vita Sonus — Sabine Ajouri in Neuburg.",
};

const c = contact.sabine;

const offerings = [
  {
    name: "Klangreise",
    detail:
      "Eine geführte Reise mit Klangschalen, Stimme und Stille. Der Körper darf loslassen, der Geist zur Ruhe kommen.",
    time: "60–90 Min.",
  },
  {
    name: "Klangmassage",
    detail:
      "Klangschalen auf und um den Körper — Vibration, Wärme und Resonanz, die tief in Gewebe und Nervensystem wirken.",
    time: "45–60 Min.",
  },
  {
    name: "Meditation",
    detail:
      "Achtsamkeitsübungen in kleinen Gruppen oder einzeln. Klar, alltagsnah und ohne Esoterik-Ballast.",
    time: "nach Absprache",
  },
  {
    name: "Regulationsabend",
    detail:
      "Ein Abend für das Nervensystem: Klang, Atem und Stille — gemeinsam ankommen, gemeinsam nachklingen.",
    time: "ca. 90 Min.",
  },
];

export default function SabineAngebote() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/sabine/03-bowls.jpg"
        alt="Klangschalen in warmem Licht auf einem Tuch"
        position="50% 50%"
        eyebrow="Angebote · Vita Sonus"
        title={
          <>
            Formate für <em>Auszeit und Regulation.</em>
          </>
        }
        lead="Jedes Angebot ist ein eigener Rhythmus. Gemeinsam finden wir heraus, was du jetzt brauchst — einzeln oder in der Gruppe."
        actions={
          <>
            <Button href="/sabine/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/sabine/studio/" variant="outline">
              Offenes Studio
            </Button>
          </>
        }
      />

      <section className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="01"
            eyebrow="Formate"
            title={
              <>
                Vier Wege. <em>Ein Raum.</em>
              </>
            }
            lead="Einzeltermine nach Absprache. Schreib mir oder ruf an — wir finden einen ruhigen Slot."
          />

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <div className="reveal relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[34rem]">
              <Img
                src="/assets/sabine/04-klangmassage.jpg"
                alt="Klangmassage mit Klangschalen am Körper"
                position="55% 45%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col md:col-span-5">
              <ul className="divide-y divide-line border-y border-line">
                {offerings.map((o) => (
                  <li key={o.name} className="reveal py-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="font-display text-[1.6rem] leading-tight md:text-[1.75rem]">{o.name}</h2>
                      <span className="eyebrow shrink-0 text-muted">{o.time}</span>
                    </div>
                    <p className="body-copy mt-2 max-w-md">{o.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="reveal mt-8 bg-elev p-6 text-[0.9rem] leading-relaxed text-muted">
                <span className="font-display block text-xl text-ink not-italic">Termine</span>
                Einzeltermine nach Absprache. Der Buchungskalender folgt — bis dahin erreichst du mich direkt.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12 md:items-center">
            <div className="reveal md:col-span-5">
              <p className="eyebrow text-accent-text">Im Fokus</p>
              <h3 className="display-3 mt-3">Die Klangmassage</h3>
              <p className="body-copy mt-4">
                Schalen werden auf und um den Körper gesetzt. Die Schwingung wirkt direkt — ohne Worte, ohne
                Aufwand. Viele spüren danach mehr Weite, Wärme und eine tiefe Entspannung.
              </p>
              <Button href={mailto(c.email, "Anfrage Klangmassage")} variant="text" className="mt-8">
                Klangmassage anfragen <Arrow />
              </Button>
            </div>
            <div className="reveal md:col-span-6 md:col-start-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Img
                  src="/assets/sabine/01-hero.jpg"
                  alt="Klangstudio Atmosphäre"
                  position="50% 45%"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Bereit?</p>
            <p className="display-3 mt-3">Wähle deinen Termin — oder komm Freitag vorbei.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/sabine/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/sabine/studio/" variant="outline">
              Offenes Studio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
