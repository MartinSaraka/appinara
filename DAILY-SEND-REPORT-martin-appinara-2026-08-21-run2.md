# Daily send report — martin@appinara.sk — 21.08.2026 (druhý beh, 13:32)

**Schránka overená:** „Google Account: Martin Saraka (martin@appinara.sk)" (Chrome u/3)

## Warmup limit a spotreba

| Položka | Hodnota |
|---|---|
| Dátum | 21.08.2026 (okno 17.–21.08.) |
| Warmup limit | 10 |
| Spotreba schránky pred behom | 8 (prvý beh dnes ~11:00–13:30) |
| Dnešný strop pre tento beh | **2** |
| **Reálne odoslané** | **0** |

Strop nebol vyčerpaný kvôli limitu, ale preto, že **žiadny kandidát neprešiel
kontrolou podpisu**.

## Pre-flight

- Excel zapisovateľný (openpyxl open + no-op save) ✔
- Záloha: `backup/Appinara_Prospekti_a_Outreach.backup-20260821-133227.xlsx` ✔
- Chrome pripojený (Browser 1, Windows) ✔

## Skontrolované drafty (6) — všetky zamietnuté

Poradie podľa priority: najprv všetkých 5 zostávajúcich **Vysoká**, potom jeden
**Stredná** z najstaršej vlny ako kontrolná vzorka.

| # | Riadok | Firma | Email | Priorita | Nález |
|---|---|---|---|---|---|
| 1 | 512 | Pálenica Poproč | palenicapoproc@gmail.com | Vysoká | podpis chýba |
| 2 | 513 | Atletika Košice | trener@atletikakosice.sk | Vysoká | podpis chýba |
| 3 | 514 | Rámko (Košice) | ramko@ramko.sk | Vysoká | podpis chýba |
| 4 | 515 | JOLL s.r.o. | info@joll.sk | Vysoká | podpis chýba |
| 5 | 516 | OFTA s.r.o. | oftaoptik@gmail.com | Vysoká | podpis chýba |
| 6 | 442 | Kominárstvo Oršulák | orsulak@reviziekominy.sk | Stredná | podpis chýba |

Pri každom overené screenshotom: adresát presne podľa Excelu ✔, telo neprázdne
a vecne správne ✔, **podpisový blok úplne chýba** ✘ — telo končí CTA a rovno
opt-out vetou.

Do Poznámok (stĺpec M) doplnené „Podpis chýba v drafte — neodoslané 21.08.2026",
Excel uložený a zápis overený (počet riadkov 532 → 532). Status ponechaný
„Draft pripravený", aby sa dali odoslať po oprave.

## Kontrolná vzorka z odoslanej pošty

Odoslaný mail (info@bouldrofka.sk, dnes 13:13) podpis **má**:

```
S pozdravom,
Martin Saraka
Appinara s.r.o. | appinara.sk | +421 917 566 722
```

→ nejde o chybu zobrazenia, ale o reálnu regresiu v generovaní draftov.

## Spresnenie voči rannému reportu

Ranný report tvrdil, že drafty z 13.–14.08. podpis majú a chýba až tým od 15.08.
**Neplatí to.** Filter `in:drafts before:2026/08/15` vracia **15 draftov**
(nie 3) a kontrolná vzorka z tejto starej vlny (r442, Kominárstvo) podpis tiež
nemá — používa len inú variantu opt-outu („P.S. Ak vás…"). Chyba teda nie je
viazaná na dátum vytvorenia.

## Stav pipeline (Odosielateľ = appinara.sk)

| Status | Počet |
|---|---|
| Odoslané | 47 |
| **Draft pripravený** | **36** — z toho 19 overene bez podpisu, 17 neskontrolovaných |
| Čaká na draft | 18 |
| Email chýba | 5 |
| Treba research | 5 |

## Odporúčanie

Pipeline je zablokovaná: strop 10/deň sa nedá naplniť, kým research/draft úloha
(„weby vetva") nedopĺňa podpisový blok. Treba opraviť šablónu a existujúcich 36
draftov hromadne doplniť alebo pregenerovať. Sám som drafty needitoval — úprava
tela odchádzajúceho mailu je nad rámec tejto úlohy.

## Poznámky k behu

- Chrome dvakrát zamrzol (screenshot timeout, kompozitné okno sa nezobrazovalo);
  vyriešené novou kartou. Po výpadkoch overený stav cez `in:sent` a počítadlo Drafts.
- Kontrola na konci: `in:sent after:2026/08/21` = 8 (nezmenené), Drafts = 38
  (nezmenené) → tento beh neodoslal nič a nevznikla duplicita.
- Rotácia záloh: v `backup/` sú 4 súbory, limit 10 nedosiahnutý, mazanie nebolo
  potrebné.
