import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const css = readFileSync("assets/cashdublo-nav.css", "utf8");
assert.match(css, /--cd-header-height:72px/);
assert.match(css, /grid-template-columns:repeat\(4,minmax\(0,1fr\)\)/);
assert.match(css, /@media\(max-width:1024px\)/);
assert.match(css, /grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
assert.match(css, /@media\(max-width:700px\)/);
assert.match(css, /grid-template-columns:minmax\(0,1fr\)/);
assert.match(css, /prefers-reduced-motion:reduce/);
assert.match(css, /max-height:min\(72vh,680px\)/);

const navJs = readFileSync("assets/cashdublo-nav.js", "utf8");
for (const token of ['Escape', 'pointerdown', 'focusables', 'e.key==="Tab"', 'e.shiftKey', 'first.focus({preventScroll:true})', 'last.focus()', 'toggle.focus()', 'aria-hidden', 'inert']) {
  assert.ok(navJs.includes(token), "navigation interaction contract missing: " + token);
}

const navigationPages = ["index.html", "apps.html", "course.html", "code.html", "news.html", "android.html", "iphone.html", "mac.html", "windows.html", "linux.html", "front-ends.html", "terminal.html"];
for (const page of navigationPages) {
  const html = readFileSync(page, "utf8");
  assert.match(html, /href=["']\/assets\/cashdublo-nav\.css["']/, page + " must load canonical navigation CSS");
  assert.match(html, /src=["']\/assets\/cashdublo-nav\.js["']/, page + " must load canonical navigation JS");
  assert.match(html, /class=["']cd-site-header["'][^>]*data-cd-header/, page + " must use standard green header");
  assert.match(html, /<button[^>]*type=["']button["'][^>]*data-cd-toggle[^>]*aria-controls=["']cd-site-drawer["'][^>]*aria-expanded=["']false["'][^>]*aria-label=/, page + " must have a keyboard-operable, labelled toggle");
  assert.match(html, /id=["']cd-site-drawer["'][^>]*aria-hidden=["']true["'][^>]*hidden[^>]*inert/, page + " must have hidden inert drawer");
  assert.doesNotMatch(html, /href=["']\/assets\/site-navigation\.css["']/, page + " must not load legacy navigation CSS");
  assert.doesNotMatch(html, /<header><a class=["']brand["']/, page + " must not retain the legacy inline header");
  const drawer = html.match(/<nav id=["']cd-site-drawer["'][\s\S]*?<\/nav>/i)?.[0] || "";
  assert.ok(drawer, page + " must contain a static shared drawer");
  const hrefs = [...drawer.matchAll(/href=["']([^"']+)["']/g)].map(match => match[1]);
  assert.equal(new Set(hrefs).size, hrefs.length, page + " drawer must not contain duplicate destinations");
  for (const required of ["./index.html", "./apps.html", "./front-ends.html", "./memberships.html", "./website-design.html", "./cashdublo-app-store.html", "./products.html", "./games.html#story", "./course.html", "./code.html", "./news.html", "./rss.html", "./privacy.html", "./index.html#about"]) {
    assert.ok(hrefs.includes(required), page + " drawer missing preserved route " + required);
  }
}

for (const page of ["apps.html", "front-ends.html"]) {
  const html = readFileSync(page, "utf8");
  assert.match(html, /grid-template-columns:minmax\(0,99px\) minmax\(0,1fr\)/, page + " cards must place icon left and content right");
  assert.match(html, /width:99px;height:99px/, page + " icons must be enlarged by about 30 percent");
  assert.match(html, /grid-column:2/, page + " app name/status must sit in the right column");
}
assert.equal(JSON.parse(readFileSync("vercel.json", "utf8")).trailingSlash, false);
assert.match(readFileSync("netlify.toml", "utf8"), /publish = "\."/);
assert.match(readFileSync("wrangler.toml", "utf8"), /pages_build_output_dir = "\."/);
assert.match(readFileSync("_headers", "utf8"), /X-Content-Type-Options: nosniff/);
assert.match(readFileSync("HOSTING.md", "utf8"), /GitHub Pages.*Cloudflare Pages.*Vercel.*Netlify/s);
console.log("PASS: NAVIGATION-STANDARD v2 integration, preserved unique routes, responsive breakpoints, keyboard/pointer behavior, and four static hosting configurations.");
