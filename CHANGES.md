# Changes — the default website (root)

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

## 2026-11-19 — ChatGPT / AI-02

Standardized the All Apps cards and the app cards reused on platform pages. The order is now icon, one-line app name, abbreviated one-line version/status, category, description, store links, and platforms at the bottom. The middle contains only the category; the duplicate platform metadata pill is gone. Google Play search and Apple search labels are shortened to Google and Apple and stay side by side. Existing app descriptions, version/status values, and store URLs were preserved; platform labels were checked against source READMEs and corrected where they disagreed. SQL record was written first, as required: CHANGES.sql.

## 2026-11-19 — ChatGPT / AI-02

Extended the same card order to the four app cards on the homepage. Their existing app-detail links now sit in the card link row, and their categories are taken from the shared app category map. Their descriptions and platform labels remain unchanged. SQL record was written first, as required: CHANGES.sql.

## 2026-11-19 — ChatGPT / AI-02

Checked the platform rows against the app repositories' READMEs and corrected the mismatches: PictureGlobe, Mixology, Hit Record, Testra Accuracy, TTS Widget and Contracts are Android-only; Cash Portfolio also declares a web target; Dear Idea Desktop, Change App Icons and CashDublo Coder are Mac/Windows; GitHub HQ, Script-Run, App Translator, Build Manager and Rebuild-All are Mac-only; Wi-Fi Tether lists Android, Windows, Mac and Linux. The same descriptions and platform rows were carried into all 34 app cards on Front Ends, and the homepage cards now match the catalogue. Versions, statuses and store destinations were left unchanged. SQL was updated first: CHANGES.sql.


## 2026-11-20 — ChatGPT / AI-02

Aligned the shared app-card content to the icon’s left edge. The icon, app name, version/status, category, description, and Google/Apple store links now start from the same left position. Existing card dimensions, typography, content order, and bottom platform row remain unchanged. SQL change record was written first: CHANGES.sql.
