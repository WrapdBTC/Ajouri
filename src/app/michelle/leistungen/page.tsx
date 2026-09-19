import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { PriceRow } from "@/components/PriceRow";
import { FullBleed } from "@/components/FullBleed";
import { mailto, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description:
    "Facials, Aquafacial, Microneedling, Glass Skin und Lash & Brow bei Michelle Ajouri — Orientierungspreise in Neuburg.",
};

const c = contact.michelle;

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
  {
    name: "Aquafacial",
    detail: "Tiefenreinigung, die Ablagerungen löst und Platz für Wirkstoffe schafft",
    price: "140 €",
    featured: false,
  },
  {
    name: "Microneedling",
    detail: "Gezielte Impulse für Regeneration und ein verfeinertes Hautbild",
    price: "200 €",
    featured: false,
  },
  {
    name: "Power Duo",
    detail: "Aquafacial und Microneedling in einer Behandlung",
    price: "300 €",
    featured: true,
  },
  {
    name: "Dermaplaning",
    detail: "Sanfte Exfoliation für eine glatte, ebenmäßige Oberfläche",
    price: "80 €",
    featured: false,
  },
  {
    name: "Glass Skin",
    detail: "Intensives Kombi-Treatment für klaren, ebenmäßigen Glow",
    price: "340 €",
    featured: true,
  },
  {
    name: "ACID Peel",
    detail: "Professionelles Peeling für frische, verfeinerte Haut",
    price: "100 €",
    featured: false,
  },
];

const lashBrow = [
  ["Lash Lift", "Schwung und Definition für deine eigenen Wimpern."],
  ["Korean Lash Lift", "Ein besonders sanfter, natürlicher Schwung."],
  ["Brow Lift", "Geordnete, definierte Brauen mit mehr Ausdruck."],
];

export default function MichelleLeistungen() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/michelle/03-treatment.jpg"
        alt="Serum wird mit einer Pipette auf die Wange aufgetragen"
        position="62% 50%"
        eyebrow="Leistungen · Glamour Treatments"
        title={
          <>
            Ausgewählte <em>Behandlungen.</em>
          </>
        }
        lead="Orientierungspreise. Welche Behandlung sinnvoll ist, zeigt sich nach Analyse und Gespräch."
        actions={
          <>
            <Button href="/michelle/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/michelle/analyse/" variant="outline">
              Zur Analyse
            </Button>
          </>
        }
      />

      {/* Featured treatment — magazine row */}
      <section className="section-y-tight">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
            <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-5 md:aspect-[3/4]">
              <Img
                src="/assets/michelle/01-hero.jpg"
                alt="Behandlungssuite — Atmosphäre"
                position="58% 45%"
                zoom={1.1}
                className="ken-img absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="reveal md:col-span-6 md:col-start-7">
              <Eyebrow index="I">Im Fokus</Eyebrow>
              <h2 className="display-2 mt-6">
                Glass Skin <em>&amp; Power Duo.</em>
              </h2>
              <p className="lead mt-8 !max-w-md">
                Zwei Treatments, die oft am Anfang stehen: intensiver Glow oder die Kombination aus
                Reinigung und Regeneration. Beide bauen auf der Analyse auf — nichts wird geraten.
              </p>
              <dl className="mt-10 space-y-5 border-t border-line pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="font-display text-2xl">Glass Skin</dt>
                  <dd className="font-display text-2xl tabular-nums">340 €</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="font-display text-2xl">Power Duo</dt>
                  <dd className="font-display text-2xl tabular-nums">300 €</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="II"
            eyebrow="Einstieg"
            title={
              <>
                Der erste <em>Termin.</em>
              </>
            }
            lead="Auf dem Ersttermin baut jede weitere Behandlung auf — mit Analyse und einem Facial, das zu deinem Hautbild passt."
          />

          <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="reveal">
                <p className="eyebrow text-muted">Der Einstieg</p>
                <ul className="mt-2 divide-y divide-line border-b border-line">
                  {firstVisit.map((t) => (
                    <PriceRow key={t.name} {...t} />
                  ))}
                </ul>
              </div>
              <div className="reveal mt-12 md:mt-14">
                <p className="eyebrow text-muted">Behandlungen</p>
                <ul className="mt-2 divide-y divide-line border-b border-line">
                  {treatments.map((t) => (
                    <PriceRow key={t.name} name={t.name} detail={t.detail} price={t.price} />
                  ))}
                </ul>
              </div>
            </div>

            <aside className="md:col-span-4">
              <div className="reveal border border-line bg-elev p-8 md:sticky md:top-28 md:p-10">
                <p className="eyebrow text-accent-text">Unsicher, was passt?</p>
                <p className="display-3 mt-4">Starte mit einer kostenlosen Erstberatung.</p>
                <p className="body-copy mt-5 !max-w-none">
                  Unverbindlich und ohne Druck. Danach ist der Ersttermin mit Hautanalyse der
                  nächste Schritt.
                </p>
                <Button href={mailto(c.email, "Kostenlose Erstberatung")} className="mt-9 w-full">
                  Erstberatung anfragen
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FullBleed
        src="/assets/michelle/04-lash.jpg"
        alt="Nahaufnahme gelifteter Wimpern"
        position="58% 50%"
        height="band"
      />

      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
          <div className="reveal sticky-caption md:col-span-4">
            <Eyebrow index="III">Lash &amp; Brow</Eyebrow>
            <h2 className="display-2 mt-6">
              Ausdruck, <em>fein definiert.</em>
            </h2>
            <p className="lead mt-8">
              Präzise Liftings für definierte Wimpern und schöne Brauen. Auch als Beauty-Extra —
              unabhängig von einer Hautbehandlung.
            </p>
            <Button href={mailto(c.email, "Anfrage Lash & Brow")} variant="text" className="mt-9">
              Lash &amp; Brow anfragen <Arrow />
            </Button>
          </div>
          <ul className="md:col-span-7 md:col-start-6">
            {lashBrow.map(([name, text], i) => (
              <li
                key={name}
                className="reveal grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-7 last:border-b"
              >
                <span className="chapter-num !text-[2rem]">
                  {["I", "II", "III"][i]}
                </span>
                <div>
                  <p className="font-display text-[1.75rem] leading-tight md:text-[2rem]">{name}</p>
                  <p className="body-copy mt-2">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y-tight bg-surface">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent-text">Bereit?</p>
            <p className="display-3 mt-3">Wähle deinen Termin — oder schreib mir vorher.</p>
          </div>
          <Button href="/michelle/kontakt/#buchen">
            Termin wählen <Arrow />
          </Button>
        </div>
      </section>
    </>
  );
}
