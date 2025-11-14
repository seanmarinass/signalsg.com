import { Inter_Tight } from "next/font/google";

import "./globals.css";
import NavbarLarge from "@/components/navbar/navbar-large";
import Navbar from "@/components/navbar/navbar";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      </body>
    </html>
  );
};

export default RootLayout;
