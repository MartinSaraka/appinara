# Follow-up report — 10.08.2026 (gmail vetva)

## Súhrn

- **Kandidáti (Status „Odoslané", O = gmail, vek 4–14 dní):** 15
- **Odpovedali (skip):** 0
- **FU1 odoslané a overené:** **10**
- **Novo „Expirované":** **2** (nie vekom — viď nižšie)
- **Nedoručené / neodoslané:** 3 (technická chyba, drafty čakajú)

## FU1 odoslané (10) — všetky overené v pôvodnom vlákne

| Riadok | Firma | Čas |
|---|---|---|
| 375 | RUŽA textil | 11:54 |
| 376 | ObjednajKvety.sk | 11:57 |
| 380 | Arbor Dental | 12:00 |
| 381 | Cristal Dent | 12:05 |
| 384 | AB-C Štúdio | 12:07 |
| 395 | Sviečky s láskou | 12:11 |
| 396 | ZUPPA | 12:15 |
| 398 | Bio-racio-dia | 12:19 |
| 400 | Zubná ambulancia Prešov | 12:21 |
| 407 | Penzión Bardejov | 11:49 |

Status → „FU1 odoslané" (terminálny), L = 10.08.2026. Pauzy 66–164 s, CTA rotované.

## Expirované (2) — POZOR, dôležité zistenie

**Penzión pod Tatrami (r224)** a **AstonReal (r409)** už dostali **dva úvodné maily**:

- Penzión pod Tatrami: 25.06.2026 + 04.08.2026
- AstonReal: 29.06.2026 + 04.08.2026

FU1 by bol **tretí** mail → blokované železným pravidlom. Nastavené „Expirované"
(terminálny), aby ich budúci beh znova nezobral.

**Príčina stojí za pozretie:** obe firmy boli 04.08. oslovené znova, hoci už mali
úvodný mail z júna. Research/daily-send dedupe zjavne nekontroluje históriu vlákien —
odporúčam pozrieť, koľkých ďalších prospektov sa to týka.

## Neodoslané (3) — prehliadač zamrzol

Gmail tab prestal reagovať okolo 12:26. Drafty sú pripravené a textovo v poriadku:

| Riadok | Firma | Stav draftu |
|---|---|---|
| 401 | Rehaped | správne vo **vlákne** — stačí odoslať |
| 402 | DENTISTS | **mimo vlákna** — pred odoslaním prehodiť na reply |
| 403 | Impulse Gym | **mimo vlákna** — pred odoslaním prehodiť na reply |

Status ostáva „Odoslané", takže ich ďalší beh korektne zoberie (vek bude 7–8 dní,
stále v okne 4–14).

## Chyby, ktoré si žiadajú tvoj zásah

1. **6 pokazených/duplicitných draftov v schránke — treba zmazať ručne.**
   Pri tvorbe draftov sa mi do tela mailu dostal technický text
   (`</body><parameter name="htmlBody">…`). Odoslané maily sú čisté — overené
   plný text všetkých 10. Ale v Konceptoch ostalo 5 pokazených draftov
   (RUŽA, ObjednajKvety, Arbor, Cristal, AB-C) v samostatných vláknach
   z 09:40, plus starý AB-C draft zo 07.08.
   **Neposielaj ich.** Drafty som zámerne nemazal (mazanie si nechávam na teba).

2. **update_draft odpája draft od vlákna.** Gmail API pri úprave draftu presunie
   draft do nového threadu. Prompt úlohy odporúča „existujúci draft aktualizuj" —
   to v praxi rozbije threading. Správne je vytvoriť nový draft
   s `replyToMessageId` a starý zahodiť.

3. **Pätička:** v odoslaných mailoch je „appinara.sk" ako čistý text (bez
   google.com/url redirectu). V troch čakajúcich draftoch redirect je — pri
   odosielaní ho prepíš.

## Pipeline (stĺpec K, celý hárok, 455 riadkov)

| Status | Počet |
|---|---|
| Draft pripravený | 155 |
| Expirované | 112 |
| FU1 odoslané | 57 |
| Treba research | 29 |
| FU2 odoslané | 23 |
| FU3 odoslané (breakup) | 22 |
| Odpoveď | 21 |
| Odoslané | 18 |
| Email chýba | 15 |
| LinkedIn iba | 2 |
| Pozastavené | 1 |

## Kontroly

- Reply-check pred každým mailom: vlákno + doména (vlastné domény) /
  presná adresa (freemaily). Nikto neodpovedal.
- Nezávislé overenie: `in:sent` za 10.08. vracia presne 10 mailov prospektom.
- Žiadny odoslaný mail neobsahuje technický text ani vymyslené čísla.
- Záloha: `backup/Appinara_Prospekti_2026-08-10_1133.xlsx`
  (staré zálohy sa nepodarilo prerezať — priečinok nedovolil mazanie).
