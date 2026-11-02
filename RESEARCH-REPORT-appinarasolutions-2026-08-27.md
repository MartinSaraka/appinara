# Research report — appinara-research-prospects | 27.08.2026

## Backlog guard
- **N_real = 20** skutočných cold draftov v schránke (merané cez `list_drafts`, zhoda príjemcu s riadkami Status „Draft pripravený" + Odosielateľ „gmail"). Všetkých 20 riadkov malo reálny koncept.
- **Rekonciliácia: 0 opravených riadkov** — žiadne fantómové riadky.
- N_real < 30 → **štandardný beh**. Guard beh nezastavil.
- Krok 1 (hand-over od weby vetvy): **0 riadkov** so Status „Čaká na draft" + Odosielateľ „gmail" — nebolo čo dokončiť.

## Výsledok
- **Nájdených:** 19 kandidátov (research cez WebSearch + WebFetch homepage + podstránka + recenzie)
- **Vylúčení:** 6 duplicity (FYMED, Jupiti, EAST Point, Pilates Trnava, Park Pilates, Brezka) · 4 už majú chat widget (lovime.sk – Tawk, komplet-shop.sk – Smartsupp, hacik.sk, jantarpd.sk) · 2 bez overeného emailu (vcelieprodukty.sk, plavanie-nitra.sk)
- **Zapísaných: 13 riadkov** (# 664–676)
  - **8 × „Draft pripravený" (gmail)** — koncept vytvorený A overený v schránke
  - **5 × „Čaká na draft" (appinara.sk)** — z diagnostiky §3 vyšla Ponuka 3 (web/e-shop), odovzdané weby vetve s celým researchom v Poznámkach
- **0 × „Treba research"**

### Rozdelenie podľa segmentov (gmail drafty)
E-shop 3 (Bábuška, MEDÁREŇ, Kevinshop) · Zubná klinika 2 (Hric, Linea Dent) · Veterina 1 · Zdravotníctvo/optika 1 (OKO-S) · Fitness 1 (Hybko)

Kvóty som prerozdelil podľa reálnych reply rates z Excelu: Fitness 12,2 %, Zdravotníctvo 11,3 %, Zubné 11,1 %, E-shop 10,6 % → posilnené. Gastro 0/21, Hotel 2,9 %, Reality 4,7 % → utlmené (0 gmail draftov; gastro kandidát Vŕšky išiel na weby vetvu podľa diagnostiky).

## Silné hooky (na učenie)
1. **Linea Dent** — v ich vlastnom cenníku je položka „Strata času, nedostavenie sa na termín — 25 €". Otvorenie ocenilo najlepší cenník v odbore, medzera znie: „to nie je chyba, to je príznak — pokuta ten problém nerieši, len ho zaplatí." Ponuka 1, s explicitným „Nie je to AI projekt" (rule G).
2. **Veterina na Družbe** — ich FAQ má 15 reálnych klinických odpovedí („hladovka 12–24 h", „odporúčam odfotiť stolicu"). Ocenenie: „to nie je marketingový text, to je ordinácia napísaná do webu." Medzera: majiteľ psa to v nedeľu ráno scrolluje a výjazd sa dá dohodnúť iba cez Messenger.

## Pipeline po behu
- „Draft pripravený" + gmail: **24** (16 zostatok po dnešnom daily sende + 8 nových)
- „Čaká na draft" + appinara.sk: **34** (29 + 5 nových)
- Backlog guard **nezasiahol** — schránka je zdravá.

## Poznámky k behu
- Excel: zapisovateľnosť overená (open + no-op save), záloha `backup/Appinara_Prospekti_a_Outreach_research_20260827_095516.xlsx`. **Staré zálohy sa nepodarilo prerezať na 10** — mazanie v backup adresári vracia „Operation not permitted". Adresár má ~66 súborov; treba prerezať ručne.
- Všetkých 8 draftov prešlo quality checkom (7 otázok §9): žiadne vymyslené čísla, žiadne „AI"/„chatbot" v predmete, CTA rotované (6 rôznych vzorov na 8 mailov), každý otvára konkrétnym ocenením pred medzerou, každý končí opt-out vetou. Tri drafty (Bábuška, MEDÁREŇ, Linea Dent) presiahli 180-slovný strop a boli skrátené.
