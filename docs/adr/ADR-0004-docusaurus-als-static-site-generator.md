# ADR-0004: Docusaurus als Static Site Generator

## Status

Accepted

## Context

Voor de root-site van `aim-ene.github.io` willen we:

- één centrale startpagina met links naar de courses
- client-side zoekfunctionaliteit over course-materiaal (zie ADR-0001)
- dezelfde technologie-stack als de course-sites, zodat beheer en onderhoud eenduidig zijn
- aansluiting op de FEWD-leerlijn waarin MDX/React wordt gebruikt
- geen eigen back-end hosting voor deze docs-site (onderhoud en beheerlast beperken)
- duidelijke privacygrens: geen privé- of persoonsgegevens in de site-content

Daarnaast gebruiken de course-projecten ook Docusaurus. Voor dit root-project willen we daarop aansluiten, zodat beheer, kennis en tooling consistent blijven over alle repos.
Dit sluit ook aan op de Docusaurus-opzet met docs, plugins en statische build/deploy (Docusaurus, z.d.).

De root-site startte als eenvoudige statische HTML, wat laagdrempelig is, maar beperkte uitbreidbaarheid heeft voor geïntegreerde docs/search-workflows.

## Options

1. Plain HTML (handmatige pagina)
2. mdBook
3. Hugo
4. Docusaurus + local-search plugin

## Decision

We kiezen voor **Docusaurus** als static site generator voor de root-site, met `@easyops-cn/docusaurus-search-local` voor client-side zoekindexering.
Die plugin is expliciet gericht op lokale indexering in de site zelf, zonder externe zoekdienst (easyops-cn, z.d.).

Voor deployment kiezen we:

- **GitHub Pages** als hostingplatform
- **GitHub Actions** als build/deploy pipeline

Deze combinatie volgt de standaard publicatie-aanpak vanuit GitHub (GitHub Docs, z.d.; GitHub Docs, z.d.).

Aanvullende randvoorwaarden:

- Gevoelige informatie blijft buiten deze website; daarvoor verwijzen we naar Teams en iSAS.
- Front-end logica wordt bij voorkeur build-time bepaald (statische output), niet afhankelijk van server-side runtime.
- De gekozen stack sluit aan op een toekomstige migratie naar Brightspace (HAN-standaard LMS), waarbij front-end patronen en contentstructuur grotendeels herbruikbaar blijven.

## Consequences

Positief:

- Technologische consistentie met de course-projecten.
- Aansluiting op FEWD-kennis (MDX/React) voor docenten en studenten.
- Ingebouwde docs-routing en plugin-ecosysteem.
- Root-site kan zoekindexen opbouwen over submodule-content.
- Geen back-end hosting nodig voor deze docs-opzet.

Negatief / aandacht:

- Meer build-complexiteit dan plain HTML.
- CI-pipeline is noodzakelijk voor reproduceerbare build/deploy.
- Tijdelijke workarounds nodig bij component- of linkverschillen tussen subprojects.
- Privacydiscipline is strikt nodig: geen persoonsgegevens in statische content publiceren.

## Implementation Notes

- Docusaurus draait in deze repo als root-docs project.
- Local-search index wordt gegenereerd tijdens build.
- De root-pipeline publiceert niet de volledige course-HTML uit submodules; die blijft eigendom van de course-repos.
- Deploy gebeurt via GitHub Actions naar GitHub Pages.

## Bronnen

- Docusaurus. (z.d.). *What is Docusaurus?* Geraadpleegd op 22 februari 2026, van [https://docusaurus.io/docs](https://docusaurus.io/docs)
- easyops-cn. (z.d.). *@easyops-cn/docusaurus-search-local*. Geraadpleegd op 22 februari 2026, van [https://github.com/easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
- GitHub Docs. (z.d.). *GitHub Pages*. Geraadpleegd op 22 februari 2026, van [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
- GitHub Docs. (z.d.). *Understanding GitHub Actions*. Geraadpleegd op 22 februari 2026, van [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
