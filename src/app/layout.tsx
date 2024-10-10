import type { Metadata } from "next";
import { Inter } from "next/font/google";


// styles
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/button.css";
import "../styles/modal.css";
import "../styles/customes.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "E-commerce Website Template (FREEBIE)",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
