# CashDublo theme files — the .wthm / .athm standard

The President's order, 2026-11-20: CashDublo themes are built as **compatible
theme files** that the front ends and the web apps share —

- **`.wthm`** — a web theme, for the front ends and web apps.
- **`.athm`** — an app theme, for the applications.

Both files are plain JSON text. A theme always ships as a **pair**: the same
name, the same core, one `.wthm` and one `.athm`. A front end and an app
wearing the same theme are wearing the same colors — that is what compatible
means here.

## Where the themes live, and why

The master copies live **here, in the website's `themes/` folder** — the best
location, chosen by the General under the President's order: the hub site
serves the files directly, so every web face can fetch its `.wthm` today with
no server work, every seat can read the masters, and the apps take their
`.athm` files through the server's update doors when the server round comes.
The theme module keeps owning the standard (the color jobs and how a new
theme is made, in its THEME-STANDARD); this folder is where the finished
files live. `index.json` lists every theme on the shelf.

## The shape of a theme file

- `format` — always `cashdublo-theme`.
- `kind` — `web` in a `.wthm`, `app` in an `.athm`.
- `name`, `key`, `version`, `by` — the theme's name, its file key, its
  version, and its maker (CashDublo).
- `dark` — true for a dark theme, false for a light one.
- `roles` — the heart: the **21 color jobs** every CashDublo theme fills
  (BG, CARD, CARD2, CARD2_ALT, GOLD, GOLD_DIM, TEXT, MUTED, ACCENT,
  ACCENT_FG, ACCENT_ACTIVE, BTN, BTN_ACTIVE, BTN_DIS_BG, DIS_FG, DIS_FG2,
  GRIP, ZEBRA_A, ZEBRA_B, MM_ALT, LOG_FG), each with one hex color. The jobs
  and their order are Apple2Player's, copied exactly — a change to a shared
  theme starts in Apple2Player and is copied out to the family.
- A `.wthm` adds one `web` section: `cssVariables`, the theme's colors mapped
  onto the website's CSS variables (--ink from TEXT, --muted from MUTED,
  --paper from BG, --white from CARD, --lime from ACCENT, --coral from
  ACCENT_ACTIVE, --line from CARD2_ALT, --deep from CARD2). A front end drops
  those variables in and it is wearing the theme.

## The shelf today

The six house themes, each as a pair: **Porcelain**, **Obsidian Gold**,
**Midnight Slate**, **Goldbone**, **King**, and **Queen** — built from the
theme module's own palette records, every role filled, nothing re-picked.

## Making a new theme

An app's own unique theme is still made the house way — from the app's icon,
by the theme module's standard. When it is finished, it joins this shelf as a
pair: same core in both files, the web section added for the `.wthm`, the
version set, and a row in `index.json` — one operation, so the shelf never
holds half a theme.
