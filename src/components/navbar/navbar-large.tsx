"use client";

import { ScrollProgress } from "../ui/scroll-progress";

import Link from "next/link";

import { NAVBAR_DATA } from "@/lib/data/navbar.data";

const NavbarLarge = () => {
  return (
    <nav className="px-5 py-4 backdrop-blur-sm fixed top-0 left-0 right-0 z-40 bg-site-background/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-12 w-full">
          <Link className="text-xl font-semibold" href="/">
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
                className="hover:text-site-muted transition-colors"
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
