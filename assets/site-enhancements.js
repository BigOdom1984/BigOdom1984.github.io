(()=>{'use strict';
const path=location.pathname.toLowerCase();
const categories={'fe-showcase':'Web / App catalogue','fe-online-course':'Education / Learning platform','fe-server':'Backend / API','fe-travel-journal-web':'Travel / Journaling','fe-marvin-web':'Character / Showcase',
'ai2aisync':'AI / Productivity','voice-model':'AI / Audio','marvin':'Character / Companion','pictureglobe':'Photos / Travel','mixology':'Food / Reference','hit-record':'Music / Creative','testra-accuracy':'Education / Testing','dear-idea':'Productivity / Ideas','go':'Travel / Navigation','travel-journal':'Travel / Journaling','say':'Education / Language learning','tts-widget':'Accessibility / Text-to-speech','player':'Music / Media','ai-cash-portfolio':'Finance / Investing','cash-portfolio':'Finance / Investing','apple2player':'Music / File transfer','dear-idea-desktop':'Productivity / Ideas','github-hq':'Developer tools / GitHub','script-installer':'Developer tools / Build utility','change-app-icons':'Developer tools / Customization','cashdublo-coder':'Developer tools / Coding','app-translator':'Developer tools / Localization','build-manager':'Developer tools / Build','rebuild-all':'Developer tools / Backup & restore','podedpro':'Audio / Device utility','galaxy-repeat':'Video / Editing','best-mac-file-manager':'File management','patent-it':'Business / Legal','crash-catcher':'Developer tools / Diagnostics','wifi-tether':'Networking / Connectivity','ai-teacher':'Education / AI tutor','apple-dextop':'Desktop integration','contracts':'Business / Legal','secure-terminal':'Command Tools'
};
const tokenByPath={'/android.html':'ANDROID','/iphone.html':'IOS','/mac.html':'MAC','/windows.html':'WIN','/linux.html':'LIN'};
function decorateCard(card){
 const rawId=card.id||card.querySelector('.icon-link')?.getAttribute('href')?.match(/\\/apps\\/([^/.]+)\\.html/i)?.[1]||'';
 const id=rawId.startsWith('app-')?rawId.slice(4):rawId;
 const plats=card.querySelector('.plats');
 const platformText=plats?(plats.textContent||''):[...card.querySelectorAll('p')].find(p=>/Front end:/i.test(p.textContent))?.textContent||'';
 const upper=platformText.toUpperCase();
 const tokens=['ANDROID','IOS','MAC','WIN','LIN','WEB'].filter(t=>new RegExp('(^|[^A-Z])'+t+'([^A-Z]|$)').test(upper));
 if(id.startsWith('fe-')&&!tokens.includes('WEB'))tokens.push('WEB');
 card.dataset.platforms=tokens.join(',');
 card.classList.add('cd-app-card');
 const old=card.querySelector('.cd-card-meta');
 if(old)old.remove();
 const meta=document.createElement('div');
 meta.className='cd-card-meta';
 if(categories[id]){
  const cat=document.createElement('span');
  cat.textContent=categories[id];
  cat.className='cd-card-category';
  meta.append(cat);
  card.dataset.category=categories[id];
 }
 if(meta.childElementCount){
  const status=card.querySelector('.status');
  (status||card.querySelector('h2,h3'))?.insertAdjacentElement('afterend',meta);
 }
 const status=card.querySelector('.status');
 if(status){
  status.textContent=(status.textContent||'').replace(/^Version:\\s*/i,'v');
  status.setAttribute('aria-label',(status.textContent||'').trim());
 }
 let links=card.querySelector('.links');
 if(!links){
  const directLinks=[...card.querySelectorAll(':scope > a')].filter(a=>!a.classList.contains('icon-link')&&!a.classList.contains('status'));
  if(directLinks.length){
   links=document.createElement('div');
   links.className='links';
   directLinks[0].parentNode.insertBefore(links,directLinks[0]);
   directLinks.forEach(a=>links.append(a));
  }
 }
 card.querySelectorAll('.links a').forEach(link=>{
  const label=(link.textContent||'').trim();
  if(/^Google Play search\\s*↗?$/i.test(label))link.textContent='Google ↗';
  else if(/^Apple search\\s*↗?$/i.test(label))link.textContent='Apple ↗';
 });
}
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

function install(){document.querySelectorAll('article.card').forEach(card=>{if(card.id||(card.querySelector('.icon-link')&&card.querySelector('.plats')))decorateCard(card);});loadPlatformCatalog();addGameMetadata();ensureFooterLinks();if(path.endsWith('/front-ends.html')){const webGrid=document.querySelector('#web-frontends .grid');if(webGrid)buildRails(webGrid,[...webGrid.children].filter(x=>x.matches('.card')));}if(path.endsWith('/terminal.html')){const tools=[...document.querySelectorAll('.command-tool-card')];if(tools.length){const parent=tools[0].parentElement,rail=document.createElement('div');rail.className='cd-app-rail';tools.forEach(card=>rail.append(card));parent.insertBefore(rail,parent.firstChild);}}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{install();});else{install();}
})();
;

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
