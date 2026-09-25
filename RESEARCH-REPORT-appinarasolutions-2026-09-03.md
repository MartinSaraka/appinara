# Research report — appinara-research-prospects, 03.09.2026 (gmail vetva)

## Backlog guard
- **N_real = 0.** V schránke je 83 konceptov, ale ANI JEDEN cold draft: všetkých 46 spárovaných patrí riadkom so Status Odoslané/FU1/FU2/FU3/Expirované a vyplneným stĺpcom N — sú to zvyšky po odoslaní, nie čakajúce drafty. Zvyšných 27 príjemcov nemá riadok v Exceli (predexcelová éra + salóny).
- Excel má **0 riadkov** so Status „Draft pripravený" + Odosielateľ „gmail" → guard nezastavil beh, štandardných 20 prospektov.
- **Rekonciliácia: 0 opravených riadkov** (žiadny kandidát; falošný poplach vylúčený — všetky spárované riadky majú N alebo terminálny status).
- Odovzdané riadky (Status „Čaká na draft" + gmail): **0** — weby vetva nič neodovzdala.
- Pre-flight: no-op save OK, záloha `backup/Appinara_Prospekti_a_Outreach_research_20260903_090622.xlsx`. Mazanie starých záloh zlyhalo na PermissionError (známe, beh nezastavuje).

## Prerozdelenie kvót podľa reálnych reply rates (gmail)
Fitness/Wellness 13,0 % · Zdravotníctvo 10,4 % · E-shop 9,5 % · Reality 4,4 % · Hotel 2,6 % · **Gastro 0 % (0 z 23)**.
Kvóty posunuté: zdravotníctvo 4→5, fitness 3→5, gastro 3→2, hotely 3→1.

## Výsledok — 20 nájdených, 20 zapísaných (# 861–880)
| | počet |
|---|---|
| Draft pripravený (gmail, overený v schránke) | **6** |
| Čaká na draft (odovzdané weby vetve, O = appinara.sk) | **13** |
| Email chýba | **1** |

Segmenty: E-shop 5 · Zdravotníctvo 5 · Fitness/Wellness 5 · Gastro 2 · Reality 2 · Hotel 1.

### Drafty v schránke (6)
Iba z dreva · Garden Team · OUTDPRO · PartyHry.sk · Mokoša · Estiva.
Všetkých 6 overených cez `list_drafts`. Dĺžka 91–110 slov, CTA nerotuje duplicitne (#4/#6/#2/#1/#3/#5), cyrilika 0 zhôd.

### Vylúčení
- **Duplicity:** desiatky kandidátov vypadli na DEDUPE-LIST (napr. bioshop.sk, valachshop.sk, okfish.sk).
- **Už to majú (pravidlo I) — 14 firiem:** Ludopolis.sk (Smartsupp), WomenFit (rezervujsi.sk), Extreme Fit (isportsystem), FITSEN (Calendiari), ANIMA Prešov + House of Athletics (vlastný booking), a 8 z 10 testovaných realitiek malo pri nehnuteľnosti formulár „Mám záujem"/obhliadka.
- **Bez overeného emailu:** OptikCentrum (na /kontakt/ je len telefón a formulár) → riadok so statusom „Email chýba", žiadne hádanie info@doména.

## Čo zachytilo pravidlo H
Tri tvrdenia, ktoré by inak išli von nesprávne:
1. **OptikCentrum** — pôvodná úvaha „chýba online objednanie". Overením sa našiel funkčný kalendár obsadenosti na samostatnej doméne optikcentrum.sk → ponuka rezervácie by bola presne ten Slovak Pub scenár.
2. **ADL Reality + rodinnereality.sk** — tvrdenie „chýba dopyt na obhliadku" (presne to, na čom sme zhoreli pri Reality Gemer). Overené otvorením konkrétnych ponúk a `document.forms = 0`; pri 8 z 10 konkurentov formulár JE, takže tieto dve sú doložená výnimka, nie dojem.
3. **Reštaurácia u Čertici** — regex našiel „crisp" a „Previo", oboje falošné pozitíva (CSS `--shadow--crisp`, text „Previous slide"). Bez kontroly kontextu by firma vypadla ako SKIP.

Navyše 9 firiem preklopených z Ponuky 2 na Ponuku 3 (rule G + rozhodovacie pravidlo §3): kde chýba základ — rezervácia, formulár, denné menu sa prepisuje ručne — sme neposlali chatbota, ale odovzdali riadok weby vetve.

## Silné hooky (pre learning)
- **Estiva:** ich vlastná veta „slová ako plastická operácia znejú desivo… za nimi stoja internetové mýty" → „kto sa v tej vete spozná, spozná sa o desiatej večer". Postreh aj ponuka sú z ich vlastného textu, nedá sa poslať nikomu inému.
- **Garden Team:** šesť paralelných kontaktov na /kontakt/ vrátane troch projektantov → jeden vstup + otvorené priznanie „Nie je to AI projekt." (rule G).

## Pipeline
„Draft pripravený" celkovo: **6 gmail** (nové) + 61 appinara.sk. Čaká na draft: 26 (13 nových).
Backlog guard nezasiahol — schránka je na cold drafty prázdna, daily-send má z čoho brať.
