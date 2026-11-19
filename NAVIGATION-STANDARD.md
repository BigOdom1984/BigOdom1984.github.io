# CashDublo Shared Navigation Standard

**Version:** 2.0 · **Updated:** 2026-11-19  
**Canonical files:** `assets/cashdublo-nav.css`, `assets/cashdublo-nav.js`

## Visual contract
- Stationary CashDublo wordmark in a full-width green top bar.
- Header height: 72px (approximately 12–20% above the previous 64px standard).
- The entire green bar, including the CashDublo wordmark, is the menu-toggle surface. Tapping/clicking the wordmark toggles the drawer instead of navigating away; Home remains available as a drawer destination.
- Drawer overlays content instead of pushing the page. It aligns 8px above the header bottom, slides down, and keeps the header/logo stationary.
- Menu items are at least 52px high; mobile items are at least 54px high.
- Drawer content adapts to four columns on desktop, two on tablet, one on phone.

## Interaction contract
- Full-width button hit area; visible Menu label.
- Accessible name, `aria-controls`, `aria-expanded`, `aria-hidden`, and `inert` states.
- Keyboard activation, Escape close with focus return, Tab focus containment, outside-pointer close.
- Drawer links keep their normal navigation behavior and close the drawer. App-specific buttons can opt into close-on-action with `data-cd-close`.
- The drawer ID is read from the toggle button's `aria-controls`, so the same behavior supports existing app-specific drawer IDs.
- Reduced-motion preference removes the slide transition.
- No layout jump, horizontal overflow or header/logo animation.

## Integration markup
Each site provides its own brand home link and its own menu links, while reusing the same CSS/JS mechanics:

```html
<header class="cd-site-header" data-cd-header>
  <button class="cd-header-hit" type="button" data-cd-toggle
    aria-controls="cd-site-drawer" aria-expanded="false"
    aria-label="Open navigation. Tap anywhere on the green header to open or close the menu.">
    <span>Menu <b aria-hidden="true">☰</b></span>
  </button>
  <a class="cd-site-brand" href="./index.html">CASH<span>DUBLO</span></a>
</header>
<nav id="cd-site-drawer" class="cd-site-drawer" aria-label="Site navigation"
  aria-hidden="true" hidden inert>
  <div class="cd-drawer-inner"><a href="./index.html">Home</a></div>
</nav>
<link rel="stylesheet" href="shared/cashdublo-nav.css">
<script src="shared/cashdublo-nav.js" defer></script>
```

## Verification checklist
- Phone: 360–430px; drawer fits width, one column, no horizontal scroll.
- Tablet: 768–1024px; two columns, readable tap targets.
- Desktop: 1280px+; four columns, drawer max-height and internal scroll.
- Keyboard: Tab, Shift+Tab, Enter/Space, Escape, focus return.
- Pointer/touch: every point on the green bar toggles the drawer, including the CashDublo wordmark; outside click closes, drawer links navigate. Keyboard activation on the wordmark also toggles the drawer.
- Reduced motion: no slide transition.
- Preserve each app's fonts, colors outside the green header, existing routes, controls and content.

## Primary site navigation
Every public website page that loads `/assets/site-navigation.js` also displays the same persistent primary links directly below the shared header, in this exact order:
1. About — `/index.html#about`
2. Featured apps — `/index.html#featured`
3. All apps — `/apps.html`
4. RSS Receiver — `/ChatGPT/rss-receiver.html`
5. Privacy — `/privacy.html`

The primary row remains horizontally scrollable on narrow screens, uses the shared site palette, and marks the current destination where applicable. Keep this row consistent across pages; page-specific links belong in the expanded secondary menu, not ahead of these five destinations.
