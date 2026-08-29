/**
 * RoamGenius editorial catalogue.
 *
 * Published articles live in /content/published.
 * Drafts live in /content/draft and are intentionally excluded from the
 * production catalogue until they are moved to /content/published.
 */

import type { Article } from "./article-types";

export type { Article, ArticleBlock } from "./article-types";

const publishedModules = import.meta.glob("../../content/published/*.ts", {
  eager: true,
  import: "default",
}) as Record<string, Article>;

export const articles: Article[] = Object.values(publishedModules).sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
