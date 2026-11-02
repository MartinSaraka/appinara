# Follow-up report — vetva martin@appinara.sk — 12.08.2026

**Výsledok: 0 odoslaných mailov. Žiadny kandidát nespadá do FU okna (4–14 dní).**

## Pre-flight

- Excel zapisovateľný (`r+b` OK) — ✅
- Záloha **nevytvorená** — beh nerobí žiadny zápis. Dnešná záloha z TASK A už existuje:
  `backup/Appinara_Prospekti_a_Outreach.bak-dailysend-20260812-2035.xlsx`.
- **Súbeh: ⚠️ TASK A (`daily-send-martinappinara`) v čase tohto behu STÁLE BEŽAL**
  (session `local_49a948f0`, Excel zapísaný 20:35:55, ~60 turnov). Obe úlohy majú
  `lastRunAt = 2026-08-12T13:14:04Z` — spustili sa naraz, nie s hodinovým odstupom
  podľa cronu (13:00 / 14:00). Viď „Čo treba riešiť".
  Keďže tento beh **nič neposiela ani nezapisuje**, ku kolízii nedošlo. Nesiahal som
  ani na Chrome/Gmail, aby som TASK A neprerušil.

## Denný strop

| Položka | Hodnota |
|---|---|
| Warmup limit (10.–14.08.2026) | 5 |
| Dnešná spotreba schránky (L = 12.08. a status Odoslané/FU1 odoslané) | 0 (v čase merania; TASK A bežal) |
| **Dnešný strop** | **5** |

Strop nebol limitujúci — obmedzením je absencia kandidátov v okne.

## Kandidáti

Filter: `Status = "Odoslané"` AND `Odosielateľ = "appinara.sk"` → **7 riadkov**.

| Riadok | Firma | Email | N (pôvodné odoslané) | Vek | Vyhodnotenie |
|---|---|---|---|---|---|
| 415 | Bike Bratislava | info@bikebratislava.sk | 10.08.2026 | 2 d | mimo okna (< 4 dni) |
| 416 | Stolárstvo Jankura | stolarstvo.jankura@gmail.com | 10.08.2026 | 2 d | mimo okna |
| 417 | Cukráreň Wagner | wagner@wagner-cukraren.sk | 10.08.2026 | 2 d | mimo okna |
| 418 | Plávanie Prešov | plavaniepo@gmail.com | 10.08.2026 | 2 d | mimo okna |
| 419 | Cukráreň Dorka | cukrarendorka@gmail.com | 10.08.2026 | 2 d | mimo okna |
| 420 | Chata Kamenta | ekonom@kamenta.sk | 11.08.2026 | 1 d | mimo okna |
| 421 | TATRY PARTNER s.r.o. | info@pozicovnanaradia.eu | 11.08.2026 | 1 d | mimo okna |

- **FU1 (4–14 dní):** 0
- **Novo Expirované (> 14 dní):** 0
- Stĺpec N vyplnený u všetkých siedmich — fallback na `Posledný kontakt` nebol potrebný.

Reply-check sa nespúšťal — bez kandidáta na odoslanie nemá čo overovať.

**Najbližšie behy s kandidátmi:**

- **14.08.2026** — riadky 415–419 dosiahnu vek 4 dni (5 kandidátov, presne na strop 5).
- **17.08.2026** — riadky 420, 421 (vek 6 dní), warmup limit už 10.

## Zápisy do Excelu

Žiadne. Súbor ostal nezmenený (mtime 20:35:55 = zápis TASK A, nie tejto úlohy).

## Čo treba riešiť (mimo rozsah úlohy)

**TASK A a TASK B sa dnes spustili v ten istý okamih** (obe `13:14:04Z`), hoci cron
hovorí 13:00 a 14:00. Dnes to nevadilo — TASK B nemal čo posielať. Pri behu 14.08.,
keď bude v okne 5 kandidátov a strop je tiež 5, súbeh znamená reálne riziko:
obe úlohy si prečítajú spotrebu 0, obe pošlú, schránka prekročí warmup limit.
Stojí za to buď posunúť čas TASK B, alebo doňho pridať tvrdý zámok (napr. čakať,
kým beží druhá outreach session).
