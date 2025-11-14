import ContactUsForm from "@/components/form-components/forms/contact-us-form";

const ContactPage = () => {
  return (
    <div className="px-5 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-bold">Contact Us</h1>
        <p className="text-3xl md:text-5xl text-site-muted">문의하기</p>

        <div className="mt-10">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
