import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weng Fei Fung - Technical Leadership & Full-Stack Development",
  description: "Senior full-stack developer transitioning to leadership. 5-star rated educator, proven track record with enterprise clients. Available for consulting and full-time leadership roles.",
  keywords: "full-stack developer, technical leadership, React, Node.js, business automation, n8n, MERN stack, consulting",
  authors: [{ name: "Weng Fei Fung" }],
  openGraph: {
    title: "Weng Fei Fung - Technical Leadership That Delivers Results",
    description: "From code to leadership: Transform your tech vision into reality with proven full-stack expertise and business automation solutions.",
    url: "https://wengindustries.com",
    siteName: "Weng Industry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weng Fei Fung - Technical Leadership & Development",
    description: "5-star rated developer with enterprise experience. Available for leadership roles and consulting.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
