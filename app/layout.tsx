import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/src/copmonents/WhatsAppButton";
import SplashWrapper from "@/src/copmonents/SplashWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Humaidi Omar | Online Fitness Coach",
  description: "Transforming Bodies. Building Discipline.",
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
        <SplashWrapper>
          {children}
          <WhatsAppButton />
        </SplashWrapper>
      </body>
    </html>
  );
}
