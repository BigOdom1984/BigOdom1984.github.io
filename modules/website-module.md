# CashDublo Website Module
Version: 1.0
Document type: Platform-independent website reconstruction specification
Owner: CashDublo / Cash Flow Enterprise LLC
Purpose: Give any future AI enough written information to recreate, maintain, test, and extend the CashDublo public website without seeing a prior design, source code, screenshot, or implementation.

## 1. Authority and operating rules
This document defines required content, information architecture, navigation, behavior, data fields, layout relationships, pricing presentation, and business rules. It deliberately does not prescribe colors, typography, visual styling, frameworks, code, component libraries, or a specific design system. The implementing AI chooses those details.

Treat this document as the functional and content contract. Do not invent missing facts. Mark unknown information as "Not provided" or "To be confirmed". Do not convert estimated prices into live prices. Do not publish unverified version numbers, platform support, availability, security claims, or payment status as facts.

CashDublo is the public-facing business identity. The website must feel like an independent company/product website. GitHub is a development platform and must not be presented as the website's identity. Do not expose source-code URLs, repository links, raw code, commit history, or private development details on public product pages. The "My Source Code" navigation tab remains present as a deliberately obscured preview page; its cards may show faint blurred silhouettes only and must not contain clickable repository or source-file links.

## 2. Business and website purpose
The website is the public storefront and information hub for CashDublo's family of applications, games, services, and front ends. It must help a visitor:
- Understand what CashDublo is.
- Browse every application and product.
- Open a dedicated, one-page public outline for each application.
- Compare estimated free, one-time, monthly, and yearly payment options.
- Understand which products are free and ad-supported, free without ads, paid once, or membership-based.
- Find platform compatibility, release state, displayed version, privacy information, and support details.
- Navigate to legitimate app-store or product destinations when those destinations are known and verified.
- Find business information, privacy terms, and other company content.

The website itself must not pretend to be a payment processor. A pricing page is informational until an actual payment provider, products, entitlements, checkout, webhook handling, cancellation, and refund process have been implemented and tested.

## 3. Brand and content language
Public business name: CashDublo.
Short brand form: CashDublo.
Creator/company byline where appropriate: "Built by Cash."
Use direct, plain-language descriptions. Avoid describing the public website as a GitHub project.
Use USD for displayed planning prices unless the owner explicitly approves another currency or localized display. If localized currency is later added, retain the original USD reference internally and clearly show exchange-rate date and rounding policy.

## 4. Global information architecture and navigation
Every public page must share a consistent global navigation system, usable on desktop, tablet, and mobile. Navigation labels and destinations:
1. Home — /index.html
2. All Apps — /apps.html, with platform browse links for Android, iOS/iPhone, Mac, Windows, Linux, command tools, and web apps where those categories exist.
3. Front Ends — /front-ends.html, with individual front-end entries.
4. Games — /games.html, with game/story/engine entries.
5. Courses — /course.html
6. Pricing & Memberships — /memberships.html
7. My Source Code — /code.html
8. Newsletter — /news.html
9. Privacy — /privacy.html
10. About — /index.html#about

Navigation must remain understandable on narrow screens. Menus must be keyboard accessible, have visible focus, close on Escape and outside click, and not rely exclusively on hover. All page links must resolve to a real page or a deliberate in-page anchor. Do not leave dead links.

## 5. Homepage requirements
The home page introduces CashDublo as a company and points visitors toward the product catalogue. It must contain:
- CashDublo identity and a concise explanation of the company.
- A clear action to browse every app.
- A clear description of the product family and its categories.
- An About section with the owner's approved public biography only.
- A route to Pricing & Memberships.
- Routes to privacy and newsletter content.
- No source-code listings or public repository URLs.
The home page should prioritize products and customer value, not development infrastructure.

## 6. Application catalogue
Canonical catalogue page: /apps.html.
Each app is one distinct catalogue entry. Each entry must show:
- App icon.
- App name.
- Displayed version, if supplied.
- Release/status label, if supplied (for example beta, live, backend, planned, or not yet released).
- Short factual description.
- Supported platform labels only when verified.
- A public product overview link.
- Store links only when a real store destination is supplied and verified.
- Price or pricing-page route where useful.

Click behavior is mandatory:
- Clicking the icon opens that app's public overview page.
- Clicking the app name opens that same overview page.
- Clicking the displayed version/status line opens that same overview page.
- Any "App details", "Learn more", or public-facing "Source" label must open the public overview page, never a repository or source file.
- The only permitted public source-related navigation label is "My Source Code", which opens the blurred preview page. Do not use source labels as a way to reveal GitHub.

## 7. Individual application overview pages
Create one standalone public page per catalogue application, using the route pattern /apps/{app-slug}.html. The slug is stable, lowercase, and hyphen-separated. The page is an application outline, not a source-code page.

Every app overview must include:
1. App name and icon.
2. Short product description and intended customer benefit.
3. Current displayed version and release status, with "Not provided" when unknown.
4. Supported platforms and compatibility notes, only when verified.
5. Main capabilities and user workflows. If detailed capabilities have not been supplied, state that the feature outline needs owner confirmation rather than inventing features.
6. Free tier, if any.
7. One-time price, if any.
8. Monthly membership price, if any.
9. Yearly membership price, if any.
10. Feature differences among tiers, where confirmed.
11. Privacy, data handling, permissions, export, and deletion information. Do not claim safeguards that have not been implemented.
12. Availability/store links, if verified.
13. Support/contact route, once supplied.
14. A link back to All Apps, Pricing & Memberships, and Privacy.

Each overview page must be understandable without visiting GitHub. Do not include code blocks, repository URLs, source files, commit IDs, or internal implementation notes.

## 8. Catalogue inventory
Use these current application names and stable slugs as the initial catalogue. Confirm each record against the latest owner-approved product inventory before launch:
- AI2AISync — ai2aisync
- VoiceModel — voice-model
- Marvin — marvin
- PictureGlobe — pictureglobe
- Mixology — mixology
- Hit Record — hit-record
- Testra Accuracy — testra-accuracy
- Dear Idea — dear-idea
- GO — go
- Travel Journal — travel-journal
- SAY — say
- TTS Widget — tts-widget
- Player — player
- AI Cash Portfolio — ai-cash-portfolio
- Cash Portfolio — cash-portfolio
- Apple2Player — apple2player
- Dear Idea Desktop — dear-idea-desktop
- GitHub HQ — github-hq
- Script-Run — script-installer
- Change App Icons — change-app-icons
- CashDublo Coder — cashdublo-coder
- App Translator — app-translator
- Build Manager — build-manager
- Rebuild-All — rebuild-all
- PodEdPro — podedpro
- Galaxy Repeat — galaxy-repeat
- Best Mac File Manager — best-mac-file-manager
- Patent It! — patent-it
- Crash Catcher — crash-catcher
- Wi-Fi Tether — wifi-tether
- AI Teacher — ai-teacher
- Apple Dextop — apple-dextop
- Contracts — contracts
- Secure Mac Remote Terminal — secure-terminal

Do not infer that a listed app is released merely because it appears in the catalogue. The status and version are separate data fields and must be maintained from verified product records.

## 9. Pricing & Memberships page
Canonical route: /memberships.html.
The page presents every application that has any free tier, one-time purchase, monthly membership, yearly membership, or other recurring plan. Show each application as a separate grouped row/card.

For each app, the information order is:
- App icon at the left.
- App name and short tier note beside the icon.
- Payment options arranged horizontally to the right in four columns on wide displays, with responsive stacking on smaller displays:
  1. Free tier
  2. Monthly membership
  3. Yearly membership
  4. One-time purchase
- If an option does not apply, show a dash or "Not offered"; do not imply that the option exists.
- The app icon and app name link to its individual overview page.
- Label all proposed figures "Estimated price" and identify USD.
- Keep one app's pricing grouped together before showing the next app.

The page must have a prominent notice: prices are estimates/proposals, not confirmed store prices, active subscriptions, or charges. It must state that no payment is collected by the informational pricing page.

### 9.1 Current proposed price records
The following values are the current draft estimates, in USD. They are not approved final prices and must be validated against product costs, infrastructure, AI usage, store commissions, payment fees, regional affordability, tax, and support costs.

AI2AISync: free core team space, no ads; $4.99 monthly; $49.99 yearly; no one-time purchase.
VoiceModel: limited free voice preview; $9.99 monthly; $89.99 yearly; no one-time purchase.
PictureGlobe: free with modest ads; $2.99 monthly; $24.99 yearly; $14.99 lifetime.
Mixology: free with ads; $2.49 monthly; $19.99 yearly; $9.99 lifetime.
Hit Record: free starter recording/limited AI sessions; $9.99 monthly; $89.99 yearly; no one-time purchase.
Testra Accuracy: free limited daily tests with ads; $2.99 monthly; $24.99 yearly; $9.99 lifetime.
Dear Idea: free local library; $2.99 monthly; $24.99 yearly; $19.99 lifetime. Keep private notes free of advertising.
GO: free core travel map with ads; $1.99 monthly; $14.99 yearly; $7.99 lifetime.
Travel Journal: free local starter journal; $2.99 monthly; $24.99 yearly; $4.99 app purchase. Explain any separate cloud membership distinctly.
SAY: free starter lessons with ads; $3.99 monthly; $34.99 yearly; no one-time purchase.
TTS Widget: free with ads; no membership; $2.99 one-time remove-ads purchase.
Player: free local player with ads outside playback; $1.99 monthly; $14.99 yearly; $7.99 lifetime.
AI Cash Portfolio: free basic portfolio view, no ads; $7.99 monthly; $79.99 yearly; no one-time purchase.
Cash Portfolio: free watchlist/basic tracking, no ads; $2.99 monthly; $24.99 yearly; $9.99 lifetime.
CashDublo Coder: free local coding basics; $9.99 monthly; $99.99 yearly; no one-time purchase.
App Translator: limited free translation trial; $14.99 monthly; $149.99 yearly; no one-time purchase.
AI Teacher: limited free lessons, no ads in student sessions; $7.99 monthly; $79.99 yearly; no one-time purchase.
Contracts: limited free templates, no ads; $4.99 monthly; $49.99 yearly; $19.99 lifetime.
Apple2Player: $4.99 one-time.
Dear Idea Desktop: $19.99 one-time.
GitHub HQ: $4.99 one-time.
Script-Run: $4.99 one-time.
Change App Icons: $2.99 one-time.
Build Manager: $9.99 one-time.
Rebuild-All: $4.99 one-time.
PodEdPro: $4.99 one-time.
Galaxy Repeat: $4.99 one-time.
Best Mac File Manager: $9.99 one-time.
Patent It!: limited free educational overview; $9.99 one-time.
Crash Catcher: free basic local log capture; $2.99 one-time.
Wi-Fi Tether: $3.99 one-time.
Apple Dextop: $9.99 one-time.
Secure Mac Remote Terminal: $9.99 one-time, paid app, no ads.

## 10. Free tier and advertising recommendations
The recommended ad-supported free apps are:
- Mixology
- PictureGlobe
- Testra Accuracy
- GO
- SAY
- TTS Widget
- Player

Advertising rules:
- Ads must be clearly identifiable and non-deceptive.
- No ads during tests, speaking practice, navigation/safety workflows, photo viewing, or music playback.
- No ad targeting based on personal finance information, legal documents, private notes, voice recordings, or sensitive personal content.
- Provide the stated one-time remove-ads purchase where applicable.
- Never make the free tier unusable just to force an upgrade.

Recommended free-first apps without ads:
- Marvin
- Dear Idea
- Travel Journal

Keep private journals, notes, and personal content ad-free. Any optional paid tier must add a clearly described benefit rather than withholding a user's own data.

Other products may have a free trial or free core tier without being part of the ad-supported group. Do not automatically add ads to every free app.

## 11. Payment and membership system requirements
This section defines a future payment implementation. It is not evidence that billing is currently connected.

A real payment system must support:
- One-time purchases.
- Monthly recurring subscriptions.
- Yearly recurring subscriptions.
- Free plans.
- Optional free trials only when explicitly configured.
- Plan and feature entitlements per application.
- User identity and account linking across devices where the product requires it.
- Purchase restoration for mobile app stores.
- Subscription status, renewal date, cancellation state, grace period, refunds, chargebacks, and failed-payment state.
- Webhooks or equivalent trusted provider notifications to update entitlements.
- Server-side verification for paid entitlements; never trust a client-only "paid" flag.
- Receipts and a customer-visible billing history where supported.
- Clear price, billing interval, renewal terms, taxes, cancellation method, and refund policy before purchase.
- A secure account and payment provider; never store raw card numbers or security codes in CashDublo application databases.
- Separate product IDs and entitlement rules for each app and plan.
- A way for the owner/admin to change prices and plan availability without rewriting unrelated app pages.
- A test/sandbox mode and a checklist before any live billing launch.

Payment providers, merchant accounts, tax registrations, app-store agreements, and legal terms must be chosen and approved by the owner. The implementing AI must not create accounts, incur costs, publish products, or enable live charges without explicit authorization.

## 12. My Source Code page
Canonical route: /code.html.
Keep the "My Source Code" tab in the global menu.
The page is a visual placeholder only. It may display cards with blurred, low-opacity silhouettes suggesting hidden content. The contents must not be readable or selectable.
No card may link to GitHub, a repository, a source file, a commit, or a code viewer.
No actual source code should be embedded in the page, even if blurred. Blur is a visual treatment, not a security boundary. Do not put secrets, code, repository names, or private metadata into the page and rely on CSS blur to hide them.
The page must communicate that implementation details are private without exposing them.

## 13. Front ends, games, courses, newsletter, privacy and about
Maintain dedicated catalogue/landing pages for front ends, games, courses, newsletter, privacy and about content.
Each entry should link to a public explanatory page where one exists.
Never expose a private repository link as a substitute for a product overview.
Privacy content must accurately describe actual data practices, cookies, analytics, ads, payment providers, account deletion, and contact channels. Unknown policy details must be marked for owner review, not fabricated.
Games and courses should have clear product descriptions, status, platform information and pricing if applicable.

## 14. Data model required for future maintenance
Maintain a structured record per app with these fields:
- stable_id
- public_name
- slug
- icon_asset_path
- short_description
- long_description
- current_version
- release_status
- supported_platforms
- store_urls
- public_overview_url
- free_tier_description
- ad_supported (true/false/unknown)
- one_time_price_usd
- monthly_price_usd
- yearly_price_usd
- lifetime_price_usd
- plan_feature_differences
- payment_provider_product_ids
- privacy_summary
- permissions
- data_storage_location
- export_and_delete_process
- support_contact
- last_verified_date
- owner_approval_status
- evidence_reference

Use null/unknown for missing values, not fabricated defaults. Keep the product catalogue as the single source of truth and derive the catalogue, pricing page, app overview pages, and platform pages from that data where practical. Prevent the same price or version from drifting between pages.

## 15. Accessibility, responsiveness, performance and quality
The website must work on phones, tablets, laptops and large screens.
Use responsive layouts; do not assume desktop-only widths.
Make all navigation and card actions keyboard accessible.
Provide meaningful alt text for icons and images.
Use semantic headings and landmarks.
Ensure readable contrast and visible focus indicators.
Avoid layout shifts from images and fonts.
Optimize image sizes, lazy-load below-the-fold imagery, and avoid unnecessary scripts.
Do not let decorative elements block taps or keyboard access.
Test all links, page routes, mobile menu behavior, app detail links, pricing links, and responsive layouts.

## 16. Search engine and sharing requirements
Each page should have a unique descriptive title and summary.
App overview pages should have app-specific metadata.
Provide canonical URLs and social sharing metadata where supported.
Avoid indexing the blurred source preview as a product information page if it adds no useful public content.
Do not publish internal identifiers or source repository URLs in metadata.

## 17. Owner approval and change control
Treat these as owner-controlled items:
- Final prices and discounts.
- App names and brand names.
- Public biography and contact details.
- Product features and release claims.
- Store links and supported platforms.
- Ad placement and advertising providers.
- Payment providers, account creation, live billing and refund terms.
- Privacy/legal terms.
- Any new public links to external services.

The AI may draft and implement reversible content changes in a development branch when authorized. It must not launch live payments, publish legal claims, spend money, change permissions, or deploy a release without separate approval.

## 18. Acceptance checklist for any AI rebuilding this website
A rebuild is not complete until all of the following are true:
- The site is presented as CashDublo, not as GitHub.
- Every catalogue app has a stable public overview route.
- Every app icon, app name and version/status label links to its matching overview.
- Pricing cards link by icon and name to the matching overview.
- Pricing displays the four requested columns in the correct order.
- Every proposed price is visibly marked as an estimate in USD.
- Free ad-supported and free no-ad recommendations are separated.
- Sensitive workflows and personal content are protected from ad placement and ad targeting.
- "My Source Code" remains in navigation, but its page contains no source code or repository links.
- No accidental dead links or broken pages remain.
- All platform and version claims are supported by verified product records.
- The payment page does not imply live billing unless the full payment system is implemented and tested.
- The site is responsive, accessible, and usable on phone, tablet and desktop.
- The owner has reviewed all content requiring approval.

End of module.
