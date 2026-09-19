import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { BookingSlot } from "@/components/BookingSlot";
import { InquiryForm } from "@/components/InquiryForm";
import { MetaRow } from "@/components/MetaRow";
import { contact, mailto, mapsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Glamour Treatments — Franz-Hoffmann-Str. 29, 86633 Neuburg. Telefon, WhatsApp und Terminanfrage bei Michelle Ajouri.",
};

const c = contact.michelle;

const faq = [
  {
    q: "Wie buche ich?",
    a: "Online-Kalender folgt. Bis dahin: Anruf, WhatsApp oder das Formular — ich melde mich persönlich.",
  },
  {
    q: "Ersttermin?",
    a: "Ideal mit Hautanalyse. Unsicher? Kostenlose Erstberatung vorab.",
  },
  {
    q: "Parken?",
    a: "In der Franz-Hoffmann-Straße und Umgebung — kurze Wege zum Studio.",
  },
];

export default function MichelleKontakt() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/michelle/05-portal.jpg"
        alt="Studio-Atmosphäre Glamour Treatments"
        position="50% 50%"
        eyebrow="Kontakt · Glamour Treatments"
        title={
          <>
            Für deine Haut. <em>Für dein Gefühl.</em>
          </>
        }
        lead="Schreib mir oder ruf an — ich melde mich persönlich, und wir finden den passenden Einstieg."
        actions={
          <>
            <Button href="#buchen">
              Termin wählen <Arrow />
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
              { label: "Ort", value: "Neuburg a. d. Donau" },
              { label: "Öffnung", value: c.hours },
              { label: "Telefon", value: c.phone },
            ]}
          />

          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
            <div className="reveal border border-line bg-elev p-7 md:col-span-5 md:p-9">
              <Eyebrow>Studio</Eyebrow>
              <h2 className="display-3 mt-4">Glamour Treatments</h2>
              <p className="eyebrow mt-2 text-muted">Michelle Ajouri</p>

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
                  <dt className="eyebrow text-accent-text">Öffnungszeiten</dt>
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
                subject="Anfrage Glamour Treatments"
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
                  <p className="font-display mt-3 text-2xl leading-tight">
                    Franz-Hoffmann-Str. 29
                  </p>
                  <p className="mt-1 text-[0.9rem] text-muted">86633 Neuburg an der Donau</p>
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
            <BookingSlot
              detail="Online-Buchung wird in Kürze freigeschaltet. Bis dahin: Anruf, WhatsApp, Formular oder E-Mail — ich melde mich persönlich."
            />
          </div>

          <div className="reveal mt-10 border-t border-line pt-8 md:mt-12 md:pt-10">
            <Eyebrow>Kurz gefragt</Eyebrow>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
              {faq.map((item) => (
                <li key={item.q}>
                  <p className="font-display text-xl leading-snug">{item.q}</p>
                  <p className="body-copy mt-2 !max-w-none text-[0.9rem]">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
