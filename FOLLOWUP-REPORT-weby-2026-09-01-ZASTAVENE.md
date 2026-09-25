# Follow-up beh (martin@appinara.sk) — 01.09.2026 — ZASTAVENÉ V PRE-FLIGHTE

**Beh:** 17:20 – 17:22
**Odoslaných mailov: 0. Do Excelu sa nezapisovalo (žiadny zápis, žiadna záloha — beh skončil pred krokom 1).**

## Dôvod zastavenia — súbeh s TASK A

Pre-flight (krok 0) zakazuje súbeh s inou outreach úlohou. Súbeh je preukázaný:

| Dôkaz | Zistenie |
|---|---|
| `.outreach-lock` | `RUNNING taskA-appinara-sk 01.09.2026 17:05 - start` (zapísaný 17:04:11) |
| Report TASK A za dnešok | **neexistuje** — `DAILY-SEND-REPORT-martin-appinara-2026-09-01.md` nie je v priečinku → úloha nedobehla |
| Zápis do Excelu počas mojej kontroly | 17:19:35 → **17:21:36** (súbor sa zväčšil o 9 B počas 45 s čakania) → TASK A práve teraz zapisuje |
| Spotreba v Exceli | 4 riadky s `Odosielateľ = appinara.sk`, `Posledný kontakt = 01.09.2026`, `Status = Odoslané` — priebežný výsledok bežiaceho TASK A |

Rovnaká schránka (martin@appinara.sk) aj rovnaký zošit. Odosielanie teraz by znamenalo:

1. **Riziko straty dát v Exceli** — obe úlohy robia `load_workbook → zmena → save`, čo prepisuje celý súbor. Presne to riziko, ktoré nahlásil gmail beh dnes o 17:18.
2. **Dva maily z tej istej schránky v priebehu sekúnd** — odstup 60–180 s platí len v rámci jednej úlohy, nie na úrovni schránky. To je práve to, čo má chrániť účet pred flagnutím.
3. **Nespoľahlivý výpočet stropu** — spotreba TASK A rastie počas môjho behu, takže „warmup limit − spotreba" by bol zastaraný v okamihu výpočtu.

## Čo by beh spracoval (read-only analýza, len informatívne)

- **FU1 kandidáti (Status „Odoslané", Odosielateľ „appinara.sk", vek 4–14 dní): 70**
  Najstarší: 26.08. (vek 6 dní) — Kachliarstvo Artpece, Pálenica Solčany, Farma Brezany, Píla Studienka, MS Autoservis a ďalších ~25.
  Ďalej 27.08. (5 dní) ~20 firiem, 28.08. (4 dni) ~20 firiem.
- **Na expiráciu (> 14 dní): 0** — okno nikomu nevypadlo, sekvencia beží načas.
- Všetkých 70 kandidátov má vyplnené Poznámky (stĺpec M) aj Pôvodné odoslané (N) → žiadny by nepadol na chýbajúci konkrétny fakt.

Reply-check sa nespúšťal (nemá zmysel bez následného odoslania).

## Odporúčanie

Zopakovať follow-up beh, keď `.outreach-lock` bude `DONE` a TASK A bude mať report. Kandidátov je 70 a najstarší má vek 6 dní — okno 4–14 dní drží, o expirácie zatiaľ nejde.

Systémovo: zámok `.outreach-lock` musí **čítať aj zapisovať** všetkých šesť úloh (nielen TASK A) a treba spoločný odstup medzi odoslaniami naprieč úlohami v rámci jednej schránky. Rovnaké odporúčanie dnes vydal aj gmail beh — je to druhá kolízia za jedno popoludnie.
