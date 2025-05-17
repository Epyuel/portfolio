import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

import "./globals.css";

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
    "Eyuels Projects",
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

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
