import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { ChapterIndex } from "@/components/ChapterIndex";
import { FullBleed } from "@/components/FullBleed";

export const metadata: Metadata = {
  title: "Prozess",
  description:
    "Beratung, Entwurf, Session, Aftercare — der Fine-Line-Prozess bei Atelier Isabelle Ajouri.",
};

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
        lead="Vier klare Schritte. Transparent. Ohne Überraschungen."
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

      {/* Dense numbered steps — high contrast on deep */}
      <section className="section-y-tight bg-deep text-deep-ink">
        <div className="container-x">
          <div className="reveal max-w-md">
            <Eyebrow>Ablauf</Eyebrow>
            <h2 className="display-2 mt-5 text-deep-ink">
              Klar geführt. <em className="!text-accent-text">Ohne Lärm.</em>
            </h2>
            <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-deep-ink/75">
              Du weißt jederzeit, wo du stehst — von der ersten Mail bis zur Nachsorge.
            </p>
          </div>

          <ChapterIndex
            className="mt-8 border-line md:mt-10 [&_.body-copy]:!text-deep-ink/70 [&_.chapter-num]:!text-accent-text [&_.display-3]:!text-deep-ink [&_li]:border-deep-ink/20"
            chapters={[
              {
                numeral: "I",
                title: "Beratung",
                line: "Motiv, Stelle, Größe. Stil und Erwartungen — ehrlich, ohne Druck.",
              },
              {
                numeral: "II",
                title: "Entwurf",
                line: "Eine Zeichnung, die zu dir und zu deiner Haut passt. Feinjustierung, bis die Linie stimmt.",
              },
              {
                numeral: "III",
                title: "Session",
                line: "Ruhige Atmosphäre, präzise Arbeit. So lange, wie die Zeichnung braucht.",
              },
              {
                numeral: "IV",
                title: "Aftercare",
                line: "Klare Pflegehinweise. Bei Fragen bleibe ich erreichbar — bis die Linie sitzt.",
              },
            ]}
          />
        </div>
      </section>

      <FullBleed
        src="/assets/isabelle/05-process.jpg"
        alt="Arbeitsprozess im Tattoo-Atelier"
        position="50% 35%"
        height="band"
      />

      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
          <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-4 md:aspect-[3/4]">
            <Img
              src="/assets/isabelle/02-portrait.jpg"
              alt=""
              position="52% 22%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <p className="eyebrow text-accent-text">Bereit?</p>
            <h2 className="display-2 mt-4">
              Starte mit der <em>Anfrage.</em>
            </h2>
            <p className="lead mt-5">
              Motiv, Stelle, ungefähre Größe — mehr brauche ich für den ersten Schritt nicht.
            </p>
            <Button href="/isabelle/anfrage/" className="mt-8">
              Anfrage senden <Arrow />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
