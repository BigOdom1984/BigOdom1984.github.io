const assert=require("node:assert/strict");
const fs=require("node:fs");
const css=fs.readFileSync("assets/catalog-layout.css","utf8");
const standard=fs.readFileSync("WEBSITE-CATALOG-STANDARD.md","utf8");
for(const token of [".icon-link","order:0","order:1","order:2","white-space:nowrap","repeat(auto-fit,minmax(min(100%,250px),1fr))","overflow-x:clip"])assert.ok(css.includes(token),"missing catalogue layout contract: "+token);
assert.ok(standard.includes("0.1.1 BETA"));
assert.ok(standard.includes("planned platforms"));
assert.ok(standard.includes("Visual design may differ by AI"));
for(const path of ["index.html","apps.html","front-ends.html","ChatGPT/index.html","ChatGPT/apps.html","Claude/index.html","Cohere/index.html","Copilot/index.html","Gemini/index.html","Groq/index.html","Jina/index.html","Mistral/index.html","Muse/index.html","Muse/apps.html","NVIDIA/index.html","Onyx/index.html","OpenAI/index.html","OpenRouter/index.html","SambaNova/index.html","Workers-AI/index.html","muse/index.html"]){
 const html=fs.readFileSync(path,"utf8");
 assert.ok(html.includes("catalog-layout.css"),path+" must load shared catalogue layout");
}
const nav=fs.readFileSync("assets/cashdublo-nav.css","utf8");
assert.ok(nav.includes("grid-template-columns:repeat(2,minmax(0,1fr))"),"phone navigation must have two primary columns");
assert.ok(nav.includes(".cd-drawer-group{grid-column:span 2}"),"expandable groups must occupy the second navigation layer");
console.log("PASS shared catalogue order, AI-site links, and two-level phone navigation contract");
