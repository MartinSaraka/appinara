# Follow-up report — martin@appinara.sk — 27.08.2026

**Schránka overená:** titulok karty „… - martin@appinara.sk - Appinara s. r. o. Mail" (Chrome u/3) ✔

## Limit a spotreba

| Položka | Hodnota |
|---|---|
| Warmup limit (okno 24.–28.08.) | 20 |
| Spotreba pred behom (TASK A, daily send) | 11 |
| Strop pre tento beh | 9 |
| **Odoslaných FU1** | **9** |
| Spotreba po behu | 20 / 20 (limit vyčerpaný) |

## Pre-flight

- Excel zapisovateľný (openpyxl open + no-op save) ✔
- Záloha: `backup/Appinara_Prospekti_a_Outreach.backup-followup-20260827-140845.xlsx` ✔
- Chrome pripojený, žiadny súbeh s inou outreach úlohou ✔

## Kandidáti

- Status = „Odoslané" AND Odosielateľ = „appinara.sk": **79 riadkov**
- Vek 4–14 dní (FU1 okno): **38 kandidátov**
- Vek > 14 dní (Expirované): **0** — žiadny prospekt nevypadol z okna
- Vek < 4 dni (ešte nie na rade): 41
- Stĺpec N (Pôvodné odoslané) bol vyplnený u všetkých kandidátov — fallback na L nebol potrebný.

Prioritizovaní najstarší (vek 9–10 dní), 9 podľa stropu.

## Reply-check

- Doménová/adresná kontrola pred behom: `from:(...9 adries/domén...) newer_than:90d` → **0 zhôd**
  (freemail adresy — miransro, ab.pizzeria, markovics.vojtech — kontrolované presnou adresou, nie doménou)
- Pôvodné vlákno otvorené pri každom prospektovi: všetkých 9 malo „1 of 1" (len naša správa) → nikto neodpovedal pred odoslaním
- **Odfiltrovaných reply-checkom pred odoslaním: 0**

## Odoslané (9)

| # | Riadok | Firma | Email | Vek | CTA (§7) |
|---|---|---|---|---|---|
| 1 | 461 | Mäsiarstvo MIRAN | miransro@gmail.com | 10 d | „Dáva to u vás zmysel, alebo som mimo?" |
| 2 | 462 | Pizzeria AB Sereď | ab.pizzeria@gmail.com | 10 d | „Chcete, aby som poslal…? Bez hovoru." |
| 3 | 465 | Tanečné štúdio Maestro | tsmaestro@tsmaestro.sk | 10 d | „Ak vás to zaujme… stačí jedno slovo." |
| 4 | 466 | Mliečna Farma Necpaly | info@mliecnafarma.sk | 10 d | „Hodí sa vám tento alebo budúci týždeň?" |
| 5 | 467 | Jazero Borovce | info@jazeroborovce.sk | 10 d | „Ukázal by som vám to priamo na vašom webe…" |
| 6 | 468 | Vinárstvo Markovics | markovics.vojtech@gmail.com | 10 d | „Máte 15 minút budúci týždeň?" |
| 7 | 469 | Kvetinárstvo Valachovičová | info@kvety-valachovicova.sk | 9 d | „Ak vás to zaujme… stačí jedno slovo." |
| 8 | 470 | Včelárstvo Dedinský | prevadzka@vcelarstvo.sk | 9 d | „Chcete, aby som poslal…? Bez hovoru." |
| 9 | 471 | AB Autoškola Brádňanský | info@abautoskola.sk | 9 d | „Dáva to u vás zmysel, alebo som mimo?" |

Každý FU: odpoveď do pôvodného vlákna, max 80 slov, konkrétny fakt zo stĺpca M,
JEDEN nový uhol (nie zopakovanie pôvodného mailu), podpisový blok v tele.
Odoslanie overené hláškou „Message sent" alebo novou správou vo vlákne.
Medzi odoslaniami randomizovaná pauza 75–140 s. Zápis do Excelu ihneď po každom
odoslaní, znovu načítaný a overený.

**Nové uhly (aby FU nebol „len sa pripomínam"):**

- MIRAN — mailová ikona bez adresy pri všetkých 5 prevádzkach
- AB Sereď — uzávera žel. mosta → obchádzka sa musí prepísať v oboch cenových blokoch
- Maestro — prihláška sa pýta na mesiac začiatku, titulka ponúka minuloročný termín
- Necpaly — 16 českých predajní v tom istom zozname bez filtra
- Borovce — najdrahšie položky (7 dní, karavan) sa plánujú dopredu, telefón to nezachytí
- Markovics — odseky pod nesprávnymi nadpismi na Pre firmy; menu Oslavy vedie na degustácie
- Valachovičová — položka Kontakt vedie len na kotvu #socket, druhá cesta chýba
- Dedinský — dve rôzne kontaktné adresy na webe, objednávka príde raz sem, raz tam
- AB Autoškola — prázdne odkazy na tlačidlách prihlášky + web len na http

## Odpovede prišli PO odoslaní (2)

Obe do 4 minút od nášho FU — reply-check ich pred odoslaním nemohol zachytiť.

| Riadok | Firma | Odpoveď | Nový status |
|---|---|---|---|
| 465 | Tanečné štúdio Maestro | Ing. R. Szolnoki: „Odkiaľ ste?" — **záujem, treba odpovedať** | Odpoveď |
| 469 | Kvetinárstvo Valachovičová | M. Slabá: „Ďakujem, nemám záujem" — **opt-out** | Odpoveď |

Obe prepnuté na Status = „Odpoveď" (terminálny pre automatiku, rieši Martin osobne).
Riadok 469 je opt-out — už nikdy neposielať.

## Expirované

Žiadne. Okno 4–14 dní nikto neprekročil → behy tento týždeň nevypadávali.

## Kontrola na konci

- `in:sent after:2026/08/27` = **20** (11 TASK A + 9 FU1) → presne toľko, koľko hlási Excel, žiadne duplicity
- Spotreba v Exceli po behu: 20 (dnes už nič ďalšie neodíde)

## Poznámka k podpisu

Textový podpis (Martin Saraka / Appinara s.r.o. | appinara.sk | +421 917 566 722)
bol vložený priamo do tela každého FU — v súlade so zadaním úlohy a s nálezom
z dnešného daily-send reportu, že Gmail v tejto schránke podpis sám **nedopĺňa**
(guide §10 tvrdí opak a je nepresný). Gmail navyše pripája vlastnú pätičku
„Appinara s. r. o. / +421 917 566 722 / https://appinara.sk" — v odoslaných mailoch
je teda kontakt dvakrát. **Odporúčanie:** zjednotiť — buď opraviť guide §10, alebo
vypnúť automatickú pätičku v nastaveniach schránky.

## Zostáva na ďalší beh

- FU1 kandidátov vo veku 4–14 dní po dnešku: **29** (najstarší vek 7 dní, riadky 474, 486 …)
- Žiadny z nich nie je v ohrození expirácie skôr ako o týždeň.
