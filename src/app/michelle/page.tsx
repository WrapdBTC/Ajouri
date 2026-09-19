import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow, SectionIntro } from "@/components/SectionIntro";
import { asset } from "@/lib/asset";
import { contact, mailto, mapsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Michelle Ajouri — Glamour Treatments",
  description:
    "Hautanalyse mit OBSERV 320x, Zinzino BalanceTest, Facials und Lash & Brow in Neuburg an der Donau. Erst verstehen, dann behandeln.",
  openGraph: {
    title: "Michelle Ajouri — Glamour Treatments",
    description: "Schönheit beginnt mit Verstehen.",
    images: [{ url: asset("/assets/michelle/01-hero.jpg"), width: 1280, height: 720 }],
  },
};

const c = contact.michelle;
const book = mailto(c.email, "Terminanfrage");

const skinTypes = [
  ["Trockene Haut", "Feuchtigkeit & Aufbau"],
  ["Sensible Haut", "Beruhigende Pflege"],
  ["Unreine Haut", "Tiefenreinigung"],
  ["Fahle Haut", "Frische & Glow"],
  ["Reife Haut", "Regeneration"],
];

const firstVisit = [
  {
    name: "Ersttermin",
    detail: "Hautanalyse mit OBSERV 320x und individuelles Facial",
    time: "90 Min.",
    price: "210 €",
  },
  {
    name: "Ersttermin Deluxe",
    detail: "Hautanalyse, Zinzino BalanceTest und individuelles Facial",
    time: "120 Min.",
    price: "270 €",
  },
];

const treatments = [
  { name: "Aquafacial", detail: "Tiefenreinigung, die Ablagerungen löst und Platz für Wirkstoffe schafft", price: "140 €" },
  { name: "Microneedling", detail: "Gezielte Impulse für Regeneration und ein verfeinertes Hautbild", price: "200 €" },
  { name: "Power Duo", detail: "Aquafacial und Microneedling in einer Behandlung", price: "300 €" },
  { name: "Dermaplaning", detail: "Sanfte Exfoliation für eine glatte, ebenmäßige Oberfläche", price: "80 €" },
  { name: "Glass Skin", detail: "Intensives Kombi-Treatment für klaren, ebenmäßigen Glow", price: "340 €" },
  { name: "ACID Peel", detail: "Professionelles Peeling für frische, verfeinerte Haut", price: "100 €" },
];

const lashBrow = [
  ["Lash Lift", "Schwung und Definition für deine eigenen Wimpern."],
  ["Korean Lash Lift", "Ein besonders sanfter, natürlicher Schwung."],
  ["Brow Lift", "Geordnete, definierte Brauen mit mehr Ausdruck."],
];

const steps = [
  ["Kennenlernen", "Wir sprechen über dein Hautbild, deine Gewohnheiten und dein Ziel."],
  ["Analyse", "Mit OBSERV 320x wird sichtbar, was deine Haut gerade wirklich braucht."],
  ["Behandlung", "Aquafacial, Microneedling oder Lash & Brow — individuell abgestimmt."],
  ["Pflegeplan", "Konkrete Empfehlungen für zu Hause und für deinen nächsten Termin."],
];

function PriceRow({ name, detail, time, price }: { name: string; detail: string; time?: string; price: string }) {
  return (
    <li className="py-6">
      <div className="flex items-baseline">
        <h4 className="font-display text-[1.6rem] leading-tight md:text-[1.75rem]">{name}</h4>
        {time && <span className="eyebrow ml-4 hidden shrink-0 text-muted sm:inline">{time}</span>}
        <span aria-hidden className="leader" />
        <span className="font-display text-[1.6rem] leading-tight tabular-nums md:text-[1.75rem]">{price}</span>
      </div>
      <p className="body-copy mt-1.5 max-w-lg">
        {time && <span className="sm:hidden">{time} · </span>}
        {detail}
      </p>
    </li>
  );
}

export default function MichellePage() {
  return (
    <PageShell theme="michelle">
      <Hero
        mode="panel"
        image="/assets/michelle/01-hero.jpg"
        alt="Helle Behandlungssuite mit Liege, Analysegerät und goldenen Details"
        position="58% 50%"
        eyebrow="Glamour Treatments · Neuburg an der Donau"
        title={
          <>
            Schönheit beginnt mit <em>Verstehen.</em>
          </>
        }
        lead="Individuelle Hautanalyse, hochwertige Treatments und ein ganzheitlicher Blick auf deine Haut — persönlich, präzise und mit Liebe zum Detail."
        actions={
          <>
            <Button href={book}>
              Termin anfragen <Arrow />
            </Button>
            <Button href={c.phoneHref} variant="outline">
              Anrufen
            </Button>
          </>
        }
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Kostenlose Erstberatung — unverbindlich</span>
            <span className="text-muted">{c.phone}</span>
          </p>
        }
      />

      {/* ---------- 01 Verstehen ---------- */}
      <section id="verstehen" className="section-y">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-center">
          <figure className="reveal md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <Img
                src="/assets/michelle/02-portrait.jpg"
                alt="Michelle Ajouri, Hautexpertin"
                position="46% 30%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 text-muted">Michelle Ajouri · Hautexpertin</figcaption>
          </figure>

          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="01">Verstehen</Eyebrow>
            <h2 className="display-2 mt-6">
              Beauty ist für mich immer auch <em>Gesundheit.</em>
            </h2>
            <p className="lead mt-8">
              Glamour Treatments ist ein Kosmetikstudio für hochwertige Behandlungen, individuelle Hautpflege
              und präzise Lash &amp; Brow Treatments. Im Mittelpunkt steht ein gepflegtes, natürlich schönes
              Ergebnis, das zu dir passt.
            </p>
            <p className="body-copy mt-5">
              Bevor eine einzige Behandlung beginnt, nehme ich mir Zeit, deine Haut wirklich zu verstehen — dein
              Hautbild, deine Gewohnheiten, dein Ziel. Keine Standardlösung von der Stange, sondern ein Konzept,
              das zu deinem Alltag passt.
            </p>
            <blockquote className="mt-10 border-l border-accent pl-6">
              <p className="font-display text-[1.6rem] leading-snug italic md:text-[1.85rem]">
                „Jede Haut erzählt ihre eigene Geschichte. Ich höre zu, analysiere präzise und behandle
                individuell.“
              </p>
            </blockquote>
          </div>
        </div>

        <div className="container-x mt-20 md:mt-28">
          <p className="eyebrow text-muted">Für jeden Hauttyp die passende Lösung</p>
          <ul className="mt-6 grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-5">
            {skinTypes.map(([type, focus]) => (
              <li key={type} className="reveal border-b border-line py-6 pr-4 lg:border-b-0">
                <p className="font-display text-xl">{type}</p>
                <p className="mt-1 text-[0.85rem] text-muted">{focus}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 02 Analyse ---------- */}
      <section id="analyse" className="section-y bg-surface">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="02"
            eyebrow="Analyse"
            title={
              <>
                Außen sehen. <em>Innen mitdenken.</em>
              </>
            }
            lead="Mit professioneller Analyse-Technologie wird sichtbar, was dem bloßen Auge verborgen bleibt — und, wenn sinnvoll, auch das, was darunter liegt."
          />

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
            <div className="reveal relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-auto md:min-h-[34rem]">
              <Img
                src="/assets/michelle/03-treatment.jpg"
                alt="Serum wird mit einer Pipette auf die Wange aufgetragen"
                position="62% 50%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col md:col-span-5">
              <article className="reveal border-t border-line pt-7">
                <p className="eyebrow text-accent-text">Hautanalyse</p>
                <h3 className="display-3 mt-3">OBSERV 320x</h3>
                <p className="body-copy mt-4">
                  Verschiedene Lichtmodi — darunter polarisiertes Licht und UV-Fluoreszenz — machen Pigmentierung,
                  Feuchtigkeit, Poren und Unregelmäßigkeiten unter der Oberfläche sichtbar. Die Grundlage für jede
                  weitere Empfehlung.
                </p>
              </article>
              <article className="reveal mt-10 border-t border-line pt-7">
                <p className="eyebrow text-accent-text">Innere Faktoren</p>
                <h3 className="display-3 mt-3">Zinzino BalanceTest</h3>
                <p className="body-copy mt-4">
                  Ein Trockenbluttest aus wenigen Tropfen Kapillarblut, im Labor ausgewertet. Er liefert Hinweise
                  auf innere Faktoren wie das Omega-6:3-Verhältnis — und hilft, Hautpflege und Wohlbefinden
                  ganzheitlich zu betrachten.
                </p>
              </article>
              <p className="reveal mt-auto bg-elev p-6 text-[0.9rem] leading-relaxed text-muted md:mt-12">
                <span className="font-display block text-xl text-ink not-italic">Vor jeder Behandlung</span>
                Eine achtsame Massage von Gesicht, Hals und Nacken — um zu lösen, zu beruhigen und die Behandlung
                ganzheitlich einzuleiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 03 Treatments ---------- */}
      <section id="treatments" className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="03"
            eyebrow="Treatments"
            title={
              <>
                Ausgewählte <em>Behandlungen.</em>
              </>
            }
            lead="Orientierungspreise. Welche Behandlung für dich sinnvoll ist, zeigt sich nach Analyse und Gespräch."
          />

          <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="reveal">
                <p className="eyebrow text-muted">Der Einstieg</p>
                <ul className="mt-2 divide-y divide-line border-b border-line">
                  {firstVisit.map((t) => (
                    <PriceRow key={t.name} {...t} />
                  ))}
                </ul>
              </div>
              <div className="reveal mt-14">
                <p className="eyebrow text-muted">Behandlungen</p>
                <ul className="mt-2 divide-y divide-line border-b border-line">
                  {treatments.map((t) => (
                    <PriceRow key={t.name} {...t} />
                  ))}
                </ul>
              </div>
            </div>

            <aside className="md:col-span-4">
              <div className="reveal bg-surface p-8 md:sticky md:top-28">
                <p className="eyebrow text-accent-text">Unsicher, was passt?</p>
                <p className="display-3 mt-4">Starte mit einer kostenlosen Erstberatung.</p>
                <p className="body-copy mt-4">
                  Unverbindlich und ganz ohne Druck. Danach ist der Ersttermin mit Hautanalyse der nächste Schritt,
                  auf dem jede weitere Behandlung aufbaut.
                </p>
                <Button href={mailto(c.email, "Kostenlose Erstberatung")} className="mt-8 w-full">
                  Erstberatung anfragen
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- 04 Lash & Brow ---------- */}
      <section id="lash-brow" className="section-y bg-surface">
        <div className="container-x grid gap-14 md:grid-cols-12 md:items-center">
          <div className="reveal md:order-2 md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Img
                src="/assets/michelle/04-lash.jpg"
                alt="Nahaufnahme eines geschlossenen Auges mit gelifteten Wimpern und definierter Braue"
                position="58% 50%"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="reveal md:order-1 md:col-span-4">
            <Eyebrow index="04">Lash &amp; Brow</Eyebrow>
            <h2 className="display-2 mt-6">
              Ausdruck, <em>fein definiert.</em>
            </h2>
            <p className="lead mt-8">
              Präzise Liftings für definierte Wimpern und schöne Brauen. Auch als Beauty-Extra buchbar — ganz
              unabhängig von einer Hautbehandlung.
            </p>
            <ul className="mt-10 border-t border-line">
              {lashBrow.map(([name, text]) => (
                <li key={name} className="border-b border-line py-5">
                  <p className="font-display text-2xl">{name}</p>
                  <p className="mt-1 text-[0.9rem] text-muted">{text}</p>
                </li>
              ))}
            </ul>
            <Button href={mailto(c.email, "Anfrage Lash & Brow")} variant="text" className="mt-9">
              Lash &amp; Brow anfragen <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- 05 Ablauf ---------- */}
      <section id="ablauf" className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="05"
            eyebrow="Ablauf"
            title={
              <>
                So läuft dein <em>Termin ab.</em>
              </>
            }
            lead="Klar, ruhig und professionell geführt — damit du weißt, was dich erwartet."
          />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-8">
            {steps.map(([title, text], i) => (
              <li key={title} className="reveal border-t border-ink/25 pt-7">
                <span className="font-display text-5xl leading-none text-accent tabular-nums">0{i + 1}</span>
                <h3 className="display-3 mt-6">{title}</h3>
                <p className="body-copy mt-3">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- 06 Kontakt ---------- */}
      <section id="kontakt" className="relative isolate overflow-hidden">
        <Img
          src="/assets/michelle/05-portal.jpg"
          alt=""
          position="50% 50%"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-bg/35" />
        <div className="container-x section-y grid gap-14 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-6">
            <Eyebrow index="06">Kontakt</Eyebrow>
            <h2 className="display-2 mt-6">
              Für deine Haut. <em>Für dein Gefühl.</em>
            </h2>
            <p className="lead mt-8 max-w-md text-ink/80!">
              Schreib mir oder ruf an — ich melde mich persönlich, und wir finden gemeinsam den passenden
              Einstieg.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={book}>
                Termin anfragen <Arrow />
              </Button>
              <Button href={c.phoneHref} variant="outline">
                Anrufen
              </Button>
              <Button href={c.whatsappHref} variant="text" className="ml-3">
                WhatsApp
              </Button>
            </div>
          </div>

          <address className="reveal bg-elev p-8 not-italic shadow-[0_40px_80px_-40px_rgb(43_31_24/0.35)] md:col-span-5 md:col-start-8 md:p-10">
            <p className="font-display text-3xl">Glamour Treatments</p>
            <p className="eyebrow mt-2 text-muted">Michelle Ajouri</p>
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
                <dt className="eyebrow text-accent-text">Telefon / WhatsApp</dt>
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
                <dt className="eyebrow text-accent-text">Öffnungszeiten</dt>
                <dd className="mt-1.5">{c.hours}</dd>
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
