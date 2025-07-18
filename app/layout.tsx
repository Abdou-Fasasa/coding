// ✅ layout.tsx لتصميم رسمي بمنصة شركة بدون أي أخطاء
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coding - Learn to Code",
  description: "Professional official company-style platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-black`}>{children}</body>
    </html>
  );
}
