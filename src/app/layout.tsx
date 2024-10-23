import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/context/AuthContext";

// styles
import "../styles/globals.css";
import "../styles/layout.css";
import "../styles/button.css";
import "../styles/modal.css";
import "../styles/customes.css";
import StoreProvider from "@/store/StoreProvider";

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
        <StoreProvider>
          <AuthContextProvider>
            <Header />
            {children}
            <Footer />
          </AuthContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}

