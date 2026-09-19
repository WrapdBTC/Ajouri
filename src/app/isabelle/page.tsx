import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow, SectionIntro } from "@/components/SectionIntro";
import { asset } from "@/lib/asset";
import { contact, mailto } from "@/lib/site";

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
const inquire = mailto(c.email, "Anfrage Atelier Isabelle");

const stilPoints = [
  ["Fein & reduziert", "Wenige Linien, viel Raum. Kein Überladen — nur das, was die Idee trägt."],
  ["Botanik & Geometrie", "Pflanzen, die atmen. Formen, die ruhen. Oft beides in einer Zeichnung."],
  ["Für eine Haut", "Jedes Motiv wird auf dich abgestimmt — Stelle, Größe, Charakter."],
];

const gallery = [
  {
    src: "/assets/isabelle/03-tattoo-botanical.jpg",
    alt: "Fine-Line-Tattoo mit botanischem Motiv",
    label: "Botanisch",
    caption: "Ranken, Blätter, Blüten — gezeichnet wie eine Skizze auf der Haut.",
    position: "50% 45%",
  },
  {
    src: "/assets/isabelle/04-tattoo-geometric.jpg",
    alt: "Fine-Line-Tattoo mit geometrischem Motiv",
    label: "Geometrisch",
    caption: "Klare Linien, ruhige Proportionen — Architektur für den Körper.",
    position: "50% 50%",
  },
];

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

export default function IsabellePage() {
  return (
    <PageShell theme="isabelle">
      <Hero
        mode="overlay"
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
            <Button href={inquire}>
              Anfrage senden <Arrow />
            </Button>
            <Button href="#galerie" variant="outline">
              Galerie
            </Button>
          </>
        }
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Termine auf Anfrage</span>
            {c.emailIsPlaceholder && (
              <span className="text-muted">E-Mail vorerst Platzhalter</span>
            )}
          </p>
        }
      />

      {/* ---------- 01 Atelier ---------- */}
      <section id="atelier" className="section-y">
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
              Ich arbeite ausschließlich auf Anfrage: Motiv, Stelle, Größe und Timing besprechen wir vorher.
              So entsteht etwas, das zu deinem Körper gehört — und nicht wie von der Wand genommen wirkt.
            </p>
            <blockquote className="mt-10 border-l border-accent pl-6">
              <p className="font-display text-[1.6rem] leading-snug italic md:text-[1.85rem]">
                „Eine gute Linie braucht keinen Lärm. Sie braucht nur den richtigen Ort.“
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ---------- 02 Stil ---------- */}
      <section id="stil" className="section-y bg-surface">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="02"
            eyebrow="Stil"
            title={
              <>
                Fine-Line mit <em>editorialer Schärfe.</em>
              </>
            }
            lead="Schwarze Tinte, feine Nadeln, klare Komposition. Botanik und Geometrie — oft als Dialog auf einer Haut."
          />

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

      {/* ---------- 03 Galerie ---------- */}
      <section id="galerie" className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="03"
            eyebrow="Galerie"
            title={
              <>
                Botanik und <em>Geometrie.</em>
              </>
            }
            lead="Zwei Sprachen, eine Handschrift. Ein Eindruck — keine vollständige Portfolio-Liste."
          />

          <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-8">
            {gallery.map((g) => (
              <figure key={g.src} className="reveal">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  <Img
                    src={g.src}
                    alt={g.alt}
                    position={g.position}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="eyebrow text-accent-text">{g.label}</p>
                  <p className="body-copy mt-2 max-w-md">{g.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 04 Prozess ---------- */}
      <section id="prozess" className="section-y bg-surface">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="04"
            eyebrow="Prozess"
            title={
              <>
                Von der Idee zur <em>Linie.</em>
              </>
            }
            lead="Vier klare Schritte — transparent und ohne Überraschungen."
          />

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:items-start">
            <div className="reveal relative aspect-[4/3] overflow-hidden md:col-span-5 md:aspect-auto md:min-h-[28rem]">
              <Img
                src="/assets/isabelle/05-process.jpg"
                alt="Arbeitsprozess im Tattoo-Atelier — Entwurf und Session"
                position="50% 40%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <ol className="md:col-span-6 md:col-start-7">
              {process.map(([title, text], i) => (
                <li key={title} className="reveal grid grid-cols-[3.25rem_1fr] gap-4 border-t border-line py-8 last:border-b">
                  <span className="font-display text-2xl leading-none text-accent-text tabular-nums">0{i + 1}</span>
                  <div>
                    <h3 className="display-3">{title}</h3>
                    <p className="body-copy mt-3 max-w-md">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- 05 Kontakt ---------- */}
      <section id="kontakt" className="relative isolate overflow-hidden">
        <Img
          src="/assets/isabelle/06-portal.jpg"
          alt=""
          position="50% 50%"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/55" />
        <div className="container-x section-y grid gap-14 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-6">
            <Eyebrow index="05">Kontakt</Eyebrow>
            <h2 className="display-2 mt-6">
              Erzähl von <em>deiner Idee.</em>
            </h2>
            <p className="lead mt-8 max-w-md text-ink/80!">
              Motiv, Stelle, ungefähre Größe — schreib mir. Termine nur auf Anfrage, keine Walk-ins.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={inquire}>
                Anfrage senden <Arrow />
              </Button>
            </div>
          </div>

          <address className="reveal bg-elev p-8 not-italic shadow-[0_40px_80px_-40px_rgb(0_0_0/0.55)] md:col-span-5 md:col-start-8 md:p-10">
            <p className="font-display text-3xl">Atelier Isabelle</p>
            <p className="eyebrow mt-2 text-muted">Isabelle Ajouri · Fine-Line</p>
            <dl className="mt-8 space-y-5 text-[0.95rem]">
              <div>
                <dt className="eyebrow text-accent-text">Termine</dt>
                <dd className="mt-1.5">Auf Anfrage · keine Telefonnummer</dd>
              </div>
              <div>
                <dt className="eyebrow text-accent-text">E-Mail</dt>
                <dd className="mt-1.5">
                  <a href={mailto(c.email)} className="hover:underline">
                    {c.email}
                  </a>
                </dd>
              </div>
            </dl>
            {c.emailIsPlaceholder && (
              <p className="mt-6 border-t border-line pt-5 text-[0.85rem] leading-relaxed text-muted">
                <span className="font-display block text-lg text-ink not-italic">Hinweis</span>
                Die E-Mail-Adresse ist ein Platzhalter und wird vor dem Livegang durch die echte
                Atelier-Adresse ersetzt.
              </p>
            )}
            <Button href={inquire} variant="text" size="sm" className="mt-8">
              Anfrage per Mail <Arrow />
            </Button>
          </address>
        </div>
      </section>
    </PageShell>
  );
}
