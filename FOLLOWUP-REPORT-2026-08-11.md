# Follow-up report — 11.08.2026 (gmail vetva)

## Súhrn

- **Kandidáti** (Status „Odoslané", O = gmail, vek 4–14 dní): **13**
- **Odpovedali (skip):** 0
- **FU1 odoslané a overené:** **12**
- **Neodoslané:** 1 (Rehaped — technická chyba, draft čaká)
- **Novo „Expirované":** **0** — nikto nevypadol z okna, behy držia tempo

## FU1 odoslané (12) — všetky overené v pôvodnom vlákne cez Gmail API

| Riadok | Firma | Čas |
|---|---|---|
| 402 | DENTISTS | 17:53 |
| 403 | Impulse Gym | 18:15 |
| 173 | Kvitok | 18:25 |
| 175 | Hollywood Smile | 18:28 |
| 335 | DLUGO reality | 18:33 |
| 337 | LiCaffè | 18:37 |
| 391 | Penzión VILLA | 18:41 |
| 397 | Umelecká keramika | 18:43 |
| 399 | Milinko | 18:46 |
| 404 | Olymp Center | 18:49 |
| 405 | Spiš Restaurant | 18:52 |
| 325 | Reštaurácia Centrum Zvolen | 18:55 |

Status → „FU1 odoslané" (terminálny), L = 11.08.2026. Pauzy 68–145 s, CTA rotované
(všetkých 6 variantov z guide). Každý FU stojí na konkrétnom fakte zo stĺpca M.

**Nezávislá kontrola:** `in:sent after:2026/08/11` vracia presne 12 mailov prospektom.
Žiadny duplikát, žiadne vymyslené čísla.

## Neodoslané (1)

**Rehaped (r401)** — Gmail vlákno opakovane zamrazí renderer (5 pokusov, 3 rôzne karty;
`Input.dispatchMouseEvent` timeout). Status ostáva „Odoslané", takže ďalší beh ho korektne
zoberie (vek 8 dní, stále v okne 4–14).
⚠️ **V tomto vlákne sú DVA drafty** (starý z 10.08. + nový z 11.08. s čistou pätičkou) —
pred ďalším behom nechaj len ten novší.

## Chyby, ktoré si žiadajú tvoj zásah

**1. Tri maily odišli s google-redirect pätičkou** (r403 Impulse Gym, r173 Kvitok,
r175 Hollywood Smile). Telo mailu je v poriadku, len v podpise je namiesto `appinara.sk`
dlhá `google.com/url?q=…` adresa. Poznačené v stĺpci M.

**Príčina a riešenie (dôležité pre budúce behy):** predošlý report tvrdil, že redirect je
len zobrazenie v editore. **Nie je** — overené na odoslanom maile. Gmail zlinkuje holú
doménu v `body`. Fungujúce riešenie: `create_draft` posielať **aj s `htmlBody`**, kde je
pätička už hotový odkaz `<a href="http://appinara.sk">appinara.sk</a>`. Takto vzniknutých
9 mailov má pätičku čistú. Odporúčam zapísať do promptu úlohy.

**2. Dvaja prospekti odpovedali a mali zlý status** — opravené na „Odpoveď":
- **Arbor Dental (r380)** — odpísal 10.08.: *„máme recepčnú, toto nepotrebujeme"* (odmietnutie).
- **ZUPPA (r396)** — odpísal **dnes 11.08. o 13:54**, vecne a ústretovo: komunikácia mailom
  alebo na čísle v pätičke, pre CZ zákazníkov majú zuppa.cz. **Stojí za osobnú odpoveď.**

Obom bol FU1 odoslaný 10.08. a odpoveď prišla až po ňom — pravidlo porušené nebolo, len
predošlý beh odpovede nezachytil.

**3. Starý mail pre Reštauráciu Centrum (07.08.) odišiel s redirect adresami v tele** —
veta o dvoch doménach je pre príjemcu prakticky nečitateľná. Dnešný FU1 je preformulovaný
bez holých domén.

**4. Kvitok a Hollywood Smile majú v pôvodnom maile (07.08.) vymyslené čísla**
(„+25% repeat purchase", „+18% AOV", „−50% času", „+30% konverzia") — porušenie pravidla B.
Ide o starú šablónu; dnešné FU1 žiadne čísla neobsahujú.

**5. Pokazené drafty v Konceptoch na ručné zmazanie** (nemám nástroj na mazanie):
6 z behu 10.08. + 7 nahradených dnes (staré verzie s redirect pätičkou) + starý
duplikát Penzión VILLA z 21.07. **Žiadny z nich neposielaj.**

## Pipeline (stĺpec K, celý hárok)

| Status | Počet |
|---|---|
| Draft pripravený | 163 |
| Expirované | 112 |
| FU1 odoslané | 67 |
| Treba research | 30 |
| Odpoveď | 23 |
| FU2 odoslané | 23 |
| FU3 odoslané (breakup) | 22 |
| Email chýba | 15 |
| Odoslané | 6 |
| LinkedIn iba | 2 |
| Pozastavené | 1 |

## Kontroly

- Reply-check pred každým mailom: vlákno (`get_thread`) + doména pri vlastných doménach /
  presná adresa pri freemailoch. Nikto z 13 kandidátov neodpovedal.
- Excel: zápis po každom potvrdenom odoslaní, stav znovu načítaný a overený.
- Záloha: `backup/Appinara_Prospekti_2026-08-11_1733.xlsx` (ponechaných 7 záloh).
