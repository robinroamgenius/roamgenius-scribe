import { useEffect } from "react";

export type HeadMeta = {
  name?: string;
  property?: string;
  content: string;
};

/**
 * Client-side replacement for TanStack Start's route `head()`:
 * sets document.title and <meta> tags for the active page and
 * restores the previous values when the page unmounts.
 */
export function useHead(title: string, meta: HeadMeta[]) {
  const metaKey = JSON.stringify(meta);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const tags = JSON.parse(metaKey) as HeadMeta[];
    const restore: Array<() => void> = [];

    for (const tag of tags) {
      const attr = tag.name ? "name" : "property";
      const value = tag.name ?? tag.property ?? "";
      let el = document.head.querySelector<HTMLMetaElement>(
        `meta[${attr}="${value}"]`,
      );
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      const previous = el.getAttribute("content");
      el.setAttribute("content", tag.content);
      const node = el;
      restore.push(() => {
        if (created) node.remove();
        else if (previous !== null) node.setAttribute("content", previous);
      });
    }

    return () => {
      document.title = previousTitle;
      for (const undo of restore) undo();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, metaKey]);
}
