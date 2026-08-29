# Published articles

This directory is the **single source of truth** for live editorial content.

## Publishing

- One article = one `.ts` file.
- Filename = article slug.
- The file exports one default object matching `Article`.
- Every file here is automatically loaded by the Vite build.
- Files in `../draft/` are never included in the live catalogue.

## Add a new article

1. Write it in `content/draft/`.
2. Review and finalize metadata, body blocks and CTA links.
3. Move the file to `content/published/`.
4. Build and deploy.

The homepage and `/posts/:slug` route read this catalogue automatically. No
manual edit of `src/lib/articles.ts` is required.
