import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BgScene from "@/components/three/BgScene";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sounak Guha | Full Stack Developer",
  description:
    "Portfolio of Sounak Guha — Full Stack Developer specializing in modern web and mobile applications.",
  keywords: [
    "Sounak Guha",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Sounak Guha" }],
  openGraph: {
    title: "Sounak Guha | Full Stack Developer",
    description:
      "Building scalable, user-centric web and mobile interfaces with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased relative">
        <div className="fixed inset-0 -z-10">
          <BgScene />
        </div>
        {children}
        </body>
    </html>
  );
}
