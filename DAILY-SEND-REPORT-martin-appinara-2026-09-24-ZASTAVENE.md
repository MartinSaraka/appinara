# Daily send report — martin@appinara.sk, 24.09.2026 — ZASTAVENÉ

**Výsledok: 0 odoslaných mailov. Excel nezmenený (žiadny zápis z tejto úlohy).**

## Dôvod zastavenia: kolízia s inou bežiacou outreach úlohou

Železné pravidlo „nikdy nebež súčasne s inou outreach úlohou (zdieľaný Excel a Chrome)"
bolo porušené hneď na štarte. Dôkazy:

1. **`.outreach-lock` = BUSY**, obsah: `BUSY - appinara-daily-send spusteny 24.09.2026 14:20`
   (zapísaný 14:19:15). Tento zámok som nezapísal ja — drží ho iný proces.
2. **Excel sa počas kontroly aktívne prepisoval.** Časy zmeny súboru
   `Appinara_Prospekti_a_Outreach.xlsx`: 14:22:10 → 14:25:12 → 14:26:05.
   Zámok teda nie je zabudnutý („stale"), proces reálne beží.
3. Dnes o 14:18 bežali ešte dve ďalšie vetvy (zálohy `_research_20260924_141825`
   a `Appinara_Prospekti_2026-09-24_1418`), FU report za 24.09. bol dopísaný 14:22.

Pre-flight som preto **nedokončil** — nerobil som zálohu ani žiadny zápis do Excelu,
aby som nekolidoval s paralelným zápisom.

## Čo by dnes platilo
- **Warmup limit:** dátum ≥ 31.08.2026 → **max 30 mailov/deň**
- **Dnešná spotreba schránky appinara.sk:** 0 (žiadny riadok nemá Posledný kontakt = 24.09.2026)
- **Dnešný strop:** 30
- Odoslané: **0** — Chrome ani Gmail som vôbec neotváral
- Podpis doplnený: 0 draftov (žiadny draft sa neotváral)

## Pipeline — vetva appinara.sk
| Status | Počet |
|---|---|
| **Draft pripravený** | **86** ← čaká na odoslanie |
| Čaká na draft | 55 |
| Treba research | 52 |
| Odoslané | 103 |
| FU1 odoslané | 120 |
| Odpoveď | 10 |
| Expirované | 172 |
| Email chýba | 66 |
| Pozastavené | 1 |

Prvé v poradí (Priorita Vysoká): alegriatrnava@gmail.com, recepcia@fyziopoprad.sk,
kalkulacie@reanitra.sk, plavanienemo@gmail.com, dentacentrum@dentacentrum.sk,
info@fyzioterapiafunaction.sk, penzionjozefina@gmail.com, litepoprad@litepoprad.sk.

## Odporúčanie
1. Skontrolovať, prečo sa `appinara-daily-send` spustil dvakrát (14:20 + 14:22) —
   duplicitný trigger scheduled tasku. Toto je hlavné riziko: dva súbežné behy
   môžu poslať ten istý draft dvakrát.
2. Ak sa ukáže, že paralelný beh nič neodoslal, `.outreach-lock` ručne uvoľniť
   (prepísať na `FREE`) a úlohu spustiť znova — strop 30 je stále celý voľný.
3. Rozostupy medzi úlohami (research 14:18 / FU 14:22 / daily-send 14:20) sú príliš
   tesné; stojí za to ich rozniesť po hodine.
