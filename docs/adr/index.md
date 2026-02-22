---
title: ADR
slug: /adr
---

Deze sectie bevat **Architectural Decision Records (ADR)** voor het Docusaurus root-project `aim-ene.github.io`.

## Overzicht

- [ADR-0001 - Root zoeken over course-websites](/adr/adr-0001-root-zoeken-over-course-websites)
- [ADR-0002 - robots.txt-beleid voor root-site](/adr/adr-0002-robots-beleid-voor-root-site)
- [ADR-0003 - Semantische branchnamen](/adr/adr-0003-semantische-branch-namen)
- [ADR-0004 - Docusaurus als Static Site Generator](/adr/adr-0004-docusaurus-als-static-site-generator)

De ADR's geven extra achtergrond voor docenten en ontwikkelaars van het lesmateriaal over technische keuzes rondom Docusaurus voor deze websites. Voor studenten kunnen de ADR's ook als voorbeeld dienen. In SOEX (week 1 les 4) behandelen we ADR's expliciet, en daarna maak en gebruik je ze zelf en ook in het eind projectwerk (PeXe). Dit project is **alleen front-end** en wijkt daarmee af van de SoEx en PeXe projecten, die vaker full stack zijn. ADR's zijn een laagdrempelige opstap naar beter ontwerpdenken in teams: "a gateway to better design thinking" (Keeling & Runde, z.d.).

Alle ADR's in deze sectie volgen primair het ADR template van Michael Nygard (2011). In deze repo gebruiken we daarnaast expliciet een sectie `Options`, zodat alternatieven snel scanbaar blijven.

We laten na ook een ADR op te nemen over de keuze voor dit ADR template zelf; maar mits je het consistent doet kun je zelf anderen gebruiken. Als voorbeeld van en alternatief/optie kun je ook een Y-statement gebruiken, zoals beschreven door Doc Soc (z.d.), bijvoorbeeld:

> In de context van het publiceren van lesmateriaal voor Software Engineering vakken aan de HAN Academie voor ICT en Media, 'facing' de keuze voor een ADR template, 'we decided on' Nygard tenplate om aan te sluiten bij deze algemene standaard, *and neglected* een alternatief als Y-statements uitsluiten, waarmee we accepteren dat de ADR's wat langer zijn en meer verbose.

Merk ook op dat we hierbij kiezen voor ADR's in het Nederlands, maar handhaven van de Engelse kopjes en/of af en toe Engelse woorden. Hiermee krijgen we een soort hybride taal, die developers wel kennen van conventies in code als `student1.getSBer()`, waarbij de Java keywords en conventies wel Engels zijn (zoals de Java Beans standaard; [GeeksforGeeks, z.d.](https://www.geeksforgeeks.org/java/javabean-class-java/)), maar de domeintermen Nederlands, omdat het nu eenmaal een Nederlands domein is (met Nederlandstalige gebruikers, wetgeving en achtergronddocumenten).

## Bronnen

- Keeling, M., & Runde, D. (z.d.). *Share the Load: Distribute Design Authority with Architecture Decision Records*. Agile Alliance. Geraadpleegd op 22 februari 2026, van [https://agilealliance.org/resources/experience-reports/distribute-design-authority-with-architecture-decision-records/](https://agilealliance.org/resources/experience-reports/distribute-design-authority-with-architecture-decision-records/)
- GeeksforGeeks. (z.d.). *JavaBean Class in Java*. Geraadpleegd op 22 februari 2026, van [https://www.geeksforgeeks.org/java/javabean-class-java/](https://www.geeksforgeeks.org/java/javabean-class-java/)
- Nygard, M. (2011, 15 november). *Documenting Architecture Decisions*. Cognitect. Geraadpleegd op 22 februari 2026, van [https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
- Soc, D. (z.d.). *Y-statements*. Medium. Geraadpleegd op 22 februari 2026, van [https://medium.com/olzzio/y-statements-10eb07b5a177](https://medium.com/olzzio/y-statements-10eb07b5a177)
