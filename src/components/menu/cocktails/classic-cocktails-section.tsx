import { CLASSIC_COCKTAILS } from "@/lib/data/menu.data";

const ClassicCocktailsSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-4">
      <h4 className="col-span-full text-lg md:text-xl font-extralight text-site-muted">
        03 Classics
      </h4>
      {CLASSIC_COCKTAILS.map((item, index) => (
        <div
          className="px-2 py-8 inline-flex border-t border-site-muted"
          key={index}
        >
          <div className="grid grid-cols-4 gap-4 w-full">
            <div className="text-lg md:text-2xl col-span-3 space-y-2">
              <p>
                <span className="text-site-muted">{item.korean}</span> |{" "}
                {item.name}
              </p>
              <p className="text-sm md:text-xl w-full font-light">
                {item.description}
              </p>
            </div>

            <div className="flex justify-end text-right">
              <p className="text-lg md:text-2xl font-medium text-site-muted">
                ${item.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ClassicCocktailsSection;
