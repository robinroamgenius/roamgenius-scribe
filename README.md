# RoamGenius Dispatch

Act as an Elite UI/UX Designer and Frontend Engineer. Build a premium, high-converting content and newsletter platform for my brand "RoamGenius". 

The platform focuses on "Automated Trading, Algorithmic Trading (AOS), and Geographic Arbitrage for Digital Nomads".

VARS TO INTEGRATE NATIVELY:

- Logo: The navbar must feature a perfectly scaled image container pointing to "/roamgenius-logo.jpg". Clicking the logo redirects to the homepage. No extra taglines or text next to the logo.

- Layout Style: Ultra-clean, premium, modern financial magazine. Use top-tier typography (elegant serif for headings like Georgia/Merriweather, crisp sans-serif for body text). High contrast, plenty of white space.

- Dynamic Images (CRITICAL): Do not hardcode image files. Integrate a dynamic frontend helper that automatically fetches high-quality, relevant images from the Unsplash API based on the article's title/context (e.g., if the title mentions "VPS" or "Server", fetch a tech/data-center image; if it mentions "Trading", fetch charts; if it's general, fetch a premium nomad travel lifestyle image).

- Article Previews: On the homepage, render articles as elegant cards with a horizontal layout (thumbnail on the left, beautifully formatted typography on the right). 

- Read More Link: Under each article excerpt, place a clean, minimalist text link that says "Pokračovat ve čtení →".

PAGES TO BUILD:

1. Homepage (`index.html` layout): Features the sticky navigation bar with the custom logo, a clean list of recent posts with images and excerpts, and a footer.

2. Post Detail (`posts/` clean layout): Features the exact same sticky navbar with the logo. Contains the article category, publication date, a large high-res featured image, polished article headers (H1, H2, H3), and professional call-to-action boxes for premium affiliate links.

Make the design look 10x more premium and professional than standard static HTML templates. Ensure it is fully responsive for both mobile and desktop.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://roamgenius-scribe.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b13ab94e-7356-46c0-8898-32a3fa2d42c2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
