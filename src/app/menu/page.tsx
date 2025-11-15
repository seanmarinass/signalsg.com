import { FOUR_CITIES_COCKTAILS } from "@/lib/data/menu.data";

const MenuPage = () => {
  return (
    <div className="px-5 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-site-muted mb-8 font-light md:text-2xl">
          약 | Menu
        </h2>

        <div className="flex flex-col gap-4">
          <h3 className="col-span-full md:text-4xl text-2xl">Cocktails</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <h4 className="col-span-full text-lg md:text-xl mb-4 font-extralight text-site-muted">
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

                  <div className="flex justify-end">
                    <p className="text-lg md:text-2xl font-medium text-site-muted">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
