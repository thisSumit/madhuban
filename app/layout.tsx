import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { Lenis } from "lenis/react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhuban Village",
  description: "Madhuban Village",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Lenis root>
      <body
        className={`${playfairDisplay.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
      </Lenis>
    </html>
  );
}
