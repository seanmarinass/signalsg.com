import Image from "next/image";
import { LandingMenusFeaturedDrinkProps } from "./landing-menus-feaured-drink";

const LandingMenusFeaturedDrinkMobile = ({
  name,
  korean,
  description,
  ingredients,
  city,
  image,
}: LandingMenusFeaturedDrinkProps) => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="aspect-square w-7/10 bg-gradient-to-b from-[#FF7E3F]/80 via-[#FF7E3F]/10 to-transparent absolute rounded-full" />
      <div className="p-4 flex flex-col items-center justify-center gap-2">
        <p className="text-4xl font-bold z-10 text-center">{name}</p>
        <div className="aspect-square w-[50vw] relative">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
          />
        </div>

        <div className="text-xl text-center">
          <p>{description}</p>
          <p className="text-site-rust-orange">{ingredients.join(" • ")}</p>
        </div>
      </div>
    </div>
  );
};

export default LandingMenusFeaturedDrinkMobile;
