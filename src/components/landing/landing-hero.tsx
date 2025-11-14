const LandingHero = () => {
  return (
    <div className="px-5 py-20">
      <div className="max-w-7xl mx-auto h-[30svh] lg:h-[50vh]">
        <div className="flex flex-col h-full justify-between gap-8">
          <div className="text-center">
            <p className="text-site-muted md:text-xl">Seoul • Singapore</p>
            <h1 className="text-7xl md:text-9xl font-bold">SIGNAL</h1>
            <p className="text-3xl md:text-5xl text-site-muted">시그널</p>
          </div>

          <div className="flex md:flex-row flex-col justify-between items-center md:text-xl gap-2 text-center md:text-left">
            <div className="w-full">
              <p className="text-site-muted">Authentic Korean bar</p>
              <p>Tanjong Pagar, Singapore</p>
            </div>

            <div className="w-full md:text-right">
              <p className="text-site-muted">Mon - Sun</p>
              <p>6:30pm - 12:00am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
