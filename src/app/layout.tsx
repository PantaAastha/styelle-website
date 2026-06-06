import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Styelle | Style Better Together",
  description: "StyledTogether by Styelle helps people discover coordinated outfit ideas for real-life moments.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Styelle | Style Better Together",
    description: "StyledTogether by Styelle helps people discover coordinated outfit ideas for real-life moments.",
    siteName: "Styelle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
