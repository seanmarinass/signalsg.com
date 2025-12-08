import { INSTAGRAM_LINK } from "@/lib/data/social.data";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 py-10">
      <div className="text-center text-site-light-cream">
        <div className="space-y-2 flex items-center justify-center">
          <Link href={INSTAGRAM_LINK} target="_blank">
            Instagram
          </Link>
        </div>

        <p className="text-xs text-site-light-cream/50 mt-16">
          © {currentYear} Signal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
