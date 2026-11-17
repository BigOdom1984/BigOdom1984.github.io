# CashDublo game-card standard

Every game card must show three pieces of release metadata visibly:

- **Version** — the current version/tag for the game build. If no version is tagged or verifiable, show `Not tagged / verify`; never invent a semantic version.
- **Status** — the current evidenced lifecycle state (for example, in development, beta, released, paused, archived). If not verified, say `Release status unverified`.
- **Type** — the gameplay category. Use the category already recorded in the game's own specification or approved project taxonomy. If none exists, use `Not classified` and request classification; do not guess.
- **Platforms** — every operating system/browser target the actual game build supports. Record all verified targets in `data-platforms` (for example, `ANDROID,IOS,WEB`). Never infer support from the engine, language, or another app in the same repo. Use `Not verified` until a build or compatibility test confirms it.

## Required markup

Add each game to `games.html` as an article with the `.game-card` class, a stable unique `id`, and the metadata attributes below. The shared site script displays Version, Status and Type on the card and automatically builds the Games → Other Games dropdown from all `.game-card` entries except the Storyline HACKED anchor.

```html
<article class="card game-card"
  id="unique-game-id"
  data-version="0.1.0"
  data-status="In development"
  data-game-type="Puzzle"
  data-platforms="ANDROID,IOS">
  <h3>Game title</h3>
  <p>Short description.</p>
</article>
```

Use `data-version="Not tagged / verify"`, `data-status="Release status unverified"`, or `data-game-type="Not classified"`, or `data-platforms="Not verified"` when the relevant value is not evidenced. Platform filters may include a game only when every listed target is supported by the actual game build, not merely its engine. The dropdown displays the game title and type. Add new game cards when the game is approved for public catalog listing; the dropdown refreshes from the catalog at page load.

## Current examples

- Storyline HACKED — Interactive story / adventure; version not tagged; in development.
- Name That Flag — Trivia / geography; version not tagged; release status unverified.

## Release checklist

1. Confirm the game's type against its project specification.
2. Confirm the version from a repository tag or authoritative release manifest.
3. Confirm current status from the project's release/roadmap record.
4. Add the `.game-card` metadata and stable ID.
5. Verify the card on Games and Code pages, and verify it appears in Games → Other Games with its type.
6. Never imply store availability or production release without evidence.
