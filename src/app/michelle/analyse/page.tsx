import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { ChapterIndex } from "@/components/ChapterIndex";
import { PullQuote } from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Hautanalyse — OBSERV & BalanceTest",
  description:
    "Hautanalyse mit OBSERV 320x und Zinzino BalanceTest bei Michelle Ajouri in Neuburg — außen sehen, innen mitdenken.",
};

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
        lead="Mit professioneller Analyse wird sichtbar, was dem bloßen Auge verborgen bleibt — und, wenn sinnvoll, auch das, was darunter liegt."
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

      {/* Storytelling split: technology + human — not two equal articles */}
      <section className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="I"
            eyebrow="Technologie"
            title={
              <>
                Zwei Ebenen. <em>Ein Bild.</em>
              </>
            }
            lead="Hautpflege ohne Analyse ist Raten. Hier entsteht die Grundlage für jede Empfehlung — sichtbar und nachvollziehbar."
          />

          <div className="mt-12 grid gap-0 md:mt-16 md:grid-cols-12">
            {/* Large tech panel */}
            <article className="reveal relative border-t border-line pt-10 md:col-span-7 md:border-t-0 md:border-r md:pr-12 md:pt-0">
              <div className="ken-wrap relative aspect-[16/10] overflow-hidden bg-surface md:aspect-[4/3]">
                <Img
                  src="/assets/michelle/03-treatment.jpg"
                  alt="Serum wird mit einer Pipette auf die Wange aufgetragen"
                  position="62% 50%"
                  className="ken-img absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="eyebrow mt-8 text-accent-text">Hautanalyse</p>
              <h2 className="display-2 mt-4">OBSERV 320x</h2>
              <p className="body-copy mt-6 !max-w-lg">
                Verschiedene Lichtmodi — polarisiertes Licht und UV-Fluoreszenz — machen
                Pigmentierung, Feuchtigkeit, Poren und Unregelmäßigkeiten unter der Oberfläche
                sichtbar. Die Grundlage für jede weitere Empfehlung.
              </p>
            </article>

            {/* Human / inner panel — asymmetric */}
            <article className="reveal flex flex-col justify-between border-t border-line pt-10 md:col-span-5 md:border-t-0 md:pl-12 md:pt-4">
              <div>
                <p className="eyebrow text-accent-text">Innere Faktoren</p>
                <h2 className="display-3 mt-4">Zinzino BalanceTest</h2>
                <p className="body-copy mt-5 !max-w-none">
                  Ein Trockenbluttest aus wenigen Tropfen Kapillarblut, im Labor ausgewertet.
                  Hinweise auf innere Faktoren wie das Omega-6:3-Verhältnis — Hautpflege und
                  Wohlbefinden ganzheitlich gedacht.
                </p>
              </div>
              <div className="mt-12 border border-line bg-elev p-7 md:mt-16 md:p-8">
                <p className="font-display text-xl text-ink">Vor jeder Behandlung</p>
                <p className="body-copy mt-3 !max-w-none text-[0.9rem]">
                  Eine achtsame Massage von Gesicht, Hals und Nacken — um zu lösen, zu beruhigen
                  und die Behandlung ganzheitlich einzuleiten.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
        <div className="container-x">
          <PullQuote variant="statement">
            „Erst verstehen, dann behandeln — das ist keine Phrase. Das ist der Ablauf.“
          </PullQuote>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="reveal max-w-xl">
            <Eyebrow index="II">Ablauf</Eyebrow>
            <h2 className="display-2 mt-6">
              So läuft dein <em>Termin.</em>
            </h2>
            <p className="lead mt-6">Klar, ruhig und professionell geführt — damit du weißt, was dich erwartet.</p>
          </div>
          <ChapterIndex
            className="mt-12 md:mt-14"
            layout="row"
            chapters={[
              {
                numeral: "I",
                title: "Kennenlernen",
                line: "Hautbild, Gewohnheiten, Ziel — das Gespräch vor der Technik.",
              },
              {
                numeral: "II",
                title: "Analyse",
                line: "OBSERV 320x macht sichtbar, was die Haut jetzt braucht.",
              },
              {
                numeral: "III",
                title: "Behandlung",
                line: "Aquafacial, Microneedling oder Lash & Brow — abgestimmt.",
              },
              {
                numeral: "IV",
                title: "Pflegeplan",
                line: "Empfehlungen für zu Hause und für den nächsten Termin.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-7">
            <Eyebrow>Weiter</Eyebrow>
            <h2 className="display-2 mt-6">
              Von der Analyse zum <em>Treatment.</em>
            </h2>
            <p className="lead mt-6">
              Schau dir die Leistungen an — oder geh direkt zum Kontakt, wenn du schon weißt, was
              du brauchst.
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
