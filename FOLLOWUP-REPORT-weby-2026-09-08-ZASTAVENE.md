# Follow-up report — appinara-weby-followup — 08.09.2026

## STAV: ZASTAVENÉ V PRE-FLIGHT — súbeh s TASK A. 0 mailov odoslaných.

### Dôvod zastavenia
`.outreach-lock` obsahuje **aktívny** zámok:

```
RUNNING taskA-martin-appinara-sk 08.09.2026 09:04 - 0 odoslanych
```

- Zámok vytvorený **08.09.2026 09:04**, kontrolovaný o 09:07, 09:08 a 09:11 — stále prítomný, teda **nie je stale** (na rozdiel od 05.09., keď bol 3 dni starý).
- Task A posiela z **tej istej schránky** `martin@appinara.sk` a **zdieľa denný limit** s touto úlohou.
- Task A hlási zatiaľ 0 odoslaných, ale je **v priebehu behu** — jeho spotreba ešte nie je v Exceli. Keby som teraz počítal strop, počítal by som z neúplných dát a hrozí prekročenie warmup limitu na doméne.

Pre-flight pravidlo „žiadny súbeh s inou outreach úlohou" → **STOP pred odoslaním čohokoľvek**.
Excel som otvoril iba na čítanie, **nič som nezapisoval**.

### Dnešná spotreba (appinara.sk, k 09:11)
**0** riadkov s `Posledný kontakt = 08.09.2026` a statusom „Odoslané" / „FU1 odoslané".
Denný strop je teda zatiaľ celý voľný — ale patrí prebiehajúcemu Task A.

### Kandidáti, ktorí čakajú (Status = „Odoslané", Odosielateľ = appinara.sk)

| Kategória | Počet |
|---|---|
| Spolu | **171** |
| **FU1 okno (4–14 dní)** | **141** |
| > 14 dní → Expirované | **0** |
| < 4 dni (ešte nie na rade) | 30 |
| Chýbajúci stĺpec N | 0 |

**Žiadne nové „Expirované" — 0.** Stĺpec N je vyplnený u všetkých, fallback nebol potrebný.

Najstarší v okne (11 dní, N = 28.08.2026), 18 firiem — tieto vypadnú z okna **11.09.2026**:
KVŠ OCEÁN Bratislava · Chata Piecky · Chata Raj · Chata Pohoda · Reštaurácia Malom · Salaš Podhradie · Koliba Likava · Penzión Jánošíkova Valaška · Sklenárstvo Ložan · Sklenárstvo Zajo · Plachtinská farma Baránek · Včelárstvo Neviďanský · PRO RACING · IZOMI · Požičovňa NÁRADIA Snina · GLAstav · TOP SERVICE TT · EKOFRUCT

Zvyšok okna: 30× N=31.08. (8 dní) · 32× N=01.09. (7 dní) · 31× N=02.09. (6 dní) · 30× N=03.09. (5 dní).

### ⚠️ Systémový problém — kapacita nestačí na objem
141 kandidátov v okne pri dennom strope zdieľanom s Task A znamená, že **väčšina z nich okno 4–14 dní nestihne** a skončí ako „Expirované" bez follow-upu. Podľa guide (§11) sú expirácie signál, že behy vypadávajú — a tu je príčina štrukturálna, nie technická: **research/daily-send plní pipeline rýchlejšie, než ju follow-up stíha vyprázdniť.**

Možnosti pre Martina (rozhodnutie nie je moje):
1. Znížiť tempo úvodných mailov, kým sa FU fronta nevyrovná.
2. Zvýšiť warmup limit, ak to reputácia domény unesie.
3. Akceptovať, že časť prospektov dostane len jeden mail (čo je legitímne — strop sú aj tak max 2).

### Čo treba spraviť
1. **Vyčistiť `.outreach-lock`** po dobehnutí Task A — zámok sa opakovane nečistí (05.09. ostal visieť 3 dni).
2. Ďalší beh (09.09. ~14:00) nájde 18 najstarších už na 12 dňoch — stále v okne, ale s poslednou šancou.
3. Zvážiť riešenie kapacitného nepomeru vyššie.

### Pipeline — appinara.sk vetva (400 riadkov, bez zmeny)
Odoslané 171 · FU1 odoslané 104 · Email chýba 46 · Draft pripravený 38 · Treba research 28 · Odpoveď 10 · Expirované 3
