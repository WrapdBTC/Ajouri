import type { Metadata } from "next";
import NextLink from "next/link";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { Marquee } from "@/components/Marquee";
import { FullBleed } from "@/components/FullBleed";
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

const works = [
  {
    src: "/assets/isabelle/03-tattoo-botanical.jpg",
    alt: "Fine-Line-Tattoo mit botanischem Motiv",
    label: "Botanical",
    position: "50% 45%",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/assets/isabelle/04-tattoo-geometric.jpg",
    alt: "Fine-Line-Tattoo mit geometrischem Motiv",
    label: "Geometric",
    position: "50% 50%",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/assets/isabelle/05-process.jpg",
    alt: "Arbeitsprozess im Atelier",
    label: "Session",
    position: "50% 40%",
    aspect: "aspect-[16/10]",
  },
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
        lead="Fine-Line — reduziert, präzise, für genau eine Haut. Editorial. Ohne Lärm."
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

      {/* Gallery-first — work immediately after hero */}
      <section className="section-y-tight">
        <div className="container-x">
          <div className="reveal flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Arbeit</Eyebrow>
              <h2 className="display-2 mt-4">
                Die Linie <em>zuerst.</em>
              </h2>
            </div>
            <Button href="/isabelle/galerie/" variant="text" className="hidden sm:inline-flex">
              Zur Galerie <Arrow />
            </Button>
          </div>

          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12 md:gap-5">
            {/* Large botanical with type overlay */}
            <NextLink
              href="/isabelle/galerie/"
              className="reveal ken-wrap group relative col-span-1 overflow-hidden bg-surface md:col-span-7"
            >
              <div className={`relative ${works[0].aspect} md:aspect-[4/5] md:min-h-[32rem]`}>
                <Img
                  src={works[0].src}
                  alt={works[0].alt}
                  position={works[0].position}
                  className="ken-img absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent"
                />
                <span className="font-display absolute bottom-6 left-6 text-[2.5rem] leading-none text-ink md:bottom-8 md:left-8 md:text-[3.25rem]">
                  {works[0].label}
                </span>
              </div>
            </NextLink>

            <div className="flex flex-col gap-4 md:col-span-5 md:gap-5">
              <NextLink
                href="/isabelle/galerie/"
                className="reveal ken-wrap group relative flex-1 overflow-hidden bg-surface"
              >
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[14rem]">
                  <Img
                    src={works[1].src}
                    alt={works[1].alt}
                    position={works[1].position}
                    className="ken-img absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-bg/75 via-transparent to-transparent"
                  />
                  <span className="font-display absolute bottom-5 left-5 text-[1.85rem] leading-none text-ink md:text-[2.25rem]">
                    {works[1].label}
                  </span>
                </div>
              </NextLink>
              <NextLink
                href="/isabelle/prozess/"
                className="reveal ken-wrap group relative overflow-hidden bg-surface"
              >
                <div className="relative aspect-[16/9]">
                  <Img
                    src={works[2].src}
                    alt={works[2].alt}
                    position={works[2].position}
                    className="ken-img absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-bg/75 via-transparent to-transparent"
                  />
                  <span className="font-display absolute bottom-4 left-5 text-[1.65rem] leading-none text-ink">
                    {works[2].label}
                  </span>
                </div>
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Fine-Line",
          "Botanik",
          "Geometrie",
          "Black Ink",
          "Single Needle",
          "Custom",
          "Editorial",
        ]}
      />

      {/* Sparse atelier intro */}
      <section className="section-y">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-center">
          <figure className="reveal ken-wrap md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/02-portrait.jpg"
                alt="Isabelle Ajouri, Fine-Line Tattoo Artist"
                position="52% 22%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Isabelle Ajouri · Fine-Line</figcaption>
          </figure>

          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="I">Atelier</Eyebrow>
            <h2 className="display-2 mt-6">
              Weniger Linie. <em>Mehr Haltung.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Atelier Isabelle ist ein Fine-Line-Studio für Menschen, die eine Zeichnung wollen —
              nicht ein Statement. Reduziert auf das Wesentliche.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Ausschließlich auf Anfrage: Motiv, Stelle, Größe und Timing besprechen wir vorher. So
              entsteht etwas, das zu deinem Körper gehört.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-6 md:pb-10">
        <div className="container-x">
          <PullQuote variant="statement">
            „Eine gute Linie braucht keinen Lärm. Sie braucht nur den richtigen Ort.“
          </PullQuote>
        </div>
      </section>

      {/* Style points — sparse, black-heavy */}
      <section className="section-y bg-deep text-deep-ink">
        <div className="container-x">
          <div className="reveal max-w-xl">
            <p className="eyebrow opacity-60">Stil</p>
            <h2 className="display-2 mt-6">
              Fine-Line mit <em className="!text-accent-text">editorialer Schärfe.</em>
            </h2>
          </div>
          <ul className="mt-16 grid gap-0 border-t border-current/15 md:mt-20 md:grid-cols-3">
            {[
              ["Fein & reduziert", "Wenige Linien, viel Raum. Nur das, was die Idee trägt."],
              ["Botanik & Geometrie", "Pflanzen, die atmen. Formen, die ruhen."],
              ["Für eine Haut", "Stelle, Größe, Charakter — auf dich abgestimmt."],
            ].map(([title, text], i) => (
              <li
                key={title}
                className="reveal border-b border-current/15 py-12 md:border-b-0 md:border-l md:px-8 md:py-14 md:first:border-l-0 md:first:pl-0"
              >
                <span className="font-display text-5xl leading-none text-accent tabular-nums opacity-80">
                  0{i + 1}
                </span>
                <h3 className="display-3 mt-7">{title}</h3>
                <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed opacity-70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FullBleed
        src="/assets/isabelle/06-portal.jpg"
        alt=""
        position="50% 50%"
        height="band"
      />

      <section className="section-y">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <h2 className="display-2 mt-6">
              Erzähl von <em>deiner Idee.</em>
            </h2>
            <p className="lead mt-6">
              Motiv, Stelle, ungefähre Größe — die Anfrage läuft direkt über das Atelier. Keine
              Walk-ins.
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
