# Follow-up report — gmail vetva — 14.08.2026

## Zhrnutie
- **Kandidátov v okne 4–14 dní: 1** (Babilia Medical / Rehaped, row 400, 10 dní)
- **Odpovedalo (skip): 0**
- **FU1 odoslaných dnes: 0**
- **Novo „Expirované": 0**
- **Odoslané maily: 0** — Chrome krok sa nespúšťal, nebolo čo posielať

## Kľúčové zistenie — Babilia Medical (Rehaped)
Poznámky v Exceli tvrdili, že FU1 **nebol odoslaný** (4 neúspešné behy 10.–13.08., zamŕzajúci Gmail compose).
Overenie cez Gmail API ukázalo opak: **FU1 BOL odoslaný 13.08.2026 o 18:48** — vlákno `19fc6800359cabc6`
obsahuje 2 správy, obe od `appinarasolutions@gmail.com`, druhá je plné znenie FU1
(„Re: Dotazník k vyšetreniu — wordový súbor v roku 2026"). Prospekt neodpovedal.

**Akcia:** Status opravený `Odoslané` → **`FU1 odoslané`** (terminálny), Posledný kontakt = 13.08.2026.
Ak by sa status nechal na „Odoslané", zajtrajší beh by poslal **tretí mail** a porušil železné pravidlo.

## ⚠️ Vyžaduje ručný zásah
V Konceptoch **stále visí zvyškový FU1 draft** v tom istom vlákne
(draft `r-6399692399223286562`, vytvorený 13.08.2026 17:20, adresát `recepcia.rehaped@gmail.com`).
FU1 už odišiel → tento draft **NEPOSIELAŤ, ručne zmazať**. Gmail API tu nemá delete_draft.

## Chyby / poznámky k behu
- Pre-flight: zápis do Excelu OK, záloha `backup/Appinara_Prospekti_2026-08-14_1102.xlsx` vytvorená.
- Prerezanie starých záloh na 10 zlyhalo (`PermissionError` pri mazaní v `backup/`) — needs manual cleanup, nie je blokujúce.
- Ostatných 20 „Odoslané" gmail riadkov má vek 0–1 dňa → mimo okna, do FU1 dozrejú od 18.08.

## Pipeline (stĺpec K)
| Status | Počet |
|---|---|
| Odoslané | 39 |
| FU1 odoslané | 68 |
| Odpoveď | 25 |
| Klient | 0 |
| Expirované | 139 |
| Draft pripravený | 54 |
