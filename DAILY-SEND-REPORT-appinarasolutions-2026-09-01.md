# Denný výstup — Appinara cold outreach (gmail vetva)

**Dátum:** 01.09.2026
**Schránka:** appinarasolutions@gmail.com (Chrome u/2, účet overený screenshotom)
**Beh:** 17:03 – 17:18

## Pre-flight

| Kontrola | Výsledok |
|---|---|
| Zapisovateľnosť Excelu (no-op save) | OK |
| Záloha | `backup/Appinara_Prospekti_2026-09-01_1703.xlsx` (287 851 B) |
| Prerezanie starých záloh na 10 | **ZLYHALO** — `PermissionError` pri mazaní v `backup/`. Záloha vznikla, len sa staré nedajú zmazať. |
| Chrome pripojený | OK (Browser 1, Windows, lokálny) |
| Účet u/2 | OK — titulok karty `appinarasolutions@gmail.com` |

## Odoslané maily (5/5 kandidátov)

| Čas | # | Firma | Email | Predmet |
|---|---|---|---|---|
| 17:05 | 694 | SEVA Slovensko (SIMON seeds s.r.o.) | info@sevaslovensko.sk | SEVA — sezónne otázky k osivám na jednom telefóne |
| 17:08 | 695 | PP SAFETY s.r.o. | ppsafety@ppsafety.sk | PP SAFETY — výber rukavíc bez telefonátu |
| 17:11 | 697 | Active Team Martin | info@activeteam.sk | Active Team — „máte ešte miesto v tom termíne?" |
| 17:14 | 698 | Penzión Alpinka (rodina Kučáková) | alpinka@alpinka.sk | Alpinka — tri jazyky, jedna schránka |
| 17:17 | 700 | Reality Gemer | info@realitygemer.com | Reality Gemer — dopyt na konkrétny dom |

Každý mail overený pred odoslaním (adresát == Excel, telo kompletné vrátane podpisu)
aj po odoslaní (toast „Správa bola odoslaná" + zmiznutie z Konceptov).
Všetkých 5 dodatočne potvrdených v `in:sent newer_than:1d`.
Pauzy medzi mailmi: 113 s, 141 s, 176 s, 108 s — všetky v rozsahu 60–180 s.

## Preskočení / chyby

Žiadni. Všetci 5 kandidáti mali draft a prešli kontrolou.

Hraničné rozhodnutie — **Active Team** (#697): hook stojí na letnej táborovej sezóne,
ktorá 31.8. skončila. Text je však v habituálnom prítomnom čase a neodkazuje na konkrétny
termín, sviatok ani akciu, takže nespĺňa kritérium „zjavne datovaný" a bol odoslaný.
Ak sa má takýto hook považovať za zastaraný, treba kritérium v zadaní sprísniť.

## Pipeline

- **Odoslané celkovo:** 149
- **Draft pripravený zostáva:** 50 — **všetkých 50 je `Odosielateľ = appinara.sk`**,
  teda pre túto (gmail) vetvu **nezostal ani jeden kandidát**.
- Preto sa odoslalo 5, nie 10: viac kandidátov v gmail vetve neexistovalo.
  Limit 10 nebol prekročený.

## ⚠️ Zistenie na riešenie — súbeh úloh

Zadanie zakazuje súbeh len s „Appinara followup sequence". Reálne bežali **súčasne tri
zapisovatelia** nad tým istým zošitom a tou istou schránkou:

1. `.outreach-lock` mal o 17:03 stav `DONE`; o **17:04** ho prepísal
   **`taskA-appinara-sk`** na `RUNNING` — teda štartol uprostred môjho behu.
   Zapísal riadky 440–442 (Ranč Pohoda, Čalúnnictvo Tibenský, Kominárstvo Oršulák)
   plus poznámky „Draft bez podpisu 01.09.2026" k ~10 riadkom.
2. **Followup úloha** odoslala o **17:16** FU1 na Reštauráciu Stodola (riadok 242)
   — z tej istej gmail schránky, medzi môj 4. a 5. mail.

**Dopad tentoraz žiadny.** Diff zálohy 17:03 oproti aktuálnemu súboru (38 zmien)
ukazuje, že sú v ňom zápisy všetkých troch úloh — nič sa neprepísalo. Bola to však
zhoda náhod: všetky tri úlohy robia `load_workbook → zmena → save`, čo prepisuje
**celý** súbor, takže pri inom preložení sa zápisy tichodstratia.

**Druhé riziko:** schránka odoslala 17:16 a 17:17 dva maily v priebehu minúty
(followup + môj). Pravidlo „min. 60 s medzi mailmi" drží len v rámci jednej úlohy,
nie na úrovni schránky — presne to, čo má chrániť pred flagnutím účtu.

**Odporúčanie:** jeden zdieľaný zámok (`.outreach-lock`) rešpektovaný *všetkými* tromi
úlohami — kontrola aj zápis `RUNNING`/`DONE` na začiatku a konci každej z nich —
a spoločný odstup medzi odoslaniami naprieč úlohami.
