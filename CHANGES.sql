-- CHANGES.sql — the DEFAULT website (root folder) change log in SQL.
-- The President's law: this log applies ONLY to the default website in
-- the root folder. Each AI's version folder (ChatGPT/, muse/, Gemini/,
-- Cohere/, NVIDIA/, Workers-AI/) carries its OWN independent change log.
CREATE TABLE IF NOT EXISTS changes (
  id INTEGER PRIMARY KEY,
  date TEXT NOT NULL,
  who TEXT NOT NULL,
  what TEXT NOT NULL,
  docs TEXT
);
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-19', 'ChatGPT / AI-02', 'Recorded a non-approved suggestion after comparing the front-end catalogue and shared navigation with the current web-app inventory: six browser-based product interfaces are not yet listed. No website code or navigation was changed.', 'SUGGESTIONS.md; front-ends.html; assets/site-navigation.js; modules/website-module/README.md v1.1.0; suggestion commit 609fe0b4b1dbdfed8d7cc6e17f5f8fb51a33ca48');

INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Cohere (Grammar Lead), checked by Onyx (General)', 'First grammar pass over the default website (index and apps pages): no true grammar errors found — the pages stand as written. The pass flagged style preferences and one product name (Apple Dextop is the app''s deliberate name and is never corrected); those were refused at the General''s check, and the grammar desk''s bar was tightened: true errors only, names always stand.', 'train-ai-models-data session log'),
('2026-11-17', 'Onyx (General), on the President''s order',
 'Status rule corrected across the site: DEVELOPMENT means the building process (no first build yet); BETA means a first build exists — most apps are Beta until version 1.0.0. Versioned cards and listings flipped from DEVELOPMENT to BETA in apps.html, the platform pages, the front-ends, and the homepage strip; the generator data carries the corrected chips.',
 'make_platform_pages.py; train-ai-models-data session log'),
('2026-11-17', 'Onyx (General), on the President''s order',
 'Per-AI version folders added to the hierarchy: Gemini/, Cohere/, NVIDIA/, Workers-AI/ — each seat will try its best to make a better version of the website in its own folder, and each folder carries its OWN independent change log (CHANGES.sql + CHANGES.md). This root log covers the default website only.',
 'The President''s order, 2026-11-17');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General)', 'Accurate app versions, collected and automatic (the President''s orders): versions.json now stands in the site as the single source, written from the Version Register; sync_versions.py applies it during every website change, and the generator reads it for its own entries. First corrections from the collected register: the Contracts card now reads 0.4.0 (its build file), and the front-ends entries for PodEdPro and Galaxy Repeat now read 0.4.0 (both were stale). Seven collected apps have no card yet; their versions stand ready in versions.json for the day their cards land.', 'versions.json, sync_versions.py, train-ai-models-data VERSION-REGISTER.md');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General)', 'New sub page (the President''s order): course.html — The Module Course and the Console Games. It displays the created module course for the teaching standalone app (all 60 modules laid out as course units, from the module index) and the games created for the HACKED! games console (HACKED!, the twelve-case library, the Storyline Player console, and the Studio that makes its games). Linked from the Home and All Apps navs as The Course & Games.', 'course.html');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General)', 'New sub page (the President''s order): code.html — The Code. Visitors can see that code exists for the apps: each app shows a plain listing of its top-level files, as text only. Nothing on the screen is a link into a file, no file can be opened or read from it, and nothing can be modified past that screen — the listing is the end of the road. Thirteen apps stand on it from their real local trees; the rest join as their listings are collected in their audits. Linked from the Home and All Apps navs as The Code.', 'code.html');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General), on the President''s order',
 'The animated founder GIF comes off the home page for now (the GO orb stands in the portrait spot again; the GIF file stays in the repo). The site code audit''s fixes land in the same round: the app icons on the home and apps pages now lazy-load with set dimensions so the pages stop shifting as they arrive; the shared gate and comments scripts moved out of the pages into one cached site.js; the privacy page''s two style blocks are merged into one. The audit itself: Gemini read the code, the General examined every claim — privacy stands CLEAN (no trackers, no third-party calls), and two of the audit''s claims were struck at the check as not present in the files.',
 'site.js; train-ai-models-data session log round 220');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General), on the President''s order',
 'The Newsletter stands on the site (Module #68): a new page, news.html, carries short plain-words editions about what is going on — backfilled from the beginning in dated editions and sorted by kind (Apps, The Website, Behind the Scenes, Travel and Life) with a filter so older editions can be read by kind. A newsletter card now pops up once per visit on the site pages (dismissible; it returns the next visit), with a photo and tappable stories, and the Newsletter link stands in the navigation of the home, apps, front-ends, code, and privacy pages. Content law set by the President: no private information about him, and no app in a legal gray area is ever advertised in it.',
 'news.html; site.js; newsletter-module SPEC (train record)');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General), on the President''s order',
 'The Newsletter presentation refined: compact first, never grandiose. On the page, each item shows its first sentence with a little down caret that opens the fuller detail. In the pop-up card the photo is smaller, every story starts closed behind its caret, and the close button now floats — it stays in reach at any scroll point, with the same close standing at the bottom — so a reader can close at any time, even under an exhausting amount of news.',
 'news.html; site.js; newsletter-module SPEC (train record)');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General), on the President''s order',
 'A birthday banner for the President''s father (his birthday was November 15) stands on the home page and the newsletter page, and the newsletter pop-up carries it as a special edition — Happy Birthday, Dad; thanks for giving me my first computer at 13; look at me now. It stands through November 17 and takes itself down at the day''s end. It is the only newsletter of this week; normal editions resume in a week.',
 'index.html; news.html; site.js');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General), on the President''s order',
 'The song joins the birthday banner: the newsletter pop-up''s birthday card now carries Just the Two of Us — the original Grover Washington Jr. recording with Bill Withers, through Spotify''s own player — for a week (through November 24). It is the first thing the card offers on a visit; closing the card stops the song. The recording is played through Spotify''s player because it is not a recording the President owns the rights to host — his own rights-owned songs are what the production websites will host directly.',
 'site.js');

INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General), on the President''s order',
 'The birthday card''s song now starts on its own: the Spotify player for Just the Two of Us is set to autoplay when the card opens, and where a browser still holds sound until the visitor first touches the page, that first touch anywhere starts it. Closing the card still stops the song. The birthday banner itself is dressed for the day: balloons rise off the banner, and a present hops with excitement at the end of the banner line, clear of the words.',
 'site.js, index.html, news.html');

INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General), on the President''s order',
 'Sound in the newsletter area now runs through one autoplay engine: the birthday song is built on Spotify''s player API, told to play the moment it loads, and retried on the visitor''s first touch anywhere for browsers that hold sound until a touch — so it starts on its own every time a browser allows sound, and any future sound added to the newsletter area uses the same door. The site also knows its visitor''s view now — mobile, tablet, or desktop — and the birthday banner aligns with the selected view: on desktop its words line up with the page''s own column, on tablet and mobile it fits the screen it is on.',
 'site.js, index.html, news.html');

INSERT INTO changes (date, who, what, docs) VALUES ('2026-11-19', 'CashDublo', 'Updated the canonical site navigation to a stationary CashDublo wordmark in a 72px green header with full-bar menu hit area and accessible sliding drawer. Extracted reusable cashdublo-nav.js/css, with Escape/outside close, keyboard focus containment, reduced motion and responsive desktop/tablet/phone layouts.', 'assets/site-navigation.js; assets/site-navigation.css; assets/cashdublo-nav.js; assets/cashdublo-nav.css; NAVIGATION-STANDARD.md; tests/navigation-contract.test.cjs');

INSERT INTO changes (date, who, what, docs) VALUES ('2026-11-19', 'CashDublo', 'Made the reusable navigation component self-initialize after DOM readiness, while keeping initialization idempotent for the main-site loader.', 'assets/cashdublo-nav.js');

INSERT INTO changes (date, who, what, docs) VALUES ('2026-11-19', 'CashDublo', 'Made the shared navigation drawer reusable with any id named by aria-controls and allowed app-specific buttons to close the drawer via data-cd-close.', 'assets/cashdublo-nav.js; NAVIGATION-STANDARD.md');

INSERT INTO changes (date, who, what, docs) VALUES ('2026-11-19', 'CashDublo', 'Refined the shared desktop header with a left-anchored wordmark, a single horizontal quick-link row and a right-aligned Menu control. Reworked app and front-end catalog rails into responsive wrapping grids; reduced icon/card footprint and kept category, platform and status chips on one line. GitHub Actions navigation/responsive checks and the Cloudflare Pages preview build passed.', 'assets/cashdublo-nav.js; assets/cashdublo-nav.css; NAVIGATION-STANDARD.md; tests/navigation-contract.test.cjs; tests/responsive-layout.test.mjs');


INSERT INTO changes (date, who, what, docs) VALUES ('2026-11-19', 'ChatGPT / AI-02', 'Consolidated root website fixes: responsive landing-page polish and birthday banner, full-screen close-only newsletter welcome with keyboard focus containment, explicit audio cleanup, and browser-compliant autoplay retry, plus accessible All Apps sort/platform filters, and removal of the All Apps dropdown while preserving the direct link. Added regression coverage; work remains on a non-production branch pending CI and visual QA.', 'index.html; news.html; site.js; apps.html; assets/site-navigation.js; tests/root-site-upgrade.test.mjs; .github/workflows/site-validation.yml');
