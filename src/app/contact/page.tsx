import ContactUsForm from "@/components/form-components/forms/contact-us-form";

const ContactPage = () => {
  return (
    <div className="px-5 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-bold">Contact Us</h1>
        <p className="text-3xl md:text-5xl text-site-muted">문의하기</p>

        <div className="mt-10">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex flex-col border-r h-full border-site-muted justify-center">
                <div className="inline-flex pb-6 border-b border-site-muted">
                  <h2 className="text-3xl font-medium">Book Now</h2>
                </div>

                <div className="inline-flex  py-6 border-b  border-site-muted">
                  <div className="grid 2xl:grid-cols-2 gap-4 2xl:gap-10 md:text-xl">
                    <div>
                      <p className="text-site-muted">Email</p>
                      <p>hello@email.com</p>
                    </div>
                    <div>
                      <p className="text-site-muted">Phone</p>
                      <p>+65 9999 9999</p>
                    </div>
                  </div>
                </div>

                <div className="inline-flex py-6 border-b border-site-muted">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-medium">Visit Us</h2>

                    <div className="text-xl">
                      <h3 className="text-site-muted">Location</h3>
                      <p>76 Tanjong Pagar Road,</p>
                      <p>Singapore 088497</p>
                    </div>

                    <div className="text-xl">
                      <h3 className="text-site-muted">Opening Hours</h3>
                      <p>Mon - Sun</p>
                      <p>6:30pm - 12:00am</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
