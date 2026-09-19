import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Fine-Line Galerie — botanische und geometrische Motive von Atelier Isabelle Ajouri.",
};

export default function IsabelleGalerie() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/isabelle/01-hero.jpg"
        alt="Dunkles Fine-Line Atelier"
        position="50% 40%"
        eyebrow="Galerie · Atelier Isabelle"
        title={
          <>
            Botanik und <em>Geometrie.</em>
          </>
        }
        lead="Zwei Sprachen, eine Handschrift. Ein Eindruck — keine Vorlage zum Kopieren."
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

      <section className="pt-6 md:pt-8">
        {/* Botanical — once */}
        <figure className="reveal">
          <div className="ken-wrap relative aspect-[16/10] w-full overflow-hidden md:aspect-[22/10]">
            <Img
              src="/assets/isabelle/03-tattoo-botanical.jpg"
              alt="Fine-Line-Tattoo mit botanischem Motiv"
              position="50% 40%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="container-x mt-3 flex items-baseline justify-between gap-4">
            <p className="eyebrow text-accent-text">Botanical</p>
            <p className="text-[0.85rem] text-ink/70">Ranken · Blätter · Blüten</p>
          </figcaption>
        </figure>

        {/* Equal sibling pair: geometric + portal */}
        <div className="container-x mt-5 grid items-stretch gap-5 md:mt-7 md:grid-cols-2 md:gap-6">
          <figure className="reveal flex h-full flex-col">
            <div className="ken-wrap relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/04-tattoo-geometric.jpg"
                alt="Fine-Line-Tattoo mit geometrischem Motiv"
                position="50% 50%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <p className="eyebrow text-accent-text">Geometric</p>
              <p className="text-[0.85rem] text-ink/70">Klare Linien · ruhige Proportionen</p>
            </figcaption>
          </figure>
          <figure className="reveal flex h-full flex-col">
            <div className="ken-wrap relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/06-portal.jpg"
                alt="Atelier-Atmosphäre"
                position="50% 50%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <p className="eyebrow text-accent-text">Atelier</p>
              <p className="text-[0.85rem] text-ink/70">Raum · Licht · Präzision</p>
            </figcaption>
          </figure>
        </div>

        {/* Session — once */}
        <figure className="reveal mt-5 md:mt-7">
          <div className="ken-wrap relative aspect-[16/9] overflow-hidden md:aspect-[2.4/1]">
            <Img
              src="/assets/isabelle/05-process.jpg"
              alt="Arbeitsprozess und Zeichnung im Atelier"
              position="50% 40%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="container-x mt-3 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="eyebrow text-accent-text">Session</p>
              <p className="mt-1 text-[0.85rem] text-ink/70">
                Vom Entwurf zur Session — die Linie entsteht in Ruhe.
              </p>
            </div>
            <Button href="/isabelle/prozess/" variant="text">
              Prozess ansehen <Arrow />
            </Button>
          </figcaption>
        </figure>

        {/* Portrait closing — once, centered */}
        <div className="container-x mt-5 mb-2 md:mt-7 md:mb-0">
          <figure className="reveal mx-auto max-w-md">
            <div className="ken-wrap relative aspect-[3/4] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/02-portrait.jpg"
                alt="Isabelle Ajouri"
                position="52% 22%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <p className="eyebrow text-accent-text">Isabelle Ajouri</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
        <div className="container-x">
          <div className="reveal mx-auto max-w-lg text-center">
            <Eyebrow>Richtung</Eyebrow>
            <p className="display-3 mt-6">
              Was du hier siehst, ist Richtung — nicht Vorlage zum Kopieren.
            </p>
            <p className="body-copy mx-auto mt-6 !max-w-sm">
              Jedes Stück ist eine Einzelzeichnung. Passt der Stil? Dann erzähl von deinem Motiv.
            </p>
            <Button href="/isabelle/anfrage/" className="mt-10">
              Anfrage senden <Arrow />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
