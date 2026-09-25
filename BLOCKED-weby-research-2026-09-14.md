# BEH ZASTAVENÝ — appinara-weby-research, 14.09.2026

## Dôvod: Excel sa nedá otvoriť ani zapísať

`Appinara_Prospekti_a_Outreach.xlsx` je binárny súbor — na čítanie aj zápis
potrebujem Python/openpyxl v Linux sandboxe. Sandbox sa v tejto session
nenaštartoval (3× identická chyba):

```
failed to mount ... under Plan9 share "c" which is not mounted
"A Windows update released September 8 prevents Claude's workspace
 from reaching your files."
```

Textové súbory v `biznis\` sa čítať aj zapisovať dajú (tento súbor je dôkaz) —
nefunguje len sandbox, čiže všetko, čo potrebuje Python.

## Prečo som nepokračoval bez Excelu

Pre-flight v prompte hovorí: *„over zapisovateľnosť Excelu (inak STOP)"*.
Aj keby som to obišiel, bez Excelu:

1. **Nedá sa spraviť dedupe (krok 2).** Guide §10: *„Jedna firma NIKDY nedostane
   mail z oboch schránok."* Bez načítania celého hárku by som mohol napísať
   firme, ktorú už oslovila gmail vetva. To je neopraviteľná chyba.
2. **Nedá sa zapísať riadok (krok 7).** Draft v schránke bez riadku v Exceli je
   fantómový draft — daily-send ho nikdy neuvidí a follow-up vetva o ňom nevie.
3. **Nedá sa spraviť rekonciliácia (krok 0c).**

Preto: **žiadny research, žiadny draft, žiadny zápis, žiadny odoslaný mail.**

## Čo sa zmerať dalo

| | |
|---|---|
| `.outreach-lock` | `FREE` — taskA-daily-send-martinsk ukončený 09.09.2026 15:15. Súbeh nebol problém. |
| Schránka martin@appinara.sk | dostupná cez Chrome u/3, **16 konceptov** |
| Backlog guard | prah 300 → **ani zďaleka nezasiahnutý**; beh zastavil Excel, nie backlog |
| Staré koncepty (krok 0d) | **2 staršie ako 30 dní** — 10.08.2026 a 12.08.2026. Ich postrehy sú takmer mesiac staré, weby sa medzitým mohli zmeniť. Odporúčam manuálne prejsť. |
| Podpisy v konceptoch (krok 0e) | **nezmerané** — vyžaduje otvoriť 16 konceptov po jednom; pri zastavenom behu som to nerobil. Pozor: 9 z tých 16 vzniklo pred 08.09.2026, čiže **pravdepodobne bez podpisu**. |
| Gmail konektor | pripojený na `appinarasolutions@gmail.com` (gmail vetva), NIE na martin@appinara.sk — pre túto vetvu treba Chrome u/3, ako predpokladá prompt |

## Čo s tým

Sandbox si nespravím sám. Keď bude prístup k súborom fungovať, stačí spustiť
`appinara-weby-research` znova — nič sa nezmenilo, nič netreba vracať späť.

Guide `OUTREACH-QUALITY-GUIDE.md` som **needitoval** (je na v4.1, súhlasí
s promptom).
