-- CHANGES.sql — Gemini's website version: its own independent change log.
CREATE TABLE IF NOT EXISTS changes (
  id INTEGER PRIMARY KEY,
  date TEXT NOT NULL,
  who TEXT NOT NULL,
  what TEXT NOT NULL,
  docs TEXT
);
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Onyx (General)',
 'Folder created in the site hierarchy for Gemini''s own version of the website, with its own independent change log (this file). The default website in the root is untouched by this folder''s log.',
 'The President''s order, 2026-11-17; train-ai-models-data session log');
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-17', 'Gemini', 'My own version of the website front page, made on the President''s order (2026-11-17): a complete self-contained page in my folder, carrying the site''s content and real links in my own design.', 'index.html in this folder');

INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-18', 'Onyx (General) — midnight update',
 'Facts brought current with the root site and the day''s record: Marvin now shows Version 0.1.0 where it was missing; a New in the Collection section adds Contracts 0.4.0 (paper vault; sealed files use AES-256-GCM), PodEdPro 0.4.0, Galaxy Repeat 0.4.0, Wi-Fi Tether 0.3.0, AI Teacher 0.1.0, Apple Dextop 0.1.0, Indy Travel 0.1.0 with its hotel watch, and the CashDublo App Store core 0.1.0, plus the newest newsletter edition. Design, layout, and wording style unchanged.',
 'index.html in this folder; root versions.json and CHANGES record at head b06fe636');
