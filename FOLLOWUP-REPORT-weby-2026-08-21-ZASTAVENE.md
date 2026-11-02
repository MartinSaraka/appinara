# Follow-up weby (martin@appinara.sk) — BEH ZASTAVENÝ NA PRE-FLIGHTE

**Dátum behu:** 21.08.2026 11:15 (naplánované na 20.08.2026 14:00 — beh sa spustil 20.08. o 14:05, zablokoval sa a dobehol až dnes)
**Odoslaných mailov: 0**
**Zapísané zmeny v Exceli: žiadne** (okrem zálohy)

---

## Prečo som neposielal

Pre-flight podmienka z `weby-A-daily-send-13h-INSTRUKCIE.txt` bod 0:

> „nikdy nebež súčasne s inou outreach úlohou (zdieľaný Excel a Chrome)"

V čase behu bola aktívna úloha **„Appinara daily send"** (gmail vetva,
appinarasolutions@gmail.com na Chrome u/2). V transkripte potvrdila
*„Pre-flight hotový, začínam odosielať"* — čiže práve klikala Odoslať
v Chrome a po každom maile zapisovala do toho istého Excelu.

Keby som pokračoval:

1. **Riziko zlej schránky.** Prepnutie Gmailu na u/3 v tom istom prehliadači
   počas jej odosielania — jej vlastné inštrukcie označujú „ocitol si sa
   v nesprávnom účte" ako dôvod na OKAMŽITE STOP. Vytvoril by som presne
   tú situáciu.
2. **Riziko stratených zápisov.** Obe úlohy robia load → zápis → save nad
   `Appinara_Prospekti_a_Outreach.xlsx`. Kto uloží druhý, prepíše zmeny
   prvého. Odoslaný mail bez zápisu = duplicita v ďalšom behu.

Warmup limit ani kvalita draftov problém neboli — blokátor bol výlučne súbeh.

---

## Čo som stihol (read-only)

- **Zapisovateľnosť Excelu:** OK
- **Záloha:** `backup/Appinara_Prospekti_a_Outreach.bak-webyfu-20260820-1405.xlsx`
  (staré zálohy sa nedali odmazať — `Operation not permitted`; v priečinku je
  39 záloh namiesto max. 10)
- **Warmup limit 21.08.2026:** 10 · **dnešná spotreba appinara.sk:** 0 · **strop: 10**
- **Kandidáti (Status „Odoslané" + Odosielateľ „appinara.sk"): 39**
  - **34 v okne 4–14 dní** → čakajú na FU1
  - **0 nad 14 dní** → dnes nikto neexpiroval
  - 5 mladších ako 4 dni → korektne čakajú
  - Všetkých 34 má vyplnené Poznámky (M), takže konkrétny fakt pre FU je k dispozícii

---

## ⚠️ Príčina, ktorú treba riešiť (nie oživovať vlákna)

**Úloha „Daily send martinappinara" z 20.08. 13:00 visí.** Session je
označená ako *running* aj po ~22 hodinách, do Excelu nezapísala nič po
20.08. 14:04 a **nevytvorila report** `DAILY-SEND-REPORT-martin-appinara-2026-08-20.md`.
Stihla odoslať iba 2 maily (Športové centrum Pionierska, Dental Ateliér)
z povoleného stropu 10.

Dôsledok reťazcom: zaseknutá TASK A → moja TASK B sa 20.08. o 14:05 nemala
kam vojsť → dnešný beh dobehol s 21-hodinovým sklzom → 0 follow-upov dva dni
po sebe.

**Odporúčanie:** ukončiť zaseknutú session `local_0c6b7672` a pozrieť, na čom
spadla. Pokiaľ visí, blokuje pre-flight každého ďalšieho weby behu.

---

## Zápcha vo follow-upoch — okno sa začína zatvárať

Strop je 10 mailov denne (zdieľaný s TASK A), v okne je 34 prospektov:

| Odoslané dňa | ks | vek | FU okno sa zatvorí |
|---|---|---|---|
| 10.08.2026 | 5 | 11 d | **24.08.2026** |
| 11.08.2026 | 2 | 10 d | 25.08.2026 |
| 13.08.2026 | 7 | 8 d | 27.08.2026 |
| 14.08.2026 | 10 | 7 d | 28.08.2026 |
| 17.08.2026 | 10 | 4 d | 31.08.2026 |

Najstarším 7 (10.–11.08.) ostávajú 3–4 dni. Ak najbližší beh prejde čisto
a pôjde od najstarších, stihnú sa. Ak vypadne ešte jeden deň, časť z nich
prepadne do „Expirované" bez druhého mailu.

Od 24.08. stúpa warmup limit na 20/deň — potom sa zápcha rozpustí sama,
ale prvej pätici to už nepomôže.

---

## Ďalší krok

Nič som neposielal ani nezapisoval, takže stav je nedotknutý a ďalší beh
(21.08. o 14:00) môže pokračovať bez rizika duplicít — pokiaľ dovtedy nebude
bežať iná outreach úloha a zaseknutá session bude ukončená.

*Beh: appinara-weby-followup · report vygenerovaný 21.08.2026*
