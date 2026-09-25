# Follow-up weby (martin@appinara.sk) — 23.08.2026 (nedeľa), 15:35

## Výsledok: 0 odoslaných — dnešný strop = 0

**Odoslané FU1: 0** · **Expirované: 0** · **Odpovede: 0** · **Zápisov do Excelu: 0**

---

## Prečo 0

Krok 1 zadania: *dnešný strop = warmup limit − dnešná spotreba; ak ≤ 0 → ukonči bez odoslania.*

| Položka | Hodnota |
|---|---|
| Warmup limit 23.08.2026 (nedeľa) | **0** |
| Dnešná spotreba schránky (TASK A + B) | 0 |
| **Môj strop** | **0 → koniec bez odoslania** |

`SENDING-INFRA-SETUP.md`, krok 5, definuje warmup výslovne **len pre pracovné dni**
(„Plán na jednu schránku, len pracovné dni"). Nedeľa do žiadneho okna nespadá →
nedefinovaný limit sa vykladá konzervatívne ako 0. Rovnaký výklad použili behy
16.08., 22.08. aj dnešný daily send (`DAILY-SEND-REPORT-martin-appinara-2026-08-23.md`,
tiež 0 odoslaných).

| Okno | Dni | Limit |
|---|---|---|
| 17.–21.08.2026 | po–pi | 10 |
| **22.–23.08.2026** | **so–ne** | **nedefinované → 0** |
| 24.–28.08.2026 | po–pi | **20** |

Cold outreach v nedeľu poobede by novej doméne aj tak škodil (nízky open rate,
silnejší spam-signál).

## Pre-flight

- **Zapisovateľnosť Excelu:** OK (`touch` prešiel; openpyxl load prešiel)
- **Záloha:** `Appinara_Prospekti_a_Outreach.backup-20260823-153527.xlsx`
  *(vytvorená pred analýzou; nakoniec nebola potrebná — nič sa nezapisovalo)*
- **Súbeh:** žiadny — TASK A (daily send) dnes skončil skôr, tiež s 0 odoslanými
- **Excel po behu:** md5 zhodný so zálohou, mtime stále 21.08. 14:25 → **read-only, nič sa nezmenilo**
- Chrome / Gmail sa **neotváral**, žiadny reply-check nebežal, žiadneho draftu ani vlákna sme sa nedotkli
- Drobnosť: sandbox nedovolil zmazať testovací súbor `.writetest_weby_fu2` (0 B) — ostal v priečinku ako predošlé `.writetest_*`

## Kandidáti (analýza, bez akcie)

| Kategória | Počet |
|---|---|
| Status „Odoslané" + Odosielateľ „appinara.sk" | 45 |
| v okne 4–14 dní (kandidáti na FU1) | **35** |
| > 14 dní → Expirované | **0** |
| mladší ako 4 dni (korektne čakajú) | 10 |
| bez dátumu (fallback na L) | 0 |

Stĺpec N (Pôvodné odoslané) je vyplnený u všetkých 45 — fallback nebol potrebný,
žiadny riadok sa nemusel dopĺňať. Poznámky (M) má vyplnené **všetkých 35**
kandidátov → žiadny „FU odložený — chýba konkrétny fakt".

## ⚠️ Riziko expirácie — kohorta 10.08. vyprší zajtra

| Odoslané | ks | vek | okno sa zatvorí |
|---|---|---|---|
| **10.08.** | **3** | 13 d | **pondelok 24.08.** ← posledný deň |
| 11.08. | 2 | 12 d | utorok 25.08. |
| 13.08. | 7 | 10 d | štvrtok 27.08. |
| 14.08. | 10 | 9 d | piatok 28.08. |
| 17.08. | 10 | 6 d | pondelok 31.08. |
| 18.08. | 3 | 5 d | utorok 01.09. |

**Ohrození zajtra (r416–418):** Cukráreň Wagner, Plávanie Prešov, Cukráreň Dorka.

**Problém s poradím úloh:** v pondelok sa otvára limit 20/deň, ale daily send
(13:00) beží **pred** follow-upom (14:00) a čaká naň **36 pripravených draftov**.
Ak si daily send vezme celých 20, follow-up dostane strop 0 a tri riadky z 10.08.
v utorok expirujú. V utorok by daily send minul zvyšných 16 → na FU zostanú 4 sloty,
čo zachráni len kohortu z 11.08.

**Návrh (rozhodnutie je na Martinovi, nemenil som nič):** v pondelok obmedziť daily
send na 17 a nechať follow-upu 3 sloty, alebo pustiť follow-up pred daily sendom.
Cena je 3 nové cold maily o deň neskôr; alternatívou sú 3 natrvalo zavreté vlákna
s prospektmi, ktorí už úvodný mail dostali.

## Stav pipeline (Odosielateľ = appinara.sk, 111 riadkov)

| Status | Počet |
|---|---|
| Draft pripravený | 36 |
| Odoslané | 45 |
| Čaká na draft | 18 |
| Email chýba | 5 |
| Treba research | 5 |
| FU1 odoslané | 2 |

## Ďalší beh

Pondelok **24.08.2026 ~14:00**. Kapacita týždňa 24.–28.08. je 5 × 20 = 100 slotov
na 36 draftov + 35 follow-upov = 71 mailov — kapacitne to celé vyjde, **kritické je
len poradie v pondelok**.

---

*Beh: appinara-weby-followup · 23.08.2026 15:35–15:40 · read-only, 0 odoslaných*

---

## Dodatok — druhý beh 23.08.2026 15:46 (duplicitné spustenie)

Úloha sa spustila druhýkrát, 6 minút po prvom behu. Závery nezávisle preverené
a **nezmenené**:

| Kontrola | Výsledok |
|---|---|
| Warmup plán (`SENDING-INFRA-SETUP.md`, krok 5) | „Plán na jednu schránku, **len pracovné dni**" → nedeľa nedefinovaná → 0 |
| Dnešná spotreba (O = appinara.sk, L = 23.08., status Odoslané/FU1) | 0 |
| **Strop** | **0 − 0 = 0 → koniec bez odoslania** |
| Kandidáti 4–14 dní | 35 (zhoda s prvým behom) |
| Expirované > 14 dní | 0 |
| md5 Excelu vs. záloha `...153527` | **zhodné → súbor sa nezmenil** |

Druhý beh bol takisto **read-only**: Gmail sa neotváral, žiadny reply-check,
žiadny zápis do Excelu, žiadny mail neodišiel. Odporúčanie k poradiu úloh
v pondelok (viď sekcia „Riziko expirácie") ostáva otvorené.
