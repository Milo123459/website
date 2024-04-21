import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "milo",
  description: "milooOOoooooOOooooOOo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center w-full font-mono text-sm lg:flex lg:flex-col lg:items-center p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
