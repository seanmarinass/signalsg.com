import { Button } from "@/components/ui/button";
import { LANDING_MENU_ITEMS } from "@/lib/data/menu.data";
import LandingMenusFeaturedDrink from "@/components/form-components/landing-menus-feaured-drink";

const LandingMenusSection = () => {
  return (
    <section className="py-10 md:py-20 bg-site-light-cream px-5" id="menus">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="font-light md:text-2xl">01. 메뉴 | Menu</h2>

        <div className="w-full max-w-5xl mt-8">
          <h3 className="text-center mb-2">Featured Drinks</h3>
          <div className="mt-2 grid md:grid-cols-2">
            {LANDING_MENU_ITEMS.map((item, index) => (
              <LandingMenusFeaturedDrink key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-2 mt-8 w-full md:w-fit">
          <Button
            variant="outline"
            className="w-full text-site-rust-orange border border-site-rust-orange md:text-lg"
          >
            View Drinks Menu
          </Button>
          <Button
            variant="outline"
            className="w-full text-site-rust-orange border border-site-rust-orange md:text-lg"
          >
            View Food Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingMenusSection;
