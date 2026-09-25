# Daily send report — martin@appinara.sk

**Beh:** 20.08.2026 13:04 → prerušený, dokončený 21.08.2026 11:22
**Schránka:** martin@appinara.sk (Chrome u/3, overené — "Google Account: Martin Saraka (martin@appinara.sk)")

## Warmup limit

| Položka | Hodnota |
|---|---|
| Dátum behu | 20.08.2026 (okno 17.–21.08.) |
| Warmup limit | 10 |
| Dnešná spotreba schránky pred behom | 0 |
| Dnešný strop | 10 |
| **Reálne odoslané** | **2** |

## Odoslané

| # | Riadok | Firma | Email | Predmet | Overenie |
|---|---|---|---|---|---|
| 1 | 474 | Športové centrum Pionierska (Squash centrum) | pionierska@squashcentrum.sk | Rozvrh cvičení na Pionierskej — telefónne čísla v názvoch hodín | in:sent 1–1 of 1 ✓ |
| 2 | 486 | Dental Ateliér | info@dentalatelier.sk | Akútny pacient, ktorý zavolá po 15:30 | "Message sent" + in:sent ✓ |

Pri oboch overený adresát proti Excelu, neprázdne telo a podpis
„Martin Saraka | Appinara s.r.o. | appinara.sk | +421 917 566 722".
Zapísané do Excelu ihneď po odoslaní: Status = Odoslané, L = 20.08.2026, N = 20.08.2026.

## Chyby a prerušenia

1. **Prvý pokus o odoslanie #1 zlyhal ticho** — klik na Send podľa súradníc sa neprejavil
   (viewport Gmailu bol menší než screenshot). Overené cez `in:sent` → nič neodišlo,
   odoslané až druhým pokusom cez klik na element. Žiadna duplicita.
2. **Chrome stratil spojenie počas 3. mailu** (PSYCHOTOP, s.r.o. — jakubovova@gmail.com).
   Po obnovení overené: `in:sent to:jakubovova@gmail.com` → **No messages matched**,
   draft je stále v schránke (Drafts 46), riadok 488 v Exceli nedotknutý
   (Status = Draft pripravený, L aj N prázdne). **Mail neodišiel, duplicita nehrozí.**
3. **Beh sa obnovil až 21.08. o 11:15** (relácia bola cez noc uspatá).

## Prečo sa nepokračovalo

O 11:13 a 11:21 (21.08.) zapisovala do zdieľaného Excelu **iná outreach úloha**
(záloha `Appinara_Prospekti_2026-08-21_1113.xlsx`, nový riadok 181 Penzión Kráľov Prameň,
Odosielateľ = gmail). Železné pravidlo „nikdy nebež súčasne s inou outreach úlohou"
→ beh ukončený bez ďalšieho odosielania. Zvyšné maily pôjdu ďalším behom.

## Stav pipeline (appinara.sk)

| Status | Počet |
|---|---|
| Draft pripravený | **44** (všetky s validným emailom) |
| Odoslané | 39 |
| Čaká na draft | 18 |
| Email chýba | 5 |
| Treba research | 5 |

## Poznámky k ďalšiemu behu

- Prvý v poradí (Vysoká priorita): riadok 488 PSYCHOTOP, s.r.o. — jakubovova@gmail.com,
  draft „Cesta od cenníka k termínu v PSYCHOTOP" je pripravený a overený.
- Rotácia záloh v `backup/` zlyhala na oprávneniach (mazanie starých súborov nie je
  povolené) — priečinok má 40 záloh namiesto 10. Netreba riešiť automaticky.
- Klikanie podľa súradníc v Gmaile je nespoľahlivé; funguje klik na element
  (`ref`) + overenie odoslania cez `in:sent to:<email>`.
