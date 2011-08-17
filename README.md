Løsningsforslag Extreme Startup
===============================
Hjelp, noe så kaotisk!

Jeg satt på The Scottsman med ~30 andre utviklere og programmerte så busta føyk for å svare på spørsmål.

Og spørsmålene kom ramlende inn. Jeg vil anta ett i sekundet. Mens jeg satt der og tastet og testet for harde livet, så var
det en tikk-tikk-tikkende følelse av at alt måtte gå mye fortere.

Det er i grunn et under at det er semikolon noe sted, og at testdekningen ikke er mer laber enn den er.

Resultat
--------
Prøverunden gikk utmerket. Det er raskt å få opp en webserver i node, og så snart man begynte å svare på spørsmål så tikket poengene inn.

Det var verre med hovedkonkurransen. Jeg hadde føkket hardt opp på session-håndteringen. Jeg trodde hvert spørsmål kom prefikset
med en user-id. Det viste seg å være et unikt spørsmåls-id, så jeg opprettet sessions til høyre og venstre uten å noen gang se dem igjen.

Noen luringer fant en exploit og fikk seg noen hundretusen poeng, og dermed fikk jeg en ny sjanse når poengene skulle resettes. Jeg fant
fram express sin session-håndtering istedet for min hjemmekokte.

Og gikk naturligvis rett i fella:

Som den express-nooben jeg er, så la jeg inn session-middlewaren i feil rekkefølge i konfigurasjonen, og dermed så fungerte den ikke nå
heller. Hodet i pulten.

Når jeg klarte å lappe den sammen så skjøt jeg fart til toppen av lista. Jeg tenkte jeg skulle pakke sammen og stikke mens jeg var på
topp. Den planen gikk også i vasken. Jeg ble tatt igjen mens jeg tok på meg jakka. Fysjom!

Moro var det lell. :-)

Kildekoden
----------
Så her er koden som jeg skrev i all hast en kveld i august. Det er ikke pent å se på, men Johannes ville gjerne ha den. Og dermed
kan den stå her til skrekk, forergrelse, lyst og latter.

- Magnar