import { useRouter, usePathname } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (href: string) => {
    if (href.startsWith("#")) {
      // Check if we're on the home page
      if (pathname === "/") {
        // We're on home page, scroll to the element
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // We're on a different page, navigate to home with hash
        router.push(`/${href}`);
      }
    } else {
      // Handle regular route navigation
      router.push(href);
    }
  };

  return { navigate };
};