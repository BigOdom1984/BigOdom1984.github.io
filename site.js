(function(){
"use strict";
function byId(i){return document.getElementById(i);}
var welcome=byId("cd-welcome"),panel=byId("comments");
function show(e){if(e){e.hidden=false;}}
function hide(e){if(e){e.hidden=true;}}
function openPanel(){hide(welcome);show(panel);var t=byId("cd-comment");if(t){t.focus();}}
var openers=document.querySelectorAll("[data-cd-open]"),i;
for(i=0;i<openers.length;i++){openers[i].addEventListener("click",function(ev){ev.preventDefault();openPanel();});}
var closers=document.querySelectorAll("[data-cd-close]");
for(i=0;i<closers.length;i++){closers[i].addEventListener("click",function(){hide(byId(this.getAttribute("data-cd-close")));});}
[welcome,panel].forEach(function(ov){if(ov){ov.addEventListener("click",function(ev){if(ev.target===ov){hide(ov);}});}});
document.addEventListener("keydown",function(ev){if(ev.key==="Escape"){hide(welcome);hide(panel);}});
var seen=false;
try{seen=!!localStorage.getItem("cdWelcomeSeen");}catch(e){}
if(!seen){show(welcome);try{localStorage.setItem("cdWelcomeSeen","1");}catch(e){}}
var form=byId("cd-form");
if(form){form.addEventListener("submit",function(ev){
ev.preventDefault();
var name=(byId("cd-name").value||"").trim();
var text=(byId("cd-comment").value||"").trim();
if(!text){return;}
var body="Name: "+(name||"(not given)")+"\nPage: "+location.pathname+"\n\n"+text;
window.location.href="mailto:CashDublo@gmail.com?subject="+encodeURIComponent("Website comment")+"&body="+encodeURIComponent(body);
var sent=byId("cd-sent");if(sent){sent.hidden=false;}
});}
})();

(function(){
"use strict";
var KEY="cdAgeGate", WEEK=7*24*60*60*1000, saved=null;
try{ saved=JSON.parse(localStorage.getItem(KEY)||"null"); }catch(e){}
var fresh = saved && (Date.now()-saved.ts) < WEEK;
if(fresh){ return; }
var ov=document.getElementById("cd-age"); if(!ov){ return; }
ov.hidden=false;
function close(){ ov.hidden=true; }
function save(answer){
  var rem=document.getElementById("cd-age-remember").checked;
  if(rem){ try{ localStorage.setItem(KEY, JSON.stringify({answer:answer, ts:Date.now()})); }catch(e){} }
  close();
}
document.getElementById("cd-age-yes").addEventListener("click", function(){ save("adult"); });
document.getElementById("cd-age-no").addEventListener("click", function(){
  var n=document.getElementById("cd-age-note");
  n.hidden=false;
  n.textContent="All good — this site and the store will show you the family-safe shelf: the apps and games made for everyone. Come back any time.";
  save("minor");
});
document.getElementById("cd-age-skip").addEventListener("click", function(ev){ ev.preventDefault(); close(); });
})();

/*CDNEWS*/
(function(){
"use strict";
if(/news\.html$/.test(location.pathname)){ return; }
var KEY="cdNewsSeenVisit";
try{ if(sessionStorage.getItem(KEY)){ return; } }catch(e){}
var PHOTO="/img/icon-podedpro.png";
var STORIES=[
["Every app is getting a plain-words manual","The first two are done: Contracts and Wi-Fi Tether now have manuals anyone can read, no tech talk. The rest of the apps are in line."],
["Contracts became a paper vault too","Besides signing, the Contracts app now keeps your important papers: photograph them, seal them, and find them again fast."],
["Indy Travel learned to watch hotel prices","Tell it the hotel and the price you want. It stays quiet unless the price moves — then it speaks up."],
["A tiny tool for moving files by cable","On the drawing board: plug a phone into a Mac, see its files, drag and drop. Small, simple, honest about what it moved."],
["Behind the scenes: the back end and the server","Work continues on the CashDublo server and the back end the apps will run on — the part nobody sees that makes everything else possible."]
];
var css=".cdnews-overlay{position:fixed;inset:0;z-index:130;background:rgba(23,45,43,.72);display:flex;align-items:stretch;justify-content:stretch;padding:0;width:100vw;height:100vh;height:100dvh;overflow:hidden}.cdnews-card{background:#fffdf8;color:#172d2b;border:0;border-radius:0;width:100%;max-width:none;height:100%;max-height:none;overflow:auto;overscroll-behavior:contain;padding:0 0 max(24px,env(safe-area-inset-bottom));position:relative;box-shadow:none}.cdnews-card img{height:clamp(120px,22vh,260px)}.cdnews-in{width:100%;max-width:1180px;margin:0 auto;padding:clamp(18px,4vw,44px)}.cdnews-card h2{font-size:clamp(1.6rem,4vw,3rem)}.cdnews-x{position:fixed;top:max(12px,env(safe-area-inset-top));right:max(12px,env(safe-area-inset-right));margin:0;float:none;z-index:5;box-shadow:0 3px 14px #0002}.cdnews-story{padding:clamp(12px,1.6vw,20px) 0}.cdnews-row{padding-bottom:12px}@media(min-width:900px){.cdnews-in{padding-top:clamp(28px,5vh,60px)}}@media(max-width:600px){.cdnews-card img{height:clamp(100px,17vh,160px)}.cdnews-in{padding:18px 16px 28px}.cdnews-row>*{flex:1 1 100%;text-align:center}}";
// Sound for the newsletter area (the President, 2026-11-17): any sound placed
// in this area is built through this one door, so it starts on its own every
// time a browser allows sound — immediately where permitted, and on the
// visitor's first touch anywhere where the browser holds sound until a touch.
function cdAutoSound(holderId, trackId){
  var holder=document.getElementById(holderId); if(!holder){ return; }
  var started=false, ctrl=null;
  function cleanup(){ document.removeEventListener("pointerdown",tryPlay); document.removeEventListener("keydown",tryPlay); document.removeEventListener("touchstart",tryPlay); }
  function markStarted(){ if(started){ return; } started=true; cleanup(); }
  function tryPlay(){ if(ctrl){ try{ ctrl.play(); }catch(e){} } }
  function plainPlayer(){
    if(started || ctrl){ return; }
    holder.innerHTML="<iframe src=\"https://open.spotify.com/embed/track/"+trackId+"?utm_source=generator&autoplay=1\" width=\"100%\" height=\"80\" frameborder=\"0\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" style=\"border-radius:12px\"></iframe>";
    cleanup();
    document.addEventListener("pointerdown",function h(){ var f=holder.querySelector("iframe"); if(f){ f.src="https://open.spotify.com/embed/track/"+trackId+"?utm_source=generator&autoplay=1"; } document.removeEventListener("pointerdown",h); });
  }
  window.onSpotifyIframeApiReady=function(IFrameAPI){
    IFrameAPI.createController(holder,{uri:"spotify:track:"+trackId,width:"100%",height:80},function(c){
      ctrl=c;
      c.addListener("playback_update",function(e){ if(e&&e.data&&!e.data.isPaused){ markStarted(); } });
      tryPlay();
    });
  };
  var api=document.createElement("script"); api.src="https://open.spotify.com/embed/iframe-api/v1"; api.async=true; api.onerror=plainPlayer; document.head.appendChild(api);
  setTimeout(function(){ if(!ctrl&&!started){ plainPlayer(); } },3000);
  // Attempt autoplay immediately; browser policy may require the first visitor gesture.
  tryPlay();
  document.addEventListener("pointerdown",tryPlay,{once:true});
  document.addEventListener("keydown",tryPlay,{once:true});
  document.addEventListener("touchstart",tryPlay,{once:true});
}
// Which view is visiting (the President, 2026-11-17): mobile, tablet, or
// desktop — stamped on the page so every part of the site, the banner
// first, aligns with the selected web view.
function cdView(){
  var w=window.innerWidth||document.documentElement.clientWidth||1200; var ua=navigator.userAgent||"";
  if(w<640||/Mobi|Android.*Mobile|iPhone|iPod/i.test(ua)){ return "mobile"; }
  if(w<=1100||/iPad|Tablet|PlayBook|Silk/i.test(ua)){ return "tablet"; }
  return "desktop";
}
try{ document.documentElement.setAttribute("data-view",cdView()); }catch(e){}
function build(){
if(document.getElementById("cdnews")){ return true; }
var st=document.createElement("style"); st.textContent=css; document.head.appendChild(st);
var ov=document.createElement("div"); ov.className="cdnews-overlay"; ov.id="cdnews";
var rows=STORIES.map(function(s){ return "<div class=\"cdnews-story\"><button type=\"button\"><span class=\"cdnews-car\">&#9662;</span>"+s[0]+"</button><p>"+s[1]+"</p></div>"; }).join("");
var BDAY = Date.now() < new Date("2026-11-25T00:00:00+07:00").getTime();
if(BDAY){
ov.innerHTML="<div class=\"cdnews-card\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Happy Birthday, Dad\">"
+"<button class=\"cdnews-x\" type=\"button\" aria-label=\"Close\">&times;</button>"
+"<div class=\"cdnews-in\" style=\"padding-top:26px\"><div class=\"cdnews-kick\">The CashDublo Newsletter — a special one</div>"
+"<h2>&#127874; Happy Birthday, Dad.</h2>"
+"<p style=\"font-size:1.08rem;color:#172d2b\">Thanks for giving me my first computer at 13.</p>"
+"<p style=\"font-size:1.25rem;font-weight:900;letter-spacing:-.02em\">Look at me now.</p>"
+"<p class=\"cdnews-sub\">— Greg</p>"
+"<p style=\"margin:14px 0 6px;font-weight:800\">&#127925; Just the Two of Us — the original, for you, Dad.</p>"
+"<div id=\"bday-song\" style=\"border-radius:12px;overflow:hidden;min-height:80px\"></div>"
+"<p class=\"cdnews-sub\" style=\"margin-top:8px\">It starts on its own — and closing this card stops the song.</p>"
+"<div class=\"cdnews-row\"><a class=\"cdnews-btn\" href=\"news.html\">Read the newsletter</a></div>"
+"</div></div>";
document.body.appendChild(ov);
ov.querySelector(".cdnews-x").addEventListener("click", close);
// The newsletter stays visible until the explicit X is clicked.
cdAutoSound("bday-song","1ko2lVN0vKGUl9zrU0qSlT");
return true;
}
ov.innerHTML="<div class=\"cdnews-card\" role=\"dialog\" aria-modal=\"true\" aria-label=\"The CashDublo Newsletter\">"
+"<button class=\"cdnews-x\" type=\"button\" aria-label=\"Close\">&times;</button>"
+"<img src=\""+PHOTO+"\" alt=\"PodEdPro app icon\" onerror=\"this.style.display='none'\">"
+"<div class=\"cdnews-in\"><div class=\"cdnews-kick\">The CashDublo Newsletter</div>"
+"<h2>What's going on, in plain words.</h2>"
+"<p class=\"cdnews-sub\">November 17, 2026 — the short version, for everybody. Tap a story to open it.</p>"
+rows
+"<div class=\"cdnews-row\"><a class=\"cdnews-btn\" href=\"news.html\">Read the newsletter</a></div>"
+"</div></div>";
document.body.appendChild(ov);
function close(){ ov.remove(); try{ sessionStorage.setItem(KEY,"1"); }catch(e){} }
ov.querySelector(".cdnews-x").addEventListener("click", close);
// The newsletter remains open until the explicit X is clicked.
ov.querySelectorAll(".cdnews-story button").forEach(function(b){ b.addEventListener("click", function(){ b.parentElement.classList.toggle("open"); }); });
return true;
}
var tries=0;
var timer=setInterval(function(){
tries++;
var age=document.getElementById("cd-age");
var welcome=document.getElementById("cd-welcome");
var busy=(age && !age.hidden) || (welcome && !welcome.hidden);
if(!busy || tries>25){ clearInterval(timer); build(); }
},800);
})();
