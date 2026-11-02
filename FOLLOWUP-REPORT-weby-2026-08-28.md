# FOLLOW-UP REPORT — weby vetva (martin@appinara.sk) — 28.08.2026

## Výsledok: 20 FU1 odoslaných, 0 odfiltrovaných reply-checkom

## Pre-flight
- Excel zapisovateľný (openpyxl open + save OK)
- Záloha: `backup/Appinara_Prospekti_a_Outreach.backup-20260828-140534-webyFU.xlsx`
- Účet overený screenshotom aj titulkom karty: **martin@appinara.sk** (Chrome u/3)
- Podpis: overený na reálne odoslanom maile — schránka podpis automaticky NEDOPĹŇA,
  preto je textový podpis v tele každého FU (v rozpore s §10 guideu, v súlade s SKILL.md)

## Limit
- Warmup pásmo 24.–28.08. → limit **20**
- Spotreba schránky v čase pre-flightu (14:05): **0**
- Môj strop: 20 → **odoslaných presne 20**

## ⚠️ PREKROČENIE SPOLOČNÉHO LIMITU — SÚBEH ÚLOH
Počas môjho behu bežal paralelne aj **daily send** a odoslal z tej istej schránky
**19 úvodných mailov** (riadky 525, 527, 594–597, 599–605, 607, 609–613; všetky
Status „Odoslané", Posledný kontakt 28.08.2026). Pri pre-flighte tieto riadky
v Exceli ešte neboli.

**Spolu dnes z martin@appinara.sk: 39 mailov pri limite 20.**

Príčina: limit sa počíta zo stavu Excelu, ale žiadna úloha si miesta nerezervuje
vopred — dve súbežné úlohy si preto navzájom spotrebu nevidia. Odporúčam
zámkový súbor (napr. `.outreach-lock`), ktorý úloha vytvorí na začiatku a zmaže
na konci; druhá úloha pri jeho existencii skončí bez odosielania.

## Reply-check
- Globálny sken schránky `newer_than:40d -from:me` (bez DMARC/mailer-daemon): 14 vlákien,
  ani jedno od dnešných kandidátov
- Navyše každé pôvodné vlákno otvorené jednotlivo — všetky obsahovali len naše správy
- Freemail adresy (gmail.com, azet.sk) hľadané presnou adresou, vlastné domény doménovo
- **Odfiltrovaných: 0**

## Odoslané FU1 (vek 4–14 dní, od najstarších)

| # | Firma | Nový uhol |
|---|---|---|
| 1 | Športové centrum Pionierska | squash cez onlinememberpro vs. cvičenia len telefonicky |
| 2 | Dental Ateliér | GDPR PDF z 06/2021 pod starým názvom OK-Dent |
| 3 | BouldroFka | registrácia nového lezca je PDF na vytlačenie |
| 4 | PSYCHOTOP | presmerovanie starej adresy psychologkosice.sk |
| 5 | CADERM | druhé okno dovolenky beží práve teraz (do 3.9.) |
| 6 | JK-dent | 2000 pacientov aj zo zahraničia, cenník len v ambulancii |
| 7 | SZUŠ GRIMMY | rovnaký .docx postup na troch pobočkách |
| 8 | Pekáreň Vrzukáč | letné hodiny platia do 5.9. → o týždeň sa prepisujú znova |
| 9 | Penzión Adrián | to isté platí pre svadobnú sálu Angel |
| 10 | VIADERMA | formulár už majú, len sa pýta na otázky, nie na termín |
| 11 | Zubné centrum Nitra | druhý web mklinik.eu — dve stránky o tej istej klinike |
| 12 | Fyzio-Care | web fyzio-care.sk vs. mail @fyzioterapeuttrencin.sk |
| 13 | Sklenárstvo ALLA | web bez https → Chrome hlási „Nezabezpečené" |
| 14 | Vinárstvo Kopeček | blog: článok bez názvu + URL „random-nazov-clanku" |
| 15 | Autoškola Jednička | rodné číslo ako variabilný symbol platby |
| 16 | SZUŠ Vlada Urbana | zobrazený mail sekretariátu ≠ adresa v mailto odkaze |
| 17 | Matejko | „Najčastejšie otázky" v menu vracia 404 + „Nekategorizované" |
| 18 | BAGETERIA.EU | firmy objednávajú to isté dokola → zapamätaná objednávka |
| 19 | Chata Stela | v šablóne ostali stopy po inom penzióne + anglické texty |
| 20 | Monikine torty | oznam sa prepisuje priamo v HTML (zdvojený piatok) |

Každý mail: max 80 slov, odpoveď do pôvodného vlákna, konkrétny fakt zo stĺpca M,
CTA rotovaná podľa §7, odoslanie overené hláškou „Message sent", odstup 75–130 s.

## Expirované (> 14 dní)
Žiadne. Najstarší kandidát mal 8 dní.

## Nespracovaní kandidáti
V okne 4–14 dní ostáva **9 firiem** (všetky 5 dní, riadky 504, 508, 510–516) —
nezmestili sa do limitu. Zajtra budú mať 6 dní, stále v okne.

## Zápis do Excelu
20/20 riadkov overených: Status = „FU1 odoslané", Posledný kontakt = 28.08.2026,
poznámka „FU1 odoslané 28.08.2026". Zápis prebehol po každom overenom odoslaní zvlášť.

Stav appinara.sk po behu: Draft pripravený 70 · Odoslané 78 · FU1 odoslané 48 ·
Odpoveď 7 · Expirované 3 · Email chýba 5 · Treba research 5

## Poznámky pre Martina
1. **Vyriešiť súbeh úloh** — dnes odišlo z novej domény takmer dvojnásobok limitu.
2. Rozpor guide §10 vs. SKILL.md ohľadom podpisu — schránka podpis nedopĺňa,
   takže §10 treba opraviť (alebo zapnúť podpis v Gmaile).
3. Starých záloh Excelu je vyše 60, sandbox ich nevie mazať — treba upratať ručne.
