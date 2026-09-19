import type { Metadata } from "next";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { InquiryForm } from "@/components/InquiryForm";
import { contact, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anfrage",
  description:
    "Anfrage an Atelier Isabelle — Fine-Line Tattoos. Motiv, Stelle und Größe per E-Mail.",
};

const c = contact.isabelle;

export default function IsabelleAnfrage() {
  return (
    <>
      <section className="relative isolate border-b border-line">
        <div className="container-x pb-8 pt-20 md:pb-10 md:pt-24">
          <div className="anim-rise max-w-2xl">
            <Eyebrow>Anfrage · Atelier Isabelle</Eyebrow>
            <h1 className="display-2 mt-5">
              Erzähl von <em>deiner Idee.</em>
            </h1>
            <p className="lead anim-rise anim-rise-1 mt-5 !max-w-[36ch] !text-[1.1rem] italic font-display !text-ink/90">
              Motiv. Stelle. Größe. Mehr brauche ich nicht.
            </p>
          </div>
        </div>
      </section>

      {/* Single-column form — balanced on all breakpoints */}
      <section className="section-y-tight !pt-8 md:!pt-10">
        <div className="container-x max-w-2xl">
          <div className="reveal mb-8 grid gap-5 border border-line bg-elev p-6 sm:grid-cols-3 sm:gap-6 md:p-7 text-[0.9rem]">
            <div>
              <p className="eyebrow text-muted">Termine</p>
              <p className="mt-1.5 font-display text-xl">Auf Anfrage</p>
            </div>
            <div>
              <p className="eyebrow text-muted">E-Mail</p>
              <p className="mt-1.5">
                <a href={mailto(c.email)} className="hover:underline">
                  {c.email}
                </a>
              </p>
            </div>
            <div>
              <p className="eyebrow text-muted">Walk-ins</p>
              <p className="mt-1.5 text-muted">Keine</p>
            </div>
          </div>

          {c.emailIsPlaceholder && (
            <p className="reveal mb-6 text-[0.8rem] leading-relaxed text-muted">
              Die E-Mail-Adresse ist ein Platzhalter und wird vor dem Livegang durch die echte
              Atelier-Adresse ersetzt.
            </p>
          )}

          <InquiryForm
            to={c.email}
            subject="Anfrage Atelier Isabelle"
            eyebrow="Anfrage"
            title="Was soll die Linie erzählen?"
            submitLabel="Per E-Mail senden"
            note="Visuelle Vorlage. Deine Anfrage öffnet dein E-Mail-Programm mit vorausgefülltem Betreff und Text."
            fields={[
              { name: "name", label: "Name", placeholder: "Dein Name", required: true },
              {
                name: "email",
                label: "E-Mail",
                type: "email",
                placeholder: "name@beispiel.de",
                required: true,
              },
              {
                name: "motiv",
                label: "Motiv",
                placeholder: "Kurze Beschreibung deiner Idee",
                required: true,
              },
              {
                name: "stelle",
                label: "Stelle & Größe",
                placeholder: "z. B. Unterarm, ca. 8 cm",
                required: true,
              },
              {
                name: "message",
                label: "Nachricht",
                type: "textarea",
                placeholder: "Alles, was sonst noch wichtig ist",
              },
            ]}
          />

          <div className="mt-8">
            <Button href="/isabelle/galerie/" variant="text">
              Zurück zur Galerie <Arrow />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
