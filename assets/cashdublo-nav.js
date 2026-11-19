(function(){
 "use strict";
 function init(root=document){
  const header=root.querySelector("[data-cd-header]"),toggle=header&&header.querySelector("[data-cd-toggle]"),drawerId=toggle?.getAttribute("aria-controls")||"cd-site-drawer",drawer=root.getElementById?root.getElementById(drawerId):document.getElementById(drawerId);
  if(!header||!toggle||!drawer||toggle.dataset.cdBound==="1")return;
  toggle.dataset.cdBound="1";
  const brand=header.querySelector(".cd-site-brand");
  if(brand&&!header.querySelector(".cd-desktop-nav")){
   const desktopNav=document.createElement("nav");
   desktopNav.className="cd-desktop-nav";
   desktopNav.setAttribute("aria-label","Quick links");
   const links=[
    ["Apps","/apps.html"],
    ["Websites","/front-ends.html"],
    ["Tools","/terminal.html"],
    ["Games","/games.html"],
    ["Courses","/course.html"],
    ["Code","/code.html"],
    ["Newsletter","/news.html"],
    ["About","/index.html#about"]
   ];
   links.forEach(([label,href])=>{const a=document.createElement("a");a.href=href;a.textContent=label;desktopNav.append(a);});
   brand.insertAdjacentElement("afterend",desktopNav);
  }
  let closeTimer=0;
  const focusables=()=>[...drawer.querySelectorAll('a[href],summary,button:not(:disabled),[tabindex]:not([tabindex="-1"])')].filter(x=>!x.hasAttribute("disabled"));
  function open(){clearTimeout(closeTimer);drawer.hidden=false;drawer.inert=false;drawer.setAttribute("aria-hidden","false");toggle.setAttribute("aria-expanded","true");toggle.setAttribute("aria-label","Close navigation menu");requestAnimationFrame(()=>drawer.dataset.open="true");}
  function close(returnFocus=false){drawer.dataset.open="false";drawer.setAttribute("aria-hidden","true");drawer.inert=true;toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation. Tap anywhere on the green header to open or close the menu.");clearTimeout(closeTimer);closeTimer=setTimeout(()=>{drawer.hidden=true;if(returnFocus)toggle.focus();},220);}
  toggle.addEventListener("click",()=>toggle.getAttribute("aria-expanded")==="true"?close():open());
  drawer.addEventListener("click",e=>{if(e.target.closest('a[href],[data-cd-close]'))close(false);});
  document.addEventListener("pointerdown",e=>{if(toggle.getAttribute("aria-expanded")==="true"&&!header.contains(e.target)&&!drawer.contains(e.target))close(false);});
  document.addEventListener("keydown",e=>{
   if(e.key==="Escape"&&toggle.getAttribute("aria-expanded")==="true"){e.preventDefault();close(true);return;}
   if(e.key==="Tab"&&toggle.getAttribute("aria-expanded")==="true"){const items=focusables();if(!items.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
  });
 }
 window.CashDubloNav={init};
 if(typeof document!=="undefined"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>init(),{once:true});else init();}
})();