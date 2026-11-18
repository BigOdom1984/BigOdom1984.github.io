# CashDublo Website RSS Publisher

**Status:** Initial implementation specification  
**Website:** https://bigodom1984.github.io/  
**Primary RSS app:** Cash the Flow RSS (receiver/subscriber)  
**Direction:** Website → RSS app. The website publishes; it does not subscribe to or read feeds.

## Product boundary

The CashDublo website is an RSS publisher for CashDublo-authored announcements. The Cash the Flow RSS app is a separate RSS reader/subscriber. It subscribes to the website's public feeds and may independently subscribe to other publishers. Do not build an RSS reader into the website as part of this feature.

## Public feed endpoints

- `/feeds/cashdublo.xml` — all CashDublo website announcements.
- `/feeds/news.xml` — newsletter and company news.
- `/feeds/apps.xml` — app releases, feature updates and app notices.

The feed files are static RSS 2.0 documents served by GitHub Pages. A GitHub Actions workflow regenerates them from `feeds/items.json` whenever the feed source data or generator changes on the default branch. No production API, crawler, database, domain, DNS, billing, or hosting account is changed by this publisher.

## Editorial source of truth

Maintain feed entries in `feeds/items.json`. Each item must include:
- stable unique `id`;
- title and plain-language description;
- absolute canonical article URL;
- ISO-8601 publication timestamp including timezone;
- category (for example `news`, `apps`, `website`, `travel-life`);
- optional author.

Use only content CashDublo is authorized to publish. Do not copy full third-party articles into the feed. Link to original sources and use short, attributed excerpts when relevant.

## RSS compatibility

- RSS 2.0, UTF-8 XML.
- Stable GUIDs with `isPermaLink="false"`.
- RFC 822-compatible publication dates.
- Escaped XML text; no untrusted HTML/script execution.
- Absolute HTTPS links.
- `Content-Type: application/rss+xml; charset=utf-8` is recommended by the host; GitHub Pages may infer MIME type from `.xml`.
- Keep a reasonable recent-item window (default 50) and newest-first ordering.

## Reader integration

Cash the Flow RSS subscribes to the general feed by default. Users may add the news and apps feeds separately. The app must poll politely, support ETag/Last-Modified when available, deduplicate by GUID, preserve original article links and publication dates, and show stale/offline/error states honestly.

The app's wider discovery categories remain Technology, Travel, Finance, Health, and AI & Science. Those are reader-side source/topic categories; they do not imply that the website publishes financial, medical, or third-party news.

## Update procedure

1. Add or edit an item in `feeds/items.json`.
2. Validate the JSON locally with `node -e "JSON.parse(require('fs').readFileSync('feeds/items.json','utf8'))"`.
3. Run `node scripts/build-rss.mjs`.
4. Review the generated files in `feeds/`.
5. Commit the source item and generated feeds together. GitHub Actions also runs the generator as a consistency check and commits generated output if it differs.

## Acceptance checks

- All three feed URLs return valid RSS 2.0 XML.
- XML parses with a standard RSS parser.
- Every item has a stable GUID, title, description, link and publication date.
- Feed links appear on the Newsletter page and the RSS directory page.
- The website has no inbound RSS subscriptions or feed-reading UI.
- Cash the Flow RSS can subscribe to the public general feed without an account.
