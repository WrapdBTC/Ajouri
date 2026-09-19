import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { SplitFeature } from "@/components/SplitFeature";
import { EditorialCover } from "@/components/EditorialCover";
import { StatStrip } from "@/components/MetaRow";
import { asset } from "@/lib/asset";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Michelle Ajouri — Glamour Treatments",
  description:
    "Hautanalyse mit OBSERV 320x, Facials und Lash & Brow in Neuburg an der Donau. Erst verstehen, dann behandeln.",
  openGraph: {
    title: "Michelle Ajouri — Glamour Treatments",
    description: "Schönheit beginnt mit Verstehen.",
    images: [{ url: asset("/assets/michelle/01-hero.jpg"), width: 1280, height: 720 }],
  },
};

const c = contact.michelle;

export default function MichelleHome() {
  return (
    <>
      <Hero
        size="full"
        image="/assets/michelle/01-hero.jpg"
        alt="Helle Behandlungssuite mit Liege, Analysegerät und goldenen Details"
        position="58% 50%"
        eyebrow="Glamour Treatments · Neuburg an der Donau"
        title={
          <>
            Schönheit beginnt mit <em>Verstehen.</em>
          </>
        }
        lead="Individuelle Hautanalyse, ausgewählte Treatments und ein ruhiger Blick auf deine Haut — präzise, persönlich, ohne Eile."
        actions={
          <>
            <Button href="/michelle/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href="/michelle/leistungen/" variant="outline">
              Leistungen
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

      {/* Welcome — cinematic split */}
      <section className="section-y">
        <div className="container-x">
          <SplitFeature
            image="/assets/michelle/02-portrait.jpg"
            alt="Michelle Ajouri, Hautexpertin"
            position="46% 28%"
            index="I"
            eyebrow="Willkommen"
            title={
              <>
                Beauty ist für mich immer auch <em>Gesundheit.</em>
              </>
            }
          >
            <p className="lead !max-w-none">
              Glamour Treatments ist ein Studio für hochwertige Behandlungen, individuelle Hautpflege
              und präzise Lash &amp; Brow. Im Mittelpunkt steht ein gepflegtes, natürlich schönes
              Ergebnis — das zu dir passt.
            </p>
            <p className="body-copy !max-w-none">
              Bevor eine Behandlung beginnt, nehme ich mir Zeit, deine Haut zu verstehen: Hautbild,
              Gewohnheiten, Ziel. Keine Standardlösung von der Stange.
            </p>
            <p className="eyebrow mt-2 text-muted">Michelle Ajouri · Hautexpertin</p>
          </SplitFeature>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x">
          <PullQuote variant="statement">
            „Jede Haut erzählt ihre eigene Geschichte. Ich höre zu, analysiere präzise und behandle
            individuell.“
          </PullQuote>
        </div>
      </section>

      {/* Skin types as quiet meta */}
      <section className="section-y-tight">
        <div className="container-x">
          <p className="eyebrow text-muted">Für jeden Hauttyp die passende Richtung</p>
          <StatStrip
            className="mt-6"
            items={[
              { value: "Trocken", label: "Feuchtigkeit & Aufbau" },
              { value: "Sensibel", label: "Beruhigende Pflege" },
              { value: "Unrein", label: "Tiefenreinigung" },
              { value: "Fahl", label: "Frische & Glow" },
              { value: "Reif", label: "Regeneration" },
            ]}
          />
        </div>
      </section>

      {/* Editorial covers — not equal TeaserCards */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege in dein <em>Studio.</em>
            </h2>
            <p className="lead mt-6">
              Treatments, Analyse und Kontakt — jeweils als eigene Geschichte, nicht als Katalog.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-8 md:mt-16 md:grid-cols-3 md:gap-7">
            <EditorialCover
              href="/michelle/leistungen/"
              eyebrow="Leistungen"
              title="Treatments & Preise"
              text="Aquafacial, Microneedling, Glass Skin, Lash & Brow — Orientierungspreise und der passende Einstieg."
              image="/assets/michelle/03-treatment.jpg"
              position="62% 50%"
              alt="Serum auf der Wange"
              aspect="tall"
            />
            <EditorialCover
              href="/michelle/analyse/"
              eyebrow="Analyse"
              title="OBSERV & BalanceTest"
              text="Außen sehen, innen mitdenken — die Technologie hinter jeder Empfehlung."
              image="/assets/michelle/04-lash.jpg"
              position="58% 50%"
              alt="Geliftete Wimpern"
              aspect="tall"
            />
            <EditorialCover
              href="/michelle/kontakt/"
              eyebrow="Kontakt"
              title="Studio & Termin"
              text="Adresse, Telefon, WhatsApp — und der Platz für den Buchungskalender."
              image="/assets/michelle/05-portal.jpg"
              position="50% 50%"
              aspect="tall"
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-end">
          <div className="reveal md:col-span-7">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <h2 className="display-2 mt-6">
              Für deine Haut. <em>Für dein Gefühl.</em>
            </h2>
            <p className="lead mt-6">
              Starte mit einer kostenlosen Erstberatung — unverbindlich. Danach finden wir den
              passenden Termin.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <Button href="/michelle/kontakt/#buchen">
              Termin wählen <Arrow />
            </Button>
            <Button href={c.phoneHref} variant="outline">
              Anrufen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
