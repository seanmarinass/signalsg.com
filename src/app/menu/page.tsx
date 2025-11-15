import BourbonWhiskySection from "@/components/menu/whiskys/bourbon-whisky-section";
import ClassicCocktailsSection from "@/components/menu/cocktails/classic-cocktails-section";
import FourCitiesCocktailsSection from "@/components/menu/cocktails/four-cities-cocktails-section";
import HighballsSection from "@/components/menu/highballs-section";
import IrishWhiskeysSection from "@/components/menu/whiskys/irish-whiskys-section";
import JamRepublicCocktailsSection from "@/components/menu/cocktails/jam-republic-cocktails-section";
import JapaneseWhiskysSection from "@/components/menu/whiskys/japanese-whiskys-section";
import ScotchSingleMaltWhiskysSection from "@/components/menu/whiskys/scotch-single-malt-whiskys-section";
import CognacBrandySection from "@/components/menu/cognac-brandy-section";
import VodkasSection from "@/components/menu/vodkas-section";
import GinsSection from "@/components/menu/gin-section";
import RumsSection from "@/components/menu/rums-section";
import TequilaMezcalSection from "@/components/menu/tequila-mezcal-section";
import ChampagneSection from "@/components/menu/champage-section";
import WinesSection from "@/components/menu/wine-section";

const MenuPage = () => {
  return (
    <div className="px-5 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-site-muted mb-8 font-light md:text-2xl">
          약 | Menu
        </h2>

        <div className="flex flex-col gap-16">
          <div>
            <h3 className="md:text-4xl text-2xl mb-4">Cocktails</h3>
            <div className="flex flex-col gap-8 md:gap-12">
              <FourCitiesCocktailsSection />
              <JamRepublicCocktailsSection />
              <ClassicCocktailsSection />
            </div>
          </div>

          <div>
            <h3 className="md:text-4xl text-2xl mb-4">Highballs</h3>
            <div className="flex flex-col gap-8 md:gap-12">
              <HighballsSection />
            </div>
          </div>

          <div>
            <h3 className="md:text-4xl text-2xl mb-4">Whiskey & Spirits</h3>
            <div className="flex flex-col gap-8 md:gap-12">
              <BourbonWhiskySection />
              <JapaneseWhiskysSection />
              <ScotchSingleMaltWhiskysSection />
              <IrishWhiskeysSection />
            </div>
          </div>

          <div>
            <div className="space-y-4 mb-4">
              <h3 className="md:text-4xl text-2xl">Cognac & Brandy</h3>
              <p className="text-lg md:text-xl font-extralight text-site-muted">
                40ml / Bottle
              </p>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
              <CognacBrandySection />
            </div>
          </div>

          <div>
            <div className="space-y-4 mb-4">
              <h3 className="md:text-4xl text-2xl">Vodka</h3>
              <p className="text-lg md:text-xl font-extralight text-site-muted">
                40ml / Bottle
              </p>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
              <VodkasSection />
            </div>
          </div>

          <div>
            <div className="space-y-4 mb-4">
              <h3 className="md:text-4xl text-2xl">Gin</h3>
              <p className="text-lg md:text-xl font-extralight text-site-muted">
                40ml / Bottle
              </p>
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              <GinsSection />
            </div>
          </div>

          <div>
            <div className="space-y-4 mb-4">
              <h3 className="md:text-4xl text-2xl">Rum</h3>
              <p className="text-lg md:text-xl font-extralight text-site-muted">
                40ml / Bottle
              </p>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
              <RumsSection />
            </div>
          </div>

          <div>
            <div className="space-y-4 mb-4">
              <h3 className="md:text-4xl text-2xl">Tequila & Mezcal</h3>
              <p className="text-lg md:text-xl font-extralight text-site-muted">
                40ml / Bottle
              </p>
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              <TequilaMezcalSection />
            </div>
          </div>

          <div>
            <div className="space-y-4 mb-4">
              <h3 className="md:text-4xl text-2xl">Champagne</h3>
              <p className="text-lg md:text-xl font-extralight text-site-muted">
                Glass / Bottle
              </p>
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              <ChampagneSection />
            </div>
          </div>

          <div>
            <div className="space-y-4 mb-4">
              <h3 className="md:text-4xl text-2xl">Wine</h3>
              <p className="text-lg md:text-xl font-extralight text-site-muted">
                Glass / Bottle
              </p>
            </div>
            <div className="flex flex-col gap-8 md:gap-12">
              <WinesSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
