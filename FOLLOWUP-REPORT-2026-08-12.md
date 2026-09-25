# Follow-up report — gmail vetva — 12.08.2026

## Zhrnutie

- **Kandidáti (Odoslané + gmail):** 1
- **Odpovedali (skip):** 0
- **FU1 odoslané:** 0
- **Novo Expirované:** 0
- **Chyby:** 1 (blokujúca — viď nižšie)

## Kandidát

| Riadok | Firma | Email | Pôvodne odoslané | Vek | Okno |
|---|---|---|---|---|---|
| 401 | Babilia Medical s.r.o. (Rehaped) | recepcia.rehaped@gmail.com | 04.08.2026 | 8 dní | FU1 (4–14 dní) |

Reply-check: bez odpovede (vlákno obsahuje len moju správu; freemail → hľadané len presnou adresou).

## Čo sa podarilo

- Excel zapisovateľný, záloha `backup/Appinara_Prospekti_2026-08-12_1103.xlsx` (držaných 10 záloh).
- **Vyriešený duplicitný draft** z 11.08. — v schránke je teraz už len **1 čakajúci draft**, správne
  ako reply v pôvodnom vlákne, s čistou pätičkou `appinara.sk` (bez google redirectu).
- Draft prešiel kontrolou: konkrétny fakt z Poznámok (.doc dotazník) + jeden nový uhol (mobil),
  CTA z rotácie, teplý tón, žiadne vymyslené čísla.

## Blokujúca chyba

**FU1 sa nepodarilo odoslať — tretí neúspešný beh po sebe (10.08., 11.08., 12.08.).**

Gmail compose v tomto konkrétnom vlákne opakovane zamrazí renderer prehliadača. Dnes 3 pokusy,
2 čerstvé karty, klik na Odoslať cez súradnice, klik cez element reference aj `Ctrl+Enter` —
zakaždým „renderer frozen".

Overené cez Gmail API (nie len screenshotom): **vlákno má stále len 1 správu a draft naďalej
existuje** → mail odoslaný nebol. Preto Status zostáva `Odoslané`, `Posledný kontakt` sa nemenil.
Žiadny zápis „FU1 odoslané".

Gmail MCP nemá `send` nástroj (len create/update draft), takže odoslanie sa nedá obísť cez API.

## Čo treba od teba

**Odoslať draft ručne do 18.08.2026** — vtedy končí FU okno (14 dní od 04.08.) a prospekt
padne do `Expirované`. Draft je pripravený v Konceptoch, vlákno „Dotazník k vyšetreniu —
wordový súbor v roku 2026", stačí kliknúť Odoslať.

Ak sa zamrazenie zopakuje aj ručne, stojí za zváženie, či tento prospekt nenechať dobehnúť
do Expirované — tri automatické behy naň už padli.

## Pipeline (celý Excel)

| Status | Počet |
|---|---|
| Draft pripravený | 162 |
| Expirované | 112 |
| FU1 odoslané | 67 |
| Treba research | 30 |
| Odpoveď | 23 |
| FU2 odoslané (historické) | 23 |
| FU3 odoslané / breakup (historické) | 22 |
| Email chýba | 16 |
| Odoslané | 8 |
| Čaká na draft | 7 |
| LinkedIn iba | 2 |
| Pozastavené | 1 |
| **Klient** | **0** |

Z 8 riadkov `Odoslané` je 7 vo vetve `appinara.sk` (majú vlastnú follow-up úlohu), preto bol
kandidát na gmail FU1 len jeden.
