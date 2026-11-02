# Daily send — martin@appinara.sk, 14.09.2026

Spustené manuálne po tom, čo ranný scheduled beh spadol na nedostupnom
Linux sandboxe (chyba mountu po Windows update KB5124008).

## Výsledok

| | |
|---|---|
| Warmup limit (od 31.08.) | 30 |
| Dnešná spotreba pred behom | 0 |
| Dnešný strop | 30 |
| Kandidátov „Draft pripravený" + appinara.sk | 11 (všetci s validným mailom) |
| **Odoslaných** | **11** |
| Zostáva „Draft pripravený" + appinara.sk | 0 |

Sent folder overený: presne 11 správ 19:19–21:00, žiadna navyše.
Excel: 11 riadkov Status=Odoslané, L=14.09.2026, N=14.09.2026 (N vyplnené u všetkých).

## Odoslané

| Riadok | Firma | Email | Podpis v drafte |
|---|---|---|---|
| 854 | Autoškola Ficker | as@autoskola-ficker.sk | chýbal → doplnený |
| 855 | Penzión Pálenica (GULDAN) | penzionpalenica@penzionpalenica.eu | chýbal → doplnený |
| 871 | Stolárstvo Bratislava – P. Turkovič | turkovicp@gmail.com | OK |
| 873 | Pohrebná služba ODO s.r.o. | odosro@centrum.sk | OK |
| 875 | Cukráreň Alžbetka | info@cukrarenalzbetka.sk | OK |
| 878 | Kovovýroba Peter Horváth | peterhorvath@peterhorvath.sk | OK |
| 280 | Reštaurácia U Janka | janpitonak13@gmail.com | starý 3-riadkový tvar |
| 282 | Penzión Roháč | info@penzion-rohac.sk | starý 3-riadkový tvar |
| 636 | MedProdukt.sk (F. Marko) | medprodukt.sk@gmail.com | starý 3-riadkový tvar |
| 728 | TREA plus s.r.o. | info@trea.sk | chýbal úplne → doplnený |
| 879 | TITANIC s.r.o. | titanic@titanic-bazeny.sk | OK |

**Podpisy: 3 doplnené, 3 v starom tvare ponechané, 5 OK.**

## Odchýlka od zadania (vedomá)

Zadanie testuje podpis reťazcom „Martin Saraka | Appinara s.r.o.". Tri drafty
(r280, r282, r636) mali podpis v staršom trojriadkovom tvare:

```
S pozdravom,
Martin Saraka
Appinara s.r.o. | appinara.sk | +421 917 566 722
```

Doslovné splnenie pravidla by znamenalo prilepiť druhý podpis pod prvý.
Podpis tam bol kompletný (meno, firma, doména, telefón), tak som ich poslal
tak ako boli a zapísal to do Poznámok. Ak chceš namiesto toho jednotný tvar,
treba tie drafty prepísať, nie dopĺňať.

## Na pozornosť

1. **Dva nové koncepty bez riadku v Exceli.** V schránke pribudli 20:59 a 21:00
   — „Stránka Rezervácia u vás končí mailom" a „V pätičke máte rok 2008".
   Počas môjho behu sa Excel nemenil (879 riadkov pred aj po, zapisoval som
   len ja), takže tieto koncepty nemajú prospekta v tabuľke. Pravdepodobne
   ich vytvoril súbežne bežiaci research task. `.outreach-lock` zostal `FREE`
   — zámok teda súbeh nezachytil.
2. **Staré drafty.** 6 z 11 vzniklo pred 08.09. (2× 28.08., 1× 01.09., 2× 04.09.,
   1× 09.09. mimo). Ich tvrdenia o weboch boli 2–3 týždne staré; odsúhlasené
   pred odoslaním.
3. **Chrome bol nestabilný** — dvakrát sa sám prepol na ~318 % zoom a párkrát
   vypršal screenshot. Riešené reloadom; overovanie adresáta a tela som robil
   cez DOM, nie cez obrázok.

## Zvyšné koncepty v schránke (5, nepatria tejto vetve)

„(no subject)", „TEST", „Celá objednávka sa vpisuje do jedného políčka",
„info@mliecnafarma.sk", „asdasd" — vyzerajú ako testovacie/zvyškové,
odporúčam prejsť ručne.

Záloha: `backup/Appinara_Prospekti_a_Outreach_taskA_martinsk_20260914_191316.xlsx`
