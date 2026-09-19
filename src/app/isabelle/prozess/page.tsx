import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Prozess",
  description:
    "Beratung, Entwurf, Session, Aftercare — der Fine-Line-Prozess bei Atelier Isabelle Ajouri.",
};

const process = [
  [
    "Beratung",
    "Du schreibst mir Motiv, Stelle und ungefähre Größe. Wir klären Stil, Platzierung und Erwartungen — ehrlich und ohne Druck.",
  ],
  [
    "Entwurf",
    "Ich zeichne einen Entwurf, der zu dir und zu deiner Haut passt. Feinjustierung, bis die Linie stimmt.",
  ],
  [
    "Session",
    "Ruhige Atmosphäre, präzise Arbeit. Die Session dauert so lange, wie die Zeichnung braucht — nicht länger.",
  ],
  [
    "Aftercare",
    "Klare Pflegehinweise für die Heilung. Bei Fragen bleibe ich erreichbar — bis die Linie sitzt.",
  ],
];

export default function IsabelleProzess() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/isabelle/05-process.jpg"
        alt="Arbeitsprozess im Tattoo-Atelier — Entwurf und Session"
        position="50% 40%"
        eyebrow="Prozess · Atelier Isabelle"
        title={
          <>
            Von der Idee zur <em>Linie.</em>
          </>
        }
        lead="Vier klare Schritte — transparent und ohne Überraschungen."
        actions={
          <>
            <Button href="/isabelle/anfrage/">
              Anfrage senden <Arrow />
            </Button>
            <Button href="/isabelle/galerie/" variant="outline">
              Galerie
            </Button>
          </>
        }
      />

      <section className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="01"
            eyebrow="Ablauf"
            title={
              <>
                Klar geführt. <em>Ohne Lärm.</em>
              </>
            }
            lead="Du weißt jederzeit, wo du stehst — von der ersten Mail bis zur Nachsorge."
          />

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:items-start">
            <div className="reveal relative aspect-[4/3] overflow-hidden md:col-span-5 md:aspect-auto md:min-h-[28rem]">
              <Img
                src="/assets/isabelle/05-process.jpg"
                alt="Arbeitsprozess im Tattoo-Atelier"
                position="50% 40%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <ol className="md:col-span-6 md:col-start-7">
              {process.map(([title, text], i) => (
                <li
                  key={title}
                  className="reveal grid grid-cols-[3.25rem_1fr] gap-4 border-t border-line py-8 last:border-b"
                >
                  <span className="font-display text-2xl leading-none text-accent-text tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="display-3">{title}</h2>
                    <p className="body-copy mt-3 max-w-md">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-7">
            <p className="eyebrow text-accent-text">Bereit?</p>
            <h2 className="display-2 mt-4">
              Starte mit der <em>Anfrage.</em>
            </h2>
            <p className="lead mt-6 max-w-lg">
              Motiv, Stelle, ungefähre Größe — mehr brauche ich für den ersten Schritt nicht.
            </p>
          </div>
          <div className="reveal md:col-span-5 md:flex md:justify-end">
            <Button href="/isabelle/anfrage/">
              Anfrage senden <Arrow />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
