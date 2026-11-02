# Follow-up report — gmail vetva (appinarasolutions@gmail.com)
**Dátum behu:** 20.08.2026 | **Odoslaných mailov: 0**

## Výsledok

| Položka | Počet |
|---|---|
| Kandidáti (Status „Odoslané" + O=gmail) | 23 |
| Z toho v okne 4–14 dní (FU1) | **0** |
| Odpovedali (skip) | 0 — reply-check sa nespúšťal, nebolo koho kontrolovať |
| **FU1 odoslané** | **0** |
| **Novo „Expirované"** | **0** |
| Chyby | 0 |

**Dôvod nulového behu:** všetkých 23 gmail kandidátov je mladších ako 4 dni —
12 odoslaných 17.08. (3 dni), 10 odoslaných 19.08. (1 deň), 1 odoslaný dnes 20.08.
Nikto nie je starší než 14 dní, takže ani žiadna expirácia. Excel sa nemenil.

Okno sa najbližšie otvorí:
- **21.08.2026** — batch zo 17.08. (12 prospektov)
- **23.08.2026** — batch z 19.08. (10 prospektov)
- **24.08.2026** — 1 prospekt z 20.08.

## ⚠️ Nález: 17 duplicitných FU draftov visí v schránke

Pri kontrole draftov som našiel **17 neodoslaných reply-draftov**, ktoré patria
prospektom s **terminálnym statusom**. Overil som dva threpady (dlugoreality.sk,
rehaped) — pôvodný FU **už odoslaný bol** (label SENT, 11.08. resp. 13.08.).
Excel je teda správny; tie drafty sú **druhá, nikdy neodoslaná kópia** toho istého FU.

**Riziko:** ak niekto otvorí Drafts a klikne Odoslať, prospekt dostane **3. mail** —
porušenie železného pravidla „max 2 maily na prospekta".

| Dátum draftu | Počet | Status prospektov |
|---|---|---|
| 11.08.2026 | 8 | FU1 odoslané |
| 13.08.2026 | 1 | FU1 odoslané |
| 28.07.2026 | 8 | FU2 / FU3 odoslané (breakup) |

Dotknuté adresy: info@dlugoreality.sk, findura.rastislav@gmail.com,
info@olympcenterkn.sk, eshop@milinko-oblecenie.sk, info@umelecka-keramika.sk,
penzionvilla@penzionvilla.sk, info@licaffe.sk, info@restauraciacentrum.sk,
recepcia.rehaped@gmail.com, obchod@anipet.sk, info@praziarnicka.sk,
azdomazahrada@gmail.com, greenpig.pigg@gmail.com, speranzatn@gmail.com,
info@grapegym.sk, recepcia@novaklinika.sk, info@artofpilates.sk

**Nezmazal som ich** — task ma na mazanie neoprávňuje. Odporúčam ručné zmazanie,
alebo doplniť do promptu krok „po potvrdenom sende zmaž zvyšný draft v threade".

## Pipeline (celý Excel, 531 riadkov)

| Status | Počet |
|---|---|
| Odoslané | 60 |
| FU1 odoslané | 86 |
| Odpoveď | 26 |
| Expirované | 140 |
| Draft pripravený | 70 |
| Čaká na draft | 48 |
| Treba research | 36 |
| Email chýba | 17 |
| FU2 / FU3 odoslané (historické, terminálne) | 23 / 22 |
| LinkedIn iba | 2 |
| **Klient** | **0** |

## Poznámky k behu

- Pre-flight write-test Excelu prešiel; záloha `backup/Appinara_Prospekti_2026-08-20_1102.xlsx`.
- Rotácia starých záloh (držať max 10) **zlyhala** — `PermissionError` pri mazaní
  súborov v `backup/`. Záloh v tomto vzore je 14. Nekritické, ale rotácia
  nefunguje ani v ďalších behoch, kým sa neopravia práva na priečinok.
- Chrome sa nespúšťal — nebolo čo odosielať.
