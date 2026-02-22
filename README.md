# Exploration and Elaboration

Dit is een repo voor de root van het ENE semester, wiens courses allemaal hun eigen (Docusaurus) repo hebben en bijbehorende site op GitHub pages.
Deze repo is er om 1 centrale startpagina te hebben. Ook voor de ['URL hackers'](https://blog.mastermaq.ca/2007/03/20/clean-amp-hackable-urls/) op die op sub url als `https://aim-ene.github.io/doex/` de `doex` er af halen.

Zo krijgen ze nette pagina met links in plaats van een 404.

Verder zit hier ook een `static/robots.txt` in. Deze blokkeert alleen de root landingpagina (`Disallow: /$`) en laat de course-subpaden toe voor indexatie.

De site draait nu als Docusaurus, zodat content makkelijk in Markdown te beheren is. De startpagina staat in `docs/index.md`.
We hosten bewust geen eigen back-end voor deze docs-site; daarom hoort privacygevoelige informatie niet in de site-content maar in Teams/iSAS, waar we alleen naar linken.
Voor nieuwe cousrse migreren we naar Brightspace; een 'proprietary' LMS, maar kunnen bepaalde content en front-end logica statisch/build-time maken, waardoor enig hergebruik beter mogelijk.

![pexe plaatje (raaf)](static/img/pexe-logo.png)

![pexe plaatje (vierluik)](static/img/image.png)

## Lokaal draaien

```bash
git clone --recurse-submodules https://github.com/AIM-ENE/aim-ene.github.io.git
cd aim-ene.github.io
git submodule update --init --recursive
yarn install
yarn build
yarn serve
```

## Submodules

Course sites staan als git submodules in `courses/`. Updates per course gaan in de eigen repo, en je update hier alleen de submodule commit.

De extra map `courses/` is alleen een lokale organisatorische map voor submodules en heeft geen directe URL-impact. Via `docusaurus.config.js` bepalen we expliciet welke paden worden ingeladen en onder welke routes.

## Zoek over alle courses

We gebruiken Docusaurus multi-instance docs om meerdere docs-bronnen in 1 build te bundelen, en `@easyops-cn/docusaurus-search-local` voor lokale zoekindex (Docusaurus v3 compatibel). Zie:

- Docusaurus docs multi-instance: https://docusaurus.io/docs/docs-multi-instance
- Local search plugin: https://github.com/easyops-cn/docusaurus-search-local

### Aanpak in deze repo (samenvatting)

- Elke course (doex/teex/soex/pexe) is een git submodule in `courses/`.
- Docusaurus laadt elke course via een eigen `@docusaurus/plugin-content-docs` instance met een eigen `id` en `routeBasePath`.
- De local-search plugin indexeert alle geladen docs, dus je kunt zoeken over alle courses vanaf de root site.
- Zoekresultaten kunnen een klein beetje achterlopen t.o.v. de course repo’s, omdat deze repo de submodule commit pins bijhoudt.
- In CI bouwen we wel alle docs voor de zoekindex, maar verwijderen we course-HTML (`/doex`, `/teex`, `/soex`, `/pexe`) uit het root deploy-artifact.

### Course updates syncen

```bash
cd courses/doex
git pull
cd ../..
git add courses/doex
git commit -m "Update doex submodule"
```

## Gewenste Architectuur

Doel:
- Doorzoekbaarheid vanaf de root site over alle course-materialen.
- Course teams blijven volledig autonoom in hun eigen repo.
- Geen monoliet: submodules zijn alleen voor indexering en synchronisatie.
- Eventual consistency is acceptabel: root search kan tijdelijk achterlopen op de bronrepos.

Belangrijk:
- Deze repo hoort niet de primaire deploybron van alle 4 course sites te zijn.
- De course sites blijven deployen vanuit hun eigen repositories.
- Zie ADR voor keuze, alternatieven en open punten: `docs/adr/ADR-0001-root-zoeken-over-course-websites.md`.
- Zie ADR voor robots/crawler beleid: `docs/adr/ADR-0002-robots-beleid-voor-root-site.md`.
- Zie ADR voor semantische branchnaamgeving: `docs/adr/ADR-0003-semantische-branch-namen.md`.
- Zie ADR voor keuze van Docusaurus en deploy-aanpak: `docs/adr/ADR-0004-docusaurus-als-static-site-generator.md`.

Crawler/robots aandachtspunt:
- Op de root staan links naar Teams en GitHub Classroom.
- Als die niet geïndexeerd mogen worden, moet `static/robots.txt` dit expliciet blokkeren (of de links moeten naar niet-indexeerbare context verplaatst worden).

## Markdown linting

We gebruiken `markdownlint-cli` voor markdown checks:

```bash
yarn lint:md
```

Voor VS Code is in de workspace de extensie `DavidAnson.vscode-markdownlint` aanbevolen (`.vscode/extensions.json`).

## Shared components package (draft)

Een eerste opzet voor een gedeelde component-library staat in `packages/brightspacosaurus` met package naam `@bartvanderwal/brightspacosaurus`.
