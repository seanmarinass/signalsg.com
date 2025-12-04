import Image from "next/image";
import { LandingMenusFeaturedDrinkProps } from "../form-components/landing-menus-feaured-drink";

const LandingMenusFeaturedDrinkMobile = ({
  name,
  korean,
  description,
  ingredients,
  city,
  image,
}: LandingMenusFeaturedDrinkProps) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-2">
      <p className="text-lg font-medium">
        {name} {korean}
      </p>
      <div className="aspect-square w-[50vw] relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
        />
      </div>

      <div className="text-center">
        <p className="text-sm">{description}</p>
        <p className="text-sm text-site-rust-orange">
          {ingredients.join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default LandingMenusFeaturedDrinkMobile;
