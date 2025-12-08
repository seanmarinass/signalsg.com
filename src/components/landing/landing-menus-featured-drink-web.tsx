import Image from "next/image";
import { LandingMenusFeaturedDrinkProps } from "./landing-menus-feaured-drink";

const LandingMenusFeaturedDrinkWeb = ({
  name,
  description,
  ingredients,
  image,
}: LandingMenusFeaturedDrinkProps) => {
  return (
    <div className="py-10 px-5 relative h-full gap-2 flex items-center justify-center">
      <div className="aspect-square w-7/10 bg-gradient-to-b from-[#FF7E3F]/80 via-[#FF7E3F]/10 to-transparent absolute rounded-full" />

      <div className="z-10 mx-auto flex flex-col items-center max-w-sm">
        <p className="text-5xl text-center font-semibold">{name}</p>

        <Image
          src={image.src}
          alt={image.alt}
          className="object-contain size-72"
        />

        <div className="text-center">
          <p className="text-xl">{description}</p>
          <p className="text-site-rust-orange mt-2">
            {ingredients.join(" • ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingMenusFeaturedDrinkWeb;
