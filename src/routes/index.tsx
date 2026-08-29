import { createRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { rootRoute } from "./__root";
import { articles } from "../lib/articles";
import { ArticleCard } from "../components/ArticleCard";
import { useHead } from "../lib/use-head";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

function HomePage() {
  useHead(
    "RoamGenius — Cestování, AI, trading a svoboda",
    [
      {
        name: "description",
        content:
          "Prémiový magazín o cestování, AI, automatizaci, algoritmickém tradingu a chytřejších způsobech, jak získat více svobody.",
      },
      {
        property: "og:title",
        content: "RoamGenius — Cestování, AI, trading a svoboda",
      },
      {
        property: "og:description",
        content:
          "Cestování, AI, automatizace, algoritmický trading a chytré způsoby, jak získat více svobody.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  );

  const [featured, ...rest] = articles;

  return (
    <main>
      {/* Masthead */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            Cestování · AI · Trading · Svoboda
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] text-foreground md:text-6xl">
            Obchodujte algoritmy.
            <br />
            Žijte kdekoliv.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Automatizované obchodní systémy, backtesting a geografická arbitráž —
            prakticky, bez omáček a s respektem k vašemu kapitálu.
          </p>
        </div>
      </section>

      {/* Article list */}
      <section id="clanky" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Nejnovější články
          </h2>
          <span className="text-xs text-muted-foreground">
            {articles.length} článků
          </span>
        </div>
        <div className="mt-8">
          {featured && <ArticleCard article={featured} featured />}
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </main>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="newsletter" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/60">
              Newsletter RoamGenius
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
              Jednou týdně. Jen to podstatné.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/75">
              Nové strategie, testy brokerů a tipy na nomádské destinace.
              Žádný spam — odhlášení jedním klikem.
            </p>
          </div>

          <div>
            {done ? (
              <div className="flex items-center gap-3 rounded-sm border border-primary-foreground/25 bg-primary-foreground/10 px-6 py-5">
                <Check className="size-5 shrink-0" aria-hidden />
                <p className="text-sm leading-relaxed">
                  Hotovo! Potvrzovací e-mail je na cestě do vaší schránky.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setDone(true);
                }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  E-mailová adresa
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vas@email.cz"
                  className="w-full rounded-sm border border-primary-foreground/25 bg-primary-foreground/10 px-5 py-3.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-primary-foreground px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary transition-opacity hover:opacity-90"
                >
                  Odebírat <ArrowRight className="size-4" aria-hidden />
                </button>
              </form>
            )}
            <p className="mt-4 text-xs text-primary-foreground/50">
              Odesláním souhlasíte se zpracováním e-mailu pro účely newsletteru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
