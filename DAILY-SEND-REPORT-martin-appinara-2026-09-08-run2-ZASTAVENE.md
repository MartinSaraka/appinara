# Daily send — martin@appinara.sk — 08.09.2026 (run 2) — ZASTAVENÉ

## Zhrnutie
- **Warmup limit:** 30/deň (fáza od 31.08.2026)
- **Dnešná spotreba pred behom:** 13 (run 1, 11:19)
- **Dnešný strop pre tento beh:** 17
- **Reálne odoslané:** 1
- **Dôvod zastavenia:** Chrome page zoom na mail.google.com je ~250 % → viewport len 662×373 px, Gmail v ňom drží compose okno zbalené (výška 40 px, telo aj tlačidlo Send skryté). Zoom sa nedá resetovať — rozšírenie blokuje Ctrl+0 a Chrome UI je mimo dosahu.

## Odoslané (1)
| Riadok | Firma | Email | Podpis |
|---|---|---|---|
| 806 | Detské kráľovstvo (jasle a škôlka Bratislava) | dkralovstvo@gmail.com | **chýbal — doplnený pri odoslaní** |

Overené v `in:sent` (1 z 1). Excel zapísaný: Status = Odoslané, L = 08.09.2026, N = 08.09.2026, poznámka „Podpis doplnený pri odoslaní 08.09.2026".

## Podpisy
1 z 1 spracovaných draftov nemal podpis v tele — draft z 03.09.2026, teda pred zmenou pravidla 08.09. **Očakávaj, že podobne budú na tom aj ostatné staršie drafty.**

## Neodoslané / prerušené
- **Riadok 807 — Kominárstvo & Kachliarstvo Pavlík** (jozefpavlik1980@gmail.com): draft nájdený a otvorený, adresát overený, podpis chýba. Telo **nebolo zmenené**, mail neodoslaný. Status ponechaný „Draft pripravený" — pôjde v ďalšom behu.
- Zvyšných 15 z plánovaných 17 sa vôbec nezačalo spracovávať.

## Čo treba spraviť (Martin)
1. Otvor Gmail (martin@appinara.sk) v Chrome a stlač **Ctrl+0** — resetuje zoom na 100 %.
2. Potom sa dá beh zopakovať; dnešný zostatok do limitu je **16** (30 − 14).

## Stav pipeline
- Dnes odoslané spolu z appinara.sk: **14** (13 run 1 + 1 run 2)
- Zostáva so statusom „Draft pripravený" a Odosielateľ = appinara.sk: **24**
  (z toho 20× priorita Stredná, 4× Nízka)

## Pre-flight
- Excel zapisovateľný ✔
- Záloha: `backup/Appinara_Prospekti_a_Outreach.backup-20260908-130514.xlsx` ✔
- Rotácia starých záloh zlyhala (PermissionError pri mazaní v `backup/`) — zálohy sa hromadia, treba raz ručne prebrať.
- Lock bol FREE, nastavený na BUSY počas behu, vrátený na FREE ✔
