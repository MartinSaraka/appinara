# Research report — weby/apky, martin@appinara.sk — 23.09.2026

Prvý pokus o beh o 17:0x bol zablokovaný (schránka odhlásená, viď
`BLOCKED-weby-research-2026-09-23.md`). Po prihlásení beh dokončený.

## Backlog guard

- **N_real = 74** skutočných cold draftov v schránke martin@appinara.sk
  (merané cez Chrome u/3, hash-navigácia `in:drafts to:<email>` nad 77 riadkami
  so Statusom „Draft pripravený“ + Odosielateľ „appinara.sk“, počítané len
  vo viditeľnom kontajneri `div.ae4`).
- 74 ≤ 300 → **plný beh povolený.**
- Gmail konektor je pripojený na appinarasolutions@gmail.com, preto sa meralo cez Chrome.

## Rekonciliácia

**2 riadky opravené** zo „Draft pripravený“ na „Čaká na draft“ — koncept v schránke
neexistuje:

- riadok 1044 — Chata Orava (infoubytovanie@gmail.com)
- riadok 1050 — Chata Podbánske (stupka.stanislav@zoznam.sk)

Tretí riadok bez konceptu (1112, Container Services) fantóm **nie je** — koncept sa
premenil na odoslaný mail pri dnešnom behu `appinara-daily-send`.

## Kontroly starých draftov (0d / 0e / 0f) — len hlásenie, nič sa neprepisovalo

| Kontrola | Počet |
|---|---|
| 0d — koncepty staršie ako 30 dní | **3** |
| 0e — koncepty bez podpisu „Appinara s.r.o.“ | **4** |
| 0f — starý štýl: „vieme vám“ | **≥ 50** (Gmail stránkuje po 50, reálne môže byť viac) |
| 0f — „15 minút“ | 22 |
| 0f — „alebo som mimo“ | 24 |
| 0f — „Bez hovoru“ | 20 |
| 0f — „Kedy sa vám to hodí“ | 2 |

Väčšina existujúcich konceptov je teda ešte v štýle pred v4.2. **Neprepisoval som ich** —
rozhodni, či ich prepísať alebo poslať tak, ako sú.

## Rozsah behu

Odovzdaných riadkov („Čaká na draft“ + appinara.sk) bolo **65**, teda viac než 15.
Podľa zadania sa preto **nové firmy nehľadali** a spracovali sa odovzdané riadky
v poradí od najsilnejšieho nálezu.

- Spracovaných: **12**
- Zamietnutý na pravidle H: **1** (Záhrady Raček — web sa nenačítal, tvrdenie
  z poznámky sa nedalo overiť)
- **Ostáva nespracovaných: 55** riadkov

Duplicity (krok 2): 0 — nové firmy sa nehľadali.
Presunuté do AI vetvy: 0.
Vypadnuté na pravidle I („to už majú“): 0. Denta Centrum je naopak **výnimka** pravidla I —
rezervačný systém majú, ale je mimo prevádzky, takže ponúkame sfunkčnenie.

## ⚠ Nález, ktorý treba vyriešiť ručne: 4 duplicitné koncepty

Štyri firmy mali v Exceli status „Čaká na draft“, **ale v schránke už mali koncept
z 15.09.2026**. Vznikli tak dva koncepty na tú istú adresu:

- riadok 1001 — Denta Centrum (dentacentrum@dentacentrum.sk)
- riadok 1011 — MUDr. Maxián (info@drmaxian.sk)
- riadok 1022 — LITE Poprad (litepoprad@litepoprad.sk)
- riadok 1023 — M&K Pneuservis (mkpneuservis1@gmail.com)

Koncepty **nemažem**. Pred odoslaním treba pri každej z týchto štyroch firiem vybrať
jeden koncept a druhý zmazať ručne — novší (dnešný) je v štýle v4.2 a prešiel
quality checkom. Poznámka je zapísaná aj v Exceli pri týchto riadkoch.

**Príčina:** beh z 15.09.2026 vytvoril koncepty, ale neprepol Status v Exceli.
Rovnaká diera ako pri fantómových riadkoch, len naopak.

## Vytvorené koncepty (12) — všetky overené: existujú + obsahujú podpis

| Riadok | Firma | Adresa | Slov v tele |
|---|---|---|---|
| 1001 | Denta Centrum | dentacentrum@dentacentrum.sk | 46 |
| 990 | REA Nitra | kalkulacie@reanitra.sk | 55 |
| 917 | Fyzio Poprad | recepcia@fyziopoprad.sk | 46 |
| 1018 | Karpatská perla | ochutnavky@karpatskaperla.sk | 55 |
| 1023 | M&K Pneuservis | mkpneuservis1@gmail.com | 48 |
| 1011 | MUDr. Maxián | info@drmaxian.sk | 50 |
| 905 | Štúdio tanca Alegria | alegriatrnava@gmail.com | 55 |
| 1096 | BRISHKA | janka@brishka.sk | 52 |
| 993 | Plávanie NEMO Nitra | plavanienemo@gmail.com | 57 |
| 1016 | Penzión Jozefína | penzionjozefina@gmail.com | 42 |
| 1022 | LITE Poprad | litepoprad@litepoprad.sk | 50 |
| 1009 | Funaction Fyzioterapia | info@fyzioterapiafunaction.sk | 55 |

Texty aj doklad k pravidlám H a I: `DRAFTY-weby-2026-09-23-NA-VLOZENIE.md`.
Pri vkladaní som zachytil a opravil tri preklepy (NEMO, Funaction) ešte pred uložením.

## Dva najsilnejšie nálezy (pre learning)

1. **Denta Centrum** — hlavné CTA na titulke „OBJEDNAJTE SI OŠETRENIE.“ vedie na
   podstránku doslova nazvanú `/nefunguje/`, kde stojí „Schedule dočasne nedostupné“.
   Najsilnejší typ nálezu vôbec: neponúkame náhradu, ponúkame sfunkčnenie.
2. **LITE Poprad** — titulka pozýva „Otestujte sa! Vyplňte krátky test z anglického
   jazyka a zistíte, aký kurz je pre vás najvhodnejší.“, ale cieľová stránka
   `/otestujte-sa/` obsahuje **0 formulárov a 0 vstupných polí** — je prázdna.
   Sľub z titulky, ktorý sa nedá splniť.

## Aktuálny stav

- „Draft pripravený“ + Odosielateľ „appinara.sk“: **86 riadkov**
- „Čaká na draft“ + Odosielateľ „appinara.sk“: **55 riadkov**
