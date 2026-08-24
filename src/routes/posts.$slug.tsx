import { createRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { rootRoute } from "./__root";
import { articles, formatDate, getArticle } from "../lib/articles";
import { articleImage } from "../lib/article-image";
import { CtaBox } from "../components/CtaBox";
import { useHead } from "../lib/use-head";

export const postRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/posts/$slug",
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  useHead("Článek nenalezen — RoamGenius", []);
  return (
    <main className="mx-auto max-w-3xl px-5 py-32 text-center md:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
        Tento článek jsme nenašli
      </h1>
      <p className="mt-4 text-muted-foreground">
        Možná byl přesunut nebo nikdy neexistoval.
      </p>
      <Link
        to="/"
        className="link-editorial mt-8 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden /> Zpět na úvodní stránku
      </Link>
    </main>
  );
}

function PostPage() {
  const article = postRoute.useLoaderData();
  const image = articleImage(article.title, 1920, 1080);
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  useHead(`${article.title} — RoamGenius`, [
    { name: "description", content: article.excerpt },
    { property: "og:title", content: article.title },
    { property: "og:description", content: article.excerpt },
    { property: "og:type", content: "article" },
    { property: "og:image", content: image.url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: article.title },
    { name: "twitter:description", content: article.excerpt },
    { name: "twitter:image", content: image.url },
  ]);

  return (
    <main>
      <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
        {/* Back link */}
        <Link
          to="/"
          className="link-editorial inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden /> Všechny články
        </Link>

        {/* Header */}
        <header className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {article.category}
          </p>
          <h1 className="mt-4 font-serif text-3xl leading-[1.15] text-foreground md:text-[44px]">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>{article.author}</span>
            <span className="size-1 rounded-full bg-border" aria-hidden />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="size-1 rounded-full bg-border" aria-hidden />
            <span>{article.readingTime} min čtení</span>
          </div>
        </header>

        {/* Featured image */}
        <figure className="mt-10 overflow-hidden rounded-sm">
          <img
            src={image.url}
            alt={image.alt}
            className="aspect-[16/9] w-full object-cover"
            width={1920}
            height={1080}
          />
        </figure>

        {/* Body */}
        <div className="mt-12">
          {article.content.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2
                    key={i}
                    className="mt-12 font-serif text-2xl leading-snug text-foreground md:text-[28px]"
                  >
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3
                    key={i}
                    className="mt-10 font-serif text-xl leading-snug text-foreground md:text-[22px]"
                  >
                    {block.text}
                  </h3>
                );
              case "p":
                return (
                  <p
                    key={i}
                    className="mt-6 text-[17px] leading-[1.85] text-foreground/85"
                  >
                    {block.text}
                  </p>
                );
              case "quote":
                return (
                  <blockquote
                    key={i}
                    className="my-10 border-l-2 border-accent pl-6 font-serif text-xl italic leading-relaxed text-foreground md:text-[22px]"
                  >
                    {block.text}
                    {block.author && (
                      <cite className="mt-3 block font-sans text-sm not-italic text-muted-foreground">
                        — {block.author}
                      </cite>
                    )}
                  </blockquote>
                );
              case "list":
                return (
                  <ul key={i} className="mt-6 space-y-3">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[16px] leading-relaxed text-foreground/85"
                      >
                        <span
                          className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              case "cta":
                return <CtaBox key={i} {...block} />;
              default:
                return null;
            }
          })}
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">
              Čtěte dále
            </h2>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              {related.map((rel) => (
                <RelatedCard key={rel.slug} slug={rel.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function RelatedCard({ slug }: { slug: string }) {
  const article = getArticle(slug)!;
  const image = articleImage(article.title, 800, 500);

  return (
    <Link
      to="/posts/$slug"
      params={{ slug: article.slug }}
      className="group block"
    >
      <div className="overflow-hidden rounded-sm bg-muted">
        <img
          src={image.url}
          alt={image.alt}
          loading="lazy"
          className="img-zoom aspect-[16/10] w-full object-cover"
          width={800}
          height={500}
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {article.category}
      </p>
      <h3 className="mt-2 font-serif text-lg leading-snug text-foreground transition-colors group-hover:text-accent md:text-xl">
        {article.title}
      </h3>
    </Link>
  );
}
