import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { ChapterIndex } from "@/components/ChapterIndex";
import { MetaRow } from "@/components/MetaRow";
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
        lead="Kein Terminzwang. Kein Programm. Ein Ritual mit dem Raum."
        leadClassName="!text-[1.15rem] italic font-display !text-ink/90"
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

      <section className="pt-10 md:pt-14">
        <div className="container-x">
          <MetaRow
            items={[
              { label: "Wann", value: c.openStudio },
              { label: "Wo", value: c.street },
              { label: "Ort", value: c.city },
              { label: "Anmeldung", value: "Nicht nötig" },
            ]}
          />
        </div>
      </section>

      <section className="section-y !pt-10 md:!pt-14">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="reveal md:col-span-5">
            <Eyebrow index="I">Offenes Studio</Eyebrow>
            <h2 className="display-2 mt-6">
              Kein Terminzwang. <em>Kein Programm.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Du kommst, bleibst so lange du magst und gehst, wenn es gut ist. Ein niedrigschwelliger
              Einstieg in die Welt von Vita Sonus.
            </p>
            <p className="body-copy mt-5 !max-w-none">
              Spontan willkommen. Bei Fragen vorher gerne anrufen — sonst einfach vorbeikommen. Der
              Raum ist bereit.
            </p>
          </div>
          <aside className="reveal border border-line bg-elev p-9 md:col-span-5 md:col-start-8 md:p-11">
            <p className="eyebrow text-accent-text">Freitag · Ritual</p>
            <p className="display-3 mt-4">{c.openStudio}</p>
            <address className="mt-8 not-italic leading-relaxed">
              {c.street}
              <br />
              {c.city}
            </address>
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

      {/* Numbered Friday ritual */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal max-w-xl">
            <Eyebrow>So läuft dein Freitag</Eyebrow>
            <h2 className="display-2 mt-6">
              Vier Schritte. <em>Ohne Uhr.</em>
            </h2>
          </div>
          <ChapterIndex
            className="mt-12 md:mt-14"
            layout="row"
            chapters={[
              {
                numeral: "I",
                title: "Ankommen",
                line: "Tür auf. Mantel ab. Atmen.",
              },
              {
                numeral: "II",
                title: "Raum spüren",
                line: "Licht, Instrumente, Stille — du darfst dich umsehen.",
              },
              {
                numeral: "III",
                title: "Gespräch oder Klang",
                line: "Fragen stellen, zuhören — oder einfach dasein.",
              },
              {
                numeral: "IV",
                title: "Gehen, wenn es gut ist",
                line: "Kein Abschiedsritual. Nur ein ruhiges Aufbrechen.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal ken-wrap relative aspect-[4/3] overflow-hidden md:col-span-7">
            <Img
              src="/assets/sabine/03-bowls.jpg"
              alt="Klangschalen im Studio"
              position="50% 50%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal sticky-caption md:col-span-4 md:col-start-9">
            <Eyebrow>Der Raum</Eyebrow>
            <h2 className="display-3 mt-4">
              Ein Studio für <em>Klang und Stille.</em>
            </h2>
            <p className="body-copy mt-5">
              Gedämpftes Licht, warme Materialien, Instrumente in Reichweite. Hier darf das
              Nervensystem nachgeben — ohne Erwartung.
            </p>
            <Button href="/sabine/angebote/" variant="text" className="mt-8">
              Zu den Angeboten <Arrow />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
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
