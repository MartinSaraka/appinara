# Research report — appinara-weby-research (martin@appinara.sk) — 12.08.2026

**Backlog guard:** 36 „Draft pripravený" s Odosielateľ = appinara.sk → pásmo 25–40 → **beh obmedzený na 8 prospektov** (nie 15). Excel overený ako zapisovateľný, záloha `backup/Appinara_Prospekti_a_Outreach.bak-webyresearch-20260812-0922.xlsx`.

**Odovzdané z gmail vetvy:** 0 riadkov so Status = „Čaká na draft" a Odosielateľ = „appinara.sk" — nič na dokončenie, išlo sa rovno na nové firmy.

## Výsledok behu

- **9 nových riadkov (#505–513).** 8 firiem s hotovým draftom + 1 so statusom „Email chýba".
- **1 draft reálne vytvorený v schránke** (Tanečné štúdio Maestro, #505) — overený screenshotom, subject aj telo sedia.
- **7 draftov má hotový text, ale nie sú v schránke** → Status „Čaká na draft", Odosielateľ „appinara.sk". Texty sú v `DRAFTY-weby-2026-08-12.md`. Najbližší beh weby-research ich vezme prednostne.
- **Duplicity:** 2 kandidáti vylúčení pri dedupe — **ovcin.sk** (Ovčín Boulder & Bistro) a **cukrarendorka.sk** (Cukráreň Dorka) sú už v Exceli, hoci mali silný nález. Dedupe bežal proti celému hárku (doména / názov / email, normalizovane).
- **Do AI vetvy presunutých 0** firiem — všetkých 9 nálezov vyšlo jednoznačne na Ponuku 3.
- Všetky drafty: 133–158 slov (bez podpisu), quality check 7/7, 8 rôznych CTA, žiadne vymyslené čísla, opt-out veta, predstavovacia veta v presnom znení podľa guide.

## ⚠️ Blokujúci problém — drafty sa cez Gmail UI nedajú spoľahlivo vyrobiť

Gmail MCP konektor stále nie je pripojený na martin@appinara.sk (drží gmail vetvu), takže drafty musia ísť cez Chrome u/3. Dnes to zlyhalo tromi rôznymi spôsobmi:

1. **Compose cez URL (`?view=cm&fs=1&to=…&su=…&body=…`) vyplní obsah dokonale, ale draft neuloží.** Skúšané Ctrl+S, tlačidlo Close aj úprava tela pred zatvorením — počet draftov sa nezmenil. Tento spôsob ukladá až odoslaním.
2. **Compose v inboxe sa vypisuje mimo viditeľnej plochy** (panel začína na x≈978, okno má ~1425 px), takže klik na telo mailu minie pole a text ide do stránky. Raz to otvorilo nápovedu klávesových skratiek, raz náhľad prílohy.
3. **Layout sa počas písania posúva** — po vyplnení predmetu sa okno posunie hore a súradnice z predošlého screenshotu už neplatia. Takto vznikli dva pokazené drafty (predmet skončil v tele a naopak); oba som zahodil.
4. **Tab navigácia je nebezpečná** — Tab z poľa Predmet skončil na tlačidle Send a odpálil pokus o odoslanie. Zachytila to Gmail hláška „Please specify at least one recipient", takže nič neodišlo. **Ale keby v poli Komu adresa bola, mail by odišiel nedokončený.** V tom momente som browser automatizáciu zastavil — riziko poslať prospektovi rozpísaný mail je horšie než žiadny draft.

**Funkčný postup (takto vznikol draft #505):** otvoriť compose → **maximalizovať ho na celú obrazovku** (tlačidlo Full screen) → až potom klikať na súradnice 600/89 (Komu), 600/125 (Predmet), 600/300 (telo). V maximalizovanom okne sa layout neposúva a nič nie je mimo obrazovky. Problém je, že sa k maximalizovanému oknu nedá spoľahlivo dostať dvoma klikmi za sebou — raz mi to otvorilo dve prázdne compose okná naraz.

**Odporúčanie (v poradí dôležitosti):**

1. **Pripojiť Gmail konektor na martin@appinara.sk.** Toto je jediná trvalá oprava — `create_draft` s hotovým `htmlBody` odstráni aj problém s podpisom z 11.08. Kým sa to nespraví, každý beh tejto vetvy bude krehký.
2. Dovtedy: v prompte úlohy explicitne predpísať postup „compose → maximalizovať → súradnice", nikdy Tab a nikdy URL prefill.

## Na doriešenie v schránke

- V Draftoch ostal **jeden pokazený draft s predmetom „info@mliecnafarma.sk"** (adresát prázdny, predmet a telo pomiešané). Nedá sa odoslať, ale patrí zmazať. Nie je v Exceli, daily send ho nevidí.
- Podpis: v Nastaveniach je stále „No signatures", takže drafty textový podpis obsahujú (rovnako ako 11.08.). Starších 31 draftov podpis nemá — **stále nevyriešené**.

## Najsilnejšie nálezy (learning)

1. **AB Autoškola Brádňanský** — titulka uvádza otvorenie kurzu v Rimavskej Sobote **dvakrát a zakaždým inak**: v texte 16.01.2026, v bočnom paneli 26.01.2026. K tomu na vrchu každej stránky svieti PHP hláška s odhalenou serverovou cestou a tlačidlo „vyplň prihlášku tu" má prázdny odkaz. Firma, ktorá žije zo zápisov, má na webe tri chyby naraz — a všetky sa dajú ukázať za desať sekúnd.
2. **Kvetinárstvo Valachovičová** — pod výzvou „Napíšte mi pre predbežnú a nezáväznú cenovú ponuku" sa formulár **vôbec nezobrazí**, ak návštevníčka neprijme reCAPTCHA; namiesto polí je anglická hláška o deaktivovanom formulári. Nevesta, ktorá odmietne cookies, nemá ako poslať dopyt — a majiteľka sa o nej nikdy nedozvie. Presne ten typ nálezu, ktorý sa nedá spochybniť ani poslať nikomu inému.
3. **Mliečna Farma Necpaly** — ručná HTML tabuľka ~230 predajní, v ktorej je ten istý obchod zapísaný dvakrát pod dvoma menami („NONSTOP Potraviny" aj „Potraviny NON STOP", tá istá adresa).

**Pattern potvrdený druhý beh po sebe:** najsilnejšie nálezy nie sú o dizajne, ale o **jednom fakte uvedenom na webe dvakrát a zakaždým inak** (AB Autoškola, Markovics 11,5 vs 7 ha, Necpaly, BouldroFka, Farma Drienok tri adresy). Je to nespochybniteľné, overí sa za minútu a otvára presne ponuku, ktorú robíme — obsah ťahaný z jedného zdroja. Oplatí sa hľadať cielene: cena, telefón, adresa, otváracie hodiny, termín.

## Prehľad zapísaných riadkov

| # | Firma | Lokalita | Nález | Priorita | Status |
|---|---|---|---|---|---|
| 505 | Tanečné štúdio Maestro | Liptovský Mikuláš | titulka pozýva na kurzy z januára 2025 a zápis 2025/2026 | Vysoká | **Draft pripravený** |
| 506 | Mliečna Farma Necpaly | Necpaly | ručná tabuľka 230 predajní s duplicitami | Vysoká | Čaká na draft |
| 507 | Jazero Borovce | Borovce | tlačidlo Rezervácia vedie na článok z 2/2025 s dvoma číslami | Vysoká | Čaká na draft |
| 508 | Vinárstvo Markovics | Vinosady | 11,5 ha vs 7 ha na tej istej stránke | Vysoká | Čaká na draft |
| 509 | Kvetinárstvo Valachovičová | Gbely | formulár deaktivovaný odmietnutím reCAPTCHA | Vysoká | Čaká na draft |
| 510 | Včelárstvo Dedinský | BA-Devínska Nová Ves | cenník datovaný 15.5.2025, sklad natvrdo v HTML | Vysoká | Čaká na draft |
| 511 | AB Autoškola Brádňanský | Hnúšťa / Rim. Sobota | dva rôzne dátumy toho istého kurzu + PHP warning | Vysoká | Čaká na draft |
| 512 | BouldroFka | Trnava | otváracie hodiny ručne na troch miestach | Stredná | Čaká na draft |
| 513 | Farma Drienok | Poniky | anglický demo text šablóny na Kontakte, adresa v troch podobách | Vysoká | Email chýba |

**Stav po behu:** 37 „Draft pripravený" s Odosielateľ = appinara.sk (36 + Maestro), k tomu 7 riadkov „Čaká na draft" pripravených na dokončenie.
