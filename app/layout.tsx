import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import { themeInitScript } from "@/lib/theme-script";
import { getSiteStructuredData } from "@/lib/structured-data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} – Premium Laundry & Dry Cleaning`,
  description:
    "Professional laundry, dry cleaning, ironing and doorstep pickup & delivery in Indore. Fast, eco-friendly, affordable.",
  keywords: [
    "laundry Indore",
    "dry cleaning Indore",
    "wash and fold",
    "pickup delivery",
    "Geetabhawan laundry",
    "Scheme 140 laundry",
  ],
  icons: {
    icon: "/brand-logo.png",
    apple: "/brand-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Premium Laundry & Dry Cleaning`,
    description:
      "Professional laundry & dry cleaning delivered to your doorstep in Indore. Schedule a pickup today!",
    images: [{ url: "/brand-logo.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} – Premium Laundry & Dry Cleaning`,
    description:
      "Doorstep laundry and dry cleaning in Indore — Geetabhawan & Scheme No. 140.",
    images: ["/brand-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd data={getSiteStructuredData()} />
      </head>
      <body>
        <Providers>{children}</Providers>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
