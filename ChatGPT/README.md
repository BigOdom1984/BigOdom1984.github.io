# ChatGPT Website Edition

This folder contains ChatGPT's independent candidate design for the CashDublo public website.

## Website release version

The website release version is tracked in [version.json](version.json). It is separate from the ChatGPT agent's own release version, the provider's model identifier/version, and the official CashDublo root website's version or release state.

- **Website version:** 0.1.4
- **Release state:** CANDIDATE
- **Last updated:** 2026-11-20

## Files

- `index.html` — home page.
- `version.json` — machine-readable website version and verification state.
- `CHANGELOG.md` — append-only changes for this website edition.

## Editing rules

1. ChatGPT owns this folder's implementation and may edit only this named website folder unless separately authorized.
2. Preserve the official root website and every other AI's website.
3. Inspect the current manifest before changing the website version.
4. Use semantic versioning for this website independently: PATCH for fixes/documentation; MINOR for backward-compatible capabilities or material page additions; MAJOR for breaking site changes.
5. Update the manifest, changelog, and visible footer version together.
6. Do not mark visual, runtime, link, or accessibility checks as passing unless they were actually performed.
7. Keep all claims about app availability aligned with verified app release evidence.

## Verification baseline

Source review only was performed for version 0.1.4; app catalogue versions were read from each corresponding repository package.json where available. Browser runtime testing and visual checks at mobile, tablet, and desktop widths remain **NOT RUN**.
