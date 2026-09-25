# FOLLOW-UP REPORT — weby (martin@appinara.sk) — 09.09.2026

**VÝSLEDOK: ZASTAVENÉ V PRE-FLIGHTE. Neodoslaný žiadny mail. Excel nedotknutý.**

Beh: TASK B (appinara-weby-followup, 14:00). Zastavené 14:10.

---

## Dôvod zastavenia: súbeh s bežiacou TASK A

Pre-flight krok 0 zakazuje súbeh s inou outreach úlohou (zdieľaný Excel a Chrome).
Podmienka je splnená — TASK A **práve teraz beží**, nejde o stale lock:

| Dôkaz | Hodnota |
|---|---|
| `.outreach-lock` | `LOCKED - taskA-daily-send-martinsk beziaci od 09.09.2026 13:06` |
| Záloha TASK A | `backup/..._taskA_martinsk_20260909_130602.xlsx` (13:06) |
| Zápis do Excelu | 14:07:26 → **14:09:36** (overené dvoma meraniami mtime s odstupom 100 s) |

Excel sa prepisuje každých 1–2 minúty, čo presne sedí na randomizovanú pauzu
60–180 s medzi odoslaniami v TASK A. Lock nie je zabudnutý — úloha je v polovici behu.

**Čo by sa stalo pri pokračovaní:** dve session zapisujú ten istý zošit (stratené
zápisy → duplicitné maily zajtra) a dve session ovládajú to isté okno Gmailu
(riziko odoslania cudzieho draftu). Preto STOP, bez prevzatia locku.

---

## Denný strop (informatívne — nebol dôvodom zastavenia)

- Warmup limit od 31.08.2026: **30 mailov/deň**, spoločný pre TASK A + TASK B
- Dnešná spotreba appinara.sk k 14:05: **19** (všetko Status „Odoslané“, N = 09.09.2026 → všetko TASK A)
- Zostatok v čase kontroly: **11**

Strop bol > 0, čiže sám o sebe by beh nezastavil. Zostatok však bude TASK A ďalej
spotrebúvať — v čase, keď dobehne, môže byť 0. Pre zajtrajší beh treba spotrebu
prepočítať nanovo, nie prebrať toto číslo.

---

## Stav FU pipeline (read-only, nič nezapísané)

Kandidáti: Status = „Odoslané“ AND Odosielateľ = „appinara.sk“, vek podľa stĺpca N.

| Kategória | Počet |
|---|---|
| **FU1 (4–14 dní, poznámky OK)** | **125** |
| 4–14 dní bez konkrétneho faktu v M | 0 |
| > 14 dní → Expirované | 0 |
| Bez dátumu v N aj L | 0 |

**Pipeline je zdravá.** Žiadne expirácie a žiadne chýbajúce poznámky — každý
kandidát má v M dosť materiálu na konkrétny fakt podľa sekcie follow-upy.
Nič sa stratou dnešného behu nepremeškalo: najstarší kandidát má 12 dní
(r613 TOP SERVICE TT, r614 EKOFRUCT — pôvodné odoslanie 28.08.2026), takže
do konca 14-dňového okna zostávajú ešte 2 dni.

**Najstarší kandidáti — prioritne pri ďalšom behu:**

| Riadok | Firma | Vek | Pôvodné odoslané |
|---|---|---|---|
| 613 | TOP SERVICE TT | 12 dní | 28.08.2026 |
| 614 | EKOFRUCT s.r.o. | 12 dní | 28.08.2026 |
| 126 | Zubná Klinika Chrenová | 9 dní | 31.08.2026 |
| 167 | Penzión Deny | 9 dní | 31.08.2026 |
| 178 | Reštaurácia Kolégium | 9 dní | 31.08.2026 |

(ďalších ~29 riadkov s vekom 9 dní z 31.08.2026)

---

## Odporúčanie

1. **Zajtra (10.09.) skontrolovať, či TASK A po dobehnutí uvoľnila `.outreach-lock`.**
   Súbor sa dnes už raz preberal ako stale („prevzatý stale lock po taskB 11:03“),
   čo naznačuje, že sa lock po behu spoľahlivo neuvoľňuje. Je to opakujúci sa
   problém, nie jednorazový.
2. **Zvážiť posun TASK B na neskôr než 14:00.** TASK A štartuje o 13:00 a pri
   ~20 mailoch s pauzou 60–180 s beží 40–60+ minút — teda cez štart TASK B.
   Kolízia 13:00/14:00 nie je náhoda, opakuje sa (viď `-ZASTAVENE` reporty
   z 01.09., 03.09., 04.09., 08.09.). Posun TASK B na ~15:30 by to odstránil.
3. Dnešné zastavenie **nevyžaduje žiadnu ručnú nápravu** — nič sa neodoslalo
   a nič sa nezapísalo.

---

*Report vygenerovaný automaticky. Odoslaných mailov: 0. Zápisov do Excelu: 0.
Podpis sa nedopĺňal nikomu (žiadny mail sa nekoncipoval).*
