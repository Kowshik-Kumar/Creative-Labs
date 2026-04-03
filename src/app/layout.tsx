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
  title: "Creative Labz — Bold Ideas, Flawless Execution",
  description:
    "Trusted by founders and business owners who value ROI over hype. Performance, Content & Social Media Marketing.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Creative Labz — Bold Ideas, Flawless Execution",
    description:
      "Trusted by founders and business owners who value ROI over hype.",
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
