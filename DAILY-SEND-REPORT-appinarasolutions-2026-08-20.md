# Daily Send Report — appinarasolutions@gmail.com — 20.08.2026

**Výsledok: 9 odoslaných, 1 preskočený.**

## Pre-flight (všetko OK)
- Excel zapisovateľný, záloha `backup/Appinara_Prospekti_2026-08-20_1001.xlsx`
  (mazanie starých záloh zlyhalo na oprávneniach — nekritické)
- Chrome pripojený, účet overený: **appinarasolutions@gmail.com**
- Follow-up úloha nebežala súbežne

## Odoslané (9)
| # | Firma | Email | Priorita | Čas |
|---|-------|-------|----------|-----|
| 83 | Dentalis Trnava | trnava@dentalis.sk | Vysoká | 10:06 |
| 113 | Čaje.sk | info@caje.sk | Vysoká | 11:51 |
| 117 | Sport-potreby.sk | info@sport-potreby.sk | Vysoká | 11:54 |
| 195 | DermaBelle | info@dermabelle.sk | Vysoká | 11:56 |
| 315 | Formery Studio | hello@formery.studio | Vysoká | 11:58 |
| 324 | NEOREAL | neoreal@neoreal.sk | Vysoká | 12:00 |
| 88 | Rehabilica | info@rehabilica.sk | Stredná | 12:03 |
| 115 | Eugenika | info@eugenika.sk | Stredná | 12:05 |
| 127 | Natura Apotheke | info@naturaapotheke.sk | Stredná | 12:07 |

Všetkých 9 overených v Odoslaných (správny odosielateľ, správny adresát, jedno
vlákno na prospekta — žiadne duplicity). Excel zapísaný po každom maile:
K=`Odoslané`, L=`20.08.2026`, N=`20.08.2026` — kontrola prešla pre všetkých 9.
Pauzy medzi mailmi randomizované 67–148 s.

## Preskočený (1)
**#520 LA SKALA lezecké centrum** (info@laskala.sk, Vysoká) — draft z 13.08.
sa odvoláva na „prednostné prihlasovanie do 15. augusta", termín už prešiel.
Poznámka `Draft zastaraný 20.08.2026` zapísaná do M, status ostal
`Draft pripravený`.

⚠️ **Tento draft je zaseknutý v slučke** — rovnaká poznámka je v M už z 17.08.
a 19.08. Každý beh ho vyhodnotí ako zastaraný, preskočí a pridá ďalšiu
poznámku. Treba draft prepísať alebo prospekta preradiť na `Čaká na draft`.

## Zmena postupu — Chrome nahradený Gmail konektorom
Prvý mail (Dentalis) odišiel cez Chrome podľa zadania. Potom sa prehliadač
rozbil: zoom stránky vyskočil na 239 %, viewport klesol na 714×330 CSS px,
Gmail v takom okne neotvorí compose okno (DOM potvrdil `composeOpen: false`,
0 tlačidiel „Odoslať"). Screenshoty padali na timeout renderera, rozšírenie sa
raz odpojilo, `resize_window` hlásil úspech bez efektu. Nový tab nepomohol —
zoom je uložený per-origin.

Zvyšných 8 preto odišlo cez Gmail konektor funkciou `send_message(draftId)`,
ktorá odošle **existujúci draft tak, ako je** — rovnaký text, rovnaký účet,
draft sa spotrebuje (žiadne riziko duplicity pri ďalšom behu). Overenie bolo
prísnejšie než screenshot: adresát, subjekt aj celé telo draftu skontrolované
cez API pred odoslaním.

**Náprava pre Chrome:** resetovať zoom na mail.google.com na 100 % (Ctrl+0 —
cez automatizáciu je táto skratka blokovaná).

## Pipeline
- **Odoslané celkovo:** 68
- **Draft pripravený:** 62 (z toho 16 v gmail vetve s validným emailom)
