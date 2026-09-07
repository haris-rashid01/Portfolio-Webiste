import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harisrashid.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haris Rashid | Associate Software Engineer & Full-Stack Developer",
    template: "%s | Haris Rashid",
  },
  description:
    "Portfolio of Haris Rashid, an Associate Software Engineer specializing in Full-Stack Web Development, Next.js, React, Node.js, TypeScript, and AI integrations.",
  keywords: [
    "Haris Rashid",
    "Software Engineer",
    "Associate Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Engineer",
    "Web Developer Portfolio",
    "Frontend Engineer",
    "Backend Developer",
  ],
  authors: [{ name: "Haris Rashid", url: siteUrl }],
  creator: "Haris Rashid",
  publisher: "Haris Rashid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haris Rashid | Associate Software Engineer & Full-Stack Developer",
    description:
      "Explore the software engineering portfolio, featured projects, experience, and skills of Haris Rashid.",
    url: siteUrl,
    siteName: "Haris Rashid Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Haris Rashid Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haris Rashid | Associate Software Engineer & Full-Stack Developer",
    description:
      "Explore the software engineering portfolio, featured projects, experience, and skills of Haris Rashid.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Haris Rashid",
  jobTitle: "Associate Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/favicon.png`,
  sameAs: [
    "https://github.com/haris-rashid01",
    "https://linkedin.com/in/haris-rashid01",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Software Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "REST APIs",
    "PostgreSQL",
  ],
  description:
    "Associate Software Engineer passionate about scalable software solutions, modern web apps, and clean design.",
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Haris Rashid Portfolio",
  url: siteUrl,
  author: {
    "@type": "Person",
    name: "Haris Rashid",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${inter.variable} ${oswald.variable} font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
