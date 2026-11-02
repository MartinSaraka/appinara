# Daily send martin@appinara.sk — 11.08.2026

## Výsledok: 2 z 5 odoslaných

Warmup limit pre 11.08. (okno 10.–14.08.): **max 5**. Dnešná spotreba pred behom: **0**.
Strop teda 5, reálne odoslané **2**. Limit neprekročený.

| # | Firma | Email | Čas | Zapísané v Exceli |
|---|---|---|---|---|
| 1 | Chata Kamenta | ekonom@kamenta.sk | 20:03 | K=Odoslané, L=11.08.2026, N=11.08.2026 |
| 2 | TATRY PARTNER s.r.o. | info@pozicovnanaradia.eu | 20:06 | K=Odoslané, L=11.08.2026, N=11.08.2026 |

Overené v Odoslanej pošte: odosielateľ **Martin Saraka <martin@appinara.sk>**, adresáti sedia
s Excelom, podpis v odoslanom maile je čistý.

Zostáva **36** prospektov v stave „Draft pripravený“ s Odosielateľ = appinara.sk.

---

## Dve veci, ktoré si žiadajú tvoju pozornosť

### 1. Drafty sa vyrábajú BEZ podpisu — systémová chyba

Každý draft, ktorý som dnes otvoril, mal na mieste podpisu **prázdny odkaz**. Podpis
„Martin Saraka | Appinara s.r.o. | appinara.sk“ sa nezobrazoval vôbec — mail by odišiel
bez mena, firmy aj webu, z domény, ktorá sa ešte len rozbieha.

U oboch odoslaných som podpis doplnil ručne priamo v compose okne pred odoslaním.
V odoslanom maile sa vykreslil správne, ako čistý text s odkazom `appinara.sk`
(bez `google.com/url?q=…` redirectu, ktorý hlásil follow-up beh).

Je to rovnaká trieda chyby, akú dnes našla follow-up úloha, len s iným prejavom —
tam bol redirect viditeľný ako text odkazu, tu podpis zmizol úplne. Spoločná príčina:
pätička sa skladá ako HTML odkaz cez UI namiesto toho, aby išla ako hotový `htmlBody`.

**Odporúčanie:** opraviť to v research úlohe, ktorá drafty vytvára — posielať
`create_draft` rovno s `htmlBody`, kde je pätička hotová. Kým sa to nespraví, každý
ďalší beh bude musieť podpis dopĺňať ručne, alebo pôjdu maily bez neho.

### 2. Gmail UI sa počas behu rozpadáva

Po druhom odoslaní sa compose okno začalo zatvárať vždy, keď som klikol do tela mailu.
Reprodukovalo sa to pri troch prospektoch za sebou, aj po otvorení čerstvého tabu.
Follow-up beh dnes narazil na to isté (u nich „Rehaped“ zamrazil prehliadač na 5 pokusov).

Zastavil som na 2 odoslaných. Ďalej tlačiť by znamenalo riskovať pokazené drafty alebo
mail, ktorý odíde bez zápisu do Excelu — a teda duplicitu zajtra.

**Preskočené:** Plavecká škôlka M. Koňarčíkovej (info@plaveckaskolka.sk) — compose okno
padlo 2× po sebe. Status ostal „Draft pripravený“, v Poznámkach je záznam, takže
zajtrajší beh ho vezme normálne.

---

## Priebeh a kontext

Beh bol pôvodne zastavený o 17:33, lebo všetky tri outreach úlohy odpálili naraz
(catch-up burst po vypnutom počítači — normálne bežia o 10:00, 11:02 a 13:04).
Na tvoj pokyn som počkal, kým follow-up dobehne, a poslal až o 20:03, keď boli
Chrome aj Excel voľné.

Follow-up medzitým poslal 12 FU1 mailov — všetky z **gmail** schránky
(appinarasolutions@gmail.com), takže warmup kvótu appinara.sk nedotkli.

Vedľajší nález: **Gmail MCP konektor nie je pripojený na martin@appinara.sk.**
Dopyt na drafty tejto schránky vrátil prázdno. Pre túto vetvu sa teda nedá použiť
a odosielať sa musí cez Chrome u/3.

## Vykonané zmeny

- Záloha: `backup/Appinara_Prospekti_a_Outreach.bak-dailysend-20260811-1955.xlsx`
- Zápis do hárku `Prospekti`: riadky 420 a 421 (Odoslané), riadok 423 (poznámka o preskočení)
- Každý zápis overený spätným načítaním súboru hneď po uložení
- Rotácia starých záloh zlyhala (`Operation not permitted` na 7 súboroch zo 6.–7.08.)

## Na zajtra

1. Opraviť pätičku v research úlohe (bod 1 vyššie) — inak sa problém opakuje pri každom behu.
2. Ošetriť catch-up burst, aby úlohy nekolidovali: vypnúť „run task as soon as possible
   after a missed start“ v Task Scheduleri, alebo pridať zdieľaný lockfile.
3. Zajtrajší beh o 13:04 má k dispozícii 36 draftov a limit 5.
