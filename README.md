# CashDublo Apps - the showcase site

What this is: the public web page for CashDublo apps. It shows each app with its
icon, a short line about what it does, and a download button. It is the site
GitHub Pages serves at bigodom1984.github.io.

How the download buttons work: the buttons fill themselves in when the page
loads. The page asks GitHub for the newest release of each app's own repo. If a
release is there, the button shows that version and points at the download
file. If no build has been released yet, the button says "Coming soon". Nobody
has to edit the page when a new build lands - the button finds it on its own.

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
