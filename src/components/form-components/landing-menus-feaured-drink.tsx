import { LandingMenuItem } from "@/lib/data/menu.data";
import LandingMenusFeaturedDrinkWeb from "../landing/landing-menus-featured-drink-web";
import LandingMenusFeaturedDrinkMobile from "../landing/landing-menus-featured-drink-mobile";

export interface LandingMenusFeaturedDrinkProps extends LandingMenuItem {}

const LandingMenusFeaturedDrink = (props: LandingMenusFeaturedDrinkProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <LandingMenusFeaturedDrinkWeb {...props} />
      </div>

      <div className="block md:hidden">
        <LandingMenusFeaturedDrinkMobile {...props} />
      </div>
    </div>
  );
};

export default LandingMenusFeaturedDrink;
