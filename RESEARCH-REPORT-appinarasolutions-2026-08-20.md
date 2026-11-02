# Research report — appinara-research-prospects, 20.08.2026

**Backlog guard:** N_real = **12** skutočných cold draftov v schránke (12/12 riadkov „Draft pripravený"/gmail overených) → **0 fantómov, rekonciliácia neopravila žiadny riadok**. Guard pod 30 = štandardný beh.

**Rozhodnutie behu:** v Exceli čakalo **49 odovzdaných riadkov** („Čaká na draft"/gmail). Podľa KROK 1 majú prednosť pred hľadaním nových firiem — backlog prevyšuje rozpočet behu, takže **nové firmy sa tento beh nehľadali**. Spracovaných 19 riadkov.

## Výsledok

| | počet |
|---|---|
| Draft pripravený (overený v schránke) | **13** |
| Odovzdané do weby vetvy (Ponuka 3) | 5 |
| Treba research (diskvalifikované) | 1 |

**Drafty podľa segmentu:** zdravotníctvo 3 (Dentalis, Rehabilica, DermaBelle), e-shop 4 (Čaje.sk, Eugenika, Sport-potreby, Natura Apotheke), fitness 3 (Joga Rheia, FIT POINT, Formery), gastro 1 (Remys), hotel 1 (Kráľov Prameň), reality 1 (NEOREAL).

Kvóty prerozdelené podľa reálnych reply rates z Excelu: zubné 14,3 % a zdravotníctvo 11,9 % posilnené, e-shop 10,1 % posilnený, gastro 0 % a hotely 3,1 % utlmené na po jednom najsilnejšom kandidátovi.

## Odovzdané do weby vetvy (diagnostika §3 = Ponuka 3)

- **Zubná Klinika Chrenová** — objednávanie cez holý formulár bez termínov; pôvodná URL 404, opravená na www.zubnaklinika.eu
- **PILATES PREMIUM Nitra** — žiadny rozvrh ani rezervácia, živý „LOREM IMPSUM" popup
- **Reštaurácia Kolégium** — web bez HTTPS a bez mobilného zobrazenia
- **Kulhány Restaurant** — predávajú degustačné večere, rezervácia len telefón; email opravený na info@smartfood.sk
- **Penzión Limba** — celý web je placeholder „prebiehajú úpravy", pritom Booking 9/10 z 498 recenzií

## Vylúčení

- **Pilates Cassovia** — doména zaparkovaná a na predaj („Domain For Sale"), firma pravdepodobne skončila → „Treba research", neoslovovať
- Chatbot: 0 (žiadny z 19 web ho nemal)
- Duplicity: 0 (všetko existujúce riadky)

## Najsilnejšie hooky (na učenie)

1. **Formery Studio** — FAQ posiela súkromné a firemné skupiny na `hello@formery.com`, kým v pätičke je `hello@formery.studio`. Najhodnotnejšie dopyty idú na neexistujúcu adresu. Overiteľné, konkrétne, a podľa rule G im rovno píšeme, že preklep si opravia sami.
2. **Penzión Kráľov Prameň** — e-mailový odkaz na stránke Kontakt vedie na šablónovú adresu `info@hoteldemo.com`. Otvorené ocenením, že ich svadobný formulár sa pýta presne na to, na čo treba.

## Pipeline po behu

- **Draft pripravený / gmail: 25** (12 starých + 13 nových), všetkých 25 overených v schránke
- Čaká na draft / gmail: 30 (zvyšok backlogu na ďalší beh)
- Čaká na draft / appinara.sk: 18 (z toho 5 nových z tohto behu)

Backlog guard **beh nezastavil** (12 < 30). Excel zálohovaný pred behom, ukladaný po každom riadku.

**Poznámka:** rotácia záloh v `backup\` neprebehla — jeden starší súbor je zamknutý na zápis (PermissionError). Nová záloha sa vytvorila správne, len sa neodmazal najstarší súbor.
