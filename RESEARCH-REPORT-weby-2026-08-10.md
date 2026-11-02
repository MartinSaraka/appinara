# Research report — appinara-weby-research (martin@appinara.sk) — 10.08.2026

**Backlog guard:** 28 „Draft pripravený" s Odosielateľ = appinara.sk → pásmo 25–40 → **beh obmedzený na 8 prospektov** (nie 15). Excel overený ako zapisovateľný, záloha `backup/Appinara_Prospekti_a_Outreach.bak-webyresearch-20260810-1135.xlsx`.

**Odovzdané z gmail vetvy:** 0 riadkov so Status = „Čaká na draft" a Odosielateľ = „appinara.sk" — nič na dokončenie, išlo sa rovno na nové firmy.

## Výsledok behu

- 8 prospektov → **7 draftov** (#488–494), **1× Email chýba** (#495 Vodácka požičovňa Čunovo), 0× „Treba research".
- Duplicity: 1 kandidát vylúčený pri dedupe (kajakovo.sk už v Exceli), 1 (deltabb.sk / Športíkovo) vylúčený ešte pred researchom.
- Do AI vetvy presunutých 0 firiem — všetkých 8 nálezov vyšlo jednoznačne na Ponuku 3 (web / rezervácia / objednávka).
- Schránka martin@appinara.sk (overená screenshotom, u/3): **35 draftov** = 28 pôvodných + 7 nových.
- Všetky drafty: 149–161 slov, quality check 7/7, CTA rotované (6 variantov + 1 nová formulácia), žiadne vymyslené čísla, opt-out veta.

## Najsilnejšie nálezy (learning)

1. **AJC Snina** — v pätičke webu `<a href="tel:384643932728">0905 552 661</a>`. Zobrazené číslo sedí, odkaz vedie na neexistujúce — kto z mobilu ťukne, nedovolá sa. Overené v surovom HTML na dvoch podstránkach. Najtvrdší typ nálezu: nedá sa spochybniť a nedá sa poslať nikomu inému.
2. **Autoservis A.M. Nitra** — web nemá `viewport` meta (na mobile sa nezmenšuje) a má `format-detection: telephone=no`, takže jediné číslo, cez ktoré sa dá objednať, nie je na telefóne klikateľné. Kombinácia „jediný kanál je telefón" + „telefón na mobile nefunguje" je silnejšia než ktorýkoľvek dojmový argument.
3. **Jožko Farmárik** — sekcia „Naše predajne" má štyri fotky a v celom zdrojovom kóde stránky ani jednu adresu či otváraciu hodinu. Overené grepom, nie pohľadom.

## Technické poznámky

- Gmail konektor je stále na inom účte (appinarasolutions@gmail.com) → drafty tvorené cez Chrome u/3, účet overený z titulku aj screenshotu. Postup Compose → adresát → Tab → subject → Tab → telo → Escape fungoval bez chyby 7/7.
- **Pozor:** v schránke martin@appinara.sk sa pri Compose **nevloží žiadny podpis** (compose body = prázdny, Gmail setup karta ponúka „Add email signature"). Guide §10 predpokladá automatický HTML podpis a preto drafty textový podpis neobsahujú — existujúcich 28 draftov ho tiež nemá. Ak podpis nie je v nastaveniach reálne zapnutý, odídu maily bez kontaktu. **Treba overiť Nastavenia → Podpis pred najbližším daily sendom.**
