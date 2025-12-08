import { Inter, Bebas_Neue } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} ${bebasNeue.variable}`}
      >
        <Navbar /> {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
