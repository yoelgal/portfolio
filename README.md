# yoelgal.com

Personal site. A single self-contained `index.html` (inline CSS, no JS, no build), deployed as static
files on Vercel.

- `npm run format` / `npm run format:check` — prettier on `index.html`
- Deploy: `vercel deploy --prod` (only `index.html` is published; see `.vercelignore`)

The previous React/Vite version lives in git history before the reconcile to static.
