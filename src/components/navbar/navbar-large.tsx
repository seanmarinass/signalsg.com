"use client";

import { ScrollProgress } from "../ui/scroll-progress";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import Link from "next/link";

import { NAVBAR_DATA } from "@/lib/data/navbar.data";
import { usePathname } from "next/navigation";

const NavbarLarge = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const isQuizPage = pathname.toLowerCase().includes("quiz");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "px-5 py-4 fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled && "backdrop-blur-md bg-site-dark-brown/80",
        isQuizPage && "bg-site-dark-brown"
      )}
    >
      <div className="max-w-7xl mx-auto text-site-light-cream">
        <div className="flex items-center gap-12 w-full">
          <Link
            className="text-xl font-semibold hover:opacity-60 transition-opacity"
            href="/"
          >
            SIGNAL
          </Link>

          <div className="relative flex-1">
            <ScrollProgress className="absolute" />
          </div>
          <div className="flex gap-12">
            {NAVBAR_DATA.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="hover:text-site-light-cream/60 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLarge;
