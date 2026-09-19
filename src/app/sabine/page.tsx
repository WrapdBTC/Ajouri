import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow, SectionIntro } from "@/components/SectionIntro";
import { asset } from "@/lib/asset";
import { contact, mailto, mapsHref } from "@/lib/site";

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
const mail = mailto(c.email, "Anfrage Vita Sonus");

const offerings = [
  {
    name: "Klangreise",
    detail:
      "Eine geführte Reise mit Klangschalen, Stimme und Stille. Der Körper darf loslassen, der Geist zur Ruhe kommen.",
    time: "60–90 Min.",
  },
  {
    name: "Klangmassage",
    detail:
      "Klangschalen auf und um den Körper — Vibration, Wärme und Resonanz, die tief in Gewebe und Nervensystem wirken.",
    time: "45–60 Min.",
  },
  {
    name: "Meditation",
    detail:
      "Achtsamkeitsübungen in kleinen Gruppen oder einzeln. Klar, alltagsnah und ohne Esoterik-Ballast.",
    time: "nach Absprache",
  },
  {
    name: "Regulationsabend",
    detail:
      "Ein Abend für das Nervensystem: Klang, Atem und Stille — gemeinsam ankommen, gemeinsam nachklingen.",
    time: "ca. 90 Min.",
  },
];

const qualities = [
  ["Resonanz", "Klang, der den Körper trifft"],
  ["Stille", "Raum zwischen den Tönen"],
  ["Achtsamkeit", "Präsenz ohne Druck"],
  ["Regulation", "Nervensystem in Balance"],
];

export default function SabinePage() {
  return (
    <PageShell theme="sabine">
      <Hero
        mode="overlay"
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
            <Button href={c.phoneHref}>
              Anrufen <Arrow />
            </Button>
            <Button href={mail} variant="outline">
              Mailen
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

      {/* ---------- 01 Über mich ---------- */}
      <section id="ueber-mich" className="section-y">
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
            <Eyebrow index="01">Über mich</Eyebrow>
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

      {/* ---------- 02 Angebote ---------- */}
      <section id="angebote" className="section-y bg-surface">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="02"
            eyebrow="Angebote"
            title={
              <>
                Formate für <em>Auszeit und Regulation.</em>
              </>
            }
            lead="Jedes Angebot ist ein eigener Rhythmus. Gemeinsam finden wir heraus, was du jetzt brauchst — einzeln oder in der Gruppe."
          />

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <div className="reveal relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[34rem]">
              <Img
                src="/assets/sabine/03-bowls.jpg"
                alt="Klangschalen in warmem Licht auf einem Tuch"
                position="50% 50%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col md:col-span-5">
              <ul className="divide-y divide-line border-y border-line">
                {offerings.map((o) => (
                  <li key={o.name} className="reveal py-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-[1.6rem] leading-tight md:text-[1.75rem]">{o.name}</h3>
                      <span className="eyebrow shrink-0 text-muted">{o.time}</span>
                    </div>
                    <p className="body-copy mt-2 max-w-md">{o.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="reveal mt-8 bg-elev p-6 text-[0.9rem] leading-relaxed text-muted">
                <span className="font-display block text-xl text-ink not-italic">Termine</span>
                Einzeltermine nach Absprache. Schreib mir oder ruf an — wir finden einen ruhigen Slot.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12 md:items-center">
            <div className="reveal md:order-2 md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Img
                  src="/assets/sabine/04-klangmassage.jpg"
                  alt="Klangmassage mit Klangschalen am Körper"
                  position="55% 45%"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="reveal md:order-1 md:col-span-4">
              <p className="eyebrow text-accent-text">Im Fokus</p>
              <h3 className="display-3 mt-3">Die Klangmassage</h3>
              <p className="body-copy mt-4">
                Schalen werden auf und um den Körper gesetzt. Die Schwingung wirkt direkt — ohne Worte, ohne
                Aufwand. Viele spüren danach mehr Weite, Wärme und eine tiefe Entspannung.
              </p>
              <Button href={mailto(c.email, "Anfrage Klangmassage")} variant="text" className="mt-8">
                Klangmassage anfragen <Arrow />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 03 Offenes Studio ---------- */}
      <section id="offenes-studio" className="section-y">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-6">
            <Eyebrow index="03">Offenes Studio</Eyebrow>
            <h2 className="display-2 mt-6">
              Freitagabend. <em>Tür offen.</em>
            </h2>
            <p className="lead mt-8">
              Jeden Freitag von 16:30 bis 18:00 Uhr ist das Studio ohne Anmeldung geöffnet — für einen ersten
              Eindruck, ein Gespräch oder einfach, um anzukommen.
            </p>
            <p className="body-copy mt-5">
              Kein Terminzwang, kein Programm. Du kommst, bleibst so lange du magst und gehst, wenn es gut ist.
              Ein niedrigschwelliger Einstieg in die Welt von Vita Sonus.
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
                <dd className="mt-1.5 text-muted">
                  Spontan willkommen. Bei Fragen vorher gerne anrufen.
                </dd>
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

      {/* ---------- 04 Kontakt ---------- */}
      <section id="kontakt" className="relative isolate overflow-hidden">
        <Img
          src="/assets/sabine/05-portal.jpg"
          alt=""
          position="76% 50%"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/45" />
        <div className="container-x section-y grid gap-14 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-6">
            <Eyebrow index="04">Kontakt</Eyebrow>
            <h2 className="display-2 mt-6">
              Melde dich. <em>Ganz in Ruhe.</em>
            </h2>
            <p className="lead mt-8 max-w-md text-ink/80!">
              Ruf an oder schreib mir — ich melde mich persönlich und wir finden gemeinsam den passenden
              Einstieg.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={c.phoneHref}>
                Anrufen <Arrow />
              </Button>
              <Button href={mail} variant="outline">
                Mailen
              </Button>
            </div>
          </div>

          <address className="reveal bg-elev p-8 not-italic shadow-[0_40px_80px_-40px_rgb(20_24_48/0.45)] md:col-span-5 md:col-start-8 md:p-10">
            <p className="font-display text-3xl">Vita Sonus</p>
            <p className="eyebrow mt-2 text-muted">Sabine Ajouri</p>
            <dl className="mt-8 space-y-5 text-[0.95rem]">
              <div>
                <dt className="eyebrow text-accent-text">Studio</dt>
                <dd className="mt-1.5 leading-relaxed">
                  {c.street}
                  <br />
                  {c.city}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-accent-text">Telefon</dt>
                <dd className="mt-1.5">
                  <a href={c.phoneHref} className="hover:underline">
                    {c.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-accent-text">E-Mail</dt>
                <dd className="mt-1.5">
                  <a href={mailto(c.email)} className="hover:underline">
                    {c.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-accent-text">Offenes Studio</dt>
                <dd className="mt-1.5">{c.openStudio}</dd>
              </div>
            </dl>
            <Button href={mapsHref(c.street, c.city)} variant="text" size="sm" className="mt-8">
              Route planen <Arrow />
            </Button>
          </address>
        </div>
      </section>
    </PageShell>
  );
}
