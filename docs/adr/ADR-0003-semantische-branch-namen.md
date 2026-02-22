# ADR-0003: Semantische branchnamen

## Status

Accepted

## Context

Deze repository heeft meerdere soorten wijzigingen:

- content-updates
- build/deploy-configuratie
- architectuur- en refactorstappen
- fixes over meerdere submodules

Zonder vaste branchconventie is het moeilijker om werksoorten en PR-intentie snel te herkennen.

## Decision

We gebruiken semantische branchnamen als teamafspraak.

Voornaamste branchtypes:

- `feature/` nieuwe functionaliteit
- `fix/` bugfix
- `refactor/` interne herstructurering zonder functionele wijziging
- `chore/` tooling/infra/onderhoud
- `docs/` documentatie

We gebruiken hiervoor termen die aansluiten op Conventional Commits, maar dit ADR gaat expliciet over branchnaamgeving.
De types zijn dus afgeleid van de termen uit Conventional Commits (Conventional Commits, z.d.), toegepast op branches.
Commitberichten blijven vrij, zolang ze duidelijk en reviewbaar zijn.

## Werkwijze

We hanteren **GitHub Flow** als lichte werkwijze (GitHub Docs, z.d.):

- korte feature/refactor branches vanaf `main`
- pull request terug naar `main`
- snelle integratie en kleine iteraties

Deze aanpak ligt dichter bij **Trunk-Based Development** en **Continuous Integration** dan de zwaardere Git Flow-variant met extra langdurige branchtypen die we in deze repo niet gebruiken.

## Consequences

Positief:

- Duidelijk onderscheid tussen functionele en niet-functionele werkstromen.
- Snellere herkenning van PR-intentie in CI en code review.
- Eenvoudige, lichte naamconventie passend bij GitHub Flow.

Negatief:

- Kleine extra discipline voor branch-naamgeving.
- Team moet type-keuzes afstemmen (bijv. `refactor` vs `chore`).

## Voorbeelden

- `feature/docusaurus-search-all`
- `fix/broken-anchor-pexe-walkingskeleton`
- `refactor/brightspacosaurus`
- `docs/adr-0004-docusaurus-keuze`
- `chore/update-submodule-doex`


## Bronnen

- Conventional Commits. (z.d.). *Conventional Commits 1.0.0*. Geraadpleegd op 22 februari 2026, van [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)
- GitHub Docs. (z.d.). *GitHub flow*. Geraadpleegd op 22 februari 2026, van [https://docs.github.com/en/get-started/using-github/github-flow](https://docs.github.com/en/get-started/using-github/github-flow)
