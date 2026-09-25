# Daily send report — appinarasolutions@gmail.com — 15.09.2026 — ZASTAVENÉ

## Výsledok: 0 odoslaných mailov

## Pre-flight: OK
- Excel zapisovateľný (no-op save prešiel)
- Záloha: backup/Appinara_Prospekti_2026-09-15_1001.xlsx
- Chrome pripojený (Browser 1, Windows)
- Účet overený: appinarasolutions@gmail.com na u/2 (title bar)
- Lock .outreach-lock = FREE

## Blokujúci problém
Gmail compose okno sa otvára TRVALE ZBALENÉ (minimalizované):
- rozmery dialógu: 328 x 40 px, pozícia x=1346, y=788
- tlačidlo "Odoslať" má rozmer 0 x 0 px -> nedá sa naň kliknúť
- viewport stránky: 1745 x 828 CSS px, ale interaktívna/zachytiteľná
  oblast okna konci cca na y=753 CSS px -> zbalená lišta compose je
  MIMO klikateľnej oblasti

### Čo bolo vyskúšané (všetko neúspešné)
1. klik na ref tlačidla Odoslať (ref_1704)
2. klik do tela + Ctrl+Enter
3. JS .click() na hlavičku compose (rozbalenie)
4. klik na súradnice hlavičky compose (1335,734 v rámci screenshotu)
5. klik na tlačidlo "Maximalizovať" (1433,726)
6. full reload stránky -> compose sa znova otvorí zbalené
7. resize okna 1500x950 a 1600x1200 -> innerHeight zostáva 828,
   resize sa na okno neprejaví
8. screenshoty opakovane padajú na timeout
   (CDP Page.captureScreenshot timed out after 30000ms)

## Overenie, že sa nič neodoslalo
Gmail in:sent newer_than:1d -> 10 správ, VŠETKY z 14.09.2026 (beh z včera).
Dnes 15.09.2026 neodišla ani jedna správa. Žiadne duplicity nevznikli.

## Stav Excelu
NEZMENENÝ (okrem no-op save). Žiadny prospekt neprepnutý na "Odoslané",
žiadny dátum zapísaný. Ďalší beh môže bezpečne pokračovať od začiatku.

## Poznámka k draftu (kontrola podpisu)
Draft pre Ajťáci.sk (obchod@ajtaci.sk) bol plne overený:
- adresát sedí, telo neprázdne (397 znakov), hook nie je datovaný
- podpis "Appinara s.r.o. | appinara.sk | +421 917 566 722" PRÍTOMNÝ v tele
- odkaz appinara.sk je priamy (pathname "/"), NIE google.com/url redirect
  (redirect /url sa zobrazí len pri renderovaní v compose okne, v uloženom
  drafte je odkaz čistý)

## 10 vybraných prospektov (pripravení na ďalší beh)
| # | Firma | Email | Priorita |
|---|---|---|---|
| 1012 | Ajťáci.sk (HOST TECHNOLOGIES) | obchod@ajtaci.sk | Vysoká |
| 1013 | DUBLEZ | dublez@dublez.sk | Vysoká |
| 1014 | GAZOO (B&B Montagen) | info@gazoo.sk | Vysoká |
| 1020 | DepoAuto.sk (Denam) | depoauto@depoauto.sk | Vysoká |
| 1021 | Motora Slovensko | info@motora.sk | Vysoká |
| 1023 | Eshop KOALE | koale@post.sk | Vysoká |
| 1026 | Ortocentrum | sekretariat@ortocentrum.sk | Vysoká |
| 928 | La-Garden Dolná Seč | info@zahradkarskyobchod.sk | Stredná |
| 929 | All4bike (PROFER) | info@all4bike.sk | Stredná |
| 933 | Sympatia Real | msubjakova@chello.sk | Stredná |

## Odporúčanie pre Martina
Otvor Gmail u/2 ručne, klikni na ľubovoľný koncept a compose okno
ROZBAĽ (tlačidlo Maximalizovať), potom ho zavri krížikom. Gmail si stav
compose okna pamätá — po rozbalení by ďalší automatický beh mal fungovať.
Alternatívne zmenš rozlíšenie/zoom Chromu tak, aby sa compose lišta
zmestila do viditeľnej časti okna.

## Vedľajšia poznámka
Prerezávanie starých záloh zlyhalo na PermissionError
(backup/Appinara_Prospekti_2026-09-02_1849.xlsx). Nová záloha sa vytvorila
v poriadku, staré sa len nepodarilo zmazať.
