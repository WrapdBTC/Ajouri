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
    default: "Ajouri — Haut & Klang",
    template: "%s · Ajouri",
  },
  description:
    "Zwei Frauen, zwei Handwerke, ein Name: Michelle Ajouri (Haut) und Sabine Ajouri · Vita Sonus (Klang) in Neuburg an der Donau.",
  openGraph: {
    siteName: "Ajouri",
    locale: "de_DE",
    type: "website",
    images: [{ url: asset("/assets/hub/01-hero.jpg"), width: 1280, height: 720 }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
};

/** Runs before paint — restores saved mode or prefers-color-scheme. */
const modeBootScript = `(function(){try{var k='ajouri-mode';var m=localStorage.getItem(k);if(m!=='light'&&m!=='dark'){m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-mode',m);}catch(e){document.documentElement.setAttribute('data-mode','light');}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
