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
          {/* Mobile Layout */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[5/3]">
              <Image
                src={BarChairImage}
                alt=""
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src={BarImage}
                alt=""
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src={DrinkImage}
                alt=""
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="col-span-2 relative aspect-[5/3]">
              <Image
                src={MainImage}
                alt=""
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="col-span-2 relative aspect-square">
              <Image
                src={FoodImage}
                alt=""
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          {/* Desktop Layout - Elegant Grid */}
          <div className="hidden md:grid grid-cols-3 grid-rows-7 gap-8 w-full h-[1000px] max-w-6xl">
            {/* Large food image - top left, spans 2 cols */}
            <div className="col-span-2 row-span-2 relative">
              <Image src={FoodImage} alt="" fill className="object-cover" />
            </div>

            {/* Portrait bar image - top right, spans 2 rows */}
            <div className="col-span-1 row-span-4 relative">
              <Image src={BarImage} alt="" fill className="object-cover" />
            </div>

            {/* Bar chair image - middle left */}
            <div className="col-span-1 row-span-2 relative">
              <Image src={BarChairImage} alt="" fill className="object-cover" />
            </div>

            {/* Drink image - middle center */}
            <div className="col-span-1 row-span-2 relative">
              <Image src={DrinkImage} alt="" fill className="object-cover" />
            </div>

            {/* Large main image - bottom, spans 3 cols */}
            <div className="col-span-3 row-span-3 relative">
              <Image src={MainImage} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
