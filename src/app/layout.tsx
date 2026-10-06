import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alex Johnson | QA Automation Engineer",
    template: "%s | Alex Johnson - QA Automation Engineer",
  },
  description: "Senior QA Automation Engineer specializing in test automation frameworks (Cypress, Playwright, Selenium), API testing, performance testing, CI/CD integration, and quality engineering. Building reliable software through strategic testing.",
  keywords: [
    "QA Automation",
    "Test Automation Engineer",
    "Cypress",
    "Playwright",
    "Selenium",
    "API Testing",
    "Performance Testing",
    "CI/CD",
    "Quality Assurance",
    "Software Testing",
  ],
  authors: [{ name: "Alex Johnson" }],
  creator: "Alex Johnson",
  publisher: "Alex Johnson",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnsonqa.com",
    title: "Alex Johnson | QA Automation Engineer",
    description: "Senior QA Automation Engineer specializing in test automation frameworks, API testing, performance testing, and quality engineering.",
    siteName: "Alex Johnson - QA Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson | QA Automation Engineer",
    description: "Senior QA Automation Engineer specializing in test automation frameworks, API testing, performance testing, and quality engineering.",
    creator: "@alexjohnsonqa",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}