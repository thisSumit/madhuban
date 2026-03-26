import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { Lenis } from "lenis/react";
import PhonePopup from "@/components/PhonePopup";
import { MessageCircle } from "lucide-react";

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
        <PhonePopup />
        <a href="https://wa.me/+917020704420">
        <div className='fixed bottom-4 z-10 bg-foreground p-2 right-4 flex items-end gap-2 text-white'>
          <span className='text-xs tracking-wider uppercase'>Inquire Now</span>
            <MessageCircle className='w-5 h-5' strokeWidth={1.5} />
            
        </div>
        </a>
      </body>
      </Lenis>
    </html>
  );
}
