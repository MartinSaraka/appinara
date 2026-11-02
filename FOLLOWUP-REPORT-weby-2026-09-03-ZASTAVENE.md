# FOLLOW-UP REPORT — weby vetva (martin@appinara.sk) — 03.09.2026

## VÝSLEDOK: 0 odoslaných — BEH ZASTAVENÝ NA PRE-FLIGHT (súbeh s TASK A)

Beh 14:04 – 14:17. Účet overený: titulok karty `martin@appinara.sk - Appinara s. r. o. Mail` (Chrome u/3).

## Pre-flight
- Excel zapisovateľný: OK (`.writetest_weby_fu_140510`)
- Záloha: `backup/Appinara_Prospekti_a_Outreach_taskB_20260903_140511.xlsx`
- `.outreach-lock` pri štarte: `DONE taskC-weby-research 03.09.2026 09:35` → vyzeralo to na voľno; prepísané na `RUNNING taskB-weby-followup 14:10`
- **Súbeh: ZISTENÝ AŽ PO ŠTARTE → beh zastavený pred prvým odoslaním**

## Limit (krok 1)
- Warmup limit (fáza od 31.08.) = **30**
- Spotreba pri štarte (appinara.sk, L = 03.09., Odoslané/FU1 odoslané) = **1** (r. 705 Esthetic Dentline) → strop **29**
- Kandidáti `Odoslané` + appinara.sk = **134**; vek 4–14 dní = **40** (20× 27.08. = 7 dní, 20× 28.08. = 6 dní)
- Vek > 14 dní = **0** → **žiadne expirácie**, nič sa neprepisovalo
- N (Pôvodné odoslané) vyplnené u všetkých 40 — žiadny fallback na L
- 29 FU1 bolo pripravených (konkrétny fakt z M + jeden nový uhol, CTA rotovaná podľa §7). Neodoslané.

## Prečo som nič neposlal — TASK A beží súbežne

`in:sent after:2026/09/03` v schránke ukázalo dva cold maily odoslané **počas môjho pre-flightu**:

| Čas | Predmet |
|---|---|
| 14:04 | „Počítadlá na vašom webe ukazujú samé nuly" (r. 705, Esthetic Dentline) |
| 14:08 | „Na webe vám ešte visí dovolenka do 28. augusta" (r. 706, KIDSMILE) |

Potvrdené tromi nezávislými meraniami Excelu:

| Čas | mtime Excelu | Spotreba (appinara.sk, L = 03.09.) |
|---|---|---|
| 14:05 | 14:05 | 1 (r. 705) |
| 14:11 | 14:08:27 | 2 (r. 705–706) |
| 14:16 | 14:15:11 | 4 (r. 705–708: + SI-DENTAL GROUP, AnDental) |

TASK A odosiela ~1 mail za 3–4 min a **zapisuje do toho istého súboru**. V pipeline má
~68 riadkov `Draft pripravený` a spoločný strop 30 — pri tomto tempe pobeží ešte cca 1,5–2 h
a spotrebuje celý dnešný limit.

Poslať 29 follow-upov do toho by znamenalo presne to, čo sa stalo **02.09.**: spoločný denný
limit prekročený (vtedy 46 z 30) plus dve úlohy robiace `load → save` nad jedným Excelom.
Preto: **0 odoslaných, Excel nedotknutý** (nezapisoval som ani jeden riadok, aby som
neprepísal zápisy TASK A).

## ⚠️ Systémová chyba — štvrtá kolízia (02.09. bola tretia)

**TASK A nečíta ani nezapisuje `.outreach-lock`.** Lock som nastavil na `RUNNING` o 14:05:41;
TASK A napriek tomu zapisoval do Excelu o 14:08:27 a 14:15:11. Zámok je tým pádom
jednostranný a neplní účel — TASK B sa mu podriaďuje, TASK A ho ignoruje.

Návrh (rovnaký ako 02.09., zatiaľ nezrealizovaný):

1. TASK A musí `.outreach-lock` **čítať** (RUNNING ⇒ STOP) aj **zapisovať** pri štarte.
2. Strop prepočítať tesne pred **každým** odoslaním, nie len na začiatku behu.
3. Alebo tvrdé rozdelenie: 20 daily send / 10 follow-up, bez zdieľaného výpočtu.
4. Časové okná úloh sa dnes prekrývajú (daily send 13:00, follow-up 14:00) a daily send
   pri 4 min/mail nestihne skončiť do 14:00 — okná treba rozostúpiť alebo úlohy zreťaziť.

## Stav
- Excel: **needitovaný mnou** (posledný zápis 14:15:11 patrí TASK A)
- Lock: `STOPPED taskB-weby-followup 03.09.2026 14:17 - suben s TASK A (daily send bezal 14:04+), 0 odoslanych`
- FU1 kandidáti: **40** (27.–28.08.) zostávajú v okne do **10.–11.09.** — dosť času na zajtrajší beh
- Expirácie: 0
