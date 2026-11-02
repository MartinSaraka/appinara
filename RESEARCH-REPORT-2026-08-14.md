# Research report — appinara-research-prospects (manuálny beh) — 14.08.2026

Beh spustený ručne Martinom ako override backlog guardu. **Override bol správny —
backlog, ktorý ráno zastavil automatický beh, bol z veľkej časti fiktívny** (viď nižšie).

## Výsledok

| | Počet |
|---|---|
| Nájdených a preverených firiem | **22** |
| Draft pripravený (gmail vetva) | **11** |
| Čaká na draft → hand-over vetve appinara.sk (Ponuka 3) | **11** |
| Treba research | 0 |
| Duplicity | 0 (22/22 čistých na doménu, názov aj email) |

Nové riadky: **#515–#536** (Excel riadky 476–497). Ukladané po každom riadku.

### Rozdelenie podľa segmentov

| Segment | Spolu | gmail draft | hand-over |
|---|---|---|---|
| Zdravotníctvo | 10 | 4 | 6 |
| E-shop | 5 | 3 | 2 |
| Fitness/Wellness | 3 | 2 | 1 |
| Reality | 2 | 2 | 0 |
| Gastro | 1 | 0 | 1 |
| Hotel/Penzión | 1 | 0 | 1 |

Kvóty boli prerozdelené podľa reply rates z rannej analýzy — zdravotníctvo posilnené
(17,5 %), gastro a hotely utlmené na 1 firmu (0 % a 3,2 %).

## Vylúčení pri researchi

- **Chat widget / bot** (nie sú cieľovka): veterinanitra.sk (Smartsupp), logoko.sk
  (LiveChat), orlpoprad.sk (vlastný „ORL asistent" + Bookio), mthiker.sk (Zopim)
- **Bez overeného emailu na webe** (žiadne hádanie info@doména): ocnaambulanciatrnava.sk,
  zubnaambulanciabb.sk, fazivet.sk, veterinapresov.sk, psych-centrum.sk,
  psychologickaambulancia.sk
- **Blocklist (už v CRM):** fyzio-care.sk, fyzioactive.sk, envyclinic.sk, dentmedik.sk

## Silné hooky (pre learning)

**LA SKALA (Žilina)** — vlastný produkt „Hodinový istič" za 15 €: požičajú inštruktora
tomu, kto nemá s kým liezť. Ocenenie, ktoré sa nedá napísať bez čítania ich webu, a
zároveň priamy most k pointe mailu (prihlášky im chodia do troch rôznych schránok).
Draft končí vetou „Nie je to AI projekt." — rule G.

**ITOCA sport (Liptovský Mikuláš)** — regionálny outdoor obchod, ktorý vyrába vlastnú
brúsku na hrany lyží (1 463,70 €) používanú pretekármi Svetového pohára. Kontrast
„toto viete, ale na e-shope s 25 000 položkami tú radu zákazník nedostane" nesie celý mail.

**TatryVet (Poprad)** — modul „Teraz ordinujú" ukazuje menom, kto je práve v službe.
A na Kontakte sami priznávajú, že po 16:30 telefón dvíha asistentka medzi zákrokmi.
Ocenenie aj medzera z tej istej stránky.

## ⚠️ Dôležité: backlog bol fiktívny

Počas tohto behu (23:08–23:44) dobehla rekonciliácia z `appinara-daily-send`
a zistila, že **pre všetkých 125 riadkov so statusom „Draft pripravený" v gmail vetve
neexistoval ani jeden koncept v schránke.** Prepísala ich: 96 → „Čaká na draft",
27 → „Expirované", 2 → „Odpoveď".

Dôsledok: ranný backlog guard (162 draftov → STOP) sa opieral o číslo, ktoré
neexistovalo. Reálny stav bol ~37 draftov, čiže hlboko pod prahom 50.

**Odporúčanie:** backlog guard v prompte by nemal počítať riadky so statusom
„Draft pripravený", ale skutočné koncepty v schránke (`list_drafts`). Inak sa
úloha vypína na základe stavu Excelu, nie reality.

**Kontrola tohto behu:** všetkých 11 nových draftov overených cez `list_drafts` —
existujú, správni príjemcovia, správne telá. Žiadne fantómy.

## Stav pipeline po behu

| Status | Počet |
|---|---|
| Expirované | 139 |
| Čaká na draft (gmail — čaká na dopísanie draftu) | 93 |
| FU1 odoslané | 67 |
| Draft pripravený (appinara.sk) | 36 |
| Odpoveď | 25 |
| Treba research | 30 |
| **Draft pripravený (gmail)** | **11** ← všetky z tohto behu |
| Čaká na draft (appinara.sk) | 11 ← hand-over z tohto behu |

**Čo teraz čaká na akciu:**

1. **93 riadkov „Čaká na draft" v gmail vetve** — research je hotový, draft treba
   dopísať. Toto je reálny backlog a je väčší než pôvodne vyzeral.
2. **11 hand-over riadkov** čaká na `appinara-weby-research`.
3. **Dve prehliadnuté odpovede** z rekonciliácie — Bylinkár.sk (#191, čaká 5 týždňov)
   a Medový obchod CERA MEL (#211) — podľa §12 ich rieši Martin osobne.

## Poznámky k behu

- Rotácia záloh (max 10) opäť zlyhala — staršie súbory v `backup/` sa nedajú zmazať
  (permission denied). Záloha pred behom vytvorená: `backup/Appinara_Prospekti_a_Outreach.bak-research-2026-08-13_1909.xlsx`
- V Exceli je predexistujúca duplicita domény `stefani.sk` (riadky 353 a 354,
  Penzión Lesnica a Penzión Stefani, oba „Treba research") — nie z tohto behu,
  ale stojí za opravu.
- Gmail v konceptoch prepisuje `appinara.sk` v podpise na sledovací redirect
  (`google.com/url?q=...`). Je to štandardné správanie Gmailu pri linkifikácii,
  príjemca vidí normálny odkaz — ale ak by ti to v podpise prekážalo, dá sa to
  obísť tým, že sa doména v podpise nepíše ako URL.
