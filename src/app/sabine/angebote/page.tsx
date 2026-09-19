import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { contact, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Angebote — Klangreise, Massage, Meditation",
  description:
    "Klangreise, Klangmassage, Meditation und Regulationsabend bei Vita Sonus — Sabine Ajouri in Neuburg.",
};

const c = contact.sabine;

const offerings = [
  {
    numeral: "I",
    name: "Klangreise",
    mood: "Loslassen. Weit werden.",
    forWhom: "Für alle, die Pause brauchen und dem Alltag entkommen wollen — ohne Leistung.",
    detail:
      "Eine geführte Reise mit Klangschalen, Stimme und Stille. Der Körper darf loslassen, der Geist zur Ruhe kommen.",
    time: "60–90 Min.",
    image: "/assets/sabine/03-bowls.jpg",
    position: "50% 50%",
  },
  {
    numeral: "II",
    name: "Klangmassage",
    mood: "Vibration. Wärme. Resonanz.",
    forWhom: "Für Menschen, die Berührung über Schwingung spüren möchten — tief, ohne Worte.",
    detail:
      "Klangschalen auf und um den Körper — Vibration, Wärme und Resonanz, die tief in Gewebe und Nervensystem wirken.",
    time: "45–60 Min.",
    image: "/assets/sabine/04-klangmassage.jpg",
    position: "55% 45%",
  },
  {
    numeral: "III",
    name: "Meditation",
    mood: "Klar. Alltagsnah. Ohne Ballast.",
    forWhom: "Für Einsteiger und Geübte, die Präsenz üben wollen — einzeln oder in kleiner Gruppe.",
    detail:
      "Achtsamkeitsübungen in kleinen Gruppen oder einzeln. Klar, alltagsnah und ohne Esoterik-Ballast.",
    time: "nach Absprache",
    image: "/assets/sabine/01-hero.jpg",
    position: "50% 40%",
  },
  {
    numeral: "IV",
    name: "Regulationsabend",
    mood: "Gemeinsam ankommen. Gemeinsam nachklingen.",
    forWhom: "Für alle, die den Abend dem Nervensystem widmen wollen — in Gemeinschaft.",
    detail:
      "Ein Abend für das Nervensystem: Klang, Atem und Stille — gemeinsam ankommen, gemeinsam nachklingen.",
    time: "ca. 90 Min.",
    image: "/assets/sabine/05-portal.jpg",
    position: "76% 50%",
  },
];

export default function SabineAngebote() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/sabine/02-portrait.jpg"
        alt="Sabine Ajouri — Vita Sonus"
        position="62% 28%"
        eyebrow="Angebote · Vita Sonus"
        title={
          <>
            Formate für <em>Auszeit und Regulation.</em>
          </>
        }
        lead="Jedes Angebot hat seine eigene Atmosphäre. Gemeinsam finden wir heraus, was du jetzt brauchst."
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

      <section className="section-y-tight">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="I"
            eyebrow="Erlebnisse"
            title={
              <>
                Vier Wege. <em>Ein Raum.</em>
              </>
            }
            lead="Keine Bullet-Menüs — jedes Angebot mit Stimmung und für wen es gedacht ist."
          />

          <div className="mt-8 space-y-0 md:mt-10">
            {offerings.map((o, i) => (
              <article
                key={o.name}
                className={`reveal grid gap-6 border-t border-line py-7 md:grid-cols-12 md:gap-8 md:py-9 ${
                  i === offerings.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="ken-wrap relative aspect-[16/10] overflow-hidden bg-surface md:col-span-5 md:aspect-[4/5]">
                  <Img
                    src={o.image}
                    alt=""
                    position={o.position}
                    className="ken-img absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col md:col-span-6 md:col-start-7">
                  <div className="flex items-baseline gap-5">
                    <span className="chapter-num !text-[2.5rem] md:!text-[3rem]">{o.numeral}</span>
                    <div>
                      <h2 className="display-3">{o.name}</h2>
                      <p className="eyebrow mt-2 text-muted">{o.time}</p>
                    </div>
                  </div>
                  <p className="font-display mt-8 text-[1.55rem] leading-snug italic text-accent-text md:text-[1.75rem]">
                    {o.mood}
                  </p>
                  <p className="body-copy mt-6 !max-w-md">{o.detail}</p>
                  <p className="mt-6 border-l border-accent/50 pl-5 text-[0.9rem] leading-relaxed text-muted">
                    <span className="eyebrow block text-accent-text">Für wen</span>
                    <span className="mt-2 block">{o.forWhom}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-6">
            <Eyebrow>Im Fokus</Eyebrow>
            <h3 className="display-2 mt-4">Die Klangmassage</h3>
            <p className="body-copy mt-6 !max-w-md">
              Schalen werden auf und um den Körper gesetzt. Die Schwingung wirkt direkt — ohne
              Worte, ohne Aufwand. Viele spüren danach mehr Weite, Wärme und eine tiefe Entspannung.
            </p>
            <Button href={mailto(c.email, "Anfrage Klangmassage")} variant="text" className="mt-8">
              Klangmassage anfragen <Arrow />
            </Button>
          </div>
          <div className="reveal border border-line bg-elev p-8 md:col-span-5 md:col-start-8 md:p-10">
            <p className="eyebrow text-accent-text">Termine</p>
            <p className="display-3 mt-4">Einzeltermine nach Absprache.</p>
            <p className="body-copy mt-4 !max-w-none">
              Der Buchungskalender folgt — bis dahin erreichst du mich direkt.
            </p>
            <Button href="/sabine/kontakt/#buchen" className="mt-8">
              Termin wählen <Arrow />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
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
