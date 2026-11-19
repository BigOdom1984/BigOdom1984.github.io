# CashDublo ChatGPT Website — Phase 1 Audit Log

- Audit date: 2026-11-20
- Target: https://bigodom1984.github.io/ChatGPT/
- Repository: BigOdom1984/BigOdom1984.github.io
- Scope: ChatGPT candidate website folder and read-only inspection of shared root assets.
- Audit state: IN PROGRESS
- Verification mode: GitHub source inspection. Live browser rendering could not be verified.

## Confirmed source findings

### P1 — Candidate navigation is overwritten by the shared navigation initializer
Evidence: ChatGPT/index.html and ChatGPT/apps.html define page-specific header navigation and load /assets/site-navigation.js. In assets/site-navigation.js, install() removes a legacy body > header when it has no [data-cd-header], then inserts shared nav markup. The /chatgpt/ branch provides only an RSS Receiver link in its drawer. ensurePrimaryNav() removes the primary navigation on /chatgpt/ paths.

Impact: The candidate homepage's About, Featured apps, All apps and Privacy links are discarded after initialization. The catalogue's Home, About and Privacy links are also discarded. This is a confirmed source-level regression; runtime appearance still requires browser verification.

Recommended correction: Give the ChatGPT candidate its own navigation initialization or configure the shared drawer with the candidate's actual page destinations. Do not alter the official root site's navigation or other AI-owned folders.

### P2 — Shared navigation injects a login destination that needs validation
Evidence: assets/cashdublo-nav.js inserts a Log in link with relative destination ./login.html when initializing a header. The shared navigation initializer dynamically loads this script on the candidate site.

Impact: On a /ChatGPT/ page, the relative destination resolves within the candidate folder. Whether that route exists and is appropriate remains unverified.

Recommended correction: Confirm the intended account/login architecture and destination before exposing this link. Do not imply an account system exists unless implemented and tested.

### P2 — Privacy policy contains broad ecosystem-wide claims requiring app-level substantiation
Evidence: ChatGPT/privacy.html states that app information stays on-device, CashDublo runs no accounts or data-collecting servers, nothing is shared with advertisers, and apps have no ads or trackers. It also describes external API-key integrations and multiple app data types.

Impact: These claims cover multiple independently developed apps. They must match actual app behavior, third-party SDKs, network requests, backups, analytics, crash reporting, and server-side features. This audit has not inspected every app repository or runtime network behavior. The claims are NOT VERIFIED by current evidence.

Recommended correction: Build an app-by-app data inventory and reconcile the public policy with verified implementation before making stronger privacy assurances.

## Positive findings to preserve

- ChatGPT/version.json identifies this as a CANDIDATE website edition and records browser/device/link checks as NOT RUN.
- ChatGPT/apps.html distinguishes source repository versions from published release versions.
- Catalogue entries generally use NOT VERIFIED release labels; store links are explicitly store searches rather than direct app listings.
- Cash Portfolio is labeled BETA rather than represented as a verified production release.
- Root shared files assets/site-navigation.css, assets/site-navigation.js, assets/cashdublo-nav.css, and assets/cashdublo-nav.js exist and were inspected read-only.

## Checks and limitations

| Check | Result | Evidence / limitation |
|---|---|---|
| Candidate homepage source | PASS | ChatGPT/index.html fetched and reviewed |
| Candidate app catalogue source | PASS | ChatGPT/apps.html fetched and reviewed |
| Privacy policy source | PASS | ChatGPT/privacy.html fetched and reviewed |
| RSS preview source | PASS | ChatGPT/rss-receiver.html fetched and reviewed |
| Shared navigation source | PASS | Root shared CSS/JS fetched and reviewed |
| Navigation behavior | FAIL | Source proves candidate header is replaced and primary nav removed |
| Login destination | NOT TESTED | Candidate-relative login route not validated |
| All internal links and anchors | NOT TESTED | Full link crawl not completed |
| All image assets | PARTIAL | Founder artwork and representative app icon paths found; complete inventory not completed |
| External store listings | NOT TESTED | Search links are not proof of publication |
| Privacy claims vs app implementations | NOT TESTED | App-by-app data-flow review pending |
| Browser runtime | BLOCKED | Browser access to GitHub Pages candidate unavailable in this session |
| Mobile/tablet/desktop/DeX visual QA | NOT TESTED | Requires real browser/device rendering |
| Keyboard and screen-reader QA | NOT TESTED | Requires runtime accessibility testing |
| Payment/checkout | NOT IN SCOPE | No purchase functionality is claimed by this candidate |

## Next audit actions

1. Correct or isolate the candidate navigation regression.
2. Crawl every candidate-page internal link, anchor, image and script reference.
3. Verify app descriptions, version sources, lifecycle states and store destinations against each app repository and actual store listings.
4. Audit privacy/data-flow claims app by app.
5. Perform browser QA at mobile, tablet, desktop and Samsung DeX-sized viewports when runtime access is available.
6. Record each result as PASS, FAIL, BLOCKED or NOT TESTED with evidence. Do not convert unperformed checks into passes.

## Change control

No website source files were modified in this audit pass. This is an evidence log only. The official root website and other AI-owned site folders remain untouched.
