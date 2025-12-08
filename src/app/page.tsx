import LandingAboutSection from "@/components/landing/sections/landing-about-section";
import LandingHeroSection from "@/components/landing/sections/landing-hero-section";
import { landingPageMetadata } from "@/lib/config/metadata.config";
import LandingMenusSection from "@/components/landing/sections/landing-menus-section";
import LandingQuizSection from "@/components/landing/sections/landing-quiz-section";
import LandingVisitSection from "@/components/landing/sections/landing-visit-section";

export const metadata = landingPageMetadata;

const Home = () => {
  return (
    <div>
      <LandingHeroSection />
      <LandingMenusSection />
      <LandingAboutSection />
      {/* <LandingQuizSection /> */}
      <LandingVisitSection />
      {/* <LandingMenu /> */}
      {/* <LandingVisit /> */}
    </div>
  );
};

export default Home;
