import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Img } from "@/components/Img";
import { Arrow, Button } from "@/components/Button";
import { SectionIntro, Eyebrow } from "@/components/SectionIntro";
import { PriceRow } from "@/components/PriceRow";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pakete & Preise",
  description:
    "SKIN FIRST, SKIN START, SKIN RENEWAL, SKIN TRANSFORMATION sowie Korean Lash Lift und Brow Lift bei Michelle Ajouri in Neuburg — direkt buchbar über Beautinda.",
};

const c = contact.michelle;

type Pkg = {
  name: string;
  claim: string;
  sessions: string;
  duration: string;
  price: string;
  popular?: boolean;
  text: string;
  features: string[];
};

const packages: Pkg[] = [
  {
    name: "SKIN START",
    claim: "Dein sanfter Einstieg",
    sessions: "4 Termine à 80 Min.",
    duration: "rund 3 Monate",
    price: "1.890 €",
    text: "Dein sanfter Einstieg in eine Hautreise mit Begleitung. Behandlungen, die aufeinander aufbauen — und der Blick auf Haut und Darm zusammen.",
    features: [
      "4 Behandlungen, die aufeinander aufbauen",
      "5 Reviderm-Produkte für zu Hause: Reinigung, Toner, Serum, Creme",
      "Haut und Darm im Blick",
      "Video-Check-ins zwischen den Terminen gratis",
    ],
  },
  {
    name: "SKIN RENEWAL",
    claim: "Richtig ankommen",
    sessions: "6 Termine à 80 Min.",
    duration: "rund 5 Monate",
    price: "2.390 €",
    popular: true,
    text: "Für alle, die richtig ankommen wollen. Deine Haut hat Zeit, sich nachhaltig zu verändern — Schritt für Schritt, von innen und außen.",
    features: [
      "6 Behandlungen, angepasst an deine Fortschritte",
      "Deine Haut gestärkt von innen und außen",
      "5 Reviderm-Produkte inklusive",
      "Ich bin auch zwischen den Terminen für dich da",
    ],
  },
  {
    name: "SKIN TRANSFORMATION",
    claim: "Deine ganz große Hautreise",
    sessions: "10 Termine à 80 Min.",
    duration: "rund 9 Monate",
    price: "3.490 €",
    text: "Neun Monate intensive Begleitung, in denen wir Haut und Darm in Balance bringen und dein Ergebnis langfristig festigen. Für dich, wenn du es von Herzen ernst meinst.",
    features: [
      "10 Behandlungen, perfekt aufeinander abgestimmt",
      "Haut und Darm in Balance",
      "5 Reviderm-Produkte für zu Hause",
      "Volle Begleitung mit Video-Check-ins",
      "Alle Unterlagen als PDF",
    ],
  },
];

export default function MichellePakete() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/michelle/entspannung.jpg"
        alt="Entspannte Kundin mit geschlossenen Augen auf der Liege"
        position="50% 35%"
        eyebrow="Pakete & Preise · direkt buchbar"
        title={
          <>
            Deine <em>Hautreise.</em>
          </>
        }
        lead="Starte mit SKIN FIRST, geh mit einem Paket den ganzen Weg — oder gönn dir Lash & Brow. Alles direkt über Beautinda buchbar."
        actions={
          <>
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href="/michelle/hautreise/" variant="outline">
              So läuft&apos;s
            </Button>
          </>
        }
      />

      {/* SKIN FIRST */}
      <section className="section-y-tight">
        <div className="container-x grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div className="reveal md:col-span-6">
            <Eyebrow index="I">Erstbehandlung</Eyebrow>
            <h2 className="display-2 mt-6">
              SKIN <em>FIRST.</em>
            </h2>
            <p className="lead mt-6 !max-w-lg">
              Du stehst vor dem Spiegel und fragst dich, warum deine Haut nicht zur Ruhe kommt? Dann
              ist SKIN FIRST dein Moment: ganzheitliche Hautgesundheit in 2 Stunden.
            </p>
            <p className="body-copy mt-4 !max-w-lg">
              Mit dem OBSERV, einem professionellen Hautanalysegerät, machen wir sichtbar, was dein
              Auge allein nicht sieht: Pigmente, Feuchtigkeit, Talg, Rötungen, Poren und erste
              Zeichen der Hautalterung. Du siehst deine Haut selbst auf dem Bildschirm — und ich muss
              nicht raten.
            </p>
            <ul className="mt-6 space-y-2 text-[0.98rem]">
              {[
                "Deine persönliche OBSERV-Hautanalyse",
                "Die passende Behandlung für deine Haut, alles inklusive — ob Aquafacial, Microneedling, Peeling, Galvanik oder Mikroströme",
                "Der Blick auf Haut und Darm als Einheit",
                "Dein persönlicher Plan für zu Hause",
                "Ganz viel Raum für deine Fragen",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="text-accent-text">·</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal md:col-span-5 md:col-start-8">
            <div className="border border-line bg-elev p-8 md:p-10">
              <p className="eyebrow text-accent-text">SKIN FIRST · 2 Std.</p>
              <p className="font-display mt-4 text-[3.25rem] leading-none tabular-nums">249 €</p>
              <p className="body-copy mt-4 !max-w-none text-[0.95rem]">
                Keine versteckten Kosten, keine Überraschungen — die Behandlung ist im Preis
                inklusive.
              </p>
              <Button href={c.bookingHref} className="mt-8 w-full">
                SKIN FIRST buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionIntro
            layout="split"
            index="II"
            eyebrow="Hautreise"
            title={
              <>
                Drei Pakete, <em>ein Weg.</em>
              </>
            }
            lead="Jeder Termin dauert 80 Minuten. Deine fünf Reviderm-Pflegeprodukte für zu Hause sind in jedem Paket schon dabei."
          />

          <div className="mt-12 grid items-stretch gap-6 md:mt-14 md:grid-cols-3 md:gap-6">
            {packages.map((p) => (
              <article
                key={p.name}
                className={`reveal relative flex h-full flex-col border p-7 md:p-8 ${
                  p.popular ? "border-accent bg-deep text-deep-ink" : "border-line bg-elev"
                }`}
              >
                {p.popular && (
                  <span className="eyebrow absolute -top-3 left-7 bg-accent px-3 py-1 text-[0.6rem] text-deep">
                    Beliebt
                  </span>
                )}
                <p className={`eyebrow ${p.popular ? "text-accent" : "text-accent-text"}`}>
                  {p.claim}
                </p>
                <h3 className="font-display mt-3 text-[1.9rem] leading-none tracking-[0.03em]">
                  {p.name}
                </h3>
                <p className={`mt-2 text-[0.9rem] ${p.popular ? "opacity-75" : "text-muted"}`}>
                  {p.sessions} · {p.duration}
                </p>
                <p className="font-display mt-6 text-[2.6rem] leading-none tabular-nums">{p.price}</p>
                <p className={`mt-5 text-[0.95rem] leading-relaxed ${p.popular ? "opacity-85" : "body-copy"}`}>
                  {p.text}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-3 border-t pt-6 text-[0.95rem] ${
                    p.popular ? "border-white/15" : "border-line"
                  }`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span aria-hidden className={p.popular ? "text-accent" : "text-accent-text"}>
                        ·
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={c.bookingHref}
                  variant={p.popular ? "solid" : "outline"}
                  className="mt-8 w-full"
                >
                  {p.name} buchen
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Home care */}
      <section className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-12 md:items-center md:gap-14">
          <div className="reveal ken-wrap relative aspect-[4/5] overflow-hidden md:col-span-5">
            <Img
              src="/assets/michelle/heimpflege-serum.jpg"
              alt="Seren mit Pipette auf einer Holzscheibe"
              position="50% 55%"
              className="ken-img absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <Eyebrow index="III">Deine Heimpflege</Eyebrow>
            <h2 className="display-2 mt-6">
              Zu Hause passiert <em>die Hälfte.</em>
            </h2>
            <p className="lead mt-6 !max-w-none">
              In jedem Paket bekommst du deine fünf Reviderm-Pflegeprodukte für zu Hause, passend zu
              deiner Haut: Reinigung, Toner, Serum und deine Creme. Was du zu Hause machst, ist
              mindestens so wichtig wie das, was bei mir auf der Liege passiert.
            </p>
          </div>
        </div>
      </section>

      {/* Lash & Brow */}
      <section className="section-y-tight bg-surface">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-4">
            <Eyebrow index="IV">Lash &amp; Brow</Eyebrow>
            <h2 className="display-2 mt-6">
              Ausdruck, <em>ganz natürlich.</em>
            </h2>
            <p className="lead mt-6">
              Schwung für deine eigenen Wimpern und volle, definierte Brauen — ganz ohne Extensions
              und ohne tägliches Styling.
            </p>
          </div>
          <ul className="divide-y divide-line border-b border-line md:col-span-7 md:col-start-6">
            <PriceRow
              name="Korean Lash Lift"
              time="60 Min."
              detail="Besonders sanftes Lifting vom Ansatz an: optisch längere, geschwungene, definierte Wimpern. Inklusive Wimpern färben."
              price="75 €"
            />
            <PriceRow
              name="Brow Lift"
              time="60 Min."
              detail="Die Härchen werden aufgerichtet und fixiert — voller, definierter, harmonischer. Inklusive Färben und präzisem Zupfen."
              price="65 €"
            />
            <PriceRow
              name="Korean Lash Lift & Brow Lift"
              time="80 Min."
              detail="Beides in einem Termin."
              price="125 €"
            />
          </ul>
        </div>
      </section>

      {/* Booking */}
      <section className="section-y-tight">
        <div className="container-x grid gap-8 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-7">
            <p className="eyebrow text-accent-text">Buchen &amp; bezahlen</p>
            <p className="display-3 mt-3">Alles direkt über Beautinda buchbar.</p>
            <p className="body-copy mt-3 !max-w-none">
              Sichere Onlinezahlung, auf Wunsch in Raten. Fragen vorher? Schreib mir einfach per
              WhatsApp.
            </p>
          </div>
          <div className="reveal flex flex-wrap gap-3 md:col-span-4 md:col-start-9 md:justify-end">
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href={c.whatsappHref} variant="outline">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
