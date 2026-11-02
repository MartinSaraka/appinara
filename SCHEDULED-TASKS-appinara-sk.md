# Scheduled tasks pre martin@appinara.sk (weby / apky)

Tri úlohy zrkadlovo k existujúcim trom pre gmail. Rozdiel: iná schránka, iná ponuka,
a **zabudovaný warmup** — nová schránka nemá žiadnu históriu.

**Časy sú zámerne posunuté** oproti existujúcim úlohám. Dve Chrome automatizácie naraz
by si liezli do cesty.

```
10:00  Appinara daily send            (gmail — existujúca)
11:00  Appinara followup sequence     (gmail — existujúca)
13:00  Appinara weby — daily send     (NOVÁ)
14:00  Appinara weby — followup       (NOVÁ)
09:00  Appinara research prospects    (gmail — existujúca, Po + Št)
09:30  Appinara weby — research       (NOVÁ, Ut + Pia)
```

---

## ⚠️ Skôr než tieto úlohy zapneš

**1. Excel potrebuje nový stĺpec `Odosielateľ` (O).**
Bez neho by obe vetvy ťahali z toho istého zoznamu a tá istá firma by dostala mail
z dvoch adries. Existujúcim 413 riadkom sa nastaví `gmail`, nové weby/apky prospekty
dostanú `appinara.sk`.

**2. Chrome indexy — OVERENÉ Martinom 04.08.2026:**
`u/2` = appinarasolutions@gmail.com, `u/3` = martin@appinara.sk.
Pridaním alebo odhlásením ďalšieho Google účtu sa indexy posunú — index je preto
v úlohách vždy len prvý tip a účet sa pred posielaním overuje screenshotom
(adresa vpravo hore).

**3. Over, či vieš vytvárať drafty v novej schránke cez Gmail konektor.**
Ten je napojený na `appinarasolutions@gmail.com`. Ak sa druhý účet pripojiť nedá,
research task bude musieť vytvárať drafty cez Chrome — funguje to, len je to pomalšie
a krehkejšie. **Zisti to skôr, než zapneš TASK C.**

**4. Riadi sa guide v3.2.** Follow-upy podľa §11 (vetvenie podľa veku, šablóny),
statusy podľa §12 (jednotné „Treba research", terminálne „FU1 odoslané" a
„Expirované"). Sekcie guide odkazuj menom, nie číslom.

---

## Warmup — platí pre TASK A

Nová schránka nesmie začať na desiatich mailoch denne. Tento rozpis je **súčasťou
promptu** a úloha ho musí dodržať:

| Obdobie | Cold mailov / deň |
|---|---|
| 05.–07.08.2026 | 0 — ručná fáza warmupu; ak už prebehla (maily známym + odpovede), môžeš prepísať na 3 |
| 10.–14.08.2026 | 5 |
| 17.–21.08.2026 | 10 |
| 24.–28.08.2026 | 20 |
| od 31.08.2026 | 30 — **strop, nikdy viac** |

**Súbežne s automatikou do ~10.08.:** pošli z novej adresy aj 5–10 ručných mailov
ľuďom, ktorých poznáš, a nechaj ich odpovedať — odpoveď je najsilnejší pozitívny
signál pre reputáciu schránky, cold maily ho samy nevyrobia. Zároveň si nastav
profilovú fotku a podpis.

---

# TASK A — Appinara weby: daily send

**Task ID:** `appinara-weby-daily-send`
**Cron:** `0 13 * * 1-5`
**Popis:** Každý pracovný deň o 13:00 odoslať cold maily z martin@appinara.sk podľa warmup limitu

```
Odošli cold outreach maily pre Appinara s.r.o. z NOVEJ schránky martin@appinara.sk
cez Chrome browser automation.

GMAIL ÚČET: martin@appinara.sk (Google Workspace, Chrome u/3 — overené 04.08.2026)
EXCEL: C:\Users\Martin\Desktop\biznis\Appinara_Prospekti_a_Outreach.xlsx (hárok "Prospekti")

═══ WARMUP LIMIT — NAJDÔLEŽITEJŠIE PRAVIDLO ═══
Táto schránka je nová a nemá históriu. Prekročenie limitu ju spáli.
Pozri dnešný dátum a použi zodpovedajúci limit:

  do 07.08.2026     → 0 mailov. Ukonči s hláškou "warmup — ručná fáza".
  10.–14.08.2026    → max 5
  17.–21.08.2026    → max 10
  24.–28.08.2026    → max 20
  od 31.08.2026     → max 30

Limit NIKDY neprekroč, ani keď je v pipeline viac draftov.

POSTUP:
0. PRE-FLIGHT (pred akýmkoľvek odoslaním):
   - over zapisovateľnosť Excelu (openpyxl open + no-op save; ak zlyhá — súbor
     otvorený/zamknutý — STOP, nič neposielaj: mail bez zápisu = duplicita zajtra)
   - sprav zálohu do C:\Users\Martin\Desktop\biznis\backup\ (drž max 10 záloh)
   - nikdy nebež súčasne s inou outreach úlohou (zdieľaný Excel a Chrome)

1. Načítaj Excel cez openpyxl. Vyber prospektov kde SÚČASNE platí:
   - Status (K) = "Draft pripravený"
   - Odosielateľ (O) = "appinara.sk"
   - Email (E) je validná adresa (obsahuje @, nie je placeholder)
   Zoraď: Priorita Vysoká → Stredná → Nízka.
   DNEŠNÝ STROP = warmup limit − dnešná spotreba schránky. Spotreba = počet
   riadkov, kde Odosielateľ = "appinara.sk" A Posledný kontakt = dnešný dátum
   A Status je "Odoslané" alebo "FU1 odoslané" (maily, ktoré dnes už odišli —
   TASK A aj TASK B dokopy; chráni aj pred dvojitým behom v jeden deň).
   POZOR: riadky so Status "Odpoveď" do spotreby NEPATRIA — tým L = dnes
   nastavil reply-check, mail neodišiel. Ak strop ≤ 0 → ukonči bez odoslania.

2. Over Chrome cez list_connected_browsers. Ak nie je pripojený — STOP a oznám to.

3. Otvor https://mail.google.com/mail/u/3/#drafts (u/3 = martin@appinara.sk).
   POZOR: index je len prvý tip — VŽDY over screenshotom, že vpravo hore je
   martin@appinara.sk. Ak by si sa ocitol v appinarasolutions@gmail.com (u/2),
   OKAMŽITE STOP — poslal by si maily z nesprávnej adresy.

4. Pre každý prospekt:
   - vyhľadaj draft podľa PRÍJEMCU (hľadanie "in:drafts to:[email]"), nie podľa
     mena firmy — mená sa pletú, adresa nie
   - ak sa draft nenašiel (zmazaný, alebo ho research ešte nevytvoril) →
     do Poznámok "Draft nenájdený {dátum}", ulož Excel, preskoč prospekta
   - otvor ho a SKONTROLUJ screenshotom: adresát == email z Excelu, telo nie je
     prázdne, podpis je "Martin Saraka | Appinara s.r.o. | appinara.sk"
   - klikni Odoslať
   - over, že sa zobrazila hláška o odoslaní — BEZ nej nezapisuj "Odoslané",
     len poznámku "Odoslanie neisté {dátum}" a preskoč
   - počkaj RANDOMIZOVANE 60–180 sekúnd pred ďalším (nie fixných 90)

5. IHNEĎ po každom úspešnom odoslaní zapíš do Excelu A ULOŽ SÚBOR (nie na konci
   behu — pri páde by hrozili duplicity):
   - Status = "Odoslané"
   - Posledný kontakt (L) = dnešný dátum DD.MM.YYYY
   - Pôvodné odoslané (N) = dnešný dátum DD.MM.YYYY, AK je N prázdne.
     ⚠️ POVINNÉ — TASK B vyberá kandidátov na FU podľa N; bez N prospekt nikdy
     nedostane follow-up a ticho prepadne z pipeline.

ŽELEZNÉ PRAVIDLÁ:
- Warmup limit sa neprekračuje za žiadnych okolností
- Prospekty s Odosielateľ ≠ "appinara.sk" NEPOSIELAJ — patria druhej vetve
- Prospekty so statusom "Odoslané" preskoč (žiadne duplicity)
- Neplatné adresy preskoč a zapíš Status = "Email chýba"
- Pri chybe odoslania preskoč daný mail a pokračuj ďalším
- Ak Chrome stratí spojenie — STOP a oznám, koľko si stihol

VÝSTUP (max 150 slov):
- Aký warmup limit dnes platil a koľko si reálne poslal
- Komu (firma + email)
- Chyby, ak boli
- Koľko "Draft pripravený" s Odosielateľ = "appinara.sk" ešte zostáva
```

---

# TASK B — Appinara weby: followup sequence

**Task ID:** `appinara-weby-followup`
**Cron:** `0 14 * * 1-5`
**Popis:** Jednostupňový follow-up (vetvenie podľa veku, guide §11) pre weby/apky vetvu, max 2 maily na prospekta

```
Pošli follow-upy z martin@appinara.sk pre Appinara s.r.o.

GMAIL ÚČET: martin@appinara.sk (Chrome u/3 — pred posielaním over screenshotom)
EXCEL: C:\Users\Martin\Desktop\biznis\Appinara_Prospekti_a_Outreach.xlsx

POVINNÉ ČÍTANIE: C:\Users\Martin\Desktop\biznis\OUTREACH-QUALITY-GUIDE.md

═══ STROP ═══
MAX 2 maily na prospekta celkovo (úvodný + FU1). Žiadny FU2, žiadny FU3,
žiadny re-engagement (zrušený 04.08.2026).
Kto neodpovedal po druhom maile, ide do pokoja.
Denný limit je SPOLOČNÝ s TASK A — vypočítaš ho v kroku 1 zo spotreby v Exceli.

POSTUP:
0. PRE-FLIGHT ako v TASK A: zapisovateľnosť Excelu (inak STOP), záloha,
   žiadny súbeh s inou outreach úlohou.

1. NAJPRV DNEŠNÁ SPOTREBA: spočítaj riadky, kde Odosielateľ = "appinara.sk"
   A Posledný kontakt = dnešný dátum A Status je "Odoslané" alebo
   "FU1 odoslané" — maily, ktoré dnes už z tejto schránky odišli (TASK A aj B
   dokopy; "Odpoveď" riadky sa NEPOČÍTAJÚ, tým L nastavil reply-check).
   Tvoj dnešný strop = warmup limit − spotreba. Ak ≤ 0 → ukonči bez odoslania.

   Potom načítaj kandidátov: Status = "Odoslané" AND Odosielateľ =
   "appinara.sk", vek od Pôvodné odoslané (stĺpec N; ak N chýba, použi
   Posledný kontakt ako fallback a N rovno doplň):
   - 4–14 dní → FU1 šablóna (guide §11)
   - > 14 dní → žiadny mail: Status = "Expirované" (TERMINÁLNY), poznámka,
     ulož, vypíš v reporte (re-engagement zrušený 04.08.2026 — kto vypadol
     z okna, ostáva na pokoji)
   Prioritizuj najstarších. POZOR: dátumy môžu byť string "DD.MM.YYYY" aj
   datetime — ošetri oboje.

2. PRE KAŽDÉHO NAJPRV REPLY-CHECK:
   - primárne: otvor PÔVODNÉ VLÁKNO — ak obsahuje správu od kohokoľvek iného
     než nás, prospekt odpovedal
   - doplnkovo: pri VLASTNEJ doméne prospekta vyhľadaj
     `from:[doména] newer_than:90d`; pri freemail adrese (gmail.com, azet.sk,
     zoznam.sk, centrum.sk, outlook.com…) LEN presnú adresu
     `from:[email] newer_than:90d` — doménový check by pri freemaile označil
     za "odpoveď" hocijaký mail od hocikoho
   Ak odpovedal → NEPOSIELAJ, zapíš Status = "Odpoveď", Posledný kontakt =
   dnes, poznámku "Odpovedal {dátum}", ULOŽ Excel a pokračuj ďalším.

3. Napíš follow-up (max 80 slov), odpoveďou DO PÔVODNÉHO VLÁKNA, podľa FU1
   šablóny z guide §11:
   - Formálne "Dobrý deň", tón podľa §8.5 (láskavý záver, žiadne "nebudem otravovať")
   - Konkrétny fakt zo stĺpca M je POVINNÝ — bez neho FU nevytváraj, poznač
     "FU odložený — chýba konkrétny fakt {dátum}" a preskoč
   - JEDNA nová informácia alebo uhol — nie "len sa pripomínam"
   - Nízkoprahová CTA z rotácie §7 — nie tá istá v každom maile dňa
   - Podpis: Martin Saraka, Appinara s.r.o., appinara.sk, +421 917 566 722

4. Odošli, over hlášku o odoslaní (bez nej nezapisuj nič, len poznámku
   "Odoslanie neisté {dátum}"), počkaj randomizovane 60–180 s.

5. IHNEĎ po overenom odoslaní zapíš A ULOŽ SÚBOR:
   Status = "FU1 odoslané" (TERMINÁLNY),
   Posledný kontakt = dnešný dátum,
   poznámka "FU1 odoslané {dátum}".

ZÁKAZY:
- Žiadne vymyslené čísla ("+18 %", "ROI za 6 týždňov")
- Žiadne "chcel som sa len opýtať, či ste videli môj predchádzajúci mail"
- Žiadny tretí mail komukoľvek
- Nikoho, kto má Odosielateľ ≠ "appinara.sk"

VÝSTUP (max 120 slov):
- Koľko kandidátov, koľko odfiltroval reply-check, koľko odoslaných
- Komu
- Chyby
```

---

# TASK C — Appinara weby: research prospects

**Task ID:** `appinara-weby-research`
**Cron:** `0 9 * * 2,5`  (utorok a piatok o 9:00)
**Popis:** 2× týždenne nájsť 15 SK firiem s problémom na webe/apke a pripraviť drafty

```
Nájdi 15 slovenských firiem pre Appinara s.r.o., ktorým sedí ponuka MODERNÝ WEB alebo
APLIKÁCIA, a priprav personalizované cold outreach drafty. Kvalita > kvantita.

POVINNÉ ČÍTANIE PRED PRÁCOU:
Read C:\Users\Martin\Desktop\biznis\OUTREACH-QUALITY-GUIDE.md a aplikuj VŠETKY pravidlá.

═══ ČÍM SA TÁTO VETVA LÍŠI ═══
Toto NIE JE vetva o AI a chatbotoch — tá beží zvlášť z gmailu.
Tu hľadáš firmy, kde je problém na strane WEBU alebo PROCESU:

  - rozbité / "coming soon" / demo stránky na živom webe
  - rezervácia alebo objednávka len cez telefón alebo mailto
  - denné menu / cenník / otváracie hodiny prepisované ručne v HTML
  - web nefunkčný alebo neprehľadný na mobile
  - e-shop bez košíka, objednávky cez formulár alebo Messenger
  - opakovaná ručná agenda, ktorá by mala byť aplikácia

Ak firme sedí skôr AI/chatbot ako web — draft NEROB; pridaj riadok s
Odosielateľ (O) = "gmail", Status = "Čaká na draft" a celým researchom
v Poznámkach. Gmail research takéto riadky spracúva PREDNOSTNE a draft
dokončí — a vďaka riadku v Exceli žiadna firma nedostane mail z oboch schránok.

GMAIL ÚČET: martin@appinara.sk
EXCEL: C:\Users\Martin\Desktop\biznis\Appinara_Prospekti_a_Outreach.xlsx

POSTUP:

0. PRE-FLIGHT + BACKLOG GUARD:
   - over zapisovateľnosť Excelu (inak STOP) + sprav zálohu do backup\
   - spočítaj "Draft pripravený" s Odosielateľ = "appinara.sk":
     > 40 → STOP celý beh (backlog plný, drafty starnú — pri warmup limitoch
     sa posiela pomaly), 25–40 → obmedz beh na 8 prospektov, < 25 → plný beh 15

1. NAJPRV DOKONČI ODOVZDANÉ: riadky so Status = "Čaká na draft" A
   Odosielateľ = "appinara.sk" — odovzdala ich gmail vetva, research je
   v Poznámkach. Over fakty, sprav draft + quality check (kroky 4–6) a Status
   prepni na "Draft pripravený" (ak podklady nestačia → "Treba research").
   AŽ POTOM hľadaj nové: NÁJDI 15 SK firiem cez WebSearch. Segmenty voľne —
   rozhoduje sila nálezu na webe, nie kvóta na segment. Pre každú: meno, web,
   kontaktný email NÁJDENÝ NA ICH WEBE (kontakt / pätička — žiadne hádanie
   info@doména), lokácia.

2. DEDUPE: načítaj CELÝ Excel a vylúč duplicity. Porovnávaj NORMALIZOVANE:
   doména bez http(s)://, bez www., bez koncovej lomky, lowercase; názov firmy
   lowercase bez s.r.o./a.s. Duplicita = zhoda domény (D), názvu (C) ALEBO
   emailu (E). Kontroluj proti všetkým riadkom, nielen proti weby/apky vetve.

3. RESEARCH KAŽDEJ FIRMY (povinné):
   - WebFetch homepage + 1 podstránku (Kontakt / Rezervácia / Cenník / Objednávka)
   - Otvor web aj v mobilnom rozlíšení, ak sa dá
   - Hľadaj KONKRÉTNY technický alebo procesný dôkaz — nie dojem.
     Dobrý nález: "rezervácia vedie na mailto: odkaz", "v HTML ostala poznámka
     o dovolenke", "objednávkový formulár vracia chybu".
     Zlý nález: "web by si zaslúžil redesign", "pekné produkty".
   - Ak nevieš vyťažiť ŽIADNY konkrétny dôkaz → draft NEROB, pridaj riadok
     so statusom "Treba research" (jednotný status podľa guide §12 — "Treba
     lepší research" sa už nepoužíva).

4. NAPÍŠ DRAFT (120–160 slov) podľa štruktúry z guide, TÓN PODĽA §8.5 —
   píšeme ako kolega, čo si všimol fajn vec, NIE ako audítor s nálezom:
   - Subject: o ICH webe alebo procese, nie o nás. Bez slov "AI", "chatbot", "redesign".
   - OTVOR OCENENÍM: 1 veta s niečím KONKRÉTNYM, čo robia dobre (poctivé fotky
     jedál, aktívny blog, rýchle odpovede v recenziách) — postreh, nie lichôtka
   - až POTOM nález — podaný ako škoda / príležitosť, NIKDY ako chyba:
     "Máte X spravené poctivo — o to viac je škoda, že rezervácia vedie len na
     mailto" namiesto "formulár máte rozbitý". Predpokladaj kompetenciu:
     majiteľ na to nemal čas alebo ruky, nespravil chybu.
   - 1 veta kto som a čo robím
   - 1–2 vety JEDEN konkrétny návrh naviazaný na ten nález
   - 1 veta sociálny dôkaz BEZ vymyslených čísel
   - 1 veta CTA — rotuj varianty, dva rovnaké za sebou nie
   - Podpis: Martin Saraka, Appinara s.r.o., appinara.sk, +421 917 566 722
   - Na konci opt-out veta: "Ak vás podobné maily nezaujímajú, stačí odpísať a viac
     sa neozvem."

5. QUALITY CHECK — 7 otázok z guide §9 (POZOR: nie "sekcia 6" — tá je social
   proof; quality check má SEDEM otázok vrátane diagnostiky ponuky a tepla §8.5).
   Ak by sa mail dal poslať komukoľvek inému v segmente → prepíš.
   Ak neprejde všetkých 7 → draft NEVYTVOR, len riadok so statusom "Treba research".

6. Vytvor draft v schránke martin@appinara.sk (cez Gmail konektor, ak sa druhý
   účet podarí pripojiť; inak cez Chrome u/3 — účet over screenshotom).

7. PRIDAJ DO EXCELU (ulož po každom riadku, nie na konci):
   - # (auto-increment), Segment, Firma, Web, Email, Telefón, Lokácia
   - Príležitosť (H; 04.08.2026 premenované z "Príležitosť pre AI") =
     1-veta zhrnutie návrhu
   - Pitch angle = ktorý pattern z guide
   - Priorita: Vysoká (silný konkrétny nález) / Stredná / Nízka
   - Status = "Draft pripravený" alebo "Treba research"
   - Poznámky = 2-3 vety s faktami z researchu — kľúčové pre follow-up
   - **Odosielateľ (stĺpec O) = "appinara.sk"**   ← NEVYNECHAJ

ZÁKAZY (železné):
- Žiadne vymyslené čísla ("+12 %", "−40 %", "ROI za 6 týždňov")
- Žiadne nedoložené detaily (počet pobočiek, kapacita, obrat)
- Žiadne klišé otvorenia ("Pri pohľade na váš web mi napadlo...")
- Žiadne odrážky s tromi features
- Veľké korporácie (Alza, Mall, Tesco, Lidl, Notino) — skip
- Salóny — skip (project instruction)
- Čeština — skip, píšeme po slovensky

VÝSTUP (max 200 slov):
- Počet nájdených / s draftom / "Treba research" (+ či zafungoval backlog guard)
- Koľko vylúčených ako duplicita a koľko presunutých do AI vetvy
- 1–2 príklady najsilnejších nálezov (pre learning)
- Aktuálne "Draft pripravený" s Odosielateľ = "appinara.sk"
```

---

## Po zapnutí sleduj

**Prvý týždeň dennodenne:** či TASK A naozaj rešpektuje warmup limit a či posiela
zo správnej schránky. Prvých 50 mailov rozhoduje o reputácii novej adresy.

**Bounce rate pod 3 %.** V tabuľke máš 30 prospektov bez emailu a 10 so statusom
"Email chýba" — tie sa do odosielania nesmú dostať.

**Ak odozva prudko klesne alebo prídu sťažnosti** — okamžite pozastav TASK A.
Klientska pošta na appinara.sk má prednosť pred akvizíciou.

---

*Vygenerované 04.08.2026 · rev. 04.08.2026 večer: FU okno počítané zo stĺpca N (nie L) + vetvenie podľa veku podľa guide §11, freemail poistka v reply-checku, Excel pre-flight + priebežné ukladanie + zálohy, draft podľa príjemcu, jednotný status "Treba research", backlog guard a normalizovaný dedupe v TASK C*
