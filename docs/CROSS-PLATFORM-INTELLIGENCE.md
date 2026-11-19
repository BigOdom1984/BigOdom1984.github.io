# CashDublo Cross-Platform Intelligence

Last updated: 2026-11-20

## Purpose

The Cross-Platform Intelligence module is the canonical classification system for applications across CashDublo repositories. One product may have Android, iOS, desktop, and browser implementations in separate repositories; the catalogue joins them under one application identity and lists all evidenced targets.

## What the module records

Each application record contains:

- Stable application ID and display name.
- Product category (for example Finance & Investing, Developer Tools, Education, or Travel & Planning).
- Application type (mobile, desktop, web-capable, or multi-platform).
- Plain-language job title describing the application's specific job.
- Every source repository that implements the product.
- Operating systems and delivery platforms.
- Evidence status: documented target, development target, planned, or unverified.
- Enterprise menu placement: Applications → All Apps.
- Additional front-end menu placement: Web Front Ends, Desktop Front Ends, and/or Mobile Front Ends.

## API

The current catalogue endpoint is:

`GET https://cashdublo.vercel.app/api/applications`

A single record can be requested by ID:

`GET https://cashdublo.vercel.app/api/applications?id=travel-journal`

The repository evidence analyzer is:

`POST https://cashdublo.vercel.app/api/applications`

It accepts `{"action":"analyze","repository":{...}}` and returns a proposal. The POST route is disabled until the server-side `CROSS_PLATFORM_ANALYSIS_KEY` is configured. It never writes the catalogue automatically.

The canonical source file lives in the private CashDublo server repository at `data/application-catalog.json`; the module specification and analyzer live in `modules/cross-platform-intelligence-module/` and `lib/cross-platform-intelligence.js`.

## Evidence and review

Manifest and build-target configuration take priority over README claims. A repository's existence does not prove that an app builds or has been published. Planned targets remain planned. A companion website is not counted as a browser app unless the product itself runs in the browser. Separate product repositories are joined only when they are clearly implementations of the same product.

The current 34-application inventory is a baseline. The protected analyzer can now scan up to 10 supplied BigOdom1984 repositories directly through the GitHub API when CROSS_PLATFORM_ANALYSIS_KEY and CROSS_PLATFORM_GITHUB_TOKEN are configured. It inspects each default-branch tree, README, package/app manifests, and platform-specific project paths, including separate repositories for one product. The scanner returns a proposal only; it never commits catalogue or navigation changes automatically.

## Sign-in entry

The public site now includes a persistent Log in entry at the left side of the top header. It opens `/login.html` with Google, Apple, GitHub, Microsoft, and email/password options. The page uses the public Supabase Auth client configuration from `GET https://cashdublo.vercel.app/api/auth-config`. In Supabase Auth URL Configuration, set the Site URL to `https://bigodom1984.github.io` and allow `https://bigodom1984.github.io/login.html` as a redirect URL. Enable Google, Apple, GitHub, and Azure (Microsoft) in Supabase and configure each provider's OAuth client credentials; provider callback URLs are shown by Supabase.

Sign-in is dormant until the server has `SUPABASE_URL` and `SUPABASE_ANON_KEY`, and each social provider is enabled in Supabase Auth with the correct OAuth credentials and redirect URLs. The Supabase anon key is public by design; never expose a service-role key. Enable Row Level Security on every table containing customer data and write policies before storing customer records. Customer sign-in is separate from owner dashboard access and app API authentication.
