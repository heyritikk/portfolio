import type { Metadata, Viewport } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

// ============================================================
// METADATA — Update this section with your personal info.
// This controls SEO, social sharing previews, and browser tab title.
// Replace all placeholder values with your own details.
// ============================================================

const description =
  "Ritik Kumar — Full Stack Developer portfolio showcasing projects, web applications, and software engineering experience.";

export const metadata: Metadata = {
  title: "Ritik Kumar - Full Stack Developer",
  description,
  keywords: [
    "Ritik Kumar",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Ritik Kumar - Full Stack Developer",
    description,
    url: "https://www.yourdomain.com", // TODO: Replace with your domain
    siteName: "Ritik Kumar Portfolio",
    images: [
      {
        url: "/img/preview.png", // TODO: Replace with your OG preview image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Ritik Kumar Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Kumar - Full Stack Developer",
    description,
    images: ["/img/preview.png"],
  },
  robots: "index, follow",
  metadataBase: new URL("https://www.yourdomain.com"), // TODO: Replace with your domain
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ============================================================
            STRUCTURED DATA (JSON-LD) — Update with your personal info.
            This helps search engines understand your portfolio better.
            Replace all placeholder values below with your own details.
            ============================================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Ritik Kumar",
                url: "https://www.yourdomain.com", // TODO: Replace with your domain
                jobTitle: "Full Stack Developer", // TODO: Replace with your job title
                image: "https://www.yourdomain.com/img/profilepic.webp", // TODO: Replace with your domain + profile pic path
                description:
                  "Full Stack Developer specializing in modern web applications.", // TODO: Replace with your description
                knowsAbout: ["React", "Next.js", "Node.js", "TypeScript"], // TODO: Replace with your skills
                sameAs: [
                  "https://www.linkedin.com/in/yourprofile/", // TODO: Replace with your LinkedIn URL
                  "https://github.com/yourusername", // TODO: Replace with your GitHub URL
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Ritik Kumar Portfolio",
                url: "https://www.yourdomain.com", // TODO: Replace with your domain
                description: "Portfolio of Ritik Kumar, Full Stack Developer.",
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.yourdomain.com", // TODO: Replace with your domain
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
