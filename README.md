# CashDublo Apps - the showcase site

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
