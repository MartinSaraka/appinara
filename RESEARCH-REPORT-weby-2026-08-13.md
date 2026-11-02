# Research report — appinara-weby-research (martin@appinara.sk) — 13.08.2026

**Backlog guard:** 37 „Draft pripravený" s Odosielateľ = appinara.sk → pásmo 25–40 → **beh obmedzený na 8 prospektov**.
Keďže 7 z tých 8 pripadlo na odovzdané riadky (krok 1 má prednosť pred hľadaním nových), na nové firmy ostalo
miesto pre jednu. Excel overený ako zapisovateľný, záloha `backup/Appinara_Prospekti_a_Outreach.xlsx.bak-webyresearch-20260813-1911`.

## Výsledok behu

- **8 draftov reálne v schránke martin@appinara.sk** (39 → 47 draftov, overené screenshotom aj zoznamom).
- **7 z nich sú odovzdané riadky z 12.08** (#506–512), ktoré vtedy zlyhali na Gmail UI. Status prepnutý
  „Čaká na draft" → **„Draft pripravený"**. Fronta odovzdaných je teraz **prázdna**.
- **1 nová firma** (#514 Športové centrum Pionierska) — Status „Draft pripravený".
- **0 riadkov so statusom „Treba research"**, 0 presunutých do AI vetvy (všetko vyšlo na Ponuku 3).
- **Duplicity:** 0 vylúčených — z kandidátov prešli dedupe všetci (squashcentrum.sk, b-park.sk, agrofarma.sk,
  georginafarma.sk ani fanatix.sk v Exceli nie sú). Dedupe bežal proti všetkým 474 riadkom (doména/názov/email,
  normalizovane).

## ⚠️ Zmena nálezu pri overovaní — Jazero Borovce (#507)

Krok „over fakty" sa vyplatil. Nález z 12.08 (tlačidlo Rezervácia vedie na článok z 3.2.2025 s dvoma číslami)
**k 13.08 už neplatí** — tlačidlo dnes vedie na regulárnu stránku `/rezervacie-lovnych-miest-na-jazere-borovce/`.
Draft z `DRAFTY-weby-2026-08-12.md` by bol poslal nepravdivé tvrdenie. **Prepísaný na nový, silnejší nález:**
na tej stránke stojí „LOVNÉ MIESTO SI MÔŽETE ZAJEDNAŤ U SPRÁVCU JAZERA" a hneď pod tým *„UŽ ČOSKORO!
Pripravujeme pre vás rezervačný systém"* — pričom stránka sa naposledy menila **16.05.2024**, čiže to „čoskoro"
tam visí vyše dvoch rokov. Stĺpce H, I a M v Exceli sú prepísané.

Ostatných 6 nálezov overené bod po bode a **platia bez zmeny** (Necpaly duplicity v tabuľke predajní, Markovics
11,5 vs 7 ha, Valachovičová reCAPTCHA hláška, Dedinský cenník 15.5.2025, AB Autoškola 16.01. vs 26.01.2026
+ PHP warning, BouldroFka hodiny na troch miestach).

## Najsilnejšie nálezy (learning)

1. **Jazero Borovce** — „už čoskoro" na živej stránke, ktorá sa dva roky nezmenila. Nedá sa spochybniť,
   overí sa za minútu a firma sama priznáva, že to chce. **Nový pattern, ktorý sa oplatí hľadať cielene:
   „pripravujeme / už čoskoro" + dátum poslednej úpravy stránky.**
2. **Športové centrum Pionierska** — v kalendári cvičení sú telefónne čísla natvrdo v názve hodiny
   („Latino dance (telefonicky vopred – 0917745068)"), jednému z nich chýba úvodná nula, a pri štyroch
   hodinách ostalo v cene prázdne „60min / €". K tomu v Novinkách v polovici augusta stále svietia
   vianočné otváracie hodiny na december 2025.
3. **Potvrdenie z 12.08 platí tretí beh po sebe:** najsilnejšie nálezy nie sú o dizajne, ale o jednom údaji
   uvedenom dvakrát a zakaždým inak, alebo o obsahu, ktorý mal dávno vypršať.

## Postup na drafty cez Chrome — vyriešené

Postup z 12.08 („compose → maximalizovať → súradnice") funguje, ale doplnený o dve veci robí beh spoľahlivým:

1. **Tlačidlo Full screen klikať cez `find` + ref, nie cez súradnice** — v malom compose okne je mimo viditeľnej plochy.
2. **Telo mailu písať cez `type`, nikdy cez `form_input`** — `form_input` na contenteditable telo nezapíše nič.
   Naopak To a Subject sa cez `find` refy vyplnia spoľahlivo. Nikdy Tab (končí na Send).
3. Preklep v tele sa opraví `klik do tela → Ctrl+A → prepísať celé telo`. Klikanie na konkrétne slovo
   podľa súradníc míňa cieľ.

## Na doriešenie v schránke

- Stále tam leží **pokazený draft s predmetom „info@mliecnafarma.sk"** (z 12.08, adresát prázdny, predmet a telo
  pomiešané). Nový, správny draft pre Necpaly je vedľa neho. Nie je v Exceli, takže daily send ho nepošle —
  ale patrí zmazať ručne, nech nemätie. Rovnako testovací draft „asdasd".
- **Podpis:** schránka má stále „No signatures", takže drafty textový podpis obsahujú (v súlade so zadaním úlohy).
  Ak sa HTML podpis zapne, treba ho z draftov odstrániť — inak bude v maile dvakrát.

## Prehľad zapísaných riadkov

| # | Firma | Lokalita | Nález | Priorita | Status |
|---|---|---|---|---|---|
| 506 | Mliečna Farma Necpaly | Necpaly | ručná tabuľka ~230 predajní s duplicitami | Vysoká | Draft pripravený |
| 507 | Jazero Borovce | Borovce | „Už čoskoro" rezervačný systém na stránke z 5/2024 | Vysoká | Draft pripravený |
| 508 | Vinárstvo Markovics | Vinosady | 11,5 ha vs 7 ha na tej istej stránke | Vysoká | Draft pripravený |
| 509 | Kvetinárstvo Valachovičová | Gbely | formulár deaktivovaný odmietnutím reCAPTCHA | Vysoká | Draft pripravený |
| 510 | Včelárstvo Dedinský | BA-Devínska Nová Ves | cenník datovaný 15.5.2025, sklad natvrdo v HTML | Vysoká | Draft pripravený |
| 511 | AB Autoškola Brádňanský | Hnúšťa / Rim. Sobota | dva rôzne dátumy toho istého kurzu + PHP warning | Vysoká | Draft pripravený |
| 512 | BouldroFka | Trnava | otváracie hodiny ručne na troch miestach | Stredná | Draft pripravený |
| 514 | Športové centrum Pionierska | Bratislava | telefónne čísla a prázdne ceny v rozvrhu cvičení | Vysoká | Draft pripravený |

## Stav pipeline po behu

| | Počet |
|---|---|
| **Draft pripravený, Odosielateľ = appinara.sk** | **45** |
| Draft pripravený, Odosielateľ = gmail | 125 |
| Čaká na draft | 0 |

> **Pozor na ďalší beh:** 45 prekračuje hranicu 40, takže **backlog guard najbližší beh zastaví (STOP)**,
> kým sa nezačne odosielať. Príčina nie je v researchi — daily send stál 11.–13.08. (Chrome nebol pripojený,
> viď `DAILY-SEND-REPORT-martin-appinara-2026-08-13.md`). Dnes Chrome pripojený je, takže odosielanie sa
> môže rozbehnúť; ak sa rozbehne, guard sa uvoľní sám.

---
*Beh: 13.08.2026 | Guide: OUTREACH-QUALITY-GUIDE.md v3.3 | Quality check 7/7 pri všetkých 8 draftoch*
