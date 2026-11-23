# Forticam – forticam.in

Website for **Forticam**: CCTV cameras, DVR/NVR recorders and video door phones for homes, offices and companies in Faridabad and Gurgaon, since 2009. Smart Surveillance, Smarter Protection For A Safer Spaces.

Plain HTML, CSS and JavaScript. No build step, no dependencies, no paid hosting needed.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page: hero, why Forticam, cameras, which camera where, installation steps, gallery, FAQ, contact |
| `styles.css` | All styling, including scaling for 4K screens |
| `script.js` | Photo viewer, scroll animations, and the consultation form (opens WhatsApp with the details filled in) |
| `sw.js` | Small cache so repeat visits load instantly |
| `images/`, `logo.png` | Photos and logo |
| `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` | Error page, SEO files, and a switch that tells GitHub Pages to serve the files as they are |
| `DEPLOY.md` | Step by step: publish for free on GitHub Pages |

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish for free

See [DEPLOY.md](DEPLOY.md). Short version: Settings, Pages, Deploy from a branch, `main`, `/ (root)`, Save.

## Changing photos

Put your own photo in `images/` with the same file name (for example `images/setup-handover.jpg`). The page picks it up with no code change. Use photos at least 1920 pixels wide so they stay sharp on 4K screens.
