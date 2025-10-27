# 🎨 Rýchly štart - ArtHair Studio (Artistická verzia)

## 🌟 Špeciálne vlastnosti tohto dizajnu

Tento web má **umelecký** dizajn s nasledujúcimi unikátnymi prvkami:
- 🎨 Asymetrické layouty a bento box rozloženie
- 🖌️ Hand-drawn SVG ilustrácie (paint splashes, brushstrokes, arrows)
- 🌊 Curved a diagonal sekcie s SVG vlnami
- 💫 Masonry grid galéria
- 🎭 Handwritten fonty a highlight marker efekty
- 🌈 Pestré farby na svetlom pozadí

## Inštalácia a spustenie

### 1. Inštalácia závislostí
```bash
npm install
```

### 2. Spustenie vývojového servera
```bash
npm run dev
```

Otvorte prehliadač na `http://localhost:3000`

## 📝 Základné úpravy

### Zmena kontaktných údajov

**Súbory na úpravu:**
- `components/ContactSection.vue`
- `components/Footer.vue`

```vue
// Nájdite a upravte:
<p>Umelecká 42</p>
<a href="tel:+421900000000">+421 900 000 000</a>
<a href="mailto:info@arthair.sk">info@arthair.sk</a>
```

### Zmena otváracích hodín

**Súbor:** `components/ContactSection.vue`

```vue
<div class="space-y-2 font-modern text-gray-300">
  <div class="flex justify-between">
    <span>Pondelok - Piatok</span>
    <span class="text-neon-pink">09:00 - 19:00</span>
  </div>
  // ...upravte podľa potreby
</div>
```

### Zmena služieb a cien

**Súbor:** `components/ServicesSection.vue`

```javascript
const services = [
  {
    title: 'Názov služby',
    price: '45€',
    duration: '90 min',
    // ...
  }
]
```

### Zmena sociálnych sietí

**Súbory:**
- `components/Footer.vue`
- `components/ContactSection.vue`

```javascript
const socialMedia = [
  { name: 'Instagram', url: 'https://instagram.com/vas-profil' },
  // ...
]
```

## 🎨 Zmena farieb

**Súbor:** `tailwind.config.js`

```javascript
neon: {
  pink: '#FF10F0',    // Zmeňte na vašu farbu
  purple: '#B024FF',
  blue: '#00D9FF',
  // ...
}
```

## 📱 Pridanie Google Maps

**Súbor:** `components/ContactSection.vue`

Nahraďte placeholder div s iframe:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  class="w-full h-full rounded-xl"
  loading="lazy"
></iframe>
```

## 🚀 Build a deployment

### Produkčný build
```bash
npm run build
npm run preview
```

### Statický export
```bash
npm run generate
```

## 💡 Časté otázky

**Q: Ako zmením logo?**
A: Upravte `components/Navigation.vue` a `components/Footer.vue`

**Q: Ako pridám novú stránku?**
A: Vytvorte nový súbor v `pages/` priečinku

**Q: Ako zmením fonty?**
A: Upravte Google Fonts link v `nuxt.config.ts`

**Q: Rezervačný formulár nefunguje?**
A: Je to demo verzia. Implementujte vlastný backend alebo použite službu ako Formspree.

## 📞 Potrebujete pomoc?

Pozrite si hlavný `README.md` pre detailnejšiu dokumentáciu.

