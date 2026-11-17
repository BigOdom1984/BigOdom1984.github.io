/* CashDublo shared UI behavior. Local-only; no network requests. */
(function () {
"use strict";
function byId(id){return document.getElementById(id);}
var welcome=byId("cd-welcome"), panel=byId("comments");
if(welcome || panel){
 function show(el){if(el)el.hidden=false;}
 function hide(el){if(el)el.hidden=true;}
 function openPanel(){hide(welcome);show(panel);var field=byId("cd-comment");if(field)field.focus();}
 var openers=document.querySelectorAll("[data-cd-open]");
 for(var i=0;i<openers.length;i++)openers[i].addEventListener("click",function(ev){ev.preventDefault();openPanel();});
 var closers=document.querySelectorAll("[data-cd-close]");
 for(var j=0;j<closers.length;j++)closers[j].addEventListener("click",function(){hide(byId(this.getAttribute("data-cd-close")));});
 [welcome,panel].forEach(function(ov){if(ov)ov.addEventListener("click",function(ev){if(ev.target===ov)hide(ov);});});
 document.addEventListener("keydown",function(ev){if(ev.key==="Escape"){hide(welcome);hide(panel);}});
 var seen=false;try{seen=!!localStorage.getItem("cdWelcomeSeen");}catch(e){}
 if(!seen && welcome){show(welcome);try{localStorage.setItem("cdWelcomeSeen","1");}catch(e){}}
 var form=byId("cd-form");
 if(form)form.addEventListener("submit",function(ev){
  ev.preventDefault();var name=(byId("cd-name").value||"").trim(),message=(byId("cd-comment").value||"").trim();
  if(!message)return;
  var body="Name: "+(name||"(not given)")+"\nPage: "+location.pathname+"\n\n"+message;
  window.location.href="mailto:CashDublo@gmail.com?subject="+encodeURIComponent("Website comment")+"&body="+encodeURIComponent(body);
  var sent=byId("cd-sent");if(sent)sent.hidden=false;
 });
}
var ageOverlay=byId("cd-age");
if(ageOverlay){
 var key="cdAgeGate",week=7*24*60*60*1000,saved=null;
 try{saved=JSON.parse(localStorage.getItem(key)||"null");}catch(e){}
 if(!(saved && Date.now()-saved.ts<week)){
  ageOverlay.hidden=false;
  function close(){ageOverlay.hidden=true;}
  function save(answer){
   var remember=byId("cd-age-remember");
   if(remember && remember.checked){try{localStorage.setItem(key,JSON.stringify({answer:answer,ts:Date.now()}));}catch(e){}}
   close();
  }
  var yes=byId("cd-age-yes"),no=byId("cd-age-no"),skip=byId("cd-age-skip");
  if(yes)yes.addEventListener("click",function(){save("adult");});
  if(no)no.addEventListener("click",function(){
   var note=byId("cd-age-note");
   if(note){note.hidden=false;note.textContent="All good — this site and the store will show you the family-safe shelf: the apps and games made for everyone. Come back any time.";}
   save("minor");
  });
  if(skip)skip.addEventListener("click",function(ev){ev.preventDefault();close();});
 }
}
})();
