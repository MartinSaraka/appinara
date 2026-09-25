# Follow-up report — appinarasolutions@gmail.com — 15.09.2026 — ZASTAVENÉ

## Výsledok: 0 odoslaných FU1 mailov

Rovnaký blokujúci problém ako pri dnešnom daily-send behu o 10:08
(viď DAILY-SEND-REPORT-appinarasolutions-2026-09-15-ZASTAVENE.md).

## Pre-flight: OK
- Excel zapisovateľný (no-op save prešiel)
- Záloha: backup/Appinara_Prospekti_2026-09-15_1103.xlsx
- Lock `.outreach-lock` = FREE; daily-send beh ukončený 10:08 → žiadna súbežnosť
- Chrome pripojený (Browser 1, Windows)
- Účet overený: `Koncepty (116) - appinarasolutions@gmail.com` na u/2

## Kandidáti
| | počet |
|---|---|
| Status „Odoslané" + Odosielateľ „gmail" | 28 |
| Príliš čerstvé (< 4 dni, z behu 14.09.) | 10 |
| Mimo okna (> 14 dní) → Expirované | 1 |
| V okne 4–14 dní | 17 |
| Z toho odpovedalo (skip navždy) | 1 |
| **Pripravených na FU1** | **16** (strop 15 / beh) |
| **Reálne odoslaných** | **0** |

### Odpoveď (terminálny status, zapísané)
- **Naša Bublinka** (r857) — odpísali 09.09.2026: *„ďakujeme za ponuku… zakomponujeme do nášho už existujúceho riešenia na e-shope"*. Status → „Odpoveď". Rieši Martin osobne.

### Expirované (terminálny status, zapísané)
- **Perinbaba.sk** (r586) — odoslané 31.08.2026, dnes 16. deň, mimo okna 4–14 dní. Status → „Expirované".

## Blokujúci problém (nezmenený od rána)
Gmail compose okno sa otvára **trvale zbalené**:
- dialóg 328 × 40 px na pozícii x=1153, y=834; viewport 1552 × 873
- tlačidlo „Odoslať (Ctrl-Enter)" má rozmer **0 × 0 px** → nedá sa naň kliknúť ani cez ref

### Čo bolo vyskúšané dnes navyše oproti ránu (všetko neúspešné)
1. JS dispatch `pointerdown/mousedown/mouseup/click` na hlavičku compose → ostal zbalený
2. Reálny klik na ikonu minimalizovať/maximalizovať (prepočítané súradnice) → bez efektu
3. `document.body.style.zoom = 0.6` + `resize` event → dialóg sa zmenšil (197 × 24), ostal zbalený a pri spodnej hrane
4. CSS `transform: translateY(-500px)` na dialógu → hlavička sa presunula do klikateľnej oblasti (y=334), ale reálny klik na ňu compose nerozbalil — namiesto toho otvoril **iný koncept** zo zoznamu pod ním („Keď je operátor práve v sklade")

Po bode 4 som odosielanie **zastavil**, aby som omylom neodoslal nesprávny draft.

## Overenie, že sa nič neodoslalo
`in:sent newer_than:1d` → 10 správ, **všetky zo 14.09.2026** (včerajší beh).
Dnes 15.09.2026 neodišla ani jedna správa. Žiadne duplicity.

## Stav draftov v schránke (pripravené na ďalší beh)
13 FU1 draftov z 09.09.2026 visí neodoslaných priamo v pôvodných vláknach —
podľa KROKU 3 bodu 2 som ich **nechal nedotknuté**, sú v poriadku
(postreh z Poznámok + jeden nový uhol, rotovaná CTA, opt-out, 3-riadkový podpis).

Dnes pribudli 2 nové drafty (in-thread, s podpisom):
- **FyzioInn** (info@fyzioinn.sk) — nový uhol: kazuistiky a FAQ ako vlastné texty
- **Obchod zdravia** (info@obchodzdravia.sk) — nový uhol: veľkoobchod aj maloobchod jednou cestou

**RK NITRA** (r859) vypadla zo stropu 15 / beh (najmladšia zo skupiny 6 dní) — draft nemá, ostáva na ďalší beh.

## ⚠ Dve zistenia k Gmail API, ktoré treba zapísať do guidu

**1. `update_draft` ODTRHNE draft od vlákna.** Pri drafte pre **SEVA Slovensko** som
skúsil prepísať telo na dnešné znenie cez `update_draft`. Výsledok: `threadId`
sa zmenil z `1a056bfbda8c29c4` (pôvodné vlákno) na nový samostatný `1a0a452c7538605f`.
`update_draft` nemá parameter `replyToMessageId`, takže sa to **nedá vrátiť späť**,
a Gmail MCP **nemá nástroj na mazanie draftov**. SEVA draft je preto obsahovo
v poriadku a s podpisom, ale pôjde ako **samostatný mail** (predmet „Re: SEVA — …"),
nie ako odpoveď vo vlákne.
→ **Odporúčanie do promptu:** vetu „existujúci `update_draft` na dnešné znenie"
nahradiť za „existujúci draft NECHAJ TAK" — prepisovanie nič nezískava a rozbíja vlákno.
Nové drafty vytvárať výhradne cez `create_draft` + `replyToMessageId` (to vlákno drží správne, overené).

**2. Pätička „appinara.sk" sa cez API nedá udržať čistá.** Poslal som telo
s obyčajným textom `appinara.sk` (bez `<a>` tagu) — Gmail ho pri uložení sám
prepísal na `https://www.google.com/url?q=http://appinara.sk&source=gmail&…`,
a to **aj v plaintext verzii**. Železné pravidlo „NIKDY google.com/url redirect"
sa teda cez `create_draft`/`update_draft` splniť nedá; platí to rovnako pre
všetkých 13 starších draftov. Ranný daily-send report tvrdil, že v uloženom drafte
je odkaz čistý a redirect je len artefakt renderovania — dnešné `get_draft`
ukazuje redirect priamo v uloženom tele, takže to treba overiť očami v compose okne,
až keď bude odosielanie opäť funkčné.

## Pipeline counters (po dnešných zápisoch)
| Status | Počet |
|---|---|
| Odoslané | 236 |
| FU1 odoslané | 289 |
| Odpoveď | 42 |
| Expirované | 144 |
| Draft pripravený | 158 |
| Klient | 1 |

## Odporúčanie pre Martina (prioritne)
1. **Rozbaľ compose ručne:** otvor Gmail u/2, klikni na ľubovoľný koncept,
   compose okno **maximalizuj** a potom zavri krížikom. Gmail si stav pamätá —
   ďalší automatický beh by mal fungovať. Toto blokuje **obe** dnešné úlohy.
2. **Pozor na okno 4–14 dní:** štyri prospekty (SEVA, PP SAFETY, Active Team,
   Penzión Alpinka) sú dnes na **14. dni**. Ak zajtrajší beh neprejde,
   vypadnú natrvalo ako „Expirované".
3. Prerezávanie starých záloh opäť zlyhalo na `PermissionError` (129 záloh v `backup/`).
   Nová záloha vznikla v poriadku, staré sa nepodarilo zmazať.
