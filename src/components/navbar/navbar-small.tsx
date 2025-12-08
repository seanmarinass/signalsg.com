"use client";

import { Menu, X } from "lucide-react";
import { ScrollProgress } from "../ui/scroll-progress";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";
import { NAVBAR_DATA } from "@/lib/data/navbar.data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/hooks/use-navigation";
import Link from "next/link";

const NavbarSmall = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useNavigation();

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
        isScrolled && "backdrop-blur-md bg-site-dark-grey",
        isQuizPage && "bg-site-dark-grey"
      )}
    >
      <div className="max-w-7xl mx-auto text-site-light-cream">
        <div className="flex items-center gap-12 w-full">
          <Link className="text-xl font-semibold" href="/">
            SIGNAL
          </Link>

          <div className="relative flex-1">
            <ScrollProgress className="absolute" />
          </div>
          <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
            <DropdownMenuTrigger className="cursor-pointer">
              {isOpen ? (
                <X className="size-6 text-site-light-cream" />
              ) : (
                <Menu className="size-6 text-site-light-cream" />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[100vw] rounded-none border-0 bg-site-light-cream text-site-dark-brown p-0 py-4 flex flex-col gap-4 shadow-none mt-4">
              <DropdownMenuGroup>
                <div className="flex flex-col gap-2">
                  {NAVBAR_DATA.map(({ href, title }, index) => (
                    <button
                      key={index}
                      className="text-2xl font-medium px-5 text-left"
                      onClick={() => {
                        navigate(href);
                        setIsOpen(false);
                      }}
                    >
                      {title}
                    </button>
                  ))}
                </div>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSmall;
