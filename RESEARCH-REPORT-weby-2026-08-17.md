# RESEARCH REPORT — weby vetva (martin@appinara.sk) — 17.08.2026

## Backlog guard
- N_real = **36 cold draftov** v schránke (38 draftov celkom − 1 testovací „asdasd“ − 1 bezpredmetový duplikát na info@mliecnafarma.sk), merané v Gmail u/3 cez Chrome (Gmail konektor je pripojený na gmail.com účet, nie na appinara.sk).
- Pásmo 25–40 → **beh obmedzený na 8 prospektov**.
- Rekonciliácia: všetkých 36 riadkov „Draft pripravený“/appinara.sk má reálny koncept → **0 opravených riadkov**.

## Výsledky behu (8/8 draftov vytvorených a overených v schránke)
**Dokončené hand-overy (5):**
1. Zubné centrum Nitra (Dr. Stanko) — „Objednanie na Štúrovej — dnes len telefónom“
2. Fyzio-Care Trenčín — „Metódy v menu sa nedajú otvoriť“ (Drupal 7, rozbitá navigácia — overené)
3. OrtoTrnava — „Termíny objednávania sú len orientačné“ (ich vlastná veta z pätičky — overené)
4. Matejko / prevytvarnikov.sk — „Plátna na mieru — zatiaľ len na predajni“ („Webstránka v rekonštrukcii“ na Kontakte — overené)
5. Hudobné nástroje KAKTUS — „Nástroj doveziete domov, objednávka ostala v 2018“

**Nové firmy (3, dedupe proti celému Excelu čistý):**
6. BAGETERIA.EU (Prešov) — e-shop systém s registráciou, ale „objednávky prijímame len telefonicky“; min. 25 ks, deň vopred → riadok #540
7. Chata Stela Štúrovo — **mailto na kontakte vedie na cudziu adresu (infohotelsarkan@gmail.com), tel: odkaz vytáča iné číslo** — pozostatok šablóny Webiano (utm penzionvrchar.sk) → #541
8. SMART požičovňa Pezinok — tlačidlo „Rezervovať“ vedie na stránku „zavolajte nám“; tel: odkaz vytáča iné číslo; rozbité placehold.it obrázky → #542

## Poznámky pre ďalšie behy
- Kompozícia draftov cez Chrome: URL-prefill (view=cm) sa NEULOŽÍ ako draft — treba klasický Compose popup + písanie do polí (To → Enter na commit chipu, subject/body cez focus). Overovať chip aj subject pred Escape.
- „Treba research“ / presuny do AI vetvy: 0 v tomto behu.
