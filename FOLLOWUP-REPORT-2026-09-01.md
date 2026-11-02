# Follow-up beh (gmail / appinarasolutions) — 01.09.2026

**Beh:** 17:03 – 17:56 · **Odoslaných: 15/15** (max limit) · **Expirované: 0**

## Výsledok

Kandidáti (Status `Odoslané`, O=gmail, vek 4–14 dní): **31**. Odpovedal: **0**
(reply-check cez thread + doménové/freemail hľadanie; syntax overená kontrolou
na známej odpovedi Stevula). Odoslaných 15 najstarších, všetky potvrdené
screenshotom aj API (`in:sent`), každý thread má presne 2 správy.

Stodola · Park Pilates · RETRO Sport · TEAM Reality · Mikovov Dvor · RealVEA ·
ADRILEX · Dentoma · Max Šport · Iron Gym · ALMA · Arcade · Hotel Orava ·
Retro Restaurant · Terra Mate → všetky `FU1 odoslané` (terminálny).

## Opravené / vyriešené

- **15 draftov z 31.08 bolo pokazených** — do tela sa vypísal surový markup
  (`<parameter name="htmlBody">`) a pätička mala `google.com/url` redirect.
  Prepísané nanovo, staré presunuté do koša.
- **Pätička opravená natrvalo:** Gmail API automaticky mení „appinara.sk" na
  google redirect. Rieši to `appinara<span></span>.sk` + posielať LEN `htmlBody`.
- **`update_draft` odpája draft z threadu** (potvrdený jav z poznámky Stodoly).
  Používať `create_draft` + `replyToMessageId`.
- Klikanie podľa súradníc je nespoľahlivé (frame 1343×739 vs viewport 1440×792 —
  príčina zlyhania 31.08). Riešené filtrom `in:draft to:{email}` + klikom cez `ref`.

## ⚠️ Na rozhodnutie

1. **TOMFYZIO (r579)** — už dostal 2 maily (08.07. + 26.08.), FU1 by bol tretí.
   Neodoslané; status zmenený `Odoslané` → **`Pozastavené`**, inak by ho každý
   ďalší beh znova vyberal. Zváž zlúčenie s júlovým riadkom.
2. **Súbeh úloh (porušenie železného pravidla).** Pri mojom pre-flighte (17:03)
   bol lock `DONE`; o 17:04:11 ho prepísal `RUNNING taskA-appinara-sk`. Gmail
   daily-send súbežne odoslal 5 cold mailov (SEVA, PP Safety, Active Team,
   Alpinka, Reality Gemer, r654–660). Weby-followup sa o 17:22 sám zastavil.
   Oba zápisy do Excelu prežili (overené), ale `load → save` celého zošita
   znamená reálne riziko straty dát. **Treba rozostupiť časy behov.**

## Pipeline

`FU1 odoslané` 203 · `Odoslané` 150 · `Expirované` 143 · `Odpoveď` 37 ·
`Draft pripravený` 34 · `Treba research` 40 · `Klient` 0

Ďalší beh: 14 kandidátov vo veku 4–5 dní (r283, 583, 585, 591, 580, 582, 624–631).

Záloha: `backup/Appinara_Prospekti_2026-09-01_1703.xlsx`
(prerezanie na 10 záloh zlyhalo — práva na `backup/`, nie kritické).
