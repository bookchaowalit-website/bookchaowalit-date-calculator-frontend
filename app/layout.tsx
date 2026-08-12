import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Date Calculator | Bookchaowalit",
  description: "Compute date differences and add or subtract days, weeks, or months.",
  keywords: ["date","calculator","duration","add days"],
  authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }],
  creator: "Bookchaowalit",
  publisher: "Bookchaowalit",
  metadataBase: new URL("https://bookchaowalit.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Date Calculator | Bookchaowalit",
    description: "Compute date differences and add or subtract days, weeks, or months.",
    siteName: "Bookchaowalit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Date Calculator | Bookchaowalit",
    description: "Compute date differences and add or subtract days, weeks, or months.",
    creator: "@bookchaowalit",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
