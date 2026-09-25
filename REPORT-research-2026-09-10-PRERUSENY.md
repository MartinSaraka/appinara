# appinara-research-prospects — beh 10.09.2026: ZASTAVENÝ v KROKU 0

## Dôvod zastavenia

**Pre-flight zlyhal.** Linuxový sandbox (jediná cesta, ako viem otvoriť a zapísať
`.xlsx`) sa nedá nastartovať — mount pracovného priečinka zlyhal 5× po sebe
s identickou chybou:

```
failed to mount ... source path ... is under Plan9 share "c" which is not mounted
```

Dôsledok:

- **nedá sa otvoriť** `Appinara_Prospekti_a_Outreach.xlsx` (openpyxl je v sandboxe)
- **nedá sa spraviť záloha** do `backup\`
- **nedá sa spraviť dedupe** (KROK 2) ani zápis riadkov (KROK 7)

Podľa promptu, KROK 0 bod 1: *„Over zapisovateľnosť Excelu... Ak zlyhá → STOP."*
Beh je preto zastavený **pred** hľadaním firiem a **pred** vytvorením akéhokoľvek
draftu. Žiadny draft nevznikol, žiadny riadok sa nezmenil.

Písať drafty bez Excelu by vytvorilo presne tú situáciu, pred ktorou varuje
KROK 2 (prípad Penzión Horec, 31.08.) — koncept v schránke bez riadku v tabuľke,
neviditeľný pre backlog guard aj pre daily-send.

## Čo sa dalo overiť (Gmail MCP funguje)

| | |
|---|---|
| Konceptov v schránke celkovo | **97** |
| Z toho z posledného behu (09.09., všetko follow-upy „Re:") | 13 |
| Konceptov starších ako 30 dní (pred 11.08.) | **74** |
| — z toho cold outreach | ~67 |
| — z toho manuálne/oštítkované (5× najkoberce, kaderníctvo, 1 bez príjemcu) | 7 |
| Najstaršie koncepty | 28.05.2026 (21 ks) a 17.05.2026 |

**Podpisy:** všetkých 13 najnovších konceptov (09.09.) má podpis v presnom tvare
`Appinara s.r.o. | appinara.sk | +421 917 566 722`. Podpisová oprava z 08.09. teda
v poslednom behu zabrala. Staršie koncepty som pre podpis neprechádzal — beh bol
zastavený skôr.

**N_real sa nezmeral** — vyžaduje spárovanie príjemcov s riadkami Excelu, a Excel
nie je čitateľný. **Rekonciliácia (KROK 0c) neprebehla** z rovnakého dôvodu.

## Čo s tým

1. **Reštartovať session** — chyba je infraštruktúrna (wedged sandbox), nie v dátach.
   Po reštarte beh prebehne normálne.
2. **Pozor na 74 starnúcich konceptov.** Aj bez guardu je to signál, že sa píše
   rýchlejšie, než sa posiela. 21 konceptov z konca mája má postrehy staré 3,5 mesiaca
   — tie sa už pravdepodobne nezhodujú s realitou na weboch a pravidlo H by ich dnes
   nepustilo. Odporúčam ich prejsť a rozhodnúť ručne (poslať / zmazať), nie nechať ležať.
3. Ak sandbox padá opakovane aj po reštarte, treba to riešiť skôr, než sa naplánujú
   ďalšie behy — zastavia sa rovnako.

---
*Vygenerované 10.09.2026, scheduled task `appinara-research-prospects`.*
