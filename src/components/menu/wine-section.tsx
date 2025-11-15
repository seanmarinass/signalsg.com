import { WINES } from "@/lib/data/menu.data";

const WinesSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-4">
      {WINES.map((item, index) => (
        <div
          className="px-2 py-8 inline-flex border-t border-site-muted"
          key={index}
        >
          <div className="grid grid-cols-4 gap-4 w-full">
            <p className="text-lg md:text-2xl col-span-3">{item.name}</p>

            <p className="text-lg md:text-2xl font-medium text-site-muted w-full text-right">
              ${item.price}
              {item.bottlePrice && <span> / ${item.bottlePrice}</span>}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WinesSection;
