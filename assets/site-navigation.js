(()=>{'use strict';
const path=location.pathname.toLowerCase();
const root='/';
const A=(label,href,extra='')=>'<a href="'+href+'">'+label+(extra?'<span class="cd-nav-type">'+extra+'</span>':'')+'</a>';
const menu=(label,items)=>'<div class="cd-nav-item" aria-expanded="false"><button class="cd-nav-trigger" type="button" aria-haspopup="true">'+label+' ▾</button><div class="cd-nav-menu">'+items.join('')+'</div></div>';
const platformLinks=[['Android','/android.html'],['iPhone / iOS','/iphone.html'],['Mac','/mac.html'],['Windows','/windows.html'],['Linux','/linux.html'],['Command Prompt / Terminal','/code.html#terminal-programs'],['Web Apps','/front-ends.html']];
const games=[
['Story','/games.html#storyline-studios'],
['Engine','/games.html#storyline-engine'],
['Storyline Studio','/games.html#storyline-studios'],
['Storyline Console','/games.html#storyline-console'],
['Storyline HACKED','/games.html#hacked']
];
const gameLinks=games.map(x=>A(x[0],x[1])).concat(['<div class="cd-nav-sep">Other games · add as released</div>',A('Name That Flag','/games.html#name-that-flag','Trivia / Geography')]);
const front=[['CashDublo Showcase','showcase'],['CashDublo Online Course','online-course'],['CashDublo Server','server'],['Travel Journal Web','travel-journal-web'],["Marvin's Website",'marvin-web']];
const frontLinks=[A('All front ends — full catalog','/front-ends.html'),'<div class="cd-nav-sep">Web front ends</div>',...front.map(x=>A(x[0],'/front-ends/'+x[1]+'.html')),'<div class="cd-nav-sep">App front ends</div>',A('All app front ends and back ends','/front-ends.html#app-ai2aisync')];
const appsMenu=platformLinks.map(x=>A(x[0],x[1]));
const nav='<header class="cd-site-header"><a class="cd-site-brand" href="/index.html">CASH<span>DUBLO</span></a><nav class="cd-site-nav" aria-label="Main navigation">'+
'<a class="cd-nav-trigger" href="/index.html">Home</a>'+
menu('All Apps',appsMenu)+menu('Front Ends',frontLinks)+menu('Games',gameLinks)+
'<a class="cd-nav-trigger" href="/course.html">Courses</a><a class="cd-nav-trigger" href="/code.html">Code</a><a class="cd-nav-trigger" href="/news.html">Newsletter</a><a class="cd-nav-trigger" href="/privacy.html">Privacy</a><a class="cd-nav-trigger" href="/index.html#about">About</a></nav></header>';
function install(){const old=document.querySelector('body>header');if(old)old.outerHTML=nav;else document.body.insertAdjacentHTML('afterbegin',nav);
document.querySelectorAll('.cd-nav-item>.cd-nav-trigger').forEach(btn=>{btn.addEventListener('click',e=>{e.preventDefault();const item=btn.parentElement;const open=item.getAttribute('aria-expanded')==='true';document.querySelectorAll('.cd-nav-item').forEach(x=>x.setAttribute('aria-expanded','false'));item.setAttribute('aria-expanded',String(!open));});});
document.addEventListener('click',e=>{if(!e.target.closest('.cd-nav-item'))document.querySelectorAll('.cd-nav-item').forEach(x=>x.setAttribute('aria-expanded','false'));});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.cd-nav-item').forEach(x=>x.setAttribute('aria-expanded','false'));});
if(/^\/(android|iphone|mac|windows|linux)\.html$/.test(path)){const grid=document.querySelector('.grid');if(grid){grid.classList.add('cd-platform-grid');const cards=[...grid.children].filter(x=>x.matches('.card,article'));const fragment=document.createDocumentFragment();for(let i=0;i<cards.length;i+=6){const rail=document.createElement('div');rail.className='cd-app-rail';cards.slice(i,i+6).forEach(card=>rail.appendChild(card));fragment.appendChild(rail);}grid.replaceChildren(fragment);}}
if(path.endsWith('/games.html')){document.querySelectorAll('.card').forEach(card=>{const id=card.id;if(!['hacked','name-that-flag'].includes(id))return;if(card.querySelector('.cd-game-meta'))return;const meta=document.createElement('div');meta.className='cd-game-meta';const version=document.createElement('span');version.textContent='Version: Not tagged / verify';const status=document.createElement('span');status.textContent=id==='hacked'?'Status: In development':'Status: Project listed · release unverified';const type=document.createElement('span');type.textContent=id==='hacked'?'Type: Interactive story / adventure':'Type: Trivia / geography';meta.append(version,status,type);const h=card.querySelector('h3');if(h)h.insertAdjacentElement('afterend',meta);}}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})();