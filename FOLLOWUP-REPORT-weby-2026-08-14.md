# Follow-up report — weby vetva (martin@appinara.sk) — 14.08.2026

## Výsledok: 0 odoslaných — denný strop vyčerpaný

| Položka | Hodnota |
|---|---|
| Warmup limit 14.08.2026 | 5 |
| Dnešná spotreba (appinara.sk, L = dnes, Status Odoslané/FU1 odoslané) | **5** |
| **Dnešný strop pre FU** | **0 → koniec bez odosielania** |

Spotrebu vyčerpal TASK A (daily send) dnes doobeda — riadky 436 Chata u Andrejka,
437 Servis kosačky, 438 Splav Malého Dunaja, 448 Autoservis-pneuservis A.M.,
449 Stolárstvo HOBEL. Limit je spoločný, takže follow-upy dnes nemajú priestor.

## Kandidáti na FU1 (čakajú, nič sa im neposlalo)

Reply-check ani Chrome sa nespúšťali — pri strope 0 by to bola zbytočná práca
v cudzej schránke.

| Riadok | Firma | Email | Pôvodné odoslané | Vek |
|---|---|---|---|---|
| 414 | Bike Bratislava | info@bikebratislava.sk | 10.08.2026 | 4 dni |
| 415 | Stolárstvo Jankura | stolarstvo.jankura@gmail.com | 10.08.2026 | 4 dni |
| 416 | Cukráreň Wagner | wagner@wagner-cukraren.sk | 10.08.2026 | 4 dni |
| 417 | Plávanie Prešov | plavaniepo@gmail.com | 10.08.2026 | 4 dni |
| 418 | Cukráreň Dorka | cukrarendorka@gmail.com | 10.08.2026 | 4 dni |

Všetci sú v okne až do **24.08.2026** — odklad nič nestráca. V pondelok 17.08.
stúpa limit na 10/deň, takže priestor bude.

## Expirácie
**0 riadkov** nad 14 dní. Žiadny appinara.sk riadok so statusom „Odoslané" nemá
prázdny stĺpec N — fallback na Posledný kontakt nebol potrebný.

## Excel
- Zapisovateľnosť overená (openpyxl open + no-op save) — OK
- Záloha: `backup/Appinara_Prospekti_a_Outreach.bak-webyfu-20260814-1415.xlsx`
- **Žiadne zmeny v dátach** — nebolo čo zapísať

## Poznámky
- Rozhodnutie: pri strope 0 som ani nespracoval expirácie (žiadne neboli), takže
  otázka „prepisovať statusy pri vyčerpanom limite?" dnes nevznikla.
- `backup/` má vyše 28 súborov, mazanie sandbox stále nepovoľuje — treba ručne.
- Kolízia s TASK A: dnešný daily send bežal 10:40, tento beh 14:15 — bez súbehu.
