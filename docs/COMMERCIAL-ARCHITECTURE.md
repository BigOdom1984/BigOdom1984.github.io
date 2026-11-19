# CashDublo Commercial Architecture & Pricing Rules

Last updated: 2026-11-20

## Purpose
Keep every charge attached to the product or entitlement the customer actually receives. The App Store is the distribution and commerce layer; it is not a compulsory membership.

## Product ownership
1. **Standalone apps** own their app memberships, one-time purchases, free tiers and usage limits. The canonical proposed app price schedule is published in `/memberships.html`. App catalogue cards mirror those values and link to the matching pricing record.
2. **Storyline Engine** owns engine/runtime licensing. It does not automatically include authoring tools or purchases of individual games.
3. **Storyline Studio (Game Studio)** owns authoring-tool access. It may be sold separately or bundled with engine access only when the bundle defines the exact included capabilities and limits.
4. **Storyline Console** owns player/library access. Player access is not the same entitlement as developer access.
5. **Web Engine** owns web runtime/publishing access. Hosting, bandwidth, storage, deployment, and support limits must be costed before a price is approved.
6. **Web Studio** owns web authoring tools. It is not automatically a hosting plan or a licence to every published product.
7. **Published web apps and web games** own their own purchases or memberships. A platform membership must not silently become a per-title purchase.
8. **Course enrollment** is an educational product entitlement, separate from web platform access.

## Anti-double-charge rules
- Travel Journal Web is a browser companion to Travel Journal. Shared sync/storage entitlements belong to Travel Journal's membership; do not charge a second web membership for the same benefits.
- A customer who buys a game does not thereby receive engine authoring rights.
- An engine or studio member does not automatically own paid games.
- Hosting, compute, AI usage, storage and support may be separately metered only when clearly disclosed before purchase.
- Bundles are allowed, but list each included entitlement, usage cap, renewal interval, cancellation rule and what remains available after cancellation.

## Price status vocabulary
- **Proposed / estimated:** planning figure only; not a live offer.
- **Approved:** owner has explicitly approved the amount and commercial terms.
- **Published:** price and terms are visible to customers.
- **Active:** checkout and entitlement enforcement are implemented and tested.
- **Not set:** no price has been invented or implied. Do not collect payment.

## Current platform pricing decisions
As of this update, Storyline Engine, Storyline Studio, Storyline Console, Web Engine, Web Studio, Storyline — HACKED, Name That Flag and CashDublo Online Course have no approved price. They are explicitly marked **Not set** on the pricing guide and relevant product pages.

## Change procedure
1. Update the canonical pricing record on `memberships.html`.
2. Mirror the approved/proposed price on the matching product card in `apps.html`, `games.html` or `front-ends.html`.
3. Keep the App Store page as a summary of commerce capabilities and link to the canonical pricing guide.
4. Verify the displayed price, free tier, one-time purchase, billing interval, included features and cancellation language match.
5. Do not enable checkout until payment processing, receipts, taxes, refund rules, privacy terms and entitlement enforcement are implemented and tested.

## Important status
All current dollar amounts in the app pricing guide are **proposed estimates**, not confirmed store prices or active charges. Platform and title prices marked **Not set** are intentionally left blank pending product scope and cost review.
