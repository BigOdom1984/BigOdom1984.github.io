(()=>{'use strict';
const path=location.pathname.toLowerCase();
const A=(label,href,extra='')=>'<a href="'+href+'">'+label+(extra?'<span class="cd-nav-type">'+extra+'</span>':'')+'</a>';
const menu=(label,items)=>'<div class="cd-nav-item" aria-expanded="false"><button class="cd-nav-trigger" type="button" aria-haspopup="true">'+label+' ▾</button><div class="cd-nav-menu">'+items.join('')+'</div></div>';
const platformLinks=[['Android','/android.html'],['iPhone / iOS','/iphone.html'],['Mac','/mac.html'],['Windows','/windows.html'],['Linux','/linux.html'],['Command Tools','/terminal.html'],['Web Apps','/front-ends.html#web-frontends']];
const gameLinks=[A('Story','/games.html#story'),A('Engine','/games.html#storyline-engine'),A('Storyline Studio','/games.html#storyline-studios'),A('Storyline Console','/games.html#storyline-console'),A('Storyline HACKED','/games.html#hacked'),'<div class="cd-nav-sep">Other games · add as released</div>',A('Name That Flag','/games.html#name-that-flag','Trivia / Geography')];
const webApps=[['CashDublo Showcase','showcase'],['CashDublo Online Course','online-course'],['Travel Journal Web','travel-journal-web'],["Marvin's Website",'marvin-web']];
const backEnds=[['CashDublo Server','server']];
const appFronts=[['AI2AISync','ai2aisync'],['VoiceModel','voice-model'],['Marvin','marvin'],['PictureGlobe','pictureglobe'],['Mixology','mixology'],['Hit Record','hit-record'],['Testra Accuracy','testra-accuracy'],['Dear Idea','dear-idea'],['GO','go'],['Travel Journal','travel-journal'],['SAY','say'],['TTS Widget','tts-widget'],['Player','player'],['AI Cash Portfolio','ai-cash-portfolio'],['Cash Portfolio','cash-portfolio'],['Apple2Player','apple2player'],['Dear Idea Desktop','dear-idea-desktop'],['GitHub HQ','github-hq'],['Script-Run','script-installer'],['Change App Icons','change-app-icons'],['CashDublo Coder','cashdublo-coder'],['App Translator','app-translator'],['Build Manager','build-manager'],['Rebuild-All','rebuild-all'],['PodEdPro','podedpro'],['Galaxy Repeat','galaxy-repeat'],['Best Mac File Manager','best-mac-file-manager'],['Patent It!','patent-it'],['Crash Catcher','crash-catcher'],['Wi-Fi Tether','wifi-tether'],['AI Teacher','ai-teacher'],['Apple Dextop','apple-dextop'],['Contracts','contracts'],['Secure Mac Remote Terminal','secure-terminal']];
const webAppLinks=webApps.map(x=>A(x[0],'/front-ends/'+x[1]+'.html'));
const frontEndLinks=[A('All front ends — full catalog','/front-ends.html'),...appFronts.map(x=>A(x[0],'/front-ends.html#app-'+x[1]))];
const backEndLinks=backEnds.map(x=>A(x[0],'/front-ends/'+x[1]+'.html'));
const drawerGroup=(label,items)=>'<details class="cd-drawer-group"><summary>'+label+'</summary><div class="cd-drawer-links">'+items.join('')+'</div></details>';
const nav=path.startsWith('/chatgpt/')?'<header class="cd-site-header" data-cd-header><button class="cd-header-hit" type="button" data-cd-toggle aria-controls="cd-site-drawer" aria-expanded="false" aria-label="Open ChatGPT section menu"><span>Menu <b aria-hidden="true">☰</b></span></button><span class="cd-site-brand">CASH<span>DUBLO</span></span><span class="cd-site-tagline" aria-hidden="true">ChatGPT</span></header><nav id="cd-site-drawer" class="cd-site-drawer" aria-label="ChatGPT section navigation" aria-hidden="true" hidden inert><div class="cd-drawer-inner">'+A('RSS Receiver','/ChatGPT/rss-receiver.html')+'</div></nav>':'<header class="cd-site-header" data-cd-header><button class="cd-header-hit" type="button" data-cd-toggle aria-controls="cd-site-drawer" aria-expanded="false" aria-label="Open navigation. Tap anywhere on the green header to open or close the menu."><span>Menu <b aria-hidden="true">☰</b></span></button><a class="cd-site-brand" href="/index.html">CASH<span>DUBLO</span></a><span class="cd-site-tagline" aria-hidden="true">Apps · Websites · Tools</span></header><nav id="cd-site-drawer" class="cd-site-drawer" aria-label="Site navigation" aria-hidden="true" hidden inert><div class="cd-drawer-inner">'+A('Home','/index.html')+A('Website Design','/website-design.html')+A('App Store','/cashdublo-app-store.html')+A('All Apps','/apps.html')+drawerGroup('Platforms',platformLinks.filter(x=>x[0]!=='Web Apps').map(x=>A(x[0],x[1])))+A('Web Apps','/front-ends.html#web-frontends')+A('Memberships','/memberships.html')+drawerGroup('Front Ends',frontEndLinks)+drawerGroup('Back Ends',backEndLinks)+A('Products','/products.html')+drawerGroup('Games',gameLinks)+A('Courses','/course.html')+A('My Source Code','/code.html')+A('Newsletter','/news.html')+A('RSS Feeds','/rss.html')+A('Privacy','/privacy.html')+A('Contact Us','mailto:CashDublo@gmail.com')+A('Comments','#comments','')+A('About Us','/index.html#about')+'</div></nav>';
const categories={'fe-showcase':'Web / App catalogue','fe-online-course':'Education / Learning platform','fe-server':'Backend / API','fe-travel-journal-web':'Travel / Journaling','fe-marvin-web':'Character / Showcase',
'ai2aisync':'AI / Productivity','voice-model':'AI / Audio','marvin':'Character / Companion','pictureglobe':'Photos / Travel','mixology':'Food / Reference','hit-record':'Music / Creative','testra-accuracy':'Education / Testing','dear-idea':'Productivity / Ideas','go':'Travel / Navigation','travel-journal':'Travel / Journaling','say':'Education / Language learning','tts-widget':'Accessibility / Text-to-speech','player':'Music / Media','ai-cash-portfolio':'Finance / Investing','cash-portfolio':'Finance / Investing','apple2player':'Music / File transfer','dear-idea-desktop':'Productivity / Ideas','github-hq':'Developer tools / GitHub','script-installer':'Developer tools / Build utility','change-app-icons':'Developer tools / Customization','cashdublo-coder':'Developer tools / Coding','app-translator':'Developer tools / Localization','build-manager':'Developer tools / Build','rebuild-all':'Developer tools / Backup & restore','podedpro':'Audio / Device utility','galaxy-repeat':'Video / Editing','best-mac-file-manager':'File management','patent-it':'Business / Legal','crash-catcher':'Developer tools / Diagnostics','wifi-tether':'Networking / Connectivity','ai-teacher':'Education / AI tutor','apple-dextop':'Desktop integration','contracts':'Business / Legal','secure-terminal':'Command Tools'
};
const tokenByPath={'/android.html':'ANDROID','/iphone.html':'IOS','/mac.html':'MAC','/windows.html':'WIN','/linux.html':'LIN'};
function decorateCard(card){const id=card.id.startsWith('app-')?card.id.slice(4):card.id;const plats=card.querySelector('.plats');const platformText=plats?(plats.textContent||''):[...card.querySelectorAll('p')].find(p=>/Front end:/i.test(p.textContent))?.textContent||'';const upper=platformText.toUpperCase();const tokens=['ANDROID','IOS','MAC','WIN','LIN','WEB'].filter(t=>new RegExp('(^|[^A-Z])'+t+'([^A-Z]|$)').test(upper));if(id.startsWith('fe-')&&!tokens.includes('WEB'))tokens.push('WEB');card.dataset.platforms=tokens.join(',');const old=card.querySelector('.cd-card-meta');if(old)old.remove();const meta=document.createElement('div');meta.className='cd-card-meta';if(categories[id]){const cat=document.createElement('span');cat.textContent=categories[id];cat.className='cd-card-category';meta.append(cat);card.dataset.category=categories[id];}if(tokens.length){const p=document.createElement('span');p.textContent='Platforms: '+tokens.join(' · ');p.className='cd-card-platforms';meta.append(p);}if(meta.childElementCount){const status=card.querySelector('.status');(status||card.querySelector('h2,h3'))?.insertAdjacentElement('afterend',meta);}}
function buildRails(grid,cards){grid.replaceChildren();for(let i=0;i<cards.length;i+=6){const rail=document.createElement('div');rail.className='cd-app-rail';cards.slice(i,i+6).forEach(card=>rail.append(card));grid.append(rail);}if(!cards.length){const p=document.createElement('p');p.className='note';p.textContent='No applications are currently tagged for this platform. Platform support is listed only when confirmed in the catalogue.';grid.append(p);}}
function loadPlatformCatalog(){const token=tokenByPath[path];if(!token)return;const grid=document.querySelector('main .grid');if(!grid)return;Promise.all([fetch('/apps.html'),fetch('/games.html')]).then(async responses=>{if(responses.some(r=>!r.ok))throw Error('catalog unavailable');return Promise.all(responses.map(r=>r.text()));}).then(([appHtml,gameHtml])=>{const appDoc=new DOMParser().parseFromString(appHtml,'text/html');const gameDoc=new DOMParser().parseFromString(gameHtml,'text/html');const appCards=[...appDoc.querySelectorAll('article.card[id]')].filter(card=>{const p=card.querySelector('.plats');return p&&(p.textContent||'').toUpperCase().split(/[·,|]/).map(x=>x.trim()).includes(token);}).map(card=>{const clone=card.cloneNode(true);clone.querySelectorAll('img').forEach(img=>{if(img.getAttribute('src')?.startsWith('../'))img.setAttribute('src',img.getAttribute('src').replace(/^\.\.\//,'/'));});decorateCard(clone);return clone;});const gameCards=[...gameDoc.querySelectorAll('article.game-card[data-platforms]')].filter(card=>(card.dataset.platforms||'').toUpperCase().split(/[·,|]/).map(x=>x.trim()).includes(token)).map(card=>{const clone=card.cloneNode(true);const meta=document.createElement('div');meta.className='cd-game-meta';[['Version: ',clone.dataset.version||'Not tagged'],['Status: ',clone.dataset.status||'Unverified'],['Type: ',clone.dataset.gameType||'Not classified'],['Platforms: ',clone.dataset.platforms||'Not verified']].forEach(([label,value])=>{const s=document.createElement('span');s.textContent=label+value;meta.append(s);});const h=clone.querySelector('h3,h2');if(h)h.insertAdjacentElement('afterend',meta);return clone;});buildRails(grid,appCards.concat(gameCards));}).catch(()=>{const note=document.createElement('p');note.className='note';note.textContent='The central app and game catalogues could not be loaded. Please open All Apps for the current listing.';grid.replaceChildren(note);});}
function addGameMetadata(){document.querySelectorAll('.game-card').forEach(card=>{if(card.querySelector('.cd-game-meta'))return;const meta=document.createElement('div');meta.className='cd-game-meta';[['Version: ',card.dataset.version||'Not tagged'],['Status: ',card.dataset.status||'Unverified'],['Type: ',card.dataset.gameType||'Not classified'],['Platforms: ',card.dataset.platforms||'Not verified']].forEach(([label,value])=>{const s=document.createElement('span');s.textContent=label+value;meta.append(s);});const h=card.querySelector('h3,h2');if(h)h.insertAdjacentElement('afterend',meta);});}
function ensureFooterLinks(){
 let footer=document.querySelector('footer');
 if(!footer){footer=document.createElement('footer');footer.className='cd-site-footer';document.body.append(footer);}
 let group=footer.querySelector('.cd-footer-legal');
 if(!group){group=document.createElement('div');group.className='cd-footer-legal';footer.append(group);}
 const privacy=group.querySelector('a[href="/privacy.html"]')||footer.querySelector('a[href="/privacy.html"]')||document.createElement('a');
 privacy.href='/privacy.html';privacy.textContent='Privacy Policy';
 const contact=group.querySelector('a[href^="mailto:"]')||footer.querySelector('a[href^="mailto:"]')||document.createElement('a');
 if(!contact.getAttribute('href'))contact.href='mailto:CashDublo@gmail.com';contact.textContent='Contact Us';
 const about=group.querySelector('a[href="/index.html#about"]')||footer.querySelector('a[href="/index.html#about"]')||document.createElement('a');
 about.href='/index.html#about';about.textContent='About Us';
 group.replaceChildren(privacy,document.createTextNode(' — '),contact,document.createTextNode(' — '),about);
}
function loadSharedDrawer(){
 const css="/assets/cashdublo-nav.css",script="/assets/cashdublo-nav.js";
 if(!document.querySelector('link[data-cd-nav-css],link[href="/assets/cashdublo-nav.css"]')){const link=document.createElement("link");link.rel="stylesheet";link.href=css;link.dataset.cdNavCss="1";document.head.appendChild(link);}
 if(window.CashDubloNav){window.CashDubloNav.init();return;}
 const existing=document.querySelector('script[data-cd-nav-js],script[src="/assets/cashdublo-nav.js"]');
 if(existing){existing.addEventListener("load",()=>window.CashDubloNav?.init(),{once:true});return;}
 const s=document.createElement("script");s.src=script;s.dataset.cdNavJs="1";s.onload=()=>window.CashDubloNav?.init();document.head.appendChild(s);
}
function ensurePrimaryNav(){
 if(path.startsWith('/chatgpt/')){document.querySelector('[data-cd-primary-nav]')?.remove();return;}
 const header=document.querySelector('[data-cd-header]');
 if(!header)return;
 let primary=document.querySelector('[data-cd-primary-nav]');
 if(!primary){
  primary=document.createElement('nav');
  primary.className='cd-primary-nav';
  primary.dataset.cdPrimaryNav='1';
  primary.setAttribute('aria-label','Primary navigation');
  primary.innerHTML='<a href="/apps.html">All apps</a><a href="/index.html#featured">Featured apps</a><a href="/rss.html">RSS Feeds</a><a href="/cashdublo-app-store.html">App Store</a>';
  header.insertAdjacentElement('afterend',primary);
 }
 let style=document.getElementById('cd-primary-nav-style');
 if(!style){
  style=document.createElement('style');style.id='cd-primary-nav-style';
  style.textContent='.cd-primary-nav{position:sticky;top:64px;z-index:999;display:flex;align-items:center;justify-content:center;gap:clamp(12px,2.5vw,30px);width:100%;padding:10px clamp(14px,4vw,40px);background:#f5f0e6;color:#172d2b;border-bottom:1px solid #d8d4c9;overflow-x:auto;white-space:nowrap;scrollbar-width:thin;-webkit-overflow-scrolling:touch}.cd-primary-nav a{flex:0 0 auto;color:#172d2b;text-decoration:none;font-size:.92rem;font-weight:850;padding:5px 2px;border-bottom:3px solid transparent}.cd-primary-nav a:hover,.cd-primary-nav a:focus-visible{color:#a84e3d;border-bottom-color:#f0785e;outline-offset:3px}.cd-primary-nav a[aria-current=page]{color:#a84e3d;border-bottom-color:#f0785e}@media(max-width:600px){.cd-primary-nav{justify-content:flex-start;gap:20px;padding:9px 14px}.cd-primary-nav a{font-size:.88rem}}@media(prefers-reduced-motion:reduce){.cd-primary-nav{scroll-behavior:auto}}';
  document.head.appendChild(style);
 }
 let spacer=document.querySelector('[data-cd-primary-nav-spacer]');
 if(!spacer){spacer=document.createElement('div');spacer.dataset.cdPrimaryNavSpacer='1';spacer.setAttribute('aria-hidden','true');primary.insertAdjacentElement('beforebegin',spacer);}
 const syncPrimaryNav=()=>{primary.style.top=(header.getBoundingClientRect().height||64)+'px';spacer.style.height=primary.offsetHeight+'px';};
 primary.style.position='fixed';primary.style.left='0';primary.style.right='0';primary.style.width='100%';
 syncPrimaryNav();
 if(!primary.dataset.cdResizeBound){window.addEventListener('resize',syncPrimaryNav,{passive:true});primary.dataset.cdResizeBound='1';}
 const current=location.pathname.toLowerCase();
 const hash=location.hash.toLowerCase();
 primary.querySelectorAll('a').forEach(a=>{
  const href=a.getAttribute('href');
  const active=(href==='/index.html#about'&&hash==='#about')||(href==='/index.html#featured'&&hash==='#featured')||(href==='/apps.html'&&current.endsWith('/apps.html'))||(href==='/chatgpt/rss-receiver.html'&&current.endsWith('/chatgpt/rss-receiver.html'))||(href==='/privacy.html'&&current.endsWith('/privacy.html'));
  if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
 });
}
function install(){if(!document.querySelector('[data-cd-header]')){const legacyHeader=document.querySelector('body > header');if(legacyHeader)legacyHeader.remove();document.body.insertAdjacentHTML('afterbegin',nav);}ensurePrimaryNav();loadSharedDrawer();document.querySelectorAll('article.card[id]').forEach(decorateCard);loadPlatformCatalog();addGameMetadata();ensureFooterLinks();if(path.endsWith('/front-ends.html')){const webGrid=document.querySelector('#web-frontends .grid');if(webGrid)buildRails(webGrid,[...webGrid.children].filter(x=>x.matches('.card')));}if(path.endsWith('/terminal.html')){const tools=[...document.querySelectorAll('.command-tool-card')];if(tools.length){const parent=tools[0].parentElement,rail=document.createElement('div');rail.className='cd-app-rail';tools.forEach(card=>rail.append(card));parent.insertBefore(rail,parent.firstChild);}}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{install();});else{install();}
})();

/* App icon status overlay. Only an explicit red status gets the banner; unknown is neutral. */
(function(){
  function applyBuildStatusOverlays(){
    document.querySelectorAll('[data-build-status]').forEach(function(card){
      var status=(card.getAttribute('data-build-status')||'').toLowerCase();
      var img=card.querySelector('img');
      if(!img || !['red','yellow','green'].includes(status)) return;
      var parent=img.parentElement;
      if(parent && parent.classList.contains('cd-app-icon-frame')){parent.dataset.buildStatus=status;return;}
      var frame=document.createElement('span');
      frame.className='cd-app-icon-frame';
      frame.dataset.buildStatus=status;
      img.parentNode.insertBefore(frame,img);
      frame.appendChild(img);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyBuildStatusOverlays);
  else applyBuildStatusOverlays();
})();

/* Default Marvin-inspired featured-app card layout for every app card across the site. */
(function(){
  if(document.getElementById('cd-featured-app-card-style')) return;
  var style=document.createElement('style');
  style.id='cd-featured-app-card-style';
  style.textContent=`
    .card.featured-app-card{display:flex;flex-direction:column;gap:14px;min-height:300px}
    .card.featured-app-card .featured-app-heading{display:grid;grid-template-columns:112px minmax(0,1fr);align-items:center;gap:16px;min-height:112px}
    .card.featured-app-card .featured-app-labels{grid-column:2;grid-row:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;min-width:0}
    .card.featured-app-card .featured-app-labels .status{margin:0;align-self:center;font-size:.72rem;padding:6px 10px;white-space:normal}
    .card.featured-app-card .featured-app-labels h2,.card.featured-app-card .featured-app-labels h3{margin:0;text-align:center;line-height:1.08;font-size:clamp(1.35rem,2.5vw,1.8rem);overflow-wrap:anywhere}
    .card.featured-app-card .icon-link{grid-column:1;grid-row:1;justify-self:start;align-self:center;line-height:0;margin:0}
    .card.featured-app-card .icon-link img,.card.featured-app-card .app-icon-placeholder{width:104px;height:104px;max-width:100%;border-radius:23px;object-fit:cover}
    .card.featured-app-card>p{margin:0;flex:1 0 auto;font-size:1rem;line-height:1.55}
    .card.featured-app-card>.links{margin-top:auto;padding-top:8px}
    .card.featured-app-card>.plats{margin-top:auto;padding-top:8px;font-size:.78rem;font-weight:800;letter-spacing:.07em;line-height:1.5;white-space:normal}
    @media(max-width:560px){.card.featured-app-card .featured-app-heading{grid-template-columns:104px minmax(0,1fr);min-height:104px;gap:12px}.card.featured-app-card .icon-link img,.card.featured-app-card .app-icon-placeholder{width:98px;height:98px}.card.featured-app-card .featured-app-labels h2,.card.featured-app-card .featured-app-labels h3{font-size:1.35rem}}
  `;
  document.head.appendChild(style);
  function apply(){
    document.querySelectorAll('article.card').forEach(function(card){
      if(card.classList.contains('featured-app-card')) return;
      var icon=card.querySelector(':scope > .icon-link');
      var status=card.querySelector(':scope > .status');
      var heading=card.querySelector(':scope > h2,:scope > h3');
      if(!icon||!status||!heading) return;
      card.classList.add('featured-app-card');
      var head=document.createElement('div');head.className='featured-app-heading';
      var labels=document.createElement('div');labels.className='featured-app-labels';
      labels.append(status,heading);head.append(labels,icon);card.insertBefore(head,card.firstChild);
      var links=card.querySelector(':scope > .links');
      if(links){var first=links.querySelector('a');if(first){var title=heading.textContent.trim();first.textContent='Explore '+title+' ↗';first.classList.add('featured-app-explore');}}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply,{once:true});else apply();
})();
