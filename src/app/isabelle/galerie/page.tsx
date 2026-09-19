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
        image="/assets/isabelle/03-tattoo-botanical.jpg"
        alt="Fine-Line botanisches Tattoo"
        position="50% 45%"
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

      {/* Alternating full-bleed / detail crop — masonry energy */}
      <section className="pt-8 md:pt-12">
        {/* Full-bleed botanical */}
        <figure className="reveal">
          <div className="ken-wrap relative aspect-[16/10] w-full overflow-hidden md:aspect-[22/10]">
            <Img
              src="/assets/isabelle/03-tattoo-botanical.jpg"
              alt="Fine-Line-Tattoo mit botanischem Motiv"
              position="50% 40%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="container-x mt-5 flex items-baseline justify-between gap-4">
            <p className="eyebrow text-accent-text">Botanical</p>
            <p className="text-[0.85rem] text-muted">Ranken · Blätter · Blüten</p>
          </figcaption>
        </figure>

        {/* Detail crop pair */}
        <div className="container-x mt-8 grid gap-6 md:mt-12 md:grid-cols-12 md:gap-8">
          <figure className="reveal md:col-span-5 md:pt-14 lg:pt-20">
            <div className="ken-wrap relative aspect-square overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/04-tattoo-geometric.jpg"
                alt="Geometrisches Fine-Line Detail"
                position="35% 40%"
                zoom={1.35}
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4">
              <p className="eyebrow text-accent-text">Geometric</p>
            </figcaption>
          </figure>
          <figure className="reveal md:col-span-7">
            <div className="ken-wrap relative aspect-[4/5] overflow-hidden bg-surface md:aspect-[5/6]">
              <Img
                src="/assets/isabelle/04-tattoo-geometric.jpg"
                alt="Fine-Line-Tattoo mit geometrischem Motiv"
                position="50% 50%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <p className="eyebrow text-accent-text">Geometric</p>
              <p className="text-[0.85rem] text-muted">Klare Linien · ruhige Proportionen</p>
            </figcaption>
          </figure>
        </div>

        {/* Full-bleed session */}
        <figure className="reveal mt-8 md:mt-12">
          <div className="ken-wrap relative aspect-[16/9] overflow-hidden md:aspect-[2.4/1]">
            <Img
              src="/assets/isabelle/05-process.jpg"
              alt="Arbeitsprozess und Zeichnung im Atelier"
              position="50% 40%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <figcaption className="container-x mt-5 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="eyebrow text-accent-text">Session</p>
              <p className="mt-1 text-[0.85rem] text-muted">
                Vom Entwurf zur Session — die Linie entsteht in Ruhe.
              </p>
            </div>
            <Button href="/isabelle/prozess/" variant="text">
              Prozess ansehen <Arrow />
            </Button>
          </figcaption>
        </figure>

        {/* Portrait detail as closing crop */}
        <div className="container-x mt-8 mb-4 grid gap-6 md:mt-12 md:mb-0 md:grid-cols-12">
          <figure className="reveal md:col-span-4 md:col-start-3">
            <div className="ken-wrap relative aspect-[3/4] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/02-portrait.jpg"
                alt=""
                position="52% 22%"
                zoom={1.6}
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4">
              <p className="eyebrow text-accent-text">Atelier</p>
            </figcaption>
          </figure>
          <figure className="reveal md:col-span-5 md:col-start-8 md:pt-16 lg:pt-24">
            <div className="ken-wrap relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/isabelle/03-tattoo-botanical.jpg"
                alt=""
                position="70% 60%"
                zoom={1.4}
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4">
              <p className="eyebrow text-accent-text">Detail</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-y bg-surface">
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
