import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { asset } from "@/lib/asset";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wrapdbtc.github.io"),
  title: {
    default: "Ajouri — Haut, Klang, Linie",
    template: "%s · Ajouri",
  },
  description:
    "Drei Frauen, drei Handwerke, ein Name: Michelle Ajouri (Haut), Sabine Ajouri · Vita Sonus (Klang) und Atelier Isabelle (Fine-Line Tattoo) in Neuburg an der Donau.",
  openGraph: {
    siteName: "Ajouri",
    locale: "de_DE",
    type: "website",
    images: [{ url: asset("/assets/hub/01-hero.jpg"), width: 1280, height: 720 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
