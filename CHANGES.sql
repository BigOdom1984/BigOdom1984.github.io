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
