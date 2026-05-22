import type { Metadata } from "next";
import { Anton, Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
});

const META_DESC =
  "Apparel for athletes who traded one obsession for another. Veteran owned. Sober founded. First drop July 1, 2026.";
const META_TITLE = "Trade The Bar | Veteran Owned Sober Apparel";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    siteName: "Trade The Bar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
