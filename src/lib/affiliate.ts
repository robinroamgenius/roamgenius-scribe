export type AffiliateProvider = "travelpayouts";

export type AffiliateLinkInput = {
  provider?: AffiliateProvider;
  program: string;
  destinationUrl: string;
  subId?: string;
};

export type AffiliateLink = AffiliateLinkInput & {
  href: string;
};

export function createAffiliateLink(input: AffiliateLinkInput): AffiliateLink {
  return {
    ...input,
    provider: input.provider ?? "travelpayouts",
    href: input.destinationUrl,
  };
}

/**
 * Static GitHub Pages builds must never contain Travelpayouts credentials.
 *
 * During the initial rollout this helper preserves the destination URL and
 * centralizes affiliate metadata. A future server-side endpoint can convert
 * destination URLs to Travelpayouts partner URLs via the official API without
 * changing article or CTA components.
 */
