import NextLink from "next/link";
import { contact, family, headers, mailto, studio, type ThemeKey } from "@/lib/site";

const taglines: Record<ThemeKey, string> = {
  hub: "Zwei Frauen. Zwei Handwerke. Ein Name — Haut und Klang. Neuburg an der Donau.",
  michelle: "Hautanalyse, Treatments, Lash & Brow — erst verstehen, dann behandeln.",
  sabine: "Klangreise, Klangmassage, Meditation. Ein Studio für Klang und Achtsamkeit.",
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
    default:
      return [
        { text: `${studio.street} · ${studio.city}` },
        { text: `Michelle · ${contact.michelle.phone}`, href: "/michelle/kontakt/" },
        { text: `Sabine · ${contact.sabine.phone}`, href: "/sabine/kontakt/" },
      ];
  }
}

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

        <div className="mt-20 border-t border-current/15 pt-6 text-[0.72rem] tracking-[0.04em] opacity-60">
          <p>© {year} Ajouri · Neuburg an der Donau</p>
        </div>
      </div>
    </footer>
  );
}
