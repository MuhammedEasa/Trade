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
  title: "Start Trading Today - Connect with Expert Brokers",
  description: "Join thousands of traders and connect with expert brokers to kickstart your trading journey. Get personalized trading advice and support.",
  keywords: ['Trading', 'Expert Brokers', 'Trading Advice', 'Trading Support', 'Financial Trading', 'Trading Goals', 'Trading Services'],
  authors: [{ name: 'Muhammed Easa' }],
  openGraph: {
    title: "Start Trading Today - Connect with Expert Brokers",
    description: "Join thousands of traders and connect with expert brokers to kickstart your trading journey. Get personalized trading advice and support.",
    url: "https://github.com/MuhammedEasa/Trade",
    siteName: "Trading Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
