import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Arrow, Button } from "@/components/Button";
import { Eyebrow } from "@/components/SectionIntro";
import { contact, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anfrage",
  description:
    "Anfrage an Atelier Isabelle — Fine-Line Tattoos. Motiv, Stelle und Größe per E-Mail.",
};

const c = contact.isabelle;
const inquire = mailto(c.email, "Anfrage Atelier Isabelle");

export default function IsabelleAnfrage() {
  return (
    <>
      <Hero
        size="page"
        image="/assets/isabelle/06-portal.jpg"
        alt="Atelier-Atmosphäre"
        position="50% 50%"
        eyebrow="Anfrage · Atelier Isabelle"
        title={
          <>
            Erzähl von <em>deiner Idee.</em>
          </>
        }
        lead="Motiv, Stelle, ungefähre Größe — schreib mir. Termine nur auf Anfrage, keine Walk-ins, keine Telefonnummer."
        actions={
          <>
            <Button href={inquire}>
              Anfrage senden <Arrow />
            </Button>
            <Button href="/isabelle/galerie/" variant="outline">
              Galerie
            </Button>
          </>
        }
      />

      <section className="section-y">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <Eyebrow>So erreichst du mich</Eyebrow>
            <h2 className="display-2 mt-6">Atelier Isabelle</h2>
            <p className="eyebrow mt-3 text-muted">Isabelle Ajouri · Fine-Line</p>

            <dl className="mt-10 space-y-6 text-[0.95rem]">
              <div>
                <dt className="eyebrow text-accent-text">Termine</dt>
                <dd className="mt-1.5">Auf Anfrage · keine Telefonnummer</dd>
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

            {c.emailIsPlaceholder && (
              <p className="mt-8 border-t border-line pt-6 text-[0.85rem] leading-relaxed text-muted">
                <span className="font-display block text-lg text-ink not-italic">Hinweis</span>
                Die E-Mail-Adresse ist ein Platzhalter und wird vor dem Livegang durch die echte
                Atelier-Adresse ersetzt.
              </p>
            )}
          </div>

          <div className="reveal md:col-span-6 md:col-start-7">
            {/* Visual-only inquiry form — submits via mailto */}
            <form
              action={inquire}
              className="border border-line bg-elev p-8 md:p-10"
            >
              <p className="eyebrow text-accent-text">Anfrage</p>
              <p className="font-display mt-4 text-[1.75rem] leading-tight md:text-[2rem]">
                Was soll die Linie erzählen?
              </p>

              <div className="mt-8 space-y-5">
                <label className="block">
                  <span className="eyebrow text-muted">Name</span>
                  <span className="mt-2 block border-b border-line bg-transparent px-0 py-3 text-[0.95rem] text-muted/70">
                    Dein Name
                  </span>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted">Motiv</span>
                  <span className="mt-2 block border-b border-line bg-transparent px-0 py-3 text-[0.95rem] text-muted/70">
                    Kurze Beschreibung deiner Idee
                  </span>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted">Stelle &amp; Größe</span>
                  <span className="mt-2 block border-b border-line bg-transparent px-0 py-3 text-[0.95rem] text-muted/70">
                    z. B. Unterarm, ca. 8 cm
                  </span>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted">Nachricht</span>
                  <span className="mt-2 block min-h-[5rem] border-b border-line bg-transparent px-0 py-3 text-[0.95rem] text-muted/70">
                    Alles, was sonst noch wichtig ist
                  </span>
                </label>
              </div>

              <p className="body-copy mt-8 text-[0.85rem]">
                Das Formular ist eine visuelle Vorlage. Deine Anfrage öffnet dein E-Mail-Programm mit
                vorausgefülltem Betreff — oder kopiere die Adresse direkt.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={inquire}>
                  Per E-Mail senden <Arrow />
                </Button>
                <Button href={mailto(c.email)} variant="text">
                  {c.email}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
