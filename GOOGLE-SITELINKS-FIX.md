# 🔧 Fix: Google zobrazuje nesprávne Sitelinks

## ❌ **Problém:**
Keď vyhľadáš "Appinara" na Google, zobrazujú sa:
- "Obchodné podmienky"
- "Ochrana osobných údajov"

Namiesto dôležitejších stránok ako:
- Blog
- Služby
- Portfolio

---

## ✅ **Čo som opravil:**

### 1. **Pridané `noindex` na legal pages**
```
✅ pages/ochrana-udajov.vue - pridaný meta robots: "noindex, follow"
✅ pages/obchodne-podmienky.vue - pridaný meta robots: "noindex, follow"
```

**Čo to znamená:**
- `noindex` = stránka sa NEBUDE zobrazovať vo výsledkoch vyhľadávania
- `follow` = Google BUDE nasledovať linky na stránke (footer linky atď)
- Legal pages ZOSTANÚ dostupné (cez footer), len sa nezobrazia v Google

### 2. **Znížená priorita v sitemap.xml**
```
✅ Priorita zmenená z 0.3 → 0.1
✅ Changefreq zmenená z monthly → yearly
```

---

## ⏰ **Kedy sa to prejaví?**

Google potrebuje čas na re-indexovanie:
- **Rýchlejšie (3-7 dní):** Ak submitneš sitemap znova v Google Search Console
- **Normálne (2-4 týždne):** Automatic crawl

---

## 🚀 **Čo urobiť TERAZ:**

### **Krok 1: Re-submit sitemap**
```bash
1. Choď na: https://search.google.com/search-console
2. Select property: appinara.sk
3. Ľavé menu → Sitemaps
4. Vidíš starý sitemap → Klikni "REMOVE" (vymaž starý)
5. Pridaj nový: https://appinara.sk/sitemap.xml
6. Klikni "SUBMIT"
```

### **Krok 2: Request re-indexing**
```bash
1. V Google Search Console
2. Top search bar → zadaj: https://appinara.sk/ochrana-udajov
3. Klikni "Request indexing"
4. To isté pre: https://appinara.sk/obchodne-podmienky
```

To povie Google: "Hey, tieto stránky sa zmenili, znova ich indexuj!"

### **Krok 3: Deploy zmeny**
```bash
npm run build
npm run generate
# Upload na hosting
```

---

## 📊 **Čo sa stane potom:**

### **Optimálny scenár (2-3 týždne):**
Google sitelinks sa zmenia na:
```
✅ Appinara | AI Integrácie...
   ├─ Blog
   ├─ AI Chatbot pre malý biznis
   ├─ Služby
   └─ Kontakt
```

### **Prečo trvá 2-3 týždne:**
- Google musí re-crawlovať web
- Musí vidieť user behavior (čo ľudia klikajú)
- Automaticky vyberie naj populárne stránky

---

## 💡 **Ďalšie optimalizácie pre lepšie sitelinks:**

### **1. Pridaj Structured Data (JSON-LD)**
Už máš v `app.vue`, ale pridaj ešte:

```javascript
// Breadcrumb structured data
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Domov",
    "item": "https://appinara.sk"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://appinara.sk/blog"
  }]
}
```

### **2. Internal linking**
V homepage (`pages/index.vue`), pridaj jasné linky na naj dôležitejšie stránky:

```html
<section id="quick-links" class="py-12">
  <div class="grid md:grid-cols-3 gap-6">
    <NuxtLink to="/blog" class="...">
      📚 Blog - AI tipy a návody
    </NuxtLink>
    <NuxtLink to="/sluzby/ai-chatbot" class="...">
      🤖 AI Chatbot riešenia
    </NuxtLink>
    <NuxtLink to="/#portfolio" class="...">
      💼 Naše projekty
    </NuxtLink>
  </div>
</section>
```

### **3. Anchor texts v footeri**
Zmeň generic "Blog" → "AI Blog a Návody"
Pridaj descriptive text:

```html
<!-- Footer links with better anchor text -->
<NuxtLink to="/blog" title="AI blog články a praktické návody">
  Blog & Návody
</NuxtLink>
```

---

## 🎯 **Checklist - Urob TERAZ:**

```
□ Deploy zmeny (build + upload)
□ Google Search Console → Re-submit sitemap
□ Google Search Console → Request indexing pre legal pages
□ Počkaj 3-7 dní
□ Skontroluj výsledky: google.com → "Appinara"
□ Ak sa po 2 týždňoch nič nezmenilo → Advanced fixes (ďalej nižšie)
```

---

## 🔬 **Advanced fixes (ak sa po 2 týždňoch nič nezmení):**

### **Option 1: Dočasne vymaž legal pages zo sitemap**
```xml
<!-- Odstráň úplne z sitemap.xml -->
<!-- Google ich stále nájde cez crawling, ale nebude prioritizovať -->
```

### **Option 2: Pridaj rel="nofollow" na footer linky**
```html
<a href="/ochrana-udajov" rel="nofollow">Ochrana údajov</a>
<a href="/obchodne-podmienky" rel="nofollow">Obchodné podmienky</a>
```

### **Option 3: Google Search Console - Demote URL**
```
1. Search Console → Coverage
2. Nájdi problémové URLs
3. "Remove URLs" tool (temporary removal - 6 mesiacov)
```

---

## 📈 **Ako merať úspech:**

### **Týždenne checkuj:**
```
1. Google Search Console → Performance
   - Aké queries ťa našli
   - Click-through rate (CTR)
   - Impressions

2. Google search: "Appinara"
   - Screenshot sitelinks (compare week-to-week)
   
3. Analytics:
   - Odkiaľ prichádzajú návštevníci
   - Naj populárne stránky
```

### **Goal metrics (po 1 mesiaci):**
```
✅ Sitelinks: Blog, Služby, Kontakt (nie legal pages)
✅ CTR z Google: 5-10%
✅ Blog articles indexed: 12/12
✅ Impressions: 100+ mesačne
```

---

## 🆘 **Troubleshooting:**

### **Ak po 3 týždňoch stále sitelinks zlé:**

1. **Skontroluj či Google vidí meta robots:**
```bash
# View source on live site
curl https://appinara.sk/ochrana-udajov | grep "robots"
# Malo by byť: <meta name="robots" content="noindex, follow">
```

2. **Google Search Console → URL Inspection:**
```
Zadaj: https://appinara.sk/ochrana-udajov
Pozri "User-declared canonical" a "Robots meta tag"
Malo by byť: noindex
```

3. **Ak nič nepomôže → Manual action:**
```
Google Search Console → Manual Actions → Request Review
Napíš: "Legal pages incorrectly shown as sitelinks, please re-evaluate"
```

---

## 📚 **Referencie:**

- [Google Sitelinks Best Practices](https://developers.google.com/search/docs/appearance/sitelinks)
- [Robots Meta Tag Specification](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [How to Influence Sitelinks](https://support.google.com/webmasters/answer/47334)

---

## ✅ **Zhrnutie:**

**Urobené:**
- ✅ `noindex` na legal pages
- ✅ Znížená priorita v sitemap

**Urob dnes:**
- 🔲 Deploy zmeny
- 🔲 Re-submit sitemap
- 🔲 Request re-indexing

**Počkaj:**
- ⏰ 3-7 dní: Prvé zmeny
- ⏰ 2-3 týždne: Plný efekt
- ⏰ 1 mesiac: Ideálne sitelinks

**Výsledok:**
- 🎯 Google zobrazí Blog, Služby, Kontakt
- 🎯 Legal pages hidden z search
- 🎯 Lepší CTR a professional look

---

**Last updated:** 16. November 2024
**Status:** ✅ Fixed, waiting for Google re-index






