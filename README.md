# INNNatur · Webseite

Webseite der Praxis INNNatur von Andy Böhme, Sportphysiotherapeut und Heilpraktiker in Mühldorf am Inn.

## Technik

- Next.js 16 (App Router, statisch generiert)
- Tailwind CSS 4
- Framer Motion für Animationen, Lenis für sanftes Scrollen
- Schriften Sentient und Switzer über Fontshare

## Befehle

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklung auf http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Seiten

| Pfad | Inhalt |
| --- | --- |
| `/` | Landing Page mit Hero, Philosophie, Leistungsüberblick, Praxis und Kontakt |
| `/leistungen` | Alle 14 Behandlungsmethoden in vier Bereichen |
| `/ueber-mich` | Person, Werdegang und Skeleton-Karriere von Andy Böhme |
| `/impressum`, `/datenschutz` | Rechtliches, vor Veröffentlichung fachlich prüfen |

## Inhalte pflegen

Alle Texte, Leistungen und Kontaktdaten liegen zentral in `lib/data.js`.
Bilder liegen in `public/images`. Die Dateien `hero-behandlung.png`,
`manuelle-therapie.png`, `trainingstherapie.png` und `kinesiology.png` sind
KI-generierte Demo-Bilder und sollten vor dem Livegang durch echte
Praxisfotos ersetzt werden.

## Hinweise vor Livegang

- Impressum um Aufsichtsbehörde und Steuerangaben ergänzen
- Datenschutzerklärung juristisch prüfen lassen
- Fontshare-Schriften bei Bedarf lokal einbinden (DSGVO)
