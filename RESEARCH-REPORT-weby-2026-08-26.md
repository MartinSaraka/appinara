# Research report — weby/apky vetva, 26.08.2026

## Backlog guard: STOP — beh zastavený (2. deň po sebe)

| Meranie | Hodnota |
|---|---|
| Konceptov v schránke (Chrome u/3, titulok „Drafts (63) — martin@appinara.sk") | **63** |
| **N_real (cold drafty = zhoda s riadkami „Draft pripravený" + appinara.sk)** | **60** |
| Nepodarky mimo zoznamu | 3 (známe z 25.08. — „asdasd", mliecnafarma +1) |
| Prah | > 40 → **STOP celý beh** |

Meranie priamo v schránke: 3 dávky `in:draft {to:…20 adries}` → 20/20 + 20/20 + 20/20 = 60.
Aritmetika sedí: 63 = 60 + 3.

⚠️ **Metodická poznámka:** negačná krížová kontrola `in:draft -{…60 adries}` dnes VRÁTILA
NEZMYSEL (53) — Gmail query s 60 operandmi v jednej OR skupine potichu zlyháva/orezáva sa.
Pri počítaní cez DOM treba rátať len viditeľné riadky (offsetParent !== null) — `tr.zA`
selektor inak započíta aj skryté cache-ované views (70/dávka). Merať vždy pozitívnymi
dávkami po 20.

## Rekonciliácia (povinná): 0 opravených riadkov
Všetkých 60 riadkov „Draft pripravený" + Odosielateľ „appinara.sk" má reálny koncept
v schránke. Žiadne fantómy. Excel bez zmien (len záloha do backup\).

## Výsledky behu
- Nových firiem: 0, draftov: 0, „Treba research": 0, duplicity: 0, presuny do AI vetvy: 0
  — guard beh zastavil pred researchom.
- 23 riadkov „Čaká na draft" (appinara.sk) ostáva nedotknutých — spracuje ich prvý beh
  po poklese backlogu pod prahy.

## Prevádzkové poznámky
1. **Backlog neklesol** (60 → 60): daily send 25.08. poslal 0 cold mailov (drafty bez
   podpisu), follow-up minul celý limit 20 na FU1. Ak daily send dnes o 13:00 pošle 20,
   zajtra (Štv) bude N_real ≈ 40 — research pobeží obmedzene (8) najskôr v piatok.
2. **3 nepodarené koncepty** stále v schránke — odporúčam ručne zmazať (5. opakovanie).
3. u/3 session aktívna, schránka prístupná — daily send môže bežať.
4. Záloha: `backup/Appinara_Prospekti_a_Outreach_backup_2026-08-26_weby.xlsx`.

## Stav vetvy appinara.sk (po rannom guard-stope)
**Draft pripravený 60** · Čaká na draft 23 · Odoslané 38 · FU1 odoslané 21 · Odpoveď 5 · Treba research 5 · Email chýba 5 · Expirované 3

---

# DODATOK — manuálny beh na pokyn Martina (26.08., ~11:00–12:00)

Martin osobne zadal „nájdi ďalších 30" a po upozornení na guard zvolil **full pipeline aj s draftami** — guard vedome prebitý používateľom.

## Výsledok: 30 nových firiem, 30 draftov, 0 „Treba research"
- Research cez 4 paralelných agentov (~40 kandidátov), z toho 2 vyradené ako duplicity (AJC Snina, Bageteria — obe už v Exceli) a 8 vyradených kvalitatívne (Podlesok, PBelektro, Pasztorek, Jazyková škola PB, JK Monty, Múzeum Na čiare, VEPI, Klampiarstvo Halvoň).
- Všetkých 30 draftov vytvorených cez Chrome u/3 (view=cm compose + insertText trigger autosave) a **overených pozitívnou dávkou v schránke: 15 + 15 = 30**. Titulok: „Drafts (93)" = 63 + 30. Presuny do AI vetvy: 0 (všetky nálezy = Ponuka 3).
- Excel: riadky 594–623, čísla #634–663, Status „Draft pripravený", Odosielateľ „appinara.sk". Priorita: 25 Vysoká / 5 Stredná.
- ⚠️ Počas behu paralelne bežal gmail research (pridal #617–633) — moje čísla som prečísloval na 634+, kolízia vyriešená.
- Drafty sú BEZ textového podpisu (podľa guide §10 — HTML podpis dopĺňa Gmail).

## Najsilnejšie nálezy (learning)
1. **Penzión Termál (Podhájska)** — rezervačný kalendár na živom webe hlási chybu a posiela hostí na Booking.com (provízie).
2. **Ruty vet (BA)** — „objednávkový systém" = telefón dostupný 2 h denne; ordinačné hodiny ručne prepisované každý týždeň.
3. **Požičovňa NÁRADIA Snina** — v živom cenníku lorem ipsum blok šablóny („35 € za hodinu").

## Stav vetvy appinara.sk PO manuálnom behu
**Draft pripravený 90** · Čaká na draft 29 (gmail vetva medzitým odovzdala ďalších 6) · Odoslané 38 · FU1 21 · Odpoveď 5 · Treba research 5 · Email chýba 5 · Expirované 3

Pri warmup limite 20/deň je backlog 90 draftov ≈ 4,5 dňa čistého posielania — follow-upy oň súperia o ten istý limit. Research behy do vyčistenia backlogu guard zastaví (správne).
