# Draft articles

Anything in this directory is **not published** and is ignored by the production
article catalogue.

## Workflow

1. Create one file per article.
2. Use the final URL slug as the filename.
3. Export one default `Article` object.
4. Review the article.
5. Move the file to `../published/` to publish it.

Example filename:

```
my-new-article.ts
```

The published loader automatically includes every `.ts` file in
`content/published/`, so publishing is simply a move, not an edit in a central
catalogue.
