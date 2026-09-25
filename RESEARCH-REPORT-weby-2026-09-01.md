# Weby/apky research (martin@appinara.sk) — 01.09.2026

**Beh:** 17:23 – 18:12. Schránka: martin@appinara.sk (Chrome u/3 — Gmail konektor je pripojený na appinarasolutions@gmail.com, teda gmail vetvu).

## Backlog guard + rekonciliácia
- **N_real = 50** skutočných cold draftov v schránke (merané cez Chrome u/3, „1–50 of 50"). Prah 300 nedosiahnutý → **plný beh 15 prospektov**.
- **Rekonciliácia: 0 opravených riadkov.** 46 riadkov so Status „Draft pripravený" + Odosielateľ „appinara.sk" vs. 50 konceptov v schránke; dávková kontrola `in:draft {to:…}` vrátila 49 zhôd. Žiadny fantómový riadok.

## Súbeh s TASK A (dôležité)
`.outreach-lock` hlásil `RUNNING taskA-appinara-sk 01.09.2026 17:05` počas celého behu a Excel sa aktívne prepisoval (17:22 → 18:06). Zápis do Excelu som **odložil** až do 80-sekundového ticha a spravil ho ako jednu atomickú operáciu s kontrolou mtime pred `save()` (abort, ak sa súbor medzitým zmenil). Záloha: `backup/Appinara_Prospekti_a_Outreach_webyresearch_20260901_180834.xlsx`.
**Systémové odporúčanie (tretie za dva dni):** `.outreach-lock` musí čítať aj zapisovať všetkých šesť úloh, nielen TASK A.

## Výsledok
| | Počet |
|---|---|
| Dokončené odovzdané riadky (Čaká na draft → Draft pripravený) | **9** |
| Nové nájdené firmy s draftom | **15** |
| „Treba research" | 0 |
| Vylúčené ako duplicita | 0 (všetkých 15 prešlo dedupe proti 681 doménam) |
| Presunuté do AI vetvy | 0 |
| **Spolu nových draftov v schránke** | **24** (všetky overené vyhľadaním `in:draft to:…`) |

## Oprava chybného hand-over researchu
**BOULDERFIT (#705)** — pôvodná poznámka z gmail vetvy tvrdila „žiadny online rozvrh ani kalendár". **Nepravda** — majú plnohodnotné online prihlasovanie s predfaktúrou aj tabuľkou rozvrhu. Skutočný nález (a silnejší): na stránke krúžkov je tučným písmom varovanie, že *„počet voľných miest… nemusí zodpovedať skutočnosti — systém odpočíta voľné miesto až po uhradení proforma faktúry"*. Draft postavený na tomto. Poznámka v Exceli opravená.

## Dva najsilnejšie nálezy (pre learning)
1. **MONUMENT kamenárstvo** — na úvodnej stránke stále svieti *„STRÁNKA V ÚDRŽBE, SPUSTENIE MÁJ 2023"*, pätička © 2014, a k tomu vlastná anketa na webe, v ktorej 2 230 z 3 978 hlasov hovorí „potrebuje doladiť". Firma si sama zbiera dôkaz, že web nefunguje.
2. **HERRENWALD pivovar** — sekcia „Hostinec menu" na živom webe je stále demo obsah zo šablóny: päťkrát za sebou „Herrenwald Granát 3,50 €", burger medzi dezertmi, „Rzbacia polievka". Vedľa toho majú pri každom pive IBU a funkčný e-shop — čiže firma je živá, len tá jedna sekcia nikdy nedostala obsah.

Bonus pattern, ktorý fungoval opakovane: **firma sama na webe sľubuje niečo, čo tam nie je** — RehaTatry („spustenie objednávkového formulára, feb. 2013"), Autocamp JAMI („rezervačný systém na našej stránke"), HH Dental (tlačidlo „Objednať sa" s `href="#"`).

## Aktuálne v Exceli
- **„Draft pripravený" + Odosielateľ „appinara.sk": 51 riadkov** (vrátane 24 dnešných; TASK A počas behu odoslal ~19 starších).
- Nové riadky: **#728–742**. Opravené riadky: **#701–709**.
