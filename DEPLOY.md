# Publish forticam.in for free (GitHub Pages)

GitHub Pages hosts this site at no cost and needs no credits. The code is already in this repo, so there is nothing to build or install.

## 1. Turn on GitHub Pages (about 2 minutes)

1. Open https://github.com/Forticam/forticam.in
2. Click **Settings**, then **Pages** in the left menu.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
5. Wait one to two minutes and refresh the page. GitHub shows **Your site is live at** with the address. Open it.

Every time you push a change to `main`, the site updates by itself within a minute or two.

## 2. Use your own domain (optional)

Go to Settings, Pages, **Custom domain**, type `forticam.in` and Save. GitHub then asks you to set DNS at the company where you bought the domain.

**For an apex domain such as `forticam.in`:** add four `A` records for `@`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**For a subdomain such as `cctv.forticam.in` or `www.forticam.in`:** add one `CNAME` record pointing to `forticam.github.io`.

Then tick **Enforce HTTPS** once GitHub finishes checking (it can take up to an hour).

You can only use a domain you own. If `forticam.in` is not yours, use a subdomain of a domain you do own.

## Using the command line instead

```bash
git clone https://github.com/Forticam/forticam.in
cd forticam.in
# edit files, then:
git add -A
git commit -m "Update site"
git push origin main
```

## Other free hosts

- **Cloudflare Pages:** free, with unlimited bandwidth. Connect this repo, leave the build command empty and set the output directory to `/`.
- **Vercel (Hobby plan):** free for personal projects. Import this repo and keep the default settings.
