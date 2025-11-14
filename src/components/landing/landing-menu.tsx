import { MENU_ITEMS } from "@/lib/data/menu.data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LandingMenu = () => {
  return (
    <div className="px-5 py-20" id="menu">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-site-muted font-light md:text-2xl">
          02. 메뉴 | Menu
        </h2>

        <p className="text-2xl md:text-4xl">
          Each cocktail is a journey through Korea's most iconic destinations,
          crafted with{" "}
          <span className="text-site-muted">traditional ingredients</span> and{" "}
          <span className="text-site-muted">modern techniques.</span>
        </p>

        <div className="flex flex-col mt-16">
          {MENU_ITEMS.map((item, index) => (
            <div
              className="px-2 py-8 inline-flex border-t border-site-muted"
              key={index}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="text-2xl md:text-3xl">
                  <p>{item.name}</p>
                  <p className="text-site-muted">{item.korean}</p>
                </div>

                <div>
                  <p className="text-lg md:text-3xl w-full font-light">
                    {item.description}
                  </p>

                  <p className="text-base mt-8 font-medium text-site-muted">
                    {item.ingredients.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="flex items-center px-3 py-2 w-fit mx-auto border-transparent hover:border-site-muted border transition-colors"
          href="/menu"
        >
          Explore full menu <ChevronRight className="size-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default LandingMenu;
