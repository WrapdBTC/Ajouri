import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Hautanalyse — OBSERV & BalanceTest",
  description:
    "Hautanalyse mit OBSERV 320x und Zinzino BalanceTest bei Michelle Ajouri in Neuburg — außen sehen, innen mitdenken.",
};

const steps = [
  ["Kennenlernen", "Wir sprechen über dein Hautbild, deine Gewohnheiten und dein Ziel."],
  ["Analyse", "Mit OBSERV 320x wird sichtbar, was deine Haut gerade wirklich braucht."],
  ["Behandlung", "Aquafacial, Microneedling oder Lash & Brow — individuell abgestimmt."],
  ["Pflegeplan", "Konkrete Empfehlungen für zu Hause und für deinen nächsten Termin."],
];

export default function MichelleAnalyse() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/michelle/01-hero.jpg"
        alt="Behandlungssuite mit Analysegerät"
        position="50% 45%"
        eyebrow="Analyse · Glamour Treatments"
        title={
          <>
            Außen sehen. <em>Innen mitdenken.</em>
          </>
        }
        lead="Mit professioneller Analyse-Technologie wird sichtbar, was dem bloßen Auge verborgen bleibt — und, wenn sinnvoll, auch das, was darunter liegt."
        actions={
          <>
            <Button href="/michelle/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/michelle/leistungen/" variant="outline">
              Zu den Treatments
            </Button>
          </>
        }
      />

      <section className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="01"
            eyebrow="Technologie"
            title={
              <>
                Zwei Ebenen. <em>Ein Bild.</em>
              </>
            }
            lead="Hautpflege ohne Analyse ist Raten. Hier entsteht die Grundlage für jede Empfehlung — sichtbar und nachvollziehbar."
          />

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <div className="reveal relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[34rem]">
              <Img
                src="/assets/michelle/03-treatment.jpg"
                alt="Serum wird mit einer Pipette auf die Wange aufgetragen"
                position="62% 50%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col md:col-span-5">
              <article className="reveal border-t border-line pt-7">
                <p className="eyebrow text-accent-text">Hautanalyse</p>
                <h2 className="display-3 mt-3">OBSERV 320x</h2>
                <p className="body-copy mt-4">
                  Verschiedene Lichtmodi — darunter polarisiertes Licht und UV-Fluoreszenz — machen Pigmentierung,
                  Feuchtigkeit, Poren und Unregelmäßigkeiten unter der Oberfläche sichtbar. Die Grundlage für jede
                  weitere Empfehlung.
                </p>
              </article>
              <article className="reveal mt-10 border-t border-line pt-7">
                <p className="eyebrow text-accent-text">Innere Faktoren</p>
                <h2 className="display-3 mt-3">Zinzino BalanceTest</h2>
                <p className="body-copy mt-4">
                  Ein Trockenbluttest aus wenigen Tropfen Kapillarblut, im Labor ausgewertet. Er liefert Hinweise
                  auf innere Faktoren wie das Omega-6:3-Verhältnis — und hilft, Hautpflege und Wohlbefinden
                  ganzheitlich zu betrachten.
                </p>
              </article>
              <p className="reveal mt-auto bg-elev p-6 text-[0.9rem] leading-relaxed text-muted md:mt-12">
                <span className="font-display block text-xl text-ink not-italic">Vor jeder Behandlung</span>
                Eine achtsame Massage von Gesicht, Hals und Nacken — um zu lösen, zu beruhigen und die Behandlung
                ganzheitlich einzuleiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="02"
            eyebrow="Ablauf"
            title={
              <>
                So läuft dein <em>Termin ab.</em>
              </>
            }
            lead="Klar, ruhig und professionell geführt — damit du weißt, was dich erwartet."
          />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-8">
            {steps.map(([title, text], i) => (
              <li key={title} className="reveal border-t border-ink/25 pt-7">
                <span className="font-display text-5xl leading-none text-accent tabular-nums">0{i + 1}</span>
                <h3 className="display-3 mt-6">{title}</h3>
                <p className="body-copy mt-3">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-7">
            <Eyebrow>Weiter</Eyebrow>
            <h2 className="display-2 mt-6">
              Von der Analyse zum <em>Treatment.</em>
            </h2>
            <p className="lead mt-6 max-w-lg">
              Schau dir die Leistungen an — oder geh direkt zum Kontakt, wenn du schon weißt, was du brauchst.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Button href="/michelle/leistungen/">
              Leistungen <Arrow />
            </Button>
            <Button href="/michelle/kontakt/" variant="outline">
              Kontakt
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
