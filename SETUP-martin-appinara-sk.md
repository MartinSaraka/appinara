# Google Workspace na appinara.sk — krok za krokom

**Cieľ:** `martin@appinara.sk` ako plnohodnotný Gmail, oddelený od cold outreachu.

**Náklad:** ~7 €/používateľ/mesiac (Business Starter), prvých 14 dní zdarma.
**Čas:** ~1 hodina práce + ~1 hodina čakania na DNS. DKIM občas až na druhý deň.

**Rozdelenie po dokončení:**
```
appinarasolutions@gmail.com   →  cold outreach (bez zmeny)
martin@appinara.sk            →  klienti, ponuky, faktúry, dopyty z webu
```
Cold outreach zámerne zostáva na gmaile. Keby nazbieral spam sťažnosti, odnesie to
gmail a doména s webom a platiacimi klientmi zostane čistá.

---

## ⚠️ Skôr než začneš — čoho sa nedotýkať

DNS pre `appinara.sk` je vo Websupporte, web beží na Verceli. Mail a web zdieľajú
jednu DNS zónu, takže pri úpravách sa dá zhodiť web.

**Tieto záznamy nechaj presne tak, ako sú:**

```
A     @      216.198.79.1                                      ← Vercel, web
A     www    216.198.79.1                                      ← Vercel, web
TXT   @      google-site-verification=I6IPjQnWCfNSfaCp3Rw…     ← Search Console
```

Ten `google-site-verification` je zo Search Console. Workspace ti vygeneruje **vlastný,
iný** overovací reťazec — pridáš ho ako ďalší TXT záznam vedľa. Doména môže mať viacero
TXT záznamov a je to úplne v poriadku. **Nenahrádzaj ten starý, prestal by ti fungovať
Search Console.**

---

## KROK 1 — Objednaj Workspace

`workspace.google.com` → **Začať** / Get started.

```
Názov firmy:        Appinara s.r.o.
Počet zamestnancov: 1 (Just you)
Región:             Slovensko
Kontaktný e-mail:   appinarasolutions@gmail.com
```

Pri otázke na doménu vyber **„Áno, mám doménu"** a zadaj `appinara.sk`.
Nekupuj cez nich novú — tú svoju už máš.

Potom vytvoríš prvé konto. **Toto je zároveň administrátorský účet:**
```
martin@appinara.sk
```
Heslo ulož do správcu hesiel a zapni dvojfaktorové overenie hneď, ako sa prihlásiš.
Je to admin celej domény.

Vyber **Business Starter**. Vyššie plány teraz nepotrebuješ — Starter má 30 GB,
vlastnú doménu, DKIM aj admin konzolu, a limit 2 000 správ denne.

---

## KROK 2 — Over vlastníctvo domény

Google ti ukáže TXT záznam v tvare `google-site-verification=…` (iný než ten,
čo tam už máš).

Websupport → **DNS záznamy** pre `appinara.sk` → **Pridať záznam**:
```
Typ:     TXT
Názov:   @              (niektoré panely chcú prázdne pole)
Hodnota: google-site-verification=…   ← celý reťazec z Google
```

⚠️ **Pridávaš, nie prepisuješ.** Po tomto kroku musia byť na doméne **dva**
`google-site-verification` TXT záznamy.

Počkaj ~15 minút a v Google klikni **Overiť**.

---

## KROK 3 — MX záznamy (zapne doručovanie pošty)

Toto je moment, kedy sa mail pre `appinara.sk` prepne na Google.

**Najprv zmaž existujúce MX** — ukazujú na Websupport, kde žiadnu mailovú službu nemáš:
```
ZMAZAŤ:   MX   10    mx10.websupport.sk
ZMAZAŤ:   MX   100   mx20.websupport.sk
```

**Potom pridaj Google:**
```
Typ:      MX
Názov:    @
Priorita: 1
Hodnota:  smtp.google.com
```

Toto je aktuálny zjednodušený Google záznam — stačí jeden. Ak ti sprievodca ponúkne
starú pätticu (`ASPMX.L.GOOGLE.COM`, `ALT1.ASPMX…`), funguje tiež, ale **nemiešaj
oba prístupy dokopy.** Buď jeden `smtp.google.com`, alebo tých päť. Nie oboje.

---

## KROK 4 — SPF

Websupport → DNS záznamy → Pridať:
```
Typ:     TXT
Názov:   @
Hodnota: v=spf1 include:_spf.google.com ~all
```

⚠️ **Jedna doména = práve jeden SPF záznam.** Teraz tam žiadny nie je, takže žiadna
kolízia nehrozí. Ale keby si niekedy pridával ďalšiu odosielaciu službu, **zlúč** ju
do tohto záznamu, nepridávaj druhý. Dva SPF záznamy znamenajú neplatné SPF.

`~all` (softfail) namiesto `-all` — kým si istý, že si podchytil všetky miesta,
odkiaľ sa posiela mail v mene appinara.sk. Sprísniť sa dá neskôr.

---

## KROK 5 — DKIM

`admin.google.com` → **Aplikácie → Google Workspace → Gmail → Overenie e-mailu**
(Apps → Google Workspace → Gmail → Authenticate email)

```
1. Vyber doménu appinara.sk
2. Generovať nový záznam / Generate new record
3. Dĺžka kľúča: 2048 bit,  prefix: google
4. Skopíruj hodnotu → Websupport → TXT záznam:
      Názov:   google._domainkey
      Hodnota: v=DKIM1; k=rsa; p=…   (celý dlhý reťazec)
5. Počkaj ~1 hodinu, potom v Google klikni Spustiť overovanie / Start authentication
```

**Ak sa voľba „Generovať nový záznam" nezobrazí,** je to normálne — Google ju pri
čerstvo založených účtoch občas sprístupní až po 24–72 hodinách. Pokračuj krokom 6
a k DKIM sa vráť neskôr. SPF z kroku 4 zatiaľ na doručovanie stačí.

---

## KROK 6 — DMARC

Na doméne už DMARC záznam **je** a je nastavený ostro (`p=quarantine`), pritom
autentifikácia zatiaľ nefunguje. Kým to ladíš, zmierni ho.

Websupport → DNS záznamy → nájdi TXT na názve `_dmarc` → **uprav**:
```
Typ:     TXT
Názov:   _dmarc
Hodnota: v=DMARC1; p=none; rua=mailto:martin@appinara.sk; fo=1
```

Čo sa mení:
- `p=quarantine` → `p=none` — dočasne prestane hádzať maily do spamu počas ladenia
- pribudlo `rua=` — začneš dostávať denné reporty od Gmailu, Outlooku a spol.
  Bez toho nemáš ako zistiť, či niečo padá.

**O týždeň to vráť späť na ostro** — viď krok 9. Nezabudni, `p=none` je len ladiaci režim.

---

## KROK 7 — Over, že to funguje

Počkaj ~1 hodinu od poslednej DNS zmeny.

1. **Príjem:** pošli mail z `appinarasolutions@gmail.com` na `martin@appinara.sk`.
   Musí prísť do novej Workspace schránky.

2. **Odosielanie:** pošli mail z `martin@appinara.sk` na `mail-tester.com`
   (dajú ti jednorazovú adresu). **Cieľ: 10/10.**

3. **Autentifikácia:** pošli si mail z `martin@appinara.sk` na gmail, otvor ho tam
   → tri bodky → **Zobraziť originál**. Musíš vidieť:
   ```
   SPF:   PASS
   DKIM:  PASS      (ak si krok 5 odložil, zatiaľ tu nebude — to je OK)
   DMARC: PASS
   ```

4. **Web stále beží:** otvor `appinara.sk` a `www.appinara.sk`. Ak si sa nedotkol
   A záznamov, je to v poriadku — ale over to.

---

## KROK 8 — ⚠️ Skontroluj Chrome account indexy

Toto ti inak potichu rozbije existujúcu automatizáciu.

`AUTOMATIZACIA-Scheduled-Tasks.md` počíta s tým, že `appinarasolutions@gmail.com`
je v Chrome pod indexom **u/2** (`mail.google.com/mail/u/2/`). Keď do toho istého
Chrome profilu pridáš nový Google účet, **indexy sa môžu posunúť.**

Po prihlásení do `martin@appinara.sk`:
```
1. Otvor mail.google.com/mail/u/0/ , u/1/ , u/2/ …
2. Zisti, pod ktorým indexom je teraz appinarasolutions@gmail.com
3. Ak sa zmenil, oprav ho v AUTOMATIZACIA-Scheduled-Tasks.md (TASK 1)
```

---

## KROK 9 — O týždeň: DMARC späť na ostro

Keď reporty potvrdia, že všetko prechádza:
```
Typ:     TXT
Názov:   _dmarc
Hodnota: v=DMARC1; p=quarantine; rua=mailto:martin@appinara.sk; fo=1
```

---

## Čo dokončiť potom

**Prepni príjemcu leadov z kontaktného formulára.** V `.env` je premenná
`NUXT_LEAD_RECIPIENT_EMAIL` — nastav ju na `martin@appinara.sk`.

⚠️ Zmena v lokálnom `.env` **nič neurobí s produkciou.** Musíš ju zmeniť aj vo Verceli:
`Vercel → projekt → Settings → Environment Variables` → uprav a **redeployni**.

**Podpis v Gmaile:**
```
Martin Saraka
Appinara s.r.o.
appinara.sk · +421 917 566 722
```

**Profilová fotka.** Odosielateľ s tvárou má merateľne lepšiu odozvu než prázdny
placeholder s písmenom.

**Google Postmaster Tools** — pridaj `appinara.sk`. Jediný bezplatný pohľad na to,
ako tvoju doménu vníma Gmail.

---

## Ak sa niečo pokazí

| Problém | Príčina |
|---|---|
| Overenie domény zlyháva | TXT sa ešte nerozšíril (počkaj hodinu), alebo si prepísal ten starý zo Search Console |
| Maily neprichádzajú | Staré MX na Websupport si nezmazal, alebo nový MX má zlú prioritu |
| mail-tester dáva málo bodov | Chýba SPF alebo DKIM — pozri, ktorý bod konkrétne vypisuje |
| Web prestal fungovať | Dotkol si sa A záznamu. Vráť `@` aj `www` na `216.198.79.1` |
| „Generate new record" pri DKIM chýba | Nový účet, Google to sprístupní do 72 h. Počkaj. |

---

*Vygenerované 03.08.2026 · DNS stav appinara.sk overený v ten deň*
*Nahrádza predchádzajúcu verziu, ktorá nesprávne predpokladala mailhosting vo Websupporte.*
