# Follow-up weby (martin@appinara.sk) — 21.08.2026, 14:06

**Schránka overená:** „martin@appinara.sk — Appinara s. r. o. Mail" (Chrome u/3) ✔
**Odoslané FU1: 2** · **Expirované: 0** · **Odpovede: 0**

---

## Pre-flight

- **Zapisovateľnosť Excelu:** OK (openpyxl load + save)
- **Záloha:** `backup/Appinara_Prospekti_a_Outreach.bak-webyfu-20260821-1406.xlsx`
- **Súbeh:** žiadny — všetkých 12 posledných sessions je `idle`, vrátane
  zaseknutej `local_0c6b7672` (Daily send martinappinara), ktorá 20.–21.08.
  blokovala pre-flight. Druhý daily-send beh dnes skončil 13:54.

## Warmup limit a strop

| Položka | Hodnota |
|---|---|
| Warmup limit 21.08.2026 | 10 |
| Dnešná spotreba schránky pred behom (TASK A) | 8 |
| **Môj strop** | **2** |
| **Reálne odoslané** | **2** (strop vyčerpaný) |

Spotreba spočítaná z Excelu: 8 riadkov s `Odosielateľ = appinara.sk`,
`Posledný kontakt = 21.08.2026`, `Status = Odoslané` (BouldroFka, PSYCHOTOP,
CADERM, JK-dent, GRIMMY, Pekáreň Vrzukáč, Penzión Adrián, VIADERMA).

## Kandidáti

| Kategória | Počet |
|---|---|
| Status „Odoslané" + Odosielateľ „appinara.sk" | 47 |
| v okne 4–14 dní (kandidáti na FU1) | 34 |
| **> 14 dní → Expirované** | **0** |
| mladší ako 4 dni (korektne čakajú) | 13 |

Stĺpec N (Pôvodné odoslané) bol vyplnený u všetkých — fallback na L nebol
potrebný, žiadny riadok sa nemusel dopĺňať.

## Odoslané follow-upy

| # | Riadok | Firma | Email | Vek | Reply-check | CTA (§7) |
|---|---|---|---|---|---|---|
| 1 | 414 | Bike Bratislava | info@bikebratislava.sk | 11 d | vlákno: 1 správa (naša) ✔ · `from:bikebratislava.sk newer_than:90d` = 0 ✔ | #6 „Dáva to u vás zmysel, alebo som mimo?" |
| 2 | 415 | Stolárstvo Jankura | stolarstvo.jankura@gmail.com | 11 d | vlákno: 1 správa (naša) ✔ · freemail → `from:stolarstvo.jankura@gmail.com newer_than:90d` = 0 ✔ | #4 „Chcete, aby som poslal, ako by to vyzeralo u vás? Bez hovoru." |

Obidva odoslané **odpoveďou do pôvodného vlákna**, overené tým, že sa správa
objavila v threade s časovou pečiatkou (14:18 a 14:25) a počítadlo Drafts
sa vrátilo na pôvodnú hodnotu. Rozostup medzi mailmi ~7 minút (nad
požadovaných 60–180 s).

### Nový uhol v každom FU (§11 — nie „len sa pripomínam")

- **Bike Bratislava** (pôvodne: rezervácia s reálnou dostupnosťou) → nový uhol:
  kalendár neslúži len zákazníkovi, oni sami z neho hneď vidia, ktorý bicykel
  je požičaný a dokedy.
- **Stolárstvo Jankura** (pôvodne: oprava mailto `your@email` + polia formulára)
  → nový uhol: galéria realizácií (apartmány v Lomnici, detské izby) ako miesto,
  kde dopyt vzniká — „chcem niečo podobné" pod každou realizáciou.
  *(Pôvodne plánovaný uhol s rozmermi a fotkou som zahodil — ten už bol
  v úvodnom maile.)*

Oba maily ≤ 80 slov, konkrétny fakt zo stĺpca M, žiadne čísla ani %.

## ⚠️ Zistenie: schránka NEMÁ automatický podpis

Guide §10 (09.08.2026) tvrdí, že martin@appinara.sk má automatický HTML podpis
a drafty ho preto nemajú obsahovať. **Neplatí to.**

- Odoslaný mail Bike Bratislava z 10.08. končí opt-out vetou — **žiadny podpis**,
  ani textový, ani HTML (overené v otvorenom threade).
- Reply-compose okno sa otvorí s **prázdnym telom** — Gmail nič nepredvyplní.

Preto som podľa zadania úlohy doplnil textový podpis ručne; duplicita nehrozí.
**To zároveň potvrdzuje diagnózu z dnešného daily-send reportu** — 36 čakajúcich
draftov bez podpisu nie je chyba zobrazenia, ale dôsledok toho, že sa šablóna
riadila neplatným pravidlom §10. Guide §10 treba opraviť, inak bude research
úloha generovať bezpodpisové drafty ďalej.

## Zápcha vo follow-upoch

Zostáva **32** prospektov v okne:

| Odoslané | ks | vek | okno sa zatvorí |
|---|---|---|---|
| 10.08. | 3 | 11 d | **24.08.2026** |
| 11.08. | 2 | 10 d | 25.08.2026 |
| 13.08. | 7 | 8 d | 27.08.2026 |
| 14.08. | 10 | 7 d | 28.08.2026 |
| 17.08. | 10 | 4 d | 31.08.2026 |

Pri strope 2/deň (10 mínus daily send) sa najbližšie **piatim** (10.–11.08.)
okno zatvorí skôr, než na nich príde rad — pokiaľ daily send nezostane
zablokovaný chýbajúcimi podpismi. Ak áno, tento task dostane celý strop 10
a stihne ich. Od 24.08. stúpa warmup limit na 20/deň.

## Kontrola na konci

- `in:sent after:2026/08/21` = **10** → presne 8 (TASK A) + 2 (tento beh),
  warmup limit nepresiahnutý
- Excel: 532 riadkov pred aj po zápise; r414 a r415 majú
  `FU1 odoslané` / `21.08.2026` / poznámku `FU1 odoslané 21.08.2026`
- Zápis prebehol **ihneď po každom odoslaní**, nie dávkovo

## Poznámky k behu

- Chrome renderer dvakrát zamrzol (`Page.captureScreenshot` timeout) — rovnaký
  symptóm ako v dnešnom daily-send reporte. Vyriešené novou kartou.
  Klikanie cez súradnice v zozname vlákien nefungovalo, spoľahlivé je až
  `find` → klik na `ref`.
- Rotácia záloh: v `backup/` je teraz 5 súborov, limit 10 nedosiahnutý.

*Beh: appinara-weby-followup · 21.08.2026 14:06–14:30*
