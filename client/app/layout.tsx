import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nocteln",
  description: "Nocteln's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <UserProvider>
        <body className="bg-[#131314] scroll-smooth">{children}</body>
      </UserProvider>
    </html>
  );
}
