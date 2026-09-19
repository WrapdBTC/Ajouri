import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { TeaserCard } from "@/components/TeaserCard";
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

const qualities = [
  ["Resonanz", "Klang, der den Körper trifft"],
  ["Stille", "Raum zwischen den Tönen"],
  ["Achtsamkeit", "Präsenz ohne Druck"],
  ["Regulation", "Nervensystem in Balance"],
];

export default function SabineHome() {
  return (
    <>
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
        lead="Klangreisen, Klangmassage und Meditation — für Menschen, die Pause brauchen und wieder bei sich ankommen möchten."
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

      <section className="section-y">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-center">
          <figure className="reveal md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/sabine/02-portrait.jpg"
                alt="Sabine Ajouri, Vita Sonus"
                position="62% 30%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Sabine Ajouri · Vita Sonus</figcaption>
          </figure>

          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="01">Willkommen</Eyebrow>
            <h2 className="display-2 mt-6">
              Klang ist für mich <em>Zuhause kommen.</em>
            </h2>
            <p className="lead mt-8">
              Vita Sonus ist mein Studio für Klang und Achtsamkeit in Neuburg. Hier geht es nicht um Leistung —
              sondern darum, dem Nervensystem Raum zu geben, sich zu regulieren.
            </p>
            <p className="body-copy mt-5">
              Ob in einer Klangreise, einer Klangmassage oder in der Meditation: Ich begleite dich mit Präsenz,
              Klarheit und einem ruhigen Rahmen. Du musst nichts erreichen. Du darfst ankommen.
            </p>
            <blockquote className="mt-10 border-l border-accent pl-6">
              <p className="font-display text-[1.6rem] leading-snug italic md:text-[1.85rem]">
                „You can&apos;t stop the waves, but you can learn to surf.“
              </p>
              <cite className="eyebrow mt-4 block not-italic text-muted">— Jon Kabat-Zinn</cite>
            </blockquote>
          </div>
        </div>

        <div className="container-x mt-20 md:mt-28">
          <p className="eyebrow text-muted">Was diesen Raum trägt</p>
          <ul className="mt-6 grid grid-cols-2 border-t border-line sm:grid-cols-4">
            {qualities.map(([title, text]) => (
              <li key={title} className="reveal border-b border-line py-6 pr-4 sm:border-b-0">
                <p className="font-display text-xl">{title}</p>
                <p className="mt-1 text-[0.85rem] text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege in dein <em>Studio.</em>
            </h2>
            <p className="lead mt-6">
              Angebote, offenes Studio und Kontakt — jeder Einstieg in seinem eigenen Tempo.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
            <TeaserCard
              href="/sabine/angebote/"
              eyebrow="Angebote"
              title="Klangreise & mehr"
              text="Klangreise, Klangmassage, Meditation und Regulationsabend — Formate für Auszeit und Regulation."
              image="/assets/sabine/03-bowls.jpg"
              position="50% 50%"
              alt="Klangschalen in warmem Licht"
            />
            <TeaserCard
              href="/sabine/studio/"
              eyebrow="Studio"
              title="Freitagabend. Tür offen."
              text="Jeden Freitag 16:30–18:00 ohne Anmeldung — für einen ersten Eindruck oder einfach zum Ankommen."
              image="/assets/sabine/04-klangmassage.jpg"
              position="55% 45%"
              alt="Klangmassage mit Klangschalen"
            />
            <TeaserCard
              href="/sabine/kontakt/"
              eyebrow="Kontakt"
              title="Melde dich. Ganz in Ruhe."
              text="Adresse, Telefon und der Platz für den kommenden Buchungskalender."
              image="/assets/sabine/05-portal.jpg"
              position="76% 50%"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <h2 className="display-2 mt-6">
              Melde dich. <em>Ganz in Ruhe.</em>
            </h2>
            <p className="lead mt-6 max-w-lg">
              Ruf an oder schreib mir — wir finden gemeinsam den passenden Einstieg. Oder komm Freitag ins offene
              Studio.
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
