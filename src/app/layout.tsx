import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fidha Fathima | Frontend & Mobile Developer",
  description:
    "Portfolio of Fidha Fathima — Frontend and Mobile Developer building responsive web experiences and cross-platform mobile apps with Flutter, React, Next.js, and TypeScript.",
  keywords: [
    "Fidha Fathima",
    "Frontend Developer",
    "Mobile Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js",
    "Calicut",
    "Kerala Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#080808] text-[#F5F5F5] antialiased selection:bg-[#A81E2E]/30 selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
