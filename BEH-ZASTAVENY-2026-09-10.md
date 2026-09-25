# Beh zastavený — appinara-weby-research, 10.09.2026

## Dôvod: PRE-FLIGHT ZLYHAL — Excel nedostupný

Linux sandbox sa v tejto session nepodarilo nabootovať. Štyri identické pokusy,
vždy tá istá chyba:

```
failed to mount ... /outputs: source path ... is under Plan9 share "c"
which is not mounted
```

Dôsledok: `Appinara_Prospekti_a_Outreach.xlsx` sa nedá ani **prečítať**, ani
**zapísať** — openpyxl/pandas nie sú dostupné a Read tool binárny .xlsx neotvorí.

## Čo sa NEDALO spraviť (a preto beh nepokračoval)

| Krok | Prečo blokovaný |
|---|---|
| Záloha Excelu do `backup\` | žiadny shell |
| Backlog guard + rekonciliácia (0c) | vyžaduje porovnanie konceptov s riadkami Excelu |
| Staré drafty / drafty bez podpisu (0d, 0e) | „draft bez riadku" sa bez Excelu nedá určiť |
| Dokončenie odovzdaných riadkov „Čaká na draft" | riadky sa nedajú načítať |
| DEDUPE nových firiem | **kritické** — bez dedupe hrozí, že firma dostane mail z oboch schránok (železné pravidlo §10) |
| Zápis nových riadkov | žiadny zápis do .xlsx |

## Prečo som nerobil drafty „aspoň naslepo"

Research a drafty bez dedupe by sa nedali zapísať do Excelu a hrozilo by
duplicitné oslovenie firiem, ktoré už spracovala gmail vetva. Guide aj prompt
to zakazujú. Prompt hovorí: pri zlyhaní pre-flightu → STOP.

## Zistené mimochodom

- `.outreach-lock` = **FREE** (taskA-daily-send-martinsk ukončený 09.09.2026 15:15).
  Zámok nebol dôvodom zastavenia.
- Guide je na **v4.1** — súhlasí s promptom, netreba nič meniť.
- **Gmail konektor v tejto session je pripojený na `appinarasolutions@gmail.com`**
  (gmail vetva), NIE na martin@appinara.sk — potvrdené v poli `sender` u konceptov.
  Meranie guardu pre túto vetvu by aj tak muselo ísť cez Chrome u/3.

## Odporúčanie

Spustiť úlohu znova, keď bude sandbox dostupný. Nič sa nezapísalo, žiadny
koncept nevznikol, Excel je nedotknutý — opakovaný beh je bezpečný.
