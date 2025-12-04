import Image from "next/image";
import BarFrontImage from "@/assets/images/bar-front.webp";

const LandingHero = () => {
  return (
    <div className="h-[100vh] relative">
      <Image
        src={BarFrontImage}
        alt="Bar front image"
        fill
        quality={100}
        priority
        className="object-cover opacity-70 object-bottom"
      />
      <div className="mx-auto size-full relative z-10 flex flex-col md:p-24">
        <div className="text-center mt-auto">
          <h1 className="text-7xl md:text-9xl font-semibold">
            시그널
            <br />
            SIGNAL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
