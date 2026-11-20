-- ChatGPT website edition change log
-- Scope: ChatGPT/ only. Record the SQL entry before the Markdown explanation.
CREATE TABLE IF NOT EXISTS changes (
  id INTEGER PRIMARY KEY,
  date TEXT NOT NULL,
  who TEXT NOT NULL,
  what TEXT NOT NULL,
  docs TEXT
);
INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-20', 'ChatGPT / AI-02', 'Aligned the Home, About, and Privacy navigation on ChatGPT/apps.html with the matching navigation on ChatGPT/index.html. Applied the same header spacing, typography, responsive stacking, and hover treatment; retained the catalogue page content and its existing routes. Updated the catalogue footer to expose the same Home, About, and Privacy destinations. Staged for review; no merge or production deployment.', 'ChatGPT/apps.html; ChatGPT/index.html; ChatGPT/CHANGES.md');

INSERT INTO changes (date, who, what, docs) VALUES
('2026-11-20', 'Onyx / AI-01, on the President''s order', 'Rebuilt ChatGPT/index.html in the production webserver''s layout: the black-and-gold card stack from cashdublo.vercel.app, with sections for the webserver, the front ends (main website, showcase, web apps), the back ends (production server, offline server), and the online app store (the shelf, the store back end, the store app), each piece labelled with its true state. Website edition version 0.2.0.', 'ChatGPT/index.html; ChatGPT/version.json; ChatGPT/CHANGES.md');
