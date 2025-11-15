import { FOUR_CITIES_COCKTAILS } from "@/lib/data/menu.data";

const FourCitiesCocktailsSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-4">
      <h4 className="col-span-full text-lg md:text-xl font-extralight text-site-muted">
        01. Four Cities in Korea. One Journey in Signal
      </h4>
      {FOUR_CITIES_COCKTAILS.map((item, index) => (
        <div
          className="px-2 py-8 inline-flex border-t border-site-muted"
          key={index}
        >
          <div className="grid grid-cols-4 gap-4">
            <div className="text-lg md:text-2xl col-span-3 space-y-2">
              <p>
                <span className="text-site-muted">{item.korean}</span> |{" "}
                {item.name}
              </p>
              <p className="text-sm md:text-xl w-full font-light">
                {item.description}
              </p>
            </div>

            <p className="text-lg md:text-2xl font-medium text-site-muted text-right">
              ${item.price}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FourCitiesCocktailsSection;
