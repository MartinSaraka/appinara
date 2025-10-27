# 🎨 ArtHair Studio - Umelecké Kaderníctvo

Vitajte v repozitári **ArtHair Studio** - moderného, umeleckého webového sídla pre kreatívne kaderníctvo. Tento projekt predstavuje vizuálne ohromujúci web s pestrou farebnou paletou, umeleckými efektmi a čistým dizajnom na bielom pozadí, ktorý dokonale vystihuje spojenie umenia a kaderníctva.

## ✨ Vlastnosti

### 🎨 Vizuálny dizajn
- **Artistický štýl**: Svetlý dizajn s pestrými farbami (korálová, broskyňová, mentolová, tyrkysová, levanduľová, ružová)
- **Gradienty**: Bohaté farebné prechody a sunset/ocean/bloom efekty
- **Animácie**: Plynulé animácie pri scrollovaní, hover bounce efekty, float animácie
- **Glassmorphism**: Sklenené karty na svetlom pozadí
- **Watercolor efekty**: Jemné akvarel pozadia a brushstroke akcenty
- **Umelecké prvky**: Handwritten fonty, highlight marker efekty, brush strokes

### 🛠️ Technológie
- **Nuxt 3**: Moderný Vue.js framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Phosphor Icons**: Moderná ikonografia
- **Google Fonts**: Orbitron a Space Grotesk

### 📱 Funkcie
- **Responzívny dizajn**: Plne optimalizované pre mobily, tablety a desktop
- **Online rezervácie**: Interaktívny rezervačný formulár
- **Galéria**: Vizuálna prezentácia prác s lightbox efektom
- **Služby**: Detailný prehľad všetkých ponúkaných služieb
- **Kontaktný formulár**: Jednoduché kontaktovanie salónu
- **SEO optimalizované**: Meta tagy, Open Graph

## 🚀 Rýchly štart

### Predpoklady
- Node.js (verzia 18 alebo vyššia)
- npm alebo yarn

### Inštalácia

1. **Nainštalujte závislosti:**
```bash
npm install
```

2. **Spustite vývojový server:**
```bash
npm run dev
```

Aplikácia bude dostupná na `http://localhost:3000`

### Build pre produkciu

```bash
# Vytvorenie produkčného buildu
npm run build

# Lokálne preview produkčného buildu
npm run preview

# Generovanie statického webu
npm run generate
```

## 📁 Štruktúra projektu

```
salon-artistic/
├── assets/
│   └── css/
│       └── main.css          # Hlavné štýly, animácie, utility triedy
├── components/
│   ├── Navigation.vue        # Navigačná lišta
│   ├── HeroSection.vue       # Hero sekcia s hlavným nadpisom
│   ├── ServicesSection.vue   # Prehľad služieb
│   ├── GallerySection.vue    # Galéria prác
│   ├── BookingSection.vue    # Rezervačný formulár
│   ├── ContactSection.vue    # Kontaktné informácie
│   ├── Footer.vue            # Pätička
│   └── ScrollToTop.vue       # Tlačidlo pre scroll hore
├── pages/
│   ├── index.vue             # Hlavná stránka
│   ├── rezervacia.vue        # Stránka rezervácií
│   ├── ochrana-udajov.vue    # GDPR
│   └── obchodne-podmienky.vue # Obchodné podmienky
├── public/                   # Statické súbory (ikony, obrázky)
├── app.vue                   # Root komponenta
├── nuxt.config.ts           # Nuxt konfigurácia
├── tailwind.config.js       # Tailwind konfigurácia
└── package.json             # NPM závislosti
```

## 🎨 Dizajnový systém

### Farebná paleta

**Umelecké farby:**
- Coral (korálová): `#FF6B6B`
- Peach (broskyňová): `#FFB347`
- Yellow (žltá): `#FFD93D`
- Mint (mentolová): `#6BCB77`
- Turquoise (tyrkysová): `#4ECDC4`
- Sky (nebeská): `#45B7D1`
- Lavender (levanduľová): `#A78BFA`
- Pink (ružová): `#FF6FB5`
- Purple (fialová): `#9D4EDD`
- Violet: `#C77DFF`
- Orange (oranžová): `#FF9F1C`

**Cream pozadia:**
- 50-500: Od bielej po jemne krémovú

### Typografia
- **Artistická**: Playfair Display (nadpisy, titulky)
- **Moderná**: Poppins (telo textu, popisky)
- **Handwritten**: Caveat (artistické akcenty)

### Komponenty

#### Tlačidlá
- `.btn-artistic` - Artistické gradient tlačidlo
- `.btn-outline-artistic` - Obrysové artistické tlačidlo

#### Karty
- `.glass-card-light` - Sklenená karta na svetlom pozadí
- `.card-colorful` - Farebná karta s top borderom
- `.card-colorful-coral/peach/mint/turquoise/lavender/pink` - Farebné varianty

#### Animácie
- `animate-fade-in` - Fade in efekt
- `animate-slide-up` - Slide up animácia
- `animate-float` - Plávajúci efekt
- `animate-gradient-shift` - Posúvanie gradientu
- `hover-bounce` - Jemný bounce pri hover
- `animate-wiggle` - Wiggle animácia

#### Umelecké efekty
- `.brush-stroke` - Brush stroke efekt
- `.watercolor-bg` - Akvarel pozadie
- `.highlight-marker` - Marker highlight efekt
- `.handwritten` - Handwritten text
- `.divider-artistic` - Artistický oddeľovač
- `.pattern-dots/stripes` - Pozadiové vzory

## 🔧 Customizácia

### Zmena farieb
Upravte farby v `tailwind.config.js`:
```javascript
colors: {
  neon: {
    pink: '#FF10F0',
    // ... ďalšie farby
  }
}
```

### Zmena fontov
Upravte fonty v `nuxt.config.ts`:
```javascript
link: [
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/...' }
]
```

### Pridanie novej služby
Upravte pole `services` v `components/ServicesSection.vue`:
```javascript
{
  icon: 'ph:icon-name',
  title: 'Názov služby',
  description: 'Popis',
  gradient: 'linear-gradient(...)',
  features: ['Feature 1', 'Feature 2'],
  price: '50€',
  duration: '90 min'
}
```

## 📱 Responzívny dizajn

Projekt používa Tailwind breakpointy:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎯 SEO

### Meta tagy
Všetky stránky majú nakonfigurované:
- Title
- Description
- Open Graph tagy
- Keywords

### Sitemap a robots.txt
Pre generovanie pridajte do `nuxt.config.ts`:
```javascript
modules: ['@nuxtjs/sitemap', 'nuxt-simple-robots']
```

## 🚀 Deployment

### Vercel (Odporúčané)
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run generate
# Upload dist folder
```

### Statický hosting
```bash
npm run generate
# Upload .output/public folder
```

## 🌟 Funkcie a vlastnosti

### Online rezervácie
- Výber služby
- Výber dátumu a času
- Kontaktné údaje
- Potvrdenie emailom

### Galéria
- Filtrovanie podľa kategórií
- Lightbox preview
- Responsívny grid

### Kontakt
- Kontaktný formulár
- Mapa (placeholder)
- Sociálne siete
- Otváracie hodiny

## 📄 Licencia

Tento projekt je vytvorený pre demonštračné účely.

## 🤝 Podpora

Pre otázky a podporu kontaktujte:
- Email: info@arthair.sk
- Telefón: +421 900 000 000

## 🎨 Inšpirácia

Tento projekt kombinuje:
- Umelecký dizajn
- Watercolor estetiku
- Pestré farby na svetlom pozadí
- Kreatívne typografické prvky
- Moderné web technológie
- Handcrafted pocit

---

**Vytvorené s 🎨 pre umeleckú dušu kaderníctva**

