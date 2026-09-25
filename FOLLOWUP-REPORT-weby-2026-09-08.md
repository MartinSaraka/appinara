# Follow-up — martin@appinara.sk — 08.09.2026

## Zhrnutie
- **Warmup limit:** 30/deň · **spotreba pred behom (TASK A):** 14 → **strop 16**
- **Kandidáti (Status = Odoslané, O = appinara.sk):** 141 v okne 4–14 dní, **0 expirovaných**
- **Reply-check:** 0 odfiltrovaných (žiadny z 18 najstarších neodpovedal)
- **Odoslaných:** 16 (strop vyčerpaný) — všetky s podpisom v tele, do pôvodného vlákna
- **Podpis sa dopĺňal:** 0× (FU sa píšu od nuly, podpis je súčasťou šablóny)

## Odoslané (riadok | firma | e-mail | CTA)
| # | Riadok | Firma | E-mail | CTA |
|---|---|---|---|---|
| 1 | 527 | KVŠ OCEÁN Bratislava | kurzy@klubocean.sk | 4 |
| 2 | 594 | Chata Piecky | info@chatapiecky.sk | 4 |
| 3 | 595 | Chata Raj | chataraj@chataraj.sk | 5 |
| 4 | 596 | Chata Pohoda | info@chatapohoda.sk | 6 |
| 5 | 597 | Reštaurácia Malom | laszlo.malom@gmail.com | 4 |
| 6 | 599 | Salaš Podhradie | info@salaspodhradie.sk | 5 |
| 7 | 600 | Koliba Likava | kolibalikava@gmail.com | 3 |
| 8 | 601 | Penzión Jánošíkova Valaška | recepcia@janosikovavalaska.sk | 6 |
| 9 | 603 | Sklenárstvo Ložan | sklenarstvolozan@sklenarstvo.sk | 5 |
| 10 | 604 | Sklenárstvo Zajo | info@sklenarstvozajo.sk | 4 |
| 11 | 605 | Plachtinská farma Baránek | objednavky@baranek.sk | 6 |
| 12 | 607 | Včelárstvo Neviďanský | objednavka@nevidansky.sk | 3 |
| 13 | 609 | PRO RACING (vasautoservis.sk) | servis@vasautoservis.sk | 6 |
| 14 | 610 | IZOMI s.r.o. | izomi@izomi.sk | 5 |
| 15 | 611 | Požičovňa NÁRADIA Snina | pozicovnasnina@gmail.com | 4 |
| 16 | 612 | GLAstav s.r.o. | glastav@glastav.sk | 3 |

Všetky: telo ≤ 60 slov bez podpisu, opt-out veta zachovaná, podpis
`S pozdravom, / Martin Saraka | Appinara s.r.o. | appinara.sk`.
Každé odoslanie overené hláškou „Message sent"; Excel zapísaný a uložený hneď po odoslaní
(spätné načítanie: 16/16 správne, Status = „FU1 odoslané", L = 08.09.2026).

## Reply-check
- Primárne: otvorené pôvodné vlákno u každého — vo všetkých 16 je jediná správa od nás.
- Doplnkovo: hromadné `from:(doména1 OR … OR presné freemail adresy) newer_than:90d`
  → **No messages matched.** Pri freemailoch (laszlo.malom@, kolibalikava@, pozicovnasnina@)
  použitá len presná adresa, nie doména.

## Chyby / udalosti
1. **Zoom v Chrome je opravený** — problém, ktorý 08.09. o 13:20 zastavil TASK A run 2, už nie je.
   Viewport 2880×1366, Gmail plne ovládateľný.
2. **Dva preklepy pri písaní** (Chrome vynechal znak): „hoťovi" → `hosťovi` (#597),
   „nocļah" → `nocľah` (#600). Oba zachytené kontrolou pred odoslaním a opravené,
   až potom odoslané. **Odporúčanie:** telo po napísaní vždy prečítať späť cez DOM,
   nespoliehať sa na to, že sa natypovalo presne.
3. **Angle-kolízia:** u 8 zo 16 prospektov bol „nový uhol" z Poznámok (M) už použitý
   v úvodnom maile (napr. rozbitý WhatsApp u Chaty Piecky, testovacia doména u Zaja,
   logistik u Baránka). Uhol som v týchto prípadoch nahradil iným doloženým faktom.
   **Odporúčanie:** research by mal do M označiť, ktorý fakt išiel do cold mailu,
   aby follow-up nemusel hádať.
4. Mazanie súborov v pripojenom priečinku stále hádže PermissionError — zálohy sa hromadia,
   rotácia neprebehla (známy problém od 04.09.).

## Pre-flight
- Excel zapisovateľný (no-op save OK) ✔
- Záloha: `backup/Appinara_Prospekti_a_Outreach_webyfu_20260908_140754.xlsx` ✔
- `.outreach-lock` bol FREE → nastavený na RUNNING → vrátený na FREE ✔

## Stav po behu
- Dnes odoslané z appinara.sk spolu: **30 / 30** (warmup vyčerpaný)
- V okne 4–14 dní zostáva ešte **125 kandidátov** na FU1 — pri strope 16–30/deň
  a okne 14 dní časť z nich stihne expirovať. Ak sa to má stihnúť, treba dať
  follow-upom prednosť pred novými cold mailmi.
