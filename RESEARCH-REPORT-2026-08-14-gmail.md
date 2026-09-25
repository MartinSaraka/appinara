# Research report — appinara-research-prospects (gmail) — 14.08.2026

## Pre-flight
- Excel zapisovateľný (open + no-op save OK). Záloha: `backup/Appinara_Prospekti_a_Outreach.bak-research-20260814-0956.xlsx`
- Pozn.: dve najstaršie zálohy sa nedali zmazať (Operation not permitted) — rotácia na 10 kusov neprebehla, netreba riešiť hneď.

## Backlog guard
- **N_real = 11** skutočných cold draftov v schránke (merané cez `list_drafts`, 98 konceptov spárovaných proti riadkom „Draft pripravený" + „gmail").
- **Fantómové riadky = 0.** Rekonciliácia z 13.08. držala — Excel a schránka sedeli 1:1.
- N_real < 30 → **štandardný beh.**

## Čo beh urobil
KROK 1 mal prednosť: v Exceli čakalo **86 riadkov** so Status „Čaká na draft" + „gmail". To je viac než jeden beh zvládne, takže celý beh šiel na dopracovanie odovzdaných riadkov — **žiadne nové firmy sa nehľadali.**

Kvóty prerozdelené podľa reálnych reply rates z Excelu (gmail vetva):

| Segment | Odoslané | Odpoveď | % |
|---|---|---|---|
| zubná klinika | 13 | 2 | 15,4 % |
| zdravotníctvo | 51 | 7 | 13,7 % |
| e-shop | 78 | 8 | 10,3 % |
| fitness/wellness | 34 | 3 | 8,8 % |
| reality | 35 | 2 | 5,7 % |
| hotel/penzión | 31 | 1 | 3,2 % |
| gastro | 15 | 0 | 0,0 % |

→ ťažisko na zdravotníctvo/zubné + e-shopy, hotely a gastro tento beh vynechané.

## Výsledok — 17 riadkov spracovaných

**Draft pripravený (11)** — všetky overené cez `list_drafts`:

| Segment | Firma | Hook |
|---|---|---|
| Zdravotníctvo | Coreok | telefón uvedený ako „SMS kontakt" |
| Zubná klinika | DemiDent | vlastná veta „pri akútnej bolesti radšej zavolajte" vs. zatvorené o 15:30 |
| Zdravotníctvo | Fyzioactive | sekcia „Trápi vás" končí pri 25 terapiách bez odporúčania |
| Zubná klinika | Family Dent | formulár núti pacienta vybrať si medzi endodonciou a extrakciou |
| E-shop | Fabbrica Cafe | chuťové popisy áno, otázka na spôsob prípravy nie |
| E-shop | Ready After | tri paralelné taxonómie (krajina / príprava / kyslosť) |
| E-shop | Booslabs | v kategórii „Pečeň" ostávajú dva produkty bez rozdielu |
| E-shop | 100% PURE SK | „Opýtajte sa Ivky" platí do 18:00 |
| E-shop | Bimbishop | dve veľkostné tabuľky, ale odpoveď len do 15:00 |
| E-shop | Med Knížat | zákazník nepozná pergu ani trúdie mlieko |
| Fitness | SOLOGYM | otvorené 365 nonstop, podpora na dvoch telefónnych číslach |

**Odovzdané weby vetve — Ponuka 3 (2):** Zubné centrum Nitra (Dr. Stanko) — web z 2018 bez cenníka a rezervácie; Fyzio-Care — Drupal 7, rozbitá navigácia (O nás aj Metódy vedú na /kontakt). Oba prepnuté na Odosielateľ „appinara.sk" + „Čaká na draft", gmail draft zámerne nevytvorený.

**Bez draftu (4):**
- Email chýba (1): Sviečočka — adresa chránená Cloudflare, hádať sa nesmie.
- Treba research (3): Literárna čajovňa a VONIA — kontaktné stránky sa renderujú cez JS, e-mail neoverený. Flow Pilates — firma sa prepozicionovala na vzdelávanie inštruktorov, pôvodný research je neplatný.

Vylúčení: 0 duplicít, 0 firiem s chatbotom (všetky overené bez widgetu), 3 bez overiteľného e-mailu.

## Dva najsilnejšie hooky (na učenie)
1. **Coreok** — telefón na webe je uvedený ako „SMS kontakt", nie ako číslo na volanie. Ocenenie („voči pacientovi férové") aj medzera („SMS čaká, kým sa uvoľníte") vyšli z jedného detailu, ktorý sa nedá získať bez čítania ich webu.
2. **SOLOGYM** — gym beží 365 dní nonstop bez recepcie, ale ich vlastné FAQ radí pri nefunkčnom QR kóde zavolať na telefón. Konkrétny obraz: človek o jedenástej v noci pri dverách. Presne to, čo Ponuka 2 rieši.

## Pipeline
- **Draft pripravený (gmail): 22** — 11 pôvodných + 11 nových, všetky overené v schránke.
- Backlog guard beh **nezastavil**; po tomto behu je N_real = 22, stále pod prahom 30.
- Zostáva **68 riadkov „Čaká na draft" + gmail** — materiál na ďalšie ~4 behy bez potreby hľadať nové firmy.
