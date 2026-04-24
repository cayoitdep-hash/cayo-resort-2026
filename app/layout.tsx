import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteContent } from "../data/site-content";
import MotionInitializer from "../components/ui/MotionInitializer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: siteContent.brand.name,
  description:
    "Cayo Exclusive Resort & Spa is a refined luxury resort in Crete overlooking Spinalonga, shaped by privacy, gastronomy, wellness, and destination experience.",
  metadataBase: new URL("https://www.cayoresort.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <MotionInitializer />
        {children}
      </body>
    </html>
  );
}