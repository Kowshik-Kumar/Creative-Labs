import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Creative Labz — Technical Services for Modern Teams",
  description:
    "Creative Labz builds fast, reliable digital products with web development, UI/UX, cloud infrastructure, and product engineering.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Creative Labz — Technical Services for Modern Teams",
    description:
      "A technical services agency focused on shipping dependable web products, internal tools, and scalable digital systems.",
    type: "website",
    url: "https://localhost",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Creative Labz",
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
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
