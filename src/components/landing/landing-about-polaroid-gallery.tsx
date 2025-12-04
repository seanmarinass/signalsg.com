import LandingAboutPolaroid from "./landing-about-polaroid";

import BarViewImage from "@/assets/images/bar-view.webp";
import DrinkCheersImage from "@/assets/images/drink-cheers.webp";
import BarFrontWithManImage from "@/assets/images/bar-front-with-man.webp";
import BarFrontWithLadyImage from "@/assets/images/side-bar-with-lady.webp";
import AlcoholShelfImage from "@/assets/images/alcohol-shelf.webp";

const POLAROIDS = [
  {
    src: DrinkCheersImage,
    alt: "Drink cheers image",
  },
  {
    src: BarViewImage,
    alt: "Bar view image",
  },
  {
    src: BarFrontWithManImage,
    alt: "Bar front with man image",
  },
  {
    src: BarFrontWithLadyImage,
    alt: "Bar front with lady image",
  },
  {
    src: AlcoholShelfImage,
    alt: "Alcohol shelf image",
  },
];

const LandingAboutPolaroidGallery = () => {
  return (
    <div className="text-site-light-cream flex flex-col items-center justify-center overflow-x-clip">
      <div className="mt-4 flex w-fit gap-8">
        {POLAROIDS.map((polaroid, index) => (
          <LandingAboutPolaroid key={index} {...polaroid} />
        ))}
      </div>
    </div>
  );
};

export default LandingAboutPolaroidGallery;
