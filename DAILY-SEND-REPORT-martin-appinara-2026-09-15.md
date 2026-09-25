# Daily send report — martin@appinara.sk — 15.09.2026

## Výsledok: 32 odoslaných mailov ⚠ (warmup limit bol 30 — PREKROČENÝ o 2)

### ⚠ CHYBA BEHU: prekročený warmup limit
Dnešný strop bol **30** (od 31.08.2026, dnešná spotreba pred behom = 0).
Reálne odoslaných: **32**. Pri priebežnom počítaní som sa pomýlil o 2 maily
(zle spočítaný blok riadkov 924–963: 22 mailov, nie 20). Chyba sa odhalila
až pri záverečnej verifikácii, kedy už boli maily odoslané a nedali sa vrátiť.
Overené v Gmaile: `#sent` → 32 správ s dátumom Sep 15, 2026.

**Odporúčanie:** zajtra znížiť strop o 2 (t.j. max 28), aby sa týždenný priemer
vyrovnal. Do promptu doplniť, že počítadlo sa má čítať z Excelu po každom zápise,
nie držať v hlave.

## Pre-flight: OK
- Excel zapisovateľný (openpyxl no-op save prešiel)
- Záloha: `backup/Appinara_Prospekti_2026-09-15_1305_taskA_martinsk.xlsx`
- Prerezávanie starých záloh zlyhalo na PermissionError (120 z 130 súborov) — známy problém
- Lock `.outreach-lock` bol FREE (od 09.09.), počas behu nastavený na BUSY, po behu vrátený na FREE
- Chrome pripojený (Browser 1, Windows)
- Účet overený: title bar `Drafts (154) - martin@appinara.sk` na u/3 ✔ (NIE u/2)

## Compose okno funguje
Blokujúci problém z dnešných behov pre appinarasolutions@gmail.com (u/2) sa
na u/3 **neprejavil** — compose sa otvára rozbalený (600 × 595 px), tlačidlo
Odoslať 72 × 36 px, klikateľné. Problém je teda viazaný na schránku u/2, nie na Chrome.

## Podpis
**Žiadnemu draftu podpis nechýbal** — všetkých 32 odoslaných draftov malo v tele
`Martin Saraka | Appinara s.r.o. | appinara.sk`. Drafty boli vytvorené 14.09.2026,
teda už podľa pravidla platného od 08.09. Nič sa nedopĺňalo.

## Odoslané (32)
| # | Firma | Email |
|---|---|---|
| 924 | Penzión Marco Polo | info@penzionmarcopolo.sk |
| 925 | Penzión Kysuca | penzionkysuca@gmail.com |
| 926 | Penzión Detva | info@penziondetva.sk |
| 928 | Penzión Zelený dom | zelenydompenzion@gmail.com |
| 929 | Penzión U Jeleňa | info@ujelena.sk |
| 931 | Pekáreň HÔRKA | info@pekarenhorka.sk |
| 932 | Cukráreň Bonté | info@cukrarenbonte.sk |
| 934 | Restaurant Dedinka | restikadedinka@gmail.com |
| 936 | Autoškola Janka | janka@autoskola-janka.sk |
| 937 | JP-Pneuservis | jp-pneuservis@jp-pneuservis.sk |
| 938 | Europa Taxi Zvolen | m.brenkus@azet.sk |
| 939 | Best Rent Slovakia (odťah Prešov) | info@odtahpresov.sk |
| 941 | JKM Rent Car | info@jkmrentcar.sk |
| 946 | Brusparket | brusparket@gmail.com |
| 950 | BO-JA (čistiareň) | bo-ja@bo-ja.sk |
| 951 | Pohrebná služba Ondrej Bednár | pohrebnictvo.bednar@centrum.sk |
| 953 | Logopédia Mgr. Hozlárová | logoviaa@gmail.com |
| 955 | MŠ a jasle Anjelik | jasleaskolka@anjelik.eu |
| 956 | Kvetinárstvo IRIS | info@iriskvety.sk |
| 958 | Ovčia farma Pokryváč | ovciafarma@ovciafarma.sk |
| 962 | Kvetinárstvo IRIS Galanta | kvetyiris@slovanet.sk |
| 963 | AC keramika | ackeramika@azet.sk |
| 1045 | Chata pod Belianskymi Tatrami | edita.ivancakova@gmail.com |
| 1046 | Chatka Poľana | info@polana.sk |
| 1048 | Chata Lenka | zuzanahruba@aol.com |
| 1053 | Chata Škutovky | mediaslav@gmail.com |
| 1054 | Chata Jana Demänovská dolina | chata.jana@hotmail.com |
| 1055 | Chata Čajka | pminarovicova@gmail.com |
| 1056 | Palacinkáreň Čučoriedka | palacinkaren.cucoriedka@gmail.com |
| 1057 | Vináreň Dobšiná | fuskovaz@gmail.com |
| 1060 | Šubamed | vojtosuba@azet.sk |
| 1062 | Čajovňa Jasmínka | cajovna@jasminka.sk |

## Preskočené
- **r1044 Chata Orava** (infoubytovanie@gmail.com) — draft sa v schránke nenašiel
  (`in:drafts to:…` → „No matches"). Zapísané do Poznámok „Draft nenájdený 15.09.2026",
  status ponechaný „Draft pripravený".

## Zabránená chyba (dôležité do promptu)
Pri druhom prospektovi (Penzión Kysuca) Gmail po zmene hashu `#search/...` **nepreflektoval
nové vyhľadávanie** — v DOM ostal starý zoznam 51 konceptov a klik na „prvý riadok"
otvoril **cudzí draft** (restauracia@konskydvor.sk). Draft som zavrel Escapom, nič sa
neodoslalo.

**Zavedené poistky (fungovali zvyšok behu bez chyby):**
1. pred každým hľadaním navigovať najprv na `#drafts`, až potom na `#search/...`
2. klikať len ak je **presne 1 viditeľný** riadok (`tr.zA` s výškou > 0) —
   Gmail drží skryté staré zoznamy, filter na viditeľnosť je nutný
3. pred kliknutím na Odoslať znova porovnať `[email]` adresáta v compose okne
   s cieľovou adresou; nesúhlas → ABORT

## Zápisy do Excelu
Po každom úspešnom odoslaní okamžitý zápis + save (Status = „Odoslané",
L = 15.09.2026, N = 15.09.2026 ak bolo prázdne). Záverečná kontrola:
32 riadkov s L = dnes a Status „Odoslané", **žiadny bez vyplneného N**.
Počet v Exceli sedí s počtom v Gmail `#sent` (32) — žiadne duplicity, žiadny stratený zápis.

## Zostáva v pipeline
**107** prospektov so statusom „Draft pripravený" a Odosielateľ = „appinara.sk".
