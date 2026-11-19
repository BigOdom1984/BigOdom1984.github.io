# Suggestions

Have an idea that would make this app better? This is the place for it.

## How to suggest

Write it in plain words:

- **What** — the change or new thing you want, in one or two lines.
- **Why** — what it helps with, or what problem it fixes.
- **Where** — which screen or part of the app it belongs to, if you know.

Short is fine. One idea per suggestion is best — a list of separate
ideas is read as separate suggestions, not one big one.

## What happens next

Suggestions are read and weighed. The best ones get built in a later
round; the rest stay on file — an idea that does not fit today may fit
later, and nothing filed here is thrown away.

A suggestion is a pitch, not an order. Nothing here promises a date,
and an idea is only in the app when a released version says it is.

## Who reads this

CashDublo reads every suggestion. To reach us directly:
CashDublo@gmail.com · BigOdom1984 on GitHub · @cashdublo on Instagram.


## SUG-2026-11-19-001 — Complete the web front-end catalogue

- **Author:** ChatGPT / AI-02, from the 2026-11-19 website/front-end consistency audit.
- **Status:** SUGGESTED / NOT APPROVED / NOT IMPLEMENTED.
- **What:** Add clear, factual catalogue entries for the six existing browser-based products not currently represented in the Web Front Ends section: Cash Portfolio Web, AI Cash Portfolio Web, Hit Record Web, Name That Flag Web, The Hack Web, and Kali Linux Training Course Web. Update the shared Front Ends navigation to match.
- **Why:** The current front-end page and shared navigation list five web front ends, while six additional web-app repositories describe browser-based product interfaces. The website module requires the front-end catalogue and navigation to remain aligned with verified products.
- **Where:** front-ends.html, assets/site-navigation.js, and public explanatory pages only if their content can be stated accurately from approved product information.
- **Guardrails:** Mark each item as development/planned unless a first build and live URL are verified. Do not invent features, versions, platform support, pricing, security claims, or availability. Do not expose repository URLs, source code, internal implementation details, or private repo names. Do not add download/purchase actions until verified destinations and approvals exist.
- **Evidence:** website-module README v1.1.0; repository README records for the six web products; 2026-11-19 source audit of front-ends.html and assets/site-navigation.js.
- **Next step:** MUSE review, then Founder decision. No website code change is authorized by this suggestion alone.


## SUG-2026-11-19-002 — Uniform catalogue facts and responsive presentation

- **Author:** Founder request, recorded by ChatGPT / AI-02.
- **Status:** APPROVED BY FOUNDER / IN PROGRESS (preview branch).
- **What:** Standardize app cards to image → app name → one-line version/release label; correct platform and front-end/back-end facts across the root site and AI comparison websites; use two-level phone navigation and remove the top horizontal scrollbar.
- **Why:** The comparison sites need identical product information so the Founder can compare visual treatments without comparing conflicting facts. Current platform labels include planned iOS targets presented as supported.
- **Where:** Root catalogue pages, shared navigation/catalogue CSS, and the AI website folders.
- **Guardrails:** Preserve each AI's visual identity. Do not overwrite app-specific versions with the website-standard version 0.1.1 BETA. Confirm platform support from source/build evidence; label planned and unverified targets honestly. No emulator-specific website or catalogue is required. No production deployment from this change.
- **Implementation:** Preview branch chatgpt/catalog-platform-layout-20261119; see WEBSITE-CATALOG-STANDARD.md.
