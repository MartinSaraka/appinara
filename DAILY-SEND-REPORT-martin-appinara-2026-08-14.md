# Daily send report — Appinara s.r.o. (martin@appinara.sk) — 14.08.2026

## ⚠️ Deň skončil na 10/5 — warmup limit prekročený na výslovný pokyn

Dva behy v jeden deň:

- **Automatický beh (00:18)** — 5 mailov, presne na limit. Deň bol na **5/5**.
- **Ručne vyžiadaný beh (18:44)** — používateľ po upozornení na riziko výslovne
  zvolil možnosť „Poslať 5 — prekroč limit". Deň je na **10/5**.

Warmup limit pre pásmo 10.–14.08. je 5/deň. Odoslaných dnes **10**, teda
dvojnásobok. Rozhodnutie je používateľovo a bolo urobené s vedomím rizika.

## Odoslané v tomto behu (5)

| Riadok | Firma | Email | Predmet |
|---|---|---|---|
| 450 | UNI-CON Kysuce (Farma Raková) | info@uniconkysuce.sk | Cenník syrov, ktorý je na webe fotkou |
| 451 | Chata pod Hrbom (JKM) | chatapodhrbom.1935@gmail.com | Voľné termíny, ktoré hosť na webe nevidí |
| 452 | Animoterapeuticko-jazdecké centrum Snina | ajcsnina@gmail.com | Prihlášky na tábor, ktoré sa tlačia |
| 453 | Jožko Farmárik s.r.o. | jozkofarmarik@jozkofarmarik.sk | Sekcia Naše predajne bez adries |
| 454 | Cukráreň Victoria Prešov | victoria@victoriapo.sk | Objednávka torty na tri telefónne čísla |

Všetkých 5 malo Prioritu **Vysoká**. Prvé tri sú zvyšok dávky z 13.08.
(UNI-CON, Chata pod Hrbom, AJC Snina), ktorý sa vtedy nezmestil do limitu.

Pauzy randomizované: 82 s, 173 s, 90 s, 147 s. Každé odoslanie overené hláškou
„Message sent" **a** poklesom počtu konceptov: 43 → 42 → 41 → 40 → 39 → 38.

## Postup

Použitý opravený postup z 13.08.: navigácia najprv na `#inbox`, až potom na
`#search/in:drafts to:[email]`; riadky filtrované cez `offsetParent !== null`;
pokračovanie len ak je viditeľný práve jeden riadok; adresát v otvorenom
koncepte porovnaný s Excelom pred kliknutím Odoslať. Žiadny nesprávny draft
sa tentoraz neotvoril.

## Excel

- Záloha: `backup/Appinara_Prospekti_a_Outreach.bak-dailysend-appinara-20260814-1844.xlsx`
- 5 riadkov (450–454): Status = `Odoslané`, L = `14.08.2026`, N = `14.08.2026`
- Zápis a uloženie po každom jednotlivom maile
- Pre-flight write-test prešiel

## Otvorené

- **Podpis:** naďalej neoverené. V tele draftov nie je
  `Martin Saraka | Appinara s.r.o. | appinara.sk` — ak ho dopĺňa footer rule,
  vidno to len v doručenej kópii. Odporúčam poslať jeden test na vlastnú
  súkromnú adresu a pozrieť sa.
- **Doručiteľnosť:** po dnešnom 10/5 (a 7/5 dňa 13.08.) odporúčam **pondelok
  17.08. nechať na 5–7 mailov** namiesto plných 10, aby sa krivka vyrovnala.
  Sledovať bounce raty a DMARC reporty — v schránke ich dnes pribudlo viac.
- **Zásoba:** 36 prospektov so statusom „Draft pripravený" (appinara.sk).
- **Odpovede v inboxe** (nespracované touto úlohou): Monika Fišerová —
  odmietnutie; Dušan (Kalendár obsadenosti) — „vyhovuje mi to takto".
- `backup/` má 18 súborov; mazanie starých sandbox nepovolil (Operation not
  permitted) — treba prečistiť ručne.
