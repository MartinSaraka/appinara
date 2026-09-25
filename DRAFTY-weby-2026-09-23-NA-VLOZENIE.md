# Drafty v4.2 — vetva martin@appinara.sk — 23.09.2026

**POZOR: drafty NEBOLI vytvorené v schránke.** martin@appinara.sk (Gmail u/3) je odhlásený,
Google žiada „Verify it's you" a nové prihlásenie heslom. Heslá nezadávam, takže sa
schránka v tomto behu nedala ani čítať, ani do nej písať.

Všetky texty nižšie sú hotové, prešli quality checkom v4.2 a sú pripravené na vloženie.
Riadky v Exceli ostali na Status „Čaká na draft" — po prihlásení stačí vložiť a prepnúť.

Každý postreh je overený 23.09.2026 na RENDEROVANEJ stránke cez prehliadač (pravidlo H),
konkrétna podstránka je uvedená pri každom drafte. Pravidlo I overené pri každom.

---

## 1. Denta Centrum — dentacentrum@dentacentrum.sk (riadok 1001)

**Overené na:** dentacentrum.sk (titulka) + /nefunguje/ + /schedule/
**Nález:** hlavné CTA „OBJEDNAJTE SI OŠETRENIE." na titulke vedie na podstránku
doslova nazvanú `/nefunguje/`, kde stojí „Schedule dočasne nedostupné".
**Pravidlo I:** rezervačný systém MAJÚ, ale je nedostupný → výnimka, ponúkame sfunkčnenie.

**Predmet:** Tlačidlo Objednajte si ošetrenie vedie na nefunguje

```
Dobrý deň,

tlačidlo „Objednajte si ošetrenie" na vašej titulke vedie na stránku s hláškou
„Schedule dočasne nedostupné" — pacient, ktorý si chce termín vybrať večer, skončí
pri telefóne.

Sfunkčníme vám rezervačný systém tak, aby si pacient termín vybral sám.
Pár týždňov, za rozumné peniaze.

Máte o to záujem?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 46 slov*

---

## 2. REA Nitra — kalkulacie@reanitra.sk (riadok 990)

**Overené na:** reanitra.sk/kontakt (renderované)
**Nález:** nadpis „ONLINE KALKULÁCIA TLAČE", ale polia sú len meno, email, telefón
a správa — žiadny parameter tlače, žiadny výstup ceny. Je to kontaktný formulár
s názvom kalkulácie.
**Pravidlo I:** skutočnú kalkulačku nemajú — overené na titulke (žiadny odkaz na
kalkuláciu) aj na /kontakt.

**Predmet:** Online kalkulácia na vašom kontakte cenu nevypočíta

```
Dobrý deň,

formulár „Online kalkulácia tlače" na vašej kontaktnej stránke sa pýta na meno,
mail a správu — zákazník, ktorý chce poznať cenu, ju z neho nedostane a čaká
na odpoveď.

Postavíme vám skutočnú cenovú kalkulačku, ktorá cenu ukáže hneď podľa formátu,
papiera a nákladu. Nie je to drahé ani zdĺhavé.

Chcete, aby som vám poslal konkrétnu ponuku?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 55 slov*

---

## 3. Fyzio Poprad — recepcia@fyziopoprad.sk (riadok 917)

**Overené na:** fyziopoprad.sk (renderovaná titulka)
**Nález:** obe tlačidlá „OBJEDNAJTE SA" majú `href="#footer"` — skočia do pätičky,
kde je len telefón, mail a hodiny Po–Pia 8:00–16:00. Na celej stránke je 0 formulárov.
(Bonus, do follow-upu: v šablóne ostali dva nepremenené odkazy s textom `{title}`.)
**Pravidlo I:** žiadny rezervačný skript (Reservio/Bookio/Noona) na stránke.

**Predmet:** Objednajte sa na vašom webe skočí do pätičky

```
Dobrý deň,

tlačidlo „Objednajte sa" na vašom webe skočí do pätičky, kde je telefónne číslo —
pacient, ktorý si web pozerá po šestnástej, sa objednať nevie.

Postavíme vám objednávkový systém, v ktorom si pacient voľný termín vyberie sám.
Nasadenie pár týždňov, za rozumné peniaze.

Zaujíma vás to?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 46 slov*

---

## 4. KARPATSKÁ PERLA — ochutnavky@karpatskaperla.sk (riadok 1018)

**Overené na:** karpatskaperla.sk/sluzby/degustacie (renderované)
**Nález:** tlačidlo „CHCEM SI REZERVOVAŤ TERMÍN" je `mailto:ochutnavky@karpatskaperla.sk`.
**Pravidlo I:** žiadny rezervačný widget na stránke degustácií.

**Predmet:** Rezervácia ochutnávky u vás končí v mailovej schránke

```
Dobrý deň,

tlačidlo „Chcem si rezervovať termín" na stránke s degustáciami otvorí mail — hosť,
ktorý ochutnávku plánuje v nedeľu večer, napíše a čaká, kým mu niekto odpíše.

Postavíme vám rezervačný systém na degustácie s voľnými termínmi a kapacitou skupiny.
Pár týždňov, za výhodnú cenu.

Máte záujem, alebo to u vás nie je téma?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 55 slov*

---

## 5. M&K Pneuservis — mkpneuservis1@gmail.com (riadok 1023)

**Overené na:** mkpneuservis.sk/kontakty/ (renderované)
**Nález:** pod adresou a kontaktmi je živý šablónový text „Sample Title / Sample Text /
WordPress Theme created with WordPress Website Builder."
**Pravidlo I:** web má tri podstránky (O nás, Rýchloservis Zvolen, Kontakty), žiadne
online objednanie.

**Predmet:** Na vašich kontaktoch svieti Sample Title

```
Dobrý deň,

na vašej kontaktnej stránke ostal pod adresou šablónový text „Sample Title /
Sample Text" — zákazník, ktorý hľadá, kedy máte otvorené, číta text z WordPress
šablóny.

Zmodernizujeme vám web a pridáme online objednanie prezutia na konkrétny termín.
Nie je to drahé ani zdĺhavé.

Máte o to záujem?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 48 slov*

---

## 6. MUDr. Juraj Maxián — info@drmaxian.sk (riadok 1011)

**Overené na:** drmaxian.sk (renderovaná titulka)
**Nález:** tri články v sekcii „Rady & oznamy" majú reálne slovenské názvy, ale adresy
ostali v tvare `/lorem-ipsum-dolor-sit-amet-consectetur/`, `-2/`, `-3/`.
**Pravidlo I:** web je nový a funkčný, nie je v prestavbe — ponúkame úpravu, nie náhradu.

**Predmet:** Adresy vašich článkov pre rodičov ostali lorem-ipsum

```
Dobrý deň,

články v sekcii Rady & oznamy máte napísané pekne, len ich adresy ostali v tvare
„lorem-ipsum-dolor-sit-amet" — rodič, ktorý článok posiela ďalej alebo ho hľadá
cez Google, dostane nezrozumiteľný odkaz.

Zmodernizujeme vám web tak, aby adresy aj vyhľadávanie sedeli na obsah.
Nasadenie pár týždňov, za rozumné peniaze.

Zaujíma vás to?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 50 slov*

---

## 7. Štúdio tanca a pohybu Alegria — alegriatrnava@gmail.com (riadok 905)

**Overené na:** alegriastudio.sk (renderovaná titulka)
**Nález:** odkaz „ROZVRH HODÍN" vedie priamo na obrázok
`/wp-content/uploads/2026/09/alegria-scaled.webp`; „Skúšobná hodina zdarma" vedie
na Google formulár `forms.gle/SmkxRxKXHbVAyLMAA`.
**Pravidlo I:** bez rezervačného systému, prihlasovanie beží cez Google Forms.

**Predmet:** Rozvrh hodín ako obrázok a prihláška cez Google formulár

```
Dobrý deň,

rozvrh hodín máte na webe ako obrázok a skúšobnú hodinu riešite cez Google formulár —
rodič si tak nevie overiť voľné miesto v skupine a vy prihlášky prepisujete ručne.

Postavíme vám online prihlasovanie s rozvrhom, ktorý sa dá upraviť bez grafika.
Pár týždňov, za rozumné peniaze.

Máte záujem, alebo to u vás nie je téma?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 55 slov*

---

## 8. Detské tanečné štúdio BRISHKA — janka@brishka.sk (riadok 1096)

**Overené na:** brishka.sk (renderovaná titulka)
**Nález:** „TU ONLINE PRIHLASOVACÍ FORMULÁR" vedie na `forms.gle` (dva rôzne Google
formuláre), dokumenty na stiahnutie sú zvlášť na `/prihlaska/`.
**Pravidlo I:** bez vlastného prihlasovacieho systému a bez napojenia na platbu.

**Predmet:** Prihlášky do štúdia chodia cez Google formulár

```
Dobrý deň,

prihlášky do štúdia zbierate cez Google formulár a dokumenty na stiahnutie máte
zvlášť na podstránke Prihláška — rodič tak jednu vec vybavuje na dvoch miestach.

Postavíme vám jednu prihlášku napojenú na platbu, ktorá dieťa rovno zaradí do kurzu.
Nasadenie pár týždňov, za výhodnú cenu.

Chcete, aby som vám poslal konkrétnu ponuku?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 52 slov*

---

## 9. Škola plávania NEMO Nitra — plavanienemo@gmail.com (riadok 993)

**Overené na:** plavanie-nitra.sk/kontakt/prihlaska-na-stiahnutie (renderované)
**Nález:** na stránke stojí, že rodič musí najprv kontaktovať školu telefonicky, osobne,
mailom alebo cez FB, dohodnúť zaradenie do skupiny, a až potom si stiahne PDF prihlášku.
**Pravidlo I:** žiadny online zápis, prihláška je PDF na stiahnutie.

**Predmet:** Prihláška do plaveckej školy až po telefonáte

```
Dobrý deň,

na stránke Prihláška píšete, že vás treba najprv kontaktovať a až potom si rodič
stiahne PDF — ten istý rozhovor o veku a voľných miestach tak absolvujete pri
každom dieťati odznova.

Postavíme vám online zápis, ktorý dieťa podľa veku a zručností rovno ponúkne
do voľnej skupiny. Za rozumné peniaze.

Máte o to záujem?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 57 slov*

---

## 10. Penzión Jozefína — penzionjozefina@gmail.com (riadok 1016)

**Overené na:** penzionjozefina.sk (renderovaná titulka)
**Nález:** v hlavičke stojí „Rezervácie: 0905 795 940" — jediná cesta k rezervácii.
Na stránke je 0 formulárov; navigácia je Úvod / O nás / Galéria / Okolie / Kontakt.
**Pravidlo I:** bez rezervačného systému a bez Booking widgetu.

**Predmet:** Rezervácie v Jozefíne idú len cez jedno číslo

```
Dobrý deň,

v hlavičke webu stojí pri rezerváciách len telefónne číslo — hosť, ktorý si penzión
vyberá v nedeľu večer, nemá kam kliknúť.

Postavíme vám online rezerváciu s voľnými termínmi, ktorú si hosť vybaví sám.
Pár týždňov, za rozumné peniaze.

Zaujíma vás to?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 42 slov*

---

## 11. LITE Anglická škola Poprad — litepoprad@litepoprad.sk (riadok 1022)

**Overené na:** litepoprad.sk (titulka) + /otestujte-sa/index.html + /aktualne-terminy/index.html
**Nález:** na titulke stojí „Otestujte sa! Vyplňte krátky test z anglického jazyka
a zistíte, aký kurz je pre vás najvhodnejší." s odkazom TU — cieľová stránka
`/otestujte-sa/` obsahuje len hlavičku a pätičku, 0 formulárov a 0 vstupných polí.
Stránka „Aktuálne termíny kurzov" neuvádza žiadny termín. Pätička: © 2017.
**Pravidlo I:** test neexistuje, nie je to len iná technológia.

**Predmet:** Test na vašom webe, ktorý sa nedá vyplniť

```
Dobrý deň,

na titulke pozývate „Otestujte sa!" a vyplniť krátky test z angličtiny, lenže
stránka Otestujte sa je prázdna — záujemca, ktorý klikne, na nej nenájde nič.

Postavíme vám online rozraďovací test, ktorý človeku podľa výsledku rovno odporučí
kurz. Nie je to drahé ani zdĺhavé.

Chcete, aby som vám poslal konkrétnu ponuku?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 50 slov*

---

## 12. Funaction Fyzioterapia — info@fyzioterapiafunaction.sk (riadok 1009)

**Overené na:** fyzioterapiafunaction.sk/rezervacia/ (renderované)
**Nález:** „Rezervácia" je WordPress formulár — meno, mail, telefón, prepínače
a textové pole. Žiadny výber dátumu, žiadne voľné termíny, žiadny kalendár.
**Pravidlo I:** žiadny rezervačný skript tretej strany na stránke.

**Predmet:** Rezervácia u vás je dopytový formulár, nie kalendár

```
Dobrý deň,

na stránke Rezervácia si pacient vyberá z prepínačov a želaný termín píše do poľa —
voľné termíny nevidí, takže sa aj tak čaká, kým sa mu niekto ozve.

Prepojíme vám rezerváciu s kalendárom, aby si pacient voľný termín vybral a potvrdil
sám. Nasadenie pár týždňov, za výhodnú cenu.

Máte záujem, alebo to u vás nie je téma?

S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
*Telo: 55 slov*

---

## Rotácia CTA (kontrola §7 — žiadna variant viac než 3×)

| CTA | Použité pri |
|---|---|
| Máte o to záujem? | Denta Centrum, M&K Pneuservis, NEMO Nitra |
| Chcete, aby som vám poslal konkrétnu ponuku? | REA Nitra, BRISHKA, LITE Poprad |
| Zaujíma vás to? | Fyzio Poprad, Dr. Maxián, Penzión Jozefína |
| Máte záujem, alebo to u vás nie je téma? | Karpatská Perla, Alegria, Funaction |

## Neoverené — draft NEROBIŤ, kým sa web nenačíta

- **Záhrady Raček (riadok 1024)** — www.zahradyracek.sk sa 23.09.2026 nenačítal
  (chybová stránka). Tvrdenie o statickom cenníku z poznámky sa nedalo potvrdiť,
  takže sa podľa pravidla H nepoužíva.
