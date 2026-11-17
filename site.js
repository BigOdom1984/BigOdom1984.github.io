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
var css=".cdnews-overlay{position:fixed;inset:0;z-index:130;background:rgba(23,45,43,.45);display:flex;align-items:center;justify-content:center;padding:16px}.cdnews-card{background:#fffdf8;color:#172d2b;border:1px solid #d8d4c9;border-radius:22px;max-width:440px;width:100%;max-height:calc(100vh - 32px);overflow:auto;padding:0 0 20px;position:relative;box-shadow:0 24px 60px rgba(20,20,20,.35)}.cdnews-card img{width:100%;height:120px;object-fit:cover;object-position:top;display:block;border-radius:22px 22px 0 0}.cdnews-in{padding:18px 22px 0}.cdnews-kick{color:#c65f4a;text-transform:uppercase;letter-spacing:.14em;font-size:.7rem;font-weight:900}.cdnews-card h2{margin:6px 0 4px;font-size:1.5rem;letter-spacing:-.03em;line-height:1.15}.cdnews-sub{color:#596d68;margin:0 0 12px;font-size:.95rem}.cdnews-x{position:sticky;top:10px;float:right;margin:10px 10px -46px 0;z-index:3;width:36px;height:36px;border-radius:50%;border:1px solid #d8d4c9;background:#fffdf8;color:#172d2b;font-size:1.3rem;line-height:1;cursor:pointer;z-index:2}.cdnews-story{border-top:1px solid #e3ded2;padding:10px 0}.cdnews-story button{all:unset;display:block;width:100%;cursor:pointer;font-weight:850;font-size:1rem;color:#172d2b}.cdnews-car{display:inline-block;margin-right:8px;color:#c65f4a;transition:transform .2s}.cdnews-story.open .cdnews-car{transform:rotate(180deg)}.cdnews-story p{display:none;color:#596d68;margin:6px 0 2px;font-size:.95rem}.cdnews-story.open p{display:block}.cdnews-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px}.cdnews-btn{display:inline-block;background:#c9ed72;color:#172d2b;border:1px solid #172d2b;border-radius:999px;padding:11px 18px;font-weight:850;cursor:pointer;text-decoration:none}.cdnews-btn.alt{background:transparent}";
function build(){
if(document.getElementById("cdnews")){ return true; }
var st=document.createElement("style"); st.textContent=css; document.head.appendChild(st);
var ov=document.createElement("div"); ov.className="cdnews-overlay"; ov.id="cdnews";
var rows=STORIES.map(function(s){ return "<div class=\"cdnews-story\"><button type=\"button\"><span class=\"cdnews-car\">&#9662;</span>"+s[0]+"</button><p>"+s[1]+"</p></div>"; }).join("");
var BDAY = Date.now() < new Date("2026-11-18T00:00:00+07:00").getTime();
if(BDAY){
ov.innerHTML="<div class=\"cdnews-card\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Happy Birthday, Dad\">"
+"<button class=\"cdnews-x\" type=\"button\" aria-label=\"Close\">&times;</button>"
+"<div class=\"cdnews-in\" style=\"padding-top:26px\"><div class=\"cdnews-kick\">The CashDublo Newsletter — a special one</div>"
+"<h2>&#127874; Happy Birthday, Dad.</h2>"
+"<p style=\"font-size:1.08rem;color:#172d2b\">Thanks for giving me my first computer at 13.</p>"
+"<p style=\"font-size:1.25rem;font-weight:900;letter-spacing:-.02em\">Look at me now.</p>"
+"<p class=\"cdnews-sub\">— Greg</p>"
+"<div class=\"cdnews-row\"><a class=\"cdnews-btn\" href=\"news.html\">Read the newsletter</a><button class=\"cdnews-btn alt\" type=\"button\" id=\"cdnews-close\">Close</button></div>"
+"</div></div>";
document.body.appendChild(ov);
ov.querySelector(".cdnews-x").addEventListener("click", close);
document.getElementById("cdnews-close").addEventListener("click", close);
ov.addEventListener("click", function(ev){ if(ev.target===ov){ close(); } });
return true;
}
ov.innerHTML="<div class=\"cdnews-card\" role=\"dialog\" aria-modal=\"true\" aria-label=\"The CashDublo Newsletter\">"
+"<button class=\"cdnews-x\" type=\"button\" aria-label=\"Close\">&times;</button>"
+"<img src=\""+PHOTO+"\" alt=\"PodEdPro app icon\" onerror=\"this.style.display='none'\">"
+"<div class=\"cdnews-in\"><div class=\"cdnews-kick\">The CashDublo Newsletter</div>"
+"<h2>What's going on, in plain words.</h2>"
+"<p class=\"cdnews-sub\">November 17, 2026 — the short version, for everybody. Tap a story to open it.</p>"
+rows
+"<div class=\"cdnews-row\"><a class=\"cdnews-btn\" href=\"news.html\">Read the newsletter</a><button class=\"cdnews-btn alt\" type=\"button\" id=\"cdnews-close\">Not now</button></div>"
+"</div></div>";
document.body.appendChild(ov);
function close(){ ov.remove(); try{ sessionStorage.setItem(KEY,"1"); }catch(e){} }
ov.querySelector(".cdnews-x").addEventListener("click", close);
document.getElementById("cdnews-close").addEventListener("click", close);
ov.addEventListener("click", function(ev){ if(ev.target===ov){ close(); } });
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
