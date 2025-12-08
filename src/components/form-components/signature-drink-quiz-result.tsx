import Image, { StaticImageData } from "next/image";

interface SignatureDrinkQuizResultProps {
  name: string;
  korean: string;
  description: string;
  ingredients: string[];
  city: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
}

const SignatureDrinkQuizResult = ({
  name,
  description,
  ingredients,
  image,
}: SignatureDrinkQuizResultProps) => {
  return (
    <div className="py-6 px-4 relative h-full flex items-center justify-center">
      {/* Smaller background gradient */}
      <div className="aspect-square w-7/10 lg:w-3/10 bg-gradient-to-b from-[#FF7E3F]/80 via-[#FF7E3F]/10 to-transparent absolute rounded-full" />

      <div className="z-10 mx-auto flex flex-col items-center max-w-xs">
        {/* Desktop image - smaller size */}
        <div className="hidden md:block">
          <Image
            src={image.src}
            alt={image.alt}
            className="object-contain size-48"
          />
        </div>

        {/* Mobile image - smaller size */}
        <div className="block md:hidden aspect-square w-[35vw] relative">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
          />
        </div>

        <div className="text-center mt-3">
          <p className="text-2xl md:text-3xl font-semibold">{name}</p>
          <p className="text-sm md:text-base mt-2">{description}</p>
          <p className="text-site-rust-orange text-sm md:text-base mt-2">
            {ingredients.join(" • ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignatureDrinkQuizResult;
