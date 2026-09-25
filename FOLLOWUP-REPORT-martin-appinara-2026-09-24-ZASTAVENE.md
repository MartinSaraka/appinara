# Follow-up report — martin@appinara.sk (TASK B), 24.09.2026 — ZASTAVENÉ

**Výsledok: 0 odoslaných follow-upov, 0 zápisov do Excelu, 0 nových „Expirované".**
Chrome ani Gmail som vôbec neotváral.

## Dôvod zastavenia: pre-flight krok 0 — súbeh s inou outreach úlohou

Podmienka „žiadny súbeh s inou outreach úlohou" (zdieľaný Excel + zdieľaná schránka
martin@appinara.sk) nie je splnená. Dôkazy zozbierané 24.09.2026 medzi 14:27 a 14:29:

1. **`.outreach-lock` = BUSY**
   Obsah: `BUSY - appinara-daily-send spusteny 24.09.2026 14:20`
   Zapísaný 14:19:15. Zámok som nezapísal ja — drží ho iný proces.

2. **Excel sa práve teraz aktívne prepisuje** (zámok teda nie je „stale"):
   `Appinara_Prospekti_a_Outreach.xlsx` — mtime
   14:22:10 → 14:25:12 → 14:26:05 → **14:27:58 → 14:28:32**.
   Posledný zápis prišiel 20 sekúnd pred týmto meraním.

3. Dnes o 14:18 bežali ešte ďalšie vetvy (zálohy `_research_20260924_141825`
   a `Appinara_Prospekti_2026-09-24_1418`), FU report gmail vetvy dopísaný 14:22,
   daily-send report dopísaný 14:26:59.

**Zálohu som nerobil a do Excelu som nič nezapísal** — zápis počas cudzieho
`openpyxl save` by prepísal alebo poškodil jeho zmeny.

## Prečo je kolízia práve s `appinara-daily-send` vážna

Bežiaca úloha je **daily-send tej istej schránky martin@appinara.sk**. Zdieľame:

- **ten istý denný strop** (warmup 30 mailov/deň, spoločný pre TASK A aj TASK B).
  Daily-send práve teraz míňa kvótu, ktorú by som ja čítal zo stavu spred jeho behu
  → môj výpočet `strop − spotreba` by bol zastaraný a mohol by strop prekročiť.
- **ten istý Excel** — riziko stratených zápisov v oboch smeroch.
- **to isté Chrome okno / Gmail session** (u/3).

## Čo by dnes platilo (informatívne, nič sa nevykonalo)

- Warmup limit (dátum ≥ 31.08.2026): **30 mailov/deň**
- Dnešná spotreba schránky appinara.sk v čase 14:26 podľa daily-send reportu: **0**
  (žiadny riadok nemal Posledný kontakt = 24.09.2026) — ale táto hodnota je už
  neplatná, lebo paralelný beh medzitým do Excelu zapisuje.
- Kandidáti na FU1 (Status „Odoslané" + Odosielateľ „appinara.sk", vek 4–14 dní
  od stĺpca N) som **zámerne nečítal** — čítanie z rozpísaného súboru dáva
  nekonzistentný obraz a viedlo by k zlému rozhodnutiu o tom, komu poslať.
- Podpis doplnený: 0 draftov (žiadny draft sa neotváral).

## Odporúčanie

1. **Vyriešiť duplicitný trigger.** `appinara-daily-send` sa dnes javí ako spustený
   dvakrát (14:20 a 14:22) — to je hlavné riziko, dva súbežné behy môžu odoslať
   ten istý draft dvakrát. Toto je rovnaký nález ako v dnešnom daily-send reporte.
2. **Počkať, kým sa `.outreach-lock` uvoľní** (prepíše na `FREE`) a mtime Excelu
   sa prestane meniť aspoň 5 minút. Potom spustiť TASK B znova — okno FU1 sa
   dovtedy nezatvorí, kandidáti 4–14 dní ostanú kandidátmi aj zajtra.
3. **Rozniesť scheduled tasky po hodine.** Súčasné rozostupy
   (research 14:18 / daily-send 14:20 / FU gmail 14:22 / FU appinara.sk 14:26)
   sú príliš tesné a kolízie budú pokračovať.
4. Nezabudnúť na nález z gmail vetvy: **14 mŕtvych FU draftov** v
   `appinarasolutions@gmail.com` treba zmazať ručne, aby ich budúci beh nepoužil.

## Chyby

Žiadne technické chyby. Zastavenie je korektné uplatnenie pre-flight pravidla,
nie zlyhanie.
