export type MemberSlug = "michelle" | "sabine" | "isabelle";

export const members = [
  {
    slug: "michelle" as const,
    name: "Michelle Ajouri",
    role: "Hautexpertin · Glamour Treatments",
    claim: "Haut von innen nach außen verstehen",
    href: "/michelle",
    image: "/michelle/portal.jpg",
    theme: "michelle",
    external: "https://michelleajouri.de/",
  },
  {
    slug: "sabine" as const,
    name: "Sabine Ajouri",
    role: "Vita Sonus · Klang & Meditation",
    claim: "Ruhe gegen den lauten Alltag",
    href: "/sabine",
    image: "/sabine/startseite.jpg",
    theme: "sabine",
    external: "https://vitasonus.de/",
  },
  {
    slug: "isabelle" as const,
    name: "Isabelle Ajouri",
    role: "Atelier Isabelle · Fine-Line Tattoo",
    claim: "Linien mit Haltung",
    href: "/isabelle",
    image: "/isabelle/portal.jpg",
    theme: "isabelle",
    external: null,
  },
] as const;

export const site = {
  name: "Ajouri",
  claim: "Drei Welten. Ein Name.",
  location: "Neuburg an der Donau",
};
