# Follow-up report — vetva martin@appinara.sk — 11.08.2026

**Výsledok: 0 odoslaných mailov. Žiadny kandidát nespadá do FU okna.**

## Pre-flight

- Excel zapisovateľný (openpyxl `r+b` OK) — ✅
- Záloha z dnešného dňa už existuje: `backup/Appinara_Prospekti_2026-08-11_1733.xlsx` (TASK A o 17:33). Nová záloha nevytvorená — beh nerobí žiadny zápis.
- Súbeh: TASK A (weby-daily-send) dnes dobehol o ~17:34 bez odoslania. Žiadny konflikt.

## Denný strop

| Položka | Hodnota |
|---|---|
| Warmup limit (10.–14.08.2026) | 5 |
| Dnešná spotreba schránky (TASK A + B) | 0 |
| **Dnešný strop** | **5** |

Strop nebol limitujúci — obmedzením bola absencia kandidátov.

## Kandidáti

Filter: `Status = "Odoslané"` AND `Odosielateľ = "appinara.sk"` → **5 riadkov**, všetky s `Pôvodné odoslané (N) = 10.08.2026`, teda **vek 1 deň**.

| Riadok | Firma | N | Vek | Vyhodnotenie |
|---|---|---|---|---|
| 415 | Bike Bratislava | 10.08.2026 | 1 d | mimo okna (< 4 dni) |
| 416 | Stolárstvo Jankura | 10.08.2026 | 1 d | mimo okna |
| 417 | Cukráreň Wagner | 10.08.2026 | 1 d | mimo okna |
| 418 | Plávanie Prešov | 10.08.2026 | 1 d | mimo okna |
| 419 | Cukráreň Dorka | 10.08.2026 | 1 d | mimo okna |

- **FU1 (4–14 dní):** 0
- **Expirované (> 14 dní):** 0
- Stĺpec N vyplnený u všetkých piatich — fallback na `Posledný kontakt` nebol potrebný.

Reply-check sa nespúšťal — bez kandidáta na odoslanie nemá čo overovať. Prvý beh, ktorý týchto päť zachytí, je **14.08.2026** (vek 4 dni).

## Poznámka mimo rozsah úlohy

Trinásť riadkov so `Status = "Odoslané"` a vekom 4–7 dní má `Odosielateľ = "gmail"` (Kvitok, Hollywood Smile, Reštaurácia Centrum Zvolen, DLUGO reality, LiCaffè, Penzión VILLA, Umelecká keramika, Milinko, Rehaped, DENTISTS, Impulse Gym, Olymp Center, Spiš Restaurant). Patria vetve `appinara-followup-sequence` — táto úloha sa ich nedotýka.

## Zápisy do Excelu

Žiadne. Súbor ostal nezmenený.
