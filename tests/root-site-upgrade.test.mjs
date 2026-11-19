import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";

const read = (path) => readFileSync(path, "utf8");
const home = read("index.html");
const news = read("news.html");
const apps = read("apps.html");
const site = read("site.js");
const nav = read("assets/site-navigation.js");
const navRuntime = read("assets/cashdublo-nav.js");
const navCss = read("assets/cashdublo-nav.css");

// Root pages must retain the shared navigation loader and mobile viewport support.
for (const [path, html] of [["index.html", home], ["news.html", news], ["apps.html", apps], ["front-ends.html", read("front-ends.html")]]) {
  assert.match(html, /name="viewport"[^>]*width=device-width/i, path + " must declare a responsive viewport");
  assert.ok(html.includes("/assets/site-navigation.js"), path + " must load shared site navigation");
}

// Newsletter: full-screen, explicit-X-only dismissal, with honest autoplay fallback.
assert.ok(site.includes("height:100dvh"), "newsletter overlay must fill dynamic viewport height");
assert.ok(site.includes('aria-label=\\"Close\\"'), "newsletter must expose a labelled close control");
assert.ok(site.includes('ov.querySelector(".cdnews-x").addEventListener("click", close)'), "newsletter close control must work");
assert.ok(!site.includes('ov.addEventListener("click"'), "outside click must not dismiss newsletter");
assert.ok(!site.includes('id=\\\"cdnews-close\\\"'), "secondary dismiss control must not return");
assert.ok(site.includes("cdAutoSound") && site.includes('addEventListener("pointerdown",tryPlay'), "audio must retry after an allowed user gesture");
assert.ok(home.includes("bday-strip") && news.includes("bday-strip"), "birthday banner must appear on home and newsletter pages");
assert.ok(home.includes("flex-wrap:wrap") && news.includes("flex-wrap:wrap"), "birthday banner must wrap responsively");

// All Apps: independent sort and platform filters, accessible status, and a real controller.
assert.ok(apps.includes('id="catalog-sort"'), "sort selector missing");
assert.ok(apps.includes('id="catalog-platform"'), "platform selector missing");
assert.ok(apps.includes('id="catalog-status"') && apps.includes('aria-live="polite"'), "live catalogue status missing");
for (const value of ["created-asc", "created-desc", "name-asc", "name-desc", "ANDROID", "IOS", "MAC", "WIN", "LIN", "WEB"]) {
  assert.ok(apps.includes('value="' + value + '"'), "missing catalogue option " + value);
}
const inlineScripts = [...apps.matchAll(/<script>([\\s\\S]*?)<\\/script>/g)];
assert.ok(inlineScripts.length > 0, "inline catalogue controller missing");
for (const match of inlineScripts) new vm.Script(match[1]);

// Navigation: All Apps is a direct link, not a nested dropdown; shared drawer and quick links remain.
assert.ok(nav.includes("A('All Apps','/apps.html')"), "All Apps direct navigation link missing");
assert.ok(!nav.includes("menu('All Apps'"), "obsolete All Apps dropdown remains");
for (const path of ["/apps.html", "/front-ends.html", "/terminal.html", "/games.html", "/course.html", "/code.html", "/news.html"]) {
  assert.ok(existsSync("." + path), "desktop quick-link target missing: " + path);
}
assert.ok(navRuntime.includes("cd-desktop-nav"), "desktop quick-link navigation missing");
assert.ok(navCss.includes("grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))"), "catalog cards must wrap into a responsive grid");
assert.ok(navCss.includes("prefers-reduced-motion"), "shared navigation must respect reduced motion");

console.log("PASS: root landing page, newsletter behavior, All Apps controls, navigation targets and responsive catalog contract.");
