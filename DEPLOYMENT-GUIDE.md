# 🚀 DEPLOYMENT GUIDE - Demo stránky na Vercel

Návod na deployment demo stránok na Vercel (zadarmo).

---

## 📋 PREHĽAD DEMO STRÁNOK

| Projekt | Štýl | Cieľová URL |
|---------|------|-------------|
| salon-demo | Moderný, elegantný | salon-demo.vercel.app |
| salon-retro | Retro 80s, vintage | salon-retro.vercel.app |

---

## 🛠️ PRED DEPLOYMENTOM

### 1. Overte lokálny build

```bash
# Pre salon-demo
cd salon-demo
npm install
npm run build

# Pre salon-retro
cd salon-retro
npm install
npm run build
```

### 2. Skontrolujte vercel.json

Oba projekty by mali mať `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nuxtjs",
  "outputDirectory": ".output/public"
}
```

---

## 🚀 DEPLOYMENT NA VERCEL

### Možnosť A: Cez GitHub (odporúčané)

1. **Push projekty na GitHub:**
```bash
# Vytvorte repozitáre na GitHub:
# - salon-demo
# - salon-retro

# Push salon-demo
cd salon-demo
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/salon-demo.git
git push -u origin main

# Push salon-retro
cd ../salon-retro
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/salon-retro.git
git push -u origin main
```

2. **Na Vercel:**
   - Choďte na [vercel.com](https://vercel.com)
   - Prihláste sa cez GitHub
   - Kliknite "Add New Project"
   - Vyberte repozitár
   - Vercel auto-detekuje Nuxt.js
   - Kliknite "Deploy"

### Možnosť B: Cez Vercel CLI

1. **Inštalácia Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy:**
```bash
# Salon-demo
cd salon-demo
vercel --prod

# Salon-retro  
cd ../salon-retro
vercel --prod
```

4. **Pri prvom deployi:**
   - Set up and deploy? → Yes
   - Which scope? → Vyberte váš účet
   - Link to existing project? → No
   - Project name? → salon-demo (alebo salon-retro)
   - Root directory? → ./
   - Override settings? → No

---

## 🌐 NASTAVENIE CUSTOM DOMÉNY (VOLITEĽNÉ)

Ak chcete vlastnú doménu namiesto vercel.app:

1. Na Vercel dashboard → Project → Settings → Domains
2. Pridajte doménu (napr. demo.appinara.sk)
3. Nastavte DNS podľa inštrukcií

---

## ✅ PO DEPLOYI

### 1. Overte stránky:
- [ ] https://salon-demo.vercel.app funguje
- [ ] https://salon-retro.vercel.app funguje
- [ ] Všetky sekcie sa zobrazujú správne
- [ ] Rezervačný formulár funguje
- [ ] Mobilná verzia OK

### 2. Aktualizujte odkazy:

V týchto súboroch zmeňte demo URL na skutočné:
- `outreach-tool.html`
- `FACEBOOK-SPRÁVY.md`
- `EMAIL-TEMPLATES.md`
- `LINKEDIN-POSTS.md`
- `CONTENT-CALENDAR.md`
- `PONUKA-KADERNICTVO.md`

---

## 🔄 BUDÚCE AKTUALIZÁCIE

### Cez GitHub:
```bash
git add .
git commit -m "Update: popis zmeny"
git push
# Vercel automaticky redeployuje
```

### Cez CLI:
```bash
vercel --prod
```

---

## 🐛 TROUBLESHOOTING

### Build error:
```bash
# Vymažte cache a skúste znova
rm -rf node_modules .nuxt .output
npm install
npm run build
```

### 404 chyby:
- Skontrolujte `nuxt.config.ts` pre správne nastavenie SSR/SSG
- Pre statický hosting použite: `ssr: false`

### Obrázky sa nenačítavajú:
- Uistite sa, že sú v `/public` priečinku
- Používajte relatívne cesty

---

## 📊 AKTUÁLNY STAV

| Projekt | Status | URL |
|---------|--------|-----|
| salon-demo | ✅ LIVE | [salonelegance.vercel.app](https://salonelegance.vercel.app) |
| salon-retro | ✅ LIVE | [salonretro.vercel.app](https://salonretro.vercel.app) |

---

## 🎯 QUICK DEPLOY PRÍKAZY

```bash
# Rýchly deploy oboch projektov

# 1. Salon Demo
cd C:\Users\Martin\Desktop\biznis\salon-demo
vercel --prod

# 2. Salon Retro
cd C:\Users\Martin\Desktop\biznis\salon-retro
vercel --prod
```

---

Vytvorené: 30. November 2024

