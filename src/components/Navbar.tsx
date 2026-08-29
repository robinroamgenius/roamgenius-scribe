import { useState } from "react";
import { Menu, X } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

const NAV_LINKS = [
  { label: "Domů", to: BASE_URL },
  { label: "Články", to: `${BASE_URL}#clanky` },
  { label: "Newsletter", to: `${BASE_URL}#newsletter` },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href={BASE_URL} aria-label="RoamGenius — domovská stránka" className="flex h-10 items-center md:h-11">
          <img
            src={`${BASE_URL}roamgenius-logo.jpg`}
            alt="RoamGenius"
            className="h-full w-auto object-contain"
            width={220}
            height={94}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="link-editorial text-[13px] font-medium uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${BASE_URL}#newsletter`}
            className="rounded-sm bg-primary px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Odebírat
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen(!open)}
          className="flex size-10 items-center justify-center text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.14em] text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${BASE_URL}#newsletter`}
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit rounded-sm bg-primary px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
            >
              Odebírat
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
