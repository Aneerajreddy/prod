# NEET PG ENT PYQ Quiz

A static quiz app built from the provided PrepLadder ENT PYQ page.

## Run locally

Open `index.html` directly in your browser, or run a static server:

```bash
python3 -m http.server 8000
```

## Deploy on GitHub Pages

This repository includes an auto-deploy workflow at `.github/workflows/deploy-pages.yml`.

### One-time setup on GitHub

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (or update the workflow trigger branch).

### Deploy flow

- Every push to `main` triggers the GitHub Actions workflow.
- The workflow publishes this static app to GitHub Pages.
- Site URL format:
  - `https://<username>.github.io/<repository>/`

Because asset links are relative (`styles.css`, `script.js`), it works from a project subpath on GitHub Pages.
