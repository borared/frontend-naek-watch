import ContactHeader from "../components/contact/ContactHeader";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-black">
            <ContactHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;