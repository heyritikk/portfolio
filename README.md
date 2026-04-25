# Portfolio Template

A modern, animated developer portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

## Features

- Responsive design (mobile, tablet, desktop)
- Dark / Light mode with smooth toggle
- Animated sections using Framer Motion
- Contact form powered by [Web3Forms](https://web3forms.com/)
- SEO optimized with metadata, Open Graph, Twitter Cards, and JSON-LD
- Sticky project cards with hover effects
- Easy to customize — just edit `data.ts` and a few files

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. Edit **`src/app/data/data.ts`** — your skills, projects, experience, education, and links.
2. Replace images in **`/public/img/`** — profile picture, project screenshots, preview image.
3. Update **`src/app/layout.tsx`** — page title, description, SEO metadata, structured data.
4. Update **`src/app/components/Hero.tsx`** — your name and connect link.
5. Update **`src/app/components/Contact.tsx`** — your email address.
6. Update **`src/app/components/Footer.tsx`** — your name and link.
7. Update **`src/app/robots.ts`** and **`src/app/sitemap.ts`** — your domain URL.
8. Create **`.env.local`** with your Web3Forms access key (see below).

> **Tip:** Search for `TODO:` across the project to find every spot that needs your attention.

## Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/):

1. Go to [web3forms.com](https://web3forms.com/) and create an access key with your email.
2. Create a `.env.local` file in the project root:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Restart the dev server.

## Deployment

Push to GitHub, then import the repo on [Vercel](https://vercel.com/). Add your environment variable in Vercel's project settings.

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [react-icons](https://react-icons.github.io/react-icons/)
- [Web3Forms](https://web3forms.com/)

## License

Free to use for personal portfolios.

---

📖 See **`instructions.txt`** for detailed step-by-step setup guide.
