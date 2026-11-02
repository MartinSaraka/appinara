# FOLLOW-UP REPORT — weby vetva (martin@appinara.sk) — 04.09.2026

## VÝSLEDOK: 0 odoslaných — BEH ZASTAVENÝ NA PRE-FLIGHT (súbeh s TASK A)

Beh 22:11 – 22:13. Chrome som **vôbec neotváral** (zdieľaný prehliadač s TASK A), preto ani
screenshot účtu — nemalo sa čo odosielať.

## Pre-flight
- Excel zapisovateľný: OK (`.writetest_weby_fu_221118`)
- Záloha: `backup/Appinara_Prospekti_a_Outreach.backup-20260904-221119.xlsx`
- `.outreach-lock` pri štarte: `STOPPED taskB-weby-followup 03.09.2026 14:17` → vyzeralo to na voľno
- **Súbeh: ZISTENÝ — TASK A štartoval 8 sekúnd predo mnou**

## Prečo som nič neposlal — TASK A beží súbežne

V `backup/` pribudol cudzí súbor tesne pred mojou zálohou:

| Čas | Súbor | Kto |
|---|---|---|
| 22:11:11 | `Appinara_Prospekti_a_Outreach_taskA_20260904_221111.xlsx` | **TASK A** (weby daily send) |
| 22:11:19 | `Appinara_Prospekti_a_Outreach.backup-20260904-221119.xlsx` | TASK B (ja) |

Ide o pre-flight zálohu TASK A, čiže daily send je v tej chvíli **na začiatku** svojho behu.
Pri tempe ~1 mail / 3–4 min pobeží ešte hodiny a spotrebuje spoločný denný strop.
Poslať do toho follow-upy = presne kolízia z 02.09. (46 mailov z limitu 30) a dve úlohy
robiace `load → save` nad jedným Excelom.

**Excel som po zálohe už needitoval — ani jeden riadok.**

## Limit a pipeline (len prepočet, nič sa nezapisovalo)
- Warmup limit (fáza od 31.08.) = **30**
- Spotreba pri štarte (appinara.sk, L = 04.09., Odoslané/FU1 odoslané) = **0** → strop by bol 30
- Kandidáti `Odoslané` + appinara.sk, vek 4–14 dní = **70**
  - 30× vek 4 dni (31.08.), 20× vek 7 dní (28.08.), 20× vek 8 dní (27.08.)
- Stĺpec N vyplnený u všetkých 70 — žiadny fallback na L
- Vek > 14 dní = **0** → **žiadne expirácie**, nič sa neprepisovalo

Okno je bezpečné: najstarší kandidáti (27.08.) vypršia až **10.09.**, čiže na zajtrajší beh
je času dosť. Pipeline však narástla zo 40 na 70 — pri strope 30/deň sa nedá dobehnúť
jedným behom.

## ⚠️ Systémová chyba — piata kolízia (03.09. bola štvrtá)

**TASK A stále nečíta ani nezapisuje `.outreach-lock`.** Zámok je jednostranný: TASK B sa mu
podriaďuje, TASK A ho ignoruje. Návrhy z 02.09. a 03.09. zostávajú nezrealizované.

Nové zistenie k 04.09.: obe úlohy štartovali **o 22:11**, hoci ich plánované okná sú 13:00
(TASK A) a 14:00 (TASK B). Behy sa zjavne odkladajú/dobiehajú a pri dobiehaní štartujú
naraz — časové rozostúpenie okien teda samo o sebe problém nevyrieši.

Poradie riešení podľa účinnosti:

1. **Zreťaziť úlohy** — follow-up spúšťať až ako pokračovanie daily sendu, nie ako
   samostatný task. Odstráni súbeh úplne, aj pri dobiehaní.
2. TASK A musí `.outreach-lock` **čítať** (RUNNING ⇒ STOP) aj **zapisovať** pri štarte.
3. Strop prepočítať tesne pred **každým** odoslaním, nie len na začiatku behu.
4. Alebo tvrdé rozdelenie kvóty: 20 daily send / 10 follow-up, bez zdieľaného výpočtu.

## Stav
- Excel: **needitovaný mnou**
- Lock: `STOPPED taskB-weby-followup 04.09.2026 22:13 - suben s TASK A (zaloha taskA 22:11:11), 0 odoslanych`
- FU1 kandidáti: **70**, okno do 10.–14.09.
- Expirácie: **0**
