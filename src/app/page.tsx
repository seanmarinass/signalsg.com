import LandingAbout from "@/components/landing/landing-about";
import LandingFaq from "@/components/landing/landing-faq";
import LandingHero from "@/components/landing/landing-hero";
import LandingMenu from "@/components/landing/landing-menu";
import LandingVisit from "@/components/landing/landing-visit";
import { landingPageMetadata } from "@/lib/config/metadata.config";

export const metadata = landingPageMetadata;

const Home = () => {
  return (
    <div>
      <LandingHero />
      <LandingAbout />
      <LandingMenu />
      <LandingVisit />
      <LandingFaq />
    </div>
  );
};

export default Home;
