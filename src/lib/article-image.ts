/**
 * Dynamic image helper.
 *
 * Automatically selects a high-quality, contextually relevant Unsplash image
 * based on the article title / context. Keyword matching maps topics to
 * curated photo pools:
 *  - "VPS" / "server" / "cloud"  -> data-center & infrastructure photography
 *  - "trading" / "graf" / "chart"-> trading desks & market charts
 *  - "daň" / "rezidence"         -> documents, calculators, finance desks
 *  - everything else             -> premium digital-nomad travel lifestyle
 *
 * The pick is deterministic per title, so the same article always renders
 * the same image.
 */

type Pool = { id: string; alt: string };

const POOLS: Record<string, Pool[]> = {
  server: [
    { id: "photo-1558494949-ef010cbdcc31", alt: "Serverová místnost datacentra" },
    { id: "photo-1544197150-b99a580bb7a8", alt: "Síťová infrastruktura a kabely" },
    { id: "photo-1555066931-4365d14bab8c", alt: "Kód na obrazovce vývojáře" },
  ],
  charts: [
    { id: "photo-1611974789855-9c2a0a7236a3", alt: "Obchodní grafy na monitorech" },
    { id: "photo-1590283603385-17ffb3a7f29f", alt: "Analýza trhu na notebooku" },
    { id: "photo-1535320903710-d993d3d77d29", alt: "Finanční grafy a analytika" },
    { id: "photo-1559526324-4b87b5e36e44", alt: "Obchodní aplikace na telefonu" },
  ],
  automation: [
    { id: "photo-1620712943543-bcc4688e7485", alt: "Abstraktní vizualizace umělé inteligence" },
    { id: "photo-1485827404703-89b55fcc595e", alt: "Robotická automatizace" },
    { id: "photo-1611974789855-9c2a0a7236a3", alt: "Obchodní terminál s grafy" },
  ],
  tax: [
    { id: "photo-1554224155-6726b3ff858f", alt: "Kalkulačka a daňové dokumenty" },
    { id: "photo-1450101499163-c8848c66ca85", alt: "Podpis smlouvy na papíře" },
    { id: "photo-1526304640581-d334cdbbf45e", alt: "Finance a úspory" },
  ],
  nomad: [
    { id: "photo-1488646953014-85cb44e25828", alt: "Cestovatelská výbava na mapě" },
    { id: "photo-1522199755839-a2bacb67c546", alt: "Notebook a káva na cestách" },
    { id: "photo-1503220317375-aaad61436b1b", alt: "Cestovatel v horách" },
    { id: "photo-1469854523086-cc02fe5d8800", alt: "Silnice na cestě za dobrodružstvím" },
    { id: "photo-1537996194471-e657df975ab4", alt: "Rýžové terasy na Bali" },
    { id: "photo-1552465011-b4e21bf6e79a", alt: "Chrám v Bangkoku" },
    { id: "photo-1507525428034-b723cf961d3e", alt: "Tropická pláž" },
  ],
};

const KEYWORD_RULES: [RegExp, keyof typeof POOLS][] = [
  [/\b(vps|server|datacentr|cloud|hosting|infrastruktur)/i, "server"],
  [/\b(backtest|graf|chart|data|analýz|strategi)/i, "charts"],
  [/\b(mt5|metatrader|expert|advisor|aos|algoritm|automat|robot|ea\b)/i, "automation"],
  [/\b(trading|obchod|broker|forex|trh)/i, "charts"],
  [/\b(daň|daně|rezidenc|účetn|smlouv)/i, "tax"],
  [/\b(arbitráž|nomád|cestov|bali|bangkok|thajsk|lisabon|cest)/i, "nomad"],
];

const FALLBACK_POOL: keyof typeof POOLS = "nomad";

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function poolFor(title: string): Pool[] {
  for (const [pattern, pool] of KEYWORD_RULES) {
    if (pattern.test(title)) return POOLS[pool]!;
  }
  return POOLS[FALLBACK_POOL]!;
}

export type ArticleImage = { url: string; alt: string };

/** Resolve a contextual Unsplash image for a given article title. */
export function articleImage(
  title: string,
  width = 1600,
  height = 1000,
): ArticleImage {
  const pool = poolFor(title);
  const pick = pool[hashString(title) % pool.length]!;
  return {
    url: `https://images.unsplash.com/${pick.id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`,
    alt: pick.alt,
  };
}
