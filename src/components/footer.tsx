import { INSTAGRAM_LINK } from "@/lib/data/social.data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5">
      <div className="grid grid-cols-4 items-center justify-between font-extralight max-w-7xl mx-auto border-t pt-4 pb-10 lg:pb-40 border-site-foreground">
        <div className="text-xs lg:text-base col-span-3">
          © {currentYear} Signal
        </div>

        <div className="space-y-4">
          <p className="text-site-muted font-medium">Links</p>
          <div className="space-y-2">
            <Link href={INSTAGRAM_LINK} target="_blank">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
