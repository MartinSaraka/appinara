# Weby/apky research — 27.08.2026 (plný beh po zmene guardu)

## Zmena guardu (na pokyn Martina)
Backlog guard v úlohe `najdi-15-slovenskych-firiem-pre-appinara-s--r--o` má odteraz
**jediný prah: N_real > 300 → STOP**. Pásma „> 40 STOP" a „25–40 → 8 prospektov"
boli zrušené — pri akomkoľvek počte pod 300 beží plných 15.

## Pre-flight
- Excel zapisovateľný, záloha `backup/Appinara_Prospekti_a_Outreach.backup-20260827-*.xlsx`
- Gmail konektor je na appinarasolutions@gmail.com → schránka martin@appinara.sk meraná cez Chrome u/3

## Backlog guard + rekonciliácia
- **N_real na začiatku = 61** cold draftov (63 konceptov − 2 testovacie, 0 follow-upov)
- 61 ≤ 300 → plný beh
- **Rekonciliácia: 0 opravených riadkov.** Všetkých 60 vtedajších riadkov „Draft pripravený"
  malo v schránke reálny koncept (mapované 1:1 podľa predmetov). Fantómy sa neopakovali.

## Krok 1 — odovzdané riadky (PREDNOSTNE)
Spracovaných **34 riadkov** so Status „Čaká na draft" + Odosielateľ „appinara.sk":
- **13** malo draft predpísaný v `DRAFTY-weby-2026-08-20.md` → vložené do schránky (riadky 519–531)
- **21** vyžadovalo re-verifikáciu faktov a nový draft (riadky 126, 167, 178, 180, 199, 202, 203,
  204, 206, 222, 226, 232, 245, 280, 281, 282, 632–636)
- Po behu je „Čaká na draft" + appinara.sk = **0**

**Dôležitá oprava:** research pri Reštaurácii Barumka bol NEAKTUÁLNY — Excel tvrdil „stará statická
.html prezentácia", v skutočnosti majú nový poctivý web (Inet.sk, 2026) s denným menu ako textom.
Draft aj stĺpce H a M prepísané podľa reality.

## Krok 2 — 15 nových firiem
Nájdených **15**, s draftom **15**, „Treba research" **0**. Duplicity: **0**
(dedupe normalizovane proti doméne, názvu aj e-mailu cez celý Excel, 630 domén).
Do AI vetvy presunuté: **0** — všetkých 15 vyšlo po diagnostike ako Ponuka 3.

Riadky 637–651: Chata Inovec Jalšové, Chaty Ferrata, Divá Kačica, U Štrngáča, Opportune,
Kamenárstvo KAMEA, RD-pneu, MKB Plus (Požičovňa náradia LM), Stolárstvo DAJONI, Píla Varga,
HANO-family, Anglická škola, Musicana, Pálenica Guldan, Farma Okomáň.

## Najsilnejšie nálezy (pre learning)
1. **Penzión Trio Čingov** — v pätičke webu sú viditeľné dva injektované cudzie odkazy,
   `https://pinup.com` (online kasíno) a `https://fdfd.com/`. Jediné externé odkazy na stránke —
   silná stopa po napadnutom webe. Podané ako „škoda", nie ako obvinenie.
2. **Zubná Klinika Chrenová** — medzi štyrmi reálnymi otázkami vo FAQ ostali DVE lorem-ipsum
   otázky z Avada šablóny („Vivamus vehicula felis eget lectus laoreet ?"), viditeľné pacientovi.
3. **Opportune** — v e-shope majú prehodené adresy produktov: „Uhorkový" šalát na /produkt/grecky/
   a naopak; Plzeň na adrese mirindy. Chyba, ktorú si prevádzkovateľ sám nevšimne.
4. **Včelo s. r. o.** — na stránke Kontakt „približne 30 včelstiev", v pätičke tej istej stránky
   „približne 70 včelstiev".

## Stav po behu
- **„Draft pripravený" + Odosielateľ „appinara.sk" = 107**
- Konceptov v schránke martin@appinara.sk: **111** (z toho 2 testovacie „asdasd" a
  „info@mliecnafarma.sk" + 2 koncepty bez zodpovedajúceho riadku — na ručnú kontrolu)
- „Treba research" + appinara.sk = 5 (nedotknuté, staršie)
- Každý zo 36 draftov vytvorených dnes bol overený v schránke podľa predmetu; dva sa pri prvom
  pokuse neuložili (Včelo, RD-pneu) a boli vytvorené znova.

## Odporúčanie
Backlog je 111 konceptov. Pri warmup limitoch denného odosielania budú najstaršie drafty
v čase odoslania staré týždne — obsah v nich (rozbité odkazy, oznamy, cenníky) sa môže zmeniť.
Odporúčam zvýšiť denný limit alebo pred odoslaním starších draftov nález rýchlo preveriť.
