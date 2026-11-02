# Follow-up report — appinara-weby-followup (martin@appinara.sk) — 10.08.2026, 14:10

## Výsledok: 0 odoslaných — dva nezávislé dôvody na stop

### 1. Denný strop vyčerpaný
- Warmup limit pre 10.–14.08.2026 = **5**
- Dnešná spotreba (O = appinara.sk, L = 10.08.2026, Status Odoslané/FU1): **5**
  (r415 Bike Bratislava, r416 Stolárstvo Jankura, r417 Cukráreň Wagner,
  r418 Plávanie Prešov, r419 Cukráreň Dorka — všetko TASK A o 13:04)
- **Strop = 5 − 5 = 0 → ukončené bez odoslania** podľa kroku 1.

### 2. Nulový kandidátsky pool
Riadky so Status = „Odoslané" AND Odosielateľ = „appinara.sk": **5**, a všetkých
päť má N = 10.08.2026, čiže **vek 0 dní** — pod spodnou hranicou FU okna (4–14 dní).

| Vek | Počet | Akcia |
|---|---|---|
| 0–3 dni (priskoro) | 5 | čakajú |
| 4–14 dní (FU1) | **0** | — |
| > 14 dní (Expirované) | **0** | — |

Reply-check sa nespúšťal — nebolo koho kontrolovať. Gmail sa vôbec neotváral.

## Zápisy do Excelu

**Žiadne.** Overené diffom proti zálohe z 13:04: 0 rozdielov v 456×15 bunkách.
Pre-flight prebehol (Excel zapisovateľný), záloha
`backup/Appinara_Prospekti_a_Outreach.bak-webyfollowup-20260810-1409.xlsx`.

**Rozhodnutie behu:** krok 1 hovorí „Ak ≤ 0 → ukonči bez odoslania", preto som
nezapisoval ani terminálne statusy. Bezpredmetné aj tak — expirovaných je 0.

## Pipeline vetvy appinara.sk (42 riadkov)

| Status | Počet |
|---|---|
| Draft pripravený | 30 |
| Odoslané | 5 |
| Email chýba | 4 |
| Treba research | 3 |

Stĺpec O je čistý: iba `gmail` (413) a `appinara.sk` (42), žiadne preklepy.

## Na pozretie — štrukturálne riziko kontencie

TASK A (13:00) bežal pred TASK B (14:00) a zjedol **celý** denný limit. Kým má
TASK A frontu 30 draftov a limit je 5/deň, TASK B nemá ako poslať ani jeden
follow-up. Prospekti oslovení dnes vstúpia do FU okna 14.–24.08., a ak sa
poradie nezmení, riskujú expiráciu bez follow-upu.

Možnosti (rozhodnutie na tebe):
1. Rezervovať TASK B pevný podiel limitu (napr. 2 z 5) — mení sa krok 1 v A aj B.
2. Prehodiť poradie: follow-up pred daily send (FU je lacnejší — ide do
   existujúceho vlákna, teplejší príjemca).
3. Nechať tak — TASK A vyčerpá 30 draftov okolo 17.–18.08., potom sa uvoľní
   priestor. Riziko: research pridáva ~8 draftov 2× týždenne, fronta sa dopĺňa.

## Otvorené z predošlých behov (nevyriešené)

- Podpis v schránke martin@appinara.sk: research report z 12:00 hlási, že
  Compose nevkladá žiadny podpis. Ak nie je zapnutý v Nastavenia → Podpis, maily
  odchádzajú bez kontaktu. Guide §10 predpokladá automatický HTML podpis, preto
  drafty textový podpis neobsahujú. **Treba overiť ručne.**
- 6 pokazených draftov v gmail vetve čaká na ručné zmazanie (viď
  FOLLOWUP-REPORT-2026-08-10.md).
