import NextLink from "next/link";
import { PageShell } from "@/components/PageShell";
import { Img } from "@/components/Img";
import { Arrow } from "@/components/Button";
import { Eyebrow, SectionIntro } from "@/components/SectionIntro";
import { contact, family, mailto } from "@/lib/site";

const principles = [
  {
    title: "Zeit statt Takt",
    text: "Keine Termine im Minutentakt. Wer zu uns kommt, bekommt Aufmerksamkeit — nicht Abfertigung.",
  },
  {
    title: "Verstehen vor Handeln",
    text: "Zuerst zuhören und hinsehen: die Haut lesen, den Moment spüren, die Linie denken. Erst dann beginnt die Arbeit.",
  },
  {
    title: "Sorgfalt im Detail",
    text: "Präzision im Kleinen, Ruhe im Raum, Ehrlichkeit in der Beratung. Das verbindet alle drei Häuser.",
  },
];

function PortalCard({ m }: { m: (typeof family)[number] }) {
  return (
    <NextLink
      href={m.href}
      data-theme={m.slug}
      className="reveal group group/btn flex flex-col bg-bg text-ink shadow-[0_40px_80px_-50px_rgb(26_22_20/0.5)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Img
          src={m.portal}
          alt=""
          position={m.portalPosition}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
        />
        <span className="font-display absolute top-5 left-6 text-3xl text-ink/85">{m.numeral}</span>
        <span className="eyebrow absolute top-7 right-6 text-ink/80">{m.craft}</span>
      </div>
      <div className="relative flex flex-1 flex-col px-6 pt-14 pb-8 md:px-8">
        <div className="absolute -top-11 left-6 h-[5.5rem] w-[5.5rem] overflow-hidden rounded-full ring-4 ring-bg md:left-8">
          <Img
            src={m.portrait}
            alt={`Portrait ${m.name}`}
            position={m.portraitPosition}
            zoom={1.9}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="eyebrow text-accent-text">{m.house}</p>
        <h3 className="display-3 mt-3">{m.name}</h3>
        <p className="body-copy mt-4 flex-1">{m.line}</p>
        <span className="eyebrow mt-9 flex items-center gap-3 text-ink">
          Eintreten <Arrow />
        </span>
      </div>
    </NextLink>
  );
}

export default function HubPage() {
  return (
    <PageShell theme="hub">
      {/* ---------- Hero ---------- */}
      <section className="container-x pt-12 md:pt-20">
        <div className="anim-rise flex items-center justify-between gap-6">
          <Eyebrow>Haut · Klang · Linie</Eyebrow>
          <p className="eyebrow hidden text-muted sm:block">Neuburg an der Donau</p>
        </div>

        <h1 className="wordmark anim-rise anim-rise-1 mt-8 -mr-[0.14em] text-[min(calc((100vw-2.5rem)/4.3),18rem)] leading-[0.88] tracking-[0.14em] md:mt-10 md:text-[min(calc((100vw-5rem)/4.3),18rem)]">
          Ajouri
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="display-2 anim-rise anim-rise-2 md:col-span-7">
            <span className="whitespace-nowrap">Drei Frauen.</span>{" "}
            <span className="whitespace-nowrap">Drei Handwerke.</span> <em className="whitespace-nowrap">Ein Name.</em>
          </p>
          <p className="lead anim-rise anim-rise-3 md:col-span-4 md:col-start-9">
            Michelle, Sabine und Isabelle Ajouri führen drei eigenständige Häuser — für die Haut, für den
            Klang und für die feine Linie. Jedes spricht seine eigene Sprache. Alle teilen dieselbe Haltung.
          </p>
        </div>

        <div className="anim-rise anim-rise-4 relative mt-12 aspect-[16/9] overflow-hidden md:mt-16 md:aspect-[2.1/1]">
          <Img
            src="/assets/hub/01-hero.jpg"
            alt="Drei Farbfelder in Creme, Indigo und Schwarz mit Trockenzweigen, Stein und Vase — ein Sinnbild der drei Welten"
            position="50% 62%"
            priority
            className="anim-settle absolute inset-0 h-full w-full object-cover"
          />
          {/* The three fields of the image are the three worlds — each field links to its house. */}
          <nav aria-label="Die drei Welten" className="absolute inset-0 grid grid-cols-3">
            {family.map((m) => (
              <NextLink
                key={m.slug}
                href={m.href}
                data-theme={m.slug}
                className="group group/btn relative flex flex-col p-3 text-ink sm:p-5 md:p-8 lg:p-10"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-white/0 transition-colors duration-700 group-hover:bg-white/[0.06]"
                />
                <span className="eyebrow relative text-[0.5rem] text-accent-text sm:text-[0.6rem] md:text-[0.6875rem]">
                  {m.numeral} — {m.craft}
                </span>
                <span className="font-display relative mt-2 hidden text-3xl leading-none md:block lg:text-4xl">
                  {m.first}
                </span>
                <span className="eyebrow relative mt-4 hidden items-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex">
                  Eintreten <Arrow />
                </span>
              </NextLink>
            ))}
          </nav>
        </div>
      </section>

      {/* ---------- Die drei Welten ---------- */}
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
          <div className="mt-16 grid gap-16 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-8">
            {family.map((m) => (
              <PortalCard key={m.slug} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Haltung ---------- */}
      <section id="haltung" className="section-y bg-surface">
        <div className="container-x grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <Eyebrow>Die Haltung</Eyebrow>
            <h2 className="display-2 mt-6">
              Drei Handwerke, <em>eine Haltung.</em>
            </h2>
            <p className="lead mt-8">
              Haut, Klang und Linie haben auf den ersten Blick wenig gemeinsam. Und doch folgen sie denselben
              Regeln: genau hinsehen, sich Zeit nehmen und nichts versprechen, was man nicht halten kann.
            </p>
          </div>
          <ol className="border-y border-line md:col-span-6 md:col-start-7">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="reveal grid grid-cols-[3.25rem_1fr] gap-4 border-b border-line py-9 last:border-b-0"
              >
                <span className="font-display text-2xl leading-none text-accent-text tabular-nums">0{i + 1}</span>
                <div>
                  <h3 className="display-3">{p.title}</h3>
                  <p className="body-copy mt-3 max-w-md">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
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
                className="reveal flex flex-col border-b border-line py-10 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
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
                <h3 className="display-3 mt-5">{m.name}</h3>

                <div className="body-copy mt-5 flex-1 space-y-1">
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
                        <a className="text-ink hover:underline" href={mailto(contact.isabelle.email, "Anfrage Atelier Isabelle")}>
                          {contact.isabelle.email}
                        </a>
                      </p>
                      {contact.isabelle.emailIsPlaceholder && (
                        <p className="pt-2 text-[0.8rem] text-muted">E-Mail vorerst Platzhalter — vor Livegang ersetzen.</p>
                      )}
                      <p className="pt-3">
                        Erzähl von deiner Idee — Motiv, Stelle, ungefähre Größe. Die Anfrage läuft direkt über das
                        Atelier.
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
                  className="group/btn eyebrow mt-8 flex items-center gap-3 text-ink"
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
