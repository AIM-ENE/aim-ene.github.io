# ADR-0001: Root zoeken over course-websites

## Status

Proposed

## Context

Deze repository (`aim-ene.github.io`) is bedoeld als root/startpagina voor ENE. De 4 courses (DOEX, TEEX, SOEX, PEXE) hebben elk hun eigen repository, eigen team en eigen deployment.

Aanleiding voor een aparte root-repo:

- Studenten en docenten kunnen vanaf course-URL's voorspelbaar terugnavigeren door URL-segmenten weg te halen ("URL hacken").
- Korte onderbouwing uit usability-perspectief: "By deleting the final segment of the URL, a user can move up to the parent page."
- Deze aanpak past bij het idee dat URL-structuur ook bruikbare navigatie biedt (Gurkha Technology, z.d.).

Er is een wens om vanaf de root te kunnen zoeken over al het course-materiaal, zonder de course-repositories om te bouwen naar een monorepo.
Dat kan via meerdere docs-instances in Docusaurus (Docusaurus, z.d.) en een lokale zoekplugin die over alle geladen content indexeert (easyops-cn, z.d.).

Aanvullend:

- Enige vertraging tussen course-updates en root-search (eventual consistency) is acceptabel.
- De root bevat links die niet gewenst zijn voor publieke crawler-indexatie (o.a. Teams, GitHub Classroom).

## Options

1. Geen cross-course search op de root (alleen links)
2. Oude eenvoudige root HTML-pagina zonder Docusaurus
3. Root-indexering over course-content (eventual consistency)
4. Volledige monorepo met centrale build/deploy van alle courses

## Decision

We kiezen optie 3:

- De 4 course-repositories blijven zelfstandig.
- Deze root-repo indexeert course-content zodat je vanuit de root kunt zoeken.
- Root search mag tijdelijk achterlopen op course-repositories (eventual consistency).

## Consequences

Positief:
- Teams kunnen zelfstandig publiceren in hun eigen repo.
- Root search biedt extra vindbaarheid zonder monorepo-migratie.

Negatief / aandacht:
- De root moet periodiek worden gesynchroniseerd met nieuwe course-updates.
- Als root-build course content zelf publiceert onder `/doex`, `/teex`, `/soex`, `/pexe`, kan dat conflicteren met het uitgangspunt dat courses vanuit eigen repo deployen.
- Crawler-indexatie moet expliciet afgestemd blijven met beleid voor gevoelige links.

## Implementation Notes

- `courses/` is een lokale technische map; URL-routing wordt bepaald in `docusaurus.config.js`.
- Intern gebruiken we git submodules onder `courses/` als versiebeheermechanisme; dit is een implementatiedetail en geen gebruikersconcept.
- Updateflow voor eventual consistency:
  1. `cd courses/doex`
  2. `git pull`
  3. `cd ../..`
  4. `git add courses/doex`
  5. `git commit -m "Update doex submodule"`
- Robotsbeleid expliciet maken in `static/robots.txt` (allow/disallow conform gewenste indexatie).

## Bronnen

- Docusaurus. (z.d.). *Docs Multi-instance*. Geraadpleegd op 22 februari 2026, van [https://docusaurus.io/docs/docs-multi-instance](https://docusaurus.io/docs/docs-multi-instance)
- easyops-cn. (z.d.). *@easyops-cn/docusaurus-search-local*. Geraadpleegd op 22 februari 2026, van [https://github.com/easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
- Gurkha Technology. (z.d.). *SEO Friendly Permalinks & URL Structure*. Geraadpleegd op 22 februari 2026, van [https://gurkhatech.com/seo-friendly-permalinks-url-structure/](https://gurkhatech.com/seo-friendly-permalinks-url-structure/)
