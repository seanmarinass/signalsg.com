import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Navbar /> {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
