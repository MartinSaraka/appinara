# FOLLOW-UP REPORT — weby vetva (martin@appinara.sk) — 30.08.2026 (nedeľa)

## Výsledok: 0 odoslaných — dnešný strop = 0

## Pre-flight

- Zapisovateľnosť Excelu: **OK** (openpyxl load prešiel, testovací súbor vytvorený)
- Záloha: `Appinara_Prospekti_a_Outreach.backup-20260830-140516.xlsx`
- Lock `.outreach-lock`: predošlý beh (29.08.) hlásil DONE → žiadny súbeh.
  Na čas behu nastavený na DOING, po skončení uvoľnený.
- Gmail/Chrome sa **neotváral** — nebolo čo posielať.

## Limit (krok 1)

- Dnešná spotreba schránky appinara.sk (Odoslané/FU1 odoslané s Posledný kontakt = 30.08.): **0**
- Warmup tabuľka definuje len pracovné dni (24.–28.08. → 20; od 31.08. → 30).
  **30.08. je nedeľa a nespadá do žiadneho okna → warmup limit = 0.**
- Strop = 0 − 0 = **0** → beh ukončený bez odoslania.

⚠️ **Nekonzistencia oproti 29.08.:** sobotný FU beh si víkend vyložil ako „limit 20
z predošlého týždňa" a poslal 9 mailov, kým TASK A dnes o 13:05 vyložil nedeľu ako 0
(rovnako 16.08., 22.08., 29.08.). Držal som sa konzervatívneho výkladu TASK A, lebo
limit je podľa zadania **spoločný** — inak by sa dve úlohy v ten istý deň riadili
dvoma rôznymi stropmi. **Martin: doplň do warmup tabuľky explicitné pásmo pre víkend.**

## Kandidáti (načítané, nedotknuté)

| Kategória | Počet |
|---|---|
| Status „Odoslané" + Odosielateľ „appinara.sk" | 70 |
| Vek 4–14 dní (FU1 okno) | **30** |
| Vek > 14 dní (na Expirované) | **0** |
| Vek < 4 dni | 40 |

30 kandidátov má pôvodné odoslanie **26.08.** (vek 4 dni) — z okna vypadnú až
**09.09.**, takže dnešným nekonaním sa nič nestráca. Stĺpec N je vyplnený u všetkých,
fallback na L nebol potrebný.

## Zmeny v Exceli

**Žiadne.** Ani jeden riadok sa nemenil, reply-check sa nespúšťal (nemá zmysel bez
odosielania — spustí sa až v pondelkovom behu, tesne pred mailmi).

## Ďalší beh

Pondelok **31.08.2026, 14:05** — otvára sa pásmo **30/deň**, spoločné s daily send
(13:00). Pri 69 pripravených draftoch a 30 FU kandidátoch sa obe úlohy o limit
**pobijú**: ak daily send o 13:00 vyčerpá 30, FU dostane strop 0.
Odporúčanie: rozdeliť pásmo natvrdo (napr. 20 daily send / 10 follow-up), inak
follow-upy budú ticho vypadávať a hromadiť sa smerom k statusu „Expirované".

## Otvorené veci z predošlých behov (stále platné)

1. Odpovede v schránke mimo môjho okna — Fotolienka (r. 525) a ďalšie z 27.–28.08.
   majú stále Status „Odoslané". Prepni ručne na „Odpoveď".
2. Starých záloh Excelu je vyše 60, sandbox ich nevie mazať — treba upratať ručne.
