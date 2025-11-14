import LandingAbout from "@/components/landing/landing-about";
import LandingHero from "@/components/landing/landing-hero";
import LandingMenu from "@/components/landing/landing-menu";

const Home = () => {
  return (
    <div className="">
      <LandingHero />
      <LandingAbout />
      <LandingMenu />
    </div>
  );
};

export default Home;
