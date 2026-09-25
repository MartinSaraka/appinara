# Follow-up sequence report — 16.07.2026

**Výsledok behu: 0 follow-upov odoslaných. Žiadny prospekt nespĺňal podmienky podľa špecifikácie.**
Excel som **nemenil** — nič som neprepísal ani neodoslal.

## Kandidáti podľa špecifikácie (stĺpec N)

| Bucket | Podmienka | Kandidátov |
|---|---|---|
| A — FU1 | Status "Odoslané", 4-8 dní od N | **0** |
| B — FU2 | Status "FU1 odoslané", 9-13 dní od N | **0** |
| C — FU3 | Status "FU2 odoslané", 14-21 dní od N | **0** |

Reply-check (KROK 2) sa nespustil — nebolo koho kontrolovať.

## Príčina: stĺpec N sa nikdy nevypĺňa

Stĺpec **N "Pôvodné odoslané" je prázdny pre 118 zo 119 riadkov** so statusom "Odoslané".

`AUTOMATIZACIA-Scheduled-Tasks.md` (krok 5) hovorí, že `appinara-daily-send` po odoslaní zapisuje **iba**:
- Status = "Odoslané"
- Posledný kontakt (stĺpec L) = dnešok

**Stĺpec N nezapisuje nikto.** Follow-up task pritom celú detekciu kandidátov stavia na N → podmienka `today - N` je nevyhodnotiteľná → 0 kandidátov. Vyplnené N majú len rané manuálne dávky (22.05, 28.05, 10.06, 15.06).

Toto nie je dnešný výpadok — pipeline je ticho mŕtva približne od začiatku júna.

## Škoda: 91 + 20 uviaznutých prospektov

**91 prospektov so statusom "Odoslané" nikdy nedostalo FU1** a sú už mimo 4-8 dňového okna:

| Odoslané | Počet | Dní dozadu |
|---|---|---|
| 01.06 | 10 | 45 |
| 02.06 | 10 | 44 |
| 03.06 | 20 | 43 |
| 05.06 | 10 | 41 |
| 12.06 | 10 | 34 |
| 21.06 | 10 | 25 |
| 22.06 | 10 | 24 |
| 23.06 | 10 | 23 |
| 28.05 | 1 | 49 |

**Uviaznuté aj rozbehnuté sekvencie** (majú N, ale okno im dávno ušlo):
- 10× "FU1 odoslané", N=15.06 → 31 dní (okno 9-13)
- 5× "FU2 odoslané", N=10.06 → 36 dní (okno 14-21)
- 4× "FU1 odoslané" bez N vôbec (Lady Fit Spot, 365 Fit&Co Prešov, Colette Fine Dining, Reštaurácia Karla)

## Prečo som neposlal náhradným spôsobom

Ak by sa ako proxy za N použil stĺpec L, **12 prospektov by dnes spadlo do okna 4-8 dní**:

Pilates My, Pilates pre zdravie, Reštaurácia RUBIKON, RIVER Restaurant Žilina (všetci 08.07, 8 dní), AZ Dom a Záhrada, Pražiarnička, Anipet, FYMED, Dermatop, Fit Sport Training, FOK realitná kancelária, Nitrianska realitná kancelária (všetci 09.07, 7 dní).

Neodoslal som im nič — task file explicitne určuje stĺpec N a odoslanie 12 reálnych mailov na základe **odvodeného** dátumu je write akcia, ktorú zadanie nepokrýva. Potrebujem na to tvoje OK.

## Návrh opravy (čaká na schválenie)

1. **Backfill:** pre 118 riadkov "Odoslané" s prázdnym N nastaviť `N = L`. Pri prospektovi, ktorý ešte nedostal follow-up, je "posledný kontakt" totožný s dátumom pôvodného odoslania — takže backfill je bezpečný.
2. **Oprava zdroja:** do `appinara-daily-send` (krok 5) doplniť zápis `N = dnešok` pri prechode na status "Odoslané". Bez toho sa problém o týždeň vráti.
3. **Rozhodnutie o 91 uviaznutých:** okno im ušlo o 23-49 dní. Na výber:
   - preskočiť ich (nechať tak),
   - poslať im FU1 s vedomím oneskorenia,
   - alebo rovno FU3 breakup, keďže od pôvodného mailu ubehol viac než mesiac.

Odporúčam bod 2 spraviť tak či tak — je to root cause. Body 1 a 3 sú tvoje rozhodnutie.

## Pipeline counters (Excel, 16.07.2026)

| Status | Počet |
|---|---|
| Draft pripravený | 150 |
| Odoslané | 119 |
| FU1 odoslané | 15 |
| FU2 odoslané | 5 |
| FU3 odoslané (breakup) | 14 |
| Odpoveď | 6 |
| Treba lepší research | 11 |
| Email chýba | 8 |
| LinkedIn iba | 2 |
| **Spolu** | **330** |

Chyby počas behu: žiadne.
