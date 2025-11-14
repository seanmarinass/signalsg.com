import LandingAbout from "@/components/landing/landing-about";
import LandingHero from "@/components/landing/landing-hero";
import LandingMenu from "@/components/landing/landing-menu";
import LandingVisit from "@/components/landing/landing-visit";

const Home = () => {
  return (
    <div className="">
      <LandingHero />
      <LandingAbout />
      <LandingMenu />
      <LandingVisit />
    </div>
  );
};

export default Home;
