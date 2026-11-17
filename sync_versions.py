#!/usr/bin/env python3
"""Apply versions.json to the website — run during every website
change, before make_platform_pages.py. Updates each apps.html
card's Version line and the generator's EXTRA_APPS literals for
every slug the register has collected. Reports what it changed
and which collected slugs matched nothing on the site."""
import json, re, sys
base = '/home/hatch/workspace/site-live'
versions = {k: v for k, v in json.load(open(f'{base}/versions.json')).items() if not k.startswith('_')}
changed = []
# apps.html cards
p = f'{base}/apps.html'
html = open(p).read()
def fix_card(m):
    block = m.group(0)
    slug = m.group(1)
    if slug in versions:
        new = re.sub(r'Version: [0-9]+\.[0-9]+\.[0-9]+', f'Version: {versions[slug]}', block, count=1)
        if new != block: changed.append(f'apps.html card {slug} -> {versions[slug]}')
        return new
    return block
html = re.sub(r'<article class="card" id="([a-z0-9-]+)">.*?</article>', fix_card, html, flags=re.S)
open(p, 'w').write(html)
# generator EXTRA_APPS literals
g = f'{base}/make_platform_pages.py'
src = open(g).read()
for slug, v in versions.items():
    pat = re.compile(r'(dict\(slug="' + re.escape(slug) + r'", name="[^"]+",\s*\n?\s*version=")[0-9]+\.[0-9]+\.[0-9]+(")')
    src2 = pat.sub(r'\g<1>' + v + r'\g<2>', src)
    if src2 != src: changed.append(f'generator EXTRA_APPS {slug} -> {v}'); src = src2
open(g, 'w').write(src)
matched = {c.split()[2] for c in changed}
print('changed:', len(changed))
for c in changed: print(' -', c)
print('collected slugs with no site match:', [s for s in versions if s not in matched] or 'none')
