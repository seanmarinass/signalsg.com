import LandingAboutPolaroidGallery from "../landing-about-polaroid-gallery";

const LandingAboutSection = () => {
  return (
    <section className="py-10 md:py-20 bg-site-dark-grey" id="about">
      <div className="max-w-7xl mx-auto text-center text-site-light-cream px-5">
        <h2 className="mb-8 font-light md:text-2xl">02. 약 | About</h2>

        <div className="text-xl md:text-3xl max-w-4xl space-y-4 mx-auto flex flex-col items-center justify-center">
          <p>
            Signal is an intimate Korean bar serving cozy comfort delights and
            city-inspired drinks in Tanjong Pagar, Singapore.
          </p>
          <p className="text-lg md:text-2xl max-w-xl font-extralight">
            Come for the atmosphere, stay for the company.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <LandingAboutPolaroidGallery />
      </div>
    </section>
  );
};

export default LandingAboutSection;
