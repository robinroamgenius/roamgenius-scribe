import { ArrowUpRight } from "lucide-react";

type Props = {
  badge: string;
  title: string;
  text: string;
  button: string;
  href: string;
};

/** Premium affiliate / partner call-to-action box. */
export function CtaBox({ badge, title, text, button, href }: Props) {
  return (
    <aside className="relative my-12 overflow-hidden rounded-md border border-border bg-card p-8 shadow-[0_18px_45px_-24px_oklch(0.19_0.01_260/0.35)] md:p-10">
      <span
        className="absolute left-0 top-0 h-full w-1 bg-accent"
        aria-hidden
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
        {badge}
      </p>
      <h3 className="mt-3 font-serif text-xl leading-snug text-foreground md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
        {text}
      </p>
      <a
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-85"
      >
        {button}
        <ArrowUpRight className="size-4" aria-hidden />
      </a>
      <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
        Partnerský odkaz
      </p>
    </aside>
  );
}
