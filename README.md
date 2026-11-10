# AttentionLab website

A small static site built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321/testpage/
```

## Publish on GitHub Pages

1. Create a repo named `attentionlab-site`, ideally under a GitHub organization
   owned by the Verein rather than a personal account. Push this folder to `main`.
2. In `astro.config.mjs`, replace `YOUR-ORG` with the org or user name.
   If the repo has a different name, change `base` to match.
3. In the repo, go to **Settings → Pages → Source** and choose **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys
   the site. The URL appears under the **Actions** tab and in **Settings → Pages**.

### Custom domain

1. Add a file `public/CNAME` containing just the domain, e.g. `attentionlab.ch`.
2. In `astro.config.mjs`, set `site: 'https://attentionlab.ch'` and remove `base`.
3. At your domain registrar, point DNS to GitHub Pages: a `CNAME` record for `www`
   pointing to `YOUR-ORG.github.io`, and/or the four GitHub `A` records for the apex
   domain (listed in GitHub's Pages documentation).
4. Enter the domain under **Settings → Pages** and tick **Enforce HTTPS**.

## Editing content (from Notion)

- `src/pages/*.md` are plain Markdown pages. In Notion, use **⋯ → Export → Markdown**
  and paste the text below the header block (`layout`, `title`).
- A new file `src/pages/projects.md` becomes `/projects/`. Add it to the `nav` list
  in `src/layouts/Base.astro`.
- The home page is `src/pages/index.astro`, HTML with a little Astro.
- Colours and fonts are in `src/styles/global.css`.

## Optional: password protection

GitHub Pages itself can't require a login. This setup offers a lightweight workaround:

- Add a repository secret **`SITE_PASSWORD`** (**Settings → Secrets and variables → Actions**).
- On the next deploy, [StatiCrypt](https://github.com/robinmoisson/staticrypt) encrypts
  every HTML page. Visitors see a password prompt, and the browser remembers the
  password for 30 days.
- Delete the secret and redeploy to make the site public again.

Limits:

- It only hides page text. Images and other files remain reachable if someone knows the URL.
- If the repository is **public**, the content is readable in the source anyway.
  A private repo with Pages needs a paid GitHub plan (Pro or Team).
- Everyone shares one password, and there are no individual accounts.

For real access control (individual email logins), use Cloudflare Pages with Cloudflare
Access, or basic auth on your own nginx server.
