# Daily send report — martin@appinara.sk — 27.08.2026

**Schránka overená:** titulok karty „… - martin@appinara.sk - Appinara s. r. o. Mail" (Chrome u/3) ✔

Beh mal dve časti: **13:00 automatický beh** (11 mailov, ktoré mali podpis) a **14:40
manuálny pokyn** („daj im podpis a odošli zvyšné") — doplnenie podpisu do draftov
a odoslanie ďalších 9 do naplnenia limitu.

## Warmup limit a spotreba

| Položka | Hodnota |
|---|---|
| Dátum | 27.08.2026 (okno 24.–28.08.) |
| Warmup limit | 20 |
| Spotreba pred behom (meraná 13:00) | 0 |
| **Odoslané touto úlohou** | **20** (11 + 9) |

## ⚠️ Limit prekročený súbežnou úlohou

`in:sent after:2026/08/27` v schránke ukazuje **29 odoslaných mailov**, nie 20.
Rozdiel nepochádza z tejto úlohy:

- 20 cold mailov = táto úloha (rozpis nižšie)
- 7 riadkov so statusom „FU1 odoslané" a Posledný kontakt = 27.08.2026
  (r461, 462, 466, 467, 468, 470, 471) = **súbežný follow-up beh**
- 2 ďalšie odoslané maily nemajú v Exceli zodpovedajúci zápis

Follow-up úloha bežala paralelne a merala si spotrebu samostatne, takže obe úlohy
si „nárokovali" ten istý denný limit. **Schránka je dnes na 29/20.** Zajtra treba
odosielanie vynechať alebo výrazne zredukovať a hlavne zosúladiť obe úlohy tak,
aby limit počítali spoločne (alebo nebežali v ten istý deň).

## Pre-flight

- Excel zapisovateľný (openpyxl open + no-op save) ✔
- Záloha: `backup/Appinara_Prospekti_a_Outreach.backup-20260827-130422.xlsx` ✔
- Chrome pripojený (Browser 1, Windows) ✔
- Rotácia záloh: mazanie starých záloh zlyhalo („Operation not permitted" — súbory sú
  len na čítanie z prostredia úlohy). Priečinok `backup/` má > 10 súborov, treba
  vyčistiť ručne.

## Odoslané — 1. časť, 13:00 (11, drafty už podpis mali)

Poradie: Vysoká → Stredná.

| # | Riadok | Firma | Email | Priorita |
|---|---|---|---|---|
| 1 | 568 | MEDROB (Zuzana Javorková – MEDROB) | info@medrob.sk | Vysoká |
| 2 | 569 | Ateliér výtvarného umenia – K. Vargová | katy.vargova@gmail.com | Vysoká |
| 3 | 570 | Tennis Point, s.r.o. | recepcia@tenispoint.sk | Vysoká |
| 4 | 571 | Zlatý Vŕšok (Farma Zlatý vršok) | zlatyvrsok@zlatyvrsok.sk | Vysoká |
| 5 | 572 | Salaš Dechtáre | fukas@salasdechtare.sk | Vysoká |
| 6 | 460 | Ranč Lhota, a.s. | mariasuchanek@ranclhota.sk | Stredná |
| 7 | 463 | Pivovar Vŕšky (Drevenice Terchová) | obchod@dreveniceterchova.sk | Stredná |
| 8 | 573 | RODAN - RH (Mäso - Údeniny Rodan) | obchod@maso-udeniny.sk | Stredná |
| 9 | 574 | bajkula, s.r.o. | bajkula@bajkula.sk | Stredná |
| 10 | 575 | Paintball Devils (ŠK Devils) | info@paintballdevils.sk | Stredná |
| 11 | 576 | HOFFER RENT | info@hoffer-rent.sk | Stredná |

Pri každom overené: adresát presne podľa Excelu ✔, neprázdne telo (900–945 znakov) ✔,
podpisový blok „Martin Saraka / Appinara s.r.o. | appinara.sk | +421 917 566 722" ✔,
po kliknutí na Send potvrdenie „Message sent" ✔. Medzi odoslaniami randomizovaná
pauza 72–118 s. Zápis do Excelu (Status = Odoslané, L = 27.08.2026, N = 27.08.2026)
prebehol ihneď po každom odoslaní a bol po zápise znovu načítaný a overený.

## Odoslané — 2. časť, 14:40 (9, podpis doplnený)

| # | Riadok | Firma | Email | Priorita |
|---|---|---|---|---|
| 12 | 226 | Penzión Trio Čingov (Hotel Trio) | hoteltrio@hoteltrio.sk | Vysoká |
| 13 | 245 | Penzión Limba (Limba Family Nature Resort) | limba@liptour.sk | Vysoká |
| 14 | 281 | Penzión Jakub | paulik@penzionjakub.sk | Vysoká |
| 15 | 519 | Escape Room Hobbit Košice | rezervacia@escaperoomhobbit.sk | Vysoká |
| 16 | 520 | Súkromná MŠ Hviezdičky | hviezdicky@hviezdicky.sk | Vysoká |
| 17 | 521 | Škôlka Sovička | info@skolkasovicka.sk | Vysoká |
| 18 | 522 | Duall-Rental (DUAL Prepravné vozíky) | patriklopusny@gmail.com | Vysoká |
| 19 | 523 | Autoškola Šváby (Prešov) | info@autoskolasvaby.sk | Vysoká |
| 20 | 524 | Hudobná škola pre všetkých | info@hudobnaskola.sk | Vysoká |

### Ako sa podpis dopĺňal

Do tela draftu sa **pred opt-out vetu** vložili štyri riadky (rovnaké umiestnenie,
aké majú staršie odoslané maily — teda za CTA, pred opt-out):

```
S pozdravom,
Martin Saraka
Appinara s.r.o. | appinara.sk | +421 917 566 722
(prázdny riadok)
```

Kontrola pri každom: podpis sa v tele nachádza práve raz, adresát sedí s Excelom,
telo neprázdne (801–944 znakov), po odoslaní potvrdenie „Message sent". Pri prvom
drafte (r226) sa navyše overilo, že Gmail zmenu uložil na server („Draft saved",
po reloade konceptu je podpis stále v tele) — až potom sa pokračovalo v sérii.
Pauzy medzi odoslaniami randomizované 68–118 s.

Text mailov sa inak **nemenil** — doplnil sa výhradne podpisový blok.

## Pôvodný nález: 86 draftov bez podpisu

Kontrola cez Gmail `in:drafts "917 566 722"` (telefón sa nachádza výhradne v podpise):

- Konceptov v schránke pred behom: **97**
- Z toho s podpisom: **11** → všetkých 11 dnes odoslaných
- **Bez podpisu: 86** → neodoslané

Kontrolná vzorka (r226 Penzión Trio, hoteltrio@hoteltrio.sk, Vysoká priorita):
telo je vecne v poriadku, ale končí CTA a rovno opt-out vetou — podpisový blok
úplne chýba. Po behu je `in:drafts "917 566 722"` = **0**, čiže žiadny zostávajúci
koncept podpis nemá.

Je to **tá istá regresia ako 21.08.2026** (viď `DAILY-SEND-REPORT-martin-appinara-2026-08-21-run2.md`).
Medzitým sa 24.08. opravila (15 draftov s podpisom), ale research report z 26.08.
sa znovu odvoláva na „guide §10" (tvrdenie, že Gmail dopĺňa HTML podpis sám) —
**to je overene nepravdivé**: odoslané maily majú podpis len vtedy, keď bol v tele
draftu, a stojí *pred* opt-out vetou, kam ho žiadny automatický footer nedá.

V prvej časti behu (13:00) som drafty needitoval. V druhej časti (14:40) na
explicitný pokyn používateľa — a len pri tých 9, ktoré sa aj odoslali.

## Stav pipeline (Odosielateľ = appinara.sk)

| Status | Počet |
|---|---|
| Odoslané | 79 |
| **Draft pripravený** | **89** (podpis chýba vo všetkých → treba doplniť) |
| FU1 odoslané | 28 |
| Odpoveď | 7 |
| Email chýba | 5 |
| Treba research | 5 |
| Expirované | 3 |

## Kontrola na konci

- Všetkých 20 riadkov overených po zápise: Status = Odoslané, L = 27.08.2026,
  N = 27.08.2026 ✔
- `in:sent after:2026/08/27` = **29** → 20 z tejto úlohy, 7 FU1 zo súbežného behu,
  2 nezaradené (viď upozornenie o limite hore)
- Zálohy: `backup/…-20260827-130422.xlsx` a `…-20260827-144xxx.xlsx`

## Odporúčanie

1. **Zosúladiť daily-send a follow-up úlohu** — dnes obe minuli ten istý limit
   nezávisle a schránka skončila na 29/20. Buď spoločné počítadlo, alebo ich
   nespúšťať v ten istý deň.
2. **Opraviť šablónu draftov** vo „weby" research vetve — podpisový blok musí byť
   súčasťou tela, medzi CTA a opt-out vetou. Guide §10 opraviť alebo zmazať
   (tvrdenie, že Gmail dopĺňa podpis sám, je overene nepravdivé).
3. Zvyšných **89 draftov** hromadne doplniť o podpis — postup overený, dá sa
   spraviť dávkovo mimo odosielania.
4. Vyčistiť `backup/` ručne (rotácia z úlohy nemá práva mazať).
