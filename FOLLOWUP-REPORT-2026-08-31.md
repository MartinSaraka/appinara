# Follow-up sequence — appinarasolutions@gmail.com — 31.08.2026

## Zhrnutie
- Kandidátov v okne 4–14 dní: **21** (spracovaných 15, limit na beh)
- Odpovedalo (skip navždy): **1**
- Preskočených z iného dôvodu: **1**
- **FU1 odoslaných: 0** — odosielanie zastavené (viď Chyby)
- **Novo "Expirované": 0** (nikto nebol nad 14 dní)
- FU1 drafty pripravené a čakajú v Gmaili: **15**

## Odpoveď (terminálne)
| Firma | Kedy | Čo |
|---|---|---|
| LA SKALA lezecké centrum | 26.08.2026, romca@laskala.sk | Slušné nie — „vyhovuje nám to tak, ako to máme". Status = Odpoveď. |

## Preskočené
| Firma | Dôvod |
|---|---|
| TOMFYZIO centrum | V Gmaile nájdený starší cold mail na tú istú adresu z **08.07.2026**. Prospekt už dostal 2 maily → FU1 by bol tretí. Riadok bol 26.08. založený ako „NOVÝ PROSPEKT" bez dedupe proti júlovému odoslaniu. |

## Drafty pripravené (15) — čakajú na odoslanie
Stodola (7 dní) · Park Pilates · RETRO Sport · TEAM Reality · Mikovov Dvor · RealVEA ·
ADRILEX · Dentoma · Max Šport (5 dní) · Iron Gym · ALMA studio · Arcade · Hotel Orava ·
Retro Restaurant · Terra Mate (4 dni)

Každý stojí na konkrétnom fakte zo stĺpca M + jeden nový uhol (napr. rozpor otváracích
hodín u Stodoly, hláška „JavaScript is required" vo formulári Park Pilates, kórejský cenník
bez kórejskej objednávky u Dentomy). CTA rotované cez všetkých 6 variantov.

## Chyby
- **Odosielanie cez Chrome zastavené.** Screenshot frame (1324×744) nesedel so skutočným
  viewportom (1552×873), takže klik podľa súradníc otvoril **cudzí draft**
  (cold mail pre alpinka@alpinka.sk, nie follow-up). `resize_window` to neopravil.
  Riziko odoslania nesprávneho mailu nesprávnemu prospektovi → beh zastavený pred prvým
  Send. API kontrola potvrdila: dnes po 08:35 (daily send) **neodišiel žiadny mail**,
  všetkých 15 draftov je neporušených.
- **Stodola — draft odpojený z threadu.** `update_draft` nevie zachovať `replyToMessageId`,
  takže prepis draftu z 28.08. ho premenil na samostatnú správu (subject „Re: …" ostal).
  Ďalší beh ho pri kontrole podľa threadId nenájde → hrozí druhý draft. Poznačené v M.
- Statusy 15 prospektov ponechané na „Odoslané", aby ich ďalší beh znovu zachytil; drafty
  v threadoch sa vďaka kontrole v KROKU 3 zaktualizujú, neduplikujú.
- Rotácia záloh: staršie zálohy sa nedali zmazať (cudzie súbory), nová záloha
  `backup/Appinara_Prospekti_2026-08-31_1102.xlsx` vytvorená OK.

## Pipeline
| Status | Počet |
|---|---|
| Odoslané | 112 |
| FU1 odoslané | 188 |
| Odpoveď | 37 |
| Expirované | 143 |
| Draft pripravený | 88 |
| Klient | 0 |
