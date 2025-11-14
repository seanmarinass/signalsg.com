"use client";

import { Menu, X } from "lucide-react";
import { ScrollProgress } from "../ui/scroll-progress";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import { NAVBAR_DATA } from "@/lib/data/navbar.data";

const NavbarLarge = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-5 py-4 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-12 w-full">
          <p className="text-xl font-semibold">SIGNAL</p>

          <div className="relative flex-1">
            <ScrollProgress className="absolute" />
          </div>
          {/* <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
            <DropdownMenuTrigger className="cursor-pointer">
              {isOpen ? (
                <X className="size-6 text-site-white" />
              ) : (
                <Menu className="size-6 text-site-white" />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100vw] rounded-none border-0 bg-site-muted text-site-white p-0 py-4 flex flex-col gap-4 shadow-none mt-4">
              <DropdownMenuGroup>
                <div className="flex flex-col gap-2">
                  {navbarData.map(({ href, title }, index) => (
                    <Link
                      href={href}
                      key={index}
                      className="text-2xl font-medium px-5"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <div className="flex gap-12">
            {NAVBAR_DATA.map((item, index) => (
              <Link href={item.href} key={index}>
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
