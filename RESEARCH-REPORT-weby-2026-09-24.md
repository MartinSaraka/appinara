# Research report — weby/apky, martin@appinara.sk — 24.09.2026

## Pre-flight

- `.outreach-lock` bol na štarte **BUSY** (`appinara-daily-send spusteny 24.09.2026 14:20`,
  zapísaný 14:19). Nebol starší ako 12 h, takže platný → podľa zadania som počas behu
  **do Excelu nezapisoval** a zápis odložil na koniec ako jednu atomickú operáciu
  s kontrolou mtime. Zámok sa uvoľnil o 15:08 (`FREE — appinara-daily-send ukonceny`).
- Zálohy: `backup/..._webyresearch_20260924_143133.xlsx` a
  `backup/..._webyresearch_pred-zapisom_20260924_151653.xlsx`.
- Guide OUTREACH-QUALITY-GUIDE.md je v4.2 (15.09.2026), needitovaný, konzistentný.

## Backlog guard

- **N_real = 83** firiem so skutočným cold draftom v schránke (87 konceptov — 4 adresy
  mali po dvoch, sú to známe duplicity z 15.09./23.09.). Merané cez Chrome u/3
  hash-navigáciou `in:drafts to:<email>` nad 86 riadkami „Draft pripravený“ +
  „appinara.sk“, počítané len vo viditeľnom `div.ae4`.
- 83 ≤ 300 → **plný beh povolený.**
- Gmail konektor je pripojený na appinarasolutions@gmail.com, preto sa meralo cez Chrome.

## Rekonciliácia

**3 riadky opravené** zo „Draft pripravený“ na „Čaká na draft“ — koncept neexistuje:
1128 Pálenica Bolešov, 1129 Kockovská pálenica, 1130 Rybhos.

## Kontroly starých draftov (len hlásenie, nič sa neprepisovalo)

| Kontrola | Počet |
|---|---|
| 0d — koncepty staršie ako 30 dní | **3** |
| 0e — koncepty bez podpisu „Appinara s.r.o.“ | **4** |
| 0f — „vieme vam“ | **50** (Gmail stránkuje po 50, reálne môže byť viac) |
| 0f — „alebo som mimo“ | 24 |
| 0f — „15 minút“ | 22 |
| 0f — „Bez hovoru“ | 20 |
| 0f — „Kedy sa vám to hodí“ | 2 |

## Rozsah behu

Odovzdaných riadkov („Čaká na draft“ + appinara.sk) bolo na štarte **56**, teda viac
než 15 → podľa zadania sa **nové firmy nehľadali**. Duplicity (krok 2): 0.
Presunuté do AI vetvy: 0. Vypadnuté na pravidle I („to už majú“): 0.

- Spracovaných: **18** — z toho **15 s draftom**, **3 zamietnuté na pravidle H**
- **Ostáva nespracovaných: 49** (počas behu pribudlo 8 nových odovzdaných riadkov
  z gmail vetvy — tá do Excelu zapisovala o 15:10)

## ⚠ Nález na ručné doriešenie: 5 duplicitných konceptov

Päť firiem malo v Exceli status „Čaká na draft“, **ale v schránke už mali koncept
z 15.09.2026** — vznikli tak dva koncepty na tú istú adresu:

- 900 Carpe Dient (poprad@carpedient.sk)
- 992 FUN&SPORT Club (fsclucenec@gmail.com)
- 994 Plavecká škola AQUA (aquaskola@aquaskola.sk)
- 1014 LA-RO COR / Cardio-pro (larocorha@gmail.com)
- 1017 Konský Dvor (restauracia@konskydvor.sk)

Koncepty **nemažem**. Pred odoslaním treba pri každej vybrať jeden a druhý zmazať —
dnešný je v štýle v4.2 a prešiel quality checkom. Príčina je rovnaká ako 23.09.:
beh z 15.09. vytvoril koncepty, ale neprepol Status v Exceli.

## Vytvorené koncepty (15) — všetky overené: existujú + obsahujú podpis

| Riadok | Firma | Adresa | Slov |
|---|---|---|---|
| 894 | eKancelárskePotreby.sk | info@ekancelarskepotreby.sk | 50 |
| 895 | GASTROVIA group | gastrovia@gastrovia.sk | 53 |
| 897 | Kasman Dental | info@kasmandental.sk | 55 |
| 900 | Carpe Dient | poprad@carpedient.sk | 53 |
| 902 | TAUDENT | taudent@taudent.sk | 54 |
| 910 | OrthoAid | orthoaid@orthoaid.sk | 53 |
| 988 | Najkrmivo.sk | obchod@najkrmivo.sk | 44 |
| 992 | FUN&SPORT Club Lučenec | fsclucenec@gmail.com | 49 |
| 994 | Plavecká škola AQUA | aquaskola@aquaskola.sk | 53 |
| 999 | ANIDOR | anidor@zubarbardejov.sk | 49 |
| 1003 | SUN Dental | info@krump.sk | 55 |
| 1004 | OKO Prešov | okopresovsro@gmail.com | 57 |
| 1014 | LA-RO COR — Cardio-pro | larocorha@gmail.com | 50 |
| 1017 | Konský Dvor Brzotín | restauracia@konskydvor.sk | 54 |
| 1019 | Penzión Anima | info@penzionanima.sk | 52 |

Texty aj doklad k pravidlám H a I: `DRAFTY-weby-2026-09-24-NA-VLOZENIE.md`.

## Zamietnuté na pravidle H (3) — status „Treba research“

- **991 Telocvičňa Trnava** — /rozvrh sa v prehliadači nenačítal (Wix), tvrdenie
  „rozvrh je obrázok“ nepotvrdené. Navyše je tam widget „Contact Us“ → pred ďalším
  pokusom preveriť kvôli pravidlu I.
- **1012 Neuro Shine (MUDr. Zárubová)** — poznámka tvrdila dve rozdielne adresy
  na jednej stránke; dnes je tam len jedna.
- **1024 Záhrady Raček** — web sa nenačítal už druhýkrát (23.09. aj 24.09.).

## Tri tvrdenia z odovzdaných poznámok, ktoré sa dnes NEPOTVRDILI

Zapísané do Poznámok, aby ich budúci beh nezopakoval:

1. **Carpe Dient** — citát „Presný čas si dohodnete telefonicky priamo s doktorom“
   už na webe NIE JE. Draft postavený na dnešnom náleze (objednávkový formulár
   bez výberu termínu).
2. **Plavecká škola AQUA** — „rozbitá diakritika“ sa nepotvrdila (windows-1250 sa
   renderuje správne). Použitý silnejší a overiteľný nález: „optimalizované pre
   rozlíšenie 800 x 600 bodov“.
3. **FUN&SPORT Lučenec** — „rozsypaná diakritika“ sa nepotvrdila (0 výskytov U+FFFD).
   Použité: klub nemá vlastnú doménu a ako web má uvedený Facebook.

## Dva najsilnejšie nálezy (pre learning)

1. **eKancelárskePotreby.sk** — e-shop má tlačidlá „Do košíka“, ale na titulke aj
   vo vyskakovacom okne stojí „Aktuálne nie je možné v eshope objednávať.“
   Zákazník prejde celý výber a na konci nemá čo spraviť. Neponúkame náhradu,
   ponúkame sfunkčnenie — najsilnejší typ nálezu.
2. **GASTROVIA group** — stránka O nás je stále čistý demo obsah šablóny Stockie:
   anglické odstavce o „industrial design od roku 2013“ a štyri recenzie, ktoré
   chvália WordPress šablónu, nie firmu. Zákazník, ktorý si e-shop overuje pred
   prvou objednávkou, si o firme neprečíta nič.

## Aktuálny stav (po zápise)

- „Draft pripravený“ + Odosielateľ „appinara.sk“: **98 riadkov**
- „Čaká na draft“ + „appinara.sk“: **49**
- „Treba research“ + „appinara.sk“: **55**
