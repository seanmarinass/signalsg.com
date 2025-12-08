import { Button } from "@/components/ui/button";
import { LANDING_MENU_ITEMS } from "@/lib/data/menu.data";
import LandingMenusFeaturedDrink from "@/components/landing/landing-menus-feaured-drink";

const LandingMenusSection = () => {
  return (
    <section className="bg-site-light-cream overflow-clip" id="menus">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative px-5 py-10 md:py-20">
        <h2 className="font-light md:text-2xl">01. 메뉴 | Menu</h2>

        <div className="w-full max-w-5xl mt-8">
          <div className="mt-2 grid md:grid-cols-2 gap-4">
            {LANDING_MENU_ITEMS.map((item, index) => (
              <LandingMenusFeaturedDrink key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-2 mt-8 w-full md:w-fit">
          <Button
            variant="outline"
            className="w-full text-site-light-cream border border-site-rust-orange md:text-lg bg-site-rust-orange z-10"
          >
            View Drinks Menu
          </Button>
          <Button
            variant="outline"
            className="w-full text-site-rust-orange border border-site-rust-orange md:text-lg bg-site-light-cream z-10"
          >
            View Food Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingMenusSection;
