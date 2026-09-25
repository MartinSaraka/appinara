# Follow-up report — martin@appinara.sk (TASK B) — 31.08.2026

**Výsledok: ZASTAVENÉ V PRE-FLIGHTE. Neodoslaný ani jeden mail. Excel nebol menený.**

## Dôvod zastavenia: súbeh s TASK A

Pre-flight bod 0 zakazuje beh súčasne s inou outreach úlohou (zdieľaný Excel a Chrome).

- `.outreach-lock` obsahuje: `RUNNING taskA-appinara-sk 31.08.2026 13:05`
- Záloha TASK A `backup/Appinara_Prospekti_a_Outreach_taskA_20260831_130621.xlsx` — z dnešného behu
- **Lock nie je zaseknutý (stale) — TASK A reálne zapisuje:**
  Excel mtime 14:04:39 (287833 B) → overené znova 14:06:57 (287835 B)
- `DAILY-SEND-REPORT-martin-appinara-2026-08-31.md` zatiaľ neexistuje → TASK A beh nedokončil

Zápis do Excelu počas cudzieho `openpyxl.save()` by prepísal riadky, ktoré TASK A práve
zapisuje — hrozila by strata statusov „Odoslané“ a zajtrajšie duplicitné maily.

## Druhý blokátor: denný strop

Warmup limit od 31.08.2026 = **30**. Dnešná spotreba už teraz **20** (appinara.sk,
L = 31.08.2026, Status „Odoslané“/„FU1 odoslané“). Zostatok = 10, ale TASK A stále
posiela a spotrebu ďalej zvyšuje. Súbežný beh na spoločnom rozpočte by limit 30 prekročil.

## Čo čaká (read-only snapshot, informatívne)

- **FU1 kandidáti (4–14 dní): 50** — 30× vek 5 dní, 20× vek 4 dni
- **Expirované (> 14 dní): 0** — nič nevypadlo z okna, žiadny zápis netreba
- Reply-check neprebehol (nespúšťal som Chrome)

Okno je bezpečné: najstarší kandidát má 5 dní, do stropu 14 dní zostáva 9 dní.
Nič sa neskorším spracovaním nestratí.

## Odporúčanie

Spustiť TASK B znova až po dobehnutí TASK A (po vzniku dnešného
`DAILY-SEND-REPORT-martin-appinara-2026-08-31.md` a uvoľnení `.outreach-lock`),
so stropom prepočítaným zo skutočnej spotreby.

Poznámka k plánovaču: TASK A štartuje o 13:00, TASK B o 14:00 — pri 20+ mailoch
s pauzou 60–180 s TASK A hodinu nestíha. Stojí za zváženie posunúť TASK B na ~16:00.
