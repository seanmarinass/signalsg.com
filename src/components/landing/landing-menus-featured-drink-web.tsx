import { LandingMenuItem } from "@/lib/data/menu.data";
import Image from "next/image";
import { LandingMenusFeaturedDrinkProps } from "./landing-menus-feaured-drink";

const LandingMenusFeaturedDrinkWeb = ({
  name,
  korean,
  description,
  ingredients,
  city,
  image,
}: LandingMenusFeaturedDrinkProps) => {
  return (
    <div className="p-4 grid grid-cols-3 items-center">
      <div className="aspect-square h-full relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
        />
      </div>
      <div className="col-span-2 space-y-2">
        <p className="text-lg md:text-2xl">
          {name} {korean}
        </p>
        <p>{description}</p>
        <p className="text-sm text-site-rust-orange">
          {ingredients.join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default LandingMenusFeaturedDrinkWeb;
