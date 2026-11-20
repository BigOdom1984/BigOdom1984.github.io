# Changes — the default website (root)

## 2026-11-19 — ChatGPT / AI-02 — Navigation standard v2 repair

**Before:** The home page had a separate inline header with hover-only dropdowns and no shared drawer. The other listed root pages loaded legacy navigation assets, and the Front Ends menu repeated Galaxy Repeat, Best Mac File Manager, Patent It!, Crash Catcher, and PodEdPro.

**After:** The home, All Apps, Courses, Source Code, Newsletter, Front Ends, Android, iPhone, Mac, Windows, Linux, and Command Tools pages now use the canonical assets/cashdublo-nav.css and assets/cashdublo-nav.js from NAVIGATION-STANDARD.md v2.0: a stationary green 72px header and slide-down drawer. Existing page content and routes outside the header were left in place. The shared drawer preserves the site's navigation destinations and lists each destination once. The shared site enhancer now leaves standard header markup intact instead of replacing it.

Keyboard opening moves focus into the drawer; Tab and Shift+Tab cycle through visible drawer controls; Escape closes and returns focus to the toggle; outside pointer interaction closes the drawer; and reduced-motion preference removes the slide and close delay. Responsive CSS retains four columns on desktop (1280px+), two on tablet (768–1024px), and one on phone (360–430px), with a bounded, scrollable drawer.

Regression tests and CI now check canonical integration across all 12 pages, unique drawer destinations, the responsive breakpoints, keyboard/pointer behavior hooks, reduced motion, and the existing hosting configuration. **Browser-based visual testing at the requested viewport sizes and screen-reader testing have not yet been performed.** SQL record was written first in CHANGES.sql, as required.


This log applies ONLY to the default
website in the root folder. Each AI's
version folder carries its own
independent change log.

## 2026-11-19 — ChatGPT / AI-02

Recorded a non-approved suggestion after comparing the front-end catalogue and shared navigation with the current web-app inventory: six browser-based product interfaces are not yet listed. The suggestion is in SUGGESTIONS.md. No website code, navigation, deployment, or product availability claim was changed. SQL record: CHANGES.sql. Suggestion commit: `609fe0b4b1dbdfed8d7cc6e17f5f8fb51a33ca48`.


## 2026-11-19 — CashDublo

The shared site navigation now uses a stationary CashDublo wordmark in a 72px green header. The entire bar is the menu hit surface; the drawer slides over the page without moving the logo or layout. The reusable component supports keyboard focus, Escape and outside-click close, reduced motion, and responsive desktop/tablet/phone layouts. Added the navigation standard and contract tests.


## 2026-11-19 — CashDublo

The shared drawer component now initializes itself after the page DOM is ready. Initialization is idempotent, so both standalone app sites and the main-site loader can use the same component safely.


## 2026-11-19 — CashDublo

Extended the shared drawer component to read its drawer ID from `aria-controls` and close on app-specific buttons marked `data-cd-close`. This supports account actions such as sign-out without duplicating drawer behavior.

## 2026-11-17 — Onyx (General), on the President's order

Autoplay, built properly, and the banner fits its view. The birthday song now runs through a single sound engine for the newsletter area — Spotify's player API, told to play the moment it loads, retried on the visitor's first touch anywhere for browsers that hold sound until a touch — so it starts on its own every time a browser allows sound, and any sound added to this area later uses the same door. The site also stamps its visitor's view (mobile, tablet, or desktop), and the birthday banner aligns with it: desktop lines up with the page's column; tablet and mobile fit their screens.

## 2026-11-17 — Onyx (General), on the President's order

The birthday song starts on its own, and the banner is dressed. The pop-up birthday card's player for "Just the Two of Us" now autoplays when the card opens; where a browser holds sound until the visitor first touches the page, that first touch anywhere starts it — closing the card still stops the song. On the banner strip (home and newsletter pages): balloons rise off the banner, and a present hops with excitement at the end of the line, clear of the words.

## 2026-11-17 — Onyx (General), on the President's order

The song joins the birthday banner. The newsletter pop-up's birthday card now carries "Just the Two of Us" — the original Grover Washington Jr. recording with Bill Withers — through Spotify's own player, for a week (through November 24). Closing the card stops the song. The recording plays through Spotify's player because it is not a recording the President owns the rights to host; his own rights-owned songs are what the production websites will host directly.

## 2026-11-17 — Onyx (General), on the President's order

A birthday banner for the President's father stands on the home page and the newsletter page, and the newsletter pop-up carries it as a special edition: Happy Birthday, Dad — thanks for giving me my first computer at 13. Look at me now. It stands through November 17 and takes itself down at the day's end. It is the only newsletter of this week; normal editions resume in a week.

## 2026-11-17 — Onyx (General), on the President's order

The Newsletter presentation refined: compact first, never grandiose. On the page, each item shows its first sentence with a little down caret that opens the fuller detail. In the pop-up card the photo is smaller, every story starts closed behind its caret, and the close button floats — in reach at any scroll point, with the same close standing at the bottom — so a reader can close at any time, even under an exhausting amount of news.

## 2026-11-17 — Onyx (General), on the President's order

The Newsletter stands on the site (Module #68). A new page, news.html, carries short plain-words editions about what is going on at CashDublo, backfilled from the beginning in dated editions and sorted by kind — Apps, The Website, Behind the Scenes, Travel and Life — with a filter so older editions can be read by kind alone. A newsletter card pops up once per visit on the site's pages: dismissible, back again next visit, with a photo and tappable stories. The Newsletter link stands in the navigation of the home, apps, front-ends, code, and privacy pages. The President's content law stands over it: no private information about him, and no app in a legal gray area is ever advertised in the newsletter.

## 2026-11-17 — Cohere (Grammar Lead), checked by Onyx (General)
- First grammar pass over the default website: no true grammar errors found; the pages stand. Style suggestions and a product-name flag were refused at the check (Apple Dextop is deliberate).

## 2026-11-17 — Onyx (General), on the President's order
- Status rule corrected across the site:
  DEVELOPMENT = the building process (no
  first build yet); BETA = a first build
  exists — most apps are Beta until
  version 1.0.0. Versioned cards and
  listings flipped accordingly.
- Per-AI version folders added: Gemini/,
  Cohere/, NVIDIA/, Workers-AI/ — each
  seat builds its own version there, with
  its own independent change log.
  (Written after the CHANGES.sql entries,
  per the law.)

## 2026-11-17 — Onyx (General)
- Accurate app versions, collected and automatic: versions.json (from the Version Register) + sync_versions.py now drive every version the site shows, applied during every website change. First corrections: Contracts card 0.4.0; PodEdPro and Galaxy Repeat front-ends entries 0.4.0. (Written after the CHANGES.sql entry — the last step, per the law.)

## 2026-11-17 — Onyx (General)
- New sub page: course.html — the Module Course (all 60 modules as course units for the teaching app) and the games created for the HACKED! console. Linked from Home and All Apps as "The Course & Games." (Written after the CHANGES.sql entry — the last step, per the law.)

## 2026-11-17 — Onyx (General)
- New sub page: code.html — The Code. Visitors see that code exists for the apps (plain file listings, text only); nothing opens a file and nothing can be modified past that screen. Linked from Home and All Apps. (Written after the CHANGES.sql entry — the last step, per the law.)

## 2026-11-17 — Onyx (General), on the President's order
- The animated founder GIF comes off the home page for now; the GO orb stands in the portrait spot again (the GIF file stays in the repo). The site code audit's fixes land in the same round: app icons lazy-load with set dimensions, the shared scripts moved into one cached site.js, and the privacy page's style blocks are merged. The audit (Gemini read, the General examined) found privacy CLEAN — no trackers, no third-party calls.


## 2026-11-20 — Onyx / AI-01 — Contact email replaced site-wide; website icon added

**Before:** The site's contact email read CashDublo@gmail.com, and the website had no icon of its own in the browser address bar.

**After:** On the President's order, every CashDublo@gmail.com on the site is now cash.dublo@gmail.com — the root pages, the app pages, the front-end pages, and the AI version folders. The website icon (the gold CashDublo mark) now stands at the root as favicon.ico, favicon-32.png, and apple-touch-icon.png, with a copy in every AI folder, and every page head carries the icon links so it loads in the address bar. SQL record was written first in CHANGES.sql, as required.


## 2026-11-20 — ChatGPT / AI-02 — Full green header opens the menu

**Before:** The transparent menu button covered the green header, but the CashDublo wordmark sat above it as a home link. Tapping the brand therefore navigated away instead of opening the menu.

**After:** The CashDublo wordmark now toggles the same shared drawer. The full green header—including the wordmark and blank green space—opens or closes the menu on touch and mouse. The wordmark remains stationary; Home is still available inside the drawer. The shared interaction remains keyboard-operable and keeps its existing Escape, focus-return, outside-pointer-close, and reduced-motion behavior. Added a regression assertion for brand activation. SQL record was written first in CHANGES.sql, as required.

**Verification limit:** Source-level regression assertion added; real phone/tablet/desktop touch and keyboard interaction still requires browser/device QA. No production deployment was made.

## 2026-11-20 — Onyx / AI-01 — The link hub and the production plan

**Before:** The Front Ends page listed the front ends and the apps, but the live doors were not gathered in one place, the web apps had no set-up entries of their own, and no record stated how the production site would be shaped.

**After:** The page opens with **The Doors — live links**: the CashDublo Server back end (live, linked) and this Showcase (live, both addresses), with the built App Store doors named plainly as switching on with the next server update. A new **Web Apps** section sets up every web app with its true state and its repository link — Travel Journal Web dormant until its deploy keys are set, the rest built with no live address yet; nothing is linked that is not live. **PRODUCTION-SITE-PLAN.md** added to the repo: the President's decision (2026-11-20) that production is cashdublo.com, built clean and segmented by job; this site stays the link hub and workshop; the server update and new layouts are the President's own round on his server; the hub and the nightly check stay on the General's desk.

**Verification limit:** Page source checked at build time; the new sections render in the page's existing card style. A live visual pass rides the next site check.

## 2026-11-20 — Onyx / AI-01 — The theme shelf

**Added:** The `themes/` folder. The standard (themes/README.md): a CashDublo theme ships as a compatible pair — `.wthm` for web faces, `.athm` for applications — one core of the 21 color jobs in each file, the `.wthm` adding the mapping onto the site's CSS variables. The shelf: the six house themes as pairs (Porcelain, Obsidian Gold, Midnight Slate, Goldbone, King, Queen), built from the theme module's own palette records, every role filled, nothing re-picked, with `index.json` listing them. The masters live here because the hub serves them directly — every web face can fetch its `.wthm` today, and the apps take their `.athm` through the server's update doors when the server round comes.

## 2026-11-20 — Onyx / AI-01 — The finished-server copy

**Added:** To PRODUCTION-SITE-PLAN.md, on the President's order — when the production server is finished, a copy of its website goes into a repository called **Current Production Server** (hyphen form on GitHub), the standing snapshot of the production site as it runs.

## 2026-11-20 — Onyx / AI-01 — The module package published on the website

**Added:** `api/modules.json` and `api/MODULE-DATA.md` — the 78-module API package, the same record the production server carries, published on the hub at the server's own paths as part of the finish-the-server round. One package, two doors: the website and the server now answer with the same module record.


## 2026-11-20 — ChatGPT / AI-02 — Website editions consolidated

The 17 AI website editions now live together under `all websites/`. The old root-level AI edition folder(s), the `website builds/` copy, and the `websites/` copies were removed in the final batched cleanup (**8fea7cb03887d27ea98c76d5fd6a4fca79363277**). The choosing page, `double click to view all websites.html`, now points into `all websites/`. The README's **Which website is the real one** section explains the website roles, and the `cashtheblow.com production servers/` folder was added (README/restructure commit **befa5c13**). The midnight website job was repointed to the consolidated paths. This entry records the restructure and the final cleanup together. SQL record was written first in `CHANGES.sql`, as required.
