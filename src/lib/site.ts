export type Slug = "michelle" | "sabine" | "isabelle";
export type ThemeKey = "hub" | Slug;

export type Link = { label: string; href: string };

/** The three members of the family, in hub order. */
export const family: {
  slug: Slug;
  first: string;
  name: string;
  house: string;
  craft: string;
  numeral: string;
  line: string;
  href: string;
  portal: string;
  portalPosition: string;
  portrait: string;
  portraitPosition: string;
}[] = [
  {
    slug: "michelle",
    first: "Michelle",
    name: "Michelle Ajouri",
    house: "Glamour Treatments",
    craft: "Haut",
    numeral: "I",
    line: "Hautexpertin. Analyse, Facials und Lash & Brow — erst verstehen, dann behandeln.",
    href: "/michelle/",
    portal: "/assets/michelle/05-portal.jpg",
    portalPosition: "50% 50%",
    portrait: "/assets/michelle/02-portrait.jpg",
    portraitPosition: "46% 22%",
  },
  {
    slug: "sabine",
    first: "Sabine",
    name: "Sabine Ajouri",
    house: "Vita Sonus",
    craft: "Klang",
    numeral: "II",
    line: "Klangreisen, Klangmassage und Meditation — ein Raum, in dem es still werden darf.",
    href: "/sabine/",
    portal: "/assets/sabine/05-portal.jpg",
    portalPosition: "76% 50%",
    portrait: "/assets/sabine/02-portrait.jpg",
    portraitPosition: "62% 30%",
  },
  {
    slug: "isabelle",
    first: "Isabelle",
    name: "Isabelle Ajouri",
    house: "Atelier Isabelle",
    craft: "Linie",
    numeral: "III",
    line: "Fine-Line-Tattoos — reduziert, präzise und für genau eine Haut gezeichnet.",
    href: "/isabelle/",
    portal: "/assets/isabelle/06-portal.jpg",
    portalPosition: "50% 50%",
    portrait: "/assets/isabelle/02-portrait.jpg",
    portraitPosition: "52% 22%",
  },
];

export const contact = {
  michelle: {
    street: "Franz-Hoffmann-Str. 29",
    city: "86633 Neuburg an der Donau",
    phone: "+49 1577 5056789",
    phoneHref: "tel:+4915775056789",
    whatsappHref: "https://wa.me/4915775056789",
    email: "info@michelleajouri.de",
    hours: "Mo – Sa · 10:00 – 19:00 Uhr",
    web: "michelleajouri.de",
    webHref: "https://michelleajouri.de/",
  },
  sabine: {
    street: "Amalienstr. 60",
    city: "86633 Neuburg",
    phone: "0160 99 300 610",
    phoneHref: "tel:+4916099300610",
    email: "info@vitasonus.de",
    openStudio: "Freitag · 16:30 – 18:00 Uhr",
    web: "vitasonus.de",
    webHref: "https://vitasonus.de/",
  },
  isabelle: {
    /**
     * PLATZHALTER — noch keine echte Atelier-Adresse vorhanden.
     * Vor dem Livegang durch die echte E-Mail ersetzen; `emailIsPlaceholder`
     * dann auf false setzen, damit der Hinweis auf der Seite verschwindet.
     */
    email: "kontakt@example.com",
    emailIsPlaceholder: true,
  },
} as const;

export function mailto(address: string, subject?: string) {
  return subject
    ? `mailto:${address}?subject=${encodeURIComponent(subject)}`
    : `mailto:${address}`;
}

export function mapsHref(street: string, city: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}`)}`;
}

/** Per-world header configuration — routes, not hash anchors. */
export const headers: Record<
  ThemeKey,
  { title: string; subtitle: string; anchors: Link[]; cta?: Link }
> = {
  hub: {
    title: "Ajouri",
    subtitle: "Neuburg an der Donau",
    anchors: [
      { label: "Die drei Welten", href: "#welten" },
      { label: "Haltung", href: "#haltung" },
      { label: "Adressen", href: "#adressen" },
    ],
  },
  michelle: {
    title: "Michelle Ajouri",
    subtitle: "Glamour Treatments",
    anchors: [
      { label: "Start", href: "/michelle/" },
      { label: "Leistungen", href: "/michelle/leistungen/" },
      { label: "Analyse", href: "/michelle/analyse/" },
      { label: "Kontakt", href: "/michelle/kontakt/" },
    ],
    cta: { label: "Termin wählen", href: "/michelle/kontakt/#buchen" },
  },
  sabine: {
    title: "Vita Sonus",
    subtitle: "Sabine Ajouri",
    anchors: [
      { label: "Start", href: "/sabine/" },
      { label: "Angebote", href: "/sabine/angebote/" },
      { label: "Studio", href: "/sabine/studio/" },
      { label: "Kontakt", href: "/sabine/kontakt/" },
    ],
    cta: { label: "Termin wählen", href: "/sabine/kontakt/#buchen" },
  },
  isabelle: {
    title: "Atelier Isabelle",
    subtitle: "Isabelle Ajouri · Fine-Line",
    anchors: [
      { label: "Start", href: "/isabelle/" },
      { label: "Galerie", href: "/isabelle/galerie/" },
      { label: "Prozess", href: "/isabelle/prozess/" },
      { label: "Anfrage", href: "/isabelle/anfrage/" },
    ],
    cta: { label: "Anfrage senden", href: "/isabelle/anfrage/" },
  },
};
