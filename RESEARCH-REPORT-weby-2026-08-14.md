# Research report — appinara-weby-research (martin@appinara.sk) — 14.08.2026

**Backlog guard zafungoval.** 33 „Draft pripravený" s Odosielateľ = appinara.sk → pásmo 25–40 →
**beh obmedzený na 8 prospektov**. Excel overený ako zapisovateľný, záloha
`backup/Appinara_Prospekti_a_Outreach.bak-webyresearch-20260814-0902.xlsx`.

## Výsledok behu

- **8 draftov reálne v schránke martin@appinara.sk** — 35 → 43, overené výpisom zoznamu draftov
  aj screenshotmi. Účet potvrdený z titulku okna („Drafts — martin@appinara.sk"), Gmail u/3.
- **Všetkých 8 sú odovzdané riadky** z gmail vetvy (#526, #528–530, #533–536). Status prepnutý
  „Čaká na draft" → **„Draft pripravený"**. Krok 1 (dokončiť odovzdané) mal prednosť pred hľadaním
  nových, a keďže guard povolil len 8, **nové firmy sa v tomto behu nehľadali**.
- **0 riadkov „Treba research"**, **0 presunutých do AI vetvy** — všetkých 8 vyšlo na Ponuku 3.
- **Duplicity:** 0 vylúčených (žiadni noví kandidáti; odovzdané riadky prešli dedupe pri vzniku).
- **Vo fronte odovzdaných ostávajú 3:** #527 OrtoTrnava, #531 Matejko, #532 KAKTUS.
  Pri prvých dvoch sa web dnes nedal načítať (WebFetch vrátil prázdnu odpoveď), KAKTUS je overený
  a pripravený — **tri riadky pre ďalší beh, prednostne**.
- Aktuálne **41 „Draft pripravený" s Odosielateľ = appinara.sk** (v schránke 43 draftov; rozdiel
  sú dva známe pokazené drafty z 10.–12.08. — „asdasd" a „info@mliecnafarma.sk" — na ručné zmazanie).

## Overovanie sa opäť vyplatilo — dve korekcie

Krok „over fakty" nebol formalita:

1. **PSYCHOTOP (#528) — nález z Poznámok NEPLATÍ.** Pôvodný research tvrdil, že webu
   `psycholog-kosice.sk` chýba meta viewport a na mobile nie je responzívny. Dnes tam viewport
   **je** (`width=device-width, initial-scale=1`). Draft by bol poslal nepravdivé tvrdenie.
   Prepísaný na overené nálezy: antispam otázka „skeuKR", objednávanie len telefonicky a odkaz
   na druhý web bez SSL. Stĺpec M nesie korekciu explicitne.
2. **Dental Ateliér (#526)** — research spomínal .docx anamnestický dotazník z 06/2021; ten sa
   dnes na overovaných stránkach nepotvrdil, takže sa do draftu **nedostal**. Draft stojí na tom,
   čo je overené: jediné CTA „Zavolať teraz", hodiny do 15:30 a memorandum pod starým názvom OK-Dent.

Ostatných 6 nálezov overené bod po bode a **platia bez zmeny**.

## Najsilnejšie nálezy (learning)

1. **CADERM (#529) — modal, ktorý hlási dovolenku spred dvoch týždňov.** Na úvode 14.08. stále
   vyskakuje „Ambulancia bude zatvorená 20.7.-1.8.2026 a 26.8.-3.9.2026". Prvé okno je dávno po
   dátume. Nedá sa spochybniť, overí sa za desať sekúnd a firma tým sama priznáva, že oznamy nemá
   kto prepínať. **Rovnaký pattern ako Jazero Borovce z 13.08 — obsah, ktorý mal dávno vypršať.
   Za dva behy tretí zásah; stojí za to hľadať ho cielene.**
2. **GRIMMY (#533) — záložka sa volá „Online" a pod ňou je pošta.** Doslova: „Stiahnite si
   prihlášku nižšie. / Vyplňte a podpíšte. / Odošlite ju poštou alebo prineste osobne" + odkaz na
   `.docx`. Stránka bola upravená 28.05.2026, čiže to nie je zabudnutý kút webu — je to aktuálny
   zápisový proces pred sezónou. Silné aj časovo: zápisy bežia teraz.
3. **Vrzukáč (#534) a Penzión Adrián (#535) potvrdzujú pravidlo z 12.–13.08.:** najsilnejší nález
   nie je o dizajne, ale o **jednom údaji uvedenom dvakrát a zakaždým inak** (hodiny 17:00 vs 18:00
   na jednej stránke), alebo o **obsahu, ktorý mal dávno vypršať** (denné menu 3.8.–7.8. visí 14.8.).

## Postup na drafty cez Chrome — doplnenie k 13.08.

Postup z 13.08. drží, ale **kliknutie do tela mailu podľa `ref` z `find` spoľahlivo zlyháva** —
dvakrát skončilo tým, že sa text vypísal do hlavného okna a otvoril prehľad klávesových skratiek
(a raz pritom preskočil zoom stránky). Nový spoľahlivý postup:

1. Compose → **Full screen cez `find` + ref** (platí z 13.08.).
2. To a Subject **klikať súradnicami** v maximalizovanom okne (y≈164 a y≈230), nie cez ref.
3. **Do tela sa dostať cez `Tab` zo Subjectu** — nie klikom. Tab zo Subjectu ide do tela;
   varovanie „nikdy Tab" z 12.08. platí len pre pole To.
4. Oprava textu v tele: **klik do Subjectu → Tab → Ctrl+A → prepísať celé telo.** Takto je Ctrl+A
   ohraničené na telo. Klik priamo do tela pred Ctrl+A označí celú stránku a text sa vypíše mimo.
5. Zatvárať cez `find` „Save & close", nie súradnicami — v priebehu behu sa mierne mení render.

Týmto postupom prešli drafty 4–8 na prvý pokus, bez opravy.

## Na doriešenie v schránke

- Stále tam ležia **dva pokazené drafty z 10.–12.08.** — „asdasd" a draft s predmetom
  „info@mliecnafarma.sk". Ani jeden nie je v Exceli, takže daily send ich nepošle, ale patria
  zmazať ručne.
- **Podpis:** schránka má stále „No signatures" (compose sa otvára s prázdnym telom), takže
  všetkých 8 draftov textový podpis obsahuje — v súlade so zadaním úlohy. Ak sa HTML podpis zapne,
  treba ho z draftov odstrániť, inak bude v maile dvakrát.

## Drafty tohto behu

| # | Firma | Email | Predmet | CTA (§7) |
|---|---|---|---|---|
| 526 | Dental Ateliér | info@dentalatelier.sk | Akútny pacient, ktorý zavolá po 15:30 | #6 |
| 528 | PSYCHOTOP | jakubovova@gmail.com | Cesta od cenníka k termínu v PSYCHOTOP | #2 |
| 529 | CADERM | dr.rajczyova@gmail.com | Kožné a FotoFinder — dve adresy, jedno objednanie | #1 |
| 530 | JK-dent | recepcia@jk-dent.sk | JK-dent: kam má pacient zavolať? | #4 |
| 533 | GRIMMY | info@grimmy.sk | Grimmy — prihláška, ktorá ide poštou | #5 |
| 534 | Pekáreň Vrzukáč | vrzukac@gmail.com | Na Štefánikovej do 17:00 alebo do 18:00? | #3 |
| 535 | Penzión Adrián | penzionadrian@gmail.com | Izba u Adriána sa dá objednať len telefónom | #2′ |
| 536 | VIADERMA | jkonderlov@gmail.com | Objednávky od 9:00 do 12:00 — a mobil | #6′ |

Použitých všetkých 6 CTA variantov, dva preformulované a nikdy nie dva rovnaké za sebou.
Celé texty draftov a overené fakty ku každému: `DRAFTY-weby-2026-08-14.md`.
