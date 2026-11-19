(function(){
 "use strict";
 function init(root=document){
  const header=root.querySelector("[data-cd-header]"),toggle=header&&header.querySelector("[data-cd-toggle]"),drawerId=toggle?.getAttribute("aria-controls")||"cd-site-drawer",drawer=root.getElementById?root.getElementById(drawerId):document.getElementById(drawerId);
  if(!header||!toggle||!drawer||toggle.dataset.cdBound==="1")return;
  toggle.dataset.cdBound="1";
  let closeTimer=0;
  const focusables=()=>[...drawer.querySelectorAll('a[href],summary,button:not(:disabled),[tabindex]:not([tabindex="-1"])')].filter(x=>!x.hasAttribute("disabled")&&x.getClientRects().length>0);
  function open(){clearTimeout(closeTimer);drawer.hidden=false;drawer.inert=false;drawer.setAttribute("aria-hidden","false");toggle.setAttribute("aria-expanded","true");toggle.setAttribute("aria-label","Close navigation menu");requestAnimationFrame(()=>{drawer.dataset.open="true";const first=focusables()[0];if(first)first.focus({preventScroll:true});});}
  function close(returnFocus=false){drawer.dataset.open="false";drawer.setAttribute("aria-hidden","true");drawer.inert=true;toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation. Tap anywhere on the green header to open or close the menu.");clearTimeout(closeTimer);if(returnFocus)toggle.focus();const delay=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:220;closeTimer=setTimeout(()=>{drawer.hidden=true;},delay);}

  const inner=drawer.querySelector(".cd-drawer-inner");
  if(inner&&!inner.querySelector("[data-cd-arrange-toggle]")){
   const toolsBar=document.createElement("div");
   toolsBar.className="cd-drawer-tools";
   const arrange=document.createElement("button");
   arrange.type="button";arrange.className="cd-arrange-toggle";
   arrange.dataset.cdArrangeToggle="1";arrange.textContent="⚙ Settings · Arrange menu";
   arrange.setAttribute("aria-pressed","false");toolsBar.append(arrange);inner.prepend(toolsBar);
   let arranging=false,dragged=null;
   function setArrange(value){
    arranging=value;arrange.setAttribute("aria-pressed",String(value));
    arrange.textContent=value?"✓ Done arranging":"⚙ Settings · Arrange menu";
    inner.classList.toggle("cd-arranging",value);
    inner.querySelectorAll(".cd-drawer-inner > a,.cd-drawer-inner > .cd-drawer-group,.cd-drawer-links > a").forEach(item=>{
     let handle=item.querySelector(":scope > .cd-drag-handle,summary > .cd-drag-handle");
     if(!handle){handle=document.createElement("span");handle.className="cd-drag-handle";handle.textContent="⠿";handle.setAttribute("aria-hidden","true");if(item.matches("a"))item.prepend(handle);else item.querySelector(":scope > summary")?.append(handle);}
     handle.hidden=!value;handle.draggable=value;
    });
   }
   function wire(container,selector){
    container.addEventListener("dragstart",e=>{
     if(!arranging)return;const handle=e.target.closest(".cd-drag-handle"),item=handle?.closest(selector);
     if(!item||item.parentElement!==container){e.preventDefault();return;}
     dragged=item;item.classList.add("cd-dragging");e.dataTransfer.effectAllowed="move";
     e.dataTransfer.setData("text/plain","menu-item");
    });
    container.addEventListener("dragover",e=>{
     if(!arranging||!dragged)return;const target=e.target.closest(selector);
     if(!target||target===dragged||target.parentElement!==container)return;
     e.preventDefault();const r=target.getBoundingClientRect();
     container.insertBefore(dragged,(e.clientY-r.top)>r.height/2?target.nextSibling:target);
    });
    container.addEventListener("drop",e=>{if(arranging&&dragged)e.preventDefault();});
    container.addEventListener("dragend",()=>{dragged?.classList.remove("cd-dragging");dragged=null;});
   }
   wire(inner,".cd-drawer-inner > a, .cd-drawer-inner > .cd-drawer-group");
   inner.querySelectorAll(".cd-drawer-links").forEach(list=>wire(list,".cd-drawer-links > a"));
   inner.addEventListener("keydown",e=>{
    if(!arranging||!e.altKey||!["ArrowUp","ArrowDown"].includes(e.key))return;
    const handle=e.target.closest(".cd-drag-handle"),item=handle?.closest("a,.cd-drawer-group");
    if(!item)return;const sibling=e.key==="ArrowUp"?item.previousElementSibling:item.nextElementSibling;
    if(!sibling)return;e.preventDefault();
    if(e.key==="ArrowUp")item.parentElement.insertBefore(item,sibling);else item.parentElement.insertBefore(sibling,item);
    handle.focus();
   });
   arrange.addEventListener("click",()=>setArrange(!arranging));setArrange(false);
  }

  toggle.addEventListener("click",()=>toggle.getAttribute("aria-expanded")==="true"?close():open());
  const brand=header.querySelector(".cd-site-brand");
  if(brand)brand.addEventListener("click",e=>{e.preventDefault();toggle.click();});
  drawer.addEventListener("click",e=>{if(e.target.closest("[data-cd-arrange-toggle]"))return;if(e.target.closest('a[href],[data-cd-close]'))close(false);});
  document.addEventListener("pointerdown",e=>{if(toggle.getAttribute("aria-expanded")==="true"&&!header.contains(e.target)&&!drawer.contains(e.target))close(false);});
  document.addEventListener("keydown",e=>{
   if(e.key==="Escape"&&toggle.getAttribute("aria-expanded")==="true"){e.preventDefault();close(true);return;}
   if(e.key==="Tab"&&toggle.getAttribute("aria-expanded")==="true"){const items=focusables();if(!items.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
  });
 }
 window.CashDubloNav={init};
 if(typeof document!=="undefined"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>init(),{once:true});else init();}
})();