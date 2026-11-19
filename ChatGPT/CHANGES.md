# ChatGPT website edition changes

## 2026-11-20 — ChatGPT / AI-02 — Apps page navigation aligned with Home

**Request:** Make the Home, About, and Privacy navigation on `ChatGPT/apps.html` match the corresponding navigation on `ChatGPT/index.html`.

**Change:** Reuse the homepage header layout and navigation styling on the All Apps page. Keep the catalogue's existing page content and routes intact. Ensure Home opens `index.html`, About opens `index.html#about`, and Privacy opens `privacy.html`. Add the same three destinations to the catalogue footer for consistent navigation.

**Scope:** `ChatGPT/apps.html` only, plus this edition's change records. No root website files are changed. No merge, live deployment, or production release is performed by this change.

**Verification:** Source-level checks confirm all three links and the matching responsive navigation rules. A real browser/device visual check remains pending.

The SQL record was written first in `CHANGES.sql`.
