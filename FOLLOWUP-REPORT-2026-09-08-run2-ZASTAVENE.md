# Follow-up report — appinara-followup-sequence (beh 2) — 08.09.2026 11:10

## STAV: ZASTAVENÉ V PRE-FLIGHT — súbeh s TASK A. 0 mailov odoslaných, 0 zápisov do Excelu.

### Dôvod zastavenia (KROK 0, bod 3)

`.outreach-lock` obsahuje **aktívny** zámok odosielacej úlohy:

```
RUNNING taskA-martin-appinara-sk 08.09.2026 09:04 - 0 odoslanych
```

Na rozdiel od ranného behu (09:02), ktorý ten istý zámok vyhodnotil ako zastaraný,
je **teraz doložene živý**:

| Kontrola | Ráno 09:11 | Teraz 11:08 |
|---|---|---|
| Riadky `appinara.sk` s Posledný kontakt = 08.09.2026 | 0 | **11** |
| mtime Excelu | 09:13 | **11:02:01 → 11:05:31** (dva zápisy počas môjho behu) |

Task A teda medzitým odoslal 11 mailov a **stále zapisuje do Excelu**.
Text v zámku („0 odoslanych") je len neaktualizovaný — nie dôkaz nečinnosti.

### Prečo som nezapisoval do Excelu ani nerobil zálohu

`openpyxl` číta celý súbor a zapisuje celý súbor. Keby som uložil Excel teraz,
**prepísal by som statusy 11 mailov, ktoré Task A práve odoslal** — a tie firmy by
neskôr dostali mail druhýkrát. To je presne to riziko, kvôli ktorému KROK 0 existuje.

Preto: žiadny no-op save, žiadna záloha (kópia rozpísaného súboru môže byť poškodená),
žiadny zápis. Excel čítaný **iba na čítanie**.

---

## Čo som stihol overiť (read-only)

### Kandidáti — gmail vetva, Status = „Odoslané"

**14 kandidátov, všetci v okne 4–14 dní.**

| Vek | Počet | N |
|---|---|---|
| 8 dní | 1 | 31.08.2026 |
| 7 dní | 4 | 01.09.2026 |
| 6 dní | 3 | 02.09.2026 |
| 5 dní | 6 | 03.09.2026 |

### Novo „Expirované": **0**

Nikto nevypadol z okna. Najstarší kandidát (Perinbaba, 8 dní) vypadne **14.09.2026**,
najmladší 17.09.2026. Časová rezerva zatiaľ je.

### Reply-check — nikto neodpovedal

Prehľadaná schránka `in:inbox newer_than:9d -from:appinarasolutions@gmail.com`.
Od žiadneho z 13 kandidátov (ani z ich domén) neprišla odpoveď.

Dve výnimky, obe už známe:

- **MUDr. Borošová** (lapediatra@outlook.com) — odpovedala 03.09., ranný beh ju už
  prepol na „Odpoveď". Nie je medzi kandidátmi.
- **Perinbaba.sk** — jediná prijatá správa je stále automatická helpdesk odpoveď
  z `info@webstores.sk` (31.08.), nie človek. **Čaká na rozhodnutie Martina**
  — druhý beh po sebe. FU pre ňu vytvorený nebol.

### Drafty z ranného behu — všetkých 13 stále visí v schránke

Overené cez `list_drafts`: 13 draftov z 08.09. 09:03–09:05, každý ako reply do
pôvodného threadu (threadId ≠ messageId), **žiadny duplikát**. Sú stále platné —
nič som nevytváral ani neaktualizoval.

SEVA Slovensko · PP SAFETY · Active Team Martin · Penzión Alpinka · DentalPlus ·
MUDr. Haštová · ORL MUDr. Badeeb · Iba z dreva · GARDEN TEAM · OUTDPRO ·
PartyHry.sk · Mokoša · Estiva

---

## ⚠️ Systémový problém — druhý zablokovaný beh v jeden deň

Dnešná gmail FU vetva bola zastavená **dvakrát z dvoch rôznych príčin**:

1. **09:07** — Chrome odhlásený zo všetkých Google účtov → drafty vytvorené, neodoslané.
2. **11:10 (tento beh)** — Task A stále beží → nesmiem ani odoslať, ani zapísať.

Zároveň `.outreach-lock` **nikto nečistí po dobehnutí** — 05.09. tam ostal 3 dni starý
zámok, dnešný z 09:04 sa neaktualizoval ani po 11 odoslaných mailoch. Kvôli tomu musí
každý beh zámok validovať oklikou (počítaním riadkov v Exceli), čo je krehké a
už raz viedlo k nesprávnemu vyhodnoteniu.

**Návrh:** zapisovať do zámku heartbeat pri každom odoslaní a mazať ho na konci behu.
Bez toho bude „je to stale, alebo nie?" hádanka pri každom behu.

---

## Čo treba spraviť ručne

1. Počkať, kým Task A dobehne, a **vyčistiť `.outreach-lock`**.
2. Prihlásiť Chrome do `appinarasolutions@gmail.com` a overiť index (u/0–u/4).
3. Potom buď odoslať 13 draftov ručne, alebo nechať dobehnúť ďalší beh
   (okno drží do 14.–17.09., čas je).
4. Rozhodnúť o **Perinbabe** — je helpdesk autoresponder odpoveď, alebo nie?

---

## Pipeline (Excel, stav pri čítaní 11:08 — bez môjho zásahu)

**Celý Excel (863 riadkov):**
FU1 odoslané 273 · Odoslané 196 · Expirované 143 · Treba research 64 ·
Email chýba 61 · Odpoveď 41 · Draft pripravený 31 · FU2 odoslané 23 ·
FU3 odoslané (breakup) 22 · Klient 1

**Gmail vetva:**
FU1 odoslané 169 · Expirované 140 · Treba research 36 · Odpoveď 31 ·
FU2 odoslané 23 · FU3 odoslané (breakup) 22 · Email chýba 15 ·
**Odoslané 14** · Draft pripravený 4 · Klient 1

---

## Chyby

Žiadne chyby v spracovaní. Beh zastavený zámerne podľa pre-flight pravidla.
`mcp__workspace__bash` raz vypršal (120 s) pri `find` cez celý session strom —
opakovaný nebol, na výsledok nemal vplyv.
