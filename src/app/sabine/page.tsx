import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { ChapterIndex } from "@/components/ChapterIndex";
import { Marquee } from "@/components/Marquee";
import { EditorialCover } from "@/components/EditorialCover";
import { asset } from "@/lib/asset";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vita Sonus — Sabine Ajouri",
  description:
    "Klangreisen, Klangmassage und Meditation in Neuburg. Ein Studio für Klang, Achtsamkeit und innere Regulation — Vita Sonus von Sabine Ajouri.",
  openGraph: {
    title: "Vita Sonus — Sabine Ajouri",
    description: "Ein Raum, in dem es still werden darf.",
    images: [{ url: asset("/assets/sabine/01-hero.jpg"), width: 1280, height: 720 }],
  },
};

const c = contact.sabine;

export default function SabineHome() {
  return (
    <>
      {/* Ritual invitation hero — short poetic lead */}
      <Hero
        size="full"
        image="/assets/sabine/01-hero.jpg"
        alt="Dunkles Klangstudio mit Klangschalen und warmem Indigo-Licht"
        position="50% 45%"
        eyebrow="Vita Sonus · Neuburg"
        title={
          <>
            Ein Raum, in dem es <em>still werden darf.</em>
          </>
        }
        lead="Du musst nichts erreichen. Du darfst ankommen."
        leadClassName="!text-[1.2rem] md:!text-[1.3rem] !leading-relaxed italic font-display !text-ink/90 !max-w-[28ch]"
        actions={
          <>
            <Button href="/sabine/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/sabine/angebote/" variant="outline">
              Angebote
            </Button>
          </>
        }
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Offenes Studio · {c.openStudio}</span>
            <span className="text-muted">{c.phone}</span>
          </p>
        }
      />

      <Marquee
        items={["Resonanz", "Stille", "Achtsamkeit", "Regulation", "Klang", "Atem", "Nachklang"]}
      />

      {/* Welcome + pull quote */}
      <section className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <figure className="reveal ken-wrap md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/sabine/02-portrait.jpg"
                alt="Sabine Ajouri, Vita Sonus"
                position="62% 30%"
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Sabine Ajouri · Vita Sonus</figcaption>
          </figure>

          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="I">Willkommen</Eyebrow>
            <h2 className="display-2 mt-6">
              Klang ist für mich <em>Zuhause kommen.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Vita Sonus ist mein Studio für Klang und Achtsamkeit in Neuburg. Hier geht es nicht um
              Leistung — sondern darum, dem Nervensystem Raum zu geben, sich zu regulieren.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Ob in einer Klangreise, einer Klangmassage oder in der Meditation: Ich begleite dich
              mit Präsenz und einem ruhigen Rahmen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x">
          <PullQuote variant="statement" cite="— Jon Kabat-Zinn">
            „You can&apos;t stop the waves, but you can learn to surf.“
          </PullQuote>
        </div>
      </section>

      {/* ChapterIndex journey */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal max-w-xl">
            <Eyebrow>Die Reise</Eyebrow>
            <h2 className="display-2 mt-6">
              Vier Stationen. <em>Ein Atem.</em>
            </h2>
            <p className="lead mt-6">
              So fühlt sich ein Besuch bei Vita Sonus an — nicht als Checkliste, sondern als
              Verlauf.
            </p>
          </div>
          <ChapterIndex
            className="mt-12 md:mt-14"
            chapters={[
              {
                numeral: "I",
                title: "Ankommen",
                line: "Die Tür schließt. Das Licht ist warm. Du legst ab, was du tragen musstest.",
              },
              {
                numeral: "II",
                title: "Klang",
                line: "Schalen, Stimme, Vibration — der Körper wird angesprochen, nicht belehrt.",
              },
              {
                numeral: "III",
                title: "Stille",
                line: "Der Raum zwischen den Tönen. Hier darf das Nervensystem nachgeben.",
              },
              {
                numeral: "IV",
                title: "Nachklang",
                line: "Du gehst anders raus, als du reingekommen bist. Ohne Eile.",
              },
            ]}
          />
        </div>
      </section>

      {/* Editorial covers */}
      <section className="section-y">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege in dein <em>Studio.</em>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-8 md:mt-16 md:grid-cols-3 md:gap-7">
            <EditorialCover
              href="/sabine/angebote/"
              eyebrow="Angebote"
              title="Klangreise & mehr"
              text="Klangreise, Klangmassage, Meditation und Regulationsabend — Formate für Auszeit."
              image="/assets/sabine/03-bowls.jpg"
              position="50% 50%"
              alt="Klangschalen"
              aspect="tall"
            />
            <EditorialCover
              href="/sabine/studio/"
              eyebrow="Studio"
              title="Freitagabend. Tür offen."
              text="Jeden Freitag 16:30–18:00 ohne Anmeldung — für einen ersten Eindruck."
              image="/assets/sabine/04-klangmassage.jpg"
              position="55% 45%"
              alt="Klangmassage"
              aspect="tall"
            />
            <EditorialCover
              href="/sabine/kontakt/"
              eyebrow="Kontakt"
              title="Melde dich. Ganz in Ruhe."
              text="Adresse, Telefon und der Platz für den Buchungskalender."
              image="/assets/sabine/05-portal.jpg"
              position="76% 50%"
              aspect="tall"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <h2 className="display-2 mt-6">
              Melde dich. <em>Ganz in Ruhe.</em>
            </h2>
            <p className="lead mt-6">
              Ruf an oder schreib mir — wir finden den passenden Einstieg. Oder komm Freitag ins
              offene Studio.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Button href="/sabine/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/sabine/studio/" variant="outline">
              Offenes Studio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
