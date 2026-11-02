# DAILY SEND REPORT — martin@appinara.sk — 28.08.2026

## Výsledok
- Warmup limit (pásmo 24.–28.08.): **20**
- Spotreba schránky pri pre-flighte (13:05): **0** → dnešný strop 20
- **Odoslaných mnou: 20/20** (všetkých 20 potvrdených hláškou „Message sent")
- **Podpis doplnený do všetkých draftov: 88 z 89** (20 pred odoslaním + 68 zostávajúcich)
- Nezávislé overenie: `in:drafts -"Martin Saraka"` → **0 výsledkov**. Žiadny draft
  v schránke už nie je bez podpisu. Konceptov ostáva 72, každý s podpisom práve raz.

## ⚠️ Kritické: dnes zo schránky odišlo 40 mailov, nie 20

Overené priamo v Gmaile (`in:sent after:2026/08/28`) — **40 správ**.

| Zdroj | Počet |
|---|---|
| Cold outreach (táto úloha) | 20 |
| FU1 follow-upy (úloha „weby follow-up") | 20 |
| **Spolu** | **40 = 2× warmup limit** |

**Ako k tomu došlo:** pri mojom pre-flighte o 13:05 bola dnešná spotreba schránky
nula — overené aj spätne v zálohe `backup/...backup-20260828-130505.xlsx`, ktorá
neobsahuje ani jeden FU1 riadok s dátumom 28.08. Môj strop 20 bol teda vypočítaný
správne. Follow-up úloha pre weby vetvu sa spustila **až o 14:05 počas môjho behu**
(jej vlastná záloha `backup/...backup-20260828-140534-webyFU.xlsx`) a poslala ďalších
20 z tej istej schránky. Ani jedna úloha o druhej nevedela.

To je presne ten scenár, pred ktorým varuje pravidlo „nikdy nebež súčasne s inou
outreach úlohou". Prejavilo sa to aj technicky — Chrome mi počas behu dvakrát spadol
a okno sa opakovane zmenšovalo, lebo ho riadili dve automatizácie naraz.

**Odporúčam:** zajtra (29.08.) zo schránky martin@appinara.sk **neposielať nič**,
aby sa týždňový priemer vyrovnal, a rozhodiť časy úloh tak, aby sa neprekrývali
(napr. cold outreach 09:00, follow-up 16:00). Dlhodobo by mal warmup strop počítať
**všetky** odchádzajúce maily zo schránky, nielen tie z vlastnej vetvy — inak sa
tento súčet zopakuje.

## Odoslané (20)

| # | Firma | Email |
|---|---|---|
| 1 | Fotolienka – Lenka Valentová | lenka@fotolienka.sk |
| 2 | KVŠ OCEÁN Bratislava | kurzy@klubocean.sk |
| 3 | Chata Piecky | info@chatapiecky.sk |
| 4 | Chata Raj | chataraj@chataraj.sk |
| 5 | Chata Pohoda | info@chatapohoda.sk |
| 6 | Reštaurácia Malom | laszlo.malom@gmail.com |
| 7 | Salaš Podhradie | info@salaspodhradie.sk |
| 8 | Koliba Likava | kolibalikava@gmail.com |
| 9 | Penzión Jánošíkova Valaška | recepcia@janosikovavalaska.sk |
| 10 | Penzión Termál | penzion@termal-podhajska.sk |
| 11 | Sklenárstvo Ložan | sklenarstvolozan@sklenarstvo.sk |
| 12 | Sklenárstvo Zajo (Biznár s.r.o.) | info@sklenarstvozajo.sk |
| 13 | Plachtinská farma Baránek | objednavky@baranek.sk |
| 14 | Včelárstvo Neviďanský | objednavka@nevidansky.sk |
| 15 | PRO RACING | servis@vasautoservis.sk |
| 16 | IZOMI s.r.o. | izomi@izomi.sk |
| 17 | Požičovňa NÁRADIA Snina | pozicovnasnina@gmail.com |
| 18 | GLAstav s.r.o. | glastav@glastav.sk |
| 19 | TOP SERVICE TT | topservicett@azet.sk |
| 20 | EKOFRUCT s.r.o. | zahradkar.chovatel@gmail.com |

Excel: každý riadok má Status „Odoslané", Posledný kontakt aj Pôvodné odoslané
28.08.2026 (overené — všetkých 20 má vyplnené N, takže follow-up ich zachytí).

## Podpis

Do tela každého draftu doplnené na koniec:

```
S pozdravom,
Martin Saraka
Appinara s.r.o. | appinara.sk | +421 917 566 722
```

Umiestnenie je na úplnom konci, teda **za** opt-out vetou — na rozdiel od mailov
z 27.08., kde bol podpis nad ňou. Zvolené kvôli spoľahlivosti hromadnej úpravy.

## Chyby a poznámky

**1. Autoškola Naďo (r623) — draft nenájdený.** V schránke nie je koncept pre
`kontakt@nado.sk`. Do Poznámok zapísané „Draft nenájdený 28.08.2026", status
ponechaný „Draft pripravený". Treba ho vytvoriť znova.

**2. Gmail konektor je napojený na inú schránku.** MCP konektor v tejto session
patrí `appinarasolutions@gmail.com`, nie `martin@appinara.sk`. Preto muselo všetko
ísť cez Chrome po jednom. Ak sa má hromadná úprava draftov robiť častejšie, oplatí
sa pridať konektor aj pre appinara.sk — cez API by to boli sekundy.

**3. Príčina celého problému:** research/drafting úloha prestala vkladať podpis do
tela draftu. Kým sa to neopraví, každý nový draft bude bez podpisu a daily send ho
bude blokovať. **Toto treba opraviť v prompte tej úlohy.**

**4. Prerezanie záloh zlyháva.** `Operation not permitted` — v `backup/` je vyše 60
súborov namiesto 10. Treba upratať ručne.

## Zostáva
**69** prospektov so statusom „Draft pripravený" a Odosielateľ „appinara.sk"
(18 Vysoká, 47 Stredná, 3 Nízka, 1 bez draftu). Všetky drafty sú pripravené
a podpísané — od 31.08. platí strop 30/deň.
