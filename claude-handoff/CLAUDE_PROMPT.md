# CLAUDE BUILD PROMPT — AJOURI Familien-Website

Kopiere ab hier alles an Claude (inkl. der Asset-Ordner als Anhang / im Repo).

---

## Auftrag
Baue **eine** moderne Website-App (empfohlen: **Next.js App Router + TypeScript + Tailwind**), die:

1. einen **Hub** `/` hat (Marke **AJOURI**), und  
2. **drei vollwertige, eigenständige Handwerks-Seiten**:
   - `/michelle` — Michelle Ajouri, Hautexpertin / Glamour Treatments  
   - `/sabine` — Sabine Ajouri, Vita Sonus (Klang, Meditation, Auszeit)  
   - `/isabelle` — Isabelle Ajouri, Fine-Line Tattoo Atelier  

**Das IST die Website** — keine Bridge mit „Zur Website“, keine Linktree-Optik, keine Weiterleitung als Hauptzweck.

Optional ganz klein im Footer: Hinweis auf michelleajouri.de / vitasonus.de — nie als Hero-CTA.

---

## Design-Prinzip (kritisch)
**Drei Seiten, die alleine stark wirken — und trotzdem wie eine Familie aussehen.**

### Gemeinsame DNA (überall gleich)
- Typografie: elegante **Serif** für Display/H1 + cleane **Sans** für Body (z. B. Cormorant/Fraunces + Inter/Satoshi)
- Spacing-System, Button-Radien, Transition-Sprache, Grid-Logik
- Nav-Pattern: Logo/Wortzug links, Links rechts — **aber jeder Bereich hat seinen eigenen Header**:
  - eigener Hintergrund / Border / Textfarbe passend zur Welt
  - auf Subpages: „Ajouri“ zurück zum Hub + Name der Person hervorgehoben + die anderen zwei dezent
- Footer-Struktur gleich, Farben themenspezifisch
- Großzügiger Weißraum, editorial, ruhig, teuer wirkend
- Deutsch, fehlerfrei, kein Lorem

### Eigene Stimme (pro Seite)
| Seite | Atmosphäre | Palette |
|-------|------------|---------|
| Hub | Papier, Familie als Marke | Cream `#faf8f5`, Ink `#1a1614` |
| Michelle | warm, soft-luxury, Haut | Champagne / Ivory / Nude / Espresso |
| Sabine | tief, sonor, meditativ | Midnight Indigo, Gold, Soft Sand |
| Isabelle | sharp, contemporary | Matte Black, Graphite, Off-White, Oxblood |

Inspiration (nur Haltung/Struktur, **nicht 1:1 kopieren**):
- https://wrapdbtc.github.io/michelle/
- https://wrapdbtc.github.io/vitasonus/

---

## Seiten-Inhalte

### Hub `/`
- Starker Wordmark **AJOURI**
- Kurzer Claim (selbst formulieren, ruhig/stolz)
- Drei große Portal-Cards mit `05-portal` / Portraits + Name + 1-Zeilen-Rolle → Link zu Subpage
- Kurzer Text: drei Handwerke, eine Haltung
- Bilder: `assets/hub/01-hero.jpg` + die drei Portal-Bilder

### `/michelle` — volle Craft-Site
**Header eigen:** champagne/nude Theme  
Hero mit `01-hero.jpg` (Bild muss sichtbar sein — Overlay max. ~40%, nicht 95% Cream)  
Portrait `02-portrait.jpg`  
Sections in Anlehnung an gute Beauty-Sites: Verstehen → Analyse (OBSERV 320x, Zinzino) → Treatments mit Preisen → Lash & Brow (`04-lash.jpg`) → Ablauf → Kontakt  
**CTAs:** Termin anfragen (tel/mailto), nicht „Zur Website“  

Kontaktdaten (exakt):
- Franz-Hoffmann-Straße 29, 86633 Neuburg an der Donau  
- +49 1577 5056789  
- info@michelleajouri.de  

Treatments (Preise beibehalten):
- Ersttermin 90 Min 210 € · Deluxe 120 Min 270 € · Aquafacial 140 € · Microneedling 200 € · Power Duo 300 € · Dermaplaning 80 € · Glass Skin 340 € · ACID Peel 100 €

### `/sabine` — volle Craft-Site (Vita Sonus)
**Header eigen:** indigo/gold  
Hero `01-hero.jpg`, Portrait `02-portrait.jpg`, Bowls `03-bowls.jpg`, Klangmassage `04-klangmassage.jpg`  
Angebote: Klangreise, Klangmassage, Meditation, ggf. Regulationsabend / spezielle Formate  
Offenes Studio: **Freitag 16:30–18:00**  
Jon Kabat-Zinn Zitat darf (kurz) vorkommen  
CTAs: Anrufen / Mailen  

Kontakt:
- Amalienstraße 60, 86633 Neuburg  
- 0160 99 300 610  
- info@vitasonus.de  

### `/isabelle` — volle Craft-Site (neu)
**Header eigen:** black/oxblood  
Marke: **Atelier Isabelle** (Fine-Line / editorial)  
Hero `01-hero.jpg`, Portrait `02-portrait.jpg`, Galerie botanical + geometric, Prozess `05-process.jpg`  
Sections: About, Stil, Galerie, Prozess (Beratung → Entwurf → Session → Aftercare), Kontakt  
**Keine erfundenen Telefonnummern** — nur „Termine auf Anfrage“ + Mailto-Platzhalter `kontakt@…` klar als Platzhalter ODER Formular ohne Fake-Nummer  

---

## Assets (verbindlich)
Lege den Ordner `assets/` 1:1 ins Projekt (`public/assets/…` oder `public/michelle/…` — egal, konsistent).

Nutze **genau diese Dateien** aus dem Manifest (JPG). Keine Random-Stock-Platzhalter. Keine kaputten Pfade.

Wenn GitHub Pages unter `https://wrapdbtc.github.io/Ajouri/`:
- `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- `basePath: '/Ajouri'` + alle Bild-URLs müssen `/Ajouri/...` tragen (Helper `asset()`), sonst sind Bilder tot

Repo: https://github.com/WrapdBTC/Ajouri (kannst überschreiben / neu aufsetzen)

---

## Definition of Done
- [ ] Hub + 3 Subpages, jede mit **eigenem themed Header**
- [ ] Alle Manifest-Bilder sichtbar und korrekt eingebunden
- [ ] Kein „Zur Website“ als Haupt-CTA
- [ ] Drei Welten klar unterscheidbar, eine gemeinsame Design-DNA
- [ ] `npm run build` grün
- [ ] Mobile stark
- [ ] Sieht aus wie Boutique-Magazin, nicht wie Template

Baue es so, dass man denkt: **teuer, ruhig, durchdacht** — drei Boutiquen unter einem Dach.
