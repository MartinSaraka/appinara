# Automatizácia Cold Outreach pre Appinara

Tento dokument obsahuje **2 scheduled tasks**, ktoré treba pridať v Cowork → Settings → Scheduled Tasks (alebo cez `/schedule` skill ak je dostupný).

Po pridaní budú bežať automaticky a Claude bude denne posielať maily + každé 3 dni hľadať nových klientov.

---

## TASK 1: Denné posielanie 10 mailov (Mon-Fri 10:00)

**Názov / Task ID:** `appinara-daily-send`

**Popis:** Každý pracovný deň o 10:00 odoslať 10 cold mailov z appinarasolutions@gmail.com cez Chrome

**Cron expression:** `0 10 * * 1-5` (každý pracovný deň o 10:00 lokálneho času)

**Prompt:**

```
Odošli 10 cold outreach mailov pre Appinara s.r.o. cez Chrome browser automation.

GMAIL ÚČET: appinarasolutions@gmail.com (Chrome account index u/2)
EXCEL TRACKER: C:\Users\Martin\Desktop\biznis\Appinara_Prospekti_a_Outreach.xlsx (hárok "Prospekti")

POSTUP:
1. Načítaj Excel cez openpyxl. Z hárku "Prospekti" identifikuj 10 prospektov kde:
   - Status (stĺpec K) je "Draft pripravený" alebo "Follow-up"
   - Email (E) je validný (nie placeholder)
   - Priorita (J): preferuj Vysoká → Stredná → Nízka

2. Cez mcp__Claude_in_Chrome__list_connected_browsers over že Chrome je pripojený. Ak nie - STOP a oznám užívateľovi.

3. Otvor https://mail.google.com/mail/u/2/#drafts

4. Pre každý z 10 prospektov:
   - find("[Firma] draft row in the drafts list")
   - klik na výsledok → otvorí sa compose dialóg s pripraveným textom
   - find("Send button (Odoslat) in the compose dialog")
   - klik na Send
   - počkaj 90 sekúnd (9× wait 10s) pred ďalším

5. Po každom úspešnom odoslaní zapíš do Excelu:
   - Status = "Odoslané"
   - Posledný kontakt = dnešný dátum vo formáte DD.MM.YYYY

PRAVIDLÁ:
- Maximálne 10 mailov za jeden beh
- Drž 90-sekundovú pauzu medzi mailmi - inak Gmail flagne účet
- Pri chybe odoslania (napr. Send button nezobrazený) preskoč daný mail, pokračuj ďalším
- NEPOSIELAJ duplicitne - prospekty s "Odoslané" preskoč
- Ak Chrome stratí spojenie - STOP a oznám koľko mailov si stihol odoslať

VÝSTUP NA KONIEC:
Stručný report (max 150 slov):
- Koľko mailov odoslaných a komu (firma + email)
- Či boli nejaké chyby
- Aktuálny stav pipeline: koľko "Odoslané" celkovo vs zostávajúcich "Draft pripravený"

Kontakt pre podpis: Martin Saraka, Appinara s.r.o., appinara.sk, +421 917 566 722
```

---

## TASK 2: Research 20 nových prospektov (Pondelok + Štvrtok 9:00)

**Názov / Task ID:** `appinara-research-prospects`

**Popis:** 2x týždenne - vyhľadať 20 nových SK firiem, urobiť skutočný research a vytvoriť personalizované drafty v Gmaile. **Kvalita > kvantita.** Lepšie 20 draftov, na ktorých niečo skutočne sedí, ako 40 šablónových.

**Cron expression:** `0 9 * * 1,4` (pondelok a štvrtok o 9:00)

**Prompt:**

```
Nájdi 20 nových slovenských firiem ako potenciálnych klientov pre Appinara s.r.o. a priprav pre ne PERSONALIZOVANÉ cold outreach drafty v Gmaile. Kvalita > kvantita.

POVINNÉ ČÍTANIE PRED PRÁCOU:
Najprv Read C:\Users\Martin\Desktop\biznis\OUTREACH-QUALITY-GUIDE.md a aplikuj VŠETKY pravidlá v ňom. Bez toho nezačínaj.

O FIRME:
- Appinara s.r.o. ponúka: AI integrácie a chatboty, moderné weby, e-commerce riešenia, business dashboardy
- Cieľovka: SK SMB, e-shopy, startupy, tradičné biznisy bez webu, zdravotníctvo, gastro, hotely, reality
- Gmail účet: appinarasolutions@gmail.com (mcp__b8da53ea-d193-4dc8-8ab6-fcb866f4d051__create_draft API je naň napojené)
- Tracking Excel: C:\Users\Martin\Desktop\biznis\Appinara_Prospekti_a_Outreach.xlsx (hárok "Prospekti")
- Zakladateľ: Martin Saraka, +421 917 566 722

POSTUP:

1. NÁJDI 20 SK firiem cez WebSearch, rozdelene:
   - 5 e-shopov, 4 zdravotnícke, 3 fitness/wellness, 3 gastro, 3 hotely/penzióny, 2 reality
   - Pre každú: meno, web, validný kontaktný email (overený), lokáciu

2. KONTROLA DUPLICÍT: Načítaj Excel, vylúč firmy ktoré už sú v stĺpci C "Firma" alebo D "Web"

3. RESEARCH PRE KAŽDÚ FIRMU (povinné, ~5-10 min na firmu):
   - WebFetch ich homepage + 1 podstránku (About / Služby / Cenník / Kontakt)
   - WebSearch "[Firma] recenzie" alebo "[Firma] Google reviews" — pozri 2-3 reviews
   - Poznač si do dočasnej premennej:
     * Čo presne predávajú/poskytujú (KONKRÉTNE kategórie, nie "produkty")
     * Tón komunikácie (formálny / kamarátsky)
     * Aký rezervačný / komunikačný kanál používajú (telefón? email? Calendly? widget?)
     * Aspoň 1 reálny pain point z recenzií (alebo z webu — napr. "rezervácia len cez email")
     * Či majú už chat widget / bot (ak áno, **preskoč firmu** — nie je naša cieľovka)
   - Ak nevieš z webu vyťažiť ŽIADNY konkrétny detail → nedávaj draft, len pridaj prospekt do Excelu so statusom "Treba research"

4. NAPÍŠ DRAFT podľa štruktúry z guide (sekcia 3), max 120-160 slov:
   - Subject: konkrétny, o ich biznise — NIE o nás (pozri tabuľku v guide sekcia 4)
   - Body štruktúra:
     * 1 osobná veta s KONKRÉTNYM postrehom z webu/recenzií (nie "krásny produkt")
     * 1 veta — kto som a čo robím
     * 1-2 vety — JEDEN konkrétny nápad naviazaný na bod 1 (nie odrážky 3 features)
     * 1 veta — sociálny dôkaz BEZ vymyslených čísel (pozri guide sekcia 5)
     * 1 veta — jasná CTA
     * Podpis: Martin Saraka, Appinara s.r.o., appinara.sk, +421 917 566 722

5. QUALITY CHECK pred uložením draftu — odpovedz si na 5 otázok z guide sekcia 6.
   Ak by sa mail dal poslať komukoľvek inému v segmente → prepíš.
   Ak je tam vymyslené číslo → odstráň.
   Ak nepreide všetkých 5 → draft NEVYTVOR, len pridaj prospekt do Excelu so statusom "Treba lepší research".

6. Vytvor draft cez mcp__b8da53ea-d193-4dc8-8ab6-fcb866f4d051__create_draft.

7. Pridaj do Excelu:
   - # (auto-increment), Segment, Firma, Web, Email, Telefón, Lokácia
   - Príležitosť pre AI = 1-veta zhrnutie nápadu z draftu
   - Pitch angle = ktorý guide pattern použitý
   - Priorita: Vysoká (našiel som silný hook) / Stredná (priemerný hook) / Nízka
   - Status = "Draft pripravený" (ak mail prešiel quality check) / "Treba lepší research" (ak nie)
   - Poznámky = 2-3 vety s konkrétnymi faktami z researchu (čo predávajú, tón, pain point) — toto je dôležité pre follow-upy

ZÁKAZY (železné):
- Žiadne vymyslené čísla typu "+12%", "+18%", "−40%", "ROI za 6 týždňov"
- Žiadne nedoložené detaily (kapacita, počet pobočiek, podporované jazyky)
- Žiadne klišé otvorenia ("Pri pohľade na X mi napadlo...", "Sledujem X — super traction...")
- Žiadne odrážky s 3 features (• AI bot odpovedá... • Multilingual... • 24/7...)
- Žiadny voľný formulácie typu "krásny produkt", "aktívnu komunitu" bez konkrétneho dôkazu
- Veľké korporácie (Alza, Mall, Tesco, Lidl, FAnn, Notino) — skip
- Salóny — skip (project instruction)
- Čeština — skip, používame slovenčinu

VÝSTUP NA KONIEC:
Report (max 200 slov):
- Počet nájdených prospektov / koľko s draftom / koľko "Treba lepší research"
- Rozdelenie podľa segmentov
- Koľko vylúčených ako duplicity alebo "majú už chatbot"
- 1-2 príklady silných hookov, ktoré si našiel (pre learning)
- Aktuálny pipeline status: počet "Draft pripravený"
```

---

## Ako to nastaviť

1. **V Cowork** otvor side panel / Settings (vpravo hore)
2. Nájdi sekciu **Scheduled Tasks** (alebo cez slash command `/schedule`)
3. Klikni **Create New Task**
4. Skopíruj postupne **Task 1** a potom **Task 2** (Task ID, Cron, Prompt)
5. Approve / Save oba

## Dôležité poznámky

- **App musí byť otvorený** keď úloha beží - inak sa spustí pri ďalšom spustení Cowork
- **Chrome musí byť pripojený** + appinarasolutions@gmail.com prihlásený (u/2)
- **Task 1** beží v Po-Pia 10:00 → cca **50 mailov týždenne** (10 × 5 dní)
- **Task 2** beží Po + Štv 9:00 → **40 nových research-grade prospektov týždenne** (20 × 2). Kvalita > kvantita — predtým 80 bolo príliš a viedlo to k šablónovitým, halucinovaným draftom.
- Pipeline tempo: ~−10 prospektov týždenne (40 research - 50 odoslaných). Ak sa pipeline vyprázdňuje, zvýš research dni na 3× týždenne, NIE počet na deň.

## Sledovanie výsledkov

Excel sa aktualizuje automaticky. Skontroluj 1× týždenne:
- Reply rate (odpovede / odoslané)
- Konverzia na hovor
- Najlepšie segmenty

Po 2-3 týždňoch budeš mať reálne dáta na vyladenie šablón a fokusu.

---

*Vygenerované automaticky | 22.05.2026*
