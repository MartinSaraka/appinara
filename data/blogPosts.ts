export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'chcem-airbnb-rozpocet-na-vizitku',
    title: 'Keď niekto chce „ako Airbnb“, ale rozpočet je na vizitku',
    excerpt: 'Kde končí prezentačný web a začína produkt. Účty, rezervácie a platby majú inú zodpovednosť než pekná landing page.',
    category: 'Scope',
    readTime: '8 min',
    date: '28. apríl 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80'
  },
  {
    slug: 'udrzba-webu-prvy-rok-realita',
    title: 'Údržba webu po prvom roku: čo reálne stojí čas alebo peniaze',
    excerpt: 'Paušál, hodinovka, CMS, doména a aktualizácie. Čo patrí do prevádzky a čo je už nový projekt.',
    category: 'Prevádzka',
    readTime: '9 min',
    date: '27. apríl 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80'
  },
  {
    slug: 'google-business-profajl-vs-web-sk',
    title: 'Google Business profil bez webu a web bez profilu si nenahradia',
    excerpt: 'Prakticky: mapa rieši prvý kontakt, web vysvetľuje dôveru, služby a ďalší krok. Bez agentúrneho žargónu.',
    category: 'Z praxe',
    readTime: '8 min',
    date: '26. apríl 2026',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80'
  },
  {
    slug: 'ai-nastroj-pre-cely-tim-ma-to-zmysel',
    title: 'AI nástroj pre celý tím: kedy sa vráti a kedy je to len FOMO',
    excerpt: 'Licencia má zmysel až vtedy, keď šetrí konkrétnu opakovanú prácu. Inak je to ďalšia karta v prehliadači.',
    category: 'Nástroje',
    readTime: '9 min',
    date: '25. apríl 2026',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80'
  },
  {
    slug: 'co-ostane-po-developerovy-pristupy',
    title: 'Čo ostane vo firme, keď freelancer skončí',
    excerpt: 'Repozitár, hosting, DNS, API kľúče a vlastníctvo účtov. Minimum, ktoré má firma držať aj bez znalosti kódu.',
    category: 'Prevzatie projektu',
    readTime: '8 min',
    date: '24. apríl 2026',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80'
  },
  {
    slug: 'salon-meri1-pripadovka',
    title: 'Web pre kaderníctvo za dva týždne',
    excerpt: 'Konkrétny rozsah, cena 850 €, jednoduché rezervácie a rozhodnutia, ktoré udržali projekt pod kontrolou.',
    category: 'Prípadovka',
    readTime: '6 min',
    date: '14. apríl 2026',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80'
  },
  {
    slug: 'co-som-sa-naucil-z-troch-ai-chatbotov',
    title: 'Čo som sa naučil z prvých troch AI chatbotov',
    excerpt: 'Dva sa zaplatili, jeden skončil vypnutý. Rozhodovali dáta, opakovateľné otázky a dobrá eskalácia na človeka.',
    category: 'Z praxe',
    readTime: '8 min',
    date: '7. apríl 2026',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=1600&q=80'
  },
  {
    slug: 'realny-cennik-webov-na-slovensku',
    title: 'Reálny cenník: čo dostanete za 500, 1 500 a 5 000 € web',
    excerpt: 'Tri rozpočtové pásma, ich limity a náklady, ktoré sa často objavia až po prvom porovnávaní ponúk.',
    category: 'Cenník',
    readTime: '9 min',
    date: '24. marec 2026',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=80'
  },
  {
    slug: 'faceless-ai-videa-navod',
    title: 'Faceless AI videá: kedy dávajú zmysel a kedy len vyrábajú šum',
    excerpt: 'AI zrýchli scenár, titulky a strih. Nenahradí však názor, kontext a dôvod, prečo má video existovať.',
    category: 'Obsah',
    readTime: '7 min',
    date: '16. november 2024',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&q=80'
  },
  {
    slug: 'ai-vs-ludia-buducnost-prace',
    title: 'AI nevezme všetku prácu. Zmení najmä tú opakovateľnú',
    excerpt: 'Namiesto paniky nad povolaniami sa oplatí pozrieť na úlohy: texty, sumarizácie, reporting a prvé drafty.',
    category: 'Budúcnosť práce',
    readTime: '8 min',
    date: '16. november 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80'
  },
  {
    slug: 'web-ai-trendy-2025',
    title: 'Web a AI trendy pre rok 2025 bez naháňania módy',
    excerpt: 'Rýchlosť, jasné CTA, meranie a rozumná automatizácia sú pre väčšinu firiem dôležitejšie než ďalší efekt.',
    category: 'Trendy',
    readTime: '7 min',
    date: '16. november 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80'
  },
  {
    slug: 'ai-chatbot-pre-maly-biznis',
    title: 'AI chatbot pre malý biznis: najprv úloha, potom widget',
    excerpt: 'Bot má znižovať opakovanú prácu alebo kvalifikovať dopyty. Ak neviete pomenovať úlohu, bude len dekorácia.',
    category: 'AI v praxi',
    readTime: '8 min',
    date: '16. november 2024',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1600&q=80'
  },
  {
    slug: 'kolko-stoji-webova-stranka-2024',
    title: 'Koľko stojí webová stránka: otázka nie je cena, ale rozsah',
    excerpt: 'Jednostránkový web, CMS a aplikácia s účtami sú tri rôzne objednávky, aj keď všetky žijú na doméne.',
    category: 'Cenník',
    readTime: '8 min',
    date: '12. november 2024',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80'
  },
  {
    slug: 'web-ktory-predava-checklist',
    title: 'Web, ktorý predáva, potrebuje menej trenia',
    excerpt: 'Predajný web je jasná ponuka, dôvera, jeden ďalší krok a formulár, ktorý neodstraší dobré leady.',
    category: 'Konverzie',
    readTime: '8 min',
    date: '10. november 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80'
  },
  {
    slug: 'preco-potrebuje-moja-firma-ai',
    title: 'Prečo potrebuje firma AI? Možno potrebuje najprv poriadok',
    excerpt: 'AI pomáha pri opakovanej práci. Ak proces nemá pravidlá, nástroj len zrýchli chaos.',
    category: 'AI v biznise',
    readTime: '7 min',
    date: '8. november 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80'
  },
  {
    slug: 'eshop-vs-marketplace',
    title: 'Vlastný e-shop alebo marketplace: vyberáte typ závislosti',
    excerpt: 'Marketplace dá návštevnosť, vlastný e-shop dá kontrolu. Správna voľba závisí od marže, značky a marketingu.',
    category: 'E-commerce',
    readTime: '8 min',
    date: '5. november 2024',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80'
  },
  {
    slug: 'automatizacia-pre-zaciatocnikov',
    title: 'Automatizácia pre začiatočníkov: začnite nudnou úlohou',
    excerpt: 'Prvý dobrý kandidát je ručné kopírovanie, zabudnutý follow-up alebo opakované triedenie dát.',
    category: 'Automatizácia',
    readTime: '7 min',
    date: '3. november 2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80'
  },
  {
    slug: 'ako-vybrat-web-developera',
    title: 'Ako vybrať web developera: nehľadajte len pekné portfólio',
    excerpt: 'Dôležitý je rozsah, vlastníctvo účtov, proces po spustení a schopnosť povedať nie zlému nápadu.',
    category: 'Výber dodávateľa',
    readTime: '8 min',
    date: '1. november 2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80'
  },
  {
    slug: 'top-10-ai-nastrojov-2024',
    title: 'AI nástroje pre firmu: nekupujte zoznam, vyberte workflow',
    excerpt: 'Nástroje sa menia. Stabilnejšie je vedieť, či riešite texty, meetingy, kód, dáta alebo support.',
    category: 'Nástroje',
    readTime: '8 min',
    date: '16. november 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80'
  },
  {
    slug: 'roi-modernizacie-webu',
    title: 'ROI modernizácie webu: najprv spočítajte, čo má nový web zmeniť',
    excerpt: 'Nový web sa oplatí, keď zlepší dopyty, dôveru, rýchlosť, meranie alebo odstráni ručnú prácu.',
    category: 'ROI',
    readTime: '8 min',
    date: '26. október 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80'
  }
]
