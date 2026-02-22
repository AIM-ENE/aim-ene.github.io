# ADR-0002: robots.txt-beleid voor root-site

## Status

Accepted

## Context

De root site (`aim-ene.github.io`) bevat een landingspagina met links naar onder andere Teams en GitHub Classroom.

Deze links zijn bedoeld voor studenten/docenten en hoeven niet via publieke zoekmachines gevonden te worden.
Volgens Google Search Central (z.d.) interpreteren crawlers `robots.txt` op padniveau; dat maakt gerichte blokkade van alleen de root mogelijk.

## Decision

Voor de root site gebruiken we gericht robotsbeleid:

- `User-agent: *`
- `Disallow: /$` (alleen de landingpagina)
- `Allow: /doex/`
- `Allow: /teex/`
- `Allow: /soex/`
- `Allow: /pexe/`
- `Sitemap:` verwijzingen naar root en course sitemaps

Dit blokkeert de landingpagina, maar laat de course-subpaden toe voor indexatie.

## Consequences

Positief:
- Root landingpagina met gevoelige links wordt niet via zoekmachine-indexatie verspreid.
- Course-subpaden blijven indexeerbaar.

Negatief:
- Niet alle crawlers behandelen `/$` identiek. Grote crawlers doen dit doorgaans wel.
- Root landing blijft beperkt vindbaar.

## Options

1. Alles blokkeren (`Disallow: /`)
2. Alles toelaten (`Allow: /`)
3. Selectieve blokkade (gekozen)
4. Meta `noindex` op de landing

## Revisit Criteria

Herzie deze beslissing wanneer:
- de root site geen gevoelige links meer bevat, of
- er een expliciete wens komt om rootcontent weer publiek vindbaar te maken.

## Bronnen

- Google Search Central. (z.d.). *How Google interprets the robots.txt specification*. Geraadpleegd op 22 februari 2026, van [https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
