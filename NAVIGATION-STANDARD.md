# CashDublo Shared Navigation Standard

**Version:** 2.0 · **Updated:** 2026-11-19  
**Canonical files:** `assets/cashdublo-nav.css`, `assets/cashdublo-nav.js`

## Visual contract
- Stationary CashDublo wordmark in a full-width green top bar.
- Header height: 72px (approximately 12–20% above the previous 64px standard).
- The CashDublo wordmark stays at the far left. Desktop quick links sit in one horizontal row to its right; the Menu control stays at the far right. The wordmark and quick links remain normal links.
- Drawer overlays content instead of pushing the page. It aligns 8px above the header bottom, slides down, and keeps the header/logo stationary.
- Menu items are at least 52px high; mobile items are at least 54px high.
- Drawer content adapts to four columns on desktop, two on tablet, one on phone.

## Interaction contract
- Visible Menu control at the far right; it opens the full drawer. Desktop quick links are independently clickable and never sit underneath the Menu hit target.
- Accessible name, `aria-controls`, `aria-expanded`, `aria-hidden`, and `inert` states.
- Keyboard activation, Escape close with focus return, Tab focus containment, outside-pointer close.
- Drawer links keep their normal navigation behavior and close the drawer. App-specific buttons can opt into close-on-action with `data-cd-close`.
- The drawer ID is read from the toggle button's `aria-controls`, so the same behavior supports existing app-specific drawer IDs.
- Reduced-motion preference removes the slide transition.
- Desktop: keep Apps, Websites, Tools, Games, Courses, Code, Newsletter and About in one horizontal row where space permits; hide that quick-link row at tablet/phone widths and retain the drawer.
- Catalog cards use a responsive grid: reduce card/icon footprint slightly, fit as many complete cards as the available width allows, then wrap remaining cards onto the next row. No clipped partial card or horizontal card rail.
- Category, platform and status chips remain single-line labels; chips may wrap as complete units when the card itself becomes narrow.
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
- Desktop: 1280px+; wordmark left, quick links horizontal, Menu right; catalog cards form as many complete columns as fit, with leftovers below. Drawer retains four columns, max-height and internal scroll.
- Keyboard: Tab, Shift+Tab, Enter/Space, Escape, focus return.
- Pointer: Menu control toggles, brand and quick links navigate, outside click closes, drawer link navigates.
- Reduced motion: no slide transition.
- Preserve each app's fonts, colors outside the green header, existing routes, controls and content.
