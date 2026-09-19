import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { BookingSlot } from "@/components/BookingSlot";
import { MetaRow } from "@/components/MetaRow";
import { contact, mailto, mapsHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Glamour Treatments — Franz-Hoffmann-Str. 29, 86633 Neuburg. Telefon, WhatsApp und Terminanfrage bei Michelle Ajouri.",
};

const c = contact.michelle;

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

      <section className="section-y">
        <div className="container-x">
          <MetaRow
            items={[
              { label: "Adresse", value: c.street },
              { label: "Ort", value: "Neuburg a. d. Donau" },
              { label: "Öffnung", value: c.hours },
              { label: "Telefon", value: c.phone },
            ]}
          />

          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12">
            {/* Elegant address panel */}
            <div className="reveal border border-line bg-elev p-9 md:col-span-5 md:p-12">
              <Eyebrow>Studio</Eyebrow>
              <h2 className="display-2 mt-5">Glamour Treatments</h2>
              <p className="eyebrow mt-3 text-muted">Michelle Ajouri</p>

              <address className="mt-10 space-y-1 not-italic leading-relaxed text-[1.05rem]">
                <p>{c.street}</p>
                <p>{c.city}</p>
              </address>

              <dl className="mt-10 space-y-5 border-t border-line pt-8 text-[0.95rem]">
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
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={c.whatsappHref} variant="outline" size="sm">
                  WhatsApp
                </Button>
                <Button href={mapsHref(c.street, c.city)} variant="text" size="sm">
                  Route planen <Arrow />
                </Button>
              </div>
            </div>

            <div className="reveal md:col-span-6 md:col-start-7">
              <BookingSlot
                detail="Online-Buchung wird in Kürze freigeschaltet. Bis dahin: Anruf, WhatsApp oder E-Mail — ich melde mich persönlich."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={mailto(c.email, "Terminanfrage")} variant="outline">
                  Per E-Mail anfragen
                </Button>
                <Button href={c.phoneHref} variant="text">
                  {c.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
