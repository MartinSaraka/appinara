# Daily send report — martin@appinara.sk, 24.09.2026

**Warmup limit: 30 (dátum ≥ 31.08.). Dnešná spotreba pred behom: 0. Odoslaných: 10.**
Beh ukončený predčasne — Chrome okno sa minimalizovalo (viewport 0×0), klikanie ani
Ctrl+Enter sa prestali doručovať. Zámok uvoľnený (`.outreach-lock` = FREE).

## Pre-flight
- Zapisovateľnosť Excelu: OK
- Záloha: `backup/Appinara_Prospekti_a_Outreach_taskA_20260924_160756.xlsx`
- ⚠ Prerezanie záloh na 10 zlyhalo (PermissionError, rovnako ako 24.09. ráno) — v `backup/` je 140 súborov. Treba zmazať ručne.
- Prvý pokus o beh o 16:07 bol zastavený kvôli zámku BUSY od paralelného behu; ten
  skončil 15:08 a neodoslal nič.
- Schránka overená: **martin@appinara.sk** (u/3), 118 draftov na štarte.

## Odoslané (10)
| # | Firma | Email |
|---|---|---|
| 1 | eKancelárskePotreby.sk | info@ekancelarskepotreby.sk |
| 2 | Kasman Dental | info@kasmandental.sk |
| 3 | Carpe Dient (Dental Care) | poprad@carpedient.sk |
| 4 | TAUDENT | taudent@taudent.sk |
| 5 | Štúdio tanca a pohybu Alegria | alegriatrnava@gmail.com |
| 6 | OrthoAid (MUDr. Feranec) | orthoaid@orthoaid.sk |
| 7 | Fyzio Poprad | recepcia@fyziopoprad.sk |
| 8 | REA Nitra | kalkulacie@reanitra.sk |
| 9 | Plávanie NEMO Nitra | plavanienemo@gmail.com |
| 10 | ANIDOR (MUDr. Ján Gurský) | anidor@zubarbardejov.sk |

Každý mail overený pred odoslaním (adresát = Excel, telo neprázdne, podpis v tele)
a po odoslaní potvrdený hláškou „Message sent". Rozostupy randomizované 69–112 s.
Všetkých 10 riadkov zapísaných hneď po odoslaní: K = Odoslané, L = 24.09.2026,
N = 24.09.2026.

## Podpisy
**Dopĺňaný podpis: 0 draftov.** Všetkých 11 otvorených draftov už malo v tele
„Martin Saraka | Appinara s.r.o. | appinara.sk" — ide o nové drafty (po 08.09.).

## Neodoslané / na zásah

**1. Denta Centrum — `dentacentrum@dentacentrum.sk` (preskočené zámerne)**
Draft má pokazený predmet: *„Tlačidlo Objednajte si ošetrenie vedie na nefunguje"* —
vyzerá na chybu v generátore predmetov (chýba objekt medzi „vedie na" a „nefunguje").
Telo aj podpis sú v poriadku. **Neodoslal som ho**, aby z warmup domény neodišiel
zjavne pokazený cold mail. Status ponechaný „Draft pripravený", poznámka zapísaná.
Navyše má tento príjemca **2 drafty** v schránke.

**2. SUN Dental — `info@krump.sk` (beh prerušený tu)**
Draft bol otvorený a overený (predmet „Objednávanie len od 7 do 8 a od 14 do 15",
podpis OK), ale odoslanie už neprešlo — okno Chrome bolo minimalizované.
**Mail neodišiel**, draft zostáva v schránke, status nezmenený.

**3. Carpe Dient — 2 drafty**
Odoslaný novší („Objednávkový formulár…"), starý z 15.09. („Termín dohodnutý priamo
s doktorom…") zostal v schránke — treba zmazať, aby ho budúci beh nepoužil.

## Ostatné chyby
- Jeden batch skončil timeoutom a jeden hlásil „Chrome not connected", ale oba sa
  reálne vykonali — stav som po každom overil, k dvojitému odoslaniu nedošlo.
- Pri jednom prospektovi zostal otvorený predošlý compose; zatvoril som ho cez
  „Save & close" ešte pred odoslaním, takže nehrozila zámena adresáta.

## Zostáva
**88 prospektov** so statusom „Draft pripravený" a Odosielateľ = appinara.sk
(z toho 1 = Denta Centrum s pokazeným predmetom).

## Odporúčania
1. Maximalizovať / nechať otvorené Chrome okno počas behu — minimalizované okno
   (viewport 0×0) znemožní odosielanie.
2. Opraviť predmet pre Denta Centrum a skontrolovať generátor predmetov na rovnakú
   chybu v ďalších draftoch.
3. Zmazať duplicitné a staré drafty (Carpe Dient, Denta Centrum).
4. Vyriešiť mazanie starých záloh — priečinok `backup/` má 140 súborov.
