import Image, { StaticImageData } from "next/image";

interface LandingAboutPolaroidProps {
  src: StaticImageData;
  alt: string;
}

const LandingAboutPolaroid = ({ src, alt }: LandingAboutPolaroidProps) => {
  return (
    <div className="bg-site-light-cream p-4 h-[33vh] lg:h-[50vh] aspect-[4/5]">
      <div className="w-full aspect-square relative">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
};

export default LandingAboutPolaroid;
