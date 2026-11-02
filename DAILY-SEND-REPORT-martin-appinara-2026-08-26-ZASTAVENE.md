# DAILY SEND — martin@appinara.sk — 26.08.2026 — ZASTAVENÉ (súbežný beh)

**Výsledok tejto úlohy: 0 odoslaných mailov.**
**Schránka dnes odoslala 20/20 — limit vyčerpal paralelný beh.**

## Warmup limit
- Dátum 26.08.2026 → pásmo 24.–28.08. → **max 20 mailov/deň**
- Spotreba pri mojom štarte (13:04): 1 → strop 19
- Spotreba po dobehnutí paralelného behu (14:08): **20 → strop 0**

## Dôvod zastavenia: paralelne bežala iná outreach úloha na tú istú schránku
Priebeh dnešnej spotreby (čítané z Excelu počas môjho čakania):

| Čas | Spotreba |
|---|---|
| 13:04 | 1 |
| 13:41 | 12 |
| 13:45 | 14 |
| 14:05 | 19 |
| 14:08 | **20 (limit)** |

Mail o 13:08 (Farma Brezany, dknapec@farmabrezany.sk) odišiel **v čase, keď som
mal ten istý draft otvorený na kontrolu** — dva procesy pracovali s tou istou
schránkou aj Excelom naraz.

Železné pravidlá „warmup limit sa neprekračuje za žiadnych okolností" a „nikdy
nebež súčasne s inou outreach úlohou" → neodoslal som nič. Akýkoľvek môj mail
by schránku posunul na 21+.

## Kým paralelný beh prešiel (riadky 533–555)
Kachliarstvo Artpece, Pálenica Solčany, Farma Brezany, Píla Studienka,
MS Autoservis, CLEAN-AUTO, ObsoGeo Žilina, MOBI PRINT, LAFRE, Factory3D,
Oprava obuvi u Jakuba, Bobovka Kavečany, Bowling Čaňa, Strelnica Horáreň
Nový Tekov, ATC Trusalová, Lanové centrum Outdoor Park, Speed Kart Dolná Seč,
Psia škola a Hotel, TreeGarden, STUDNE s.r.o.

## Stav pipeline
- Zostáva **70** prospektov: Status „Draft pripravený" + Odosielateľ appinara.sk
  + validný email
- Zajtra (27.08.) opäť limit 20

## Zistenie na doriešenie: podpis chýba v tele draftov
Draft pre Farma Brezany nemal v tele podpis
„Martin Saraka | Appinara s.r.o. | appinara.sk" — telo končilo vetou
„Ak vás podobné maily nezaujímajú, stačí odpísať a viac sa neozvem."
Overené priamo v DOM compose okna (žiadny `gmail_signature` blok).
Treba overiť, či to platí pre všetky drafty, prípadne doplniť podpis do
šablóny v research úlohe.

## Opravené
Chybnú poznámku „Draft nenájdený 26.08.2026" v riadku 534 (Pálenica Solčany)
som po dobehnutí paralelného behu odstránil — draft vtedy chýbal len preto,
že ho druhý proces o 13:05 práve odoslal.

## Odporúčanie
Skontrolovať plánovač — daily-send pre martin@appinara.sk sa dnes spustil
dvakrát. Kým to nie je vyriešené, hrozí prekročenie warmup limitu
(dnes to prešlo len tak-tak, na presných 20).
