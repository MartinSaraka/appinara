# DAILY SEND REPORT — martin@appinara.sk — 25.09.2026 (ZASTAVENÉ)

## Výsledok
Warmup limit dnes: **30** (fáza od 31.08.2026). Dnešná spotreba pred behom: 0.
**Odoslané: 2 z 30.** Beh zastavený po 2. maile — kolízia s inou outreach úlohou.

## Odoslané (overené v Sent, zapísané do Excelu)
| # | Firma | Email | Čas | Podpis |
|---|-------|-------|-----|--------|
| 1 | Denta Centrum (MDDr. Daniela Gáborová) | dentacentrum@dentacentrum.sk | 14:09 | OK v tele |
| 2 | SUN Dental (MUDr. Michal Krump) | info@krump.sk | 14:12 | OK v tele |

Obom zapísané: Status=Odoslané, L=25.09.2026, N=25.09.2026.
Podpis chýbal 0 draftom — oba mali "Martin Saraka | Appinara s.r.o." v tele.

## Dôvod zastavenia — SÚBEŽNÝ BEH INEJ ÚLOHY
Porušené železné pravidlo "nikdy nebež súčasne s inou outreach úlohou".

Dôkazy:
- `.writetest_weby_research_20260925-1206` — weby-research spustil pre-flight o **12:06 UTC**,
  teda minútu PREDO mnou (12:07). Môj pre-flight čítal `.outreach-lock` ako FREE, lebo
  research si lock nenastavuje na BUSY.
- `FOLLOWUP-REPORT-2026-09-25.md` vytvorený 12:08 UTC — bežala aj follow-up vetva.
- V Gmaile počas môjho behu **pribúdali nové drafty v reálnom čase**: 14:16, 14:17, 14:17
  (počet draftov 137 -> 138 -> 140).
- `Appinara_Prospekti_a_Outreach.xlsx` prepísaný cudzím procesom o **12:16:37 UTC**,
  teda PO mojich zápisoch.

Dva následky:
1. **Chrome**: research ovláda ten istý profil a kradne compose okná. Od 14:12 sa mi
   draft už neotvoril ani na 4 pokusy (OKO Prešov) — preto preskočený, neodoslaný.
2. **Excel**: dva procesy súčasne robia load->save celého zošita. Moje riadky 1001 a 1003
   tentokrát prežili (overené po cudzom zápise), ale ďalší súbežný save ich mohol
   prepísať — a prepísaný "Odoslané" = ten istý mail odíde zajtra druhýkrát.

## Stav po behu
- Zostáva "Draft pripravený" s Odosielateľ=appinara.sk: **116**
- Lock uvoľnený: `FREE - taskA daily-send ZASTAVENY ... (kolizia s weby-research, odoslane 2/30)`
- Záloha pred behom: `backup/Appinara_Prospekti_a_Outreach_taskA_martinsk_20260925_120736.xlsx`

## Ďalšie zistenia
- **Duplicitné drafty**: Denta Centrum mal v schránke DVA drafty (23.09. a 15.09.) na tú istú
  adresu. Odoslal som novší, starší tam ostal — zapísané do Poznámok r1001, aby neodišiel druhý.
  Oplatí sa preveriť, koľko ďalších prospektov má duplicitný draft.
- **OKO Prešov (r1004)** ostáva "Draft pripravený" na zajtra, v Poznámkach dôvod.
- Záloh v `backup/` je **146** (pravidlo hovorí max 10). Mazanie v pripojenom priečinku je
  vypnuté, takže som ich nečistil — treba buď povoliť mazanie, alebo upratať ručne.

## Odporúčanie
Rozhoďte časy úloh, aby sa neprekrývali (napr. research 09:00, daily-send 14:00, follow-up 16:00),
alebo nech si **research a follow-up tiež nastavujú `.outreach-lock` na BUSY** — dnes ho
nenastavil ani jeden, takže moja kontrola kolízie ho nemala ako zachytiť.
