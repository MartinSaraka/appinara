# Daily send report — Appinara s.r.o. (martin@appinara.sk) — 13.08.2026

## Výsledok: 7 odoslaných pri limite 5

Warmup limit na 13.08. (okno 10.–14.08.): **max 5**

Naplánovaný beh poslal 5 — presne na limit. Neskôr večer si používateľ vyžiadal
ďalších 10 s vedomím, že sa limit prekročí; z nich stihli pred polnocou odísť 2
(MIRTO 23:54, FADEX 23:59). **Deň teda skončil na 7/5.** Zvyšok dávky pokračoval
už 14.08. — viď `DAILY-SEND-REPORT-martin-appinara-2026-08-14.md`.

| # | Firma | Email | Predmet |
|---|---|---|---|
| 462 | Plavecká škôlka M. Koňarčíkovej | info@plaveckaskolka.sk | Piatok 10:00–12:00 — jediné okno pre rodičov |
| 463 | MOVEA — mobilná vet. ambulancia | movea.vet@gmail.com | Objednanie výjazdu, keď práve operujete |
| 466 | Športíkovo (DELTA BB) | info.deltabb@gmail.com | Pondelkové papierovačky v Športíkove |
| 467 | Košecký dvor (PD Koseca) | predajna@pdkoseca.sk | E-mail na predajňu: pdkoseca či koseckydvor? |
| 473 | Moja pekáreň | mimisaskova@gmail.com | Vaše torty na mieru a stránka „pripravujeme" |
| 474 | MIRTO s.r.o. | info@mirto.sk | Je Temared v sobotu voľný? Otázka o 21:00 |
| 475 | Jazdecký klub FADEX | monika@borseus.sk | Filmové kone — a prihlášky cez telefón |

Všetkých 5 overených v Sent, koncepty klesli 47 → 42. Pauzy medzi odoslaniami
randomizované 78–148 s.

## Priebeh behu

**Pre-flight OK:** Chrome pripojený, účet overený (martin@appinara.sk,
Managed by appinara.sk, u/3), Excel zapisovateľný, záloha vytvorená.

**Prerušenie kvôli podpisu.** Prvá kontrola ukázala, že telá draftov končia
vetou „Ak vás podobné maily nezaujímajú…" a **neobsahujú** podpis
`Martin Saraka | Appinara s.r.o. | appinara.sk` — overené screenshotom,
accessibility tree aj cez `innerText` (5/5). Gmail Settings → Signature ukazuje
**„No signatures"**, takže beh sa zastavil s 0 odoslanými.

**Vyjasnené používateľom:** podpis sa dopĺňa až **po odoslaní** (Workspace
footer rule v tranzite). To sedí s tým, že v Sent kópii dnešného mailu podpis
nie je — footer rule Sent kópiu nemení. Po potvrdení sa poslalo všetkých 5
bez zásahu do draftov.

⚠️ **Otvorené na overenie:** Sent kópia mailu z 11.08. podpis **mala**
(bol priamo v tele), dnešné ho v Sent nemajú. Ak footer rule existuje, je to
v poriadku a netreba nič meniť. Ak nie, dnešných 5 mailov odišlo bez podpisu.
Overí sa to pohľadom do **doručenej** kópie (nie Sent). Admin konzola sa
overiť nedala — pýtala CAPTCHA.

## Excel

- Záloha: `backup/Appinara_Prospekti_a_Outreach.bak-dailysend-appinara-20260813-1910.xlsx`
- 5 riadkov: Status = `Odoslané`, L = `13.08.2026`, N = `13.08.2026` (bolo prázdne)
- Dočasné poznámky „Podpis chýba…" po odoslaní odstránené
- Zápis prebehol po každom maile samostatne, nie dávkovo
- Pozn.: mazanie starých záloh (max 10) sandbox nepovolil — v `backup/` je 27
  súborov, treba prečistiť ručne

## Zvyšná zásoba

**40** prospektov so statusom „Draft pripravený" a Odosielateľ = `appinara.sk`.
Pri limite 5/deň (do 14.08.) a 10/deň (od 17.08.) je to ~2 týždne zásoby.
