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
