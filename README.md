# Forticam – forticam.in

Main website for **Forticam**, CCTV and smart security installation for homes, offices and companies in Faridabad and Gurgaon, since 2009.

Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole page: hero, services, cameras, spaces, gallery, process, about, contact |
| `styles.css` | All styling |
| `script.js` | Space tabs, photo lightbox, and the consultation form (opens WhatsApp with the details filled in) |
| `images/`, `logo.png` | Photos and logo |
| `videos/` | Put `forticam.mp4` here, then follow the comment in the Gallery section of `index.html` |
| `netlify.toml` | Hosting settings: security headers, caching, `www` redirect |
| `robots.txt`, `sitemap.xml`, `404.html` | SEO and error page |

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish

The site is static, so any static host works.

**Netlify (recommended)**

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.
```

Or connect this GitHub repo in Netlify with the build command empty and the publish directory set to `.`. Every push to `main` then deploys automatically.

**GitHub Pages**: Settings, Pages, deploy from `main` and `/ (root)`, then set the custom domain to `forticam.in`.

## Change contact details

The phone number and email appear in `index.html` (hero, contact section, footer and the structured data block near the top) and the WhatsApp number in `script.js`. Search for the old value and replace every match.

## Related

`forticam.cctv.in` is the CCTV-focused companion site, in the repo `Forticam/Forticam.cctv.in`.
