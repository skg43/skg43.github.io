# Sanjeev Gautam — Personal Portfolio

A fast, responsive portfolio for a computational chemist and molecular modeler. Built with React, TypeScript, and Vite; deployment to GitHub Pages is automated.

## Before you publish

Your email, LinkedIn, GitHub profile, and résumé download are already included. Confirm that the résumé is the version you want recruiters to download, then optionally add links to papers, posters, or additional project pages.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal. To verify the production version:

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Create a repository named `skg43.github.io` for the clean URL `https://skg43.github.io`, or use any repository name for a project-site URL.
2. Upload all files in this folder to the repository and push to `main`.
3. Go to **Settings → Pages → Build and deployment** and select **GitHub Actions**.
4. The included workflow builds and publishes the site automatically after every push to `main`.

## Main files

- `src/App.tsx` — all portfolio content and sections
- `src/styles.css` — visual design and responsive styling
- `index.html` — SEO and social metadata
- `.github/workflows/deploy.yml` — automatic GitHub Pages deployment
- `vite.config.ts` — build configuration for Pages subpaths

## Packages

- React — interface components
- TypeScript — safer editing
- Vite — local development and optimized builds
- GitHub Pages Actions — automated hosting
