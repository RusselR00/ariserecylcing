import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import MobileContactButtons from "./components/MobileContactButtons";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arise Trading & Maintenance W.L.L | Quality Products & Service Excellence",
  description: "Your trusted partner for Corporate Supplies, Trading, and Professional Maintenance solutions in the region.",
  keywords: "Trading, Maintenance, Corporate Supplies, Thermal Paper, Professional Services, Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <MobileContactButtons />
      </body>
    </html>
  );
}
