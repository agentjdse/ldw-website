import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import ButtonCTA from "@/components/btnCTA";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "LDW",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="{montserrat.variable}">
      <body>
        {children}

      </body>
    </html>
  );
}
