# Daily Send Report — martin@appinara.sk — 30.08.2026 (nedeľa)

## Výsledok: 0 odoslaných — mimo warmup harmonogramu

Warmup tabuľka definuje len pracovné dni:

| Okno | Limit |
|---|---|
| 10.–14.08. (po–pi) | 5 |
| 17.–21.08. (po–pi) | 10 |
| 24.–28.08. (po–pi) | 20 |
| od 31.08. | 30 |

**30.08.2026 je nedeľa a nespadá do žiadneho okna → dnešný limit = 0.**
Železné pravidlo „warmup limit sa neprekračuje za žiadnych okolností" sa pri
nedefinovanom dni vykladá konzervatívne. Rovnaký výklad ako 16.08., 22.08. a 29.08.
Sekundárne: víkendový cold outreach z novej schránky bez histórie je aj tak
kontraproduktívny (nižší open rate, vyšší spam-signál).

Chrome / Gmail sa neotváral, žiadny draft sa nedotkol, žiadny riadok Excelu sa nemenil.

## Pre-flight (vykonaný pred rozhodnutím)

- Zapisovateľnosť Excelu: **OK** (openpyxl load + no-op save prešiel)
- Záloha: `backup/Appinara_Prospekti_a_Outreach_taskA_20260830_130518.xlsx`
- Lock `.outreach-lock`: uvoľnený (29.08. weby-followup ukončený) → žiadna kolízia
- Dnešná spotreba schránky appinara.sk: **0**

## Stav pipeline (Prospekti, Odosielateľ = appinara.sk)

| Status | Počet |
|---|---|
| **Draft pripravený** | **69** |
| Odoslané | 70 |
| FU1 odoslané | 57 |
| Odpoveď | 7 |
| Email chýba | 5 |
| Treba research | 5 |
| Expirované | 3 |

Zo 69 draftov: **Vysoká 19**, Stredná 47, Nízka 3. Všetkých 69 má validný e-mail.

## Ďalší beh

Pondelok **31.08.2026** — otvára sa limit **30/deň**. Pipeline (69) pokryje ~2,3 dňa.

⚠️ Pripomienka z 28.08.: 31.08. treba zosúladiť s follow-up úlohou (weby FU beží
o 14:05) — obe čerpajú z tej istej schránky a 28.08. spolu poslali 40 = 2× limit.

## Poznámky

- Prerezanie záloh na max 10 zlyhalo (`PermissionError` — sandbox nevie mazať staré
  súbory v `backup/`). Staré zálohy treba občas zmazať ručne. Nová záloha vznikla.
