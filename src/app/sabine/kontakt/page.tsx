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
    "Vita Sonus — Amalienstr. 60, 86633 Neuburg. Telefon und Terminanfrage bei Sabine Ajouri.",
};

const c = contact.sabine;

const faq = [
  {
    q: "Offenes Studio?",
    a: "Freitag 16:30–18:00 — ohne Anmeldung. Einfach vorbeikommen.",
  },
  {
    q: "Einzeltermin?",
    a: "Nach Absprache. Formular, Anruf oder E-Mail — ich melde mich in Ruhe.",
  },
  {
    q: "Was mitbringen?",
    a: "Dich. Bequeme Kleidung hilft. Den Rest stellt der Raum.",
  },
];

export default function SabineKontakt() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/sabine/05-portal.jpg"
        alt="Vita Sonus Studio-Atmosphäre"
        position="76% 50%"
        eyebrow="Kontakt · Vita Sonus"
        title={
          <>
            Melde dich. <em>Ganz in Ruhe.</em>
          </>
        }
        lead="Ruf an oder schreib mir — ich melde mich persönlich."
        leadClassName="italic font-display !text-[1.15rem] !text-ink/90"
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
              { label: "Ort", value: c.city },
              { label: "Offenes Studio", value: "Freitag 16:30–18:00" },
              { label: "Telefon", value: c.phone },
            ]}
          />

          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
            <div className="reveal border border-line bg-elev p-7 md:col-span-5 md:p-9">
              <Eyebrow>Studio</Eyebrow>
              <h2 className="display-3 mt-4">Vita Sonus</h2>
              <p className="eyebrow mt-2 text-muted">Sabine Ajouri</p>

              <address className="mt-7 space-y-1 not-italic leading-relaxed text-[1.05rem]">
                <p>{c.street}</p>
                <p>{c.city}</p>
              </address>

              <dl className="mt-7 space-y-4 border-t border-line pt-6 text-[0.95rem]">
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

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/sabine/studio/" variant="outline" size="sm">
                  Zum offenen Studio
                </Button>
                <Button href={mapsHref(c.street, c.city)} variant="text" size="sm">
                  Route planen <Arrow />
                </Button>
              </div>
            </div>

            <div className="reveal md:col-span-7">
              <InquiryForm
                to={c.email}
                subject="Anfrage Vita Sonus"
                title="Ganz in Ruhe schreiben."
                eyebrow="Anfrage"
                submitLabel="Nachricht senden"
              />
            </div>
          </div>

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
                    "linear-gradient(135deg, color-mix(in oklab, var(--t-accent) 14%, var(--t-surface)) 0%, var(--t-elev) 50%, color-mix(in oklab, var(--t-ink) 8%, var(--t-deep)) 100%)",
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
              detail="Online-Buchung wird in Kürze freigeschaltet. Bis dahin: Anruf, Formular oder E-Mail — ich melde mich persönlich. Freitags bist du auch ohne Termin willkommen."
            />
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
