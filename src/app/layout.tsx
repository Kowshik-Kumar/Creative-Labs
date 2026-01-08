import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creative Labz — Portfolio",
  description:
    "A modern dark-themed portfolio showcasing design, motion, and web projects.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Creative Labz — Portfolio",
    description:
      "A modern dark-themed portfolio showcasing design, motion, and web projects.",
    type: "website",
    url: "https://localhost",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Creative Labz Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
