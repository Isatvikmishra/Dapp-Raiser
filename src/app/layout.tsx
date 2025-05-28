import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "@/components/Navbar";
import  Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dapp Raiser",
  description:
    "Raise donation for a cause.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-700">
        <ThirdwebProvider>
          <Navbar />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
          
        </ThirdwebProvider>
        <Footer />  
      </body>
    </html>
  );
}