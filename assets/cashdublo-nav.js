(function(){
 "use strict";
 function init(root=document){
  const header=root.querySelector("[data-cd-header]"),toggle=header&&header.querySelector("[data-cd-toggle]"),drawerId=toggle?.getAttribute("aria-controls")||"cd-site-drawer",drawer=root.getElementById?root.getElementById(drawerId):document.getElementById(drawerId);
  if(!header||!toggle||!drawer||toggle.dataset.cdBound==="1")return;
  // Compact five-destination site bar; the Menu control remains in the header.
  if(!document.querySelector("[data-cd-quick-nav]")){
   const quick=document.createElement("nav");
   quick.className="cd-quick-nav";quick.dataset.cdQuickNav="1";
   quick.setAttribute("aria-label","Quick navigation");
   const links=[
    ["Home","./index.html"],
    ["All Apps","./apps.html"],
    ["Featured","./index.html#featured"],
    ["App Store","./cashdublo-app-store.html"],
    ["Products","./products.html"]
   ];
   links.forEach(([label,href])=>{const a=document.createElement("a");a.textContent=label;a.href=href;quick.append(a);});
   header.insertAdjacentElement("afterend",quick);
  }
  // RSS is available as a page if needed, but is intentionally omitted from the main menu.
  drawer.querySelectorAll('a[href="./rss.html"],a[href="rss.html"]').forEach(a=>a.remove());
  // Keep the main menu's key destinations in a predictable order.
  const menuInner=drawer.querySelector(".cd-drawer-inner");
  if(menuInner){
   const home=menuInner.querySelector(':scope > a[href="./index.html"]');
   const allApps=menuInner.querySelector(':scope > a[href="./apps.html"]');
   const featured=menuInner.querySelector(':scope > a[data-cd-featured-link]');
   if(home)menuInner.prepend(home);
   if(!featured){const a=document.createElement("a");a.href="./index.html#featured";a.textContent="Featured Apps";a.dataset.cdFeaturedLink="1";if(allApps)allApps.insertAdjacentElement("afterend",a);else if(home)home.insertAdjacentElement("afterend",a);}
  }
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
    const primary=document.querySelector("[data-cd-primary-nav]");
    primary?.classList.toggle("cd-arranging",value);
    const menuItems=[...inner.querySelectorAll(".cd-drawer-inner > a,.cd-drawer-inner > .cd-drawer-group,.cd-drawer-links > a"),...(primary?[...primary.querySelectorAll(":scope > a")]:[])];
    menuItems.forEach(item=>{
     let handle=item.querySelector(":scope > .cd-drag-handle,summary > .cd-drag-handle");
     if(!handle){handle=document.createElement("span");handle.className="cd-drag-handle";handle.textContent="⠿";handle.setAttribute("aria-hidden","true");if(item.matches("a"))item.prepend(handle);else item.querySelector(":scope > summary")?.append(handle);}
     handle.hidden=!value;handle.draggable=false;
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
   const primaryNav=document.querySelector("[data-cd-primary-nav]");if(primaryNav)wire(primaryNav,".cd-primary-nav > a");
   let activeMenuItem=null,activeMenuPointer=null;
   inner.addEventListener("pointerdown",e=>{
    if(!arranging||!e.target.closest(".cd-drag-handle"))return;
    const item=e.target.closest("a,.cd-drawer-group");if(!item||!inner.contains(item))return;
    e.preventDefault();activeMenuItem=item;activeMenuPointer=e.pointerId;item.classList.add("cd-dragging");
    try{e.target.setPointerCapture(e.pointerId);}catch(_){}
   },{passive:false});
   const primaryForPointer=document.querySelector("[data-cd-primary-nav]");
   primaryForPointer?.addEventListener("pointerdown",e=>{
    if(!arranging||!e.target.closest(".cd-drag-handle"))return;
    const item=e.target.closest("a");if(!item||item.parentElement!==primaryForPointer)return;
    e.preventDefault();activeMenuItem=item;activeMenuPointer=e.pointerId;item.classList.add("cd-dragging");
    try{e.target.setPointerCapture(e.pointerId);}catch(_){}
   },{passive:false});
   document.addEventListener("pointermove",e=>{
    if(!activeMenuItem||e.pointerId!==activeMenuPointer)return;
    const target=document.elementFromPoint(e.clientX,e.clientY)?.closest("a,.cd-drawer-group");
    if(!target||target===activeMenuItem||target.parentElement!==activeMenuItem.parentElement)return;
    const rect=target.getBoundingClientRect();const after=e.clientY-rect.top>rect.height/2;
    target.parentElement.insertBefore(activeMenuItem,after?target.nextSibling:target);
   });
   function finishMenuDrag(e){if(!activeMenuItem||e.pointerId!==activeMenuPointer)return;activeMenuItem.classList.remove("cd-dragging");activeMenuItem=null;activeMenuPointer=null;}
   document.addEventListener("pointerup",finishMenuDrag);document.addEventListener("pointercancel",finishMenuDrag);
   inner.addEventListener("keydown",e=>{
    if(!arranging||!e.altKey||!["ArrowUp","ArrowDown"].includes(e.key))return;
    const handle=e.target.closest(".cd-drag-handle"),item=handle?.closest("a,.cd-drawer-group");
    if(!item)return;const sibling=e.key==="ArrowUp"?item.previousElementSibling:item.nextElementSibling;
    if(!sibling)return;e.preventDefault();
    if(e.key==="ArrowUp")item.parentElement.insertBefore(item,sibling);else item.parentElement.insertBefore(sibling,item);
    handle.focus();
   });

   const cardSelector="article.card, article.game-card, .command-tool-card";
   let cardsArranging=false,activeCard=null,activePointer=null;
   function cardItems(){return [...document.querySelectorAll(cardSelector)].filter(card=>card.isConnected);}
   function cardHandle(card){
    let h=card.querySelector(":scope > .cd-card-drag-handle");
    if(!h){h=document.createElement("button");h.type="button";h.className="cd-card-drag-handle";h.textContent="⠿";h.setAttribute("aria-label","Drag to rearrange this card");h.title="Drag to rearrange";card.prepend(h);}
    h.hidden=!cardsArranging;return h;
   }
   function setCardsArrange(value){
    cardsArranging=value;
    cardItems().forEach(card=>{card.classList.toggle("cd-card-arranging",value);cardHandle(card);});
   }
   function cardAtPoint(x,y){
    const el=document.elementFromPoint(x,y);return el?.closest(cardSelector)||null;
   }
   function moveCard(target,x,y){
    if(!activeCard||!target||target===activeCard||target.parentElement!==activeCard.parentElement)return;
    const rect=target.getBoundingClientRect();
    const horizontal=target.parentElement.classList.contains("cd-app-rail")||getComputedStyle(target.parentElement).display==="flex";
    const after=horizontal?(x-rect.left)>rect.width/2:(y-rect.top)>rect.height/2;
    target.parentElement.insertBefore(activeCard,after?target.nextSibling:target);
   }
   document.addEventListener("pointerdown",e=>{
    if(!cardsArranging||!e.target.closest(".cd-card-drag-handle"))return;
    const card=e.target.closest(cardSelector);if(!card)return;
    e.preventDefault();activeCard=card;activePointer=e.pointerId;
    card.classList.add("cd-card-dragging");
    try{e.target.setPointerCapture(e.pointerId);}catch(_){}
   },{passive:false});
   document.addEventListener("pointermove",e=>{
    if(!activeCard||e.pointerId!==activePointer)return;
    const target=cardAtPoint(e.clientX,e.clientY);moveCard(target,e.clientX,e.clientY);
   });
   function finishCardDrag(e){
    if(!activeCard||e.pointerId!==activePointer)return;
    activeCard.classList.remove("cd-card-dragging");activeCard=null;activePointer=null;
   }
   document.addEventListener("pointerup",finishCardDrag);
   document.addEventListener("pointercancel",finishCardDrag);
   document.addEventListener("keydown",e=>{
    if(!cardsArranging||!e.altKey||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;
    const handle=e.target.closest(".cd-card-drag-handle"),card=handle?.closest(cardSelector);if(!card)return;
    const previous=["ArrowUp","ArrowLeft"].includes(e.key),sibling=previous?card.previousElementSibling:card.nextElementSibling;
    if(!sibling||!sibling.matches(cardSelector))return;e.preventDefault();
    if(previous)card.parentElement.insertBefore(card,sibling);else card.parentElement.insertBefore(sibling,card);
    handle.focus();
   });
   const cardObserver=new MutationObserver(()=>{if(cardsArranging)cardItems().forEach(card=>{card.classList.add("cd-card-arranging");cardHandle(card);});});
   cardObserver.observe(document.body,{childList:true,subtree:true});
   inner.addEventListener("click",e=>{if(e.target.closest(".cd-drag-handle")){e.preventDefault();e.stopPropagation();}});
   document.querySelector("[data-cd-primary-nav]")?.addEventListener("click",e=>{if(e.target.closest(".cd-drag-handle")){e.preventDefault();e.stopPropagation();}});
   arrange.addEventListener("click",()=>{
    const next=!arranging;setArrange(next);setCardsArrange(next);
   });
   setArrange(false);setCardsArrange(false);
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