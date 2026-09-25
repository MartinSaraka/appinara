# Daily send report — martin@appinara.sk — 21.08.2026

**Schránka:** martin@appinara.sk (Chrome u/3, overené: „Google Account: Martin Saraka (martin@appinara.sk)")

## Warmup limit

| Položka | Hodnota |
|---|---|
| Dátum | 21.08.2026 (okno 17.–21.08.) |
| Warmup limit | 10 |
| Spotreba schránky pred behom | 0 |
| Dnešný strop | 10 |
| **Reálne odoslané** | **8** |

Limit nebol vyčerpaný nie kvôli stropu, ale preto, že **v pipeline už nie sú
ďalšie drafty, ktoré by prešli kontrolou podpisu** (viď nález nižšie).

## Odoslané (8)

| # | Riadok | Firma | Email |
|---|---|---|---|
| 1 | 488 | PSYCHOTOP, s.r.o. | jakubovova@gmail.com |
| 2 | 489 | CADERM s.r.o. | dr.rajczyova@gmail.com |
| 3 | 493 | Tanečný klub GRIMMY / SZUŠ GRIMMY | info@grimmy.sk |
| 4 | 494 | Pekáreň Vrzukáč | vrzukac@gmail.com |
| 5 | 496 | VIADERMA, s.r.o. | jkonderlov@gmail.com |
| 6 | 472 | BouldroFka | info@bouldrofka.sk |
| 7 | 490 | JK-dent, s.r.o. (Dental Centrum) | recepcia@jk-dent.sk |
| 8 | 495 | Penzión Adrián (+ svadobná sála Angel) | penzionadrian@gmail.com |

Pri každom overený adresát proti Excelu, neprázdne telo a podpis
„Martin Saraka | Appinara s.r.o. | appinara.sk | +421 917 566 722".
Odoslanie potvrdené kontrolou `in:sent to:<email>` (1–1 of 1) a klesajúcim
počítadlom Drafts (46 → 38). Excel zapísaný ihneď po každom odoslaní:
Status = Odoslané, L = 21.08.2026, N = 21.08.2026.

Rozostupy medzi mailmi: randomizované 60–180 s (67–169 s).

## ⚠️ Hlavný nález — drafty bez podpisu

**13 draftov skontrolovaných a zamietnutých**, pretože im chýba celý podpisový blok
(„S pozdravom / Martin Saraka / Appinara s.r.o. | appinara.sk | +421 917 566 722").
Telo končí CTA a rovno opt-out vetou. Odoslať mail bez mena a firmy by poškodilo
doručiteľnosť aj dôveryhodnosť, preto boli preskočené.

Zamietnuté riadky: **272, 274, 421, 424, 491, 500, 501, 502, 503, 504, 508, 510, 511**
(v Poznámkach majú „Podpis chýba v drafte — neodoslané 21.08.2026").

**Rozlišovací znak:** drafty vytvorené **13.–14.08.** podpis majú (všetkých 7 už
odišlo 20.–21.08.). Drafty vytvorené **od cca 15.08. ďalej** podpis nemajú —
z 13 kontrolovaných z tejto vlny nemal podpis ani jeden.

Filter, ktorý to ukáže: `in:drafts after:2026/08/12 before:2026/08/15` → 3 kusy
(z toho 2 odoslané dnes; tretí `info@mliecnafarma.sk` je poškodený — adresa
skončila v predmete, pole Komu je prázdne).

**Odporúčanie:** opraviť šablónu v research/draft úlohe („weby vetva") tak, aby
podpis dopĺňala, a existujúcich ~36 draftov pregenerovať alebo hromadne doplniť.
Bez toho zostane pipeline zablokovaná — strop 10/deň sa nedá naplniť.

## Stav pipeline (appinara.sk)

| Status | Počet |
|---|---|
| Odoslané | 47 |
| Draft pripravený | **36** (13 z nich overene bez podpisu, zvyšok nekontrolovaný) |
| Čaká na draft | 18 |
| Email chýba | 5 |
| Treba research | 5 |

## Poznámky k behu

- **Súbežná úloha:** druhá outreach vetva (Odosielateľ = „gmail") zapisovala do
  zdieľaného Excelu počas celého behu (11:13, 11:21, 12:16, 12:34…). Beh
  pokračoval na výslovný pokyn; zápisy sa robili s kontrolou „súbor je 3 s
  nezmenený" + overením počtu riadkov po uložení. Ku kolízii nedošlo.
- **Chrome:** dvakrát stratil spojenie, raz prestali fungovať screenshoty a raz
  sa karta prestala dať klikať. Riešené novou kartou. Po každom výpadku sa stav
  overil cez `in:sent`, takže nevznikla duplicita ani falošný zápis.
- **Poznámka k adrese r489:** Excel má `dr.rajczyova@gmail.com`, Gmail kontakt
  zobrazuje `drrajczyova@gmail.com`. Gmail ignoruje bodky v gmail.com adresách —
  ide o tú istú schránku, draft mal adresu presne podľa Excelu.
- **Rotácia záloh** v `backup/` naďalej zlyháva na oprávneniach (staré súbory sa
  nedajú mazať).
