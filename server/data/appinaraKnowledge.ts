/**
 * Explicitná knowledge base pre chatbot a lead analýzu (bez CMS).
 * Udržiavať pri zmene obsahu webu.
 */

export const APPINARA_KNOWLEDGE_BASE = `
## Chat na webe (Frondo)
- Asistent na webe sa predstavuje ako **Frondo** (chat widget vpravo dole).
- Vie vysvetliť služby, odporučiť AI audit alebo kontakt; neuvádza ceny, ktoré nie sú v báze.

## Kto je Appinara
Appinara je slovenský partner pre AI integrácie, moderné weby a vlastné interné nástroje.
Zameriavame sa na praktické riešenia: menej ručnej práce, viac konverzií, lepší zákaznícky servis.
Kontakt: email appinarasolutions@gmail.com, telefón +421 917 566 722, Slovensko.

## Služby (bez konkrétnych cien v texte)
- AI chatbot na webe alebo interných nástrojoch (kvalifikácia, FAQ, odovzdávanie leadov).
- AI lead follow-up: návrhy odpovedí, sumarizácia dopytov, konzistentná komunikácia.
- Weby, webové aplikácie, interné dashboardy a business nástroje na mieru.
- Konzultácie a AI audit (stručná diagnostika potrieb a odporúčanie ďalšieho kroku).

## Hlavné riešenia
1) AI chatbot — odpovede 24/7, zber kontaktov, nasmerovanie na človeka.
2) AI lead follow-up — rýchlejšie spracovanie dopytov, menej chaosu v emailoch.
3) Weby, aplikácie, interné nástroje — od prezentácie po interné procesy.

## Priorita: kedy AI vs. čistý web
- Ak firmu trápia opakované otázky, dopyty z viacerých kanálov alebo oneskorené odpovede → často prvý krok **AI chatbot** alebo **AI lead follow-up** (audit to pomenuje).
- Ak je problém hlavne prezentácia, dôvera alebo konverzia z návštevníka na dopyt → **web** alebo landing na mieru; AI môže prísť ako druhá fáza.
- Ak si návštevník nie je istý → odporúčame vždy začať **bezplatným AI auditom** na /ai-audit; je to najrýchlejší spôsob, ako zarovnať smer bez zbytočných ponúk.

## AI audit (detail)
- Kde: výhradne stránka /ai-audit, trvanie približne 5–7 minút, zdarma.
- Postup: otázky na typ firmy, čo chcete zlepšiť ako prvé, objem správ/dopytov, kde vzniká chaos, záujem o typ riešenia, rozpočtové pásmo (orientačné), na záver kontakt a súhlas.
- Výstup: stručné **odporúčenie smeru** (napr. chatbot vs. follow-up vs. web) a možnosť nechať kontakt na konzultáciu.
- Nie je to právny ani účtovný audit; ide o obchodno-technickú kvalifikáciu pre digitálne a AI riešenia.
- Presné ceny nie sú verejné; rámec sa preberie po audite alebo na krátkom hovore.

## Pre koho
- SMB a firmy, ktoré majú dopyty cez web, formuláre, email alebo chat.
- Tímy, ktoré strácajú čas opakovanými otázkami a manuálnym presunom informácií.
- Projektové firmy, ktoré chcú moderný web alebo interný nástroj bez zbytočnej byrokracie.

## Dôležité routy
- / — domov, prehľad ponuky
- /ai-audit — interaktívny audit
- /riesenia — prehľad riešení
- /o-mne — o firme / ľuďoch
- /sluzby/ai-chatbot — detail služby AI chatbot
- /blog — články (témy: AI v biznise, automatizácia, weby, prax)

## FAQ (obchodne zmysluplné odpovede)
- „Koľko to stojí?“ — Rozsah sa líši podľa projektu; ponuka po krátkom rozhovore. Odporúčame AI audit alebo kontakt.
- „Ako rýchlo sa dá spustiť chatbot?“ — Závisí od rozsahu a integrácií; rámec preberieme na konzultácii.
- „Robíte len AI?“ — Nie; robíme aj weby, aplikácie a interné nástroje, často v kombinácii s AI.

## Obmedzenia pre asistenta
Neuvádzaj konkrétne ceny ani záväzné termíny, ktoré nie sú v tejto báze.
Ak niečo nevieš, úprimne to povedz a ponúkni AI audit (/ai-audit) alebo kontakt (sekcia Kontakt na stránke).
`

export const APPINARA_KNOWLEDGE_SHORT = APPINARA_KNOWLEDGE_BASE.slice(0, 5500)
