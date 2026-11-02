# FOLLOW-UP REPORT — weby vetva (martin@appinara.sk) — 29.08.2026

## Výsledok: 9 FU1 odoslaných, 0 odfiltrovaných reply-checkom, 0 expirovaných

## Pre-flight
- Excel zapisovateľný (openpyxl open + save OK)
- Záloha: `Appinara_Prospekti_a_Outreach.backup-20260829-150225.xlsx`
- Zámkový súbor `.outreach-lock` vytvorený na začiatku behu (žiadny súbeh nezistený)
- Účet overený titulkom karty: **martin@appinara.sk** (Chrome u/3)

## Limit
- Dnes je **sobota 29.08.2026** — warmup tabuľka pásmo pre víkend nedefinuje
  (24.–28.08. → 20, od 31.08. → 30). Použil som konzervatívne pásmo týždňa
  24.–28.08. → **limit 20**.
- Spotreba schránky pred behom: **0** (daily send beží len Po–Pia)
- Strop: 20 → **odoslaných 9** (toľko bolo kandidátov v okne)

## Kandidáti
- Status „Odoslané" AND Odosielateľ „appinara.sk": 79 riadkov
- Vek 4–14 dní (FU1 okno): **9** — všetky pôvodne odoslané 23.08. (vek 6 dní)
- Vek > 14 dní (Expirované): **0**
- Vek < 4 dni: 70 (nie sú na rade)
- Stĺpec N vyplnený u všetkých — fallback na L nebol potrebný.

## Reply-check
- Hromadné hľadanie `from:(...9 domén/adries...) newer_than:90d` → **0 zhôd**
  (freemaily mhriblan@azet.sk, palenicapoproc@gmail.com, oftaoptik@gmail.com
  kontrolované presnou adresou, nie doménovo)
- Každé pôvodné vlákno otvorené zvlášť: všetkých 9 obsahovalo len našu správu
- **Odfiltrovaných: 0**

## Odoslané FU1 (9)

| # | Riadok | Firma | Nový uhol | CTA (§7) |
|---|---|---|---|---|
| 1 | 504 | Plavecká škola Fliper | sekcia Nasledujúce kurzy stále na šk. rok 2024/2025 | „Dáva to u vás zmysel, alebo som mimo?" |
| 2 | 508 | JK Envirokone | IBAN pri každom riadku cenníka sa prepisuje ručne + Google Forms | „Chcete, aby som poslal…? Bez hovoru." |
| 3 | 510 | Stolárstvo HRM | dve rôzne adresy na webe (Lomnická 1 vs. Važecká 12) | „Hodí sa vám tento alebo budúci týždeň?" |
| 4 | 511 | Pálenica Vráble | web na http → Chrome hlási „Nezabezpečené" pri zadávaní kontaktu | „Ukázal by som vám to priamo na vašom webe…" |
| 5 | 512 | Pálenica Poproč | bezplatná subdoména webnode + titulok stránky len „PPP" | „Ak vás to zaujme… stačí jedno slovo." |
| 6 | 513 | Atletika Košice | spam odkazy sú v texte hore aj dole → číta ich Google pred náborom | „Máte 15 minút budúci týždeň?" |
| 7 | 514 | Rámko Košice | v päte je pevná linka — zákazník nemá kam poslať fotku obrazu | „Chcete, aby som poslal…? Bez hovoru." |
| 8 | 515 | JOLL s.r.o. | platba len hotovosťou pri odbere → žiadna záloha pri svadbách | „Hodí sa vám tento alebo budúci týždeň?" |
| 9 | 516 | OFTA s.r.o. | ambulancia len telefonicky a len 8:00–14:00, optika do 17:00 | „Dáva to u vás zmysel, alebo som mimo?" |

Každý mail: max 80 slov, odpoveď do pôvodného vlákna, konkrétny fakt zo stĺpca M,
JEDEN nový uhol (overené proti textu pôvodného mailu — pôvodné znenie som pri
každom prospektovi prečítal, aby sa uhol neopakoval), CTA rotovaná, textový podpis
v tele, odstup 78–130 s medzi odoslaniami.

## Kontrola na konci
- `in:sent after:2026/08/29` = **9** → presne toľko, koľko hlási Excel, žiadne duplicity
- Každé odoslanie overené: vlákno má 2 správy + hláška „Message sent"

## Zápis do Excelu
9/9 riadkov: Status = „FU1 odoslané" (terminálny), Posledný kontakt = 29.08.2026,
poznámka „FU1 odoslané 29.08.2026". Zápis + save po každom overenom odoslaní zvlášť,
znovu načítané a overené.

Stav appinara.sk po behu: Draft pripravený 69 · Odoslané 70 · FU1 odoslané 57 ·
Odpoveď 7 · Expirované 3 · Email chýba 5 · Treba research 5

## Poznámky pre Martina

1. **Nová odpoveď v schránke, mimo môjho rozsahu:** dnes o 8:02 prišla odpoveď od
   Lenky (Fotolienka, riadok 525, „Objednávanie termínov u Fotolienky"). Riadok má
   stále Status „Odoslané" — nebol v mojom okne (vek 1 deň), tak som ho nemenil.
   Prepni ho na „Odpoveď" a rieš osobne. Podobne sa v inboxe kopia odpovede z
   27.–28.08. (Penzión Adrián, Duall, Katarína Vargová, Monika, Maestro).
2. **Warmup tabuľka nemá pásmo pre víkend.** Táto úloha sa spustila v sobotu.
   Použil som limit 20 z predošlého pracovného týždňa. Doplň do inštrukcií, či sa
   má cez víkend posielať vôbec, alebo aké je pásmo.
3. **Chrome automation:** klikanie súradnicami v tejto schránke nefungovalo
   (viewport 1745 CSS px vs. screenshot 1425 px) a `type` opakovane zahadzoval
   znaky. Riešil som to cez JS (`execCommand insertText`) — funguje spoľahlivo,
   ale kým sa to nespraví natrvalo, počítaj s tým pri ladení úloh.
4. **Zámkový súbor** `.outreach-lock` som zaviedol podľa odporúčania z reportu
   28.08. Sandbox ho nevie zmazať, takže som doň zapísal „DONE" — pri ďalšom behu
   ho treba zmazať ručne, alebo úlohu upraviť tak, aby kontrolovala obsah, nie
   iba existenciu súboru.
5. Starých záloh Excelu je vyše 60 — treba upratať ručne.
