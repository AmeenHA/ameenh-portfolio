"""Build the portfolio.

Writes two files:
  site/index.html  - full standalone page (deployed by Netlify)
  dist/artifact.html - same page without the html/head wrapper (published as the Claude artifact)
Run: python3 src/build.py
"""
import os, re
here = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(here)
r = lambda p: open(os.path.join(here, p), encoding='utf-8').read()

content = r('content.js').replace('/*VIZ_JS*/', r('viz.js'))
content = (content.replace('/*TOOL_ICONS_JSON*/{}', r('icons.json'))
                  .replace('/*LOGOS_JSON*/{}', r('logos.json'))
                  .replace('/*BRAND_JSON*/{}', r('brand.json')))
css = r('vendor/bundle.css').split('\n', 1)[1]  # drop @import line (fonts are linked in the template)
page = (r('template.html').replace('/*BUNDLE_CSS*/', css)
                          .replace('/*BUNDLE_JS*/', r('vendor/bundle.js'))
                          .replace('/*CONTENT_JS*/', content))

os.makedirs(os.path.join(root, 'dist'), exist_ok=True)
open(os.path.join(root, 'dist', 'artifact.html'), 'w', encoding='utf-8').write(page)

GA_ID = 'G-S8FBSYG7NB'
# Google tag (GA4): live site only, not the artifact preview.
# The site is a single page with hash routes, so page views are sent manually
# (one per case study / project; home sections count as "/").
GTAG = ('<script async src="https://www.googletagmanager.com/gtag/js?id=' + GA_ID + '"></script>\n'
        '<script>\n'
        'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}\n'
        "gtag('js',new Date());gtag('config','" + GA_ID + "',{send_page_view:false});\n"
        '(function(){var last=null;\n'
        ' function pv(){var h=(location.hash||"").slice(1);if(h==="contact")return;\n'
        '  var path=/ – Growth Marketer$/.test(document.title)||!h?"/":"/"+h;\n'
        '  if(path===last)return;last=path;\n'
        "  gtag('event','page_view',{page_title:document.title,page_location:location.origin+path,page_path:path});}\n"
        ' window.addEventListener("hashchange",function(){setTimeout(pv,0);});\n'
        ' window.addEventListener("DOMContentLoaded",function(){setTimeout(pv,0);});\n'
        ' document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href^=\\"mailto:\\"]");\n'
        "  if(a)gtag('event','email_click',{link_url:a.href});});\n"
        '})();\n'
        '</script>\n')

title = re.search(r'<title>.*?</title>', page).group(0)
body = page.replace(title, '', 1)
full = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<meta name="description" content="Ameen H. is a growth marketer who finds the segment, tests the message and fixes the funnel. Case studies from TurboTax, HelloFresh, Ricoh and more.">\n'
        '<style>html{color-scheme:light}*{box-sizing:border-box}body{margin:0;font:14px/1.5 system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>\n'
        + GTAG + title + '\n</head>\n<body>\n' + body + '\n</body>\n</html>\n')
open(os.path.join(root, 'site', 'index.html'), 'w', encoding='utf-8').write(full)
print('built', len(full), 'bytes')
