# Ajouri — Familien-Hub

Premium Hub-Website für die Familie **Ajouri** in Neuburg an der Donau.
Drei eigenständige Welten unter einer Marke:

| Pfad | Person | Welt |
|------|--------|------|
| `/` | Hub | Marke Ajouri |
| `/michelle` | Michelle Ajouri | Hautexpertin · Glamour Treatments |
| `/sabine` | Sabine Ajouri | Vita Sonus · Klang & Meditation |
| `/isabelle` | Isabelle Ajouri | Atelier Isabelle · Fine-Line Tattoo |

Stack: **Next.js (App Router) · TypeScript · Tailwind CSS**

## Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production-Build
npm start       # Production-Server
```

## Design

Gemeinsame DNA (Typografie Cormorant Garamond + Inter, Spacing, Motion),
drei Farbwelten:

- **Michelle** — Champagner, Ivory, Nude, Espresso
- **Sabine** — Midnight Indigo, Gold, Soft Sand
- **Isabelle** — Deep Black, Graphite, Oxblood-Akzent

## Bilder

- **Sabine:** Original-Assets von [vitasonus.de](https://vitasonus.de/) (Studio, Portrait, Kurs-Teaser)
- **Michelle:** Atmosphärische Key-Visuals (Champagner/Nude); Live-Scraping von michelleajouri.de war von der Build-Umgebung aus per TLS nicht erreichbar — Texte, Preise und Kontaktdaten entsprechen der Live-Site
- **Isabelle:** Generierte Fine-Line-/Studio-Visuals (keine Stock-Klischees, keine erfundenen Telefonnummern)

## Externe Links

- Michelle: https://michelleajouri.de/
- Sabine: https://vitasonus.de/

## Repo

https://github.com/WrapdBTC/Ajouri

## Live (GitHub Pages)

Nach dem Deploy: https://wrapdbtc.github.io/Ajouri/

Lokal ohne basePath: `npm run dev`  
Pages-Build setzt `GITHUB_PAGES=true` (basePath `/Ajouri`).
