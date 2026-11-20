# ChatGPT website edition changes

## 2026-11-20 — ChatGPT / AI-02 — Apps page navigation aligned with Home

**Request:** Make the Home, About, and Privacy navigation on `ChatGPT/apps.html` match the corresponding navigation on `ChatGPT/index.html`.

**Change:** Reuse the homepage header layout and navigation styling on the All Apps page. Keep the catalogue's existing page content and routes intact. Ensure Home opens `index.html`, About opens `index.html#about`, and Privacy opens `privacy.html`. Add the same three destinations to the catalogue footer for consistent navigation.

**Scope:** `ChatGPT/apps.html` only, plus this edition's change records. No root website files are changed. No merge, live deployment, or production release is performed by this change.

**Verification:** Source-level checks confirm all three links and the matching responsive navigation rules. A real browser/device visual check remains pending.

The SQL record was written first in `CHANGES.sql`.

## 2026-11-20 — Onyx / AI-01, on the President's order — Homepage rebuilt in the webserver's layout

**Request:** Make ChatGPT/index.html wear the layout from the webserver — the production server's page layout — covering the front ends, the back ends, and the online app store being built.

**Change:** Rebuilt the homepage in the webserver's black-and-gold card stack: the CashDublo logo header, gold section titles, and full-width cards. Sections: The webserver (CashDublo Server), Front ends (the main website, the showcase, the web apps), Back ends (the production server, the offline server), The online app store (the shelf, the store back end, the store app), and How it fits together. Every piece is labelled with its true state — live, built, or still being built. The folder's own pages (apps.html, rss-receiver.html, privacy.html) stay linked in the page nav. Website edition version 0.2.0.

**Scope:** `ChatGPT/index.html`, `ChatGPT/version.json`, and this edition's change records. No root website files are changed.

**Verification:** The pushed files were read back from the repository after landing. A real browser visual check remains pending.

The SQL record was written first in `CHANGES.sql`.
