import { Link } from "@tanstack/react-router";
import { articleImage } from "../lib/article-image";
import { formatDate, type Article } from "../lib/articles";

type Props = {
  article: Article;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: Props) {
  const image = articleImage(article.title, featured ? 1200 : 800, featured ? 900 : 800);

  return (
    <article className="group border-b border-border py-10 first:pt-0 last:border-b-0 md:py-12">
      <Link
        to="/posts/$slug"
        params={{ slug: article.slug }}
        className="grid gap-6 md:grid-cols-[300px_1fr] md:gap-10 lg:grid-cols-[340px_1fr]"
      >
        {/* Thumbnail — left */}
        <div className="overflow-hidden rounded-sm bg-muted">
          <img
            src={image.url}
            alt={image.alt}
            loading="lazy"
            className="img-zoom aspect-[4/3] h-full w-full object-cover"
            width={340}
            height={255}
          />
        </div>

        {/* Typography — right */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <span className="text-accent">{article.category}</span>
            <span className="size-1 rounded-full bg-border" aria-hidden />
            <time dateTime={article.date} className="font-normal text-muted-foreground">
              {formatDate(article.date)}
            </time>
          </div>

          <h2
            className={`mt-3 font-serif leading-tight text-foreground transition-colors group-hover:text-accent ${
              featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {article.title}
          </h2>

          <p className="mt-4 line-clamp-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="link-editorial inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-foreground">
              Pokračovat ve čtení <span aria-hidden>→</span>
            </span>
            <span className="text-xs text-muted-foreground">
              {article.readingTime} min čtení
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
