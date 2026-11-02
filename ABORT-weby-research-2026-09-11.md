# ABORT — appinara-weby-research, 11.09.2026

## Prečo sa beh zastavil

Sandbox (Linux workspace / bash) v tejto session **zlyhal 5× po sebe** s rovnakou
chybou: `failed to mount ... Plan9 share "c" which is not mounted`.

Bez bashu nie je k dispozícii Python/openpyxl, takže Excel
`Appinara_Prospekti_a_Outreach.xlsx` sa **nedal ani prečítať, ani zapísať, ani zálohovať**.

Pre-flight pravidlo z promptu: *„over zapisovateľnosť Excelu (inak STOP)"* → **STOP**.

### Prečo sa nerobili drafty

Dedupe (krok 2) beží proti CELÉMU Excelu. Bez neho hrozí, že firma dostane mail
z oboch schránok — to guide označuje za neprípustné (§10: *„Jedna firma NIKDY
nedostane mail z oboch schránok"*). Draft bez riadku v Exceli navyše daily-send
nikdy neodošle a len skresľuje backlog guard. Preto **žiadny draft nevznikol**.

## Čo sa napriek tomu zmeralo (schránka martin@appinara.sk, cez Chrome u/3)

Gmail konektor je v tejto session pripojený na `appinarasolutions@gmail.com`
(gmail vetva), takže guard sa meral cez Chrome u/3 — účet overený v titulku okna.

- **Konceptov v schránke spolu: 16**
- **N_real (cold drafty): 12** → hlboko pod prahom 300, guard by beh **nezastavil**
- Nezapočítané (4): `asdasd` (10.08.), `info@mliecnafarma.sk` — poznámka (12.08.),
  `TEST` (01.09.), `(no subject)` — odpoveď na pozvanie (01.09.)

### Kontrola podpisu (krok 0e)

| Stav | Počet | Ktoré |
|---|---|---|
| ✅ Správny podpis v4.1 (2 riadky) | 5 | všetkých 5 z 09.09. |
| ⚠️ Podpis gmail vetvy (3 riadky + telefón) v schránke appinara.sk | 3 | 28.08. — „V titulku vášho webu je vidieť kód", „Tlačidlo Poslať vo vašom formulári vedie na cudziu adresu", „Denné menu U Janka sa dá prečítať len po stiahnutí" |
| ❌ **BEZ podpisu** | **4** | 04.09. `penzionpalenica@penzionpalenica.eu`; 04.09. `as@autoskola-ficker.sk`; 01.09. `info@trea.sk`; 23.08. `info@splavdunaja.sk` |

Všetky 4 bez podpisu zároveň ešte obsahujú **zrušenú opt-out vetu** a zrušenú
predstavovaciu vetu („V Appinare staviame weby, aplikácie a AI integrácie…") —
sú to drafty spred v4.1. Podľa pokynu sa **neopravovali hromadne**, len hlásia.

### Staré drafty (krok 0d)

Žiadny **cold** draft nie je starší ako 30 dní (najstarší je 23.08., 19 dní).
Starší ako 30 dní je len balast: `asdasd` (10.08.) a poznámka `info@mliecnafarma.sk`
(12.08.) — ani jeden nie je cold draft, oba sa dajú pokojne zmazať ručne.

### Rekonciliácia (krok 0c)

**Nezbehla** — vyžaduje čítanie stĺpcov Status/Odosielateľ z Excelu.
⚠️ Pozor: 12 reálnych draftov je málo. Ak je v Exceli výrazne viac riadkov so
Status „Draft pripravený" + Odosielateľ „appinara.sk", sú to fantómové riadky
a treba ich prepnúť na „Čaká na draft" — presne ten scenár zo 14.08. Rekonciliácia
má v najbližšom úspešnom behu **prioritu**.

## Zámok

`.outreach-lock` = `FREE - taskA-daily-send-martinsk ukonceny 09.09.2026 15:15` —
voľný, žiadny súbeh. Tento beh zámok **nenastavoval** (nič nezapisoval).
Guide `OUTREACH-QUALITY-GUIDE.md` sa needitoval — je na v4.1, zhoduje sa s promptom.

## Čo treba spraviť

1. Reštartovať session / Cowork, aby sa sandbox nanovo namountoval, a spustiť
   úlohu znova — nič sa nestratilo, len sa nič nespravilo.
2. Pri najbližšom behu: rekonciliácia PRED hľadaním nových firiem.
3. Manuálne rozhodnúť o 4 draftoch bez podpisu (doplniť podpis + zmazať opt-out
   vetu, alebo ich zahodiť a nechať firmy prejsť novým researchom).
