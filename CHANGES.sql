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
