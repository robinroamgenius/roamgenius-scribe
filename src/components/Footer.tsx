import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" aria-label="RoamGenius — domovská stránka" className="inline-flex h-9 items-center">
              <img
                src="/roamgenius-logo.jpg"
                alt="RoamGenius"
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Automatizovaný trading, algoritmické strategie a geografická
              arbitráž pro digitální nomády, kteří chtějí svobodu bez kompromisů.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <span className="col-span-2 mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Rubriky
            </span>
            <a href="/#clanky" className="text-foreground/75 transition-colors hover:text-foreground">
              Algoritmický trading
            </a>
            <a href="/#clanky" className="text-foreground/75 transition-colors hover:text-foreground">
              Geografická arbitráž
            </a>
            <a href="/#clanky" className="text-foreground/75 transition-colors hover:text-foreground">
              Nástroje
            </a>
            <a href="/#clanky" className="text-foreground/75 transition-colors hover:text-foreground">
              Daně &amp; rezidence
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 RoamGenius. Všechna práva vyhrazena.</p>
          <p>
            Obsah má informativní charakter a nepředstavuje investiční
            doporučení. Obchodování je spojeno s rizikem ztráty kapitálu.
          </p>
        </div>
      </div>
    </footer>
  );
}
