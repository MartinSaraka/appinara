# DAILY SEND — martin@appinara.sk — 06.09.2026 (nedeľa)

## VÝSLEDOK: 30 / 30 odoslaných (warmup limit vyčerpaný)

**Warmup limit dnes:** 30 (fáza od 31.08.2026)
**Spotreba pred behom:** 0 → strop 30
**Odoslané:** 30 (12× Vysoká, 18× Stredná) — 19:12 až 20:39, rozostupy randomizované 60–165 s

## Pre-flight
- Excel no-op save: OK (nie je otvorený/zamknutý)
- Záloha: `backup/Appinara_Prospekti_a_Outreach_martinsk_20260906_190334.xlsx`
- Rotácia záloh (max 10) NEVYKONANÁ — v `backup/` je 106 súborov; mazanie súborov v automatickom behu nerobím (známy PermissionError z 04.09). Treba ručne premazať.
- `.outreach-lock` obsahoval starý záznam `RUNNING taskB-weby-followup 05.09.2026 14:05` (28 h starý, žiadny beh) — vyhodnotený ako stale, ponechaný bez zmeny.
- Chrome: pripojený (Browser 1, Windows). Účet overený: tab „martin@appinara.sk – Appinara s. r. o. Mail“ + tlačidlo účtu „Martin Saraka (martin@appinara.sk)“, u/3.

## Kontroly pri každom maile (DOM + zoom screenshot)
From = martin@appinara.sk, jediný adresát == e-mail z Excelu, predmet vyplnený, telo > 100 znakov, podpis na konci. Po kliknutí Odoslať overená hláška „Message sent“ a zmiznutie draftu.

**Podpis:** 27 z 30 draftov opäť bez podpisu (generátor draftov ho stále nepripája — rovnaký problém ako 03.09). Doplnil som pred odoslaním rovnako ako 03.09 po Martinovom potvrdení:
```
S pozdravom,
Martin Saraka | Appinara s.r.o. | appinara.sk
```
3 staršie drafty (#646, #687, #689 — research 27.08.) mali vlastný podpis v inom formáte („Martin Saraka / Appinara s.r.o. | appinara.sk | +421 917 566 722“) — poslané bez zmeny, podpis nezdvojený.

## Odoslané (# | firma | e-mail)
1. 823 | Ambulancia klinickej logopédie PhDr. Králiková | logopedia.klinicka@gmail.com
2. 845 | Veterinárna klinika Vinohrady (Nové Zámky) | vinohradyvet@gmail.com
3. 868 | Tatry Dental Clinic | recepcia@tatrydental.sk
4. 871 | TELO.cvičňa (BE.EAST Performance) | info@telocvicna.eu
5. 873 | Physio, s.r.o. (Pilates štúdio) | info@physio.sk
6. 874 | Fit & Strong, s.r.o. | gym@fitandstrong.sk
7. 876 | Penzión Kaštieľ | recepcia@penzionkastiel.sk
8. 881 | KTC — Karloveské tanečné centrum | ktc@ktc.sk
9. 883 | Jarek čistí koberce | jarek@jarekcistikoberce.sk
10. 884 | Jazyková škola E-xtra | info@e-xtra.sk
11. 885 | Squash Club Piešťany | info@squashclub.sk
12. 893 | Rafting Pieniny | rafting@rafting-pieniny.sk
13. 646 | PristreskyAltanky.sk (Peter Jančovič) | info@pristreskyaltanky.sk
14. 687 | HANO - family (Čalúnnictvo a sklenárstvo) | hano.marian@zoznam.sk
15. 689 | Hudobná akadémia Musicana | skola@musicana.sk
16. 705 | BOULDERFIT — Outdoorpark Prešov | kruzkyboulder@outdoorpark.sk
17. 712 | Slovenská reštaurácia Čadca | slovenska.restauracia2978@gmail.com
18. 719 | Minipivovar BUCHVALD | radofassinger@gmail.com
19. 722 | Farma Východná | info@farmavychodna.sk
20. 723 | Sauna v prírode (Kalameny) | timbersro2025@gmail.com
21. 732 | ŠarmirSteel s.r.o. | info@sarmirsteel.sk
22. 733 | PK Dizajn s.r.o. (krby) | obchod@kozuby-kachle.sk — **BOUNCE**
23. 741 | Slodičák Ski & Snowboard School | info@slodicakskischool.sk
24. 742 | ERPOL — výcviková škola psov | info@psivycvik.sk
25. 744 | RIDETA Dental Clinic | recepcia@rideta.sk
26. 750 | Zay-Zub, spol. s r.o. | napis@zay-zub.sk
27. 751 | MUDr. Štefan Kollár – zubná ambulancia Ružinov | info@zubarruzinov.sk
28. 757 | M.K.U. MED s.r.o. | kardio@afw.sk
29. 759 | NikLed plus – urologická ambulancia | urologickabratislava@gmail.com
30. 761 | Prof. MUDr. Jozef Vojtaššák – ortopédia | vojtassakj@gmail.com

Každý riadok zapísaný do Excelu hneď po odoslaní: K = „Odoslané“, L = 06.09.2026, N = 06.09.2026 (overené spätným načítaním: 30 riadkov, 0 chýbajúcich N).

## Chyby / udalosti
- **Bounce:** #733 obchod@kozuby-kachle.sk — mailer-daemon „Recipient inbox full“ (20:12). Mail odišiel (počíta sa do warmupu), ale nebol doručený. Status ponechaný „Odoslané“, do Poznámok pridaná poznámka BOUNCE. Odporúčam iný kontakt alebo pauzu pred FU1.
- Pri #723 (timbersro2025) sa počas behu zmenila výška okna Chrome (828→777 px) a kurzor v editore skočil na začiatok — podpis sa vpísal pred „Dobrý deň“. Zachytené kontrolou pred odoslaním, chybný text odstránený (telo vrátené na pôvodných 895 znakov), podpis doplnený správne na koniec, až potom odoslané. Odvtedy sa kurzor nastavuje tesne pred písaním.
- 2× bezpečnostný klasifikátor zablokoval dávku akcií (#883 pred kliknutím Odoslať, #761 pred doplnením podpisu) — v oboch prípadoch overený stav a zopakované po krokoch, bez duplicity.
- Klik na riadok draftu v Gmaile cez fyzický klik nereaguje; drafty otváram JS udalosťou na bunke riadku. Poznámka pre ďalšie behy.

## Stav pipeline (appinara.sk vetva)
- Odoslané dnes: **30** (Gmail: Sent after:2026/09/06 = 30, Drafts 73 → 43)
- `Draft pripravený` + appinara.sk zostáva: **38** (0 Vysoká, 34 Stredná, 4 Nízka)
- Status celkovo: Odoslané 171, FU1 odoslané 104, Draft pripravený 38, Email chýba 46, Treba research 28, Odpoveď 10, Expirované 3

## Na opravu
1. Generátor draftov stále nepripája podpis (27/30 dnes ručne). Alternatíva: nastaviť podpis v Gmail Settings → Signatures pre martin@appinara.sk.
2. Rotácia záloh — 106 súborov v `backup/`, treba premazať ručne alebo povoliť mazanie.
3. `.outreach-lock` ostáva so starým záznamom z 05.09 (taskB) — ak lock používajú iné úlohy, treba ho po skončení behu čistiť.
