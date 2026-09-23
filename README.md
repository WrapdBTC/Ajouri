# Ajouri — Familien-Hub

Premium Hub-Website für die Familie **Ajouri** in Neuburg an der Donau.
Zwei eigenständige Welten unter einer Marke:

| Pfad | Person | Welt |
|------|--------|------|
| `/` | Hub | Marke Ajouri |
| `/michelle` | Michelle Ajouri | Hautexpertin · Glamour Treatments |
| `/sabine` | Sabine Ajouri | Vita Sonus · Klang & Meditation |

Stack: **Next.js (App Router) · TypeScript · Tailwind CSS**

## Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

```bash
GITHUB_PAGES=true npm run build   # Static export nach out/ (basePath /Ajouri)
```

## Design

Gemeinsame DNA (Typografie Cormorant Garamond + Inter, Spacing, Motion),
zwei Farbwelten plus Hub — jeweils mit Hell-/Dunkelmodus (`data-mode`):

- **Michelle** — Champagner, Ivory, Nude, Espresso
- **Sabine** — Midnight Indigo, Gold, Soft Sand
- **Hub** — warmes Papier / Tinte

## Bilder

- **Sabine:** Original-Assets von [vitasonus.de](https://vitasonus.de/) (Studio, Portrait, Kurs-Teaser)
- **Michelle:** Atmosphärische Key-Visuals (Champagner/Nude); Texte, Preise und Kontaktdaten entsprechen der Live-Site


## Studio

Gemeinsames Studio (beide Praxen):

- Amalienstr. 60, 86633 Neuburg
- Michelle: +49 1577 5056789 · info@michelleajouri.de
- Sabine: 0160 99 300 610 · info@vitasonus.de

## Externe Links

- Michelle: https://michelleajouri.de/
- Sabine: https://vitasonus.de/

## Repo

https://github.com/WrapdBTC/Ajouri

## Live (GitHub Pages)

https://wrapdbtc.github.io/Ajouri/

Lokal ohne basePath: `npm run dev`  
Pages-Build setzt `GITHUB_PAGES=true` (basePath `/Ajouri`).
