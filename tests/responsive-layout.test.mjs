import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const css = readFileSync("assets/site-navigation.css", "utf8");
const sharedNav = readFileSync("assets/cashdublo-nav.css", "utf8");
assert.ok(css.includes("overflow-x:clip"));
assert.ok(css.includes("width:100vw;max-width:100vw"));
assert.ok(css.includes("@media(max-width:700px)"));
assert.ok(css.includes("overscroll-behavior-inline"));
assert.ok(sharedNav.includes(".cd-app-rail{"));
assert.ok(sharedNav.includes("grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))"));
assert.ok(sharedNav.includes(".cd-card-category,.cd-card-platforms{"));
assert.ok(sharedNav.includes("white-space:nowrap"));

for (const page of ["index.html", "apps.html", "front-ends.html", "cashdublo-app-store.html"]) {
  const html = readFileSync(page, "utf8");
  assert.ok(html.includes("assets/site-navigation.css"), page + " must load shared responsive CSS");
  assert.ok(html.includes("viewport-fit=cover"), page + " must use the mobile viewport");
}

for (const page of ["apps.html", "front-ends.html"]) {
  const html = readFileSync(page, "utf8");
  assert.ok(html.includes("grid-template-columns:minmax(0,99px) minmax(0,1fr)"), page + " cards must place icon left and content right");
  assert.ok(html.includes("width:99px;height:99px"), page + " icons must be enlarged by about 30 percent");
  assert.ok(html.includes("grid-column:2"), page + " app name/status must sit in the right column");
}
assert.equal(JSON.parse(readFileSync("vercel.json", "utf8")).trailingSlash, false);
assert.ok(readFileSync("netlify.toml", "utf8").includes('publish = "."'));
assert.ok(readFileSync("wrangler.toml", "utf8").includes('pages_build_output_dir = "."'));
assert.ok(readFileSync("_headers", "utf8").includes("X-Content-Type-Options: nosniff"));
const hosting = readFileSync("HOSTING.md", "utf8");
assert.ok(["GitHub Pages", "Cloudflare Pages", "Vercel", "Netlify"].every(name => hosting.includes(name)));
console.log("PASS responsive site structure, wrapping catalog cards and four static hosting configurations");
