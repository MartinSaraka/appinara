# Research report — appinara-research-prospects — 13.08.2026

## Výsledok behu: POZASTAVENÝ (backlog guard)

**Research POZASTAVENÝ — backlog má 162 draftov, pokračujem, až keď klesne pod 50.
Drafty starnú rýchlejšie, než ich stíhame posielať.**

Nové firmy sa nehľadali, žiadne drafty nevznikli, do Excelu sa nepridal ani jeden riadok.

## Krok 0 — pre-flight

| Kontrola | Výsledok |
|---|---|
| Zapisovateľnosť Excelu (open + no-op save) | OK |
| Záloha | `backup/Appinara_Prospekti_a_Outreach.bak-research-2026-08-13_1909.xlsx` |
| Rotácia záloh (max 10) | ZLYHALA — staršie zálohy sa nedajú zmazať (permission denied). V `backup/` je teraz 21 súborov. Netreba riešiť hneď, ale rotácia nefunguje ani v ostatných úlohách. |
| Backlog "Draft pripravený" | **162** (125 gmail + 37 appinara.sk) → guard: STOP |

## Krok 1 — hand-over fronta (kontrola pred zastavením)

Riadkov so Status = "Čaká na draft" a Odosielateľ = "gmail": **0**
(všetkých 7 čakajúcich patrí vetve appinara.sk → spracuje ich weby research).
Zastavením behu sa teda nič neodložilo.

## Stav pipeline (celý Excel, 473 riadkov)

| Status | Počet |
|---|---|
| Draft pripravený | 162 |
| Expirované | 112 |
| FU1 odoslané | 67 |
| Treba research | 30 |
| Odpoveď | 23 |
| FU2 odoslané | 23 |
| FU3 odoslané (breakup) | 22 |
| Email chýba | 16 |
| Odoslané | 8 |
| Čaká na draft | 7 |
| LinkedIn iba / Pozastavené | 3 |

Pri ~22 odoslaných týždenne je 162 draftov ≈ **7 týždňov zásoby**. Backlog od
04.08.2026 (~145) ešte narástol — odosielanie nestíha tempo researchu.

## Reply rate podľa segmentu — podklad pre prerozdelenie kvót pri obnovení

Počítané len z reálne odoslaných (Odoslané + FU + Expirované + Odpoveď), segmenty s ≥5 odoslanými:

| Segment | Odpovede / odoslané | Reply rate |
|---|---|---|
| Zdravotníctvo | 7 / 40 | **17,5 %** |
| Zubná klinika | 2 / 13 | **15,4 %** |
| Fitness/Wellness | 3 / 31 | 9,7 % |
| E-shop | 6 / 63 | 9,5 % |
| Reality | 2 / 27 | 7,4 % |
| Reštaurácia | 1 / 18 | 5,6 % |
| Hotel/Penzión | 1 / 31 | 3,2 % |
| Gastro | 0 / 15 | **0,0 %** |

**Odporúčanie pre prvý beh po obnovení** (kvóty prerozdeliť podľa dát, nie podľa
pôvodného rozpisu):

- posilniť: zdravotníctvo + zubné kliniky (spolu ~8 z 20 namiesto 4)
- držať: e-shopy (5), fitness/wellness (3)
- utlmiť: gastro/reštaurácie (0–1 namiesto 3) a hotely/penzióny (1–2 namiesto 3)
  — obidva segmenty majú navyše 32 nepoužitých draftov v backlogu

## Ďalší krok

Backlog klesne pod 50 až po ~5 týždňoch odosielania pri súčasnom tempe. Reálne
možnosti: zvýšiť denný limit `appinara-daily-send`, alebo prehodnotiť (vyradiť)
staré drafty v segmentoch s nulovou odozvou — 15 gastro draftov je pri 0/15 reply
rate kandidát na vymazanie namiesto odoslania.
