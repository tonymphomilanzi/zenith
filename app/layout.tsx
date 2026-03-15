import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif" 
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "ZENITH | Beyond Reality",
  description: "Luxury Travel Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}