# Task #3: Follow-up Sequence (Po-Pia o 11:00)

**Toto je tretia scheduled task** pre Appinara cold outreach automatizáciu. Pridaj ju rovnakým spôsobom ako predchádzajúce dva tasky (cez Cowork UI - Settings/Schedule).

---

## Parametre

**Task ID:** `appinara-followup-sequence`

**Description:** Po-Pia o 11:00 - automatický 3-stupňový follow-up sequence (po 4, 9, 14 dňoch) pre prospektov ktorí neodpovedali na pôvodný cold mail

**Cron expression:** `0 11 * * 1-5`

(Beží 1 hodinu po daily-send, aby sa nezhromaždili. daily-send je o 10:00, follow-up o 11:00.)

---

## Celý PROMPT (skopíruj do task creation dialógu)

```
Spustenie 3-stupňového follow-up sequence pre Appinara cold outreach. Pred odoslaním follow-upu vždy skontroluj či prospekt už neodpovedal.

GMAIL: appinarasolutions@gmail.com (Chrome u/2)
GMAIL API: mcp__b8da53ea-d193-4dc8-8ab6-fcb866f4d051__* (search_threads, create_draft - DRAFT API je napojené na tento účet)
EXCEL: C:\Users\Martin\Desktop\biznis\Appinara_Prospekti_a_Outreach.xlsx (hárok "Prospekti")
DNES: použi today = date.today()

==============================================
KROK 1: Identifikácia kandidátov na follow-up
==============================================
Načítaj Excel cez openpyxl. Pre každý riadok (od 2):
- Stĺpec K = Status
- Stĺpec L = Posledný kontakt (datum DD.MM.YYYY)
- Stĺpec N = Pôvodné odoslané (datum DD.MM.YYYY)
- Stĺpec E = Email
- Stĺpec C = Firma

Vytvor 3 zoznamy kandidátov:

A) FU1 kandidati (po 4-8 dňoch):
   - Status == "Odoslané"
   - days_since_original = today - N >= 4 a <= 8

B) FU2 kandidati (po 9-13 dňoch):
   - Status == "FU1 odoslané"
   - days_since_original >= 9 a <= 13

C) FU3 kandidati (po 14+ dňoch - breakup):
   - Status == "FU2 odoslané"
   - days_since_original >= 14 a <= 21

==============================================
KROK 2: Pre každého kandidáta - check reply
==============================================
Pre KAŽDÉHO kandidáta z A/B/C:
- search_threads s query: "from:[prospect_email] newer_than:30d"
- AK našiel thread (prospect odpísal):
  * Zmeň Status v Exceli na "Odpoveď"
  * Posledný kontakt = today
  * Do Poznámky pridaj: "Odpovedal {dátum}"
  * SKIP follow-up
- AK nenašiel → KROK 3

==============================================
KROK 3: Vytvor follow-up draft (reply to thread)
==============================================
Pre každého kandidáta čo NEODPOVEDAL:

1) Nájdi pôvodný thread:
   - search_threads s query: "to:[prospect_email] from:me"
   - Vezmi najnovší thread, získaj threadId a messageId

2) create_draft s replyToMessageId=messageId, telo podľa stupňa:

PRE FU1 (Subject: Re: [pôvodný subject]):
"Ahoj,

len krátky bump k pôvodnému mailu - chápem že máte plný kalendár.

Ak by ste sa chceli pozrieť na konkrétny nápad pre [Firma], stačí napísať 1-2 vety a dohodneme si 15-min hovor.

Ak vás to teraz nezaujíma, žiaden problém - len napíšte 'nie teraz' a nebudem otravovať.

Pekný deň,
Martin Saraka
Appinara s.r.o.
appinara.sk | +421 917 566 722"

PRE FU2:
"Ahoj,

ešte jeden krátky pokus - potom prestanem otravovať :)

Krátka case study z minulého mesiaca: nasadili sme AI chatbota pre slovenskú firmu s veľmi podobným profilom ako [Firma]. Výsledky za prvý mesiac:

• 247 nových leadov zachytených 24/7
• -62% času na rutinný customer service
• +18% konverzia z dopytu na klienta
• ROI dosiahnutý za 6 týždňov

Toto by mohlo fungovať aj pre vás. 15-min hovor a poviem konkrétne ako.

S pozdravom,
Martin Saraka
Appinara s.r.o."

PRE FU3 (BREAKUP):
"Ahoj,

zdá sa, že to nie je dobrý timing - úplne to chápem.

Posledná otázka a potom prestanem otravovať. Pomôže mi vedieť kam s [Firma] - stačí jednoslovne:

A) 'Nie teraz, ozvi sa za 6 mesiacov' → poznačím si a budem ticho
B) 'Nezaujíma ma to' → vymažem z databázy, nikdy o tom nepočujete
C) 'Pošli mi info na email' → pošlem 1-page summary, žiadne hovory
D) 'Spravme si 15 min hovor' → vyberte si termín

Vážim si váš čas. Či už A, B, C alebo D - vďaka za odpoveď.

Pekný deň,
Martin Saraka
Appinara s.r.o.
appinara.sk | +421 917 566 722"

==============================================
KROK 4: Odošli drafty cez Chrome
==============================================
- Over Chrome cez mcp__Claude_in_Chrome__list_connected_browsers
- Ak Chrome nie je pripojený - STOP, len drafty zostali v Gmail
- Inak:
  * Otvor https://mail.google.com/mail/u/2/#drafts
  * Pre každý vytvorený FU draft (max 15 za beh):
    - find("[Firma] draft row")
    - klik
    - find("Send button Odoslat")
    - klik Send
    - počkaj 90s (9× wait 10s)
  * Po Send aktualizuj Excel:
    - Status: "Odoslané" → "FU1 odoslané" (resp. FU1→FU2, FU2→FU3 odoslané (breakup))
    - Posledný kontakt: today

==============================================
PRAVIDLÁ
==============================================
- MAX 15 follow-upov / beh
- 90s pauza medzi sendmi
- Pri chybe pre prospekta - skip, pokračuj
- NIKDY nepošli FU niekomu kto odpovedal (reply-check pred každým)

==============================================
VÝSTUP
==============================================
Report (max 200 slov):
- Počet kandidátov v A, B, C
- Koľko odpovedalo (skip)
- Koľko FU odoslaných (rozdelenie FU1/FU2/FU3)
- Konkrétny zoznam komu išiel FU
- Chyby
- Pipeline counters z Excelu (Odoslané / FU1 / FU2 / FU3 / Odpoveď / Klient)
```

---

## Ako to pridať (rovnako ako predchádzajúce 2)

1. Otvor Cowork → Settings / Scheduled Tasks
2. Klikni **+ New Task** (alebo "Create")
3. Vyplň:
   - **Task ID:** `appinara-followup-sequence`
   - **Description:** (skopíruj z hora)
   - **Cron:** `0 11 * * 1-5`
   - **Prompt:** skopíruj celý blok kódu vyššie
4. Save / Approve

---

## Po pridaní - 3 aktívne tasky pre Appinara

| Task | Cron | Kedy | Čo robí |
|------|------|------|---------|
| `appinara-daily-send` | `0 10 * * 1-5` | Po-Pia 10:00 | Odošle 10 mailov z pipeline |
| `appinara-followup-sequence` | `0 11 * * 1-5` | Po-Pia 11:00 | Pošle FU pre tých čo neodpovedali |
| `appinara-research-prospects` | `0 9 * * 1,4` | Po+Štv 9:00 | Nájde 40 nových prospektov + drafty |

---

## Štatistika - čo to znamená v praxi

**Týždenne** (po nábehu cca 2 týždne):

- Pôvodné cold maily: **50/týždeň**
- Follow-up #1: cca **35-40/týždeň** (z 50 odoslaných pred 4 dňami)
- Follow-up #2: cca **25-30/týždeň**
- Follow-up #3 (breakup): cca **15-20/týždeň**

**Celkový mail traffic: ~125-150/týždeň** z appinarasolutions@gmail.com

**Reply rate očakávanie:**
- Iba 1. mail: 8-15% reply
- + Follow-up sekvencia: **20-35% reply rate** (2-3x viac!)
- = 10-17 odpovedí/týždeň
- = 3-6 hovorov dohodnutých/týždeň
- = 1-3 noví klienti/mesiac

---

## DÔLEŽITÉ - Sleduj Gmail reputáciu

Pri 125-150 mailov týždenne z `@gmail.com` účtu **bude Gmail flagovať**. Toto je dôvod prečo by si mal **rýchlo prejsť na Google Workspace** (`martin@appinara.sk` alebo `info@appinara.sk`).

Cena: 6€/mesiac za Workspace Basic, ochráni ti to celý biznis.

---

*Vygenerované 22.05.2026 | Appinara s.r.o.*
