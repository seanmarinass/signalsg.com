import { INSTAGRAM_LINK } from "@/lib/data/social.data";
import Link from "next/link";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 py-20 text-site-light-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Location */}
          <div className="text-center md:text-left">
            <h3 className="text-site-light-cream/60 mb-4 w-fit mx-auto md:mx-0 inline-flex pb-1 border-b border-site-light-cream/60 font-light">
              Location
            </h3>
            <div className="space-y-1 font-light">
              <p>76 Tanjong Pagar Road,</p>
              <p>Singapore 088497</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-site-light-cream/60 mb-4 w-fit mx-auto md:mx-0 inline-flex pb-1 border-b border-site-light-cream/60 font-light">
              Opening Hours
            </h3>
            <div className="space-y-1 font-light">
              <p>Mon - Sun</p>
              <p>6:30pm - 12:00am</p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-site-light-cream/60 mb-4 w-fit mx-auto md:mx-0 inline-flex pb-1 border-b border-site-light-cream/60 font-light">
              Contact
            </h3>
            <div className="space-y-3 font-light">
              <div className="space-y-1">
                <p>+65 9899 0742</p>
                <p>signalsg@gmail.com</p>
              </div>

              <Link
                href={INSTAGRAM_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-site-rust-orange transition-colors"
              >
                <Instagram className="size-4" />
                Instagram
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-site-light-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-site-rust-orange">SIGNAL</h2>
          <p className="text-xs text-site-light-cream/50 font-light">
            © {currentYear} Signal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
