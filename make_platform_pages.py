#!/usr/bin/env python3
"""Build the platform pages and the Home-button platform menu.

Cash's order (2026-11-15): under the Home button there is a
drop-down menu listing his platforms, and clicking a platform
shows the apps for that platform on a new page.

Pages built from the live catalogue's own cards (apps.html),
classified by each card's own SOURCE label:
  android.html - the 15 ANDROID cards
  mac.html     - the 9 cards labeled MAC (incl. MAC & WINDOWS)
  windows.html - the 4 cards labeled WINDOWS / MAC & WINDOWS
  iphone.html  - the 8 planned iPhone versions named in the
                 website inventory (Dear Idea, GO, Travel
                 Journal, SAY, TTS Widget, AI Cash Portfolio,
                 Cash Portfolio, Player), status Planning,
                 built from their Android cards with the store
                 links removed (nothing is on the App Store yet)
  linux.html - the 8 desktop tools that will install to Linux
                 (the President's order, 2026-11-15)
The Home link in the header gains a drop-down (pure CSS,
hover/focus) listing Android, iPhone, Mac, Windows.
index.html gets the same menu under its brand (its home button).
"""
import re, os

HERE = os.path.dirname(os.path.abspath(__file__))
apps = open(os.path.join(HERE, "apps.html")).read()

head = apps[: apps.index("</head>") + len("</head>")]
footer_note = re.search(r'<div class="note">.*?</div>', apps, re.S).group(0)
footer = re.search(r"<footer>.*?</footer>", apps, re.S).group(0)

cards = {}
for m in re.finditer(r'<article class="card" id="([^"]+)">.*?</article>', apps, re.S):
    cards[m.group(1)] = m.group(0)
assert len(cards) == 33, len(cards)

ANDROID = ["ai2aisync", "voice-model", "marvin", "pictureglobe", "mixology",
           "hit-record", "testra-accuracy", "dear-idea", "go", "travel-journal",
           "say", "tts-widget", "player", "ai-cash-portfolio", "cash-portfolio",
           "podedpro", "galaxy-repeat", "patent-it", "crash-catcher",
           "wifi-tether", "ai-teacher", "contracts"]
MAC = ["apple2player", "dear-idea-desktop", "github-hq", "script-installer",
       "change-app-icons", "cashdublo-coder", "app-translator",
       "build-manager", "rebuild-all", "best-mac-file-manager",
       "apple-dextop"]
WINDOWS = ["apple2player", "dear-idea-desktop", "change-app-icons",
           "cashdublo-coder", "podedpro"]
LINUX = ["dear-idea-desktop", "github-hq", "script-installer",
         "change-app-icons", "cashdublo-coder", "app-translator",
         "build-manager", "rebuild-all"]
IPHONE = ["dear-idea", "go", "travel-journal", "say", "tts-widget",
          "ai-cash-portfolio", "cash-portfolio", "player", "patent-it", "podedpro", "contracts"]

# The front ends, in the order the Front Ends drop-down lists
# them (the President's order, 2026-11-15). The full record for
# each one is in the FRONT_ENDS table further down.
FE_MENU = [("showcase", "CashDublo Showcase"),
           ("online-course", "CashDublo Online Course"),
           ("server", "CashDublo Server"),
           ("travel-journal-web", "Travel Journal Web"),
           ("marvin-web", "Marvin's Website")]

def menu(prefix=""):
    """The canonical nav links. Cash's order (2026-11-15): a
    Front Ends button sits after All apps; it carries a
    drop-down of every front end, and the button itself opens
    the front-ends overview page. Pages inside front-ends/
    pass prefix="../" so every link steps up one folder.
    Later the same day the President ordered every app's front
    end and back end into the same drop-down: after the five
    front ends and a separator, every app is listed by name,
    linking to its own block on the overview page."""
    fe_links = "".join(
        f'<a href="{prefix}front-ends/{slug}.html">{name}</a>'
        for slug, name in FE_MENU)
    app_links = "".join(
        f'<a href="{prefix}front-ends.html#app-{slug}">{name}</a>'
        for slug, name in APP_MENU)
    return (f'<a href="{prefix}index.html">Home</a>'
            '<a href="#comments" data-cd-open>Comments</a>'
            f'<span class="pmenu"><a href="{prefix}apps.html">All apps</a>'
            '<span class="plist">'
            f'<a href="{prefix}android.html">Android</a>'
            f'<a href="{prefix}iphone.html">iPhone</a>'
            f'<a href="{prefix}mac.html">Mac</a>'
            f'<a href="{prefix}windows.html">Windows</a>'
            f'<a href="{prefix}linux.html">Linux</a>'
            '</span></span>'
            f'<span class="pmenu"><a href="{prefix}front-ends.html">Front Ends</a>'
            f'<span class="plist">{fe_links}'
            '<span class="psep">Every app — front &amp; back end</span>'
            f'{app_links}</span></span>')

# ----------------------------------------------------------------
# Every app — front end & back end (the President's order,
# 2026-11-15, later): the Front Ends drop-down and the
# front-ends overview also carry every application — what its
# front end is (the app itself, on the platforms it installs
# to) and what stands behind it. The back-end words are the
# fleet's honest state, from the fleet record of 2026-11-15:
# the shared CashDublo Server is the back end the apps are
# designed to talk to (check-ins, licensing, updates, the
# error inbox), and its door is dormant until its key is set;
# the apps that are local by design say so. Nothing here
# claims a live per-app back end that does not exist.

SHARED_BACKEND = ("CashDublo Server (shared) \u2014 door dormant "
                  "until its key is set")

BACKEND = {
 "galaxy-repeat": "None \u2014 no internet, by design",
 "best-mac-file-manager": "None \u2014 no network, by design",
 "patent-it": "None \u2014 sealed on the device; it never transmits",
 "podedpro": "None \u2014 it talks to earbuds, not a server",
 "crash-catcher": "Local only \u2014 the error-inbox door on the "
                  "server is TBA",
 "travel-journal": SHARED_BACKEND + "; plus its own web back end "
                  "(Travel Journal Web) \u2014 dormant until its "
                  "deploy keys are set",
}

# Apps whose web face is one of the five platform front ends:
# their block on the overview links across to it.
WEBFACE = {
 "travel-journal": ("travel-journal-web", "Travel Journal Web"),
 "marvin": ("marvin-web", "Marvin's Website"),
}

# Apps with no catalogue card yet. Their front/back record is
# carried here so the Front Ends listing covers every app;
# versions and stages are from their own records of 2026-11-15.
EXTRA_APPS = [
 dict(slug="galaxy-repeat", name="Galaxy Repeat",
      version="0.3.0", chip="DEVELOPMENT", chipclass="st-yellow",
      plats="IOS \u00b7 ANDROID",
      repo="https://github.com/BigOdom1984/galaxy-repeat"),
 dict(slug="best-mac-file-manager", name="Best Mac File Manager",
      version="0.1.1", chip="DEVELOPMENT", chipclass="st-yellow",
      plats="MAC",
      repo="https://github.com/BigOdom1984/best-mac-file-manager"),
 dict(slug="patent-it", name="Patent It!",
      version="0.1.0", chip="DEVELOPMENT", chipclass="st-yellow",
      plats="IOS \u00b7 ANDROID",
      repo="https://github.com/BigOdom1984/patent-it"),
 dict(slug="crash-catcher", name="Crash Catcher",
      version="0.1.0", chip="DEVELOPMENT", chipclass="st-yellow",
      plats="ANDROID",
      repo="https://github.com/BigOdom1984/crash-catcher"),
 dict(slug="podedpro", name="PodEdPro",
      version="0.1.0", chip="DEVELOPMENT", chipclass="st-yellow",
      plats="WIN \u00b7 ANDROID",
      repo="https://github.com/BigOdom1984/podedpro"),
]

def card_name(slug):
    return re.search(r'<h2><a href="[^"]+">([^<]+)</a></h2>',
                     cards[slug]).group(1)

def card_status(slug):
    return re.search(r'<span class="status">(.*?)</span>\s*<h2>',
                     cards[slug], re.S).group(1)

# The order the drop-down and the overview list the apps in:
# the catalogue's own order first, then the apps that have
# no card yet, oldest first.
APP_MENU = ([(s, card_name(s)) for s in cards]
            + [(e["slug"], e["name"]) for e in EXTRA_APPS])
APP_SLUGS = [s for s, _name in APP_MENU]

MENU = menu("")

PMENU_CSS = (".pmenu{position:relative;display:inline-block}"
             ".plist{display:none;position:absolute;top:100%;left:0;"
             "background:#ffffff;border:1px solid #d8d2c2;border-radius:12px;"
             "padding:8px;min-width:180px;z-index:60;"
             "box-shadow:0 14px 34px rgba(20,20,20,.18)}"
             ".plist a{display:block;padding:8px 12px;border-radius:8px;"
             "text-decoration:none;font-weight:700;color:#22252a;"
             "font-size:.95rem}"
             ".plist a:hover{background:#f3efe2;text-decoration:none}"
             ".pmenu:hover .plist,.pmenu:focus-within .plist{display:block}")

# The Front Ends drop-down now also lists every app (the
# President's order, 2026-11-15, later): the list is long, so
# it scrolls, and a labeled separator divides the five front
# ends from the apps. The same block styles the per-app
# section heading on front-ends.html. It rides in its own
# marked block so pages that already carry PMENU_CSS still
# pick it up.
FE_APP_CSS = ("/*FEAPPS*/"
              ".plist{max-height:74vh;overflow-y:auto}"
              ".psep{display:block;border-top:1px solid #d8d2c2;"
              "margin:7px 4px 2px;padding:7px 12px 1px;"
              "font-size:.7rem;font-weight:800;letter-spacing:.12em;"
              "text-transform:uppercase;color:#8a8272}"
              ".fe-h{font-size:2rem;letter-spacing:-.04em;"
              "margin:46px 0 6px}"
              ".fe-sub{color:var(--muted);max-width:760px;"
              "margin:0 0 20px}")

def fe_css(h):
    if "/*FEAPPS*/" not in h:
        h = h.replace("</style>", FE_APP_CSS + "</style>", 1)
    return h

# ----------------------------------------------------------------
# Welcome popup + comments (the President's order, 2026-11-15,
# later): every page greets a first-time visitor with a popup
# carrying his thank-you, and every page carries the same two
# comment doors — a Comments link beside Home in the header and
# a floating Comment button that stays on screen while the
# visitor scrolls — both opening one comment panel. The panel
# sends through the visitor's own email app to
# CashDublo@gmail.com: this is a static site with no server
# door of its own, so nothing is posted on the page and
# nothing pretends to be. The block is ONE shared block: the
# page builders append it, cd_add() patches it into the
# hand-kept pages, and its CSS rides in its own marked block,
# the same pattern as the Front Ends app CSS above. Colors are
# written out, not var(), so the block looks the same on the
# privacy page, whose own palette differs.
CD_CSS = ("/*CDWIDGET*/"
          ".cd-overlay{position:fixed;inset:0;z-index:120;"
          "background:rgba(23,45,43,.55);display:flex;"
          "align-items:center;justify-content:center;padding:16px}"
          ".cd-overlay[hidden]{display:none}"
          ".cd-card{background:#fffdf8;color:#172d2b;"
          "border:1px solid #d8d4c9;border-radius:22px;"
          "max-width:430px;width:100%;max-height:calc(100vh - 32px);"
          "overflow:auto;padding:26px;position:relative;"
          "box-shadow:0 24px 60px rgba(20,20,20,.35)}"
          ".cd-card h2{margin:0 40px 10px 0;font-size:1.45rem;"
          "letter-spacing:-.03em;line-height:1.15}"
          ".cd-card p{color:#596d68;margin:0 0 14px}"
          ".cd-x{position:absolute;top:12px;right:12px;width:36px;"
          "height:36px;border-radius:50%;border:1px solid #d8d4c9;"
          "background:#fffdf8;color:#172d2b;font-size:1.3rem;"
          "line-height:1;cursor:pointer}"
          ".cd-x:hover{background:#f3efe2}"
          ".cd-btn{display:inline-block;background:#c9ed72;"
          "color:#172d2b;border:1px solid #172d2b;border-radius:999px;"
          "padding:11px 20px;font:inherit;font-weight:850;cursor:pointer}"
          ".cd-btn.alt{background:transparent}"
          ".cd-row{display:flex;gap:10px;flex-wrap:wrap}"
          ".cd-card label{display:block;font-weight:800;margin:0 0 12px}"
          ".cd-card input[type=text],.cd-card textarea{display:block;"
          "width:100%;margin-top:6px;padding:11px 12px;"
          "border:1px solid #d8d4c9;border-radius:12px;font:inherit;"
          "font-weight:400;background:#ffffff;color:#172d2b;"
          "box-sizing:border-box}"
          ".cd-note{font-size:.9rem}"
          ".cd-fab{position:fixed;right:16px;"
          "bottom:calc(16px + env(safe-area-inset-bottom));z-index:90;"
          "display:inline-flex;align-items:center;gap:8px;"
          "background:#193d39;color:#f5f0e6;border:1px solid #c9ed72;"
          "border-radius:999px;padding:11px 16px;font:inherit;"
          "font-weight:850;font-size:.95rem;cursor:pointer;"
          "box-shadow:0 12px 28px rgba(20,20,20,.3)}"
          ".cd-fab svg{width:18px;height:18px;flex:none}"
          ".cd-fab:hover{background:#172d2b}"
          "@media(max-width:550px){.cd-fab{right:12px;"
          "bottom:calc(12px + env(safe-area-inset-bottom));"
          "padding:10px 13px;font-size:.9rem}"
          ".cd-card{padding:22px 18px}}")

def cd_css(h):
    if "/*CDWIDGET*/" not in h:
        h = h.replace("</style>", CD_CSS + "</style>", 1)
    return h

CD_BLOCK = """
<div class="cd-overlay" id="cd-welcome" hidden><div class="cd-card" role="dialog" aria-modal="true" aria-label="Welcome"><button class="cd-x" type="button" data-cd-close="cd-welcome" aria-label="Close">&times;</button><h2>Welcome.</h2><p>Thank you for visiting your friend's store, and he appreciates your time to browse it \u2014 your time that you're using to browse his catalog.</p><p>Feel free to leave a comment while you're here \u2014 it goes straight to Greg.</p><div class="cd-row"><button class="cd-btn" type="button" data-cd-close="cd-welcome">Browse the catalog</button><button class="cd-btn alt" type="button" data-cd-open>Leave a comment</button></div></div></div>
<button class="cd-fab" id="cd-fab" type="button" data-cd-open aria-label="Leave a comment"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5z" fill="none" stroke="#c9ed72" stroke-width="2" stroke-linejoin="round"/></svg><span>Comment</span></button>
<div class="cd-overlay" id="comments" hidden><div class="cd-card" role="dialog" aria-modal="true" aria-label="Leave a comment"><button class="cd-x" type="button" data-cd-close="comments" aria-label="Close">&times;</button><h2>Leave a comment.</h2><p>Comments go straight to Greg's inbox. Write yours here, and your own email app will open with it addressed to him, ready for you to send.</p><form id="cd-form"><label>Your name<input type="text" id="cd-name" autocomplete="name" placeholder="Your name"></label><label>Your comment<textarea id="cd-comment" rows="5" required placeholder="Say it here"></textarea></label><button class="cd-btn" type="submit">Send it to Greg</button><p class="cd-note" id="cd-sent" hidden>Your email app should be opening now \u2014 press send there and it reaches Greg. Nothing is posted on this page.</p></form></div></div>
<script>
(function(){
"use strict";
function byId(i){return document.getElementById(i);}
var welcome=byId("cd-welcome"),panel=byId("comments");
function show(e){if(e){e.hidden=false;}}
function hide(e){if(e){e.hidden=true;}}
function openPanel(){hide(welcome);show(panel);var t=byId("cd-comment");if(t){t.focus();}}
var openers=document.querySelectorAll("[data-cd-open]"),i;
for(i=0;i<openers.length;i++){openers[i].addEventListener("click",function(ev){ev.preventDefault();openPanel();});}
var closers=document.querySelectorAll("[data-cd-close]");
for(i=0;i<closers.length;i++){closers[i].addEventListener("click",function(){hide(byId(this.getAttribute("data-cd-close")));});}
[welcome,panel].forEach(function(ov){if(ov){ov.addEventListener("click",function(ev){if(ev.target===ov){hide(ov);}});}});
document.addEventListener("keydown",function(ev){if(ev.key==="Escape"){hide(welcome);hide(panel);}});
var seen=false;
try{seen=!!localStorage.getItem("cdWelcomeSeen");}catch(e){}
if(!seen){show(welcome);try{localStorage.setItem("cdWelcomeSeen","1");}catch(e){}}
var form=byId("cd-form");
if(form){form.addEventListener("submit",function(ev){
ev.preventDefault();
var name=(byId("cd-name").value||"").trim();
var text=(byId("cd-comment").value||"").trim();
if(!text){return;}
var body="Name: "+(name||"(not given)")+"\\nPage: "+location.pathname+"\\n\\n"+text;
window.location.href="mailto:CashDublo@gmail.com?subject="+encodeURIComponent("Website comment")+"&body="+encodeURIComponent(body);
var sent=byId("cd-sent");if(sent){sent.hidden=false;}
});}
})();
</script>
"""

def cd_add(html_text):
    """CSS + the shared block, for the pages the generator
    patches rather than builds (apps, index, privacy). Guarded,
    so re-running the generator never doubles either piece."""
    html_text = cd_css(html_text)
    if 'id="cd-fab"' not in html_text:
        html_text = html_text.replace("</body>", CD_BLOCK + "</body>", 1)
    return html_text



REPO = {
 "ai-cash-portfolio": "https://github.com/BigOdom1984/ai-cash-portfolio",
 "ai2aisync": "https://github.com/BigOdom1984/ai2aisync",
 "app-translator": "https://github.com/BigOdom1984/app-translator",
 "apple2player": "https://github.com/BigOdom1984/apple2player-mac",
 "build-manager": "https://github.com/BigOdom1984/build-manager",
 "cash-portfolio": "https://github.com/BigOdom1984/cash-portfolio",
 "cashdublo-coder": "https://github.com/BigOdom1984/cashdublo-coder",
 "change-app-icons": "https://github.com/BigOdom1984/change-app-icons",
 "dear-idea": "https://github.com/BigOdom1984/dear-idea",
 "dear-idea-desktop": "https://github.com/BigOdom1984/dear-idea-desktop",
 "github-hq": "https://github.com/BigOdom1984/github-hq",
 "go": "https://github.com/BigOdom1984/go",
 "hit-record": "https://github.com/BigOdom1984/hit-record",
 "marvin": "https://github.com/BigOdom1984/marvin",
 "mixology": "https://github.com/BigOdom1984/mixology",
 "pictureglobe": "https://github.com/BigOdom1984/pictureglobe",
 "player": "https://github.com/BigOdom1984/player",
 "rebuild-all": "https://github.com/BigOdom1984/rebuild-all",
 "say": "https://github.com/BigOdom1984/say",
 "script-installer": "https://github.com/BigOdom1984/script-installer",
 "testra-accuracy": "https://github.com/BigOdom1984/testra-accuracy",
 "travel-journal": "https://github.com/BigOdom1984/travel-journal",
 "tts-widget": "https://github.com/BigOdom1984/ttswidget",
 "voice-model": "https://github.com/BigOdom1984/your-voice-model",
 "podedpro": "https://github.com/BigOdom1984/podedpro",
 "galaxy-repeat": "https://github.com/BigOdom1984/galaxy-repeat",
 "patent-it": "https://github.com/BigOdom1984/patent-it",
 "crash-catcher": "https://github.com/BigOdom1984/crash-catcher",
 "wifi-tether": "https://github.com/BigOdom1984/wifi-tether-app",
 "ai-teacher": "https://github.com/BigOdom1984/ai-teacher",
 "contracts": "https://github.com/BigOdom1984/contracts",
 "best-mac-file-manager": "https://github.com/BigOdom1984/best-mac-file-manager",
 "apple-dextop": "https://github.com/BigOdom1984/apple-dextop",
}

# The President's corrected platform rule (2026-11-15): a card's
# bottom line lists ALL the platforms the app will install to,
# in the order MAC \u00b7 WIN \u00b7 LIN \u00b7 IOS \u00b7 ANDROID. Every
# Android app also installs to iOS (its iOS version follows its
# Android 1.0.0), so every Android app's line is IOS \u00b7 ANDROID.
# Desktop programs list exactly the platforms they install to.
# Linux (the President's order, 2026-11-15): the eight desktop
# tools are Python programs, and Linux is now one of the
# platforms they will install to, so their lines carry LIN
# and they alone make up the Linux page.
PLATS = {
 "ai-cash-portfolio": "IOS \u00b7 ANDROID",
 "ai2aisync": "IOS \u00b7 ANDROID",
 "app-translator": "MAC \u00b7 LIN",
 "apple2player": "MAC \u00b7 WIN",
 "build-manager": "MAC \u00b7 LIN",
 "cash-portfolio": "IOS \u00b7 ANDROID",
 "cashdublo-coder": "MAC \u00b7 WIN \u00b7 LIN",
 "change-app-icons": "MAC \u00b7 WIN \u00b7 LIN",
 "dear-idea": "IOS \u00b7 ANDROID",
 "dear-idea-desktop": "MAC \u00b7 WIN \u00b7 LIN",
 "github-hq": "MAC \u00b7 LIN",
 "go": "IOS \u00b7 ANDROID",
 "hit-record": "IOS \u00b7 ANDROID",
 "marvin": "IOS \u00b7 ANDROID",
 "mixology": "IOS \u00b7 ANDROID",
 "pictureglobe": "IOS \u00b7 ANDROID",
 "player": "IOS \u00b7 ANDROID",
 "rebuild-all": "MAC \u00b7 LIN",
 "say": "IOS \u00b7 ANDROID",
 "script-installer": "MAC \u00b7 LIN",
 "testra-accuracy": "IOS \u00b7 ANDROID",
 "travel-journal": "IOS \u00b7 ANDROID",
 "tts-widget": "IOS \u00b7 ANDROID",
 "voice-model": "IOS \u00b7 ANDROID",
 "podedpro": "WIN \u00b7 IOS \u00b7 ANDROID",
 "galaxy-repeat": "ANDROID",
 "patent-it": "IOS \u00b7 ANDROID",
 "crash-catcher": "ANDROID",
 "wifi-tether": "ANDROID",
 "ai-teacher": "ANDROID",
 "contracts": "ANDROID · IOS",
 "best-mac-file-manager": "MAC",
 "apple-dextop": "MAC"
}


def repo_links(card):
    """Cash's order (2026-11-15): the full-information pages are
    removed, so a card's icon and name go to that app's repository.
    The URLs live in the REPO table because most cards' links rows
    carry store searches, not the repository."""
    m = re.search(r'<article class="card" id="([^"]+)"', card)
    if not m or m.group(1) not in REPO:
        return card
    repo = REPO[m.group(1)]
    card = re.sub(r'(<a class="icon-link" href=")[^"]+(")',
                  r'\g<1>' + repo + r'\g<2>', card)
    card = re.sub(r'(<h2><a href=")[^"]+(")',
                  r'\g<1>' + repo + r'\g<2>', card)
    return card

def repo_links_in_page(html_text):
    return re.sub(r'<article class="card" id="[^"]+">.*?</article>',
                  lambda m: repo_links(m.group(0)), html_text, flags=re.S)

def set_plats(card):
    """Set the card's bottom platform line from the PLATS table:
    every platform the app will install to, nothing else changed."""
    m = re.search(r'<article class="card" id="([^"]+)"', card)
    if not m or m.group(1) not in PLATS:
        return card
    return re.sub(r'<div class="plats">.*?</div>',
                  f'<div class="plats">{PLATS[m.group(1)]}</div>', card)

def plats_in_page(html_text):
    return re.sub(r'<article class="card" id="[^"]+">.*?</article>',
                  lambda m: set_plats(m.group(0)), html_text, flags=re.S)

def header(extra_all_apps=False, prefix=""):
    # Cash's nav order (2026-11-15): All apps where About was,
    # Privacy in About's place, About on the right. Front Ends
    # sits between All apps and Privacy (Cash's order, later
    # the same day).
    links = menu(prefix)
    links += f'<a href="{prefix}privacy.html">Privacy</a>'
    links += f'<a href="{prefix}index.html#about">About</a>'
    return (f'<header><a class="brand" href="{prefix}index.html">CASH<span>DUBLO</span></a>'
            f"<nav>{links}</nav></header>")

def page(title, h1, intro, card_html_list, fname):
    h = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", head)
    if ".pmenu{" not in h:
        h = h.replace("</style>", PMENU_CSS + "</style>")
    h = fe_css(h)
    h = cd_css(h)
    body = (header(extra_all_apps=True)
            + f'<section class="hero"><small>The collection</small>'
              f"<h1>{h1}</h1><p>{intro}</p></section>"
            + '<main class="wrap"><div class="grid">'
            + "\n".join(set_plats(repo_links(c)) for c in card_html_list)
            + "</div>" + footer_note + "</main>" + footer + CD_BLOCK + "</body></html>")
    out = h + "<body>" + body
    open(os.path.join(HERE, fname), "w").write(out)
    print(fname, "cards:", len(card_html_list))

def iphone_card(slug):
    c = cards[slug]
    repo = REPO[re.search(r'<article class="card" id="([^"]+)"', c).group(1)]
    c = re.sub(r'(<span class="status">).*?(</span><h2>)',
               lambda m: m.group(1) + '<span class="st st-red">PLANNING</span>' + m.group(2), c)
    c = re.sub(r'<div class="links">.*?</div>',
               f'<div class="links"><a href="{repo}">Project repository \u2197</a></div>',
               c, flags=re.S)
    c = re.sub(r'<div class="plats">.*?</div>', f'<div class="plats">{PLATS[slug]}</div>', c)
    return repo_links(c)

page("Android apps \u2014 CashDublo", "Android apps.",
     "Every CashDublo app built for Android phones, with its "
     "current version and status from its own repository.",
     [cards[s] for s in ANDROID], "android.html")

page("iPhone apps \u2014 CashDublo", "iPhone apps.",
     "iPhone versions are planned for these apps. Each one comes "
     "after its Android app reaches its finished version, and then "
     "mirrors it \u2014 none are out yet, and no version is claimed.",
     [iphone_card(s) for s in IPHONE], "iphone.html")

page("Mac apps \u2014 CashDublo", "Mac apps &amp; tools.",
     "Every CashDublo program built for the Mac, with its current "
     "version and status from its own repository.",
     [cards[s] for s in MAC], "mac.html")

page("Windows apps \u2014 CashDublo", "Windows apps &amp; tools.",
     "Every CashDublo program built for Windows, with its current "
     "version and status from its own repository.",
     [cards[s] for s in WINDOWS], "windows.html")

# Linux: the President's order (2026-11-15) — the eight
# desktop tools are Python programs, and Linux is now one
# of the platforms they will install to, so the Linux page
# lists exactly those eight, generated like the others.
page("Linux apps \u2014 CashDublo", "Linux apps &amp; tools.",
     "Every CashDublo desktop program that will install to "
     "Linux, with its current version and status from its own "
     "repository.",
     [cards[s] for s in LINUX], "linux.html")

# Patch apps.html: menu CSS + Home link gains the drop-down.
if ".pmenu{" not in apps:
    apps = apps.replace("</style>", PMENU_CSS + "</style>", 1)
apps = fe_css(apps)
old_home = '<a href="index.html">Home</a>'
assert old_home in apps
if '<span class="pmenu">' not in apps:
    apps = apps.replace(old_home, MENU, 1)
apps = re.sub(r"<header>.*?</header>", header(), apps, count=1, flags=re.S)
apps = repo_links_in_page(apps)
apps = plats_in_page(apps)
apps = cd_add(apps)
open(os.path.join(HERE, "apps.html"), "w").write(apps)
print("apps.html patched")

# Patch index.html: the same header as every other page.
ipath = os.path.join(HERE, "index.html")
index = open(ipath).read()
if ".pmenu{" not in index:
    index = index.replace("</style>", PMENU_CSS + "</style>", 1)
index = fe_css(index)
index = re.sub(r"<header>.*?</header>", header(), index, count=1, flags=re.S)
index = cd_add(index)
open(ipath, "w").write(index)
print("index.html patched")

# Patch privacy.html: it carries the same canonical header
# (its links are root-relative, like the other root pages).
ppath = os.path.join(HERE, "privacy.html")
privacy = open(ppath).read()
if ".pmenu{" not in privacy:
    privacy = privacy.replace("</style>", PMENU_CSS + "</style>", 1)
privacy = fe_css(privacy)
privacy = re.sub(r"<header>.*?</header>", header(), privacy, count=1, flags=re.S)
privacy = cd_add(privacy)
open(ppath, "w").write(privacy)
print("privacy.html patched")

# ----------------------------------------------------------------
# Front ends (the President's order, 2026-11-15): the Front Ends
# button in the header opens front-ends.html, an overview of
# every CashDublo front end; each front end also has its own
# page under front-ends/. The set below is the inventoried set
# (website root folder, front-ends/INVENTORY.md), verified
# against each repo's own README on 2026-11-15. A front end is
# listed as live only where its live address was checked that
# day; nothing here dresses a built site up as a live one.
FRONT_ENDS = [
 dict(slug="showcase", name="CashDublo Showcase",
      chip="BETA", chipclass="st-yellow", statusline="Live now",
      blurb="The front door for every CashDublo app — this very "
            "website. Browse the shelf, open an app's card, and "
            "follow its links.",
      about=[
        "This website is the public face of CashDublo: every app "
        "has its card here, with its version, its status, and its "
        "links. It is the front end people open to meet the "
        "applications.",
        "It runs in two places. This address is served by GitHub "
        "Pages. A newer design of the same site runs on Cloudflare "
        "Pages — both addresses were checked live on 2026-11-15."],
      live=[("This site, on GitHub Pages",
             "https://bigodom1984.github.io"),
            ("The newer design, on Cloudflare Pages",
             "https://cashdublowebsite.pages.dev")],
      notlive=None,
      repos=[("Project repository",
              "https://github.com/BigOdom1984/BigOdom1984.github.io")]),
 dict(slug="online-course", name="CashDublo Online Course",
      chip="DEVELOPMENT", chipclass="st-yellow",
      statusline="Not live yet",
      blurb="The course's website: a student opens it, signs in, "
            "and works through the CashDublo course — the web face "
            "of the same shared record the Course Companion app "
            "reads.",
      about=[
        "The CashDublo Online Course is taught through this "
        "website. It is the front of one shared course record: "
        "the Course Companion app reads the same record, so the "
        "website and the app never disagree about a student's "
        "progress.",
        "The built site is made in the course-companion "
        "repository and lands, verified, in the production-course "
        "repository, which holds only the finished pages. The "
        "course itself — the method and the lessons — lives in "
        "the CashDublo-Online-Course repository."],
      live=[],
      notlive="Not live yet: its production address, "
              "production-course.vercel.app, answers 404 today "
              "(checked 2026-11-15). It goes live when the "
              "production-course repo is connected in Vercel, or "
              "the Cloudflare route opens.",
      repos=[("Project repository — production-course",
              "https://github.com/BigOdom1984/production-course"),
             ("Project repository — course-companion",
              "https://github.com/BigOdom1984/course-companion"),
             ("Project repository — CashDublo-Online-Course",
              "https://github.com/BigOdom1984/CashDublo-Online-Course")]),
 dict(slug="server", name="CashDublo Server",
      chip="BETA", chipclass="st-yellow", statusline="Live now",
      blurb="The server's own front doors: an app gallery page "
            "and a health page — the public face of the one "
            "address every CashDublo app talks to.",
      about=[
        "Every CashDublo app talks to one server address, and "
        "this is its public face: a gallery page showing the "
        "apps, and a health page that answers in plain words "
        "which of the server's doors are switched on.",
        "Some doors are dormant until their keys are supplied — "
        "licensing, the AI door, and others. The health page "
        "says so honestly instead of pretending they are on. "
        "The server went live on Vercel on 2026-11-14, and its "
        "front door was checked live on 2026-11-15."],
      live=[("Live website — the app gallery",
             "https://cashdublo.vercel.app")],
      notlive=None,
      repos=[("Project repository",
              "https://github.com/BigOdom1984/cashdublo-server")]),
 dict(slug="travel-journal-web", name="Travel Journal Web",
      chip="DEVELOPMENT", chipclass="st-yellow",
      statusline="Built — dormant",
      blurb="Travel Journal's web face — the phone app's "
            "features in a browser, with your own account: build "
            "a story from a trip's photos, confirm each piece "
            "with a swipe, and keep your stories on a globe.",
      about=[
        "Travel Journal is the one CashDublo app with a website "
        "back end and Google sign-in (optional, never forced). "
        "This is its web face: the phone app's features in a "
        "browser, with real accounts, stories, review swipes, "
        "voice notes, and a globe.",
        "Its own README states its state plainly: built and "
        "dormant (2026-11-10). Until three keys are set at "
        "deploy time, there is no sign-in and no story can be "
        "saved, and its pages show a plain “not connected yet” "
        "box. Nothing is faked in the meantime."],
      live=[],
      notlive="No live address yet — the site wakes when its "
              "three deploy keys are set. Its state above is "
              "from its own repository, checked 2026-11-15.",
      repos=[("Project repository",
              "https://github.com/BigOdom1984/travel-journal-web")]),
 dict(slug="marvin-web", name="Marvin's Website",
      chip="DEVELOPMENT", chipclass="st-yellow",
      statusline="Built",
      blurb="Marvin's front door on the web: meet the bouncing "
            "globe, see all 40 of his expressions, read how he "
            "gets tuned in his workshop, and check the back "
            "end's health.",
      about=[
        "Marvin's website is where people meet Marvin on the "
        "web: Marvin himself on the home page, the gallery of "
        "all 40 named expressions, the workshop page that tells "
        "how he gets tuned, and a status page that asks the "
        "back end how it is and shows the answer in the back "
        "end's own words.",
        "This is not the Marvin app running in a browser — the "
        "Marvin here is his web face, drawn for the web from "
        "the same character design as the app. The app itself "
        "is still in development and its downloads are TBA, so "
        "this site carries no store links and no fake download "
        "buttons."],
      live=[],
      notlive="No live address in its records yet (checked "
              "2026-11-15).",
      repos=[("Project repository",
              "https://github.com/BigOdom1984/marvin-web")]),
]

def fe_card(fe):
    return (f'<article class="card" id="fe-{fe["slug"]}">'
            f'<span class="status">{fe["statusline"]} · '
            f'<span class="st {fe["chipclass"]}">{fe["chip"]}</span></span>'
            f'<h2><a href="front-ends/{fe["slug"]}.html">{fe["name"]}</a></h2>'
            f'<p>{fe["blurb"]}</p>'
            f'<div class="links"><a href="front-ends/{fe["slug"]}.html">'
            f'About this front end ↗</a></div></article>')

def app_block(slug):
    """One app's block in the overview's Every app section: its
    status line in the site's own chip language, its front end
    (the app itself, on the platforms it installs to), and its
    back end in the fleet's honest words."""
    if slug in cards:
        name = card_name(slug)
        status = card_status(slug)
        plats = PLATS[slug]
        repo = REPO[slug]
    else:
        e = next(x for x in EXTRA_APPS if x["slug"] == slug)
        name = e["name"]
        status = (f'Version: {e["version"]} · '
                  f'<span class="st {e["chipclass"]}">{e["chip"]}</span>')
        plats = e["plats"]
        repo = e["repo"]
    kind = "app" if "ANDROID" in plats else "program"
    fe_line = f"The {kind} itself \u2014 {plats}."
    if slug in WEBFACE:
        wslug, wname = WEBFACE[slug]
        fe_line += (f' Its web face is <a href="front-ends/{wslug}.html">'
                    f'{wname}</a>.')
    be = BACKEND.get(slug, SHARED_BACKEND)
    return (f'<article class="card" id="app-{slug}">'
            f'<span class="status">{status}</span>'
            f'<h2><a href="{repo}">{name}</a></h2>'
            f'<p><strong>Front end:</strong> {fe_line}</p>'
            f'<p><strong>Back end:</strong> {be}.</p>'
            f'<div class="links"><a href="{repo}">'
            f'Project repository \u2197</a></div></article>')

def fe_overview():
    h = re.sub(r"<title>.*?</title>", "<title>Front ends — CashDublo</title>", head)
    if ".pmenu{" not in h:
        h = h.replace("</style>", PMENU_CSS + "</style>")
    h = fe_css(h)
    h = cd_css(h)
    body = (header()
            + '<section class="hero"><small>The websites</small>'
              "<h1>Front ends.</h1><p>Every CashDublo website that "
              "stands in front of an app — the web faces people open "
              "to reach and use the applications. Pick one to read "
              "what it is and where it stands; the live ones link "
              "straight out to the real website. Below them, every "
              "app is listed with its own front end and back "
              "end.</p></section>"
            + '<main class="wrap"><div class="grid">'
            + "\n".join(fe_card(fe) for fe in FRONT_ENDS)
            + "</div>"
            + '<h2 class="fe-h">Every app — front end &amp; back end.</h2>'
            + '<p class="fe-sub">Every application, what its front '
              "end is, and what stands behind it. Most CashDublo "
              "apps share one back end — the CashDublo Server — "
              "and the ones that are local by design say so.</p>"
            + '<div class="grid">'
            + "\n".join(app_block(s) for s in APP_SLUGS)
            + "</div>" + footer_note + "</main>" + footer + CD_BLOCK + "</body></html>")
    out = h + "<body>" + body
    open(os.path.join(HERE, "front-ends.html"), "w").write(out)
    print("front-ends.html cards:", len(FRONT_ENDS),
          "app blocks:", len(APP_SLUGS))

def fe_page(fe):
    h = re.sub(r"<title>.*?</title>",
               f"<title>{fe['name']} Front End — CashDublo</title>", head)
    if ".pmenu{" not in h:
        h = h.replace("</style>", PMENU_CSS + "</style>")
    h = fe_css(h)
    h = cd_css(h)
    if fe["live"]:
        links = "".join(f'<a href="{u}">{label} ↗</a>'
                        for label, u in fe["live"])
        live_html = f'<div class="links">{links}</div>'
    else:
        live_html = f'<div class="note">{fe["notlive"]}</div>'
    repos = "".join(f'<a href="{u}">{label} ↗</a>'
                    for label, u in fe["repos"])
    paras = "".join(f"<p>{p}</p>" for p in fe["about"])
    footer_up = (footer.replace('href="index.html"', 'href="../index.html"')
                       .replace('href="privacy.html"', 'href="../privacy.html"'))
    body = (header(prefix="../")
            + f'<section class="hero"><small>Front end</small>'
              f"<h1>{fe['name']}.</h1><p>{fe['blurb']}</p></section>"
            + '<main class="wrap">'
            + f'<p><span class="status">{fe["statusline"]} · '
              f'<span class="st {fe["chipclass"]}">{fe["chip"]}</span></span></p>'
            + paras + live_html
            + f'<div class="links">{repos}</div>'
            + '<div class="links"><a href="../front-ends.html">← All front ends</a></div>'
            + footer_note + "</main>" + footer_up + CD_BLOCK + "</body></html>")
    out = h + "<body>" + body
    os.makedirs(os.path.join(HERE, "front-ends"), exist_ok=True)
    open(os.path.join(HERE, "front-ends", fe["slug"] + ".html"), "w").write(out)
    print("front-ends/" + fe["slug"] + ".html")

fe_overview()
for fe in FRONT_ENDS:
    fe_page(fe)
print("DONE")
