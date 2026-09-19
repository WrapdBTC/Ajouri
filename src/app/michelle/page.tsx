import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { TeaserCard } from "@/components/TeaserCard";
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

const skinTypes = [
  ["Trockene Haut", "Feuchtigkeit & Aufbau"],
  ["Sensible Haut", "Beruhigende Pflege"],
  ["Unreine Haut", "Tiefenreinigung"],
  ["Fahle Haut", "Frische & Glow"],
  ["Reife Haut", "Regeneration"],
];

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
        lead="Individuelle Hautanalyse, hochwertige Treatments und ein ganzheitlicher Blick auf deine Haut — persönlich, präzise und mit Liebe zum Detail."
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

      <section className="section-y">
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
            <Eyebrow index="01">Willkommen</Eyebrow>
            <h2 className="display-2 mt-6">
              Beauty ist für mich immer auch <em>Gesundheit.</em>
            </h2>
            <p className="lead mt-8">
              Glamour Treatments ist ein Kosmetikstudio für hochwertige Behandlungen, individuelle Hautpflege
              und präzise Lash &amp; Brow Treatments. Im Mittelpunkt steht ein gepflegtes, natürlich schönes
              Ergebnis, das zu dir passt.
            </p>
            <p className="body-copy mt-5">
              Bevor eine einzige Behandlung beginnt, nehme ich mir Zeit, deine Haut wirklich zu verstehen —
              dein Hautbild, deine Gewohnheiten, dein Ziel. Keine Standardlösung von der Stange.
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

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege in dein <em>Studio.</em>
            </h2>
            <p className="lead mt-6">
              Jede Seite erzählt einen Teil der Geschichte — Treatments, Analyse und der direkte Draht zu mir.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
            <TeaserCard
              href="/michelle/leistungen/"
              eyebrow="Leistungen"
              title="Treatments & Preise"
              text="Aquafacial, Microneedling, Glass Skin, Lash & Brow — Orientierungspreise und der passende Einstieg."
              image="/assets/michelle/03-treatment.jpg"
              position="62% 50%"
              alt="Serum wird mit einer Pipette auf die Wange aufgetragen"
            />
            <TeaserCard
              href="/michelle/analyse/"
              eyebrow="Analyse"
              title="OBSERV & BalanceTest"
              text="Außen sehen, innen mitdenken — die Technologie hinter jeder Empfehlung."
              image="/assets/michelle/04-lash.jpg"
              position="58% 50%"
              alt="Nahaufnahme gelifteter Wimpern und definierter Braue"
            />
            <TeaserCard
              href="/michelle/kontakt/"
              eyebrow="Kontakt"
              title="Studio & Termin"
              text="Adresse, Telefon, WhatsApp — und der Platz für den kommenden Buchungskalender."
              image="/assets/michelle/05-portal.jpg"
              position="50% 50%"
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
              Für deine Haut. <em>Für dein Gefühl.</em>
            </h2>
            <p className="lead mt-6 max-w-lg">
              Starte mit einer kostenlosen Erstberatung — unverbindlich und ganz ohne Druck. Danach finden wir
              gemeinsam den passenden Termin.
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
