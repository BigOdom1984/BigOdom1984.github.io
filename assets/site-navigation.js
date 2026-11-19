(()=>{'use strict';
const path=location.pathname.toLowerCase();
const A=(label,href,extra='')=>'<a href="'+href+'">'+label+(extra?'<span class="cd-nav-type">'+extra+'</span>':'')+'</a>';
const menu=(label,items)=>'<div class="cd-nav-item" aria-expanded="false"><button class="cd-nav-trigger" type="button" aria-haspopup="true">'+label+' ▾</button><div class="cd-nav-menu">'+items.join('')+'</div></div>';
const platformLinks=[['Android','/android.html'],['iPhone / iOS','/iphone.html'],['Mac','/mac.html'],['Windows','/windows.html'],['Linux','/linux.html'],['Command Tools','/terminal.html'],['Web Apps','/front-ends.html#web-frontends']];
const gameLinks=[A('Story','/games.html#story'),A('Engine','/games.html#storyline-engine'),A('Storyline Studio','/games.html#storyline-studios'),A('Storyline Console','/games.html#storyline-console'),A('Storyline HACKED','/games.html#hacked'),'<div class="cd-nav-sep">Other games · add as released</div>',A('Name That Flag','/games.html#name-that-flag','Trivia / Geography')];
const front=[['CashDublo Showcase','showcase'],['CashDublo Online Course','online-course'],['CashDublo Server','server'],['Travel Journal Web','travel-journal-web'],["Marvin's Website",'marvin-web']];
const appFronts=[['AI2AISync','ai2aisync'],['VoiceModel','voice-model'],['Marvin','marvin'],['PictureGlobe','pictureglobe'],['Mixology','mixology'],['Hit Record','hit-record'],['Testra Accuracy','testra-accuracy'],['Dear Idea','dear-idea'],['GO','go'],['Travel Journal','travel-journal'],['SAY','say'],['TTS Widget','tts-widget'],['Player','player'],['AI Cash Portfolio','ai-cash-portfolio'],['Cash Portfolio','cash-portfolio'],['Apple2Player','apple2player'],['Dear Idea Desktop','dear-idea-desktop'],['GitHub HQ','github-hq'],['Script-Run','script-installer'],['Change App Icons','change-app-icons'],['CashDublo Coder','cashdublo-coder'],['App Translator','app-translator'],['Build Manager','build-manager'],['Rebuild-All','rebuild-all'],['PodEdPro','podedpro'],['Galaxy Repeat','galaxy-repeat'],['Best Mac File Manager','best-mac-file-manager'],['Patent It!','patent-it'],['Crash Catcher','crash-catcher'],['Wi-Fi Tether','wifi-tether'],['AI Teacher','ai-teacher'],['Apple Dextop','apple-dextop'],['Contracts','contracts'],['Secure Mac Remote Terminal','secure-terminal']];
const frontLinks=[A('All front ends — full catalog','/front-ends.html'),'<div class="cd-nav-sep">Web front ends</div>',...front.map(x=>A(x[0],'/front-ends/'+x[1]+'.html')),'<div class="cd-nav-sep">App front ends</div>',...appFronts.map(x=>A(x[0],'/front-ends.html#app-'+x[1]))];
const drawerGroup=(label,items)=>'<details class="cd-drawer-group"><summary>'+label+'</summary><div class="cd-drawer-links">'+items.join('')+'</div></details>';
const nav='<header class="cd-site-header" data-cd-header><button class="cd-header-hit" type="button" data-cd-toggle aria-controls="cd-site-drawer" aria-expanded="false" aria-label="Open navigation. Tap anywhere on the green header to open or close the menu."><span>Menu <b aria-hidden="true">☰</b></span></button><a class="cd-site-brand" href="/index.html">CASH<span>DUBLO</span></a><span class="cd-site-tagline" aria-hidden="true">Apps · Websites · Tools</span></header><nav id="cd-site-drawer" class="cd-site-drawer" aria-label="Site navigation" aria-hidden="true" hidden inert><div class="cd-drawer-inner">'+A('Home','/index.html')+drawerGroup('All Apps',[A('All apps','/apps.html'),...platformLinks.map(x=>A(x[0],x[1]))])+A('Memberships','/memberships.html')+drawerGroup('Front Ends',frontLinks)+A('Website Design','/website-design.html')+A('App Store','/cashdublo-app-store.html')+A('Products','/products.html')+drawerGroup('Games',gameLinks)+A('Courses','/course.html')+A('My Source Code','/code.html')+A('Newsletter','/news.html')+A('About','/index.html#about')+'</div></nav>';
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
 if(!group.querySelector('a[href="/privacy.html"]')){const privacy=document.createElement('a');privacy.href='/privacy.html';privacy.textContent='Privacy Policy';group.append(privacy);}
 if(!group.querySelector('a[href^="mailto:"]')&&!footer.querySelector('a[href^="mailto:"]')){const contact=document.createElement('a');contact.href='mailto:CashDublo@gmail.com';contact.textContent='Contact Us';group.append(contact);}
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
 const header=document.querySelector('[data-cd-header]');
 if(!header)return;
 let primary=document.querySelector('[data-cd-primary-nav]');
 if(!primary){
  primary=document.createElement('nav');
  primary.className='cd-primary-nav';
  primary.dataset.cdPrimaryNav='1';
  primary.setAttribute('aria-label','Primary navigation');
  primary.innerHTML='<a href="/index.html#about">About</a><a href="/index.html#featured">Featured apps</a><a href="/apps.html">All apps</a><a href="/ChatGPT/rss-receiver.html">RSS Receiver</a><a href="/privacy.html">Privacy</a>';
  header.insertAdjacentElement('afterend',primary);
 }
 let style=document.getElementById('cd-primary-nav-style');
 if(!style){
  style=document.createElement('style');style.id='cd-primary-nav-style';
  style.textContent='.cd-primary-nav{position:sticky;top:64px;z-index:999;display:flex;align-items:center;justify-content:center;gap:clamp(12px,2.5vw,30px);width:100%;padding:10px clamp(14px,4vw,40px);background:#f5f0e6;color:#172d2b;border-bottom:1px solid #d8d4c9;overflow-x:auto;white-space:nowrap;scrollbar-width:thin;-webkit-overflow-scrolling:touch}.cd-primary-nav a{flex:0 0 auto;color:#172d2b;text-decoration:none;font-size:.92rem;font-weight:850;padding:5px 2px;border-bottom:3px solid transparent}.cd-primary-nav a:hover,.cd-primary-nav a:focus-visible{color:#a84e3d;border-bottom-color:#f0785e;outline-offset:3px}.cd-primary-nav a[aria-current=page]{color:#a84e3d;border-bottom-color:#f0785e}@media(max-width:600px){.cd-primary-nav{justify-content:flex-start;gap:20px;padding:9px 14px}.cd-primary-nav a{font-size:.88rem}}@media(prefers-reduced-motion:reduce){.cd-primary-nav{scroll-behavior:auto}}';
  document.head.appendChild(style);
 }
 primary.style.top=(header.getBoundingClientRect().height||64)+'px';
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
