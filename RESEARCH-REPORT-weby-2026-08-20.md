# Research report — weby/apky vetva, 20.08.2026

## Backlog guard — ZAFUNGOVAL (STOP)

| Meranie | Hodnota |
|---|---|
| Reálne cold drafty v martin@appinara.sk (**N_real**) | **46** |
| Prah pre STOP | > 40 |
| Fantómové riadky opravené rekonciliáciou | **0** |
| Nové koncepty vytvorené v schránke | **0** (správne — guard) |

**Ako sa meralo:** Chrome bol na začiatku behu odpojený a Gmail konektor je napojený na
appinarasolutions@gmail.com (gmail vetva), takže schránka martin@appinara.sk bola nedostupná.
Chrome sa pripojil až vo fáze verifikácie. Účet overený titulkom karty
(„Drafts (48) — martin@appinara.sk"). Schránka obsahuje 48 konceptov: 46 cold draftov
+ 2 nepodarky („asdasd", „info@mliecnafarma.sk").

Následne sa **každá zo 46 adries** s Status „Draft pripravený" + Odosielateľ „appinara.sk"
overila samostatným dopytom `in:draft to:<adresa>` cez vyhľadávacie pole (hash-navigácia
Gmail nerefreshuje, dala falošné výsledky — nepoužitá). Negatívna kontrola s neexistujúcou
adresou vrátila „No messages matched", takže metóda je spoľahlivá.
**Výsledok: 46/46 nájdených, žiadny fantóm.** Excel a schránka sedia presne — chyba
z gmail vetvy (14.08., 96 fantómových riadkov) sa tu neopakuje.

## Výsledky behu

| | |
|---|---|
| Nájdených firiem | 14 |
| S hotovým draftom (text v `DRAFTY-weby-2026-08-20.md`) | 13 |
| „Treba research" | 1 (Escapeland Žilina) |
| Vylúčených ako duplicita | 0 (dedupe proti všetkým 517 riadkom — doména, názov aj email) |
| Presunutých do AI vetvy | 0 (všetkým 14 vychádza Ponuka 3) |
| Riadky v Exceli | # 559–572, Status „Čaká na draft" / „Treba research", Odosielateľ „appinara.sk" |

Zamietnuté počas researchu (nález by neprešiel quality checkom): EscapeSpoTT Trnava,
Bowling Trnava, Bowling pri trati Prešov, Best English, Optika Oros, Vinárstvo Uhnák,
UFARMARA — všetky už majú funkčnú rezerváciu alebo e-shop.

## Najsilnejšie nálezy (na učenie)

**1. Hudobná škola pre všetkých (hudobnaskola.sk)** — na úvodnej stránke sa v bloku
„Najnovšie články" vypisuje **surový HTML kód**: namiesto odkazov tam doslova stojí
`<a href='...' title='...'>`. Odkaz na prihlášku je holý text. A to pri škole, ktorá
sama píše, že „denne nám prichádzajú prihlášky". Najlepší typ nálezu: technicky
jednoznačný, dá sa overiť za tri sekundy a priamo brzdí to, na čom firme záleží.

**2. KVŠ OCEÁN Bratislava (klubocean.sk)** — na stránke Kontakt má telefónny odkaz
v href zlepené **typografické úvodzovky**, takže z mobilu nevytáča, ale vedie na
neexistujúcu podstránku. Jeden znak, ktorý roky vypína hlavný kontaktný kanál.

**Vzor, ktorý sa opakoval:** najsilnejšie nálezy neboli „starý web", ale **rozbité alebo
prázdne CTA** — tlačidlo, ktoré sľubuje akciu a nedoručí ju. Autoškola Šváby („Online
registrácia na kurz" → kotva na Aktuality), Škôlka Hviezdičky („Prihlášky na kempy" →
prázdny odkaz), Škôlka Sovička (stránka „Voľné kapacity" bez kapacít), Duall-Rental
(formulár, ktorý len otvorí mailového klienta). Oplatí sa v ďalších behoch cielene
klikať práve na hlavné CTA, nie hodnotiť dizajn.

## Stav vetvy appinara.sk po behu

| Status | Počet |
|---|---|
| Draft pripravený | 46 (všetky overené v schránke) |
| Odoslané | 37 |
| Čaká na draft | 13 (nové z tohto behu) |
| Treba research | 5 |
| Email chýba | 5 |

## Odporúčania

1. **Rozposlať backlog.** 46 draftov pri warmup limitoch je ~5 dní odosielania.
   Kým N_real neklesne pod 25, ďalší research beh nemá čo pridávať do schránky.
2. **Prepnúť 13 riadkov na „Draft pripravený"** až po vložení textov z
   `DRAFTY-weby-2026-08-20.md` do martin@appinara.sk.
3. **Upratať 2 nepodarené koncepty** („asdasd", „info@mliecnafarma.sk") — skresľujú guard.
4. **Podpis:** drafty sú písané bez textového podpisu (guide §10) — Gmail v tejto
   schránke dopĺňa HTML podpis sám. Prompt úlohy ešte žiada textový podpis;
   pri najbližšej revízii promptu ho zosúladiť s guide.
5. **Rotácia CTA:** 13 draftov na 6 variantov — variant 3 („Ak vás to zaujme…")
   sa opakuje 3x. Pri dennom dávkovaní ich nedávať do jedného dňa za sebou.
