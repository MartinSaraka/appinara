# Beh „ďalších 100" — martin@appinara.sk, 14.–15.09.2026

## Výsledok

| | |
|---|---|
| Nových riadkov v Exceli | **124** (#1084–#1207) |
| Z toho s konceptom v schránke | **99** — „Draft pripravený" |
| Email chýba | 16 |
| Treba research | 9 |
| Duplicity po dedupe | **0** (proti 931 doménam / 969 názvom / 888 mailom) |
| Konceptov v schránke celkom | **142** |

Všetkých 99 konceptov overených dvakrát: existuje koncept **a** telo obsahuje podpis
`Martin Saraka | Appinara s.r.o.`

---

## Čo neprešlo kontrolou (a prečo je to dobre)

Agenti odovzdali 124 kandidátov. Ich nálezy som **neprevzal** — všetkých 56 citovaných
reťazcov som znova stiahol a hľadal priamo na uvedenej URL. **10 nálezov neobstálo.**

Sedem sa podarilo zachrániť alternatívnym, overeným nálezom (napr. UniDance — PHP chyba
medzitým zmizla, ostala pätička 2019). **Tri firmy vypadli úplne:**

- **Hruštínske syry** — pravidlo I. Agent tvrdil, že produkty majú namiesto košíka
  tlačidlo „Mám záujem". Ten reťazec na stránke nie je a `add-to-cart` áno (4 výskyty).
  E-shop im pravdepodobne funguje → neoslovovať.
- **Sklenárstvo A-GLASS** — stránka vracia 1 378 znakov (JS-renderovaná), nález sa
  nedal nezávisle overiť.
- **Chalupa Terchová** — web blokuje automatické sťahovanie (403).

Okrem toho som zámerne **nevytvoril draft pre Tenisové kurty Šaľa**: e-mail, ktorý majú
na webe, je `sala.tenis@gmai.com` — chýba „l". Odoslanie by skončilo u niekoho cudzieho.
Riadok má status „Treba research" a poznámku.

**Poučenie z minulého behu zafungovalo:** agenti mali v zadaní explicitný zákaz tvrdiť
„web beží len na http" bez overenia cez `curl`. Tentoraz sú všetky štyri takéto tvrdenia
(Chatka Poľana, L-L lešenie, AUTOKLEM, benconsult) **reálne overené** — certifikát je
neplatný alebo vystavený pre cudziu doménu.

---

## Dve kolízie s gmail vetvou

1. **Penzión Zelený dom** — gmail vetva ho pridala ako #960 po tom, čo som spustil
   dedupe. Mám naň koncept pod #968. Riadok **#960 som prepol na „Pozastavené"**
   s poznámkou, aby firma nedostala mail dvakrát.

2. **Počas behu pribudlo 72 cudzích riadkov** (#1012–#1083), z toho **38 nových
   odovzdaní** pre túto vetvu. Môj zápis ich nepoškodil (append + kontrola mtime),
   ale backlog odovzdaní narástol.

---

## Stav fronty — toto je podľa mňa hlavné číslo

```
Draft pripravený (appinara.sk)   139   ← pripravené na odoslanie
Čaká na draft    (appinara.sk)    64   ← research hotový, draft chýba
```

Pri warmup limite **30/deň, ktorý je spoločný s follow-upmi**, je reálna priepustnosť
cold mailov okolo 25 denne. To znamená:

- **139 draftov ≈ 6 pracovných dní** odosielania — posledné odídu okolo **23. septembra**
- za nimi čaká **ďalších 64 odovzdaní**, čiže po nich ešte ~3 dni

Nálezy typu „v pätičke máte rok 2012" vydržia. Nálezy typu „na webe máte oznam
o zatvorení" alebo „web je v prestavbe" sa môžu za týždeň zmeniť a mail potom vyzerá
zle — presne pred tým varuje krok 0d v zadaní.

**Odporúčanie:** ďalší research nespúšťať, kým fronta neklesne pod ~40. Úzke hrdlo nie je
zásoba draftov, ale denný limit odosielania.

---

## Najsilnejšie nálezy z tejto dávky

- **Paintball Beluša** — pod menu visí zvyšok šablóny advokátskej kancelárie
  (video „lawyer", odkazy Practice Areas / Our Team / Our Results)
- **P+K (odvoz odpadu)** — demo sekcia „About Us" s kontaktom `info@example.com`,
  telefónom +2 123 654 7898 a adresou v New Yorku
- **VaV Sklenárstvo** — americké call centrum „1-800-700-600" a adresa 1010 Avenue,
  New York, plus sekcia o kamerových systémoch
- **LAMA Strechy** — mail v pätičke vedie na webovú agentúru, telefónny odkaz na
  úplne iné číslo než zobrazené
- **Kominárstvo Mitaši** — „Rokov skúseností: 0" hneď vedľa vety o dlhoročnej tradícii
- **SZUŠ DAMA** — v pätičke doslova `{current_year}`

---

## Čo ostáva nedoriešené

- **64 riadkov „Čaká na draft"** od gmail vetvy — research hotový, draft chýba.
  Zadanie hovorí, že majú prednosť pred novým hľadaním; v tomto behu som ich
  neriešil, lebo si výslovne žiadal 100 nových.
- **`.outreach-lock` je nefunkčný.** Hlási FREE a nezmenil sa od 09.09., pritom
  daily-send počas behu reálne odosielal. Kým sa to neopraví, každý súbežný beh
  musí zapisovať append-only s kontrolou mtime, ako som to robil tu.
