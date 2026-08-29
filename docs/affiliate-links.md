# Affiliate links

RoamGenius uses a centralized affiliate metadata layer.

## Current provider

The initial provider is Travelpayouts.

Articles should store a normal destination URL and affiliate metadata instead of
hardcoding a provider-generated partner URL throughout editorial content.

Example:

```ts
{
  type: "cta",
  badge: "Doporučujeme",
  title: "Example",
  text: "Example",
  button: "Zobrazit nabídku",
  href: "https://brand.example/destination",
  affiliate: {
    provider: "travelpayouts",
    program: "brand-program",
    destinationUrl: "https://brand.example/destination",
    subId: "article-slug"
  }
}
```

## Static-site rule

GitHub Pages is static. Never place a Travelpayouts API token, marker, project
credential, or other secret in client-side source code.

The current `src/lib/affiliate.ts` helper centralizes the metadata contract.
A future server-side affiliate endpoint can call the official Travelpayouts
partner-link API and convert destination URLs into partner URLs without changing
article content or CTA components.

Travelpayouts currently documents its partner-link API as accepting a Project ID
(`trs`), partner marker, destination URLs and an optional `sub_id`.

## Recommended SubID format

Use stable, human-readable values that identify the source article and placement,
for example:

`article-slug:cta-name`

Example:

`vps-pro-algoritmicky-trading:broker-vps`
