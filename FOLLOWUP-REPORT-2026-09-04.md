# Follow-up report — appinara-followup-sequence (gmail) — 04.09.2026

Beh 11:38–12:12. Excel zapisovateľný, záloha `backup/Appinara_Prospekti_2026-09-04_1138.xlsx`.

## Súhrn

| | |
|---|---|
| Kandidáti (Odoslané, gmail, 4–14 dní) | 12 |
| Odpovedali → skip | 1 |
| Zastavené (duplicita) | 1 |
| Odložené (rozhodnutie Martina) | 1 |
| **FU1 odoslaných** | **9** |
| Novo „Expirované" | **0** |
| Chyby | 0 |

## Odoslané FU1 (9)

Všetky ako reply do pôvodného vlákna, potvrdené screenshotom (toast „Správa bola odoslaná" + pokles konceptov 90 → 81). Pauzy 60–180 s, randomizované.

| Riadok | Firma | Nový uhol (z Poznámok) | CTA |
|---|---|---|---|
| 584 | Vetroppet | poistenie PetExpert zistiť už pri objednaní | „som mimo?" |
| 587 | PEMA VZT | servis 1000 klientov chodí tým istým kanálom ako nové dopyty | tento/budúci týždeň |
| 588 | Modrá realitka | financovanie — ich vlastná služba — zistiť pri dopyte | nízkotlaková |
| 589 | Xrukavice | B2B veľké balenia sa pýtajú inak než jednotlivec | 15 minút |
| 592 | OptikaFamily | poisťovňa sa rieši až pri pulte | ukážka na webe |
| 593 | OKfish | telefón do 16:00, rybár skladá zostavu večer/v sobotu | bez hovoru |
| 652 | Svet Súčiastok | bazárové repasy — jeden kus, rýchlosť odpovede rozhoduje | „som mimo?" |
| 653 | EMKOpapier | tá istá vec prepnutá na sezónu (prvák → párty) | nízkotlaková |
| 659 | VB Reality | posun termínu obhliadky sa oznámi sám | tento/budúci týždeň |

## Neodoslané (3) — pozor

**r656 Veterinár Bardejov → „Odpoveď" (terminálny).** Odpísal 31.08: „Dakujem Vam, ale nechceme to menit." Žiadny ďalší mail.

**r590 Joga Rheia → „Pozastavené". DUPLICITA v Exceli.** Riadok 219 a riadok 590 majú rovnaký email `info@joga-presov.sk`. Firma už dostala **3 maily**: úvodný 21.08 + FU1 26.08 (r219, terminálny) + úvodný 31.08 (r590). Porušenie pravidla max 2 maily nastalo pri *daily send* 31.08, nie tu — FU by bol štvrtý, preto neodoslaný. **Dedupe pri researchi/odosielaní beží proti emailu, ale r219 má názov „Joga Rheia (Rheia Centrum)" a r590 „Joga Rheia — Rheia Centrum (joga-presov.sk)" — kontrola zjavne porovnávala názov firmy, nie email.** Odporúčam opraviť dedupe na email + doménu.

**r586 Perinbaba → FU odložený, status ponechaný „Odoslané".** Na úvodný mail prišla **automatická** helpdesk odpoveď z `info@webstores.sk` (ticket #WXV-950-79963), nie človek. Mechanický reply-check ju označí za odpoveď, obsahovo ňou nie je. Neposlal som FU ani nenastavil terminálny status — rozhodnutie nechávam na teba. Okno platí do 14.09.

## Pipeline (celý Excel)

Odoslané 178 · FU1 odoslané 256 · FU2 23 · FU3 22 · Odpoveď 37 · Klient 1 · Expirované 143 · Draft pripravený 53 · Treba research 61 · Email chýba 59 · Pozastavené 2

## Poznámky k behu

- **0 expirácií** — behy nevypadávali, okno drží.
- Čistenie starých záloh zlyhalo (`PermissionError`), v `backup/` je 100 súborov namiesto 10. Zálohy sa naďalej vytvárajú, len sa nemažú.
- `.outreach-lock` obsahuje starý záznam z 03.09 (STOPPED taskB) — nie je to aktívny zámok.
- Pätičky odoslaných FU sú čistý text `appinara.sk` bez google redirectu. Staršie odoslané maily (31.08) redirect obsahujú — historické, needitovateľné.
