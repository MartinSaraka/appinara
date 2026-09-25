# Daily send martin@appinara.sk — 12.08.2026

## Výsledok: 0 z 5 odoslaných — zastavené na povinnej kontrole podpisu

Warmup limit pre 12.08. (okno 10.–14.08.): **max 5**. Dnešná spotreba pred behom: **0**.
Strop teda 5. Odoslané **0**. Limit neprekročený.

| # | Firma | Email | Stav |
|---|---|---|---|
| 1 | Plavecká škôlka M. Koňarčíkovej | info@plaveckaskolka.sk | Draft nájdený, podpis chýba → neodoslané |
| 2 | MOVEA – mobilná vet. ambulancia | movea.vet@gmail.com | Draft nájdený, podpis chýba → neodoslané |
| 3 | Športíkovo (DELTA BB) | info.deltabb@gmail.com | Draft nájdený, compose sa neotvoril → neodoslané |
| 4 | Košecký dvor (PD Košeca) | predajna@pdkoseca.sk | Nedostal sa na rad |
| 5 | Moja pekáreň | mimisaskova@gmail.com | Nedostal sa na rad |

Zostáva **37** prospektov v stave „Draft pripravený“ s Odosielateľ = appinara.sk.

---

## Prečo som nič neposlal

### 1. Podpis stále chýba vo všetkých draftoch

Chyba nahlásená 11.08. **nie je opravená**. Oba drafty, ktoré sa dnes podarilo otvoriť,
majú na mieste podpisu prázdny `<a class="gmail_plusreply">` — text
„Martin Saraka | Appinara s.r.o. | appinara.sk“ v tele nie je vôbec.
Overené priamo v DOM compose okna, nie len okom.

Postup výslovne žiada pred odoslaním skontrolovať, že podpis v drafte je. Kontrola padla,
takže maily neodišli. Poslať cold mail bez mena, firmy a webu z domény, ktorá je ešte
v warmupe, by schránke uškodilo viac, než koľko by priniesli dva odoslané maily.

### 2. Podpis som nemohol doplniť ručne ako včera

Včera sa podpis dopísal priamo v compose okne. Dnes to nešlo — bežím ako naplánovaná
úloha bez teba pri počítači a **oba spôsoby úpravy tela draftu zablokoval bezpečnostný
filter**: aj zápis cez DOM, aj klik do tela + písanie. Čítanie obsahu prešlo bez problému,
blokovaný bol len zápis do stránky.

Je to konzistentné so zadaním úlohy — tá hovorí podpis *skontrolovať*, nie *dopísať*.
Ručná oprava bola včera výnimka, ktorú si odklepol ty pri počítači.

### 3. Gmail UI sa opäť rozpadol

Pri treťom prospektovi (Športíkovo) sa compose okno prestalo otvárať úplne — klik na
riadok draftu neurobil nič, ani po opakovaní a čerstvom načítaní. Rovnaký prejav ako
11.08. Ďalej som netlačil.

Vedľajší nález: compose okno je v tomto rozlíšení odrezané pravým okrajom viewportu,
takže tlačidlá Odoslať a Zavrieť nie sú viditeľné na screenshote a dajú sa trafiť len
cez referencie prvkov. Sťažuje to vizuálnu kontrolu pred odoslaním.

---

## Čo treba spraviť, aby zajtrajší beh prešiel

1. **Opraviť generovanie draftov v research úlohe** — posielať `create_draft` rovno
   s hotovým `htmlBody` vrátane pätičky, nie skladať odkaz cez UI. Kým sa to nespraví,
   každý ďalší beh skončí rovnako: 0 odoslaných, alebo maily bez podpisu.
2. Alternatíva na dnes večer: doplniť podpis ručne v 5 draftoch a spustiť úlohu znova —
   limit 5 je stále celý voľný.
3. Zvážiť nastavenie Gmail podpisu priamo v schránke (Nastavenia → Podpis), aby sa
   vkladal automaticky aj do draftov vytvorených cez API.

## Vykonané zmeny

- Záloha: `backup/Appinara_Prospekti_a_Outreach.bak-dailysend-20260812-2035.xlsx`
- Excel: pridané poznámky do riadkov 423, 424, 427 (Status ostal „Draft pripravený“,
  takže zajtrajší beh ich vezme normálne). Žiadny riadok neprepnutý na „Odoslané“.
- Rotácia starých záloh opäť zlyhala (`Operation not permitted`) — v `backup/` je 24 súborov
  namiesto max 10. Sedí to s tým, čo hlásil beh 11.08.

## Overené pred behom

- Excel zapisovateľný (openpyxl open + save prešiel) ✔
- Schránka: `martin@appinara.sk` na `u/3`, potvrdené v titulku Gmailu ✔ — nie appinarasolutions@gmail.com
- Gmail MCP konektor stále nevidí túto schránku (dopyt na drafty vrátil prázdno),
  takže odosielať sa dá výhradne cez Chrome
