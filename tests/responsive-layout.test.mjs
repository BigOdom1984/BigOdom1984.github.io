import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const css = readFileSync("assets/site-navigation.css", "utf8");
const sharedNav = readFileSync("assets/cashdublo-nav.css", "utf8");
assert.match(css, /overflow-x:clip/);
assert.match(css, /width:100vw;max-width:100vw/);
assert.match(css, /@media\\(max-width:700px\\)/);
assert.match(css, /overscroll-behavior-inline/);
assert.match(sharedNav, /\\.cd-app-rail\\{[\\s\\S]*?display:grid/);
assert.match(sharedNav, /grid-template-columns:repeat\\(auto-fit,minmax\\(min\\(100%,260px\\),1fr\\)\\)/);
assert.match(sharedNav, /\\.cd-card-category,\\.cd-card-platforms[\\s\\S]*?white-space:nowrap/);

for (const page of ["index.html", "apps.html", "front-ends.html", "cashdublo-app-store.html"]) {
  const html = readFileSync(page, "utf8");
  assert.match(html, /assets\\/site-navigation\\.css/, page + " must load shared responsive CSS");
  assert.match(html, /viewport-fit=cover/, page + " must use the mobile viewport");
}

for (const page of ["apps.html", "front-ends.html"]) {
  const html = readFileSync(page, "utf8");
  assert.match(html, /grid-template-columns:minmax\\(0,99px\\) minmax\\(0,1fr\\)/, page + " cards must place icon left and content right");
  assert.match(html, /width:99px;height:99px/, page + " icons must be enlarged by about 30 percent");
  assert.match(html, /grid-column:2/, page + " app name/status must sit in the right column");
}
assert.equal(JSON.parse(readFileSync("vercel.json", "utf8")).trailingSlash, false);
assert.match(readFileSync("netlify.toml", "utf8"), /publish = "\\."/);
assert.match(readFileSync("wrangler.toml", "utf8"), /pages_build_output_dir = "\\."/);
assert.match(readFileSync("_headers", "utf8"), /X-Content-Type-Options: nosniff/);
assert.match(readFileSync("HOSTING.md", "utf8"), /GitHub Pages.*Cloudflare Pages.*Vercel.*Netlify/s);
console.log("PASS responsive site structure, wrapping catalog cards and four static hosting configurations");
