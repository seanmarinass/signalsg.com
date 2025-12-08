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
    text: "Friday night feels",
  },
  {
    src: BarViewImage,
    alt: "Bar view image",
    text: "Our usual table",
  },
  {
    src: BarFrontWithManImage,
    alt: "Bar front with man image",
    text: "Best bartender ever",
  },
  {
    src: BarFrontWithLadyImage,
    alt: "Bar front with lady image",
    text: "Mixing something up",
  },
  {
    src: AlcoholShelfImage,
    alt: "Alcohol shelf image",
    text: "Pick your poison",
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
