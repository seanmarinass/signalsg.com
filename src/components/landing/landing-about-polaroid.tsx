import Image, { StaticImageData } from "next/image";

interface LandingAboutPolaroidProps {
  src: StaticImageData;
  alt: string;
  text: string;
}

const LandingAboutPolaroid = ({
  src,
  alt,
  text,
}: LandingAboutPolaroidProps) => {
  return (
    <div className="bg-site-light-cream p-4 h-[33vh] lg:h-[50vh] aspect-[4/5] flex flex-col">
      <div className="w-full aspect-square relative">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <p className="text-center font-bebas font-bold md:text-3xl xl:text-4xl text-site-dark-brown">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LandingAboutPolaroid;
