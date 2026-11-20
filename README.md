# CashDublo Apps - the showcase site

## The versions — every AI's take on the official website

- **The official website (live):** https://bigodom1984.github.io/
- **ChatGPT's version:** https://bigodom1984.github.io/all%20websites/ChatGPT/
- **Onyx's version:** https://bigodom1984.github.io/all%20websites/muse/
- **Grok's version:** https://bigodom1984.github.io/all%20websites/Grok/

Each AI that builds a version of the official website gets its
folder in this repo and its link in this list, added as it lands.


What this is: the public web page for CashDublo apps. It shows each app with its
icon, a short line about what it does, and a download button. It is the site
GitHub Pages serves at bigodom1984.github.io.

How the download buttons work: the buttons fill themselves in when the page
loads. The page asks GitHub for the release list of this site repo itself. A
demo build made on the Mac with an app's demo build script is published here as
a release named <app>-demo-v<version>, with the demo file (an .apk) inside. If
a card finds its app's newest demo release, the button says "Download free
demo v<version>" and points at the demo file. If no demo has been published
yet, the button says "Coming soon". Nobody has to edit the page when a new
demo lands - the button finds it on its own. (The full apps stay in their own
private repos - only the free demos are public, right here.) Apple2Player has
no demo build, so its button stays on "Coming soon" for now.

How to update the site: change the files in this repo and push. GitHub Pages
puts the new files live on its own, usually within a few minutes.

- index.html - the showcase page (the app cards and the tools strip).
- privacy.html - the privacy policy page for all the apps. The app stores ask
  for this page's web address.
- 404.html - the page shown when a link points nowhere.
- img/ - the app icons and the CashDublo logo used on the page, kept small so
  the page loads fast.

The page uses no trackers and no outside fonts or code. The only outside call
it makes is the one to GitHub for the release list.


## Change control and AI accountability

Website-only change history and multi-AI contribution rules live in [`changes/`](changes/README.md). This public website repository maintains its own scoped change log; the cross-repository master change log, task assignments, approvals, and verification records remain in [AI2AISync](https://github.com/BigOdom1984/ai2ai_sync). Private proposed patches and confidential evidence do not belong in this public repository.


## Products catalogue
- Public Products page: https://bigodom1984.github.io/products.html
- The page lists only approved catalogue entries and distinguishes planned/research status from products actually available to buy. No purchase links or active checkout are claimed.


## Responsive layout and hosting

The shared `assets/site-navigation.css` now carries the site-wide mobile layout guard: viewport overflow control, responsive navigation, full-bleed section backgrounds, and safer sizing for cards, tables, media, and forms. It is shared by the website pages that load the common navigation.

The static website is configured for four hosting targets: GitHub Pages, Cloudflare Pages, Vercel, and Netlify. See [HOSTING.md](HOSTING.md) for the exact build/output settings and the important distinction between static-site hosting and the separate production API runtime.


## Which website is the real one

Only one website in this repository is operational: the website at
the root of this repository. It is the master copy, and it is the
website being built to replace the production server. When it is
ready, Muse takes the entire website from the root of this
repository and applies it to the service — its theme and its
layout. That is the replacement, update, and change process.

The websites in the "all websites" folder are not operational.
That folder is a testing ground, a proving ground, and a
change-up ground: each AI keeps its own version there, builds it
its own way on the same structure, and the winning ideas and
themes are pulled up into the root. Nothing in that folder is
the production website, and nothing in it goes live on its own.

Websites on other services that serve the production site are
called by the name of their service, so they are never confused
with the root website here: the **Vercel production site** and
the **Cloudflare production site**. Any folder that holds a
production website — a Vercel production site, a Cloudflare
production site, or a production site on any other service —
belongs in the "cashtheblow.com production servers" folder,
labeled with the name of its service.
