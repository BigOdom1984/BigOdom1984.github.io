const assert=require("node:assert/strict");
const fs=require("node:fs");
const js=fs.readFileSync("assets/cashdublo-nav.js","utf8");
const css=fs.readFileSync("assets/cashdublo-nav.css","utf8");
for(const token of ["data-cd-header","data-cd-toggle","aria-expanded","aria-hidden","Escape","pointerdown","focusables","requestAnimationFrame"])assert.ok(js.includes(token),"missing JS contract: "+token);
for(const token of ["--cd-header-height:72px","position:fixed","max-height","@media(max-width:1024px)","@media(max-width:700px)","prefers-reduced-motion","min-height:54px"])assert.ok(css.includes(token),"missing CSS contract: "+token);
console.log("PASS: shared navigation accessibility, interaction and responsive CSS contract.");
