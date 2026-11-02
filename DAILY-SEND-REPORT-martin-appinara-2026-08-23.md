# Daily send report — martin@appinara.sk — 23.08.2026 (nedeľa)

## Výsledok: 20 odoslaných z 20 plánovaných

**Warmup:** harmonogram pre nedeľu 23.08. limit nedefinuje (okná sú po–pi), takže
automatický limit bol 0. Martin dal explicitný pokyn „pošli 20" — limit prepísaný
na 20, čo zodpovedá tieru, ktorý sa otvára 24.08.

**Čas behu:** 20:35–21:34, rozostupy randomizované 60–178 s.

## Overenie

| Kontrola | Výsledok |
|---|---|
| Gmail `in:sent newer_than:1d` | **1–20 of 20** ✓ |
| Excel: appinara.sk + Odoslané + L=23.08.2026 | **20** ✓ |
| Chýbajúce N (Pôvodné odoslané) | **žiadne** ✓ |
| Účet | martin@appinara.sk (u/3) — overený v titulku aj screenshotom ✓ |

## Odoslané

| # | Firma | Email | Prio |
|---|---|---|---|
| 1 | Matejko s.r.o. – Výtvarnícke potreby | matejko@prevytvarnikov.sk | Vysoká |
| 2 | BAGETERIA.EU (iKa SR) | objednavky@bageteria.eu | Vysoká |
| 3 | Chata Stela Štúrovo | chatastelasturovo@gmail.com | Vysoká |
| 4 | SMART požičovňa náradia | info@smartpozicovna.sk | Vysoká |
| 5 | Monikine torty | info@monikinetorty.sk | Vysoká |
| 6 | Plavecká škola Fliper | info@plavaniefliper.sk | Vysoká |
| 7 | Jazdecký klub Envirokone | otazky@jazdeckaskola.sk | Vysoká |
| 8 | Stolárstvo HRM | mhriblan@azet.sk | Vysoká |
| 9 | Pestovateľská pálenica Vráble | info@palenicavrable.sk | Vysoká |
| 10 | Pálenica Poproč | palenicapoproc@gmail.com | Vysoká |
| 11 | Atletika Košice | trener@atletikakosice.sk | Vysoká |
| 12 | Rámko (Košice) | ramko@ramko.sk | Vysoká |
| 13 | JOLL s.r.o. | info@joll.sk | Vysoká |
| 14 | OFTA s.r.o. | oftaoptik@gmail.com | Vysoká |
| 15 | Zubné centrum Nitra | drstanko@drstanko.sk | Stredná |
| 16 | Fyzio-Care | info@fyzioterapeuttrencin.sk | Stredná |
| 17 | Sklenárstvo ALLA | sklenarstvoalla@gmail.com | Stredná |
| 18 | Vinárstvo Kopeček | obchod@vinarstvokopecek.sk | Stredná |
| 19 | Autoškola Jednička | autoskola@aesluzby.sk | Stredná |
| 20 | SZUŠ Vlada Urbana | volnerova@szuske.sk | Stredná |

Vyčerpaná celá **Vysoká** priorita (14) + 6 Stredná.

## ⚠️ Hlavný nález: drafty sa vyrábajú bez podpisu

**36 z 38 draftov nemalo podpisový blok.** Overené dvoma nezávislými hľadaniami
(`in:drafts "917 566 722"` a `in:drafts "S pozdravom"`) — obe vrátili tie isté
2 drafty (Ranč Lhota, Pivovar Vŕšky). Odoslané maily z 11.–21.08. podpis majú,
takže chyba vznikla pri generovaní draftov, nie pri odosielaní.

Podpis som pred odoslaním dopĺňal do každého draftu v tvare zhodnom s odoslanými:

```
S pozdravom,
Martin Saraka
Appinara s.r.o. | appinara.sk | +421 917 566 722
```

**→ Opraviť research/draft task, inak to isté nastane pri zvyšných 20 draftoch.**

### Dva maily odišli s podpisom na zlom mieste

Kým som doladil detekciu kotvy, dva maily odišli s korektným, ale zle umiestneným
podpisom. Obsah je kompletný, odosielateľ identifikovaný — len to vyzerá neupravene:

- **Monikine torty** — podpis *za* opt-out vetou namiesto pred ňou
- **Sklenárstvo ALLA** — podpis na úplnom **začiatku**, pred „Dobrý deň,"

Dôvod: drafty majú tri rôzne HTML štruktúry tela. Po druhom prípade som pridal
kontrolu polohy podpisu s rollbackom — od vtedy sa nič zlé neodoslalo.

### Čo guard zachytil (a opravilo sa pred odoslaním)

- **Pálenica Vráble** — nemá samostatnú opt-out vetu (je vpletená do P.S.).
  Podpis umiestnený pred P.S. podľa konvencie listu.
- **Vinárstvo Kopeček** — telo zabalené o úroveň hlbšie; vloženie skončilo na
  začiatku → automaticky vrátené späť, doplnený zostup do kontajnera, odoslané správne.

## Ďalšie poznámky

- Pre-flight OK: zápis do Excelu overený, záloha `backup/Appinara_Prospekti_a_Outreach.20260823-203403.xlsx`.
  Prerezanie starých záloh zlyhalo (`Operation not permitted`) — neblokujúce, ale zálohy sa kopia.
- Prvý pokus o klik na Send minul tlačidlo (Gmail medzi screenshotom a klikom zmenil
  veľkosť okna). Prešiel som na klikanie cez element ref / DOM, ďalej bez problémov.
- **Počas behu bežal aj iný task** — do Excelu pribudli riadky 533–536 a počet draftov
  stúpol z 38 na 48. Moje zápisy sa neprepísali (overené), ale súbežný beh je proti
  pravidlám zadania; stojí za to skontrolovať plánovač.

## Stav pipeline (Odosielateľ = appinara.sk)

| Status | Počet |
|---|---|
| Odoslané | 65 |
| **Draft pripravený** | **20** |
| Čaká na draft | 18 |
| Email chýba | 5 |
| Treba research | 5 |
| FU1 odoslané | 2 |

Zo zostávajúcich 20 draftov sú 3 Vysoká (Kachliarstvo Artpece, Pálenica Solčany,
Farma Brezany), zvyšok Stredná.

## Ďalší beh

Pondelok 24.08. — riadny tier **max 20/deň**. Pipeline pokryje presne jeden deň.
Pred ním odporúčam opraviť generovanie podpisu.
