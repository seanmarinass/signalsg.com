import { LandingMenuItem } from "@/lib/data/menu.data";
import LandingMenusFeaturedDrinkWeb from "./landing-menus-featured-drink-web";
import LandingMenusFeaturedDrinkMobile from "./landing-menus-featured-drink-mobile";

export type LandingMenusFeaturedDrinkProps = LandingMenuItem;

const LandingMenusFeaturedDrink = (props: LandingMenusFeaturedDrinkProps) => {
  return (
    <div>
      <div className="hidden md:block h-full">
        <LandingMenusFeaturedDrinkWeb {...props} />
      </div>

      <div className="block md:hidden h-full">
        <LandingMenusFeaturedDrinkMobile {...props} />
      </div>
    </div>
  );
};

export default LandingMenusFeaturedDrink;
