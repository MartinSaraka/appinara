<template>
  <div class="relative overflow-hidden dark:bg-anthracite bg-bone">
    <Navigation />
    
    <article class="relative pt-32 pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <nav class="mb-8 text-sm">
            <NuxtLink to="/" class="dark:text-slate-400 text-gray-600 dark:hover:text-primary-400 text-gray-600 hover:text-primary-600">Domov</NuxtLink>
            <span class="dark:text-slate-600 text-gray-400 mx-2">/</span>
            <NuxtLink to="/blog" class="dark:text-slate-400 text-gray-600 dark:hover:text-primary-400 text-gray-600 hover:text-primary-600">Blog</NuxtLink>
            <span class="dark:text-slate-600 text-gray-400 mx-2">/</span>
            <span class="dark:text-slate-300 text-gray-700">AI vs. Ľudia</span>
          </nav>
          
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-primary-500/20 dark:text-primary-300 text-primary-700 rounded-full text-sm font-medium">
              Budúcnosť práce
            </span>
            <span class="dark:text-slate-400 text-gray-600">📖 14 min čítania</span>
            <span class="dark:text-slate-400 text-gray-600">📅 16. November 2024</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            AI vs. Ľudia: <span class="gradient-text">Ktoré joby prežijú?</span>
          </h1>
          
          <p class="text-xl dark:text-slate-300 text-gray-700 mb-12 leading-relaxed">
            Brutálne úprimná analýza: Ktoré profesie AI vymaže do 2030 a ktoré budú prosperovať? Data z trhu práce + expert predictions. Pripravte sa TERAZ.
          </p>
          
          <div class="relative h-96 bg-gradient-to-br from-orange-600 via-red-500 to-pink-500 rounded-3xl overflow-hidden mb-12">
            <div class="absolute inset-0 grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-9xl">
              ⚔️
            </div>
          </div>
          
          <div class="prose dark:prose-invert prose-lg max-w-none">
            
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-red-500">
              <h3 class="text-2xl font-bold dark:text-white text-gray-900 mb-4">⚠️ Upozornenie: Uncomfortable truths ahead</h3>
              <p class="dark:text-slate-300 text-gray-700 mb-3">
                Tento článok NIE JE clickbait. Čísla sú reálne (McKinsey, Goldman Sachs, OpenAI research). <strong>300 miliónov jobov globally</strong> bude ovplyvnených AI do 2030.
              </p>
              <p class="text-red-400 text-sm font-bold">
                Možno zistíte, že váš job je "at risk". Good. Lepšie vedieť teraz než o 3 roky.
              </p>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Tier list: Risk level podľa profesie</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Na základe štúdií od OpenAI, McKinsey, Goldman Sachs. Delíme joby do 5 kategórií podľa "AI risk score".
            </p>

            <!-- HIGH RISK -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-red-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">🔴</div>
                <div>
                  <h3 class="text-3xl font-bold text-red-400">HIGH RISK (80-95% šanca na disrupciu)</h3>
                  <p class="dark:text-slate-400 text-gray-600 text-sm">Tieto joby budú do 2030 buď úplne automatizované alebo ich hodnota klesne o 70%+</p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">📞 Call centrum operátori</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Prečo:</strong> AI chatboti už riešia 80% queries. Zbytok vybaví AI voice (ElevenLabs, Synthesia).
                  </p>
                  <p class="text-red-400 text-xs mb-2">
                    📉 <strong>Job loss estimate:</strong> 90% do 2028
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: AI trainer, CX designer, customer success manager (high-touch roles)
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">✍️ Basic copywriters</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Prečo:</strong> ChatGPT, Claude, Jasper píšu blog posty za 2 minúty. Quality dostatočne dobrá pre 80% use cases.
                  </p>
                  <p class="text-red-400 text-xs mb-2">
                    📉 <strong>Job loss:</strong> 70% entry-level copywriting pozícií
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: Brand strategist, creative director, AI copywriting specialist (prompt engineer)
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">📊 Dátový vstup / administratíva</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Prečo:</strong> RPA (Robotic Process Automation) + AI = koniec manuálnych taskov.
                  </p>
                  <p class="text-red-400 text-xs mb-2">
                    📉 <strong>Job loss:</strong> 95% do 2026
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: Process designer, automation specialist, data analyst
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">🎨 Stock photo/ilustrácia artists</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Prečo:</strong> Midjourney, DALL-E, Stable Diffusion. "Modern office photo" → perfektný obrázok za 10 sekúnd.
                  </p>
                  <p class="text-red-400 text-xs mb-2">
                    📉 <strong>Revenue drop:</strong> Stock foto trh klesol o 40% za rok 2023
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: Unique art styles AI nemôže replikovať, AI art director, brand identity designer
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">📈 Basic data analysts</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Prečo:</strong> AI analyzuje data 1000x rýchlejšie. Excel pivot tables? AI to spravý z natural language command.
                  </p>
                  <p class="text-red-400 text-xs mb-2">
                    📉 <strong>Job loss:</strong> 60% junior analyst pozícií
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: Data storyteller, business intelligence expert, AI-powered insights analyst
                  </p>
                </div>
              </div>
            </div>

            <!-- MEDIUM-HIGH RISK -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-orange-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">🟠</div>
                <div>
                  <h3 class="text-3xl font-bold text-orange-400">MEDIUM-HIGH RISK (50-80%)</h3>
                  <p class="dark:text-slate-400 text-gray-600 text-sm">Silný AI impact, ale ľudský element stále potrebný</p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">💻 Junior developers (basic coding)</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Nuance:</strong> AI píše kód, ale nekto musí vedieť čo chceme a review kód. Junior pozície klesajú, mid/senior rastú.
                  </p>
                  <p class="text-orange-400 text-xs mb-2">
                    📉 Junior demand -40%, Senior demand +20%
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: Učte sa architecture, system design, AI-assisted development
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">🎬 Video editors (basic)</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Nuance:</strong> AI striha video, ale kreatívny direction, storytelling = ľudia. Commodity editing zomrie.
                  </p>
                  <p class="text-orange-400 text-xs mb-2">
                    📉 Freelance rates klesli o 30% za 2 roky
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: Creative director, brand storyteller, AI-powered editor (používate AI ale vy ste director)
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">📝 Novinári (niektoré typy)</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Nuance:</strong> Šport reports, earnings reports, weather = AI. Investigative journalism, long-form = ľudia.
                  </p>
                  <p class="text-orange-400 text-xs mb-2">
                    📉 AP, Reuters už používajú AI pre 1000+ článkov mesačne
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Safe zone: Investigative, opinion pieces, interviews
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-2">🎓 Online teachers (basic subjects)</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    <strong>Nuance:</strong> Khan Academy AI, ChatGPT tutoring = personalizovaný učiteľ 24/7 zadarmo. But: mentoring, motivation = human.
                  </p>
                  <p class="text-orange-400 text-xs mb-2">
                    📉 Online course platforms struggling
                  </p>
                  <p class="text-green-400 text-xs">
                    ✅ Pivot: Mentoring, community-based learning, applied skills (hands-on)
                  </p>
                </div>
              </div>
            </div>

            <!-- MEDIUM RISK -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-yellow-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">🟡</div>
                <div>
                  <h3 class="text-3xl font-bold text-yellow-400">MEDIUM RISK (30-50%)</h3>
                  <p class="dark:text-slate-400 text-gray-600 text-sm">AI pomáha, ale ľudia stále lead</p>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="dark:text-white text-gray-900 font-bold text-sm">⚖️ Právnici (niektoré časti)</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">AI review dokumentov, case research. Ale courtroom, strategy = ľudia. Junior paralegals at risk.</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="dark:text-white text-gray-900 font-bold text-sm">👨‍⚕️ Diagnostickí lekári (parciálne)</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">AI diagnostikuje z X-rays lepšie než ľudia. Ale doctor-patient relationship irreplaceable.</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="dark:text-white text-gray-900 font-bold text-sm">📐 Architekti (basic projects)</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">AI generuje designs. Ale zoning laws, client needs, creativity = human expertise.</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="dark:text-white text-gray-900 font-bold text-sm">💼 Accountants</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Bookkeeping = AI. Tax strategy, advisory = ľudia. Shift from data entry to consulting.</p>
                </div>
              </div>
            </div>

            <!-- LOW RISK -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-blue-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">🔵</div>
                <div>
                  <h3 class="text-3xl font-bold text-blue-400">LOW RISK (10-30%)</h3>
                  <p class="dark:text-slate-400 text-gray-600 text-sm">AI augments, ale core work zostáva ľudský</p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-3">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="text-blue-400 font-bold text-sm mb-1">🎯 Sales (high-touch)</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Relationship-based selling = nezastupiteľné</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="text-blue-400 font-bold text-sm mb-1">🧑‍🏫 Teachers (K-12)</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Mentoring, social skills = human domain</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="text-blue-400 font-bold text-sm mb-1">💆 Healthcare workers</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Physical care, empathy = irreplaceable</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="text-blue-400 font-bold text-sm mb-1">🔧 Skilled trades</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Plumbers, electricians - physical work hard to automate</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="text-blue-400 font-bold text-sm mb-1">🎨 Creative directors</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Vision, strategy, brand = high-level thinking</p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-lg p-3">
                  <p class="text-blue-400 font-bold text-sm mb-1">👔 Senior management</p>
                  <p class="dark:text-slate-300 text-gray-700 text-xs">Decision making, leadership = still human game</p>
                </div>
              </div>
            </div>

            <!-- ZERO RISK (Growing) -->
            <div class="glass-effect rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-5xl">🟢</div>
                <div>
                  <h3 class="text-3xl font-bold text-green-400">ZERO RISK / GROWING (AI vytvára viac demandu)</h3>
                  <p class="dark:text-slate-400 text-gray-600 text-sm">Tieto joby budú rásť VĎAKA AI, nie napriek AI</p>
                </div>
              </div>
              
              <div class="space-y-4">
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="text-green-400 font-bold mb-2">🤖 AI Trainers / Prompt Engineers</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    Učia AI, píšu prompts, fine-tunujú modely. <strong>Salary: $150k-300k/rok.</strong>
                  </p>
                  <p class="text-green-400 text-xs">
                    📈 Job growth: +300% YoY. Demand exploduje.
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="text-green-400 font-bold mb-2">🔒 AI Ethics / Safety specialists</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    Kto dohliadne že AI nie je biased, dangerous, unethical? Humans. Regulácie prichádzajú = demand raketuje.
                  </p>
                  <p class="text-green-400 text-xs">
                    📈 Nová kategória jobov. Nebola pred 3 rokmi.
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="text-green-400 font-bold mb-2">🎯 AI Integration consultants</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    Pomáhajú firmám adoptovať AI. <strong>Every company needs this.</strong> Dopyt > ponuka o 10x.
                  </p>
                  <p class="text-green-400 text-xs">
                    📈 Môj biznis (Appinara) je v tejto kategórii 😉
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="text-green-400 font-bold mb-2">🧬 Healthcare AI specialists</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    Kombinácia medical knowledge + AI. Drug discovery, personalized medicine. Salaries $200k+.
                  </p>
                </div>
                
                <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-4">
                  <h4 class="text-green-400 font-bold mb-2">🎬 AI-augmented creators</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-2">
                    Jeden človek = production studio (AI video, voice, music). Top creators zarábajú $50k-500k/mes.
                  </p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Skills, ktoré AI NEMÔŽE replikovať</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Ak máte tieto skills, ste AI-proof. Investujte do nich TERAZ.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6 mb-12">
              <div class="glass-effect rounded-xl p-6">
                <div class="text-4xl mb-3">🧠</div>
                <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-3">Critical thinking</h3>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  AI generuje output, ale nemôže rozhodnúť "Is this bullshit or not?". Humans filter, critique, improve.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <div class="text-4xl mb-3">❤️</div>
                <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-3">Empathy & EQ</h3>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  AI môže simulovať empathy, ale nie CÍTIŤ. Healthcare, coaching, leadership = ľudia.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <div class="text-4xl mb-3">🔗</div>
                <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-3">Relationship building</h3>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Trust, rapport, long-term partnerships. B2B sales, consulting, networking = human superpower.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <div class="text-4xl mb-3">🎨</div>
                <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-3">Unique creativity</h3>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  AI kombinuje existing patterns. True originality = human. Brand vision, art, storytelling.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <div class="text-4xl mb-3">⚙️</div>
                <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-3">Complex problem solving</h3>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Multi-variable, ambiguous problems s politickým kontextom. AI struggles, humans thrive.
                </p>
              </div>
              
              <div class="glass-effect rounded-xl p-6">
                <div class="text-4xl mb-3">👔</div>
                <h3 class="text-xl font-bold dark:text-white text-gray-900 mb-3">Leadership</h3>
                <p class="dark:text-slate-300 text-gray-700 text-sm">
                  Motivovať team, riešiť conflicts, set vision. Kto by followoval AI bosses? (Dystopia)
                </p>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Ako sa pripraviť: Action plan</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <div class="space-y-6">
                <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-3">1. Assess your risk level</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-3">
                    Pozrite si váš job v kategóriách vyššie. High risk? Začnite pivotovať TERAZ, nie o 3 roky.
                  </p>
                  <p class="text-blue-400 text-xs">
                    Tool: <strong>WillRobotsTaskMyJob.com</strong> - AI analyze your job risk
                  </p>
                </div>
                
                <div class="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-xl p-6">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-3">2. Learn AI tools v vašom fieldu</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-3">
                    Nekonkurujete s AI. Konkurujete s ľuďmi ktorí používajú AI. Buďte tí ľudia.
                  </p>
                  <ul class="text-green-400 text-xs space-y-1">
                    <li>• Developer? GitHub Copilot, Cursor AI</li>
                    <li>• Designer? Midjourney, Figma AI</li>
                    <li>• Writer? ChatGPT, Jasper, Claude</li>
                    <li>• Marketer? HubSpot AI, Jasper</li>
                  </ul>
                </div>
                
                <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-3">3. Double down na human skills</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-3">
                    Communication, leadership, creativity. Tieto sa AI-proof.
                  </p>
                  <p class="text-purple-400 text-xs">
                    Courses: Masterclass (leadership), Coursera (critical thinking), improv classes (creativity)
                  </p>
                </div>
                
                <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-3">4. Build side income streams</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-3">
                    Ak váš main job je at risk, hedgnite. Freelancing, consulting, online business.
                  </p>
                  <p class="text-yellow-400 text-xs">
                    AI znižuje barrier to entry pre micro-businesses (viď faceless AI videá článok)
                  </p>
                </div>
                
                <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl p-6">
                  <h4 class="dark:text-white text-gray-900 font-bold mb-3">5. Network & personal brand</h4>
                  <p class="dark:text-slate-300 text-gray-700 text-sm mb-3">
                    Jobs budú menej "apply online", viac "I know a guy". LinkedIn, Twitter, conferences.
                  </p>
                  <p class="text-red-400 text-xs">
                    V AI-dominated world, human connections = competitive moat
                  </p>
                </div>
              </div>
            </div>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Controversial take: AI je opportunity, nie threat</h2>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              Áno, niektoré joby zmiznú. Ale <strong>historically, technology vytvára viac jobov než koľko zabije</strong>:
            </p>
            
            <div class="dark:bg-slate-800 bg-gray-100 rounded-xl p-6 mb-6">
              <ul class="space-y-3 dark:text-slate-300 text-gray-700 text-sm">
                <li>• <strong>1800s:</strong> 90% ľudí farmers. Dnes 2%. Agriculture zomrelo? Nie, len sa zmenilo.</li>
                <li>• <strong>1920s:</strong> "Automobiles zabijeú horse carriage jobs!" → Vzniklo 10M+ automotive jobs.</li>
                <li>• <strong>1990s:</strong> "Internet zabije retail!" → E-commerce vytvorilo milióny jobov.</li>
                <li>• <strong>2025:</strong> "AI zabije knowledge workers!" → ???</li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 mb-8">
              <p class="text-green-400 font-bold text-lg mb-3">💡 Pattern:</p>
              <p class="dark:text-slate-300 text-gray-700 text-sm">
                Technology eliminuje repetitive tasks, ale vytvára <strong>higher-value opportunities</strong>. Accountants prestali robiť bookkeeping (Excel to spravý), začali robiť advisory (vyššie platy). Rovnaký pattern s AI.
              </p>
            </div>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-6">
              <strong>Realita:</strong> Budúcnosť patrí ľuďom, ktorí dokážu <strong>collaborate with AI</strong>, nie compete against it. "AI + Human" > "AI alone" alebo "Human alone".
            </p>

            <h2 class="text-3xl font-display font-bold dark:text-white text-gray-900 mt-12 mb-6">Záver: Je čas zmeniť mindset</h2>
            
            <div class="glass-effect rounded-2xl p-8 mb-8">
              <p class="dark:text-slate-300 text-gray-700 leading-relaxed mb-4">
                Otázka NIE JE "Zaberie AI môj job?", ale <strong>"Ako môžem použiť AI aby som bol 10x better v mojom jobe?"</strong>
              </p>
              
              <div class="bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 rounded-lg p-6 mt-6">
                <p class="text-violet-400 font-bold mb-3">🎯 Final advice:</p>
                <ul class="space-y-2 dark:text-slate-300 text-gray-700 text-sm">
                  <li>• <strong>Ak ste high risk:</strong> Začnite pivotovať DNES. Máte 2-3 roky.</li>
                  <li>• <strong>Ak ste medium risk:</strong> Learn AI tools, upskillujte sa.</li>
                  <li>• <strong>Ak ste low risk:</strong> Stále adoptujte AI. Inak vás predbehne konkurencia.</li>
                  <li>• <strong>Ak ste v growing field:</strong> Congratulations. Double down.</li>
                </ul>
              </div>
            </div>
            
            <p class="dark:text-slate-300 text-gray-700 leading-relaxed text-center mb-8 text-lg">
              <strong>Remember:</strong> Neexistuje "AI-proof" job. Len "AI-proof" skills. Investujte do skills, nie do job titles.
            </p>

            <div class="glass-effect rounded-2xl p-8 my-12 text-center">
              <h3 class="text-3xl font-display font-bold dark:text-white text-gray-900 mb-4">
                Chcete AI advantage pre vašu firmu?
              </h3>
              <p class="dark:text-slate-300 text-gray-700 mb-8 max-w-2xl mx-auto">
                Pomôžeme vám integrovať AI tak, aby váš team bol produktívnejší, nie nahradený. Consultation zdarma.
              </p>
              <NuxtLink to="/#contact" class="btn-primary inline-block">
                Poďme sa baviť
                <svg class="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>

            <div class="glass-effect rounded-2xl p-6 mt-12 flex items-center justify-between">
              <div>
                <div class="text-sm dark:text-slate-400 text-gray-600 mb-1">Autor článku</div>
                <div class="dark:text-white text-gray-900 font-semibold">Martin Saraka - Appinara</div>
              </div>
              <div class="flex gap-3">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://appinara.sk/blog/ai-vs-ludia-buducnost-prace" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na Facebooku</span>
                  📘
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://appinara.sk/blog/ai-vs-ludia-buducnost-prace" target="_blank" class="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors">
                  <span class="sr-only">Zdieľať na LinkedIne</span>
                  💼
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </article>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'AI vs. Ľudia: Ktoré joby prežijú do 2030? | Appinara',
  meta: [
    { name: 'description', content: 'Brutálne úprimná analýza: Ktoré profesie AI vymaže do 2030 a ktoré budú prosperovať? Risk assessment, pivot stratégie, AI-proof skills.' },
    { name: 'keywords', content: 'ai vs ludia, budúcnosť práce, ai joby, automatizácia práce, ai risk, ktoré profesie zaniknu, ai-proof skills' },
    
    { property: 'og:title', content: 'AI vs. Ľudia: Ktoré joby prežijú do 2030?' },
    { property: 'og:description', content: '300M jobov ovplyvnených AI. Risk assessment + action plan. Je váš job v danger zone?' },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: 'https://appinara.sk/blog/ai-vs-ludia-buducnost-prace' },
    
    { property: 'article:published_time', content: '2024-11-16T14:00:00Z' },
    { property: 'article:author', content: 'Martin Saraka' },
    { property: 'article:section', content: 'Future of Work' }
  ],
  link: [
    { rel: 'canonical', href: 'https://appinara.sk/blog/ai-vs-ludia-buducnost-prace' }
  ]
})
</script>

