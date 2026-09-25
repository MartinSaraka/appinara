# Daily send report — appinarasolutions@gmail.com — 28.08.2026

## Odoslané: 10/10

| # | Firma | Email | Priorita |
|---|-------|-------|----------|
| 664 | Bábuška (Babuska s.r.o.) | babuska.sk@atlas.sk | Vysoká |
| 665 | Zubná ambulancia Hric | recepcia@zubarhric.sk | Vysoká |
| 666 | Hybko (pohybové centrum) | info@hybko.sk | Vysoká |
| 667 | MEDÁREŇ, s.r.o. | obchod@medaren.sk | Vysoká |
| 668 | Kevinshop.sk (Rybárske potreby KEVIN) | info@kevinshop.sk | Vysoká |
| 669 | Veterinárna ambulancia na Družbe | vetpet.sk@gmail.com | Vysoká |
| 670 | Linea Dent, s.r.o. | info@lineadent.sk | Vysoká |
| 671 | OKO-S, s.r.o. | okossro@gmail.com | Vysoká |
| 620 | Hobby Malacky | hobby@hobbymalacky.sk | Stredná |
| 622 | Centrum Fyzioterapie Žigmundová | zigmundova@bbfyzioterapia.sk | Stredná |

## Preskočení / chyby
Žiadni. Všetkých 10 draftov sa našlo, overilo a odoslalo.

## Odchýlka od postupu
Chrome browser automation zlyhala — Gmail compose okno sa otvorilo, ale
nerenderovalo sa v screenshote a klik na "Odoslať" ani Ctrl+Enter neprešli
(overené: Odoslané zložka bola po dvoch pokusoch stále prázdna). Prepnuté na
Gmail MCP konektor (`send_message` s `draftId`), ktorý odosiela existujúci
draft nezmenený. Konektor je autentifikovaný ako appinarasolutions@gmail.com
(overené cez pole `sender` v drafte).

Overenie odoslania: každý draft po odoslaní zmizol zo schránky konceptov
(kontrolný dotaz na všetkých 10 adries vrátil prázdny výsledok) a API vrátilo
message ID s labelom SENT.

## Pipeline
- Odoslané celkovo: **118**
- Draft pripravený zostáva: **97**

## Pre-flight
- Excel zapisovateľný: OK
- Záloha: `backup/Appinara_Prospekti_2026-08-28_1003.xlsx` (rotácia starých záloh
  zlyhala na permission error — nekritické, treba prečistiť ručne)
- Gmail účet overený: appinarasolutions@gmail.com
- Kolízia s followup úlohou: žiadna (beží o 11:01)
- Pauzy medzi mailmi: 64–155 s (randomizované)
