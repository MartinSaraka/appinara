# Outreach Quality Guide

Tento dokument je **master referencia** pre prípravu cold outreach mailov pre Appinara. Aplikuje sa pri každom `appinara-research-prospects` behu (aj pri ručnom generovaní draftov).

Cieľ: posielať maily, ktoré vyzerajú **ako od človeka, ktorý naozaj pozrel ich web** a **navrhol to, čo im reálne pomôže** — nie ako merge dokument, ktorý na každý problém odpovie chatbotom.

---

## 0. Čo je nové vo v3 (a prečo)

**Problém v2:** všetkých 5 šablón malo výbornú štruktúru, ale končilo pri tom istom: *"postavil by som vám asistenta/bota"*. Aj vtedy, keď bot nebol správna odpoveď.

Dôkaz z vlastného trackera — reálne poznámky z researchu vs. čo draft ponúkol:

| Firma | Čo research zistil | Čo draft ponúkol | Čo mal ponúknuť |
|---|---|---|---|
| Rehabko | Prihlášky na kurzy cez **Google Forms**, žiadny rezervačný systém | „asistent, ktorý roztriedi dopyt" | Rezervačný modul |
| Penzión Zuberec | **Web z r. 2014**, rezervácia iba tel./mail | „AI asistent na web" | Web s rezerváciou |
| Amawell | **5 tel. čísel a 3 maily** na kontakte, zákazník nevie kam | „asistent, ktorý nasmeruje" | Opraviť kontakt/formulár |
| Quo Vadis | Týždenné menu sa **ručne prepisuje** | „asistent, ktorý odpovie na menu" | Automatizácia obsahu |

4 z 10 draftov ponúkali AI na problém, ktorý AI nerieši. Zákazník to cíti — a je to presne ten dôvod, prečo mail znie ako šablóna, aj keď je postrehovo dobrý.

**Zmeny vo v3:**
1. Nové pravidlá **F** a **G** (§1) — ponuka sa vyberá podľa problému; priznaj, keď AI netreba.
2. Nová **diagnostická vrstva** (§3) — signál → ktorá z troch ponúk sedí.
3. Nová **predstavovacia veta** (§4) — nesie celý rozsah, nie jeden produkt.
4. Nový **P.S. s otvorenými dverami** (§4) — dá im možnosť ozvať sa s niečím iným.
5. **Rotácia CTA** (§7) — koniec identických záverov.
6. **Pravidlá ľudského jazyka** (§8).

---

## 0.1 Čo hovoria reálne odpovede (audit 01.09.2026)

Prvý audit postavený na **skutočných odpovediach prospektov**, nie na dojme. Vzorka: 591 oslovených firiem, 37 odpovedí (6,3 %), prečítaných 24 vlákien.

**Dobrá správa:** 6,3 % reply rate je nad priemerom cold mailu. Maily sa čítajú. Štruktúra a personalizácia fungujú — máme na to priame dôkazy:

- **Vaše Reality:** *„presne tento postreh som si všimol asi dva dni dozadu aj ja"* — trafený postreh o duplicitných kartách na titulke.
- **Penzión pod Guglom:** *„Už Váš prvý email nás zaujal"* — postreh o chýbajúcej anglickej verzii.
- **Elite Move:** cold mail → podpísaná zmluva a prebiehajúca spolupráca.
- **Formery Studio** odpísala doslova *„nie"* — presne ako jej to ponúkla opt-out veta. Opt-out funguje a šetrí obom stranám čas.

**Zlá správa — dve príčiny, obe opraviteľné:**

**1. Nesprávny postreh (→ pravidlo H).** Dvakrát sme napísali firme o probléme, ktorý nemala:

| Firma | Čo sme tvrdili | Čo odpísali |
|---|---|---|
| Hravosdrevom.sk | chýba tlačidlo na kúpu | *„prepromtujte si agenta, že chýba tlačidlo free shipping navrhuje ale že chýba tlačidlo kúpiť/vložiť do košíka nerozpoznal :)"* + odkaz na § 116 zák. 452/2021 |
| Brezka.sk | chýbajú varianty/veľkosti | *„v tom prípade to máte zle pozreté :), pri každej deke, topánke, oblečení, ohlávke je možnosť zvoliť si variantu :)"* |

Hravosdrevom je jediný prípad, kedy nás niekto explicitne identifikoval ako AI — a stalo sa to práve preto, že postreh bol nesprávny. **Chybný detail nás prezradí spoľahlivejšie než štýl písania.**

**2. Ponúkame, čo už majú (→ pravidlo I).** Najčastejší pomenovaný dôvod odmietnutia:

- **Slovak Pub:** *„Mame to osetrene a vyhovuje nam system rezervacii cez Guestplan."*
- **MoonLife:** *„my už máme svoj online systém a klientky majú vo svojej peňaženke svoju permanentku."*
- **EfectFit:** *„Túto tému už máme v riešení s naším dodávateľom."*
- **Stevula:** *„na niečom podobnom práve pracujem."*

**3. Odmietnutia sú jednoslovné.** *„nie"*, *„Nie teraz"*, *„nemáme záujem"*. Nikto sa nedostane do tretieho odseku. Preto skracujeme na 110 slov (§4) — nie preto, že by dĺžka urážala, ale preto, že sa nečíta.

**Čo z auditu NEvyplýva:** že máme byť menej osobní alebo menej konkrétni. Presný opak — všetky štyri pozitívne reakcie prišli na konkrétny postreh. Krátime balast, nie konkrétnosť.

---

## 1. Železné pravidlá (neporušiteľné)

**A. Žiadny detail bez zdroja.** Ak v drafte tvrdím "kapacita 14 lôžok", "5 pobočiek", "otvorené do 22:00" — tieto čísla musia pochádzať z konkrétnej stránky, ktorú som čítal. Inak ich tam nedávam.

**B. Žiadne vymyslené %.** Veta typu "+18% objednávok", "−40% času servisu", "ROI za 6 týždňov" je v koši, pokým nemáme reálnu case study, ktorú vieme menom doložiť. Sociálny dôkaz sa robí inak (viď §6).

**C. Žiadne klišé otvorenia.** Zakázané začiatky:
- "Pri pohľade na X mi napadlo..."
- "Pozrel som si váš web a vidím, že máte krásny produkt..."
- "Sledujem X — super traction..."
- "Pomáhame slovenským firmám..."

**D. Jedna konkrétna observácia, jeden nápad.** Nie tri odrážky s tromi features. Jedna vec, ktorú som si naozaj všimol → jeden nápad, ktorý to rieši. *(Pozor: P.S. v §4 nie je výnimka z tohto pravidla — vysvetlenie tam.)*

**E. Subject je o ich biznise, nie o nás.** Zlé: "{Firma}: AI chatbot za 3 týždne". Dobré: "{konkrétny problém alebo postreh z ich webu}".

**F. Ponuku vyberá problém, nie šablóna.** ⭐ NOVÉ

Appinara robí **tri veci** (viď appinara.sk/riesenia):

1. **Lead follow-up a triedenie dopytov** — 2–4 týždne
2. **AI chatbot / prvý kontakt** — 1–3 týždne
3. **Weby, aplikácie a interné nástroje** — 2–6 týždňov

Pred písaním tela mailu **musím vedieť povedať, ktorá z tých troch sedí a prečo** (§3). Ak mi z researchu vychádza web a ja aj tak napíšem chatbota, mail je zlý — aj keď je pekne napísaný.

**G. Priznaj, keď AI netreba.** ⭐ NOVÉ

Náš vlastný web hovorí: *"AI nemá zmysel všade."* V cold maile je to najsilnejšia veta, akú máme — každý im píše, že potrebujú AI. Ak je správna odpoveď „opravte si kontaktnú stránku" alebo „nasaďte rezervačný formulár", **napíšem to**. Chatbot nad rozbitým procesom je drahšia verzia toho istého problému.

Formulácie, ktoré fungujú:

- „U vás by som ale nezačal umelou inteligenciou."
- „Čakali by ste, že vám sem navrhnem chatbota. Ale toto sa dá vyriešiť lacnejšie."
- „Nie je to AI projekt."

**H. Postreh musí byť doložený konkrétnym miestom na ich webe.** ⭐ NOVÉ 01.09.2026

Otvárací postreh aj pomenovaná medzera musia pochádzať z **konkrétnej podstránky, ktorú som čítal** — a musím vedieť povedať ktorej. Nie „pôsobí to, že...", nie dojem z homepage, nie dedukcia z toho, čo na webe *nevidím*.

**Pravidlo pre „chýba X":** tvrdenie, že niečo na webe chýba (tlačidlo, varianta, jazyk, cenník, rezervácia), sa smie použiť **len ak som si prešiel stránku, kde by to malo byť, a nenašiel som to tam**. Ak sa mi web nenačítal celý, ak je JS-renderovaný, alebo ak si nie som istý → tvrdenie o chýbaní **nepoužijem** a mail postavím na tom, čo som naozaj videl. Pri pochybnosti radšej firmu odložím so statusom „Treba research".

Prečo je to železné pravidlo a nie odporúčanie — viď §0.1. Nesprávny postreh je horší než žiadny mail: zabije dôveryhodnosť v prvej vete a je to presne ten moment, keď nás príjemca identifikuje ako stroj.

**I. Over, či to už nemajú — pred písaním, nie po odpovedi.** ⭐ NOVÉ 01.09.2026

Najčastejší dôvod odmietnutia v našich dátach nie je „nezaujíma nás", ale **„to už máme"**. Každý taký mail je premrhaný kontakt, ktorý sa už nedá zopakovať.

Pred draftom musím explicitne overiť, či firma nemá už nasadené presne to, čo jej idem ponúknuť:

| Ak chcem ponúknuť | Musím overiť |
|---|---|
| Chatbot / prvý kontakt | chat widget na webe (aj JS-renderovaný), FB Messenger button, „napíšte nám" bublina |
| Rezervačný systém | Reservio, Bookio, iSport, Guestplan, Booking widget, vlastný kalendár — aj na podstránke, nielen na homepage |
| Triedenie dopytov | CRM v pätičke, „ticket" systém, formulár s automatickou odpoveďou |
| Web / e-shop | či web nie je práve v prestavbe (oznam, staging odkaz, „pripravujeme") |

Ak to už majú → **SKIP**, riadok do Excelu so statusom „Treba research" a poznámkou čo majú. Nie sme ich cieľovka a nemá zmysel míňať na nich kontakt.

---

## 2. Povinný research pred draftom (5–10 min na prospekt)

Pred napísaním tela mailu **musím** prejsť aspoň tieto 3 zdroje a poznačiť si fakty:

1. **Ich web** (homepage + About + 1 podstránka relevantná pre use case)
   - Čo presne predávajú/poskytujú? (konkrétne kategórie, nie "produkty")
   - Kto píše texty? Tón — formálny / kamarátsky / korporátny?
   - Aké tlačidlá / CTAs majú? (Rezervovať? Volajte nás? Eshop?)
   - **Na čom web beží?** (Squarespace / Shopify / Magento / WordPress / vlastné) — určuje, či je web reálna ponuka
   - **Ako starý web vyzerá?** Dá sa upravovať? Je responzívny?
   - Je tam chat widget? Booking systém? Aký?
   - **Kde niekto niečo prepisuje ručne?** (menu, prihlášky, miery, objednávky) — najsilnejší signál pre automatizáciu
   - Ktoré jazyky reálne podporujú?

2. **Google reviews / recenzie** (Google Maps, Heureka, Booking pre hotely)
   - Aký je najčastejší pain point? (čakali sme dlho / nedvíhali telefón / neodpovedali na email / komplikovaná rezervácia)
   - Aké pozitíva opakujú zákazníci? (toto sa dá zrkadliť v opening line)

3. **Sociálne siete / aktuálny obsah** (FB / IG / LinkedIn — posledných 5 postov)
   - Robia akcie, eventy, nový produkt? (timely hook)
   - Sú aktívni? (Ak nie postujú 6 mesiacov, je to červená vlajka pre prioritu)

4. **⭐ POVINNÝ KROK: „Nemajú to už?"** (pravidlo I) — NOVÉ 01.09.2026

   Posledný krok researchu, tesne pred diagnostikou §3. Prejdem podstránku, kde by riešenie bolo, a **pomenujem, čo tam je** — nie čo tam nie je.

   - Chystám sa ponúknuť **bota**? → hľadám chat bublinu, Messenger button, „napíšte nám" widget. Pozor: widgety sa načítavajú cez JS, textová extrakcia webu ich nemusí zachytiť. Ak si nie som istý, radšej **SKIP**.
   - Chystám sa ponúknuť **rezerváciu**? → hľadám Reservio, Bookio, iSport, Guestplan, Booking widget, vlastný kalendár — na podstránke „Rezervácia" / „Objednať sa" / „Cenník", nie len na homepage.
   - Chystám sa ponúknuť **web**? → overím, či práve nie je v prestavbe (oznam, „pripravujeme", staging odkaz).

   **Do Poznámok píšem výsledok tejto kontroly vždy**, aj keď je negatívny: *„Bez chat widgetu — overené na /kontakt aj /cennik."* Bez tejto vety draft nevzniká.

**Poznámky z researchu si píšem do stĺpca "Poznámky" v Excel** — aspoň 2–3 vety s konkrétnymi faktami. To je dôkaz, že research prebehol, a pomôže to vo follow-upoch.

> **Pravidlo:** prospect s prázdnymi Poznámkami **nemá draft**. Bez poznámok neviem doložiť rule A ani vybrať ponuku podľa §3.

> **Pravidlo (01.09.2026):** ku každému tvrdeniu typu „chýba X" si do Poznámok zapíšem **URL podstránky, kde som to overoval**. Ak ju neviem uviesť, tvrdenie do mailu nejde (pravidlo H).

---

## 3. ⭐ Diagnostika: ktorá z troch ponúk sedí?

Toto je **nový povinný krok** medzi researchom a písaním. Signály sú prevzaté z appinara.sk/riesenia — čiže sľubujeme len to, čo naozaj robíme.

### → Ponuka 1: Lead follow-up a triedenie dopytov *(2–4 týždne)*

**Signály:**

- Dopyty prichádzajú do viacerých schránok / na viac čísel
- Kontaktná stránka má viac ciest a žiadnu logiku
- Prvá odpoveď trvá viac ako 24 hodín
- Reporty o leadoch robí niekto ručne v Exceli
- Dopyty chodia cez IG DM aj mail aj formulár

**Čo sľubujem:** centrálny prehľad dopytov, automatické potvrdenie a follow-up, týždenný report.
**Stack:** Webhooks, OpenAI, n8n / Make, Pipedrive / HubSpot, PostgreSQL

### → Ponuka 2: AI chatbot / prvý kontakt *(1–3 týždne)*

**Signály:**

- Tím odpovedá na tie isté otázky dookola (**majú FAQ stránku** = silný signál)
- Mimo pracovných hodín nereaguje nikto
- Web má veľa návštev, ale málo dopytov
- Zákazník potrebuje **poradiť pred kúpou** (veľkosť, typ pleti, vhodnosť produktu)
- Produkty sa nedajú nájsť tak, ako ich zákazník hľadá

**Čo sľubujem:** trénovaný na ich materiáloch, pokrýva prvý kontakt 24/7, eskalácia na človeka so zhrnutím.
**Stack:** OpenAI, Vue/Nuxt widget, Edge functions, Webhooks, Slack/Telegram

> ⚠️ **Ak už chat widget majú → nie sú cieľovka.** SKIP.

### → Ponuka 3: Weby, aplikácie a interné nástroje *(2–6 týždňov)*

**Signály:**

- Web je pomalý, starý, alebo si ho nevedia sami upraviť
- **Chýba samotný digitálny základ** — žiadna rezervácia, žiadny e-shop, žiadny systém
- **Google Forms / Excel / poznámka k objednávke** ako náhrada za softvér
- Niekto ručne prepisuje obsah, ktorý by sa mal generovať
- Excel tabuliek na koordináciu je viac ako členov tímu
- Reportovanie pre majiteľa zaberie 2+ hodiny týždenne

**Čo sľubujem:** rýchly responzívny web s SEO základom, vlastná interná appka, dashboard so živými metrikami.
**Stack:** Nuxt 3, Vue 3, Tailwind, PostgreSQL, Supabase, Vercel

### Rozhodovacie pravidlo

> **Ak firme chýba základ (rezervácia, formulár, funkčný web) → Ponuka 3, aj keby bol chatbot „sexi".**
> AI sa nasadzuje **na fungujúci proces**, nie namiesto neho. Toto je rule G v praxi.

**Kontrolná otázka:** *„Keby som im postavil bota, na čo by som ho napojil?"* Ak odpoveď je „na nič, nemajú systém" → je to Ponuka 3.

---

## 4. Štruktúra dobrého mailu (max 110 slov) ⭐ ZMENA 01.09.2026

> **K dĺžke:** strop je **110 slov** — od oslovenia po opt-out vetu, **bez podpisu**. Predtým to bolo 180 a bolo to príliš.
>
> Dôvod je v §0.1: odmietnutia, ktoré nám chodia, sú jednoslovné — *„nie"*, *„Nie teraz"*. Do tretieho odseku sa nedostane nikto. Každá veta navyše je veta, ktorú nikto neprečíta, a zároveň ďalšia príležitosť napísať niečo nepresné.
>
> **110 je strop, nie cieľ.** Ak mail povie všetko na 80 slovách, je hotový. Nikdy nepridávaj vetu preto, aby si trafil rozsah.
>
> **Čo sa skracuje ako prvé:** P.S. (viď nižšie — je teraz výnimka, nie default), sociálny dôkaz (bol vždy nepovinný), a druhá veta ocenenia. **Čo sa neskracuje nikdy:** konkrétnosť postrehu. Krátime balast, nie obsah.

```
Predmet: [otázka alebo postreh konkrétne o ich biznise, 5–9 slov]

Dobrý deň [meno ak ho mám, inak nič],

[1 — OTVORENIE S OCENENÍM, POTOM MEDZERA (1–2 vety, od 01.09.2026 kratšie):
     Začni jednou KONKRÉTNOU vecou, ktorú robia dobre — nie „pekný web", ale niečo,
     čo si naozaj videl (šesť jazykových mutácií, aktívny blog, poctivé fotky produktu,
     rýchla odozva v recenziách). Až potom pomenuj medzeru — a podaj ju ako škoda /
     príležitosť, nie ako chybu: „Máte X spravené poctivo — o to viac je škoda, že Y."
     NIE „máte chybu v Y" / „Y je zle". Detail (ocenenie aj medzera) musí byť taký,
     že by si ho bez čítania ich webu nezískal. Toto je warmth vrstva — viď §8.5.]

[2 — PREDSTAVENIE. Presne táto veta, nemeniť rozsah:
     "V Appinare staviame weby, aplikácie a AI integrácie pre slovenské firmy —
      najčastejšie tam, kde sa medzi zákazníkom a objednávkou stráca čas."
     (Druhá polovica sa smie prispôsobiť ich situácii, prvá NIE.
      ⭐ 01.09.2026: pri tesnom limite sa druhá polovica smie aj VYNECHAŤ —
      "V Appinare staviame weby, aplikácie a AI integrácie pre slovenské firmy."
      Prvá polovica nesie rozsah ponuky, a to je jej jediná povinná úloha.)]

[3 — JEDEN konkrétny nápad, vybraný podľa §3. Nie zoznam features.
     Ak to nie je AI — povedz to nahlas (rule G).
     Ak vieš rozsah z §3, smieš uviesť realistický čas ("pár týždňov").]

[4 — Sociálny dôkaz BEZ vymyslených čísel (§6). Nepovinné — radšej nič ako výmysel.]

[5 — CTA, jedna otázka, z rotácie v §7.]

S pozdravom,
Martin Saraka
Appinara s.r.o. | appinara.sk | +421 917 566 722

P.S. [OTVORENÉ DVERE — viď nižšie]
```

### Prečo práve tá predstavovacia veta

Stará veta bola: *„v Appinare staviame AI asistentov pre menšie slovenské firmy."*

Tá jedna veta bola hlavný zdroj škatuľkovania. Príjemca po nej vie, že sme „tí od chatbotov" — a všetko ďalšie číta cez túto optiku. Aj keby sme mu v treťom odseku ponúkli web, v hlave mu ostane bot.

Nová veta drží **firemný hlas** („staviame"), ale otvára **celý rozsah** hneď na začiatku. Druhá polovica („najčastejšie tam, kde sa medzi zákazníkom a objednávkou stráca čas") sa smie prispôsobiť: *„...kde niekto prepisuje niečo, čo by nemusel"*, *„...kde sa dopyty strácajú medzi schránkami"*.

### ⭐ P.S. — otvorené dvere

**Načo to je:** mail navrhuje jednu vec. Ale my vieme tri. P.S. dá príjemcovi možnosť ozvať sa s tým, čo ho reálne tlačí — aj keď som netrafil.

**Ako to napísať:** 2–3 **symptómy ich problému**, nie názvy našich služieb. Konkrétne, ľudsky.

✅ Dobré:

> P.S. Ak vás viac než rezervácie tlačí niečo iné — že sa web ťažko upravuje, alebo že dopyty chodia do troch schránok — pokojne napíšte to. Robíme aj tie veci.

> P.S. Keby bol pre vás akútnejší iný problém — pomalý web, objednávky, ktoré niekto prepisuje ručne — napíšte mi to rovno, vieme sa baviť aj o tom.

❌ Zlé (= servisné menu, porušuje ducha rule D):

> P.S. Ponúkame: AI chatboty • webové stránky • mobilné aplikácie • automatizácie • dashboardy • integrácie

**Prečo to neporušuje rule D:** rule D chráni **pitch** — telo mailu má stále jednu observáciu a jeden nápad. P.S. nie je druhý pitch, je to **pozvánka odpovedať**. Preto je vizuálne oddelené, preto sú to ich symptómy a nie naše produkty, a preto sú max. 2–3 a v jednej vete.

**⭐ ZMENA 01.09.2026 — P.S. je odteraz výnimka, nie default.** Pri strope 110 slov sa P.S. do mailu spravidla nezmestí, a je to prvá vec, ktorá ide von. Opt-out veta ostáva vždy (je krátka a dáva príjemcovi kontrolu), P.S. len vtedy, keď je preň naozaj miesto **a** keď si nie som istý diagnostikou §3 — teda keď reálne potrebujem otvoriť dvere inej téme. Ak je nápad trafený, P.S. len riedi.

**Kedy P.S. vynechať:** kedykoľvek je mail nad 110 slov, alebo ak je hlavný nápad tak presne trafený, že alternatíva pôsobí neisto.

### Opt-out veta ⭐ NOVÉ (04.08.2026)

Každý cold draft (obe vetvy) končí krátkou opt-out vetou — dáva príjemcovi kontrolu a je to fér aj právne čistejšie:

> „Ak vám takéto maily nesedia, stačí krátke nie a už sa neozvem."

**Umiestnenie:** buď ako posledná veta P.S., alebo samostatný posledný riadok — nikdy nie oboje naraz s dlhým P.S. Ak by koniec mailu pôsobil preplnene (CTA + P.S. + opt-out), opt-out má prednosť pred P.S. Tón podľa §8.5: vecné odovzdanie kontroly, žiadna servilnosť („ospravedlňujem sa, že ruším" je zakázané aj tu).

---

## 5. Predmet maila — vzory podľa segmentu

| Segment | Zlý predmet (klišé) | Dobrý predmet (konkrétny) |
|---|---|---|
| E-shop | "{Firma}: nápad ako odbremeniť zákaznícky servis" | "{Firma} — otázky o veľkostiach po 22:00" |
| Zubná klinika | "Rezervácie aj o 22:00 bez práce navyše" | "{Firma}: telefón pre rezerváciu — alternatíva?" |
| Reštaurácia | "Ako sme inej reštaurácii zvýšili objednávky o 18%" | "Rezervácie na {Firma} — cez Instagram?" |
| Hotel/penzión | "Investor-ready web + AI demo" | "{Firma}: viacjazyční hostia po sezóne" |
| Reality | "AI lead qualifier pre maklérov" | "{Firma}: kvalifikácia záujemcov pred obhliadkou" |

Pravidlo: ak by predmet sedel na **akúkoľvek** firmu v rovnakom segmente, je príliš generický.

> **Nové:** predmet nesmie obsahovať slovo „AI" ani „chatbot", pokým to nie je ich vlastné slovo z ich webu. Predávame vyriešený problém, nie technológiu.

---

## 6. Sociálny dôkaz bez výmyslov

**Zakázané:**

- "U podobných klientov sme videli +12–18%..."
- "247 nových leadov za prvý mesiac..."
- "ROI dosiahnutý za 6 týždňov..."

**Povolené:**

- Konkrétny named klient (s permission): "Ako ukážka — bot, ktorý beží na webe X, vie..."
- Verejne overiteľné príklady: "Booking.com to robí podobne — bot odpovie do 30 sekúnd..."
- Vlastný produkt: "Mám demo, ktoré viem vám ukázať za 10 minút na vašom webe."
- **Vlastný blog:** máme 20+ článkov z praxe (realny-cennik-webov-na-slovensku, roi-modernizacie-webu, salon-meri1-pripadovka). Odkaz na relevantný článok je legitímny dôkaz, že vieme o čom hovoríme — a nevyžaduje hovor.
- Žiadny social proof — radšej nič, ako vymyslená štatistika.

Kým nemáme reálne case studies s permission, sociálny dôkaz nahrádza **konkrétnosť observácie** (§4, bod 1 šablóny) a **kvalita nápadu** (§4, bod 3 šablóny).

---

## 7. ⭐ Rotácia CTA (koniec identických záverov)

**Problém:** každý mail v v2 končil „Viem vám to ukázať... 15 minút, bez prezentácie. Hodí sa vám tento alebo budúci týždeň?" Ak si dvaja prospekti z toho istého mesta maily porovnajú, je to okamžite šablóna.

Vyber **jednu** podľa situácie, nie dokola tú istú:

1. „Hodí sa vám tento alebo budúci týždeň?" *(default, nízke trenie)*
2. „Ukázal by som vám to priamo na vašom webe. Kedy sa vám to hodí?" *(keď mám čo ukázať)*
3. „Ak vás to zaujme, rád vám k tomu poviem viac. A ak nie, vôbec sa nič nedeje — stačí jedno slovo." *(nízky tlak, dobré pre menšie firmy)*
4. „Chcete, aby som poslal, ako by to vyzeralo u vás? Bez hovoru." *(pre tých, čo nechcú call)*
5. „Máte 15 minút budúci týždeň?" *(priame, keď je pitch silný)*
6. „Dáva to u vás zmysel, alebo som mimo?" *(úprimné, prekvapivo funguje)*

**Pravidlo:** nikdy nie tá istá CTA dvakrát v tom istom dennom dávkovaní 10 mailov.

---

## 8. ⭐ Pravidlá ľudského jazyka

Cieľ: aby to znelo ako od človeka, ktorý to postaví — nie od nástroja, ktorý to vygeneroval.

**Rob:**

- Krátke vety. Pokojne aj jednoslovné. („Funguje to. Kým vám hosť volá cez deň.")
- Konkrétne podstatné mená z ICH sveta („uvoľnený kamienok", „miery dieťatka", „prihláška na kurz") — nie „produkt", „zákazník", „proces"
- Priznaj nevýhodu alebo neistotu, keď je reálna („Možno som mimo.", „Nie je to AI projekt.")
- Píš, čo sa STANE, nie čo to JE („vy ráno len potvrdíte" > „automatizované potvrdenie rezervácie")
- Prečítaj nahlas. Ak by si to tak nepovedal do telefónu, prepíš.

**Nerob:**

- Stuhnutý kondicionál v každej vete („Vedel by som postaviť agenta, ktorý by dokázal...") → radšej „U vás by som začal tým, že..."
- Nominalizácie: „zabezpečenie kvalifikácie záujemcov" → „aby makléri nevolali každému"
- Slová, ktoré v hospode nepovieš: „riešenie", „nasadenie", „efektivita", „synergia", „škálovanie", „optimalizácia"
- Superlatívy a hype: „revolučný", „cutting-edge", „game-changer", „ísť s dobou"
- Odrážky v tele mailu (je to list, nie prezentácia)
- Emoji v podpisovej oblasti
- „Bez záväzku", „free audit", „demo zdarma" — devalvuje to ponuku

**Test na „ísť s dobou":** ak sa v maile objaví argument typu *„aby ste išli s dobou"* alebo *„dnes to už má každý"* — vyhoď. Je to argument o nás, nie o nich. Nahraď konkrétnym dôsledkom pre ich biznis (hosť odišiel na Booking, pacient nevie či má prísť, zákazník nenapísal).

---

## 8.5. ⭐ Teplý tón — ocenenie namiesto kritiky

Cieľ: aby príjemcovi po prečítaní napadlo *„tento chlapík si dal záležať a chce mi pomôcť"*, nie *„tento cudzí človek mi vymenoval, čo mám na webe zlé"*. Konkrétnosť zostáva — mení sa **rámovanie**.

**Rob:**

- **Otvor tým, čo robia dobre.** Každý mail má v prvej vete konkrétne, úprimné ocenenie — niečo, čo si naozaj videl. Nie lichôtka („krásny web"), ale postreh („šesť jazykových mutácií a každá poctivo lokalizovaná"). Toto je to, čo otvára dvere.
- **Medzeru podaj ako škoda, nie ako chyba.** „O to viac je škoda, že to nikto nevidí" > „máte to zle nastavené". „Necháva to peniaze na stole" > „strácate zákazníkov". Ten istý fakt, iný pocit.
- **Predpokladaj kompetenciu.** Píšeš zaneprázdnenému majiteľovi, ktorý to vie robiť — len na niečo nemal čas alebo ruky. Nie začiatočníkovi, ktorý spravil chybu. Tón: kolega, čo si všimol, nie audítor, čo píše nález.
- **Zakonči láskavo, nie sebaznevažujúco.** Namiesto „nebudem otravovať" → „ak to teraz nie je na programe, úplne to chápem — stačí slovo". Dáva im to voľnosť odmietnuť bez zlého pocitu, čo paradoxne zvyšuje šancu na odpoveď.
- **Dopraj im úspech aj bez nás.** Keď sedí, pokojne veta typu „nech to spravíte s nami alebo bez nás, [Firme] to pomôže". Úprimný záujem > predajný tlak.

**Nerob:**

- Prehnané lichôtky alebo pochlebovanie („fantastický web!", „ste najlepší v odbore") — znie falošne a devalvuje ocenenie, ktoré je konkrétne.
- Servilnosť („ospravedlňujem sa, že ruším", „viem, že si ma nevšimnete") — teplo nie je poníženosť. Píšeš ako rovný rovnému.
- Kritiku bez ocenenia. Ak mail otvára medzerou bez toho, aby najprv niečo ocenil → prepíš. Poradie je: najprv čo funguje, potom čo je škoda.
- Falošnú vrelosť („dúfam, že sa máte skvele!" bez kontextu) — teplo je v konkrétnosti a rešpekte, nie v prázdnych frázach.

**Test:** predstav si, že príjemca je tvoj známy, ktorého si stretol na akcii. Povedal by si mu to takto do očí? Ak by to znelo ako kritika jeho práce, prepíš. Ak by to znelo ako *„hej, všimol som si u teba fajn vec — a mám k tomu nápad"*, je to dobré.

---

## 9. Quality check pred odoslaním (9 otázok) ⭐ ROZŠÍRENÉ 01.09.2026

Pred kliknutím Send si prejdem mail a odpoviem na týchto 9. *(Pozor: do 31.08.2026 ich bolo 7 — otázky 8 a 9 pribudli po audite reálnych odpovedí, §0.1.)*

1. **Konkrétnosť:** Ak by som odstránil meno firmy, dal by sa mail poslať komukoľvek inému v segmente? Ak áno → prerobiť.
2. **Overiteľnosť:** Je v maily nejaký fakt o firme, ktorý som si nepotvrdil z webu? Ak áno → odstrániť.
3. **Číselné tvrdenia:** Sú v maily nejaké %, časové úspory, ROI hodnoty? Ak nie sú doložené → odstrániť.
4. **⭐ Správna ponuka:** Vybral som ponuku podľa §3, alebo som defaultne napísal chatbota? Keby som im postavil bota, na čo by som ho napojil?
5. **⭐ Rozsah:** Vie príjemca z mailu, že robíme aj weby a appky, nie len AI? (predstavovacia veta + P.S.)
6. **Tón:** Znie to ako od človeka, alebo ako od marketing nástroja? Skús nahlas — ak ti je trápne to čítať, prerobiť.
   **⭐ Teplo (§8.5):** Otvára mail konkrétnym ocenením toho, čo robia dobre, PRED medzerou? Je medzera podaná ako škoda/príležitosť, nie ako chyba? Povedal by som to tak známemu do očí? Ak mail iba vymenúva, čo je zle → prepíš.
7. **CTA:** Je tam **jedna** jasná otázka, na ktorú sa dá odpovedať jednou vetou? A je iná ako v predošlom maile dnes?
8. **⭐ Doložený postreh (pravidlo H):** Viem pri KAŽDOM tvrdení o ich webe povedať, na ktorej podstránke som to videl? Ak tvrdím, že im niečo **chýba** — bol som naozaj na stránke, kde by to malo byť? Ak si nie som istý → tvrdenie von, alebo mail von.
9. **⭐ Nemajú to už (pravidlo I):** Ponúkam im niečo, čo už majú nasadené? Overil som chat widget / rezervačný systém / CRM na relevantnej podstránke, nielen na homepage? Ak to majú → SKIP, žiadny mail.

**A na záver kontrola dĺžky:** má telo mailu (bez podpisu) **max 110 slov**? Ak nie, škrtám — najprv P.S., potom sociálny dôkaz, potom druhú vetu ocenenia. Konkrétnosť postrehu sa neškrtá nikdy.

Mail, ktorý neprejde všetkých 9, **neposielame** — radšej žiadny mail ako zlý mail. Reputácia príjemcu (a domény) je dlhodobo cennejšia.

---

## 10. Aplikácia v automatizácii (prepísané 04.08.2026)

Tento guide platí pre **všetkých šesť** scheduled taskov, v oboch vetvách:

| Úloha | Schránka | Beh | Poznámka |
|---|---|---|---|
| appinara-research-prospects | gmail | Po + Štv ~9:00 | AI/chatbot vetva (Ponuky 1–2 z §3) |
| appinara-daily-send | gmail | Po–Pia ~10:00 | max 10 / beh |
| appinara-followup-sequence | gmail | Po–Pia ~11:00 | vetvenie podľa veku — §11 |
| appinara-weby-research | martin@appinara.sk | Ut + Pia ~9:30 | weby/apky vetva (Ponuka 3 z §3) |
| appinara-weby-daily-send | martin@appinara.sk | Po–Pia ~13:00 | **warmup limit — neprekročiteľný** |
| appinara-weby-followup | martin@appinara.sk | Po–Pia ~14:00 | denný limit SPOLOČNÝ s daily send |

Pravidlá naprieč úlohami:

- **Research úlohy:** pred uložením draftu musí prebehnúť §2 (research), §3 (diagnostika) a §9 (quality check). Prospect bez webu alebo bez konkrétneho postrehu → žiadny draft, len riadok so statusom „Email chýba" alebo „Treba research".
- **Vetvu určuje diagnostika §3, nie to, ktorá úloha firmu našla:** vychádza Ponuka 3 (web/apka/rezervácia) → Odosielateľ (stĺpec O) = „appinara.sk"; Ponuka 1 alebo 2 → „gmail". Ak gmail research nájde firmu, ktorej treba web, zapíše ju s O = „appinara.sk" a statusom „Čaká na draft" — research úloha druhej vetvy takéto riadky spracúva PREDNOSTNE, pred hľadaním nových firiem (a naopak).
- **Jedna firma NIKDY nedostane mail z oboch schránok.** Stĺpec O je jediný zdroj pravdy; dedupe pri researchi beží proti CELÉMU Excelu, nie len vlastnej vetve.
- **Schránka martin@appinara.sk má automatický HTML podpis (logo + Appinara s. r. o. + telefón + appinara.sk).** ⭐ NOVÉ 09.08.2026: drafty v tejto schránke NEOBSAHUJÚ textový podpis („S pozdravom, / Martin Saraka / Appinara s.r.o. | appinara.sk | +421 917 566 722") — inak je podpis v maile dvakrát. Telo draftu končí CTA otázkou a riadkom s opt-out vetou; podpis doplní Gmail sám.
- **Odkazy na guide v promptoch úloh VŽDY menom sekcie, nie číslom.** Čísla sekcií sa medzi verziami posúvajú — staršie prompty odkazovali quality check ako „sekcia 6, 5 otázok", potom „7 otázok", od v3.4 má **9 otázok**. Preto sa počet do promptov už nepíše. Správne: „quality check (všetky otázky zo sekcie quality check)", „social proof", „štruktúra mailu".

- **⭐ 01.09.2026 — prompty scheduled taskov treba zosúladiť s v3.4.** Prompty aktuálne uvádzajú „7 otázok" a dĺžku „120-160 slov". Platí **9 otázok** a **max 110 slov**. Kým sa prompty neprepíšu, platí guide — pri konflikte medzi promptom a guidom **vyhráva guide**.

**Poznámka k Excelu:** stĺpec H bol 04.08.2026 premenovaný z „Príležitosť pre AI" na „Príležitosť" — pôvodný názov tlačil research k AI odpovedi. Píšu sa doň aj ne-AI ponuky (web, rezervácia, automatizácia); prompty všetkých úloh sú zosúladené.

Quality > Quantity. Lepšie 5 dobrých draftov denne, ako 10 šablónových.

---

## 11. ⭐ Follow-upy (obe vetvy) — NOVÉ 04.08.2026

Cold mail rieši §1–§9. Follow-up má vlastné pravidlá:

**Železné:**

- **Max 2 maily na prospekta CELKOVO** (úvodný + jeden follow-up). Statusy „FU1 odoslané" a „Expirované" sú terminálne. Kto odpísal („Odpoveď"), už nikdy nedostane automatický mail.
- **Okno podľa veku** od pôvodného odoslania (stĺpec N):
  - **4–14 dní → FU1:** nadviaže na konkrétny fakt z Poznámok (M), pridá JEDEN nový uhol. Nie „len sa pripomínam".
  - **> 14 dní → žiadny mail:** Status = „Expirované" (terminálny). *(Re-engagement vetva 15–90 dní ZRUŠENÁ 04.08.2026 rozhodnutím Martina — kto vypadne z okna, ostáva navždy na pokoji. Expirácie v reporte sú signál, že behy vypadávali — rieš príčinu, nie oživovanie vlákien.)*
- **FU bez konkrétneho faktu zo stĺpca M sa neposiela** — radšej preskočiť a poznačiť, než poslať generickú pripomienku.
- **Reply-check pred každým mailom:** primárne cez pôvodný thread (správa od kohokoľvek iného než nás = odpoveď), doplnkovo hľadanie podľa domény — ale doménovo LEN pri vlastných doménach; pri freemailoch (gmail.com, azet.sk, zoznam.sk…) len presná adresa.
- **Tón podľa §8.5** — láskavý záver, žiadne „nebudem otravovať". **CTA rotuj (§7) aj vo follow-upoch** — 15 identických záverov v jeden deň je šablóna.

**Šablóna (v súlade s §8, §8.5; hranaté zátvorky VŽDY naplniť z M):**

FU1 (4–14 dní), Subject: Re: [pôvodný subject]

> Dobrý deň,
>
> vraciam sa k môjmu mailu ohľadom [konkrétny nápad/postreh z M]. Medzitým mi k tomu napadol ešte jeden uhol: [JEDEN nový, konkrétny bod — nie zopakovanie, nie druhá featura].
>
> [CTA z rotácie §7.]
>
> Pekný deň,
> Martin Saraka
> Appinara s.r.o. | appinara.sk | +421 917 566 722

---

## 12. ⭐ Slovník statusov (jediný zdroj pravdy) — NOVÉ 04.08.2026

Stĺpec K (Status) + stĺpec O (Odosielateľ: „gmail" / „appinara.sk").

| Status | Význam | Nastavuje | Ďalší krok |
|---|---|---|---|
| Draft pripravený | draft čaká v schránke podľa O | research | daily send |
| Treba research | slabý research, draft nevznikol | research | manuálne / opakovaný research |
| Čaká na draft | research HOTOVÝ, firma patrí druhej vetve (podľa O) — draft ešte nevznikol | research druhej vetvy (hand-over) | research úloha vetvy podľa O ju spracuje PREDNOSTNE |
| Email chýba | nenašla sa validná adresa | research | manuálne; NIKDY neposielať |
| Odoslané | úvodný mail poslaný (N = dátum) | daily send | follow-up podľa §11 |
| FU1 odoslané | **TERMINÁLNY** — koniec sekvencie | follow-up | nič, navždy |
| Expirované | > 90 dní bez FU — **TERMINÁLNY** | follow-up | nič, navždy |
| Odpoveď | prospekt odpísal — **TERMINÁLNY pre automatiku** | follow-up | rieši Martin osobne |
| Klient | 🎉 | Martin | — |
| LinkedIn iba / Pozastavené | mimo mailovej automatiky | Martin | manuálne |
| FU2 / FU3 odoslané (breakup) | historické — **TERMINÁLNE** | — | nedotýkať sa |

**Zrušené statusy:** „Follow-up" a „Treba lepší research" — ak sa v Exceli ešte vyskytujú, premapovať („Treba lepší research" → „Treba research"). Žiadna úloha ich nesmie vytvárať ani čítať.

---

*v3.4 — 01.09.2026 (prvý audit postavený na REÁLNYCH odpovediach prospektov — nová §0.1 s citátmi; strop dĺžky znížený zo 180 na 110 slov a P.S. degradované na výnimku; nové železné pravidlá H (postreh musí byť doložený podstránkou — po dvoch prípadoch, keď sme napísali firme o probléme, ktorý nemala) a I (over, či to už nemajú — najčastejší dôvod odmietnutia); povinný 4. krok researchu „Nemajú to už?"; quality check rozšírený zo 7 na 9 otázok)*
*v3.3 — 04.08.2026 večer (re-engagement zrušený — FU okno len 4–14 dní, potom Expirované; nový status „Čaká na draft" pre hand-over medzi vetvami; stĺpec H premenovaný na „Príležitosť")*
*v3.2 — 04.08.2026 (opt-out veta v §4; §10 prepísaný na 6 úloh + dve vetvy so stĺpcom O; nová §11 follow-upy s vetvením podľa veku a šablónami; nová §12 slovník statusov; pravidlo odkazovania na sekcie menom, nie číslom)*
*v3.1 — 17.07.2026 (pridaná §8.5 teplý tón: ocenenie pred medzerou, medzera ako škoda nie chyba, láskavý záver)*
*v3 — 16.07.2026 (revízia: príliš úzke na chatbotov, chýbal rozsah ponuky a ľudský tón)*
*v2 — 04.06.2026 (revízia po feedbacku: príliš šablónové, halucinované detaily)*
*Author: Martin Saraka | Appinara s.r.o.*
