# CashDublo app and front-end catalog standard

## Canonical app record

`apps.html` is the canonical public app catalogue. Every app card has one stable ID, one current version/status label, a `.plats` field, and a repository or project-page link. The `.plats` field is the source of truth for platform filters.

Allowed platform tokens:

- `ANDROID` — Android app or companion build.
- `IOS` — iPhone/iPad build.
- `MAC` — macOS program.
- `WIN` — Windows program.
- `LIN` — Linux program.
- `WEB` — verified browser app/game.

A multi-platform program must list every verified target, separated by ` · ` (for example `MAC · WIN · LIN`). Do not infer compatibility from shared source code, framework, or an app's companion product. Only add a platform after its build or compatibility has been verified.

The shared navigation script reads `apps.html` and builds the Android, iPhone/iOS, Mac, Windows and Linux pages from these tags. Each platform page displays all matching apps in horizontally swipeable rails, stacked vertically. This avoids separate hand-maintained lists drifting out of sync.

## Categories

Each app should have one primary category, with a secondary descriptor where helpful. The current display labels include:

- AI / Productivity, AI / Audio
- Character / Companion
- Photos / Travel, Travel / Navigation, Travel / Journaling
- Food / Reference
- Music / Creative, Music / Media, Music / File transfer
- Education / Testing, Education / Language learning, Education / AI tutor
- Accessibility / Text-to-speech
- Finance / Investing
- Productivity / Ideas
- Developer tools / GitHub, Build utility, Customization, Coding, Localization, Build, Backup & restore, Diagnostics
- Audio / Device utility, Video / Editing, File management
- Business / Legal, Networking / Connectivity, Desktop integration
- **Command Tools** — command-prompt, CLI, shell and terminal programs only; do not apply this category to ordinary GUI apps.

Game cards use the separate `docs/GAME-CARD-STANDARD.md` standard, including verified version, status, type and platform compatibility.

## Command Tools

`terminal.html` is the Command Tools catalogue. The first confirmed entry is Secure Mac Remote Terminal. Its current declared targets are macOS and its Android companion; the Android companion is not yet feature-equivalent. The wider cross-repository CLI/script inventory is still pending. Do not label other apps as Command Tools until their actual command-line entry point and supported platforms are verified.

## Web front-end examples and source

Every web front-end card must provide:

1. A **Production example** link when a live production URL has been verified. If not deployed, say so plainly; do not invent a live URL.
2. A **Source — BigOdom1984** link to the matching GitHub repository.
3. For app front ends, an **App / store listing** link back to the canonical app card. That card may link to a verified store listing or a clearly labelled store search; searches must not be presented as direct app listings.

Current verified production examples include the CashDublo Showcase on GitHub Pages and Cloudflare Pages, and CashDublo Server on Vercel. CashDublo Online Course is not yet deployed; Travel Journal Web is built but dormant; Marvin's Website has no published production URL recorded here.

## Release and maintenance checklist

- Confirm platform targets and category from the app repository/README/build artifacts.
- Keep the version and status evidence-based; use `Not tagged / verify` or `Status: verify` when unknown.
- Add the same app ID to the canonical catalogue and the matching front-end entry.
- Keep store links, production examples and GitHub source links distinct.
- Verify each platform filter after catalogue changes.
- Add Command Tools only for actual CLI/CMD/terminal entry points.
