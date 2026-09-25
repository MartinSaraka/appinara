export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  /** ISO 8601 (YYYY-MM-DD) — pre JSON-LD a sitemapu; `date` je len na zobrazenie */
  dateIso: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'najlepsie-ai-aplikacie-na-tvar-a-plet',
    title: 'Najlepšie AI aplikácie na tvár a pleť v roku 2026: čo reálne vedia z jednej fotky',
    excerpt: 'BecomeTen, MiraSkinLab, Umax a YouCam. Čo robia s vašou fotkou, koľko stoja a podľa čoho si vybrať.',
    category: 'AI aplikácie',
    readTime: '9 min',
    date: '25. september 2026',
    dateIso: '2026-09-25',
    image: '/images/blog/najlepsie-ai-aplikacie-na-tvar-a-plet.webp'
  },
  {
    slug: 'ako-sme-postavili-tri-ai-aplikacie',
    title: 'Ako sme postavili tri AI aplikácie: BecomeTen, MiraSkinLab a Dreamtangle',
    excerpt: 'Hodnotenie tváre, plán starostlivosti o pleť a výklad snov. Rozhodnutia o AI, platbách a súkromí a čo sme sa naučili.',
    category: 'Prípadová štúdia',
    readTime: '10 min',
    date: '25. september 2026',
    dateIso: '2026-09-25',
    image: '/images/blog/ako-sme-postavili-tri-ai-aplikacie.webp'
  },
  {
    slug: 'preco-nie-je-moj-web-v-google',
    title: 'Prečo môj web nie je v Google a čo s tým viete spraviť',
    excerpt: 'Väčšinou za tým nie je obsah, ale jedna technická vec: robots.txt, noindex, kanonická značka alebo sitemapa, ktorá klame.',
    category: 'SEO',
    readTime: '9 min',
    date: '9. august 2026',
    dateIso: '2026-08-09',
    image: '/images/blog/preco-nie-je-moj-web-v-google.webp'
  },
  {
    slug: 'wordpress-alebo-web-na-mieru',
    title: 'WordPress alebo web na mieru: podľa čoho sa to naozaj láme',
    excerpt: 'Nerozhoduje technológia, ale kto bude meniť obsah, čo web má robiť a koľko stojí prevádzka v druhom roku.',
    category: 'Výber riešenia',
    readTime: '9 min',
    date: '9. august 2026',
    dateIso: '2026-08-09',
    image: '/images/blog/wordpress-alebo-web-na-mieru.webp'
  },
  {
    slug: 'rezervacny-system-pre-malu-prevadzku',
    title: 'Rezervačný systém pre malú prevádzku: kedy stačí telefón a kedy už nie',
    excerpt: 'Formulár, hotový nástroj alebo vlastný systém. Tri úrovne, ich reálne náklady a signály, podľa ktorých sa rozhodnúť.',
    category: 'Rezervácie',
    readTime: '8 min',
    date: '9. august 2026',
    dateIso: '2026-08-09',
    image: '/images/blog/rezervacny-system-pre-malu-prevadzku.webp'
  },
  {
    slug: 'chcem-airbnb-rozpocet-na-vizitku',
    title: 'Keď niekto chce „ako Airbnb“, ale rozpočet je na vizitku',
    excerpt: 'Kde končí prezentačný web a začína produkt. Účty, rezervácie a platby majú inú zodpovednosť než pekná landing page.',
    category: 'Rozsah',
    readTime: '8 min',
    date: '28. apríl 2026',
    dateIso: '2026-04-28',
    image: '/images/blog/chcem-airbnb-rozpocet-na-vizitku.webp'
  },
  {
    slug: 'udrzba-webu-prvy-rok-realita',
    title: 'Údržba webu po prvom roku: čo reálne stojí čas alebo peniaze',
    excerpt: 'Paušál, hodinovka, CMS, doména a aktualizácie. Čo patrí do prevádzky a čo je už nový projekt.',
    category: 'Prevádzka',
    readTime: '9 min',
    date: '27. apríl 2026',
    dateIso: '2026-04-27',
    image: '/images/blog/udrzba-webu-prvy-rok-realita.webp'
  },
  {
    slug: 'google-business-profajl-vs-web-sk',
    title: 'Google Business profil bez webu a web bez profilu si nenahradia',
    excerpt: 'Prakticky: mapa rieši prvý kontakt, web vysvetľuje dôveru, služby a ďalší krok. Bez agentúrneho žargónu.',
    category: 'Z praxe',
    readTime: '8 min',
    date: '26. apríl 2026',
    dateIso: '2026-04-26',
    image: '/images/blog/google-business-profajl-vs-web-sk.webp'
  },
  {
    slug: 'ai-nastroj-pre-cely-tim-ma-to-zmysel',
    title: 'AI nástroj pre celý tím: kedy sa vráti a kedy je to len FOMO',
    excerpt: 'Licencia má zmysel až vtedy, keď šetrí konkrétnu opakovanú prácu. Inak je to ďalšia karta v prehliadači.',
    category: 'Nástroje',
    readTime: '9 min',
    date: '25. apríl 2026',
    dateIso: '2026-04-25',
    image: '/images/blog/ai-nastroj-pre-cely-tim-ma-to-zmysel.webp'
  },
  {
    slug: 'co-ostane-po-developerovy-pristupy',
    title: 'Čo ostane vo firme, keď freelancer skončí',
    excerpt: 'Repozitár, hosting, DNS, API kľúče a vlastníctvo účtov. Minimum, ktoré má firma držať aj bez znalosti kódu.',
    category: 'Prevzatie projektu',
    readTime: '8 min',
    date: '24. apríl 2026',
    dateIso: '2026-04-24',
    image: '/images/blog/co-ostane-po-developerovy-pristupy.webp'
  },
  {
    slug: 'salon-meri1-pripadovka',
    title: 'Web pre kaderníctvo za dva týždne',
    excerpt: 'Konkrétny rozsah, cena 850 €, jednoduché rezervácie a rozhodnutia, ktoré udržali projekt pod kontrolou.',
    category: 'Prípadovka',
    readTime: '6 min',
    date: '14. apríl 2026',
    dateIso: '2026-04-14',
    image: '/images/blog/salon-meri1-pripadovka.webp'
  },
  {
    slug: 'co-som-sa-naucil-z-troch-ai-chatbotov',
    title: 'Čo som sa naučil z prvých troch AI chatbotov',
    excerpt: 'Dva sa zaplatili, jeden skončil vypnutý. Rozhodovali dáta, opakovateľné otázky a dobrá eskalácia na človeka.',
    category: 'Z praxe',
    readTime: '8 min',
    date: '7. apríl 2026',
    dateIso: '2026-04-07',
    image: '/images/blog/co-som-sa-naucil-z-troch-ai-chatbotov.webp'
  },
  {
    slug: 'realny-cennik-webov-na-slovensku',
    //   = nezalomiteľná medzera — drží „1 500" a „5 000" pokope v nadpisoch
    title: 'Reálny cenník: čo dostanete za 500, 1 500 a 5 000 € web',
    excerpt: 'Tri rozpočtové pásma, ich limity a náklady, ktoré sa často objavia až po prvom porovnávaní ponúk.',
    category: 'Cenník',
    readTime: '9 min',
    date: '24. marec 2026',
    dateIso: '2026-03-24',
    image: '/images/blog/realny-cennik-webov-na-slovensku.webp'
  },
  {
    slug: 'faceless-ai-videa-navod',
    title: 'Faceless AI videá: kedy dávajú zmysel a kedy len vyrábajú šum',
    excerpt: 'AI zrýchli scenár, titulky a strih. Nenahradí však názor, kontext a dôvod, prečo má video existovať.',
    category: 'Obsah',
    readTime: '7 min',
    date: '22. november 2024',
    dateIso: '2024-11-22',
    image: '/images/blog/faceless-ai-videa-navod.webp'
  },
  {
    slug: 'ai-vs-ludia-buducnost-prace',
    title: 'AI nevezme všetku prácu. Zmení najmä tú opakovateľnú',
    excerpt: 'Namiesto paniky nad povolaniami sa oplatí pozrieť na úlohy: texty, sumarizácie, reporting a prvé drafty.',
    category: 'Budúcnosť práce',
    readTime: '8 min',
    date: '20. november 2024',
    dateIso: '2024-11-20',
    image: '/images/blog/ai-vs-ludia-buducnost-prace.webp'
  },
  {
    slug: 'web-ai-trendy-2025',
    title: 'Web a AI trendy pre rok 2025 bez naháňania módy',
    excerpt: 'Rýchlosť, jasné CTA, meranie a rozumná automatizácia sú pre väčšinu firiem dôležitejšie než ďalší efekt.',
    category: 'Trendy',
    readTime: '7 min',
    date: '18. november 2024',
    dateIso: '2024-11-18',
    image: '/images/blog/web-ai-trendy-2025.webp'
  },
  {
    slug: 'ai-chatbot-pre-maly-biznis',
    title: 'AI chatbot pre malý biznis: najprv úloha, potom widget',
    excerpt: 'Bot má znižovať opakovanú prácu alebo kvalifikovať dopyty. Ak neviete pomenovať úlohu, bude len dekorácia.',
    category: 'AI v praxi',
    readTime: '8 min',
    date: '16. november 2024',
    dateIso: '2024-11-16',
    image: '/images/blog/ai-chatbot-pre-maly-biznis.webp'
  },
  {
    slug: 'kolko-stoji-webova-stranka-2024',
    title: 'Koľko stojí webová stránka: otázka nie je cena, ale rozsah',
    excerpt: 'Jednostránkový web, CMS a aplikácia s účtami sú tri rôzne objednávky, aj keď všetky žijú na doméne.',
    category: 'Cenník',
    readTime: '8 min',
    date: '12. november 2024',
    dateIso: '2024-11-12',
    image: '/images/blog/kolko-stoji-webova-stranka-2024.webp'
  },
  {
    slug: 'web-ktory-predava-checklist',
    title: 'Web, ktorý predáva, potrebuje menej trenia',
    excerpt: 'Predajný web je jasná ponuka, dôvera, jeden ďalší krok a formulár, ktorý neodstraší dobré leady.',
    category: 'Konverzie',
    readTime: '8 min',
    date: '10. november 2024',
    dateIso: '2024-11-10',
    image: '/images/blog/web-ktory-predava-checklist.webp'
  },
  {
    slug: 'preco-potrebuje-moja-firma-ai',
    title: 'Prečo potrebuje firma AI? Možno potrebuje najprv poriadok',
    excerpt: 'AI pomáha pri opakovanej práci. Ak proces nemá pravidlá, nástroj len zrýchli chaos.',
    category: 'AI v biznise',
    readTime: '7 min',
    date: '8. november 2024',
    dateIso: '2024-11-08',
    image: '/images/blog/preco-potrebuje-moja-firma-ai.webp'
  },
  {
    slug: 'eshop-vs-marketplace',
    title: 'Vlastný e-shop alebo marketplace: vyberáte typ závislosti',
    excerpt: 'Marketplace dá návštevnosť, vlastný e-shop dá kontrolu. Správna voľba závisí od marže, značky a marketingu.',
    category: 'E-commerce',
    readTime: '8 min',
    date: '5. november 2024',
    dateIso: '2024-11-05',
    image: '/images/blog/eshop-vs-marketplace.webp'
  },
  {
    slug: 'automatizacia-pre-zaciatocnikov',
    title: 'Automatizácia pre začiatočníkov: začnite nudnou úlohou',
    excerpt: 'Prvý dobrý kandidát je ručné kopírovanie, zabudnutý follow-up alebo opakované triedenie dát.',
    category: 'Automatizácia',
    readTime: '7 min',
    date: '3. november 2024',
    dateIso: '2024-11-03',
    image: '/images/blog/automatizacia-pre-zaciatocnikov.webp'
  },
  {
    slug: 'ako-vybrat-web-developera',
    title: 'Ako vybrať web developera: nehľadajte len pekné portfólio',
    excerpt: 'Dôležitý je rozsah, vlastníctvo účtov, proces po spustení a schopnosť povedať nie zlému nápadu.',
    category: 'Výber dodávateľa',
    readTime: '8 min',
    date: '1. november 2024',
    dateIso: '2024-11-01',
    image: '/images/blog/ako-vybrat-web-developera.webp'
  },
  {
    slug: 'top-10-ai-nastrojov-2024',
    title: 'AI nástroje pre firmu: nekupujte zoznam, vyberte workflow',
    excerpt: 'Nástroje sa menia. Stabilnejšie je vedieť, či riešite texty, meetingy, kód, dáta alebo support.',
    category: 'Nástroje',
    readTime: '8 min',
    date: '30. október 2024',
    dateIso: '2024-10-30',
    image: '/images/blog/top-10-ai-nastrojov-2024.webp'
  },
  {
    slug: 'roi-modernizacie-webu',
    title: 'ROI modernizácie webu: najprv spočítajte, čo má nový web zmeniť',
    excerpt: 'Nový web sa oplatí, keď zlepší dopyty, dôveru, rýchlosť, meranie alebo odstráni ručnú prácu.',
    category: 'ROI',
    readTime: '8 min',
    date: '26. október 2024',
    dateIso: '2024-10-26',
    image: '/images/blog/roi-modernizacie-webu.webp'
  }
]
