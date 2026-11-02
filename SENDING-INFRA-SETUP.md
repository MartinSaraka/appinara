# Sending infraštruktúra pre Appinara — nákupný zoznam a setup

**Cieľ:** dve nové odosielacie schránky (weby/apky + AI), aby sa dal outreach zdvihnúť
z dnešných ~50 mailov/týždeň na 250+ bez rizika, že Google obmedzí účet.

**Stav pri písaní (03.08.2026):** všetko sa posiela z `appinarasolutions@gmail.com` (free Gmail),
manuálnym klikaním v Chrome. Strop ~10/deň. Pipeline: 153 hotových draftov, 143 kontaktovaných bez follow-upu.

---

## KROK 0 — Oprava appinara.sk (sprav to dnes, nesúvisí s outreachom)

Pri kontrole DNS som našiel, že hlavná doména nemá autentifikáciu mailov:

| Záznam | Stav |
|---|---|
| SPF | **chýba** (v TXT je len `google-site-verification`) |
| DKIM | nenašiel som na selektoroch `dkim`, `websupport`, `mail`, `selector1`, `google`, `k1` |
| DMARC | `v=DMARC1; p=quarantine` — **aktívny** |

DMARC na `p=quarantine` inštruuje príjemcov, aby mail hodili do spamu, keď neprejde
SPF ani DKIM. Neprejde ani jedno. Každý mail z `martin@appinara.sk` je teda kandidát na spam —
vrátane odpovedí klientom.

**Oprava — v DNS na Websupporte:**

```
Typ:   TXT
Názov: @            (teda appinara.sk)
Hodnota: v=spf1 include:_spf.websupport.sk ~all
```

Overené: `_spf.websupport.sk` existuje a obsahuje odosielacie IP Websupportu.
Zámerne `~all` (softfail), nie `-all` — kým nemáš istotu, že si podchytil všetky
zdroje odosielania (kontaktný formulár, fakturačný systém, EmailJS).

**Druhá oprava — DKIM:** zapni v administrácii Websupport pri e-mailovej doméne
(hľadaj „DKIM" alebo „podpisovanie e-mailov"). Vygeneruje ti TXT záznam, ktorý vložíš do DNS.

**Tretia oprava — DMARC nemá reporting.** Zmeň existujúci záznam:

```
Typ:   TXT
Názov: _dmarc
Hodnota: v=DMARC1; p=quarantine; rua=mailto:martin@appinara.sk; fo=1
```

Bez `rua=` nevidíš žiadne reporty a nemáš ako zistiť, že niečo padá.

> Kým nie je SPF aj DKIM funkčné, zvážil by som dočasne `p=none` namiesto `p=quarantine`.
> Lepšie mať mail doručený a nesledovaný, ako sledovaný a v spame.

---

## KROK 1 — Nákup domén

Overil som dostupnosť cez RDAP. **Voľné je všetko**, vrátane `.com`:

| Doména | Stav | Verdikt |
|---|---|---|
| **appinara.com** | voľná | **kúpiť** — najlepšia reputácia TLD + ochrana značky |
| **appinara.eu** | voľná | **kúpiť** — dôveryhodná pre SK/EU B2B |
| appinara.io | voľná | preskočiť — drahá, žiadny prínos |
| appinara.digital / .agency / .studio / .tech | voľné | preskočiť — slabšia reputácia TLD, častejšie zneužívané spamermi |
| appinara.dev / .app | voľné | preskočiť — vynútené HTTPS, žiadny prínos pre redirect |

**Rozdelenie:**

```
martin@appinara.com  →  kampane WEBY / APKY   (Ponuka 3 z researchu — väčší objem, preto silnejšia TLD)
martin@appinara.eu   →  kampane AI            (Ponuka 1 + 2)
martin@appinara.sk   →  NEDOTKNUTÁ. Len odpovede a existujúci klienti.
```

**Kde kúpiť:** Websupport — už tam máš `appinara.sk`, takže jedna administrácia,
SK faktúra a podpora. Cena orientačne 12–18 €/rok za doménu.
(Cloudflare Registrar je lacnejší a má lepší DNS panel, ale je to druhé miesto na správu.)

### Prečo nie `webyapky.sk` alebo `appinara-ai.sk`

Príjemca si doménu overí. Keď je to variant Appinary, nájde tvoju firmu a web.
Keď je to samostatná značka bez histórie, nenájde nič — a to je horšie ako neposlať nič.
Špecializácia patrí do obsahu mailu a podpisu, nie do názvu domény.

### Prečo nie `weby@` a `ai@`

Role adresy (`info@`, `sales@`, `ai@`) spam filtre vážia horšie a čitateľ ich číta
ako hromadnú rozosielku. Odosielateľ je vždy človek: `martin@`.

---

## KROK 2 — Google Workspace

**Odporúčanie: jeden Workspace účet, dve domény, dvaja používatelia.**

```
Primárna doména:   appinara.com
Sekundárna doména: appinara.eu        (nie „alias" — sekundárna doména umožňuje vlastných používateľov)
Používateľ 1:      martin@appinara.com
Používateľ 2:      martin@appinara.eu
```

Business Starter, cca 7 €/používateľ/mesiac → **~14 €/mes spolu**.
Limit odosielania 2 000 správ/deň — mnohonásobne nad tým, čo potrebuješ.

**Poznámka k tomu, čo si vyberal:** v tej otázke som písal „vlastné konto", čo znie
ako dva samostatné Workspace účty. Cena je rovnaká tak či tak (2 × 7 €), rozdiel je:

- **Jeden účet, dve domény** (odporúčam) — jedna administrácia, jedno fakturovanie.
  SPF/DKIM/DMARC sú aj tak per doména, takže reputácia domén je oddelená.
- **Dva samostatné účty** — navyše izoluje aj riziko zásahu na úrovni Google konta,
  ale sú to dve administrácie a dve fakturácie. Pri korektnom posielaní je to riziko malé.

`appinara.sk` do Workspace **nepridávaj**. Mail na nej beží na Websupporte (MX → `mx10/mx20.websupport.sk`)
a nechceme na nej nič meniť.

---

## KROK 3 — DNS záznamy pre nové domény

Pre `appinara.com` aj `appinara.eu` **identicky** (len `rua` sa líši).

### 3a. MX — doručovanie do Google

```
Typ: MX   Názov: @   Priorita: 1   Hodnota: smtp.google.com
```

Toto je aktuálny zjednodušený Google záznam. Ak ti Workspace sprievodca ponúkne
starú päticu (`ASPMX.L.GOOGLE.COM` a spol.), funguje tiež — nemiešaj ich ale dokopy.

### 3b. SPF

```
Typ: TXT   Názov: @   Hodnota: v=spf1 include:_spf.google.com ~all
```

Jedna doména = **jeden** SPF záznam. Nikdy dva.

### 3c. DKIM

Nedá sa pripraviť dopredu, kľúč generuje Google:

1. Admin console → **Apps → Google Workspace → Gmail → Authenticate email**
2. Vyber doménu, **Generate new record**, dĺžka kľúča **2048 bit**, prefix `google`
3. Skopíruj hodnotu do DNS ako TXT na názov `google._domainkey`
4. Počkaj, kým sa záznam rozšíri, a v konzole klikni **Start authentication**

Zopakuj pre obe domény zvlášť.

### 3d. DMARC

Prvé tri týždne v režime monitorovania:

```
appinara.com:
Typ: TXT   Názov: _dmarc
Hodnota: v=DMARC1; p=none; rua=mailto:martin@appinara.com; fo=1

appinara.eu:
Typ: TXT   Názov: _dmarc
Hodnota: v=DMARC1; p=none; rua=mailto:martin@appinara.eu; fo=1
```

`rua` je zámerne na **tej istej doméne** — keby ukazovala na `appinara.sk`, musel by si
na `appinara.sk` publikovať ešte autorizačný záznam. Takto netreba.

Po 3 týždňoch, keď reporty ukážu, že všetko prechádza, zmeň `p=none` na `p=quarantine`.

### 3e. Presmerovanie webu

Obe domény nech 301 presmerujú na `appinara.sk` — príjemca si doménu overí a musí
niekde pristáť. Cez Websupport (služba presmerovania) alebo pridaním domény vo Vercel projekte.

Keď budú hotové cieľové stránky, presmeruj adresne:
`appinara.com → appinara.sk/weby` a `appinara.eu → appinara.sk/ai`.

---

## KROK 4 — Nastavenie schránok

Pre každú schránku, pred prvým cold mailom:

- **Profilová fotka** — schránka bez fotky vyzerá ako jednorazová
- **Podpis podľa ponuky:**
  ```
  appinara.com:  Martin Saraka · Appinara s.r.o. — weby a aplikácie
                 appinara.sk · +421 917 566 722

  appinara.eu:   Martin Saraka · Appinara s.r.o. — AI integrácie
                 appinara.sk · +421 917 566 722
  ```
- **Vypni sledovanie otvorení** (tracking pixel) minimálne počas warmupu — je to jeden
  z najsilnejších spam signálov
- **Plain text**, žiadne obrázky v tele, žiadne prílohy, **maximálne jeden odkaz**
- Pridaj obe domény do **Google Postmaster Tools** — jediný bezplatný pohľad na reputáciu

---

## KROK 5 — Warmup (3 týždne, nedá sa preskočiť)

Nová doména bez histórie, ktorá zrazu pošle 30 cold mailov, ide do spamu a stiahne
so sebou aj doménu. Plán **na jednu schránku**, len pracovné dni:

| Obdobie | Cold mailov / deň | Čo robiť naviac |
|---|---|---|
| **Dni 1–3** | **0** | Píš si z novej adresy s ľuďmi, ktorých poznáš (5–10 mailov) a nechaj ich odpovedať. Odpoveď je najsilnejší pozitívny signál. |
| **Týždeň 1** | 5 → 10 | Len prospekty s najlepším hookom (priorita Vysoká). Odpoveď musí byť pravdepodobná. |
| **Týždeň 2** | 15 → 20 | Sleduj Postmaster Tools. Ak reputácia klesne, vráť sa o týždeň späť. |
| **Týždeň 3** | 25 → 30 | Strop pre cold z jednej schránky. Nechoď vyššie. |

**Cieľová kapacita po warmupe:**

```
martin@appinara.com    30/deň
martin@appinara.eu     30/deň
appinarasolutions@     10/deň   (necháme na follow-upy existujúcich threadov)
────────────────────────────────
                       70/deň  ≈  350/týždeň
```

Reálne toľko posielať nebudeš — ale strop nemá byť tam, kde ťa brzdí.

**Pravidlá počas celého warmupu:**
- Rozostupy medzi mailmi randomizované (60–180 s), nie fixných 90 s
- Nikdy nie viac ako 30 z jednej schránky za deň, ani po warmupe
- Bounce rate pod 3 % — pri 30 neplatných emailoch v tabuľke to treba pred odoslaním overiť
- Pri prvom náznaku poklesu reputácie okamžite dole na polovicu

---

## KROK 6 — Overenie pred prvou kampaňou

- [ ] `mail-tester.com` — pošli z každej schránky, cieľ **10/10**
- [ ] `mxtoolbox.com/deliverability` — SPF, DKIM, DMARC zelené na oboch doménach
- [ ] Google Postmaster Tools — obe domény pridané a overené
- [ ] Testovací mail sám sebe na Gmail → skontroluj v „Show original", že je tam
      `SPF: PASS`, `DKIM: PASS`, `DMARC: PASS`
- [ ] Presmerovanie funguje: `appinara.com` → `appinara.sk`

---

## Náklady a časová os

| Položka | Náklad |
|---|---|
| appinara.com | ~15 €/rok |
| appinara.eu | ~15 €/rok |
| Google Workspace 2× Business Starter | ~14 €/mes = ~168 €/rok |
| **Spolu prvý rok** | **~200 €** |

| Kedy | Čo |
|---|---|
| Deň 1 | Krok 0 (oprava appinara.sk) + nákup domén + Workspace |
| Deň 1–2 | DNS záznamy, DKIM, overenie |
| Deň 3–5 | Nastavenie schránok, „ľudský" warmup |
| Týždeň 1–3 | Warmup podľa tabuľky |
| **Týždeň 4** | **Plná kapacita** |

**Počas tých 3 týždňov sa neblokuje nič ostatné** — follow-up dlh (143 ľudí) aj
153 hotových draftov bežia paralelne na existujúcom Gmaile.

---

## Čo ešte treba, aby to dávalo zmysel

1. **Cieľové stránky `/weby` a `/ai`.** Dnes je na webe jedna `/riesenia` pre všetko.
   Ak mail hovorí čisto o weboch, CTA musí viesť na stránku, čo hovorí čisto o weboch.
2. **Opt-out veta v šablóne.** Pri vyššom objeme povinná. Stačí jedna veta na konci.
   Posielaj firmám (s.r.o./a.s.); pri živnostníkoch je zákon 452/2021 § 116 tenší ľad.
3. **Odosielanie skriptom.** Manuálne klikanie v Chrome nezvládne 70 mailov denne
   a v doterajších reportoch už spôsobilo chyby (klik mimo tlačidla, staré nedoslané drafty).

---

*Vygenerované 03.08.2026 · dostupnosť domén a DNS stav overené v ten deň*
