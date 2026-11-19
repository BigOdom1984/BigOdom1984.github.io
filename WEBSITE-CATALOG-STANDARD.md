# Website and App Catalogue Standard

**Version:** 0.1.1 BETA  
**Status:** Founder-requested standard; implementation staged for review  
**Canonical owner:** BigOdom1984.github.io (repository root)  
**Applies to:** the root CashDublo website and the AI comparison websites in their named folders.

## Information that must remain consistent

Every website version must present the same underlying catalogue facts. Visual design may differ by AI: background, colors, typography, spacing, card orientation and decorative treatment may be original. Product facts may not differ between versions.

Each app record must carry:
- Stable app ID/slug and public app name
- App icon/image reference
- Current version and release state (Development, Beta, or Released)
- Confirmed supported platforms
- Planned platforms, explicitly marked as planned
- Unverified platforms, explicitly marked as not yet verified
- Front-end type (web, desktop application, mobile application, command-line interface, or other)
- Back-end type (hosted service/API, local service, peer-to-peer/direct connection, device-only, or none)
- Public app overview and catalogue destinations

Do not infer a platform from a store-search link, a menu item, a marketing statement, or an emulator. Confirm it from the app's source repository/build configuration or a verified release. Never promote a planned or unverified platform into the supported-platform list.

## Card order and presentation

1. App photo/icon
2. App name on the next line
3. One-line version and release-state label directly below the name
4. Description and verified platform/back-end information
5. Relevant public links

Version labels must remain on one line. Keep each app's own verified version. The 0.1.1 BETA value above versions this website/catalogue standard; it must not overwrite an individual app's release version.

## Responsive behavior

- Desktop: use available width efficiently; cards shrink to a sensible minimum and wrap complete cards onto the next row. Never clip the last card or require a horizontal card rail.
- Tablet: use the number of columns that fit without cramped text.
- Phone: one full-width card per row; no page-level horizontal scrollbar.
- Navigation: two levels on small screens. The first level shows the main categories; expandable groups reveal second-level destinations. No horizontal navigation scrollbar at the top.
- Preserve accessible keyboard behavior, visible focus, touch targets and reduced-motion support.

## Website version comparison

The root site is the canonical content source. Each AI folder is an independent presentation of the same information. A comparison site may change visual treatment and orientation, but must not silently change app names, versions, release states, supported platforms, planned platforms, or back-end facts. Each AI version keeps its own change log and does not edit the root production site.

## Production and emulator boundary

This standard and its changes are recorded in the root change log and suggestion register. Changes in this pull request are preview-only. Production server configuration and deployment remain General-only. The emulator is a separate restore-and-run copy of production for isolated testing; it is not an independently maintained catalogue or an additional production target.

## Acceptance checks

- Icon/photo precedes the app name.
- App name precedes the version line.
- Version/release line stays on one line.
- Desktop/tablet cards wrap complete cards rather than clip or scroll horizontally.
- Phone navigation has two levels and no horizontal scrollbar.
- Platform facts are evidence-backed and separate confirmed, planned and unverified targets.
- All AI comparison sites use the same factual catalogue contract while retaining their own visual identity.
