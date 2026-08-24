# Published articles

This directory is the canonical home for published editorial content.

For now, the live application still reads the existing catalogue in `src/lib/articles.ts`. The catalogue migration should be completed before removing that source of truth.

Planned article format:

- one file per article
- filename = slug
- front matter for metadata
- body for article content
- status is implicit from the directory (`published`)

Do not put drafts here.
