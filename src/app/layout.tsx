import { Inter_Tight } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${interTight.className}`}>
        <Navbar /> {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
