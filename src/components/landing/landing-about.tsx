import Image from "next/image";
import BarChairImage from "@/assets/images/signal-bar-chairs.png";
import MainImage from "@/assets/images/signal-main.png";
import BarImage from "@/assets/images/signal-bar.png";
import FoodImage from "@/assets/images/signal-food.png";
import DrinkImage from "@/assets/images/signal-orange-drink.png";

const LandingAbout = () => {
  return (
    <div className="px-5 py-10 md:py-20" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-site-muted mb-8 font-light md:text-2xl">
          01. 약 | About
        </h2>

        <div className="text-3xl md:text-5xl max-w-5xl space-y-4">
          <p>
            In the bustling streets of{" "}
            <span className="text-site-muted">Tanjong Pagar</span>, Signal
            whispers the secrets of{" "}
            <span className="text-site-muted">
              Seoul&apos;s after-dark culture.
            </span>
          </p>
          <p>
            Born from a Seoul native&apos;s passion for authentic Korean
            hospitality, this intimate sanctuary transforms every evening into a
            celebration of{" "}
            <span className="text-site-muted">genuine connection</span> and{" "}
            <span className="text-site-muted">timeless tradition.</span>
          </p>
        </div>

        <div className="relative mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* First row */}
            <div className="col-span-2 md:col-span-2 relative aspect-[5/3]">
              <Image src={BarChairImage} alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] md:-mt-4">
              <Image src={BarImage} alt="" fill className="object-cover" />
            </div>

            {/* Second row - MainImage offset */}
            <div className="md:col-start-1 md:col-span-2 col-span-2 relative aspect-[5/3] md:ml-16 md:mt-8">
              <Image src={MainImage} alt="" fill className="object-cover" />
            </div>

            {/* Third row - Right side images */}
            <div className="md:col-start-3 relative aspect-[3/4] md:mt-24 md:mr-8">
              <Image src={DrinkImage} alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-square md:mt-18">
              <Image src={FoodImage} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
