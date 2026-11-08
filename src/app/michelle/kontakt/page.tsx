import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { InquiryForm } from "@/components/InquiryForm";
import { MetaRow } from "@/components/MetaRow";
import { contact, mailto, mapsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Michelle Ajouri · Kosmetik, Haut & Darm — Sternstraße 180, 86633 Neuburg. WhatsApp, Telefon, Mail und Buchung über Beautinda.",
};

const c = contact.michelle;

const faq = [
  {
    q: "Wie buche ich?",
    a: "Termine buchst du über Beautinda. Oder schreib mir per WhatsApp, Mail oder über das Formular — ich melde mich persönlich.",
  },
  {
    q: "Wann bist du in Neuburg?",
    a: "Alle 9 Wochen für 3 Wochen — das sind die Behandlungsblöcke. Dazwischen bin ich in Kroatien und online für dich da.",
  },
  {
    q: "Verschieben?",
    a: "Bis 24 Stunden vorher kostenlos. Später oder nicht erschienen: 30 % des anteiligen Terminpreises.",
  },
  {
    q: "Parken?",
    a: "Sag bei der Terminanfrage kurz Bescheid — ich beschreibe dir gern den Weg zum neuen Studio in der Sternstraße.",
  },
];

export default function MichelleKontakt() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/michelle/brauen-detail.jpg"
        alt="Nahaufnahme gepflegter Haut und Augenbraue"
        position="50% 45%"
        eyebrow="Kontakt · Kosmetik · Haut & Darm"
        title={
          <>
            Für deine Haut. <em>Für dein Gefühl.</em>
          </>
        }
        lead="Schreib mir oder ruf an — ich antworte dir so schnell wie möglich, auch aus meinen Kroatien-Wochen. Ich freu mich auf dich."
        actions={
          <>
            <Button href={c.bookingHref}>
              Termin buchen <Arrow />
            </Button>
            <Button href={c.phoneHref} variant="outline">
              Anrufen
            </Button>
          </>
        }
      />

      <section className="section-y-tight">
        <div className="container-x">
          <MetaRow
            items={[
              { label: "Adresse", value: c.street },
              { label: "Ort", value: c.city },
              { label: "Buchung", value: "Über Beautinda" },
              { label: "Telefon", value: c.phone },
            ]}
          />

          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
            <div className="reveal border border-line bg-elev p-5 sm:p-7 md:col-span-5 md:p-9">
              <Eyebrow>Studio</Eyebrow>
              <h2 className="display-3 mt-4">Michelle Ajouri</h2>
              <p className="eyebrow mt-2 text-muted">Kosmetik · Haut &amp; Darm</p>

              <address className="mt-7 space-y-1 not-italic leading-relaxed text-[1.05rem]">
                <p>{c.street}</p>
                <p>{c.city}</p>
              </address>

              <dl className="mt-7 space-y-4 border-t border-line pt-6 text-[0.95rem]">
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
                  <dt className="eyebrow text-accent-text">Instagram</dt>
                  <dd className="mt-1.5">
                    <a href={c.instagramHref} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      {c.instagram}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-accent-text">Im Studio</dt>
                  <dd className="mt-1.5">{c.hours}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={c.whatsappHref} variant="outline" size="sm">
                  WhatsApp
                </Button>
                <Button href={mapsHref(c.street, c.city)} variant="text" size="sm">
                  Route planen <Arrow />
                </Button>
              </div>
            </div>

            <div className="reveal md:col-span-7">
              <InquiryForm
                to={c.email}
                subject="Anfrage Michelle Ajouri · Haut & Darm"
                title="Kurze Nachricht reicht."
                eyebrow="Anfrage"
                submitLabel="Nachricht senden"
              />
            </div>
          </div>

          {/* Map placeholder strip */}
          <div className="reveal mt-8 overflow-hidden border border-line md:mt-10">
            <div className="grid md:grid-cols-12">
              <div className="flex min-h-[9rem] flex-col justify-between bg-surface p-6 md:col-span-5 md:min-h-[11rem] md:p-8">
                <div>
                  <p className="eyebrow text-accent-text">Standort</p>
                  <p className="font-display mt-3 text-2xl leading-tight">{c.street}</p>
                  <p className="mt-1 text-[0.9rem] text-muted">{c.city}</p>
                </div>
                <Button href={mapsHref(c.street, c.city)} variant="text" size="sm" className="mt-6">
                  In Maps öffnen <Arrow />
                </Button>
              </div>
              <div
                aria-hidden
                className="relative min-h-[9rem] bg-elev md:col-span-7 md:min-h-[11rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, color-mix(in oklab, var(--t-accent) 12%, var(--t-surface)) 0%, var(--t-elev) 48%, color-mix(in oklab, var(--t-ink) 6%, var(--t-surface)) 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="eyebrow text-muted">Karte · folgt mit Buchung</span>
                </div>
                <div
                  aria-hidden
                  className="absolute inset-6 border border-dashed border-line/80"
                />
              </div>
            </div>
          </div>

          <div className="reveal mt-8 md:mt-10">
            <div
              id="buchen"
              className="scroll-mt-28 flex flex-col gap-6 border border-line bg-deep p-7 text-deep-ink md:flex-row md:items-center md:justify-between md:p-10"
            >
              <div>
                <p className="eyebrow text-accent">Online buchen</p>
                <p className="display-3 mt-3">Deinen Termin buchst du über Beautinda.</p>
                <p className="mt-3 max-w-xl text-[0.95rem] opacity-80">
                  SKIN FIRST, die Pakete und Lash &amp; Brow — mit Onlinezahlung, auf Wunsch in
                  Raten über Klarna oder PayPal.
                </p>
              </div>
              <Button href={c.bookingHref} className="shrink-0">
                Zu Beautinda <Arrow />
              </Button>
            </div>
          </div>

          <div className="reveal mt-10 border-t border-line pt-8 md:mt-12 md:pt-10">
            <Eyebrow>Kurz gefragt</Eyebrow>
            <ul className="mt-6 grid items-stretch gap-6 sm:grid-cols-3 sm:gap-8">
              {faq.map((item) => (
                <li key={item.q} className="flex h-full flex-col">
                  <p className="font-display text-xl leading-snug">{item.q}</p>
                  <p className="body-copy mt-2 flex-1 !max-w-none text-[0.9rem]">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
