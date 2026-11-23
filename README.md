# Forticam – forticam.in

Website for **Forticam**: CCTV cameras, DVR/NVR recorders and video door phones for homes, offices and companies in Faridabad and Gurgaon, since 2009. Smart Surveillance, Smarter Protection For A Safer Spaces.

This site uses the same code as the CCTV site (`Forticam/Forticam.cctv.in`), so both sites look and work the same. Only the domain-specific lines differ (canonical address, sitemap, robots, `www` redirect).

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The page: hero, cameras, which camera where, installation steps, gallery, FAQ, contact |
| `styles.css` | All styling |
| `script.js` | Photo lightbox and the consultation form (opens WhatsApp with the details filled in) |
| `images/`, `logo.png` | Photos and logo |
| `netlify.toml` | Hosting settings: security headers, caching, `www` redirect |
| `robots.txt`, `sitemap.xml`, `404.html` | SEO and error page |

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish

**Netlify with GitHub (recommended):** open the Netlify project, go to Project configuration, Build and deploy, Continuous deployment, Link repository, choose GitHub and this repo, branch `main`. Leave the build command empty and set the publish directory to `.`. Every push to `main` then deploys automatically.

**Netlify CLI**

```bash
npm install -g netlify-cli
netlify login
netlify link
netlify deploy --prod --dir=.
```

Then add `forticam.in` under Domain management.

## Earlier version

The previous main-site design (six services, "your space" tabs) is kept in git history. To see it: `git show f507724:index.html`.
