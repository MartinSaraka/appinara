# Zubári a lekári v okolí Vajnorskej 96 — 01.09.2026

**Záber:** Bratislava — Nové Mesto, Ružinov, Rača, Vajnory. Kritérium: starý alebo žiadny web.
**Schránka:** martin@appinara.sk (cez Chrome u/3). **Formát mailu:** kratší, ~90–110 slov, pravidlá guide zachované.

## Výsledok

| | Počet |
|---|---|
| Nájdených ambulancií | **45** |
| Z toho s draftom v schránke (overené) | **32** |
| Status „Email chýba" (draft sa nerobil) | **13** |
| Vylúčených ako duplicita | 0 |
| Nových riadkov v Exceli | **#743–787** |

Ani jedna z 45 nemá chat widget → všetky sú cieľovka pre Ponuku 3 (web/appka/rezervácia), žiadna nešla do AI vetvy.

## Rozloženie
Zubári 22 · Špecialisti (ORL, urológia, gastro, gyn, ortopédia, kardio, chirurgia, dermatológia, očné) 13 · Praktickí a pediatri 6 · Ostatné (logopédia, fyzioterapia, optika, poliklinika) 4

## Päť najsilnejších nálezov

1. **AURICULA — ORL a foniatria, Račianska 24E.** Ich staršia doména `orlambulancia.com` už nie je ich: cez šesť presmerovaní končí na poľskej kasínovej stránke. Google ju stále ukazuje ako ich kontakt. Toto im treba povedať bez ohľadu na obchod.
2. **PaedDr. Púllová, logopédia, Teslova 20/33.** V ordinačných hodinách visí „Dovolenka 17.8. – 31.8.2018" a pätička hlási „Site Last Updated február 01, 2014". Osem rokov nedotknutý web.
3. **SYMED, gastroenterológia, Tehelná 26.** Všetky servisné dlaždice (Kolonoskopia, Gastrofibroskopia, Prevencia rakoviny) vedú na `/dental/service-inner` — zvyšok zubárskej demo šablóny.
4. **MUDr. Fendeková, Tehelná 26.** Celá „ambulancia" beží na bezplatnej lnk.bio stránke, pod tlačidlami sa zobrazuje reklama cudzích webov a všetky štyri „objednávacie" tlačidlá sú len `mailto:`.
5. **Dentalissimo, Ružinov.** V pätičke oznam „23.12.2021 – 2.1.2022 – zatvorené", mailový odkaz má preklep `mailti:` a ochrana údajov vedie na cudziu doménu pearldental.sk.

## Dva „hot spoty" — jedna budova, veľa prospektov

- **Poliklinika Tehelná 26** — `poliklinikatehelna.sk` vracia HTTP 200 s prázdnym telom a všetky podstránky 404. Ani jedna z ~19 ambulancií v budove nemá funkčnú prezentáciu. Zaradení: SYMED, Chirurgia Tehelná, PEDIAMED, IMEDIM, Al Zafari. Ďalší overení, nezaradení: MUDr. Kučerová, Bezecná, Gáborová, Liptáková.
- **Poliklinika Vajnorská 40** — sama je prospekt (#774) a zároveň vstupná brána k ~6 ambulanciám. Nález: tlačidlo „Objednanie online" pri endokrinológii vedie na profil iného lekára; v texte alergológie je preklep v maile `alergologia@poliklina-vajnorska.sk`.

## Prečo 13 riadkov nemá draft
Email sa nenašiel na webe ani na verejnom profile (zoznamlekarov, zzz.sk, e-VÚC, Zoznam) — guide zakazuje hádať `info@doména`. Špeciálny prípad: **MUDr. Al Zafari** email na webe má, ale doména `zafarident.sk` nerezolvuje, takže by sa mail vrátil — preto tiež „Email chýba". Týchto 13 sa dá osloviť len telefonicky.

## Poznámka k prevádzke
`.outreach-lock` bol pri štarte ešte `RUNNING taskA`; zápis som odložil do 60 s ticha a spravil ako jednu atomickú operáciu s mtime-guardom. Po dobehnutí TASK A hlási: **„32 mailov odoslaných (limit 30 prekročený o 2)"** — daily-send si dnes prekročil vlastný strop, stojí za pozretie.
