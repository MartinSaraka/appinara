# Follow-up report — appinarasolutions@gmail.com — 03.09.2026

**Výsledok behu: 0 mailov odoslaných, 0 nových expirácií. Žiadny kandidát nespadá do FU1 okna.**

## Pre-flight
- Excel zapisovateľný (openpyxl open + save) — OK
- Záloha: `backup/Appinara_Prospekti_2026-09-03_1102.xlsx` — OK
- Rotácia záloh (max 10) zlyhala na PermissionError pri mazaní starých súborov — rovnaká chyba ako v daily-send behu o 10:00. Nová záloha vznikla, staré sa nedajú mazať. **Netriviálne: `backup/` narastá bez limitu.**
- Súbeh s odosielacou úlohou: žiadny. Daily send 03.09. dokončený 10:20, `.outreach-lock` = `DONE taskC-weby-research 09:35`.

## Kandidáti
Riadkov so statusom `Odoslané` + Odosielateľ `gmail`: **26**

| Vek (dní od N) | Počet | Akcia |
|---|---|---|
| 0 | 6 | mimo okna (dnešný send) |
| 1 | 4 | mimo okna |
| 2 | 4 | mimo okna |
| 3 | 12 | mimo okna — **zajtra (04.09.) vstupujú do FU1** |
| 4–14 (FU1) | **0** | — |
| > 14 (Expirované) | **0** | — |

Najstarší gmail kandidát má 3 dni (odoslané 31.08.). FU1 okno začína na 4 dňoch, preto sa dnes neposielal žiadny mail a nevznikol žiadny draft.

- **FU1 odoslaných: 0**
- **Novo „Expirované": 0**
- Reply-check sa nespúšťal (žiadny kandidát v okne) — Gmail API ani Chrome sa nedotýkali.
- Excel sa nemenil (okrem no-op save v pre-flighte).

## Chyby
- Rotácia záloh — PermissionError (viď vyššie). Neblokuje beh.

## Pipeline (celý Excel, 839 riadkov)
| Status | Počet |
|---|---|
| FU1 odoslané | 247 |
| Odoslané | 159 (z toho gmail 26, appinara.sk 133) |
| Expirované | 143 |
| Draft pripravený | 70 |
| Treba research | 61 |
| Email chýba | 59 |
| Odpoveď | 36 |
| FU2 odoslané (historické) | 23 |
| FU3 odoslané / breakup (historické) | 22 |
| Čaká na draft | 13 |
| LinkedIn iba | 2 |
| Pozastavené (3 varianty) | 3 |
| **Klient** | **1** |

## Poznámka k ďalšiemu behu
12 riadkov (584, 586–590, 592, 593, 652, 653, 656, 659) odoslaných 31.08. dosiahne zajtra 4 dni a bude to najväčšia dávka FU1 v tomto týždni. Pri limite 15/beh sa zmestia všetky.
