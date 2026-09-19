import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Fine-Line Galerie — botanische und geometrische Motive von Atelier Isabelle Ajouri.",
};

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
  {
    src: "/assets/isabelle/05-process.jpg",
    alt: "Arbeitsprozess und Zeichnung im Atelier",
    label: "Prozess",
    caption: "Vom Entwurf zur Session — die Linie entsteht in Ruhe, nicht im Lärm.",
    position: "50% 40%",
  },
];

export default function IsabelleGalerie() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/isabelle/03-tattoo-botanical.jpg"
        alt="Fine-Line botanisches Tattoo"
        position="50% 45%"
        eyebrow="Galerie · Atelier Isabelle"
        title={
          <>
            Botanik und <em>Geometrie.</em>
          </>
        }
        lead="Zwei Sprachen, eine Handschrift. Ein Eindruck — keine vollständige Portfolio-Liste."
        actions={
          <>
            <Button href="/isabelle/anfrage/">
              Anfrage senden <Arrow />
            </Button>
            <Button href="/isabelle/prozess/" variant="outline">
              Zum Prozess
            </Button>
          </>
        }
      />

      <section className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="01"
            eyebrow="Auswahl"
            title={
              <>
                Motive mit <em>Raum zum Atmen.</em>
              </>
            }
            lead="Jedes Stück ist eine Einzelzeichnung. Was du hier siehst, ist Richtung — nicht Vorlage zum Kopieren."
          />

          <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-8">
            {gallery.slice(0, 2).map((g) => (
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

          <figure className="reveal mt-10 md:mt-12">
            <div className="relative aspect-[21/9] overflow-hidden bg-surface md:aspect-[2.4/1]">
              <Img
                src={gallery[2].src}
                alt={gallery[2].alt}
                position={gallery[2].position}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <p className="eyebrow text-accent-text">{gallery[2].label}</p>
                <p className="body-copy mt-2 max-w-md">{gallery[2].caption}</p>
              </div>
              <Button href="/isabelle/prozess/" variant="text">
                Prozess ansehen <Arrow />
              </Button>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Deine Idee</p>
            <p className="display-3 mt-3">Passt der Stil? Dann erzähl von deinem Motiv.</p>
          </div>
          <Button href="/isabelle/anfrage/">
            Anfrage senden <Arrow />
          </Button>
        </div>
      </section>
    </>
  );
}
