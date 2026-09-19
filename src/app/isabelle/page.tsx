import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { TeaserCard } from "@/components/TeaserCard";
import { asset } from "@/lib/asset";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Atelier Isabelle — Fine-Line Tattoos",
  description:
    "Fine-Line-Tattoo-Atelier von Isabelle Ajouri. Reduzierte Linien, botanische und geometrische Motive — gezeichnet für genau eine Haut.",
  openGraph: {
    title: "Atelier Isabelle — Fine-Line Tattoos",
    description: "Die Linie, die bleibt.",
    images: [{ url: asset("/assets/isabelle/01-hero.jpg"), width: 1280, height: 720 }],
  },
};

const c = contact.isabelle;

const stilPoints = [
  ["Fein & reduziert", "Wenige Linien, viel Raum. Kein Überladen — nur das, was die Idee trägt."],
  ["Botanik & Geometrie", "Pflanzen, die atmen. Formen, die ruhen. Oft beides in einer Zeichnung."],
  ["Für eine Haut", "Jedes Motiv wird auf dich abgestimmt — Stelle, Größe, Charakter."],
];

export default function IsabelleHome() {
  return (
    <>
      <Hero
        size="full"
        image="/assets/isabelle/01-hero.jpg"
        alt="Dunkles Tattoo-Atelier mit scharfer Linie und schwarzem Studio-Licht"
        position="50% 40%"
        eyebrow="Atelier Isabelle · Fine-Line"
        title={
          <>
            Die Linie, <em>die bleibt.</em>
          </>
        }
        lead="Fine-Line-Tattoos — reduziert, präzise und für genau eine Haut gezeichnet. Editorial, zeitlos, ohne Lärm."
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
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Termine auf Anfrage</span>
            {c.emailIsPlaceholder && <span className="text-muted">E-Mail vorerst Platzhalter</span>}
          </p>
        }
      />

      <section className="section-y">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-center">
          <figure className="reveal md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/02-portrait.jpg"
                alt="Isabelle Ajouri, Fine-Line Tattoo Artist"
                position="52% 22%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Isabelle Ajouri · Fine-Line</figcaption>
          </figure>

          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="01">Atelier</Eyebrow>
            <h2 className="display-2 mt-6">
              Weniger Linie. <em>Mehr Haltung.</em>
            </h2>
            <p className="lead mt-8">
              Atelier Isabelle ist ein Fine-Line-Studio für Menschen, die eine Zeichnung wollen — nicht ein
              Statement. Reduziert auf das Wesentliche, ausgeführt mit Ruhe und Präzision.
            </p>
            <p className="body-copy mt-5">
              Ich arbeite ausschließlich auf Anfrage: Motiv, Stelle, Größe und Timing besprechen wir vorher. So
              entsteht etwas, das zu deinem Körper gehört — und nicht wie von der Wand genommen wirkt.
            </p>
            <blockquote className="mt-10 border-l border-accent pl-6">
              <p className="font-display text-[1.6rem] leading-snug italic md:text-[1.85rem]">
                „Eine gute Linie braucht keinen Lärm. Sie braucht nur den richtigen Ort.“
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Stil</Eyebrow>
            <h2 className="display-2 mt-6">
              Fine-Line mit <em>editorialer Schärfe.</em>
            </h2>
            <p className="lead mt-6">
              Schwarze Tinte, feine Nadeln, klare Komposition. Botanik und Geometrie — oft als Dialog auf einer Haut.
            </p>
          </div>
          <ul className="mt-16 grid gap-0 border-t border-line md:mt-20 md:grid-cols-3">
            {stilPoints.map(([title, text], i) => (
              <li
                key={title}
                className="reveal border-b border-line py-10 md:border-b-0 md:border-l md:px-8 md:py-12 md:first:border-l-0 md:first:pl-0"
              >
                <span className="font-display text-4xl leading-none text-accent tabular-nums">0{i + 1}</span>
                <h3 className="display-3 mt-6">{title}</h3>
                <p className="body-copy mt-3 max-w-sm">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege ins <em>Atelier.</em>
            </h2>
            <p className="lead mt-6">Galerie, Prozess und Anfrage — klar, ruhig, ohne Umwege.</p>
          </div>
          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
            <TeaserCard
              href="/isabelle/galerie/"
              eyebrow="Galerie"
              title="Botanik & Geometrie"
              text="Zwei Sprachen, eine Handschrift. Ein Eindruck — keine vollständige Portfolio-Liste."
              image="/assets/isabelle/03-tattoo-botanical.jpg"
              position="50% 45%"
              alt="Fine-Line-Tattoo mit botanischem Motiv"
            />
            <TeaserCard
              href="/isabelle/prozess/"
              eyebrow="Prozess"
              title="Von der Idee zur Linie"
              text="Beratung, Entwurf, Session, Aftercare — vier klare Schritte ohne Überraschungen."
              image="/assets/isabelle/05-process.jpg"
              position="50% 40%"
              alt="Arbeitsprozess im Tattoo-Atelier"
            />
            <TeaserCard
              href="/isabelle/anfrage/"
              eyebrow="Anfrage"
              title="Erzähl von deiner Idee"
              text="Motiv, Stelle, ungefähre Größe — schreib mir. Termine nur auf Anfrage."
              image="/assets/isabelle/06-portal.jpg"
              position="50% 50%"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <h2 className="display-2 mt-6">
              Erzähl von <em>deiner Idee.</em>
            </h2>
            <p className="lead mt-6 max-w-lg">
              Motiv, Stelle, ungefähre Größe — die Anfrage läuft direkt über das Atelier. Keine Walk-ins, keine
              Telefonnummer.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Button href="/isabelle/anfrage/">
              Anfrage senden <Arrow />
            </Button>
            <Button href="/isabelle/galerie/" variant="outline">
              Galerie
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
