
# Standaard Instructies voor LLM's/AI's (systeem prompt)

## Markdown & Linter Conventies voor Agents

Elke bron in de bronnenlijst moet een verwijzing in de tekst hebben, met een quote of parafrase. Zie onderstaand voorbeeld.

### Voorbeeld correcte bronvermelding

In de tekst:

> "the standard library, a simple and native way to create HTTP servers. The gorilla/mux framework [...] provides a more sophisticated way of creating HTTP servers with features like middleware and routing. The Gin framework [...] provides a comprehensive solution for creating REST applications." (JetBrains, z.d.)

En in de bronnenlijst:

JetBrains. (z.d.). *Building a REST API in Go: A Step-by-Step Guide (REST API Series).* van <https://www.jetbrains.com/guide/go/tutorials/rest_api_series/>

Gebruik **exact één lege regel** na een kopje en voor/na een lijst, nooit meerdere.
Een enkele witregel is voldoende voor zowel de kopje-lijst-combinatie als voor visuele scheiding.
Vermijd meerdere opeenvolgende lege regels (Quickmark: "Multiple consecutive blanks").
Als een lijst direct onder een kopje staat, gebruik dan precies één witregel ertussen (geen dubbele). Een inleidende zin boven een opsomming is vaak sterker dan direct met een opsomming te beginnen.
Kopjes moeten altijd worden omgeven door een enkele lege regel.
Gebruik altijd een semantisch H2/H3-kopje in plaats van vetgedrukte of blockquote pseudo-koppen (zoals **Let op:** of > **Let op:**). Dit is beter voor toegankelijkheid (A11Y) en zorgt dat kopjes in de ToC verschijnen.
Schrijf altijd in IS-AV (Inanimate Subject - Actieve Vorm): het onderwerp is levenloos en de zin is actief. Vermijd lijdende vorm. Zie bijvoorbeeld scribbr.com voor uitleg over IS-AV.
Deze conventies voorkomen meldingen van markdown linters zoals Quickmark en zorgen voor consistente, nette documentatie.
