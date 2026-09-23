export type Slug = "michelle" | "sabine";
export type ThemeKey = "hub" | Slug;

export type Link = { label: string; href: string };

/** The two members of the family, in hub order. */
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
    line: "Analyse, Facials und Lash & Brow — erst verstehen, dann behandeln.",
    href: "/michelle/",
    portal: "/assets/michelle/05-portal.jpg",
    portalPosition: "48% 22%",
    portrait: "/assets/michelle/02-portrait.jpg",
    portraitPosition: "48% 20%",
  },
  {
    slug: "sabine",
    first: "Sabine",
    name: "Sabine Ajouri",
    house: "Vita Sonus",
    craft: "Klang",
    numeral: "II",
    line: "Klangreise, Klangmassage, Meditation — ein Raum, in dem es still werden darf.",
    href: "/sabine/",
    portal: "/assets/sabine/05-portal.jpg",
    portalPosition: "50% 28%",
    portrait: "/assets/sabine/02-portrait.jpg",
    portraitPosition: "50% 22%",
  },
];

/** Shared studio — both practices under one roof. */
export const studio = {
  street: "Amalienstr. 60",
  city: "86633 Neuburg",
} as const;

export const contact = {
  michelle: {
    street: studio.street,
    city: studio.city,
    phone: "+49 1577 5056789",
    phoneHref: "tel:+4915775056789",
    whatsappHref: "https://wa.me/4915775056789",
    email: "info@michelleajouri.de",
    hours: "Mo – Sa · 10:00 – 19:00 Uhr",
    web: "michelleajouri.de",
    webHref: "https://michelleajouri.de/",
  },
  sabine: {
    street: studio.street,
    city: studio.city,
    phone: "0160 99 300 610",
    phoneHref: "tel:+4916099300610",
    email: "info@vitasonus.de",
    openStudio: "Freitag · 16:30 – 18:00 Uhr",
    web: "vitasonus.de",
    webHref: "https://vitasonus.de/",
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

export function mapsStudioHref() {
  return mapsHref(studio.street, studio.city);
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
      { label: "Die zwei Welten", href: "#welten" },
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
};
