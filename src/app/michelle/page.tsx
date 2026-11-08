import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { SplitFeature } from "@/components/SplitFeature";
import { EditorialCover } from "@/components/EditorialCover";
import { ChapterIndex } from "@/components/ChapterIndex";
import { StatStrip } from "@/components/MetaRow";
import { Img } from "@/components/Img";
import { BrandMark } from "@/components/BrandMark";
import { asset } from "@/lib/asset";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Michelle Ajouri — Kosmetik · Haut & Darm",
  description:
    "Haut lesen. Darm verstehen. Kosmetik in Neuburg an der Donau: Hautanalyse, Behandlungen und Begleitung mit Plan über Wochen und Monate.",
  openGraph: {
    title: "Michelle Ajouri — Kosmetik · Haut & Darm",
    description: "Haut lesen. Darm verstehen.",
    images: [{ url: asset("/assets/michelle/hero-herbst.jpg"), width: 2000, height: 1406 }],
  },
};

const c = contact.michelle;

export default function MichelleHome() {
  return (
    <>
      <Hero
        size="full"
        image="/assets/michelle/hero-herbst.jpg"
        alt="Michelle Ajouri sitzt lachend im Herbstgras"
        position="70% 60%"
        eyebrow="Kosmetik · Haut & Darm · Neuburg an der Donau"
        title={
          <>
            Haut lesen. <em>Darm verstehen.</em>
          </>
        }
        lead="Ich begleite dich mit Plan über mehrere Wochen und Monate — statt Einzeltermine ins Blaue. Von innen und außen, ruhig und ehrlich."
        actions={
          <>
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href="/michelle/leistungen/" variant="outline">
              Pakete &amp; Preise
            </Button>
          </>
        }
        meta={
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Erstbehandlung: SKIN FIRST · 2 Std. · 249 €</span>
            <span className="text-muted">{c.phone}</span>
          </p>
        }
      />

      {/* Welcome */}
      <section className="section-y">
        <div className="container-x">
          <SplitFeature
            image="/assets/michelle/portal-herbst.jpg"
            alt="Michelle Ajouri lächelnd im Herbstlicht"
            position="50% 40%"
            index="I"
            eyebrow="Über mich"
            title={
              <>
                Hey du, <em>schön, dass du da bist.</em>
              </>
            }
          >
            <p className="lead !max-w-none">
              Ich arbeite nicht mit Einzelterminen ins Blaue, sondern mit einem Plan, der zu dir
              passt. Ich schau mir deine Haut genau an, frag auch nach Schlaf, Stress, Essen und
              Bauch — und begleite dich über mehrere Wochen oder Monate.
            </p>
            <p className="body-copy !max-w-none">
              Warum so? Weil sich die Haut ungefähr alle vier Wochen erneuert. Echte Veränderung
              braucht ein paar dieser Zyklen. Und weil das, was du zu Hause machst, mindestens so
              wichtig ist wie das, was bei mir auf der Liege passiert.
            </p>
            <p className="body-copy !max-w-none text-[0.9rem] text-muted">
              Gut zu wissen: Ich bin Kosmetikerin und mache gerade meine Ausbildung zur
              Heilpraktikerin. Bis zur Erlaubnis arbeite ich kosmetisch und beratend und stelle
              keine Diagnosen. Wenn ich etwas sehe, das eine Ärztin anschauen sollte, sag ich es dir
              ehrlich.
            </p>
            <p className="eyebrow mt-2 text-muted">Michelle Ajouri · Kosmetikerin</p>
          </SplitFeature>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x">
          <PullQuote variant="statement" cite="— Michelle">
            „Du musst nichts perfekt machen. Du musst nur anfangen. Den Rest machen wir zusammen.“
          </PullQuote>
        </div>
      </section>

      {/* Why a plan */}
      <section className="section-y-tight">
        <div className="container-x">
          <p className="eyebrow text-muted">Warum mit Plan</p>
          <StatStrip
            className="mt-6"
            items={[
              { value: "4 Wochen", label: "braucht die Haut ungefähr für eine Erneuerung" },
              { value: "80 Min.", label: "jeder Termin, mit ayurvedischer Gesichtsmassage" },
              { value: "2 Termine", label: "pro Behandlungsblock, Woche 1 und Woche 3" },
              { value: "Fahrplan", label: "gemeinsam festgelegt, so wie deine Haut es braucht" },
            ]}
          />
        </div>
      </section>

      {/* Haut & Darm — brand moment with the mark */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal flex justify-center md:col-span-4">
            <BrandMark className="h-72 w-40 md:h-96 md:w-52" />
          </div>
          <div className="reveal md:col-span-7 md:col-start-6">
            <Eyebrow index="II">Haut &amp; Darm</Eyebrow>
            <h2 className="display-2 mt-6">
              Haut und Bauch <em>reden miteinander.</em>
            </h2>
            <p className="lead mt-8 !max-w-none">
              Darum frag ich dich nicht nur nach deiner Creme, sondern auch nach Schlaf, Stress,
              Essen und Verdauung. Schon bei SKIN FIRST schauen wir auf Haut und Darm als Einheit —
              und in deiner Hautreise bringen wir beides Schritt für Schritt in Balance.
            </p>
            <p className="body-copy mt-6 !max-w-none text-[0.9rem] text-muted">
              Ich stelle keine Diagnosen. Bei starken Beschwerden schick ich dich zu einer Ärztin.
            </p>
          </div>
        </div>
      </section>

      {/* Journey preview */}
      <section className="section-y">
        <div className="container-x">
          <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow index="III">Deine Hautreise</Eyebrow>
              <h2 className="display-2 mt-6">
                Vom ersten Call <em>bis zum Vergleich.</em>
              </h2>
            </div>
            <p className="lead md:col-span-4 md:col-start-9">
              Ich bin alle 9 Wochen für 3 Wochen in Neuburg — das ist dein Behandlungsblock.
              Dazwischen bin ich online für dich da.
            </p>
          </div>
          <ChapterIndex
            layout="row"
            className="mt-12 md:mt-14"
            chapters={[
              {
                numeral: "I",
                title: "Kennenlernen",
                line: "15 bis 30 Minuten per Video. Du erzählst, ich hör zu.",
              },
              {
                numeral: "II",
                title: "Fragebogen & Fotos",
                line: "Am Handy ausfüllen, Hautfotos nach Anleitung — ohne Filter.",
              },
              {
                numeral: "III",
                title: "SKIN FIRST",
                line: "OBSERV-Hautanalyse, die passende Behandlung und dein Plan für zu Hause.",
              },
              {
                numeral: "IV",
                title: "Deine Blöcke",
                line: "Zwei Termine pro Block, Pflege zu Hause — und am Ende der Vergleich.",
              },
            ]}
          />
          <div className="reveal mt-10">
            <Button href="/michelle/hautreise/" variant="text">
              So läuft deine Hautreise <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* Entry points */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <Eyebrow>Entdecken</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Wege zu <em>deiner Haut.</em>
            </h2>
          </div>

          <div className="mt-12 grid items-stretch gap-8 md:mt-16 md:grid-cols-3 md:gap-7">
            <EditorialCover
              href="/michelle/leistungen/"
              eyebrow="Pakete & Preise"
              title="Von SKIN FIRST bis TRANSFORMATION"
              text="SKIN FIRST, drei Hautreise-Pakete mit deinen Reviderm-Produkten für zu Hause — und Lash & Brow."
              image="/assets/michelle/entspannung.jpg"
              position="50% 35%"
              alt="Entspannte Kundin mit geschlossenen Augen auf der Liege"
              aspect="tall"
            />
            <EditorialCover
              href="/michelle/hautreise/"
              eyebrow="Hautreise"
              title="Blöcke, Fahrplan, Fotos"
              text="Wie die Termine liegen, was vor dem Ersttermin wichtig ist und wie du deine Hautfotos machst."
              image="/assets/michelle/maske-berry.jpg"
              position="50% 40%"
              alt="Beerenfarbene Maske auf der Wange"
              aspect="tall"
            />
            <EditorialCover
              href="/michelle/kontakt/"
              eyebrow="Kontakt"
              title="Studio & Termin"
              text="Sternstraße 180 in Neuburg, WhatsApp, Mail — und die Buchung über Beautinda."
              image="/assets/michelle/brauen-detail.jpg"
              position="50% 50%"
              alt="Nahaufnahme gepflegter Haut und Augenbraue"
              aspect="tall"
            />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Img
              src="/assets/michelle/herbst-sprung.jpg"
              alt="Michelle Ajouri springt lachend über eine Herbstwiese"
              position="50% 35%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <h2 className="display-2 mt-6">
              Du musst nur <em>anfangen.</em>
            </h2>
            <p className="lead mt-6">
              Starte mit SKIN FIRST — 2 Stunden mit OBSERV-Hautanalyse, der passenden Behandlung
              und deinem persönlichen Plan für zu Hause. Oder schreib mir einfach, dann finden wir gemeinsam den
              Einstieg.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={c.bookingHref}>
                Termin buchen <Arrow />
              </Button>
              <Button href={c.whatsappHref} variant="outline">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
