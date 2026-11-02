# Follow-up report — martin@appinara.sk (TASK B), 25.09.2026 — ZASTAVENÉ

**Výsledok: 0 odoslaných follow-upov, 0 zápisov do Excelu, 0 nových „Expirované".**
Beh spustený 12:21 UTC (plánovaný 12:02 UTC). Guide: OUTREACH-QUALITY-GUIDE.md **v4.2**
(prompt hovorí v4.1 — pri konflikte platí guide; §11 follow-upy sa vo v4.2 nemenia).

## Dôvod zastavenia: pre-flight krok 0 — súbeh s inou outreach úlohou

Podmienka „žiadny súbeh s inou outreach úlohou" (zdieľaný Excel + zdieľaná schránka
martin@appinara.sk) NIE JE splnená. `appinara-weby-research` beží od 12:06 UTC a bol
aktívny počas celého môjho pre-flightu. Dôkazy (12:22–12:31 UTC):

1. **Nové drafty pribúdali v reálnom čase v mojej vlastnej schránke.**
   Gmail u/3 = `martin@appinara.sk` (overené screenshotom, titulka „Drafts (152) —
   martin@appinara.sk"). Daily-send meral o 14:16–14:17 miestneho času 137→138→140
   draftov; o 14:24 ich bolo **152**. Teda ~15 nových draftov za 8 minút, posledný
   5 minút pred mojím meraním.
2. **Excel prepísaný cudzím procesom o 12:26:42 UTC**, teda POČAS môjho pre-flightu
   (predtým 12:16:37). Ja som do súboru nezapísal nič.
3. **Research report za dnešok ešte neexistuje** — každý predošlý beh ho na konci píše.
   Beh teda nie je dokončený a ďalší `openpyxl save` celého zošita ešte príde.

**Zálohu som nerobil a do Excelu som nezapísal nič** — zápis počas cudzieho save-u by
prepísal jeho zmeny alebo naopak: môj status „FU1 odoslané" by zmizol a prospekt by
zajtra dostal **tretí mail**. To je porušenie najtvrdšieho pravidla (§11: max 2 maily).

Rovnaký dôvod zastavil dnes o 12:18 UTC aj `appinara-weby-daily-send` (odoslal 2/30).

## Čo by sa dnes bolo poslalo (len prepočet, nič sa nezapísalo)

| | počet |
|---|---|
| Warmup limit (fáza od 31.08.) | 30 |
| Dnešná spotreba (appinara.sk, L=25.09., Odoslané/FU1) | 2 (Denta Centrum, SUN Dental) |
| **Môj dnešný strop** | **28** |
| Status „Odoslané" + Odosielateľ „appinara.sk" | 115 |
| vek < 4 dni (ešte nie v okne) | 42 |
| **vek 4–14 dní → FU1 okno** | **43** (11× vek 11 dní z 14.09., 32× vek 10 dní z 15.09.) |
| **vek > 14 dní → „Expirované"** | **30** (všetky N = 09.09.2026, vek 16 dní) |
| odfiltrovaných reply-checkom | 0 — reply-check sa nespúšťal |
| podpis sa dopĺňal | 0 — žiadny mail sa nepísal |
| chýbajúce N (fallback na L) | 0 |

Nič z toho nie je zapísané. 30 riadkov s vekom 16 dní čaká na status „Expirované",
43 riadkov na FU1. FU okno pre ne končí 28.–29.09., takže jeden deň odkladu nikoho
nestratí — ale ďalší zmarený beh áno.

## ⚠ Systémové zistenie: vetva appinara.sk nedobehla od 08.09.2026

Reporty tejto úlohy: 03.09. ZASTAVENÉ · 04.09. ZASTAVENÉ · **08.09. OK** · 09.09. ZASTAVENÉ ·
15.09. ZASTAVENÉ · 23.09. BLOKOVANÉ (schránka odhlásená) · 24.09. ZASTAVENÉ (súbeh) ·
25.09. ZASTAVENÉ (súbeh).

Tých 30 dnešných expirácií nie je náhoda — je to priamy dôsledok. §11 to hovorí presne:
*„Expirácie v reporte sú signál, že behy vypadávali — rieš príčinu, nie oživovanie vlákien."*
Príčina je rozvrh, nie prospekti.

## Odporúčanie (rovnaké ako v daily-send reporte, teraz s druhým dôkazom)

1. **Rozhoď časy úloh tak, aby sa neprekrývali.** Dnes bežali research (12:06),
   gmail follow-up (12:06), daily-send (12:07) a weby follow-up (12:21) v jednom
   15-minútovom okne. Napr. research 06:00, daily-send 12:00, follow-up 15:00.
2. **Nech si `.outreach-lock` nastavujú na BUSY aj research a follow-up úlohy** —
   dnes ho nenastavil ani jeden, takže kontrola kolízie nemala čo zachytiť.
3. Vedľajšie: `backup/` má 153 súborov (pravidlo hovorí max 10), mazanie v pripojenom
   priečinku je vypnuté. Treba ručne upratať alebo povoliť mazanie.

## Zámok
Nechal som `.outreach-lock` tak, ako bol (`FREE - taskA daily-send ZASTAVENY ...`).
Nenastavoval som ho na BUSY — nič som nerobil, a research ho aj tak nečíta.
