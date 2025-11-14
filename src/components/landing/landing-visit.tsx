const LandingVisit = () => {
  return (
    <div className="px-5 py-20" id="visit">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-site-muted font-light md:text-2xl">
          03. 방문 | Visit
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 opacity-90">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8248993994553!2d103.84123641264192!3d1.2786059987038667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190012379125%3A0xabeb887c851b0ce3!2sSIGNAL!5e0!3m2!1sen!2ssg!4v1763114013719!5m2!1sen!2ssg"
              className="w-full h-96 md:h-[600px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-4">
            <p className="text-2xl md:text-4xl">Visit Signal</p>

            <div className="gap-8 flex flex-col">
              <div className="text-base md:text-lg font-light">
                <h3 className="text-site-muted mb-2 w-fit inline-flex pb-1 border-b border-site-muted">
                  Location
                </h3>
                <p>76 Tanjong Pagar Road,</p>
                <p>Singapore 088497</p>
              </div>

              <div className="text-base md:text-lg font-light">
                <h3 className="text-site-muted mb-2 w-fit inline-flex pb-1 border-b border-site-muted">
                  Opening Hours
                </h3>
                <p>Mon - Sun</p>
                <p>6:30pm - 12:00am</p>
              </div>

              <div className="text-base md:text-lg font-light">
                <h3 className="text-site-muted mb-2 w-fit inline-flex pb-1 border-b border-site-muted">
                  Contact Us
                </h3>
                <p>+65 9899 0742</p>
                <p>signalsg@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingVisit;
