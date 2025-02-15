import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/home/Navbar'

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Qrazy",
  description: "Developed by @ankit_628792",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
          <Navbar />
          <section className="w-full flex-grow">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
