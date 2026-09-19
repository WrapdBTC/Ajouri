export type MemberSlug = "michelle" | "sabine" | "isabelle";

export const members = [
  {
    slug: "michelle" as const,
    name: "Michelle Ajouri",
    role: "Hautexpertin · Glamour Treatments",
    claim: "Haut von innen nach außen verstehen",
    personality:
      "Präzise, warm, glamourös — sie liest Haut und Blut, bevor sie behandelt. Analyse statt Schema F.",
    href: "/michelle",
    image: "/michelle/portal.jpg",
    theme: "michelle" as const,
    external: "https://michelleajouri.de/",
    externalLabel: "michelleajouri.de",
  },
  {
    slug: "sabine" as const,
    name: "Sabine Ajouri",
    role: "Vita Sonus · Klang & Meditation",
    claim: "Ruhe gegen den lauten Alltag",
    personality:
      "Geerdet, klar, ohne Pathos — sie hält Raum für Stille, wenn der Alltag zu laut wird.",
    href: "/sabine",
    image: "/sabine/startseite.jpg",
    theme: "sabine" as const,
    external: "https://vitasonus.de/",
    externalLabel: "vitasonus.de",
  },
  {
    slug: "isabelle" as const,
    name: "Isabelle Ajouri",
    role: "Atelier Isabelle · Fine-Line Tattoo",
    claim: "Linien mit Haltung",
    personality:
      "Reduziert, editorial, unaufgeregt — jede Linie entsteht im Dialog, nie aus dem Katalog.",
    href: "/isabelle",
    image: "/isabelle/portal.jpg",
    theme: "isabelle" as const,
    external: null,
    externalLabel: null,
  },
] as const;

export const site = {
  name: "Ajouri",
  claim: "Drei Welten. Ein Name.",
  location: "Neuburg an der Donau",
};
