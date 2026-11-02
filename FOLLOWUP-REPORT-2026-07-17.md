# Follow-up Report — 17.07.2026

## Výsledok

**9 follow-upov odoslaných** (8× FU1, 1× FU2, 0× FU3). Žiadny prospekt neodpovedal → žiadny skip.

| Firma | Email | Stupeň | Pôvodný mail |
|---|---|---|---|
| AZ Dom a Záhrada | azdomazahrada@gmail.com | FU1 | 09.07. (8 dní) |
| Pražiarnička | info@praziarnicka.sk | FU1 | 09.07. (8 dní) |
| Anipet | obchod@anipet.sk | FU1 | 09.07. (8 dní) |
| FYMED | rehabilitacia@fymed.sk | FU1 | 09.07. (8 dní) |
| Dermatop | dermatop@dermatop.sk | FU1 | 09.07. (8 dní) |
| Fit Sport Training | info@fst.sk | FU1 | 09.07. (8 dní) |
| FOK realitná kancelária | fok@fok.sk | FU1 | 09.07. (8 dní) |
| Nitrianska realitná kancelária | reality@nitrianskereality.com | FU1 | 09.07. (8 dní) |
| Dentika | dentikanr@gmail.com | FU2 (video) | 08.07. (9 dní) |

Reply-check pred každým odoslaním: 0 odpovedí. Žiadne vymyslené čísla. 90s pauzy dodržané.

## ⚠️ Dva problémy, ktoré si zaslúžia pozornosť

### 1. Stĺpec N (Pôvodné odoslané) je prázdny pri 118 zo 119 „Odoslané" riadkov

Task číta kandidátov podľa stĺpca N. Ten ale takmer nikto nevypĺňa — takže striktne podľa zadania by dnes vyšiel **1 kandidát namiesto 9** a FU1 by sa nikdy neposielali.

Použil som fallback na stĺpec L (Posledný kontakt), ktorý pri statuse „Odoslané" **je** dátum pôvodného mailu (pri FU1/FU2 riadkoch sa L a N líšia presne podľa očakávania). Overil som to proti Gmailu: všetkých 8 mailov reálne odišlo 09.07. — presne ako hovorí L.

Pri 9 riadkoch, ktoré som dnes poslal, som **N doplnil** (overené z Gmailu). Zvyšných ~110 riadkov ostáva prázdnych — **odporúčam doplniť N z L hromadne**, inak FU1 pipeline ostane slepá.

### 2. V Gmaili ostalo 12 nespotrebovaných FU draftov zo včerajška (16.07. 07:31)

Včerajší beh vytvoril drafty, ale neodoslal ich (pravdepodobne nebol pripojený Chrome → task správne zastavil a nezmenil Status). Dnes som pre tých istých 8 prospektov vytvoril **druhý** draft. Odoslal som vždy **len jeden** — overené cez API, nikto nedostal dva maily.

**Ostáva 12 nespotrebovaných draftov, ktoré odporúčam zmazať ručne:**

- **8 duplikátov** (Nitrianska RK, FOK, Fit Sport Training, Dermatop, FYMED, Anipet, Pražiarnička, AZ Dom a Záhrada) — obsahovo totožné s tým, čo dnes odišlo. **Ak ich odošle `appinara-daily-send`, prospekt dostane ten istý bump dvakrát.**
- **4 osirelé FU1** (RIVER Restaurant, RUBIKON, Pilates My, Pilates pre zdravie) — včera boli v okne (8 dní), dnes sú na 9 dňoch, teda mimo 4–8 okna. Neposlal som ich; ich Status ostáva „Odoslané", takže ich už žiadny beh nechytí. Buď ich pošli ručne, alebo zmaž.

Drafty som nemazal — mazanie nie je v zadaní a nechcel som ti autonómne zahodiť obsah.

## Pipeline (po behu)

| Status | Počet |
|---|---|
| Draft pripravený | 140 |
| Odoslané | 121 |
| FU1 odoslané | 22 |
| FU3 odoslané (breakup) | 14 |
| Treba lepší research | 11 |
| Email chýba | 8 |
| Odpoveď | 6 |
| FU2 odoslané | 6 |
| LinkedIn iba | 2 |

Pozn.: `appinara-daily-send` bežal súbežne (~10:00) a odoslal 10 cold mailov (Draft pripravený 150→140). Excel som načítal načisto pred zápisom, takže jeho zmeny ostali zachované.

Backup: `Appinara_Prospekti_a_Outreach.xlsx.bak-followup-20260717-1130`
