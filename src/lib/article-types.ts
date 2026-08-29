export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; items: string[] }
  | {
      type: "cta";
      badge: string;
      title: string;
      text: string;
      button: string;
      href: string;
    };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  author: string;
  content: ArticleBlock[];
};
