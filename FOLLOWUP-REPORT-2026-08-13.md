# Follow-up report — gmail vetva — 13.08.2026

## Zhrnutie

- **Kandidáti (Odoslané + gmail):** 1
- **Odpovedali (skip):** 0
- **FU1 odoslané:** 0
- **Novo Expirované:** 0
- **Chyby:** 2 (jedna blokujúca, jedna spôsobená mnou)

## Kandidát

| Riadok | Firma | Email | Pôvodne odoslané | Vek | Okno |
|---|---|---|---|---|---|
| 401 | Babilia Medical s.r.o. (Rehaped) | recepcia.rehaped@gmail.com | 04.08.2026 | 9 dní | FU1 (4–14 dní) |

Reply-check: bez odpovede (vlákno má 1 správu; freemail → hľadané len presnou adresou).

## Blokujúca chyba — štvrtý neúspešný beh po sebe

Gmail compose v tomto vlákne zamŕza (10., 11., 12. aj 13.08.). Dnes: klik na Odoslať sa
mechanicky vykoná, ale Gmail nereaguje; klik do tela draftu aj Ctrl+Enter vrátia
„renderer frozen". Skúšané 3 čerstvé karty, súradnicový aj element klik.

**Overené cez Gmail API po každom pokuse: vlákno má stále 1 správu → mail odoslaný nebol.**
Status zostáva `Odoslané`, `Posledný kontakt` nezmenený.

## Chyba, ktorú som spravil

Pri diagnostike som draft prepísal cez API — tým sa **stratilo vlákno** a do pätičky sa
dostal google.com/url redirect. Opravené: vytvoril som nový správny reply draft
(vlákno „Dotazník k vyšetreniu", čistá pätička `appinara.sk`). Pokazený duplikát sa
nepodarilo zmazať (blokované oprávnenie), preto je premenovaný na
**„[NEPOSIELAŤ — duplikát z 13.08.2026, zmazať]"** — prosím zmaž ho ručne z Konceptov.

## Čo treba od teba

1. **Odoslať FU1 ručne do 18.08.2026** — vlákno „Dotazník k vyšetreniu — wordový súbor
   v roku 2026". Potom padne do Expirované.
2. **Zmazať duplikát** označený „[NEPOSIELAŤ …]".
3. Zvážiť, či tento prospekt nenechať dobehnúť — štyri behy naň už padli.

## Pipeline (celý Excel, nezmenená)

| Status | Počet |
|---|---|
| Draft pripravený | 162 |
| Expirované | 112 |
| FU1 odoslané | 67 |
| Treba research | 30 |
| Odpoveď | 23 |
| FU2 odoslané (historické) | 23 |
| FU3 odoslané / breakup (historické) | 22 |
| Email chýba | 16 |
| Odoslané | 8 |
| Čaká na draft | 7 |
| LinkedIn iba / Pozastavené | 3 |
| **Klient** | **0** |

Záloha: `backup/Appinara_Prospekti_2026-08-13_1910.xlsx` (rotácia záloh zlyháva —
staršie súbory sa nedajú mazať, permission denied; v `backup/` je 21 súborov).
