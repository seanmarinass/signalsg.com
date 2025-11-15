import BourbonWhiskySection from "@/components/menu/bourbon-whisky-section";
import ClassicCocktailsSection from "@/components/menu/classic-cocktails-section";
import FourCitiesCocktailsSection from "@/components/menu/four-cities-cocktails-section";
import HighballsSection from "@/components/menu/highballs-section";
import IrishWhiskeysSection from "@/components/menu/irish-whiskys-section";
import JamRepublicCocktailsSection from "@/components/menu/jam-republic-cocktails-section";
import JapaneseWhiskysSection from "@/components/menu/japanese-whiskys-section";
import ScotchSingleMaltWhiskysSection from "@/components/menu/scotch-single-malt-whiskys-section";

const MenuPage = () => {
  return (
    <div className="px-5 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-site-muted mb-8 font-light md:text-2xl">
          약 | Menu
        </h2>

        <div className="mb-16">
          <h3 className="col-span-full md:text-4xl text-2xl mb-4">Cocktails</h3>
          <div className="flex flex-col gap-8 md:gap-12">
            <FourCitiesCocktailsSection />
            <JamRepublicCocktailsSection />
            <ClassicCocktailsSection />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="col-span-full md:text-4xl text-2xl mb-4">Highballs</h3>
          <div className="flex flex-col gap-8 md:gap-12">
            <HighballsSection />
          </div>
        </div>

        <div>
          <h3 className="col-span-full md:text-4xl text-2xl mb-4">
            Whiskey & Spirits
          </h3>
          <div className="flex flex-col gap-8 md:gap-12">
            <BourbonWhiskySection />
            <JapaneseWhiskysSection />
            <ScotchSingleMaltWhiskysSection />
            <IrishWhiskeysSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
