# Follow-up report — appinarasolutions@gmail.com — 28.08.2026

## Súhrn
- **Kandidáti (Odoslané, gmail, 4–14 dní):** 9 (všetci deň 4, pôvodné odoslanie 24.08.2026)
- **Odpovedali (skip):** 0
- **FU1 odoslaných:** 8
- **Novo „Expirované":** 0
- **Neodoslané / chyba:** 1 (Reštaurácia Stodola)

## Odoslané FU1 (8)
| Riadok | Firma | Email | Čas |
|---|---|---|---|
| 518 | Kachliar Košice (ANTOL s.r.o.) | info@kachliarkosice.sk | 11:10 |
| 165 | Starobystrická reštaurácia | starobystricka.restauracia@gmail.com | 11:13 |
| 168 | Penzión Mária - Family Resort | recepcia@penzionmaria.eu | 11:16 |
| 338 | Diamonds Roastery | shop@diroastery.sk | 11:21 |
| 339 | Koliba Kamzík (APLEND s.r.o.) | koliba@kamzik.sk | 11:24 |
| 483 | AHURA reality, s.r.o. | info@ahurareality.sk | 11:27 |
| 485 | MFyzio — súkromná rehabilitačná klinika | mfyzio123@gmail.com | 11:29 |
| 497 | Aspadit Dental spol. s r.o. | info@aspaditdental.eu | 11:31 |

Všetkých 8 overených cez Gmail API — každý thread má teraz 2 správy. Status v Exceli
nastavený na terminálne „FU1 odoslané", Posledný kontakt 28.08.2026.

## Chyby a veci na pozornosť

**1. Reštaurácia Stodola (r242) — FU1 NEODOSLANÝ**
Draft je pripravený a správny v threade „Dopyty na oslavy v dvoch Stodolách", ale
Gmail compose opakovane nereagoval na Send (3 pokusy vrátane Ctrl-Enter). Overené cez
API: thread má stále len 1 správu, nič sa neodoslalo. **Status ponechaný „Odoslané"**,
takže ďalší beh ho zachytí (deň 7, stále v okne 4–14 dní). Alebo pošli ručne.

**2. Orphan draft „Re: Aspadit Dental: párny alebo nepárny týždeň?"**
Pri oprave preklepu som použil `update_draft` — a to draft **odpojilo od threadu**
(Gmail API mu pridelil nový threadId). Vytvoril som preto nový, správne zaradený draft
a ten sa odoslal. Odpojený duplikát ostal v Konceptoch; **neodstránil som ho** (mazanie
dát nerobím automaticky). **Zahoď ho ručne** — inak by Aspadit dostal ten istý mail
druhýkrát.

> Poznámka do promptu úlohy: `update_draft` na reply-draft ruší väzbu na thread.
> Namiesto „existujúci draft zaktualizuj" je bezpečnejšie draft zahodiť a vytvoriť
> nanovo cez `create_draft` s `replyToMessageId`.

**3. Koliba Kamzík — zopakovaná CTA**
FU1 končí „Ukázal by som vám to priamo na vašom webe. Kedy sa vám to hodí?" — čo je
takmer doslovne CTA z pôvodného mailu tomu istému príjemcovi (§7 hovorí rotovať).
Telo FU je nové a konkrétne (majú už formulár na eventy → netreba stavať od nuly),
ale záver mal byť iný. Editáciu v Gmaile som nedokončil, viď bod 4.

**4. Prehliadač: okno zmenšené na ~1091×42 px**
Chrome mal celý beh minimálny viewport, `resize_window` to nezmenilo. Klikanie podľa
súradníc preto mierilo mimo (jeden pokus o editáciu textu skončil v poli „Komu" —
zachytené a vyčistené skôr, než sa čokoľvek odoslalo). Odosielanie cez element
referencie fungovalo spoľahlivo. **Pred ďalším behom zväčši okno Chrome.**

**5. Rotácia záloh nefunguje**
`backup/` má 26 záloh vzoru `Appinara_Prospekti_*.xlsx`, staré sa nedajú mazať
(„Operation not permitted"). Limit 10 sa nedodržiava — treba vyriešiť oprávnenia
alebo mazať ručne.

## Pipeline (Excel, hárok Prospekti)
| Status | Počet |
|---|---|
| Odoslané | 110 |
| FU1 odoslané | 159 |
| Odpoveď | 36 |
| Klient | 0 |
| Draft pripravený | 97 |
| Expirované | 143 |
| Treba research | 38 |
| Email chýba | 19 |

Záloha: `backup/Appinara_Prospekti_2026-08-28_1102.xlsx`
