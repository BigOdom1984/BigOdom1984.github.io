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
