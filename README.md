# ameenh.com

Ameen H.'s portfolio. Vercel deploys the `site/` folder on every push to `main` (settings in `vercel.json`).

- Source lives in `src/` (`template.html`, `content.js` for copy and case studies, `viz.js` for diagrams, `*.json` for embedded images and logos).
- Rebuild with `python3 src/build.py`, then commit `site/index.html` along with the source changes.
