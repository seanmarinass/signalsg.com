import LandingAboutSection from "@/components/landing/sections/landing-about-section";
import LandingHeroSection from "@/components/landing/sections/landing-hero-section";
import LandingMenu from "@/components/landing/landing-menu";
import LandingVisit from "@/components/landing/landing-visit";
import { landingPageMetadata } from "@/lib/config/metadata.config";

export const metadata = landingPageMetadata;

const Home = () => {
  return (
    <div>
      <LandingHeroSection />
      <LandingAboutSection />
      {/* <LandingMenu /> */}
      {/* <LandingVisit /> */}
    </div>
  );
};

export default Home;
