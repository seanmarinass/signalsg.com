import LandingAboutSection from "@/components/landing/sections/landing-about-section";
import LandingHeroSection from "@/components/landing/sections/landing-hero-section";
import LandingMenu from "@/components/landing/landing-menu";
import LandingVisit from "@/components/landing/landing-visit";
import { landingPageMetadata } from "@/lib/config/metadata.config";
import LandingMenusSection from "@/components/landing/sections/landing-menus-section";

export const metadata = landingPageMetadata;

const Home = () => {
  return (
    <div>
      <LandingHeroSection />
      <LandingMenusSection />
      <LandingAboutSection />
      {/* <LandingMenu /> */}
      {/* <LandingVisit /> */}
    </div>
  );
};

export default Home;
