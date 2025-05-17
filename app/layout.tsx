import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

import "./globals.css";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-eyuels-projects.vercel.app/"),
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Front-end developer portfolio — Learn to code & have fun doing it :)",
  keywords: [
    "portfolio",
    "frontend developer",
    "web developer",
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Next.js",
  ],
  openGraph: {
    title: "Portfolio",
    description:
      "Front-end developer portfolio — Learn to code & have fun doing it :)",
    url: "https://portfolio-eyuels-projects.vercel.app/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Eyuel's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description:
      "Front-end developer portfolio — Learn to code & have fun doing it :)",
    images: ["/og-image.png"],
    creator: "@yourTwitterHandle",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
