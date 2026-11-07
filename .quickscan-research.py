import sys,subprocess,re,html
from urllib.parse import urljoin,urlparse
W=['smartsupp','tawk','crisp','intercom','livechatoo','limetalk','livechatinc','tidio','customerchat','zendesk','jivo','userlike','chatwoot','botpress','landbot','manychat','zopim','drift','hs-scripts','elfsight','getbutton','wa.me','api.whatsapp','m.me/','chatbase','voiceflow','chatling','botsonic','smartbot']
B=['reservio','bookio','booqme','isport','guestplan','fitssey','calendiari','prihlasovadlo','auksys','booking.com','ecasenka','navstevalekara','calendly','simplybook','supersaas','previo','profitroom','mews','bookero','setmore','fresha','anolla','momence','bsport','eversports','gymdesk','glofox','mindbody','reenio','mojelekar','doktor.sk','medicalc','objednaj','rezervac','wolt','bolt.eu','foodora','dotykacka','storyous','resos','quandoo','choice.qr','bistro.sk','hotelsystem','megaubytovanie','ubytovanienaslovensku','travelist','webcamp','smartbooking','e-chalupy','bookingnow']
def get(u): return subprocess.run(['curl','-sL','-m','20','-A','Mozilla/5.0 (Windows NT 10.0) Chrome/124','--compressed',u],capture_output=True).stdout.decode('utf-8','replace')
for u in sys.argv[1:]:
  if u.startswith('-'): continue
  h=get(u); low=h.lower()
  print('\n#####',u,'len',len(h))
  t=re.search(r'<title[^>]*>(.*?)</title>',h,re.S|re.I); print('TITLE:',html.unescape(t.group(1).strip())[:100] if t else None)
  print('PLAT:',[p for p in ['shoptet','woocommerce','wix','webnode','shopify','prestashop','elementor','upgates','eshop-rychlo','byznysweb','oxid','magento','webareal'] if p in low])
  em=sorted(set(e for e in re.findall(r'[\w.+-]+@[\w-]+(?:\.[\w-]+)+',h) if not re.search(r'\.(png|jpe?g|webp|svg|js|css|gif)$',e,re.I))); print('EMAILS:',em[:10])
  for k,L in (('CHAT',W),('BOOK',B)):
    hits=[]
    for s in L:
      for m in re.finditer(re.escape(s),low):
        hits.append(re.sub(r'\s+',' ',h[max(0,m.start()-50):m.end()+50])); break
    print(k,':',hits[:6])
  links=set()
  for m in re.finditer(r'href=["\']([^"\'#]+)',h):
    l=urljoin(u,m.group(1)); 
    if urlparse(l).netloc.replace('www.','')==urlparse(u).netloc.replace('www.','') and not re.search(r'\.(jpe?g|png|css|js|webp|svg|pdf|ico|xml|json)(\?|$)|wp-json|feed|xmlrpc',l,re.I): links.add(l.split('?')[0].rstrip('/'))
  print('LINKS:',sorted(links)[:60])
  if '-t' in sys.argv:
    txt=re.sub(r'<(script|style|noscript)[^>]*>.*?</\1>',' ',h,flags=re.S|re.I); txt=html.unescape(re.sub(r'<[^>]+>',' ',txt)); txt=re.sub(r'\s+',' ',txt)
    print('TEXT:',txt[:int([a for a in sys.argv if a.startswith('-n')][0][2:]) if any(a.startswith('-n') for a in sys.argv) else 1500])
