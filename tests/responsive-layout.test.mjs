import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const css = readFileSync("assets/site-navigation.css", "utf8");
assert.match(css, /overflow-x:clip/);
assert.match(css, /width:100vw;max-width:100vw/);
assert.match(css, /@media\(max-width:700px\)/);
assert.match(css, /overscroll-behavior-inline/);

for (const page of ["index.html", "apps.html", "front-ends.html", "cashdublo-app-store.html"]) {
  const html = readFileSync(page, "utf8");
  assert.match(html, /assets\/site-navigation\.css/, page + " must load shared responsive CSS");
  assert.match(html, /viewport-fit=cover/, page + " must use the mobile viewport");
}

assert.equal(JSON.parse(readFileSync("vercel.json", "utf8")).trailingSlash, false);
assert.match(readFileSync("netlify.toml", "utf8"), /publish = "\."/);
assert.match(readFileSync("wrangler.toml", "utf8"), /pages_build_output_dir = "\."/);
assert.match(readFileSync("_headers", "utf8"), /X-Content-Type-Options: nosniff/);
assert.match(readFileSync("HOSTING.md", "utf8"), /GitHub Pages.*Cloudflare Pages.*Vercel.*Netlify/s);
console.log("PASS responsive site structure and four static hosting configurations");
