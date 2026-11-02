# Follow-up report — martin@appinara.sk — 15.09.2026 — ZASTAVENÉ (pre-flight)

## Výsledok: 0 odoslaných, 0 zápisov do Excelu

Beh zastavený v **KROKU 0 (pre-flight)**. Dôvod: **súbeh s TASK A**.

## Pre-flight

| Kontrola | Výsledok |
|---|---|
| Zapisovateľnosť Excelu | neoverovaná — beh zastavený skôr |
| Záloha | nerobená (TASK A si spravil vlastnú 13:05) |
| Lock `.outreach-lock` | ❌ **BUSY** — `taskA-daily-send-martinsk spusteny 15.09.2026 13:06` |
| Súbeh s inou outreach úlohou | ❌ **ÁNO, prebieha** |

**Dôkaz, že TASK A naozaj beží (nie je to zabudnutý lock):**

- lock vytvorený 13:06, jeho vlastná záloha `backup/Appinara_Prospekti_2026-09-15_1305_taskA_martinsk.xlsx` o 13:05
- Excel zapísaný **14:05:08** — teda ~59 minút *po* vzniku locku, počas jeho držania
- pri kontrole o 14:05:28 bol zápis starý 20 sekúnd; po 90 s čakania sa mtime nezmenil,
  čo presne zodpovedá randomizovanej pauze 60–180 s medzi odoslaniami v TASK A

Prompt v KROKU 0 hovorí „žiadny súbeh s inou outreach úlohou". Pokračovanie by znamenalo
dve session zapisujúce do toho istého zošita: TASK A má Excel načítaný v pamäti od 13:05,
takže môj `save()` prepíše jeho medzitýmto zapísané „Odoslané" riadky — a tie prospekty
by zajtra dostali **druhý úvodný mail**. To je presne tá škoda, ktorú pravidlo blokuje.

## Druhý, nezávislý dôvod nevysielať

Warmup limit od 31.08.2026 = **30 / deň, spoločný pre TASK A aj B**.

- dnešná spotreba schránky (Odosielateľ `appinara.sk`, Posledný kontakt = 15.09., Status
  „Odoslané"/„FU1 odoslané"): **22**
- môj teoretický strop: 30 − 22 = **8**

Strop síce nie je ≤ 0, ale TASK A počas môjho behu **ďalej odosiela** a to číslo mi rastie
pod rukami. Odoslať 8 mailov proti pohyblivému počítadlu je najrýchlejšia cesta k prekročeniu
tridsiatky a spáleniu domény. Preto ani čiastočný beh nedáva zmysel.

## Čo by bolo na rade (načítané zo snapshotu, len na čítanie)

Kandidáti `Status = "Odoslané"` + `Odosielateľ = "appinara.sk"`: **232**

| | počet |
|---|---|
| < 4 dni (príliš čerstvé) | 33 |
| **4–14 dní (FU1 okno)** | **167** |
| > 14 dní → Expirované | 32 |

Rozpad okna podľa veku:

| vek | počet | |
|---|---|---|
| **14 dní** | **32** | ⚠ zajtra natrvalo vypadnú ako „Expirované" |
| 13 dní | 31 | |
| 12 dní | 30 | |
| 9 dní | 30 | |
| 7 dní | 14 | |
| 6 dní | 30 | |

Konkrétny fakt v stĺpci M má **všetkých 167** — žiadny FU by nepadol na chýbajúci fakt.

## ⚠ Čo to znamená prakticky

**Pipeline je výrazne prepásaná.** V okne 4–14 dní čaká 167 prospektov, ale spoločný strop
je 30 mailov denne pre obe úlohy dokopy — a TASK A si z neho berie väčšinu na úvodné maily.
Pri tomto tempe bude väčšina z tých 167 expirovať skôr, než sa na ňu dostane rad; už dnes
je 32 riadkov po lehote a ďalších 32 vyprší zajtra.

Nie je to chyba behu — je to nepomer medzi tým, koľko firiem research pridáva, a tým,
koľko mailov schránka denne unesie. Rieši sa to buď spomalením researchu, alebo druhou
schránkou, nie zvyšovaním limitu.

## Do Excelu som nezapísal NIČ

Ani 32 riadkov na „Expirované". Zápis do zošita, ktorý má druhá session otvorený,
je tá istá strata dát ako odoslanie — nechal som to na ďalší čistý beh.

## Odporúčanie pre Martina

1. **Skontroluj, či TASK A dobehol** a či po sebe uvoľnil `.outreach-lock`.
   Ak je lock po skončení behu stále BUSY, zmaž ho ručne — inak zablokuje aj zajtrajšie behy.
2. **Naplánuj TASK B s väčším odstupom.** TASK A štartuje 13:00, TASK B 14:00,
   ale dnes A o 14:05 stále bežal. Hodina nestačí pri 20+ mailoch s pauzami 60–180 s.
3. **Rozhodni, čo s 32 riadkami na 14. dni** — dnes FU nedostali a zajtra sú mimo okna.
