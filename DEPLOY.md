# Publish the Forticam website (forticam.in)

This is a static HTML/CSS/JavaScript website. There is no build step or package install required to serve it.

## Preview locally

```bash
git clone https://github.com/Forticam/forticam.in.git
cd forticam.in
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Publish with Netlify CLI

Install and sign in to the Netlify CLI, then link the existing Netlify site if prompted:

```bash
npm install -g netlify-cli
netlify login
netlify link
netlify deploy --prod --dir=.
```

The CLI may ask you to select the existing Forticam Netlify site. Confirm the production deploy only after checking the preview deploy.

## Automatic deploys

If the GitHub repository is already connected to the Netlify site, pushes to its configured production branch deploy automatically. No GitHub token or `GITHUB_TOKEN` is needed for this static site. Check the Netlify site's **Deploys** page to confirm the build completed and the production URL is live.

For this site, use the repository root (`.`) as the publish directory and leave the build command empty. `netlify.toml` contains the hosting and cache headers.

## Image quality and performance

The page uses the images committed under `images/`; CSS cannot turn a small source image into true 4K detail. For sharp large-screen imagery, upload original high-resolution photos and export optimized WebP/AVIF variants at the sizes actually used. Keep hero imagery high priority and defer below-the-fold images so mobile visitors do not download full-resolution assets unnecessarily.

Never commit access tokens. If a token was shared in chat or another public place, revoke it in GitHub settings and use a new, least-privilege credential only in a local secret store.
