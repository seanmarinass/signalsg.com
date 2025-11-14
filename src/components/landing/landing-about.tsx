const LandingAbout = () => {
  return (
    <div className="px-5 py-10 md:py-20" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-site-muted mb-8 font-light md:text-2xl">
          01. 약 | About
        </h2>

        <div className="text-2xl md:text-4xl max-w-5xl space-y-4">
          <p>
            In the bustling streets of{" "}
            <span className="text-site-muted">Tanjong Pagar</span>, Signal
            whispers the secrets of{" "}
            <span className="text-site-muted">
              Seoul&apos;s after-dark culture.
            </span>
          </p>
          <p>
            Born from a Seoul native's passion for authentic Korean hospitality,
            this intimate sanctuary transforms every evening into a celebration
            of <span className="text-site-muted">genuine connection</span> and{" "}
            <span className="text-site-muted">timeless tradition.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
