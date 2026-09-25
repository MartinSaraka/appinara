# Research report — appinara-weby-research (martin@appinara.sk) — 06.08.2026

**Backlog guard:** 0 "Draft pripravený" (appinara.sk) v Exceli → plný beh 15. Záloha Excelu vytvorená.

**Dôležitý nález:** beh z 5.8. vytvoril 5 draftov v schránke, ale NEZAPÍSAL ich do Excelu (Bike Bratislava, Stolárstvo Jankura, Cukráreň Wagner, Plávanie Prešov, Cukráreň Dorka). Backfillnuté ako #454–458. Dorku dnešný research nezávisle znovu našiel — duplicita odchytená až proti schránke, nie Excelu. Odteraz Excel opäť sedí ako jediný zdroj pravdy.

## Výsledok behu
- Nových firiem: 15 → 10 draftov (#459–468), 2× Email chýba (#469–470: ProfiRent, Mäsiareň Podbrezová), 2× Treba research (#471–472: Chata Veverica na staging doméne vulara.host, Hotel Gobor), 1 duplicita (Dorka).
- V schránke martin@appinara.sk (overená screenshotom, u/3): **15 draftov "Draft pripravený"** pripravených pre weby-daily-send.
- Všetky dnešné drafty: Ponuka 3, quality check 7/7, CTA rotované, bez čísel, opt-out veta.

## Najsilnejšie nálezy (learning)
1. **Chata Kamenta** — kontaktná stránka uvádza ekonom@kamenta.sk aj ekonom@kamenta.com; doména .com NEMÁ MX záznam (overené dig) — hostia píšu do prázdna. Overiteľný technický dôkaz, nie dojem.
2. **Tatry Partner (požičovňa)** — na živom cenníku lorem ipsum, nadpis "Starter Section" a debug "46 queries in 0,116 seconds".
3. **Športíkovo BB** — web sám varuje rodičov "vyzbrojte sa trpezlivosťou" pred pondelkovými papierovačkami; prihláška sa tlačí a nosí.
4. **Košecký dvor** — zobrazený email ≠ mailto adresa ≠ doména v pätičke (Amawell pattern).

## Technická poznámka
Gmail konektor je pripojený na appinarasolutions@gmail.com → drafty tvorené cez Chrome u/3. Compose cez URL parametre draft NEULOŽÍ (nie je "dirty"); spoľahlivý postup: Compose → adresát → Tab → subject → Tab → telo → Escape. Pozor: pri tomto flow padol subject/telo raz do nesprávnych polí — po vytvorení VŽDY skontrolovať zoznam draftov (subject viditeľný v riadku), opraviteľné cez otvorenie draftu podľa compose ID.
