import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { contact, mapsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offenes Studio",
  description:
    "Offenes Studio bei Vita Sonus: Freitag 16:30–18:00 Uhr ohne Anmeldung — Amalienstr. 60, Neuburg. Sabine Ajouri.",
};

const c = contact.sabine;

export default function SabineStudio() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/sabine/01-hero.jpg"
        alt="Dunkles Klangstudio mit warmem Licht"
        position="50% 40%"
        eyebrow="Studio · Vita Sonus"
        title={
          <>
            Freitagabend. <em>Tür offen.</em>
          </>
        }
        lead="Jeden Freitag von 16:30 bis 18:00 Uhr ist das Studio ohne Anmeldung geöffnet — für einen ersten Eindruck, ein Gespräch oder einfach, um anzukommen."
        actions={
          <>
            <Button href={c.phoneHref}>
              Anrufen <Arrow />
            </Button>
            <Button href={mapsHref(c.street, c.city)} variant="outline">
              Route planen
            </Button>
          </>
        }
      />

      <section className="section-y">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-6">
            <Eyebrow index="01">Offenes Studio</Eyebrow>
            <h2 className="display-2 mt-6">
              Kein Terminzwang. <em>Kein Programm.</em>
            </h2>
            <p className="lead mt-8">
              Du kommst, bleibst so lange du magst und gehst, wenn es gut ist. Ein niedrigschwelliger Einstieg in
              die Welt von Vita Sonus.
            </p>
            <p className="body-copy mt-5">
              Spontan willkommen. Bei Fragen vorher gerne anrufen — sonst einfach vorbeikommen. Der Raum ist
              bereit.
            </p>
          </div>
          <aside className="reveal bg-surface p-8 md:col-span-5 md:col-start-8 md:p-10">
            <p className="eyebrow text-accent-text">Wann</p>
            <p className="display-3 mt-3">{c.openStudio}</p>
            <dl className="mt-8 space-y-4 text-[0.95rem]">
              <div>
                <dt className="eyebrow text-muted">Wo</dt>
                <dd className="mt-1.5">
                  {c.street}
                  <br />
                  {c.city}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted">Hinweis</dt>
                <dd className="mt-1.5 text-muted">Spontan willkommen. Bei Fragen vorher gerne anrufen.</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={c.phoneHref} size="sm">
                Anrufen
              </Button>
              <Button href={mapsHref(c.street, c.city)} variant="text" size="sm">
                Route planen <Arrow />
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-center">
          <div className="reveal relative aspect-[4/3] overflow-hidden md:col-span-7">
            <Img
              src="/assets/sabine/03-bowls.jpg"
              alt="Klangschalen im Studio"
              position="50% 50%"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-4 md:col-start-9">
            <Eyebrow>Der Raum</Eyebrow>
            <h2 className="display-3 mt-4">
              Ein Studio für <em>Klang und Stille.</em>
            </h2>
            <p className="body-copy mt-5">
              Gedämpftes Licht, warme Materialien, Instrumente in Reichweite. Hier darf das Nervensystem
              nachgeben — ohne Erwartung, ohne Uhr.
            </p>
            <Button href="/sabine/angebote/" variant="text" className="mt-8">
              Zu den Angeboten <Arrow />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Einzeltermin</p>
            <p className="display-3 mt-3">Außerhalb des offenen Studios — nach Absprache.</p>
          </div>
          <Button href="/sabine/kontakt/#buchen">
            Termin wählen <Arrow />
          </Button>
        </div>
      </section>
    </>
  );
}
