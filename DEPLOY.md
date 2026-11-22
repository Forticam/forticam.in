# Publish the Forticam website

Forticam is a static HTML/CSS/JavaScript website. No package installation or build command is required to deploy the site.

## Preview locally

```bash
git clone https://github.com/Forticam/forticam.in.git
cd forticam.in
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Publish to the existing Netlify site

Install and authenticate the Netlify CLI. Link the existing site when prompted, then publish the repository root:

```bash
npm install -g netlify-cli
netlify login
netlify link
netlify deploy --prod --dir=.
```

Select the existing site `forticam-in-nktd` when the CLI asks. Check the preview URL before a production deployment. Do not put an access token directly into commands, source files, or chat.

## Automatic publishing

When this GitHub repository is connected to the existing Netlify site and the production branch is `main`, every push to `main` should trigger a deploy. The site has no build command and uses `.` as its publish directory. Confirm the deploy status and production URL in the Netlify dashboard's **Deploys** page.

## Team photo and high-resolution images

The new team feature currently uses the existing `images/setup-handover.jpg` installation photo. For an accurate photo of Indian Forticam staff in branded T-shirts, replace it with an authentic, approved company photo at that path. The current repository photo cannot be made into genuine 4K detail by code. For crisp large-screen imagery, provide an original high-resolution image (ideally 3840px wide), then export optimized WebP/AVIF versions and update the image source. Keep a smaller responsive/mobile variant to avoid downloading unnecessarily large files on phones.
