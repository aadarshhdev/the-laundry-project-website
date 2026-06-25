import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Laundry Project – Premium Laundry & Dry Cleaning",
  description:
    "Professional laundry, dry cleaning, ironing and doorstep pickup & delivery. Fast, eco-friendly, affordable.",
  keywords: ["laundry", "dry cleaning", "ironing", "pickup delivery", "wash fold"],
  icons: {
    icon: "/brand-logo.png",
    apple: "/brand-logo.png",
  },
  openGraph: {
    title: "The Laundry Project – Premium Laundry & Dry Cleaning",
    description:
      "Professional laundry & dry cleaning delivered to your doorstep. Schedule a pickup today!",
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
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
