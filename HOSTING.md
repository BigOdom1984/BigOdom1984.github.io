# CashDublo website hosting compatibility

This repository is a static HTML/CSS/JavaScript website. It has no required build step and does not depend on a hosting vendor's proprietary runtime for the public pages.

## Four supported static hosting targets

| Host | Build command | Publish/output directory | Configuration |
|---|---|---|---|
| GitHub Pages | None | Repository root | Built-in Pages support |
| Cloudflare Pages | None | `.` | `wrangler.toml`, `_headers`, `_redirects` |
| Vercel | None | Repository root | `vercel.json` |
| Netlify | None | Repository root | `netlify.toml`, `_headers`, `_redirects` |

The website is intended to be deployed at the domain root. Its navigation and asset URLs use root-relative paths such as `/assets/...`; a subdirectory deployment needs a custom-domain/root-path setup or a separate base-path adaptation.

## Deployment rule

Deploy the same Git commit to each host. Do not maintain four divergent website copies. Keep the custom domain pointed at one selected primary host; the other deployments can be kept as ready backups. DNS switching is a separate operation and is not performed by these files.

## Important boundary: static website vs production API

This repository makes the public website portable across the four static hosts. It does **not** by itself port the separate `BigOdom1984/cashdublo-server` API runtime.

The current production API uses Vercel Node.js functions and Node built-ins in several routes. A Cloudflare Pages deployment of this static website does not automatically move the API. Full API parity on Cloudflare Workers, Netlify Functions, or a generic Node host requires their own tested runtime adapters. Do not point a production app at a host until its API adapter and regression suite pass.

## Verification checklist

1. Confirm the root page, `/apps.html`, `/front-ends.html`, `/privacy.html`, and `/404.html` load.
2. Check navigation menus and internal links at 320px, 360px, 390px, 768px, 1024px and desktop widths.
3. Check no horizontal page overflow; section backgrounds should reach both viewport edges.
4. Check images, forms, tables and embedded media stay within the viewport.
5. Confirm the chosen host serves `/assets/site-navigation.css` and `/assets/site-navigation.js`.
6. Verify the production API separately; static-site success is not proof of API compatibility.

No hosting account, domain, DNS record, deployment, or billing setting is changed by committing these files.
