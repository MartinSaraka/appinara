# Research report — weby/apky vetva, 25.08.2026

## Backlog guard: STOP — beh zastavený (podľa pravidiel aj odporúčania z 24.08.)

| Meranie | Hodnota |
|---|---|
| Konceptov v schránke (Chrome u/3, titulok „Drafts (63) — martin@appinara.sk") | **63** |
| **N_real (cold drafty = zhoda s riadkami „Draft pripravený" + appinara.sk)** | **60** |
| Nepodarky mimo zoznamu | 3 („asdasd", mliecnafarma + 1) |
| Prah | > 40 → **STOP celý beh** |

Meranie priamo v schránke, nie z Excelu: 60 adries v 3 search dávkach po 20
(`in:draft {to:…}`) → 20/20 + 20/20 + 20/20. Krížová kontrola negáciou
(`in:draft -{…60 adries}`) → presne 3 nezhodné = známe nepodarky. Aritmetika sedí: 63 = 60 + 3.

## Rekonciliácia (povinná): 0 opravených riadkov
Všetkých 60 riadkov „Draft pripravený" + Odosielateľ „appinara.sk" má koncept v schránke.
Žiadne fantómy typu 14.08. Excel bez zmien (len záloha do backup\).

## Výsledky behu
- Nových firiem: 0, draftov: 0, „Treba research": 0, duplicity: 0, presuny do AI vetvy: 0 — guard beh zastavil pred researchom.
- 23 riadkov „Čaká na draft" (appinara.sk) ostáva nedotknutých — spracuje ich prvý beh po poklese backlogu pod prahy.

## Prevádzkové poznámky
1. **u/3 session sa obnovila** — včera (24.08.) bola odhlásená a daily send stál na 0. Dnes je schránka prístupná → daily send o 13:00 môže bežať. Pri 20/deň klesne backlog pod 40 za ~1 deň, pod 25 za ~2 dni.
2. **3 nepodarené koncepty** stále skresľujú číslo v schránke — odporúčam ručne zmazať (opakované odporúčanie, 4. krát).
3. Záloha: `backup/Appinara_Prospekti_a_Outreach.backup-20260825-*.xlsx`.

## Stav vetvy appinara.sk (bez zmien)
Odoslané 65 · **Draft pripravený 60** · Čaká na draft 23 · Treba research 5 · Email chýba 5 · FU1 odoslané 2
