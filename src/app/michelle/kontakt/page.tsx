import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { BookingSlot } from "@/components/BookingSlot";
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
        lead="Schreib mir oder ruf an — ich melde mich persönlich, und wir finden gemeinsam den passenden Einstieg."
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
        <div className="container-x grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <Eyebrow>Studio</Eyebrow>
            <h2 className="display-2 mt-6">Glamour Treatments</h2>
            <p className="eyebrow mt-3 text-muted">Michelle Ajouri</p>

            <dl className="mt-10 space-y-6 text-[0.95rem]">
              <div>
                <dt className="eyebrow text-accent-text">Adresse</dt>
                <dd className="mt-1.5 leading-relaxed">
                  {c.street}
                  <br />
                  {c.city}
                </dd>
              </div>
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
      </section>
    </>
  );
}
