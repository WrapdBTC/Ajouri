import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { PriceRow } from "@/components/PriceRow";
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
        lead="Orientierungspreise. Welche Behandlung für dich sinnvoll ist, zeigt sich nach Analyse und Gespräch."
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

      <section className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="01"
            eyebrow="Einstieg"
            title={
              <>
                Der erste <em>Termin.</em>
              </>
            }
            lead="Auf dem Ersttermin baut jede weitere Behandlung auf — mit Analyse und einem Facial, das zu deinem Hautbild passt."
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
                  Unverbindlich und ganz ohne Druck. Danach ist der Ersttermin mit Hautanalyse der nächste Schritt.
                </p>
                <Button href={mailto(c.email, "Kostenlose Erstberatung")} className="mt-8 w-full">
                  Erstberatung anfragen
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
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
            <Eyebrow index="02">Lash &amp; Brow</Eyebrow>
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

      <section className="section-y">
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
