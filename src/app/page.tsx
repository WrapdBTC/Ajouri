import NextLink from "next/link";
import { PageShell } from "@/components/PageShell";
import { Img } from "@/components/Img";
import { Arrow } from "@/components/Button";
import { Eyebrow, SectionIntro } from "@/components/SectionIntro";
import { PullQuote } from "@/components/PullQuote";
import { contact, family, mailto } from "@/lib/site";

const principles = [
  {
    numeral: "I",
    title: "Zeit statt Takt",
    text: "Keine Termine im Minutentakt. Wer kommt, bekommt Aufmerksamkeit — nicht Abfertigung.",
  },
  {
    numeral: "II",
    title: "Verstehen vor Handeln",
    text: "Zuerst zuhören und hinsehen: die Haut lesen, den Moment spüren, die Linie denken.",
  },
  {
    numeral: "III",
    title: "Sorgfalt im Detail",
    text: "Präzision im Kleinen, Ruhe im Raum, Ehrlichkeit in der Beratung. Das verbindet alle drei Häuser.",
  },
];

/** Staggered portal — distinct aspect per house, not three equal cards. */
function Portal({
  m,
  aspect,
  offset,
}: {
  m: (typeof family)[number];
  aspect: string;
  offset?: string;
}) {
  return (
    <NextLink
      href={m.href}
      data-theme={m.slug}
      className={`reveal group group/btn flex flex-col bg-bg text-ink ${offset ?? ""}`}
    >
      <div className={`ken-wrap relative overflow-hidden ${aspect}`}>
        <Img
          src={m.portal}
          alt=""
          position={m.portalPosition}
          className="ken-img absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
        />
        <span className="font-display absolute top-5 left-5 text-[2rem] leading-none text-ink/90 md:top-6 md:left-6 md:text-[2.4rem]">
          {m.numeral}
        </span>
        <span className="eyebrow absolute top-6 right-5 text-ink/75 md:top-7 md:right-6">
          {m.craft}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          <p className="eyebrow text-accent-text">{m.house}</p>
          <h3 className="font-display mt-2 text-[1.85rem] leading-none md:text-[2.15rem]">
            {m.first}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col border-t border-line pt-6 pb-2">
        <p className="body-copy !max-w-none flex-1 text-[0.95rem]">{m.line}</p>
        <span className="eyebrow mt-7 flex items-center gap-3 text-ink">
          Eintreten <Arrow />
        </span>
      </div>
    </NextLink>
  );
}

export default function HubPage() {
  return (
    <PageShell theme="hub">
      {/* ---------- Editorial cover hero ---------- */}
      <section className="container-x pt-10 md:pt-16">
        <div className="anim-rise flex items-center justify-between gap-6">
          <Eyebrow>Haut · Klang · Linie</Eyebrow>
          <p className="eyebrow hidden text-muted sm:block">Neuburg an der Donau</p>
        </div>

        <h1 className="wordmark anim-rise anim-rise-1 mt-8 -mr-[0.12em] text-[min(calc((100vw-2.5rem)/4.1),19rem)] leading-[0.86] tracking-[0.12em] md:mt-12 md:text-[min(calc((100vw-5.5rem)/4.1),19rem)]">
          Ajouri
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="display-2 anim-rise anim-rise-2 md:col-span-7">
            <span className="whitespace-nowrap">Drei Frauen.</span>{" "}
            <span className="whitespace-nowrap">Drei Handwerke.</span>{" "}
            <em className="whitespace-nowrap">Ein Name.</em>
          </p>
          <p className="lead anim-rise anim-rise-3 !max-w-none md:col-span-4 md:col-start-9">
            Michelle, Sabine und Isabelle Ajouri führen drei eigenständige Häuser — für die Haut,
            für den Klang und für die feine Linie. Jedes spricht seine eigene Sprache. Alle teilen
            dieselbe Haltung.
          </p>
        </div>
      </section>

      {/* Cinematic field — atmosphere only; entry is via the portals below */}
      <section className="anim-rise anim-rise-4 mt-12 md:mt-16" aria-hidden="true">
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-[2.15/1] md:min-h-[26rem]">
          <Img
            src="/assets/hub/01-hero.jpg"
            alt=""
            position="50% 62%"
            priority
            className="anim-settle absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ---------- Die drei Welten — staggered portals ---------- */}
      <section id="welten" className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            eyebrow="Die drei Welten"
            title={
              <>
                Drei Häuser, <em>eine Familie.</em>
              </>
            }
            lead="Jede Welt steht für sich — mit eigener Atmosphäre, eigenem Handwerk und eigener Adresse. Tritt dort ein, wo es dich hinzieht."
          />

          {/* Staggered: Michelle tall, Sabine offset wide, Isabelle tall */}
          <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-10">
            <div className="md:col-span-4">
              <Portal m={family[0]} aspect="aspect-[3/4]" />
            </div>
            <div className="md:col-span-4 md:pt-20">
              <Portal m={family[1]} aspect="aspect-[4/5]" />
            </div>
            <div className="md:col-span-4 md:pt-8">
              <Portal m={family[2]} aspect="aspect-[3/4.2]" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Haltung with pull-quote ---------- */}
      <section id="haltung" className="section-y bg-surface">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <PullQuote variant="statement" cite="— Die Haltung der Familie Ajouri">
              „Genau hinsehen. Sich Zeit nehmen. Nichts versprechen, was man nicht halten kann.“
            </PullQuote>
          </div>

          <div className="mt-20 grid gap-14 md:mt-28 md:grid-cols-12">
            <div className="reveal md:col-span-4">
              <Eyebrow>Die Haltung</Eyebrow>
              <h2 className="display-2 mt-6">
                Drei Handwerke, <em>eine Haltung.</em>
              </h2>
              <p className="lead mt-8 !max-w-none">
                Haut, Klang und Linie haben auf den ersten Blick wenig gemeinsam. Und doch folgen
                sie denselben Regeln.
              </p>
            </div>
            <ol className="md:col-span-7 md:col-start-6">
              {principles.map((p) => (
                <li
                  key={p.title}
                  className="reveal grid grid-cols-[4rem_1fr] gap-5 border-t border-line py-10 last:border-b md:grid-cols-[5.5rem_1fr] md:gap-8"
                >
                  <span className="chapter-num !text-[2.5rem] md:!text-[3.25rem]">{p.numeral}</span>
                  <div className="pt-1">
                    <h3 className="display-3">{p.title}</h3>
                    <p className="body-copy mt-3 max-w-md">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Adressen ---------- */}
      <section id="adressen" className="section-y">
        <div className="container-x">
          <SectionIntro
            layout="split"
            eyebrow="Adressen"
            title={
              <>
                Wo du uns <em>findest.</em>
              </>
            }
            lead="Jedes Haus hat seine eigene Adresse und seinen eigenen Draht. Am schnellsten geht es direkt."
          />

          <div className="mt-16 grid border-t border-line md:grid-cols-3">
            {family.map((m) => (
              <div
                key={m.slug}
                className="reveal flex flex-col border-b border-line py-12 md:border-b-0 md:border-l md:px-8 md:py-14 md:first:border-l-0 md:first:pl-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    data-theme={m.slug}
                    aria-hidden
                    className="flex h-3.5 w-7 overflow-hidden rounded-full ring-1 ring-black/10"
                  >
                    <span className="w-1/2 bg-bg" />
                    <span className="w-1/2 bg-accent" />
                  </span>
                  <p className="eyebrow text-muted">
                    {m.numeral} — {m.house}
                  </p>
                </div>
                <h3 className="display-3 mt-6">{m.name}</h3>

                <div className="body-copy mt-6 !max-w-none flex-1 space-y-1 text-[0.95rem]">
                  {m.slug === "michelle" && (
                    <>
                      <p>{contact.michelle.street}</p>
                      <p>{contact.michelle.city}</p>
                      <p className="pt-3">
                        <a className="text-ink hover:underline" href={contact.michelle.phoneHref}>
                          {contact.michelle.phone}
                        </a>
                      </p>
                      <p>
                        <a className="text-ink hover:underline" href={mailto(contact.michelle.email)}>
                          {contact.michelle.email}
                        </a>
                      </p>
                    </>
                  )}
                  {m.slug === "sabine" && (
                    <>
                      <p>{contact.sabine.street}</p>
                      <p>{contact.sabine.city}</p>
                      <p className="pt-3">
                        <a className="text-ink hover:underline" href={contact.sabine.phoneHref}>
                          {contact.sabine.phone}
                        </a>
                      </p>
                      <p>
                        <a className="text-ink hover:underline" href={mailto(contact.sabine.email)}>
                          {contact.sabine.email}
                        </a>
                      </p>
                      <p className="pt-3">Offenes Studio: {contact.sabine.openStudio}</p>
                    </>
                  )}
                  {m.slug === "isabelle" && (
                    <>
                      <p>Termine auf Anfrage.</p>
                      <p className="pt-3">
                        <a
                          className="text-ink hover:underline"
                          href={mailto(contact.isabelle.email, "Anfrage Atelier Isabelle")}
                        >
                          {contact.isabelle.email}
                        </a>
                      </p>
                      {contact.isabelle.emailIsPlaceholder && (
                        <p className="pt-2 text-[0.8rem] text-muted">
                          E-Mail vorerst Platzhalter — vor Livegang ersetzen.
                        </p>
                      )}
                      <p className="pt-3">
                        Erzähl von deiner Idee — Motiv, Stelle, ungefähre Größe.
                      </p>
                    </>
                  )}
                </div>

                <NextLink
                  href={
                    m.slug === "michelle"
                      ? "/michelle/kontakt/"
                      : m.slug === "sabine"
                        ? "/sabine/kontakt/"
                        : "/isabelle/anfrage/"
                  }
                  className="group/btn eyebrow mt-10 flex items-center gap-3 text-ink"
                >
                  {m.slug === "isabelle" ? "Zur Anfrage" : "Kontakt"} <Arrow />
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
