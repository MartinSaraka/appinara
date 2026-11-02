# Research report — weby/apky vetva, 24.08.2026

## Backlog guard — ZMERANÝ, ale na pokyn Martina PREPÍSANÝ

| Meranie | Hodnota |
|---|---|
| Konceptov v schránke pred behom (priame čítanie) | **48** |
| Z toho známe nepodarky | 2 („asdasd", „info@mliecnafarma.sk") |
| **N_real (cold drafty)** | **≈ 46** — nad prahom STOP (> 40) |
| Rozhodnutie | Martin dal explicitný pokyn pokračovať → plný beh 15 |

Účet overený titulkom karty: **„Drafts (48) — martin@appinara.sk"**. Gmail konektor je
napojený na `appinarasolutions@gmail.com` (gmail vetva), takže sa pracovalo cez Chrome `u/3`.

**Rekonciliácia: 0 opravených riadkov.** Excel mal 45 riadkov „Draft pripravený" + „appinara.sk",
schránka 48 konceptov — agregátne sedí. Bodovo overených 5 adries, 5/5 nájdených. Fantómy
z gmail vetvy (14.08.) sa tu neopakujú.

## Výsledky behu

| | |
|---|---|
| Nájdených firiem | 20 (cez 5 paralelných research agentov) |
| **Použitých s draftom** | **15** — všetky koncepty overené v schránke |
| „Treba research" | 0 |
| Vylúčených ako duplicita | **0** (dedupe proti všetkým 561 riadkom — doména, názov aj email) |
| Presunutých do AI vetvy | **0** (všetkým 15 vychádza Ponuka 3) |
| Riadky v Exceli | # 602–616 (r562–576), Status „Draft pripravený", Odosielateľ „appinara.sk" |
| Konceptov v schránke po behu | 48 → **63** |

**Rezerva na ďalší beh (nález mali, len slabší):** MaxWay, Kongo Žilina, Rafting Hron,
4moving, Farmár.sk.

**Zamietnutých počas researchu:** ~45 firiem — funkčné e-shopy/rezervácie, chýbajúci email
na webe, reťazce, alebo nález bez tvrdého dôkazu.

## ⚠️ Dva prevádzkové nálezy

**1. Gmail počas behu odhlásil `u/3`** a vypýtal heslo (heslá nezadávam). Session sa neskôr
sama obnovila. Ak sa to zopakuje, `weby-daily-send` (13:00) aj `weby-followup` (14:00) zlyhajú.

**2. Podpis: guide §10 NEPLATÍ — overené priamo.** Compose okno má tlačidlo „Insert signature",
takže podpis v účte **existuje**, ale do konceptov sa **automaticky nevkladá** (`.gmail_signature`
= 0 výskytov). To je presne tá chyba, ktorú 23.08. riešil daily send ručne pri 36 draftoch.
**Preto týchto 15 draftov textový podpis OBSAHUJE** (podľa promptu úlohy, proti guide §10).
→ **Guide §10 treba opraviť** — tvrdenie o automatickom podpise je nepravdivé.

## Najsilnejšie nálezy (na učenie)

**1. Ski Krahule Center** — ikony Facebooku a Instagramu vedú na `facebook.com/worldballhockey`
a `instagram.com/wbhf.info`, teda na **cudziu hokejbalovú federáciu**. K tomu prázdna stránka
Cenník a e-mail v pätičke bez `mailto:`. Tri nezávislé chyby, každá overiteľná za pár sekúnd.

**2. KošiceTransfer.sk** — tlačidlo „Odoslať Požiadavku" je `<input type="button">` (nie submit),
`webflow.js` sa vôbec nenačíta a v žiadnom skripte nie je obsluha pre `.btn-send-form-brix`.
**Dopytový formulár teda nedoručí nič** a majiteľ o strate dopytov nevie. Najlepší typ nálezu:
tichá strata peňazí, dokázateľná z kódu.

**Vzor potvrdený z 20.08.:** najsilnejšie nálezy nie sú „starý web", ale **rozbité alebo prázdne
CTA** — JumpHouse (3× tlačidlo REZERVÁCIA → úplne prázdna stránka), JUMP Park Senica (~15×
„Rezervovať" → 301 na kontakt + oznam z 22.11.2021 stále v HTML), CYKLOŠOPA (85 bicyklov
s cenami, ale bez tlačidla do košíka), MEDROB (prázdne ceny + `/kosik/` vracia 404).
**Oplatí sa cielene klikať hlavné CTA, nie hodnotiť dizajn.**

## Poznámky k realizácii

- **Koncepty sa nedajú vytvárať cez `?view=cm` URL** — Gmail ich pri navigácii zahodí
  (overené: 48 konceptov aj po navigácii). Funguje len natívne Compose okno + písanie.
- **Písanie komolí diakritiku** — vzniklo 5 preklepov („tabuĺke", „dovioezť", „ponúka stále",
  „stránku ponúky", „ponúku vozidiel"). Všetky nájdené cez `in:draft "<preklep>"` a opravené;
  finálna kontrola vracia 0 pri každom. Pri ďalších behoch problémové slová radšej preformulovať.
- **Autocomplete v poli Príjemca** raz spravil z predmetu druhého príjemcu (Zlatý Vŕšok) —
  draft sa zahodil a spravil nanovo. Riešenie: po napísaní adresy stlačiť Escape, až potom Tab.
- Quality check (7 otázok) prešlo **15/15**. Dĺžka 138–158 slov, CTA rotované v 5 variantoch
  po 3, nikdy dva rovnaké za sebou. Variant „Ak vás to zaujme… stačí jedno slovo" sa nepoužil —
  koliduje s povinnou opt-out vetou.
- **Súbežný beh:** počas behu iný proces menil Excel („Čaká na draft" + appinara.sk: 18 → 23
  bez pribudnutia riadkov). Rovnaká poznámka bola v reporte z 23.08. — **skontroluj plánovač.**
- Zálohy: `backup/Appinara_Prospekti_a_Outreach_backup_2026-08-24.xlsx` (pred behom)
  a `backup/Appinara_Prospekti_a_Outreach.pred-zapisom-*.xlsx` (pred zápisom riadkov).

## Stav vetvy appinara.sk po behu

| Status | Počet |
|---|---|
| Odoslané | 65 |
| **Draft pripravený** | **60** |
| Čaká na draft | 23 |
| Treba research | 5 |
| Email chýba | 5 |
| FU1 odoslané | 2 |

## Odporúčania

1. **Rozposielať, nie researchovať.** 60 draftov pri 20/deň = 3 dni. Ďalší research beh
   (Ut 25.08.) by guard mal zastaviť — a tentokrát ho nechať zastaviť.
2. **Opraviť guide §10** — tvrdenie o automatickom podpise je overene nepravdivé.
3. **23 riadkov „Čaká na draft"** od gmail vetvy stále čaká na drafty.
4. **Upratať 2 nepodarené koncepty** („asdasd", „info@mliecnafarma.sk") — skresľujú guard.
   Odporúčanie po tretíkrát.
