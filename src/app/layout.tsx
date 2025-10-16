import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredericka_the_Great, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollRevealHeader from "../components/ScrollRevealHeader";
import WavyMobileNav from "../components/WavyMobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredericka = Fredericka_the_Great({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-fredericka",
});

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Sikkimese Lepcha Cultural Association",
  description: "Official website of the Sikkimese Lepcha Cultural Association (SLCA)",
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.ico?v=2', type: 'image/x-icon' },
      { url: '/favicon.ico?v=2', sizes: '32x32' },
      { url: '/favicon.ico?v=2', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/favicon.ico?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=2" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${fredericka.variable} ${bebas.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <ScrollRevealHeader />
          <main className="flex-1 w-full overflow-y-auto">{children}</main>
          <Footer />
          <WavyMobileNav />
        </div>
      </body>
    </html>
  );
}
