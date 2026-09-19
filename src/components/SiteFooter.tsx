import NextLink from "next/link";
import { contact, family, headers, mailto, type ThemeKey } from "@/lib/site";

const taglines: Record<ThemeKey, string> = {
  hub: "Drei Frauen. Drei Handwerke. Ein Name — Haut, Klang und Linie. Neuburg an der Donau.",
  michelle: "Hautanalyse, Treatments, Lash & Brow — erst verstehen, dann behandeln.",
  sabine: "Klangreise, Klangmassage, Meditation. Ein Studio für Klang und Achtsamkeit.",
  isabelle: "Fine-Line, reduziert auf das Wesentliche. Termine auf Anfrage.",
};

type Line = { text: string; href?: string };

function contactLines(current: ThemeKey): Line[] {
  switch (current) {
    case "michelle": {
      const c = contact.michelle;
      return [
        { text: c.street },
        { text: c.city },
        { text: c.phone, href: c.phoneHref },
        { text: c.email, href: mailto(c.email) },
        { text: c.hours },
      ];
    }
    case "sabine": {
      const c = contact.sabine;
      return [
        { text: c.street },
        { text: c.city },
        { text: c.phone, href: c.phoneHref },
        { text: c.email, href: mailto(c.email) },
        { text: `Offenes Studio: ${c.openStudio}` },
      ];
    }
    case "isabelle": {
      const c = contact.isabelle;
      return [
        { text: "Termine auf Anfrage" },
        { text: c.email, href: mailto(c.email, "Anfrage Atelier Isabelle") },
        ...(c.emailIsPlaceholder ? [{ text: "E-Mail vorerst Platzhalter" }] : []),
      ];
    }
    default:
      return [
        { text: `Michelle · ${contact.michelle.street}`, href: "/michelle/kontakt/" },
        { text: `Sabine · ${contact.sabine.street}`, href: "/sabine/kontakt/" },
        { text: "Isabelle · Termine auf Anfrage", href: "/isabelle/anfrage/" },
      ];
  }
}

const external: Partial<Record<ThemeKey, { label: string; href: string }[]>> = {
  hub: [
    { label: contact.michelle.web, href: contact.michelle.webHref },
    { label: contact.sabine.web, href: contact.sabine.webHref },
  ],
  michelle: [{ label: contact.michelle.web, href: contact.michelle.webHref }],
  sabine: [{ label: contact.sabine.web, href: contact.sabine.webHref }],
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "transition-opacity duration-300 hover:opacity-100 opacity-75";
  return href.startsWith("/") ? (
    <NextLink href={href} className={cls}>
      {children}
    </NextLink>
  ) : (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export function SiteFooter({ current }: { current: ThemeKey }) {
  const cfg = headers[current];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-deep-ink">
      <div className="container-x pt-16 pb-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            {current === "hub" ? (
              <p className="font-display text-3xl tracking-[0.2em] uppercase">{cfg.title}</p>
            ) : (
              <p className="font-display text-4xl leading-none">{cfg.title}</p>
            )}
            <p className="eyebrow mt-3 opacity-60">{cfg.subtitle}</p>
            <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed opacity-75">{taglines[current]}</p>
          </div>

          <div className="md:col-span-4 md:col-start-6">
            <p className="eyebrow opacity-50">Kontakt</p>
            <ul className="mt-6 space-y-2 text-[0.95rem] leading-relaxed">
              {contactLines(current).map((l) => (
                <li key={l.text}>
                  {l.href ? <FooterLink href={l.href}>{l.text}</FooterLink> : <span className="opacity-75">{l.text}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="eyebrow opacity-50">Familie Ajouri</p>
            <ul className="mt-6 space-y-2 text-[0.95rem] leading-relaxed">
              <li>
                <FooterLink href="/">Ajouri — Übersicht</FooterLink>
              </li>
              {family.map((m) => (
                <li key={m.slug}>
                  {m.slug === current ? (
                    <span aria-current="page">
                      {m.first} — {m.craft}
                    </span>
                  ) : (
                    <FooterLink href={m.href}>
                      {m.first} — {m.craft}
                    </FooterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-current/15 pt-6 text-[0.72rem] tracking-[0.04em] opacity-60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Ajouri · Neuburg an der Donau</p>
          {external[current] && (
            <p className="flex gap-4">
              <span>Auch unter</span>
              {external[current]!.map((e) => (
                <a key={e.href} href={e.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                  {e.label}
                </a>
              ))}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
