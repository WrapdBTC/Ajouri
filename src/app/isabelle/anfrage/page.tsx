import type { Metadata } from "next";
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
      {/* Almost blank luxury — confidence through emptiness */}
      <section className="relative isolate">
        <div className="container-x flex min-h-[40svh] flex-col justify-end pb-12 pt-28 md:min-h-[48svh] md:pb-16 md:pt-36">
          <div className="anim-rise max-w-2xl">
            <Eyebrow>Anfrage · Atelier Isabelle</Eyebrow>
            <h1 className="display-1 mt-6">
              Erzähl von <em>deiner Idee.</em>
            </h1>
            <p className="lead anim-rise anim-rise-1 mt-8 !max-w-[32ch] !text-[1.15rem] italic font-display !text-ink/85">
              Motiv. Stelle. Größe. Mehr brauche ich nicht.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y-tight">
        <div className="container-x grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Sparse contact column */}
          <div className="reveal md:col-span-4">
            <p className="eyebrow text-muted">Termine</p>
            <p className="font-display mt-3 text-2xl leading-tight">Auf Anfrage</p>
            <p className="mt-2 text-[0.9rem] text-muted">Keine Walk-ins · Keine Telefonnummer</p>

            <p className="eyebrow mt-12 text-muted">E-Mail</p>
            <p className="mt-3">
              <a href={mailto(c.email)} className="font-display text-xl hover:underline">
                {c.email}
              </a>
            </p>

            {c.emailIsPlaceholder && (
              <p className="mt-8 max-w-xs text-[0.8rem] leading-relaxed text-muted">
                Die E-Mail-Adresse ist ein Platzhalter und wird vor dem Livegang durch die echte
                Atelier-Adresse ersetzt.
              </p>
            )}
          </div>

          {/* Luxury form panel — lots of emptiness */}
          <div className="reveal md:col-span-7 md:col-start-6">
            <form
              action={inquire}
              className="border border-line bg-elev px-7 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16"
            >
              <p className="eyebrow text-accent-text">Anfrage</p>
              <p className="font-display mt-6 text-[2rem] leading-[1.1] md:text-[2.5rem]">
                Was soll die Linie erzählen?
              </p>

              <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
                <label className="block">
                  <span className="eyebrow text-muted">Name</span>
                  <span className="mt-3 block border-b border-line bg-transparent px-0 py-4 text-[0.95rem] text-muted/55">
                    Dein Name
                  </span>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted">Motiv</span>
                  <span className="mt-3 block border-b border-line bg-transparent px-0 py-4 text-[0.95rem] text-muted/55">
                    Kurze Beschreibung deiner Idee
                  </span>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted">Stelle &amp; Größe</span>
                  <span className="mt-3 block border-b border-line bg-transparent px-0 py-4 text-[0.95rem] text-muted/55">
                    z. B. Unterarm, ca. 8 cm
                  </span>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted">Nachricht</span>
                  <span className="mt-3 block min-h-[4.5rem] border-b border-line bg-transparent px-0 py-4 text-[0.95rem] text-muted/55">
                    Alles, was sonst noch wichtig ist
                  </span>
                </label>
              </div>

              <p className="mt-12 text-[0.8rem] leading-relaxed text-muted">
                Visuelle Vorlage. Deine Anfrage öffnet dein E-Mail-Programm mit vorausgefülltem
                Betreff.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={inquire}>
                  Per E-Mail senden <Arrow />
                </Button>
                <Button href="/isabelle/galerie/" variant="text">
                  Zurück zur Galerie
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
