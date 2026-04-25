# Ritik Kumar — Portfolio

> Personal developer portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com/)

---

## ✨ Features

- ⚡ **Next.js 15 App Router** — fast, modern web framework
- 🎨 **Dark / Light mode** — smooth theme toggle with `next-themes`
- 🎞️ **Framer Motion animations** — fluid page-in view transitions
- 📬 **Contact form** — powered by [Web3Forms](https://web3forms.com/)
- 🔍 **SEO optimized** — metadata, Open Graph, Twitter Cards & JSON-LD structured data
- 📱 **Fully responsive** — mobile, tablet and desktop ready
- 🗂️ **Easy to personalize** — all content lives in one `data.ts` file

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework & routing |
| [React 19](https://react.dev/) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Web3Forms](https://web3forms.com/) | Contact form backend |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/       # All UI components (Hero, About, Projects, etc.)
│   ├── data/
│   │   └── data.ts       # ⭐ Main content file — edit this to personalize
│   ├── layout.tsx        # SEO metadata & fonts
│   └── globals.css       # Global styles & CSS variables
public/
└── img/                  # Profile picture, project screenshots
```

---

## ✏️ Customization

All your personal content is centralized — most changes only require editing **one file**:

1. **`src/app/data/data.ts`** — skills, projects, experience, education & nav links
2. **`/public/img/`** — profile picture (`profilepic.png`) & project screenshots
3. **`src/app/layout.tsx`** — page title, SEO metadata & structured data
4. **`src/app/components/Hero.tsx`** — hero name & headline
5. **`src/app/components/Contact.tsx`** — your email address
6. **`src/app/components/Footer.tsx`** — footer name & link
7. **`src/app/robots.ts`** & **`src/app/sitemap.ts`** — your live domain URL

> 💡 **Tip:** Search for `TODO:` across the project to find every spot that needs your attention.

---

## 📬 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) — free and no backend required.

1. Visit [web3forms.com](https://web3forms.com/) and generate an access key using your email.
2. Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Restart the dev server — the form is ready.

---

## 🌐 Deployment

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/)
3. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel's **Environment Variables** settings
4. Deploy — your portfolio goes live instantly ✅

---

## 📄 License

Free to use for personal portfolios. If you find it useful, a ⭐ on the repo is always appreciated!

---

<p align="center">Built with ❤️ by <a href="https://github.com/heyritikk">Ritik Kumar</a></p>
