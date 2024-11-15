import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Footer";
import { Outfit } from "next/font/google";

const redHatDisplay = Outfit({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "RSUD Sam Ratulangi",
  description: "RSUD Sam Ratulangi Company Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>
        <Navbar />
        {children}
      </body>
      <FooterSection />
    </html>
  );
}
